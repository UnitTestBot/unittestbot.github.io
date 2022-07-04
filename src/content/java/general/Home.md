---
name: Home
path: /docs/java/general/home
---

The UnitTestBot Java provides engineers with a simple way to generate unit tests and visualize coverage for projects written in Java Programming Language. The tool uses symbolic analysis for test cases generation.

It is based on a custom Symbolic Virtual Machine to analyze bytecode, traverse it and pass path constraints to the Z3 SMT Solver from Microsoft Labs to get a _SAT_ /\ _UNSAT_ model for codebase. _UnitTestBot_ incorporates machine learning for test names and test variables generation.

Tests are generated in the JUnit 5 asserts notation and formatted according to the Huawei Coding Standards. 

### Requirements
JDK Version
OpenJDK 1.8+ compatible

### IDE
IntelliJ IDEA 2020.2+

### Build system
Maven/Gradle