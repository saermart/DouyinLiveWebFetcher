# -*- coding: utf-8 -*-
"""Runtime hook for PyInstaller to patch py_mini_racer DLL path."""

import sys
import os

if hasattr(sys, '_MEIPASS'):
    import py_mini_racer._dll
    
    _mei_path = os.path.join(sys._MEIPASS, 'py_mini_racer')
    original_get_dll_path = getattr(py_mini_racer._dll, '_get_dll_path', None)
    
    def patched_get_dll_path():
        return os.path.join(_mei_path, 'mini_racer.dll')
    
    py_mini_racer._dll._get_dll_path = patched_get_dll_path