---
name: Statusbar Icons
route: /docs/cpp/usage/statusbar-icons
parent: Documentation
menu: Usage
description: Before you start working with UnitTestBot, it's worth to pay attention on the IDE's status bar and UTBot-specific controls.
---

# Statusbar Icons

Before you start working with UnitTestBot, it's worth to pay attention to the IDE's status bar and UTBot-specific
controls there:

![statusbarImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/statusbar.png)

## Connection Status

Connection status indicates whether the client and the server are established a connection. If the connection is
lost, **
OK** (![connectionOKImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/connectionOK.png))
status changes to **
ALERT** (![connectionALERTImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/connectionALERT.png))
. In this case you need to check if UTBot container is still running.

## Five Rules

This checkbox switches the way generated tests are formatted. Please refer to a corresponding section for more details.

## Log Settings

You also can control how verbose UnitTestBot Logs are. Supported levels are **DEBUG**, **INFO** and **WARN**.