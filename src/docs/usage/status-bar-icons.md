---
name: Statusbar Icons
route: /docs/cpp/usage/statusbar-icons
parent: Documentation
menu: Usage
description: Before you start working with UnitTestBot, it's worth to pay attention on the IDE's status bar and UTBot-specific controls.
---

import StatusbarImg from '/resources/images/statusbar.png';
import ConnectionOkImg from '/resources/images/connectionOK.png';
import ConnectionAlertImg from '/resources/images/connectionALERT.png';

# Statusbar Icons

Before you start working with UnitTestBot, it's worth to pay attention to the IDE's status bar and UTBot-specific controls there:

<img src={StatusbarImg} className="docImg"/>


## Connection Status
Connection status indicates whether the client and the server are established a connection. 
If the connection is lost, **OK** (<img src={ConnectionOkImg} style={{display: 'inline-block'}} className="docImg"/>) status changes to **ALERT** (<img src={ConnectionAlertImg} style={{display: 'inline-block'}} className="docImg"/>).
In this case you need to check if UTBot container is still running.

## Five Rules
This checkbox switches the way generated tests are formatted. Please refer to a corresponding section for more details.

## Log Settings
You also can control how verbose UnitTestBot Logs are. Supported levels are **DEBUG**, **INFO** and **WARN**.