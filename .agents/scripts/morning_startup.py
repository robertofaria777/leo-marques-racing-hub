import os
import glob
from pathlib import Path

def find_latest_report():
    print("Running Health Check...")
    
    # Path to the gemini brain directory for this user
    user_home = Path.home()
    brain_dir = user_home / ".gemini" / "antigravity" / "brain"
    
    if not brain_dir.exists():
        print(f"Brain directory not found at: {brain_dir}")
        return

    # Look for all markdown files that could be reports
    # (Excluding task, walkthrough, and implementation_plan as they are standard workflow artifacts)
    all_md_files = list(brain_dir.rglob("*.md"))
    report_files = [
        f for f in all_md_files 
        if f.name not in ("task.md", "walkthrough.md", "implementation_plan.md")
    ]
    
    if not report_files:
        print("No previous reports found in the brain directory.")
        return

    # Find the most recently modified file
    latest_file = max(report_files, key=lambda f: f.stat().st_mtime)
    
    print("\n" + "="*50)
    print(f"LATEST REPORT FOUND: {latest_file.name}")
    print(f"Path: {latest_file}")
    print("="*50 + "\n")
    
    # Print the first few lines of the report as a summary
    try:
        with open(latest_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        print("--- SUMMARY & RECOMMENDATIONS ---")
        lines = content.splitlines()
        
        # Display up to 20 lines of the content
        display_lines = lines[:20]
        for line in display_lines:
            print(line)
            
        if len(lines) > 20:
            print("\n... [Content truncated. See full file for details] ...")
            
        print("\n" + "-"*33)
            
    except Exception as e:
        print(f"Error reading the report file: {e}")

if __name__ == "__main__":
    find_latest_report()
