---
name: Symbolic Stdin
route: /docs/cpp/advanced/symbolic-stdin
parent: Documentation
menu: Advanced
description: This page provides a detailed description on how UnitTestBot handles input functions such as read, scanf, etc.
---
# Symbolic stdin
UTBot is able to generate tests for C code that reads values from **stdin**, **file descriptor** or **STDIN_FILENO**. UTBot marks read values as symbolic, generates tests, puts the needed data into a C-string buffer and redirects **stdin** to the buffer so tests can be executed properly.

Here is an example of a function that reads values from stdin:

###### [Source code example](https://github.com/UnitTestBot/UTBotCpp/blob/main/integration-tests/c-example/lib/symbolic_stdin.c)
```cpp
int check_password(int fd) {
  char buf[5];
  if (read(fd, buf, 5) != -1) {
    if (buf[0] == 'h' && buf[1] == 'e' &&
	buf[2] == 'l' && buf[3] == 'l' &&
	buf[4] == 'o')
      return 1;
  }
  return 0;
}
```

###### Redirecting stdin
```cpp
void utbot_redirect_stdin(const char* buf, int &res) {
    int fds[2];
    if (pipe(fds) == -1) {
        res = -1;
        return;
    }
    close(STDIN_FILENO);
    dup2(fds[0], STDIN_FILENO);
    write(fds[1], buf, 64);
    close(fds[1]);
}
```

###### Tests code example
```cpp
TEST(regression, check_password_test_1)
{
    // Redirect stdin
    char stdin_buf[] = "hello";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_2)
{
    // Construct input
    int fd = 1;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_3)
{
    // Construct input
    int fd = 3;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_4)
{
    // Redirect stdin
    char stdin_buf[] = "\x97""\x97""\x97""\x97""\x97""";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_5)
{
    // Redirect stdin
    char stdin_buf[] = "he\0""hh";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_6)
{
    // Redirect stdin
    char stdin_buf[] = "hell\0""";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_7)
{
    // Construct input
    int fd = 1024;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_8)
{
    // Redirect stdin
    char stdin_buf[] = "h\0""hhh";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_9)
{
    // Construct input
    int fd = -1;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, check_password_test_10)
{
    // Redirect stdin
    char stdin_buf[] = "hel\0""h";
    int utbot_redirect_stdin_status = 0;
    utbot_redirect_stdin(stdin_buf, utbot_redirect_stdin_status);
    if (utbot_redirect_stdin_status != 0) {
        FAIL() << "Unable to redirect stdin.";
    }
    // Construct input
    int fd = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = check_password(fd);

    // Check results
    EXPECT_EQ(expected, actual);
}
```