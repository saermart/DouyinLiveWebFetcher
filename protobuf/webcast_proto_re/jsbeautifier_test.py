import sys

import jsbeautifier as jsb

file = sys.argv[1]

opts = jsb.BeautifierOptions({
    "indent_size": 4,
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
with open(file, 'r', encoding='utf8') as f:
    text = f.read()

text = text.replace('),','),\n').replace('},','},\n')
res = jsb.beautify(text, opts)

with open(f"formatted.{file}.js", 'w', encoding='utf8') as f:
    f.write(res)
