---
description: Stage, commit, and sync changes to GitHub (including Leo-web)
---

# Git Synchronization Protocol

> **Trigger:** Slash command `/sync` or user says "sync", "save progress", or "deploy changes".

This workflow automates the process of committing local changes and pushing them to all configured remotes simultaneously.

## 1. Staging Changes

1. **Check Status**:
// turbo
```powershell
git status
```

2. **Stage All**:
// turbo
```powershell
git add .
```

## 2. Committing Changes

1. **Commit**:
    * Ask the user for a commit message or generate a descriptive one based on `git status`.
    * Run the commit command:
```powershell
git commit -m "[DESCRIPTIVE_MESSAGE]"
```

## 3. Synchronization

1. **Push to All Remotes**:
// turbo
```powershell
git push origin main
```
*Note:* Due to our multi-push configuration, this will update both the primary repository and your personal `Leo-web` repository in one go.

2. **Verification**:
    * Confirm to the user that changes are live on both mirrors.
