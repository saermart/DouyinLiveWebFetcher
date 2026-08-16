class CascadeWriter:
    def __init__(self, *files):
        self._files = files

    def write(self, data):
        for f in self._files:
            f.write(data)

    def flush(self):
        for f in self._files:
            f.flush()
