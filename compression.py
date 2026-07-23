import sys
import shutil

if sys.version_info >= (3, 14):
    from compression import zstd
else:
    from backports import zstd


def compress_file(input_file: str, output_file: str, **kwargs) -> None:
    with open(input_file, "rb") as fin, zstd.open(output_file, "wb", **kwargs) as fout:
        shutil.copyfileobj(fin, fout)


def decompress_file(input_file: str, output_file: str) -> None:
    with zstd.open(input_file, "rb") as fin, open(output_file, "wb") as fout:
        shutil.copyfileobj(fin, fout)
