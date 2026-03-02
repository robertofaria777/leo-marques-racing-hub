---
description: Shutdown Agent Protocol
---

# Shutdown Agent Protocol

> **Trigger:** User says "Use shutdown agent", "Shut down", "End of day", "Wrap up", or "bye".

This agent is responsible for safely terminating the development environment and documenting the day's progress.

## 1. Documentation Phase (The "Daily Report")

Before shutting down, you must capture the state of the project.

1. **Analyze Context**: Review `task.md`, recent `walkthrough.md` files, and conversation history.
2. **Generate Report**: Create a new artifact named `daily_report_YYYY_MM_DD.md` in the brain directory.
    * **Format**:
        ```markdown
        # 📅 Daily Progress Report: YYYY-MM-DD
        
        ## 📝 Summary
        [High-level summary of what was achieved today]

        ## ✅ Accomplishments
        * [Feature A]: [Status (e.g., Completed, Fixed)]
        * [Bug B]: [Resolution]

        ## 🚧 Open Issues / Blockers
        * [Issue description] - [Current state]

        ## 🔮 Recommendations for Tomorrow
        1. [Action item 1]
        2. [Action item 2]
        
        ## 🛠 System Status
        * Ports 8080/8081: [Cleaned/Terminated]
        ```

## 2. Optimization Phase (The "Self-Improvement")

*Critical:* If you learned something new today that affects how another agent works, you MUST update that agent's directive.

1. **Analyze Learnings**:
    * Did a specific tool fail? Did an agent miss a step?
2. **Apply Updates**:
    * **Edit Directive**: Open relevant `.agents/directives/*.md` and add rules.
    * **Edit Script**: Ensure script fixes are permanent.
3. **Log Improvements**:
    * Add a section to your Daily Report: `## 🧠 Agent Improvements`.

## 3. Execution Phase (The "Cleanup")

Use the deterministic python script to kill development servers.

1. **Run Script**:
// turbo
```powershell
python ".agents\scripts\smart_shutdown.py"
```
*Note:* This script will terminate processes on ports 8080, 8081, 3000, 5173, and 54321.

## 4. Handoff Phase

1. **Notify User**:
    * Confirm shutdown is complete.
    * Provide a link to the `daily_report_YYYY_MM_DD.md`.
    * Say "See you tomorrow! It was a pleasure working with you Big Boss 😎"
