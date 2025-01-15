#from PIL import Image
import os
import subprocess

# Expand the home directory path
home_dir = os.path.expanduser("~")

# Paths to your Electron and app files
electron_path = os.path.join(home_dir, ".local/share/Zalo/electron-v22.3.27-linux-x64/electron")
app_path = os.path.join(home_dir, ".local/share/Zalo/Zalo/app/")
icon_path = os.path.join(home_dir, ".local/share/Zalo/assets/Zalo.png")

# Start the Zalo application
process = subprocess.Popen([electron_path, app_path])

def option1():
    os.system(f'"{electron_path}" "{app_path}"')

def exit_action(icon, item):
    process.kill()
    icon.stop()

