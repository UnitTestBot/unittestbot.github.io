---
name: Install or update plugin
route: /docs/java/install-or-update-plugin
menu: UnitTestBot Java/Kotlin
parent: Documentation
---

Is it OK for you to **simply get the latest version** of UnitTestBot? Install it from [Marketplace in IntelliJ IDEA](https://github.com/UnitTestBot/UTBotJava/wiki/Install-or-update-plugin#install-from-marketplace-in-intellij-idea).

Do you want to **manually choose the build**? Install the plugin from the [downloaded archive](https://github.com/UnitTestBot/UTBotJava/wiki/Install-or-update-plugin#install-from-downloaded-archive).

The same approach is applicable for [updating](https://github.com/UnitTestBot/UTBotJava/wiki/Install-or-update-plugin#how-to-update-plugin) the plugin.

***

## Install from Marketplace in IntelliJ IDEA

1. In your IntelliJ IDEA go to **File** > **Settings...** > **Plugins** and choose **Marketplace**.
2. In the search field type _UnitTestBot_ — you'll see the UnitTestBot plugin page.
3. Press **Install** and wait until it changes to **Installed**, then click **OK**.

To check if UnitTestBot is enabled go to **File** > **Settings...** > **Plugins** and choose **Installed**.

***

## Install from downloaded archive

1. To get the latest stable build of UnitTestBot, go to [GitHub](https://github.com/UnitTestBot/UTBotJava/releases),
   scroll through the release notes and click **Assets**.<br></br>
   Download the zip-archive named like **utbot-intellij-VERSION**.<br></br>
   The builds are also available at [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/19445-unittestbot/versions).
2. In your IntelliJ IDEA go to **File** > **Settings...**.
3. Select **Plugins**, click the gear icon and then **Install Plugin from Disk**.
4. Select the plugin archive file and click **OK**.
5. On **Plugins** click **OK** to apply the changes and restart your IDE if prompted.

To check if UnitTestBot is enabled go to **File** > **Settings...** > **Plugins** and choose **Installed**.

***

## How to update plugin

* To _simply get the latest version_ you can update plugin in your IntelliJ IDEA.<br></br>
  Go to **File** > **Settings...** > **Plugins**, choose **Installed** and update UnitTestBot if available.<br></br>
  _Note:_ the unused libraries will be removed automatically, there is no need to uninstall the previous version of the plugin.

* To _choose the version_ you can manually download the archived build and install it as described in [Install from downloaded archive](#Install from downloaded archive).<br></br>
  Note: before updating, please remove the previous version of the plugin. See [How to uninstall plugin](#How to uninstall plugin).

***

## How to uninstall plugin
Go to **File** > **Settings...** > **Plugins** and choose **Installed**. Find UnitTestBot plugin and choose the gear icon to the right of the plugin name. Click **Uninstall**, then click **Apply**. Restart if prompted.