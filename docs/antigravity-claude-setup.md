# Google Antigravity IDE: Claude Code & Browser Capabilities Setup

To implement Claude within the Google Antigravity IDE agent manager, you do not need to execute raw terminal commands manually. Google Antigravity is an agent-first IDE natively built to control your editor, terminal, and browser seamlessly under a single orchestration layer.

Instead of configuring Model Context Protocol (MCP) bridges manually from a command line, you leverage Antigravity's Agent Manager and internal Terminal integration to execute the task.

## Step 1: Open the Antigravity Terminal
You must run the claude initialization command inside the integrated workspace terminal so Antigravity can track the sub-agent.

- Launch Antigravity IDE.
- Open your project folder (File > Open Folder).
- Open the integrated terminal by pressing `Ctrl + \`` (or `Cmd + \`` on macOS), or open the Agent Manager panel using `Ctrl + E`.

## Step 2: Initialize Claude with Browser Capabilities
Run the initialization command directly inside the Antigravity workspace terminal to activate the Chrome bridge:

```bash
claude --chrome
```

*Note: If you have already booted up a session, you can alternatively type the slash command `/chrome` inside your active Claude Code session panel to trigger the connection.*

## Step 3: Authorize File System & Browser Permissions
Because Antigravity isolates agent actions for security, you must manually grant the necessary permissions when prompted by the terminal interface:

1. **Approve File Access:** When the terminal prompt asks to authorize file system permissions for your project directory, type `y` or click `Allow`. This allows Claude to safely read and edit your local workspace files.
2. **Establish the Chrome Extension Link:** Ensure Google Chrome is running on your machine with the official "Claude in Chrome" extension installed and logged into your account. The extension will automatically pair with the `claude --chrome` native messaging host configuration running inside your Antigravity terminal.

## Step 4: Verify the Implementation
Once authorized, pass a high-level task to your Antigravity agent or directly into the Claude Code panel to ensure the browser bridge is operating correctly:

```text
Open localhost:3000, test the login form, and check the browser console logs for any errors.
```

You will see Chrome launch a dedicated tab group, and the agent will begin autonomously executing the web workflow alongside your open code.

*If you run into any permission blocks, check the Native Messaging Host files or configure the Browserless MCP fallback.*
