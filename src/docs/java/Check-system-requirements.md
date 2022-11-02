---
name: Check system requirements
route: /docs/java/check-requirements
menu: UnitTestBot Java/Kotlin
parent: Documentation
---

UnitTestBot works with Windows, Linux, and macOS. In most cases you should not worry about the compatibility with your operational system.

### To generate tests with UnitTestBot:

You have to install IntelliJ IDEA (versions from 2022.1 to 2022.2.3 are supported).

### To contribute to UnitTestBot project:

You have to **install**

- IntelliJ IDEA (versions from 2022.1 to 2022.2.3 are supported);

- JDK 11;

- Kotlin 1.7.0 or later.

You also need to **configure development environment**:

- `JAVA_HOME` environment variable should contain the path to JDK 11 installation directory.

- `PATH` environment variable should contain the path to the `bin` folder of JDK 11 installation directory.

- `KOTLIN_HOME` environment variable should contain the path to the `kotlinc` folder of Kotlin (1.7.0 or later) installation directory.

- Project SDK (1) and Gradle SDK (2) should be set to JDK 11:

(1) **IntelliJ IDEA** > **File** > **Project Structure** > **Project Settings** > **Project** > **SDK**,

(2) **IntelliJ IDEA** > **File** > **Settings...** > **Build, Execution, Deployment** > **Build Tools** > **Gradle**.

_Note:_ if the environment variables lead to unsupported JDK or Kotlin versions, you won't be able to build the UnitTestBot project.
