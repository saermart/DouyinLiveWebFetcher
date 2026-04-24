# -*- mode: python ; coding: utf-8 -*-
"""PyInstaller spec for DouyinLiveWebFetcher GUI."""

import os
from pathlib import Path

project_root = Path(r'C:\Users\Administrator\Documents\GitHub\DouyinLiveWebFetcher-Reborn')
mini_racer_dir = Path(r'C:\Users\Administrator\AppData\Roaming\Python\Python314\site-packages\py_mini_racer')

block_cipher = None

a = Analysis(
    [str(project_root / 'gui' / 'app.py')],
    pathex=[str(project_root)],
    binaries=[
        (str(mini_racer_dir / 'mini_racer.dll'), '.'),
    ],
    datas=[
        (str(project_root / 'gui' / 'static'), 'gui/static'),
        (str(project_root / 'sign.js'), '.'),
        (str(project_root / 'sign_v0.js'), '.'),
        (str(project_root / 'a_bogus.js'), '.'),
        (str(project_root / 'webmssdk.js'), '.'),
        (str(mini_racer_dir / 'icudtl.dat'), '.'),
        (str(mini_racer_dir / 'snapshot_blob.bin'), '.'),
    ],
    hiddenimports=[
        'gui', 'gui.api', 'gui.config', 'liveMan', 'protobuf', 'protobuf.douyin',
        'betterproto', 'websocket', 'websocket._app', 'websocket._core',
        'websocket._exceptions', 'websocket._socket', 'websocket._url',
        'websocket._handshake', 'websocket._http', 'websocket._logging',
        'websocket._utils', 'websocket._abnf', 'PyQt6', 'PyQt6.QtWebEngineWidgets',
        'PyQt6.QtWebChannel', 'PyQt6.QtWebEngineCore', 'PyQt6.sip', 'execjs',
        'mini_racer', 'py_mini_racer', 'py_mini_racer._dll', 'py_mini_racer._mini_racer',
    ],
    hookspath=[], hooksconfig={}, runtime_hooks=[str(project_root / 'runtime_hook.py')],
    excludes=[], win_no_prefer_redirect=False, win_private_assemblies=False,
    cipher=block_cipher, noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz, a.scripts, a.binaries, a.zipfiles, a.datas, [], name='DouyinLiveMonitor',
    debug=False, bootloader_ignore_signals=False, strip=False, upx=True,
    upx_exclude=[], runtime_tmpdir=None, console=False,
    disable_windowed_traceback=False, argv_emulation=False, target_arch=None,
    codesign_identity=None, entitlements_file=None, icon=None,
)