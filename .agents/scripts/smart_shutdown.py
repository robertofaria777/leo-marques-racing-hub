import subprocess
import re
import sys

def get_pid_on_port(port):
    """Returns the PID of the process listening on the given port."""
    try:
        # Run netstat to find the process
        output = subprocess.check_output(f"netstat -ano | findstr :{port}", shell=True).decode()
        lines = output.strip().split('\n')
        for line in lines:
            parts = re.split(r'\s+', line.strip())
            # parts[1] is Local Address, parts[-1] is PID (usually)
            # Look for LISTENING state
            if "LISTENING" in line:
                return parts[-1]
    except subprocess.CalledProcessError:
        return None
    except Exception as e:
        print(f"Error checking port {port}: {e}")
        return None

def kill_process(pid):
    """Kills a process by PID."""
    if not pid:
        return
    try:
        print(f"Killing process with PID {pid}...")
        subprocess.run(f"taskkill /F /PID {pid}", shell=True, check=True)
        print(f"Successfully killed PID {pid}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to kill PID {pid}: {e}")

def main():
    print("Initiating Smart Shutdown Protocol...")
    
    # Ports to check and clean up
    target_ports = [8080, 8081, 3000, 5173, 54321]
    
    found_any = False
    for port in target_ports:
        print(f"Checking port {port}...")
        pid = get_pid_on_port(port)
        if pid:
            print(f"Found process {pid} on port {port}")
            kill_process(pid)
            found_any = True
        else:
            print(f"No active process found on port {port}")
            
    if found_any:
        print("\nShutdown complete. Environment is clean.")
    else:
        print("\nNo active development servers were found to shut down.")

if __name__ == "__main__":
    main()
