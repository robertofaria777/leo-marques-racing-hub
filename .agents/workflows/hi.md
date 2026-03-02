---
description: Startup Agent Protocol
---

# Startup Agent Protocol

> **Trigger:** User says "hi", "Morning", "Start up", or "Let's go".

This agent initializes the workspace for a new productivity session, ensuring the environment is live and the user is focused on the right tasks.

## 1. Environment Initialization

1. **Health Check**:
// turbo
```powershell
python ".agents\scripts\morning_startup.py"
```
*Note:* This script will automatically find the latest report in any brain directory.

2. **Start Development Server**:
// turbo
```powershell
npm run dev -- --port 8081
```

## 2. Context Retrieval

1. **Latest Report & Recommendations**:
    * The health check script output will display the latest `daily_report_*.md` (or similar) summary and recommendations.
    * If you need the full content, the script provides the path to the latest report.

## 3. The "Morning Briefing"

1. **Notify User**:
    * Confirm server is launching at http://localhost:8081.
    * Present the recommendations from the report output.

2. **Ask for Direction**:
    * "Which of these should we start with today Big Boss 😎?"
