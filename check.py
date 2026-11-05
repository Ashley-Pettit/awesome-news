import subprocess, sys
subprocess.run([sys.executable, "-m", "pip", "install", "-q", "-r", "requirements.txt"], check=False)
r = subprocess.run([sys.executable, "community.py", "out"], capture_output=True, text=True)
print(r.stdout[-3000:]); print(r.stderr[-3000:])
