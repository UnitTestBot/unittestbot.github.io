---
name: Command-line interface
route: /docs/cpp/cli
parent: Documentation
menu: UnitTestBot C/C++
---

# Command Line Interface

**Command Line Interface (CLI)** allows users to get access to all UnitTestBot features via command line without any
specific client (i.e. VSCode).

All the commands that are provided in UnitTestBot extension for Microsoft Visual Studio Code can be accessed directly
from the terminal.

Command Line Interface is essential for the ones who need to generate tests for really big projects, then run them and
collect coverage information. What's more, UTBot CLI version allows to run your custom generation and running scenarios
combining them with some external tools.

**UnitTestBot CLI** is a part of a server executable and can be downloaded from [release page](https://github.com/UnitTestBot/UTBotCpp/releases).

The executable provides several commands: it allows user to run server or CLI commands. If no command is specified,
server will be run. In order to learn more about utbot executable features use `-h/--help` option.

```sh
user@laptop:~$ ./utbot --help
Unit tests auto-generation tool for C projects.
Usage: ./utbot [OPTIONS] [SUBCOMMAND]

Options:
  -h,--help                   Print this help message and exit
  --help-all                  Expand all help

Subcommands:
  server                      Launch UTBot server.
  generate                    Generate unit tests and/or stubs.
  run                         Launch unit tests and generate coverage info.
  all                         Sequential launch of 'generate stubs' -> 'generate project' -> 'run'.
```

In case to read all information, please use `--help-all` option. It will display all the manual.

## Server Command

In order to run UTBot in server mode, please use `server` subcommand. The command options can be viewed
via `./utbot server --help`.

```sh
user@laptop:~$ ./utbot server --help
Launch UTBot server.
Usage: ./utbot server [OPTIONS]

Options:
  -h,--help                   Print this help message and exit
  --help-all                  Expand all help
  -p,--port UINT              Port server run on.
  -j UINT                     Maximum number of threads per user.
  --tmp TEXT                  Path to temporary folder.
  --log TEXT                  Path to folder with logs.
  -v,--verbosity  ENUM:value in {debug|error|info|trace|warning}:value in {debug->1,error->-2,info->0,trace->9,warning->-1} OR {1,-2,0,9,-1}
                              Logger verbosity.
```

### Examples

Let us provide with several examples of how you can run UnitTestBot executable in server mode.

In case you are fine with default settings you can avoid passing parameters and just run executable.

```sh
user@laptop:~$ ./utbot
```

If you want to be more specific in terms of your settings (e.g., change port and log folder), run it accordingly:

```sh
user@laptop:~$ ./utbot --port 2130 --log "/home/utbot/logs".
```

## Generate Command

If you want to generate tests for the source code, you need to use `generate` subcommand. The command options can be
viewed via `./utbot generate --help`.

```sh
user@laptop:~$ ./utbot generate --help
Generate unit tests and/or stubs.
Usage: ./utbot generate [OPTIONS] SUBCOMMAND

Options:
  -h,--help                   Print this help message and exit
  --help-all                  Expand all help
[Option Group: Project context]
  Options:
    -p,--project-path TEXT REQUIRED
                                Path to testing project root.
    -t,--tests-dir TEXT=tests   Relative path to directory in which tests will be generated.
    -b,--build-dir TEXT=build   Relative path to build directory with compile_commands.json and/or coverage.json.
[Option Group: Settings context]
  Options:
    -g,--generate-for-static    True, if you want UTBot to generate tests for static functions.
    -v,--verbose                Set if Five Rules Standard is required.
    --timeout INT=30            Maximum time (in seconds) is allowed for generation tests per function. Set to non-positive number to disable it.
    --no-deterministic-searcher Use deterministic searcher to traverse bitcode in the same way every time. It may significantly slow down generation.
    --no-stubs                  True, if you don’t want UTBot to use generated stubs from <testsDir>/stubs folder instead real files.

Subcommands:
  project                     Generate tests for C project.
  stubs                       Generate stubs for project.
  folder                      Generate tests for folder.
  file                        Generate tests for file in project.
  snippet                     Generate tests for code snippet.
  function                    Generate tests for function.
  class                       Generate tests for C++ class.
  line                        Generate tests for line in file.
  assertion                   Generate tests that fails assertion.
  predicate                   Generate tests with given result.
```

The command provides other subcommands, that specify test generation mode. It's required to use one. These subcommands
may require additional options (i.e., `--line-number`) in order to run them. Existing options can be displayed
via `./utbot generate [SUBCOMMAND] --help`. You can also check them via global `--help-all` option.

Generated tests can be found in a test folder (`tests` subfolder in the project directory by default).

### Examples

Below we demonstrate several examples of how to run generation commands.

**Generate tests for snippet**

```sh
user@laptop:~$ ./utbot generate --project-path "/home/snippets/" snippet --file-path "home/snippets/snippet.c"
```

Here, `--project-path` is path to the parent directory of the given snippet file  `snippet.c`.

**Generate tests for project**

```sh
user@laptop:~$ ./utbot generate --project-path "/home/projects/c-project" project
```

**Generate tests for function**

```sh
user@laptop:~$ ./utbot generate --project-path "/home/projects/c-project" function --file-path /home/projects/c-project/complex_structs.c --line-number 39
```

**Generate tests with prompted result**

```sh
user@laptop:~$ ./utbot generate --project-path "/home/projects/c-project/"  predicate --file-path "/home/projects/c-project/basic_functions.c" --line-number 5 --predicate == --return-value 11 --validation-type int32
```

## Run Command

One of the main features of UnitTestBot that allows to run tests with coverage is available in CLI mode as well. In
order to run the tests, type in the following command: `./utbot run [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]>`.
Subcommand in this case specifies whether to run all generated tests, tests in one file, or just one specific test.

```sh
user@laptop:~$ ./utbot run --help
Launch unit tests and generate coverage info.
Usage: ./utbot run [OPTIONS] [SUBCOMMAND]

Options:
  -h,--help                   Print this help message and exit
  --help-all                  Expand all help
[Option Group: Project context]
  Options:
    -p,--project-path TEXT REQUIRED
                                Path to testing project root.
    -t,--tests-dir TEXT=tests   Relative path to directory in which tests will be generated.
    -b,--build-dir TEXT=build   Relative path to build directory with compile_commands.json and/or coverage.json.
[Option Group: Settings context]
  Options:
    -g,--generate-for-static    True, if you want UTBot to generate tests for static functions.
    -v,--verbose                Set if Five Rules Standard is required.
    --timeout INT=30            Maximum time (in seconds) is allowed for generation tests per function. Set to non-positive number to disable it.
    --no-deterministic-searcher Use deterministic searcher to traverse bitcode in the same way every time. It may significantly slow down generation.
    --no-stubs                  True, if you don’t want UTBot to use generated stubs from <testsDir>/stubs folder instead real files.

Subcommands:
  test                        Run specified test
  file                        Run all tests in specified file
  project                     Run all tests for this project
```

Similiarly to `generate` subcommands, you can access manual for `run` subcommands via `./utbot run [SUBCOMMAND] --help`.

### Examples

**Run all tests for project**

```sh
user@laptop:~$ ./utbot run --project-path "/home/projects/c-project" project
```

**Run test file**

```sh
user@laptop:~$ ./utbot run --project-path "/home/projects/c-project" file --file-path "home/projects/c-project/tests/basic_functions_test.cpp"  
```

**Run specific test**

```sh
user@laptop:~$ ./utbot run --project-path "/home/projects/c-project" test --file-path "/home/projects/c-project/tests/basic_functions_test.cpp" --test-suite "regression" --test-name "max__test_1"
```

## All Command

For simplicity, UTBot CLI provides `all` command, that firstly generates stubs for the project, then generates project
tests and finally runs them with coverage.

```sh
user@laptop:~$ ./utbot all --help
Sequential launch of 'generate stubs' -> 'generate project' -> 'run'.
Usage: ./utbot all [OPTIONS]

Options:
  -h,--help                   Print this help message and exit
  --help-all                  Expand all help
  --no-coverage BOOLEAN       Flag that controls coverage generation.
  -s,--src-paths TEXT         Relative paths to directories, containing source files. Separate each path with comma.
[Option Group: Project context]
  Options:
    -p,--project-path TEXT REQUIRED
                                Path to testing project root.
    -t,--tests-dir TEXT=tests   Relative path to directory in which tests will be generated.
    -b,--build-dir TEXT=build   Relative path to build directory with compile_commands.json and/or coverage.json.
[Option Group: Settings context]
  Options:
    -g,--generate-for-static    True, if you want UTBot to generate tests for static functions.
    -v,--verbose                Set if Five Rules Standard is required.
    --timeout INT=30            Maximum time (in seconds) is allowed for generation tests per function. Set to non-positive number to disable it.
    --no-deterministic-searcher Use deterministic searcher to traverse bitcode in the same way every time. It may significantly slow down generation.
    --no-stubs                  True, if you don’t want UTBot to use generated stubs from <testsDir>/stubs folder instead real files.
```

### Examples

```sh
user@laptop:~$ ./utbot all --project-path "/home/projects/c-project"
```

