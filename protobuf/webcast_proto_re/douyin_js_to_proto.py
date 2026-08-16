#!/usr/bin/env python3
'''
# 2026-09-05
rm -rf js/
wget -cP js/ https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/ies/douyin_web/async/transport-schema-im.ca057845.js
wget -cP js/ https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/ies/douyin_web/async/live-schema-im.ddd0a844.js
wget -cP js/ https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/ies/douyin_web/async/ecom-schema-im.709477ba.js

python3 douyin_js_to_proto.py js/*.js
'''
# See Also
# https://github.com/Remember-the-past/douyin_proto
# https://github.com/scx567888/live-room-watcher/blob/master/src/main/proto/douyin_hack/webcast/
# https://github.com/HaoDong108/DouyinBarrageGrab/blob/main/BarrageGrab/proto/

from pprint import pprint
import shutil
from typing import Dict, List, Set, Tuple
from dataclasses import dataclass, field
import collections
from math import ceil
from time import time
import os
import re
import sys

PROJECT_NAME = 'douyin'

SCALAR_TYPES = {
    "int32": "int32",
    "int64": "int64",
    "int64String": "int64",
    "uint32": "uint32",
    "uint64": "uint64",
    "uint64String": "uint64",
    # https://protobuf.dev/programming-guides/proto3/#scalar
    # sint32
    # sint64
    # fixed32
    # fixed64
    # sfixed32
    # sfixed64
    "float": "float",
    "double": "double",
    "bool": "bool",
    "string": "string",
    "bytes": "bytes",
}


def js_type_to_proto(t: str, root='', quolified=True):
    """
    js 类型 -> proto 类型

    r.webcast.data.PreviewExposeData.Meta.Host.decode
        -> data.PreviewExposeData.Meta.Host
    e.int32
        -> int32
    """
    if t.startswith('map<') and t.endswith('>'):  # map<string,string>
        key_type, value_type = t[4:-1].split(',', 1)
        return 'map<' + js_type_to_proto(key_type, root=root) + ',' + js_type_to_proto(value_type, root=root) + '>'

    parts = t.split(".")
    if parts[-1] in SCALAR_TYPES:
        return SCALAR_TYPES[parts[-1]]
    # 去掉: r.
    if len(parts[0]) == 1:
        parts = parts[1:]
    if root:
        parts.insert(0, root)
    return ".".join(parts) if quolified else parts[-1]


def parent_of(n: str):
    return '.'.join(n.split('.')[:-1])


@dataclass
class Oneof:
    name: str = ""
    fields: list = field(default_factory=list)


@dataclass
class Field:
    number: int = 0
    name: str = ''
    full_type: str = ''
    rule: int = 0


class Message:
    Oneof = collections.namedtuple('Oneof', ['name', 'fields'])

    def __init__(self, full_name: str, is_enum=False):
        self.is_enum = is_enum
        self.full_name = full_name
        self.name = full_name.split(".")[-1]
        self.namespace = ''
        self.parent = parent_of(full_name)
        self.fields: List['Field'] = []
        self.oneofs: List['Oneof'] = []
        self.children: List[str] = []


def parse(root: str, text: str) -> Tuple[List, Dict[str, 'Message']]:
    referenced_names = set()  # full name of all messages referenced by fields

    messages: Dict[str, 'Message'] = {}
    stack = [(0, root)]
    msg = None
    for line in text.splitlines():
        indent = len(line) - len(line.lstrip())
        # message name or namespace name
        #     e.ChatMessage
        m = re.match(r"\s*\w\.(\w+)", line)
        if m:
            name = m.group(1)
            while stack and indent <= stack[-1][0]:
                stack.pop()
            if stack:
                full_name = stack[-1][1] + "." + name
            else:
                full_name = name

            if full_name in messages:
                # raise Exception(f"Duplicate message name: {full_name}")
                print(f"Duplicate message name: {full_name}")

            msg = Message(full_name, is_enum=' enum ' in line)
            messages[full_name] = msg

            if msg.parent and msg.parent in messages:
                messages[msg.parent].children.append(full_name)

            if msg.is_enum:
                line = line[line.index(' enum ') + 6:]
                for name, value in re.findall(r"(\w+) = (\d+),", line):
                    msg.fields.append(Field(name=name, number=value))

            stack.append((indent, full_name))
            continue

        if msg is None:
            continue

        # message fields
        #     1: ["user_name", e.string, 0]
        #     2: ["alternative_effect_config", map<e.uint32,r.webcast.data.MemberMessage.EffectConfig>, 0]
        m = re.search(
            r'([0-9e]+):\["([^"]+)",(.+),([0-9e]+)\]', line.replace(' ', ''))
        if m:
            if msg.name in ['decode', 'encode'] and len(msg.fields) == 0:
                parent = msg.parent
                messages.pop(parent + '.' + 'encode', None)
                messages.pop(parent + '.' + 'decode', None)
                msg = messages[parent]
                msg.children = [c for c in msg.children if c != parent + '.' + 'encode']
                msg.children = [c for c in msg.children if c != parent + '.' + 'decode']

            full_type = js_type_to_proto(m.group(3), root=root).removesuffix('.decode')
            referenced_names.add(full_type)

            msg.fields.append(Field(
                number=int(float(m.group(1))),
                name=m.group(2),
                full_type=full_type,
                rule=int(m.group(4)),
            ))
            continue

        # oneof fields
        words = line.split()
        if words[0] == 'oneof':
            msg.oneofs.append(
                Oneof(name=words[1], fields=words[2:])
            )
            continue

    namespaces = [''] + [
        n for n, m in messages.items()
        if len(m.fields) == 0 and m.full_name not in referenced_names
    ]
    messages = {
        n: m for n, m in messages.items()
        if m.full_name not in namespaces
    }
    for m in messages.values():
        m.children = [c for c in m.children if c not in namespaces]

    return namespaces, messages


def compose_field(f: Field):
    repeated = "repeated " if (f.rule >> 1) else ""
    packed = " [packed=true]" if (f.rule >> 2) else ""
    return f'{repeated}{f.full_type} {f.name} = {f.number}{packed}'


def emit_message(messages: Dict[str, 'Message'], name: str, level=0):
    msg: Message = messages[name]
    pad = "  " * level
    out = []
    if msg.is_enum:
        out.append(pad + 'enum ' + msg.name + ' {')
        for f in sorted(msg.fields, key=lambda f: f.number):
            out.append(f"{pad}  {f.name} = {f.number};")
    else:
        out.append(pad + 'message ' + msg.name + ' {')
        all_oneof_fields = [x for o in msg.oneofs for x in o.fields]
        # fields
        fields = [f for f in msg.fields if f.name not in all_oneof_fields]
        for f in sorted(fields, key=lambda m: m.number):
            typ = compose_field(f)
            out.append(f"{pad}  {compose_field(f)};")

        # oneof fields
        for o in msg.oneofs:
            out.append(f"{pad}  oneof {o.name} {{")
            fields = [f for f in msg.fields if f.name in o.fields]
            for f in sorted(fields, key=lambda m: m.number):
                out.append(f"{pad}    {compose_field(f)};")
            out.append(f"{pad}  }}")

    # nested messages
    for child in msg.children:
        out.append("")
        out.extend(emit_message(messages, child, level + 1))

    out.append(pad + "}")
    return out


def gather_referenced_namespaces(namespaces, messages, n: str, result: Set):
    m: Message = messages[n]
    if m.is_enum:
        return
    for f in m.fields:
        ftype = f.full_type
        parent_name = parent_of(ftype)
        if parent_name in namespaces and parent_name != '':
            result.add(parent_name)
    for c in m.children:
        gather_referenced_namespaces(namespaces, messages, c, result)


def generate_proto(root, text, output_dir='../proto') -> List[str]:
    namespaces, messages = parse(root, text)

    root_message_names = []
    for m in messages.values():
        if m.parent in namespaces:
            m.namespace = m.parent
            root_message_names.append(m.full_name)

    # populate namepace to nested messages
    def namespace_of(m: Message):
        if m.parent in namespaces:
            return m.namespace
        return namespace_of(messages[m.parent])
    for m in messages.values():
        if m.parent != '':
            m.namespace = namespace_of(m)

    root_message_names = sorted(root_message_names)
    root_message_names_by_ns = {}  # ns -> message names
    for n in root_message_names:
        ns = messages[n].namespace
        if not root_message_names_by_ns.get(ns):
            root_message_names_by_ns[ns] = []
        if n not in root_message_names_by_ns[ns]:
            root_message_names_by_ns[ns].append(n)

    # pprint(root_message_names_by_ns)

    dependencies = {}  # do we have to import other namespaces into this namespace ?
    for ns in root_message_names_by_ns:
        if not dependencies.get(ns):
            dependencies[ns] = set()
        for n in root_message_names_by_ns[ns]:
            gather_referenced_namespaces(namespaces, messages, n, dependencies[ns])
        dependencies[ns] = [ns_ for ns_ in dependencies[ns] if ns_ != ns]

    # remove namespace quolification for readability
    for m in messages.values():
        for f in m.fields:
            # and parent message name quolification
            if f.full_type.startswith('map<'):
                key_type, value_type = f.full_type[4:-1].split(',')
                value_type = value_type.removeprefix(m.namespace + '.')
                value_type = value_type.removeprefix(m.name + '.')
                f.full_type = f'map<{key_type},{value_type}>'
            else:
                f.full_type = f.full_type.removeprefix(m.namespace + '.')
                f.full_type = f.full_type.removeprefix(m.name + '.')

    files = {}

    for n in sorted(root_message_names):
        ns = messages[n].namespace
        parts = ns.replace('.', '/')
        fname = f'{output_dir}/{parts}.proto'
        if not files.get(fname):
            files[fname] = [
                'syntax = "proto3";',
                f'package {ns};',  # treat root as top level namespace name
                *[
                    f"import '{ns.replace('.', '/')}.proto';" for ns in dependencies[ns]
                ],
                '',
            ]
        files[fname].extend(emit_message(messages, n))
        files[fname].append("")

    for f in files:
        os.makedirs(os.path.dirname(f), exist_ok=True)
        write_stderr(f"Writing {f}\n")
        write_file(f, '\n'.join(files[f]))

    return list(files.keys())


def read_file(file_path: str) -> str:
    with open(file_path, 'r', encoding="utf8") as f:
        return f.read()


def write_file(file_path: str, text: str, append=False) -> None:
    with open(file_path, 'a' if append else 'w', encoding='utf8') as f:
        f.write(text)


def write_stderr(text: str):
    sys.stderr.write(text)
    sys.stderr.flush()


def format_javascript(text: str, indent=4) -> str:
    start_time = time()
    if len(text) > 1024 * 1024:
        write_stderr(f"Formatting JavaScript text of length {int(len(text)/1024)} KiB, this may take some time.\n")

    import jsbeautifier as jsb
    opts = jsb.BeautifierOptions({
        "indent_size": indent,
        "indent_char": ' ',
        "preserve_newlines": False,
        "end_with_newline": True,
        "max_char": 32768,
        # ["collapse", "expand", "end-expand", "none", "preserve-inline"]
        "brace_style": 'collapse',
        "break_chained_methods": False,
        "space_in_paren": False,
        "keep_array_indentation": True,
    })
    text = text.replace('),', '),\n').replace('},', '},\n')
    out = jsb.beautify(text, opts)

    if time() - start_time > 3:
        elapsed = time() - start_time
        write_stderr(f"  -- took {ceil(elapsed)}s. {round(len(text)/1024/elapsed)}KiB/s\n")
    return out


def extract_proto_related_js_snippet(text: str) -> Tuple[str, str]:
    def extract_number(s: str) -> str:
        # case N:
        m = re.search(r"case\s+([0-9e]+):", s)
        if m:
            return m.group(1)
        # (...)
        m = re.match(r"^[^(]+\((.*)\)[^)]+$", s)
        if not m:
            return ""

        expr = m.group(1)
        expr = re.sub(r"\s", "", expr)
        parts = re.split(r"===?", expr)

        if len(parts) > 0 and re.fullmatch(r"[0-9e]+", parts[0]):
            return parts[0]

        if len(parts) > 1 and re.fullmatch(r"[0-9e]+", parts[1]):
            return parts[1]

        return ""

    result: List[str] = []
    indent = ""

    lines = text.splitlines()

    # find pbjs --root name
    root = 'default'
    for i, line in enumerate(lines[:500]):
        if line.count('.roots.') == 2:
            m = re.search(r'\.roots\.(\w+)', line)
            if m:
                root = m.group(1)
                break
    if i == 500 - 1:
        raise Exception("Not a recognized structure of code: not found root name.")
    lines = lines[i:]

    for i, line in enumerate(lines):
        if '.fromBits' in line and '.fromBits' in lines[i + 1]:
            break
    if i == len(lines) - 1:
        raise Exception("Not a recognized structure of code.")
    lines = lines[i:]

    for i, line in enumerate(lines):
        # top level namespace name
        if len(line) - len(line.lstrip()) == 12:
            m = re.search('( \w\.\w+) = ', line)
            if m:
                result.append(m.group(1))
        # message name, field definition
        elif re.match(
            r'''^\s+((return )?[a-z]\.\w+ = function|[0-9e]+: \[".+|\w\.\w+ === \w\.emptyObject|Object.defineProperty)''',
            line,
        ):
            # field of type map<>
            if '.emptyObject' in line:
                field = line.split()[0].split('.')[1]
                ftype = 'map<>'

                snippet_lines = lines[i:i + 15]
                for j, l in enumerate(snippet_lines):
                    if ' switch ' in l and ' case 1:' in snippet_lines[j + 1]:
                        key_type = re.search(
                            '[\w\.]+', snippet_lines[j + 2].split()[2]).group(0)
                        value_type = re.search(
                            '[\w\.]+', snippet_lines[j + 5].split()[2]).group(0).removesuffix('.decode')
                        ftype = f"map<{key_type},{value_type}>"
                        break

                result.append(
                    f'''{indent}{extract_number(lines[i-1])}: ["{field}", {ftype}, 0]''')

            # oneof
            elif ('Object.defineProperty' in line) and ('.oneOfGetter' in lines[i + 1]) and ('.oneOfSetter' in lines[i + 2]):
                field = line.split('"')[1]
                oneof_fields = re.findall(r'"(\w+)"', lines[i + 1])
                result.append(
                    f"{indent}    oneof {field} {' '.join(oneof_fields)}")

            # message name, plain field
            else:
                line = re.sub(r" = function.*$", "", line)
                line = re.sub(r"return ", "    ", line)
                result.append(line)

            # enum definition
            enum_elements = re.findall(
                r'\w\[\w\[\d+\] = "(\w+)"\] = (\d+)', lines[i + 3])

            if ' return ' in lines[i + 3] and len(enum_elements) > 0:
                result[-1] += " enum " + " ".join(
                    [f"{x[0]} = {x[1]}," for x in enum_elements])

            # indentation
            m = re.match(r"^\s+", line)
            if m:
                indent = m.group(0)

    return root, "\n".join(result)


def compile_proto(files: str, include_path='.'):
    write_stderr(f"Compiling proto files\n")

    from subprocess import run

    start_time = time()

    output_path = f'../{PROJECT_NAME}'
    os.makedirs(output_path, exist_ok=True)
    run(
        [
            "protoc",
            "-I", include_path,
            f"--python_out={output_path}",
            *files,
        ],
        check=True,
    )
    run(
        [
            "protol",
            "--in-place",
            "--create-package",
            f"--python-out={output_path}",
            "protoc",
            f"--proto-path={include_path}",
            *files,
        ],
        check=True,
    )
    write_stderr(f"  -- took {ceil(time() - start_time)}s\n")


def main():
    shutil.rmtree('../proto', ignore_errors=True)
    shutil.rmtree(f'../{PROJECT_NAME}', ignore_errors=True)

    files = []
    for f in sys.argv[1:]:
        basename = os.path.basename(f)
        text = read_file(f)
        text = format_javascript(text, indent=4)
        write_file(f"formatted.{basename}", text)

        root, text = extract_proto_related_js_snippet(text)

        write_file(f'snippet.{basename}', text)

        files += generate_proto(root, text, output_dir='../proto')

    compile_proto(files, include_path='../proto')


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} compiled-proto.js...")
        sys.exit(1)

    main()
