---
name: Supported Syntax
route: /docs/cpp/advanced/syntax
parent: Documentation
menu: Advanced
description: There are numerous constructions in C language that should be in various ways. Here we introduce all C syntax that current version of UTBot supports with some examples.   
---
# Supported Syntax

UnitTestBot supports the majority of C language features. Here you can find test cases examples on main syntax constructions.
All code snippets below were taken from [this repo](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/tree/master/cpp/c-example).

<!-- toc -->

- [Integral types](#integral-types)
- [Character types](#character-types)
- [Floating-point types](#floating-point-types)
- [_Bool type](#_bool-type)
- [Structs as parameters](#structs-as-parameters)
- [Structs as return values](#structs-as-return-values)
- [Unions](#unions)
- [Pointers as parameters and return types](#pointers-as-parameters-and-return-types)
- [Pointers as struct fields members](#pointers-as-struct-fields-members)
- [Pointers to functions](#pointers-to-functions)
- [Arrays](#arrays)
- [Multidimensional arrays and pointers](#multidimensional-arrays-and-pointers)
- [Enums](#enums)
- [Typedef](#typedef)
- [Static functions](#static-functions)
- [Qualifiers: const, volatile, restrict etc.](#qualifiers-const-volatile-restrict-etc)
- [Global variables](#global-variables)

<!-- tocstop -->


## Integral types
> `short, unsigned short, int, unsigned int, long, unsigned long, long long, unsigned long long, unsigned char`

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/basic_functions.c#L11)
```cpp
signed long long int max_long(long long a, signed long long b) {
    if (a > b) {
        return a;
    }
    return b;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/types_test.cpp#L76)
```cpp
TEST(regression, max_long_test_1)
{
    // Construct input
    long long a = 0LL;
    long long b = -1LL;

    // Expected output
    long long expected = 0LL;

    // Trigger the function
    long long actual = max_long(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, max_long_test_2)
{
    // Construct input
    long long a = 0LL;
    long long b = 0LL;

    // Expected output
    long long expected = 0LL;

    // Trigger the function
    long long actual = max_long(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Character types
> `char, signed char`

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/types/types.c#L38)
```cpp
signed char some_func(char a, unsigned char b) {
    if (b == 'z' && a > b) return a;
    if (b != 'z') return b;
    return '0';
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/types_test.cpp#L175)
```cpp
TEST(regression, some_func_test_1)
{
    // Construct input
    char a = 'a';
    unsigned char b = 122;

    // Expected output
    signed char expected = '0';

    // Trigger the function
    signed char actual = some_func(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, some_func_test_2)
{
    // Construct input
    char a = 'a';
    unsigned char b = 120;

    // Expected output
    signed char expected = 'x';

    // Trigger the function
    signed char actual = some_func(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, some_func_test_3)
{
    // Construct input
    char a = '{';
    unsigned char b = 122;

    // Expected output
    signed char expected = '{';

    // Trigger the function
    signed char actual = some_func(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(error, some_func_test_4)
{
    // Construct input
    char a = 'a';
    unsigned char b = 128;

    // Trigger the function
    some_func(a, b);

    FAIL() << "Unreachable point. Function was supposed to fail, but actually completed successfully.";
}
```

## Floating-point types
> `double, float, long double`

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/floats/floating_point.c#L26)
```cpp
float long_double_arith(long double x) {
    x *= 2;
    x -= 3.21;
    x *= fabsl(x);
    if (x == 1.0) {
        return 1.0;
    } else {
        return 3.5;
    }
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/floats/floating_point_test.cpp#L106)
```cpp
TEST(regression, long_double_arith_test_1)
{
    // Construct input
    long double x = 2.105000e+00;

    // Expected output
    float expected = 1.000000e+00;

    // Trigger the function
    float actual = long_double_arith(x);

    // Check results
    EXPECT_NEAR(expected, actual, utbot_abs_error);
}

TEST(regression, long_double_arith_test_2)
{
    // Construct input
    long double x = 0.000000e+00;

    // Expected output
    float expected = 3.500000e+00;

    // Trigger the function
    float actual = long_double_arith(x);

    // Check results
    EXPECT_NEAR(expected, actual, utbot_abs_error);
}
```

## _Bool type
> There is also a type alias bool for _Bool, defined in `<stdbool.h>`.

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/types/types.c#L44)
```cpp
int fun_that_accept_bools(_Bool a, bool b) {
    if (a && b) return 1;
    if (a) return 2;
    if (b) return 3;
    return 4;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/types_test.cpp#L236)
```cpp
TEST(regression, fun_that_accept_bools_test_1)
{
    // Construct input
    bool a = true;
    bool b = false;

    // Expected output
    int expected = 2;

    // Trigger the function
    int actual = fun_that_accept_bools(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, fun_that_accept_bools_test_2)
{
    // Construct input
    bool a = false;
    bool b = false;

    // Expected output
    int expected = 4;

    // Trigger the function
    int actual = fun_that_accept_bools(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, fun_that_accept_bools_test_3)
{
    // Construct input
    bool a = false;
    bool b = true;

    // Expected output
    int expected = 3;

    // Trigger the function
    int actual = fun_that_accept_bools(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, fun_that_accept_bools_test_4)
{
    // Construct input
    bool a = true;
    bool b = true;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = fun_that_accept_bools(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Structs as parameters

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/types/types.c#L118)
```cpp
struct SupportedStruct5 {
    short b;
    const int a;
    char c;
};

int structWithConstFields(struct SupportedStruct5 st) {
    if (st.a == 0) {
        return 1;
    }
    return 2;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/types_test.cpp#L512)
```cpp
TEST(regression, structWithConstFields_test_1)
{
    // Construct input
    struct SupportedStruct5 st = {0, 0, 'c'};

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = structWithConstFields(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, structWithConstFields_test_2)
{
    // Construct input
    struct SupportedStruct5 st = {0, -1, 'c'};

    // Expected output
    int expected = 2;

    // Trigger the function
    int actual = structWithConstFields(st);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Structs as return values

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/types/types.c#L80)
```cpp
struct SupportedStruct4 {
    char* c;
};

const struct SupportedStruct4 structWithConstPointerReturn(int a) {
    if (a % 2 == 0) {
        struct SupportedStruct4 res = {.c = "abcd"};
        return res;
    }
    struct SupportedStruct4 res = {.c = "ABCD"};
    return res;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/types_test.cpp#L437)
```cpp
TEST(regression, structWithConstPointerReturn_test_1)
{
    // Construct input
    int a = 1;

    // Expected output
    struct SupportedStruct4 expected = {NULL};

    // Trigger the function
    const struct SupportedStruct4 actual = structWithConstPointerReturn(a);

    // Check results
}

TEST(regression, structWithConstPointerReturn_test_2)
{
    // Construct input
    int a = 0;

    // Expected output
    struct SupportedStruct4 expected = {NULL};

    // Trigger the function
    const struct SupportedStruct4 actual = structWithConstPointerReturn(a);

    // Check results
}
```

## Unions

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/structures/simple_unions.c#L52)
```cpp
union MainUnion {
    union InnerUnion {
        union InInnerUnion {
            unsigned int u;
            long long l;
        };
        char c;
        union InInnerUnion ininner;
        short s;
    } inner;

    int x;
    long long y;
};

signed char operate_with_inner_unions(union MainUnion st) {
    if (st.x == 5 || st.y == 5 || st.inner.c == '5' ||
        st.inner.s == 5 || st.inner.ininner.l == 5 || st.inner.ininner.u == 5) {
        return '5';
    }


    if (st.x == 5 || st.y == 102 || st.inner.s == 15) {
        return st.inner.c;
    }

    if ((long long) st.inner.ininner.u == st.inner.ininner.l) {
        return 'e';
    }
    if ((long long) st.inner.ininner.u > st.inner.ininner.l) {
        return 'g';
    }

    return 'o';
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/structures/simple_unions_test.cpp#L257)
```cpp
template<typename T, size_t N>
T from_bytes(const char (&bytes)[N]) {
    T result;
    std::memcpy(&result, bytes, sizeof(result));
    return result;
}


TEST(regression, operate_with_inner_unions_test_1)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({102, 0, 0, 0, 0, 0, 0, 0});


    // Expected output
    signed char expected = 'f';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_2)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({53, 0, 0, 0, 0, 0, 0, 0});

    // Expected output
    signed char expected = '5';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_3)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({15, 0, 0, 0, 0, 0, 0, 0});

    // Expected output
    signed char expected = '\x0f';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_4)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({98, 0, 0, 0, 2, 0, 0, 0});

    // Expected output
    signed char expected = 'o';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_5)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({5, 0, -1, 0, 0, 0, 0, 0});

    // Expected output
    signed char expected = '5';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_6)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({104, 0, 0, 0, 0, 0, 0, 0});

    // Expected output
    signed char expected = 'e';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_7)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({5, 0, 0, 0, 0, 0, 0, 0});

    // Expected output
    signed char expected = '5';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, operate_with_inner_unions_test_8)
{
    // Construct input
    union MainUnion st = from_bytes<MainUnion>({99, 0, 0, 0, 0, 0, 0, -128});

    // Expected output
    signed char expected = 'g';

    // Trigger the function
    signed char actual = operate_with_inner_unions(st);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Pointers as parameters and return types
> If a pointer is used as a return value, UTBot is not yet capable of determining if it is used as an array, so only value under the pointer itself will be checked in generated tests.

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/pointers/pointer_parameters.c#L3)
```cpp
int c_strcmp(const char* a, const char *b) {
    for (int i = 0; ; i++) {
        if (a[i] != b[i]) {
            return 0;
        } else {
            if (a[i] == '\0' || b[i] == '\0') {
                return a[i] == '\0' && b[i] == '\0';
            }
        }
    }
}

int void_pointer_char_usage(void *x) {
    char *a = x;
    return c_strcmp(a, "hello");
}

int* five_square_numbers(int from) {
    static int sq[5];

    for (int i = 0; i < 5; i++) {
        sq[i] = from * from;
        from++;
    }

    return sq;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/pointers/pointer_parameters_test.cpp#L9)
```cpp
TEST(regression, c_strcmp_test_1)
{
    // Construct input
    char a_buffer[] = "";
    const char * a = a_buffer;
    char b_buffer[] = "";
    const char * b = b_buffer;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = c_strcmp(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, c_strcmp_test_2)
{
    // Construct input
    char a_buffer[] = "cbccccbccc";
    const char * a = a_buffer;
    char b_buffer[] = "cjcccccccc";
    const char * b = b_buffer;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = c_strcmp(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, c_strcmp_test_3)
{
    // Construct input
    char a_buffer[] = "abccccbcca";
    const char * a = a_buffer;
    char b_buffer[] = "icccccccci";
    const char * b = b_buffer;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = c_strcmp(a, b);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(error, void_pointer_char_usage_test_1)
{
    // Construct input
    __attribute__ ((aligned(128))) unsigned char x = 104;

    // Trigger the function
    void_pointer_char_usage(&x);

    FAIL() << "Unreachable point. Function was supposed to fail, but actually completed successfully.";
}

TEST(regression, void_pointer_char_usage_test_2)
{
    // Construct input
    __attribute__ ((aligned(128))) unsigned char x = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = void_pointer_char_usage(&x);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, five_square_numbers_test_1)
{
    // Construct input
    int from = 0;

    // Expected output
    int expected[1] = {0};

    // Trigger the function
    int * actual = five_square_numbers(from);

    // Check results
    for (int it_0_0 = 0; it_0_0 < 1; it_0_0 ++) {
        EXPECT_EQ(expected[it_0_0], actual[it_0_0]);
    }
}
```

## Pointers as struct fields members

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/structures/structs/structs_with_pointers.c#L24)
```cpp
struct List {
    struct List * next;
    int val;
};

int list_sum_sign(struct List *head) {
    int sum = list_sum(head);
    if (sum > 0) {
        return 1;
    } else if (sum < 0) {
        return -1;
    } else {
        return 0;
    }
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/structures/structs/structs_with_pointers_test.cpp#L71)
```cpp
TEST(regression, list_sum_sign_test_1)
{
    // Construct input
    struct List head = {NULL, 0};

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = list_sum_sign(&head);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, list_sum_sign_test_2)
{
    // Construct input
    struct List head = {NULL, -10};

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = list_sum_sign(&head);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, list_sum_sign_test_3)
{
    // Construct input
    struct List head = {NULL, 1};

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = list_sum_sign(&head);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Pointers to functions
> * If return type is a pointer to function, UTBot doesn't checking expected value - comparing pointers doesn't make any sense.
> * We support arrays of pointers to functions also, but 1-dimensional only.
> * If a function takes pointer to another function as parameter, UTBot generates stub for this parameter.

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/pointers/function_pointers.c#L62)
```cpp
typedef int (*op_func)(int, int);

int f_add(int a, int b) {
    return a + b;
}
int f_sub(int a, int b) {
    return a - b;
}
int f_mul(int a, int b) {
    return a * b;
}

op_func return_op(char op) {
    switch(op) {
        case '+': return f_add;
        case '-': return f_sub;
        case '*': return f_mul;
    }
    return NULL;
}

char* pointerParam(char* (*f)(int*), int* x) {
    if (*x == 1) {
        return f(x);
    } else{
        return f(x + 5);
    }
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/pointers/function_pointers_test.cpp#L337)
```cpp

TEST(regression, return_op_test_1)
{
    // Construct input
    char op = '*';

    // Expected output
    // No output variable check for function returning pointer to function

    // Trigger the function
    return_op(op);

    // Check results
    // No check results for function returning pointer to function
}

TEST(regression, return_op_test_2)
{
    // Construct input
    char op = 'c';

    // Expected output
    // No output variable check for function returning pointer to function

    // Trigger the function
    return_op(op);

    // Check results
    // No check results for function returning pointer to function
}

TEST(regression, return_op_test_3)
{
    // Construct input
    char op = '-';

    // Expected output
    // No output variable check for function returning pointer to function

    // Trigger the function
    return_op(op);

    // Check results
    // No check results for function returning pointer to function
}

TEST(regression, return_op_test_4)
{
    // Construct input
    char op = '+';

    // Expected output
    // No output variable check for function returning pointer to function

    // Trigger the function
    return_op(op);

    // Check results
    // No check results for function returning pointer to function
}


typedef char * (*pointerParam_f_arg)(int *);
char * _pointerParam_f_stub(int * param1) {
    return "";
}

TEST(regression, pointerParam_test_1)
{
    // Construct input
    pointerParam_f_arg f = *_pointerParam_f_stub;
    int x = 0;

    // Expected output
    char expected = '\0';

    // Trigger the function
    char actual = *pointerParam(f, &x);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, pointerParam_test_2)
{
    // Construct input
    pointerParam_f_arg f = *_pointerParam_f_stub;
    int x = 1;

    // Expected output
    char expected = '\0';

    // Trigger the function
    char actual = *pointerParam(f, &x);

    // Check results
    EXPECT_EQ(expected, actual);
}

```

## Arrays

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/structures/structs/structs_with_pointers.c#L24)
```cpp
struct Trio {
    int a;
    long long b;
    short c;
};

int index_of_struct_with_equal_fields(struct Trio arr []) {
    for (int i = 0; i < 10; i++) {
        if (arr[i].a == arr[i].b) {
            if (arr[i].b == arr[i].c) {
                return i; 
            }
        }
    }

    return -1;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/structures/struct_arrays_test.cpp#L100)
```cpp
TEST(regression, index_of_struct_with_equal_fields_test_1)
{
    // Construct input
    struct Trio arr[10] = {{0, 1LL, 0}, {0, 4LL, 0}, {0, 1LL, 0}, {0, 2LL, 0}, {0, 8LL, 0}, {0, 8LL, 0}, {0, 4LL, 0}, {0, 4LL, 0}, {0, 1LL, 0}, {0, 1LL, 0}};

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, index_of_struct_with_equal_fields_test_2)
{
    // Construct input
    struct Trio arr[10] = {{0, 1LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}};

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, index_of_struct_with_equal_fields_test_3)
{
    // Construct input
    struct Trio arr[10] = {{0, 1LL, 0}, {8, 8LL, 0}, {2, 2LL, 0}, {0, 2LL, 0}, {1, 1LL, 0}, {1, 1LL, 0}, {0, 4LL, 0}, {1, 1LL, 0}, {0, 1LL, 0}, {2, 2LL, 0}};

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, index_of_struct_with_equal_fields_test_4)
{
    // Construct input
    struct Trio arr[10] = {{2, 2LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}};

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, index_of_struct_with_equal_fields_test_5)
{
    // Construct input
    struct Trio arr[10] = {{0, 1LL, 0}, {0, 4LL, 0}, {0, 1LL, 0}, {2, 2LL, 0}, {0, 8LL, 0}, {0, 8LL, 0}, {0, 4LL, 0}, {0, 4LL, 0}, {2, 2LL, 0}, {2, 2LL, 0}};

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, index_of_struct_with_equal_fields_test_6)
{
    // Construct input
    struct Trio arr[10] = {{0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}, {0, 0LL, 0}};

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = index_of_struct_with_equal_fields(arr);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Multidimensional arrays and pointers
> Arrays of any dimensions are supported, but as for pointers, only 1-d and 2-d are supported.

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/multi_arrays.c#L63)
```cpp
int some_method(int ** pointer2d) {
    int x = 2;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            if (pointer2d[i][j] > 0) {
                return i * 2 + j;
            }
        }
    }
    return -1;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/multi_arrays_test.cpp#L195)
```cpp
TEST(regression, some_method_test_1)
{
    // Construct input
    int _pointer2d[2][2] = {{0, 0}, {0, 0}};
    int ** pointer2d = (int **) calloc(3, sizeof(int *));
    for (int it_9_0 = 0; it_9_0 < 2; it_9_0 ++) {
        pointer2d[it_9_0] = _pointer2d[it_9_0];
    }
    pointer2d[2] = NULL;

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = some_method(pointer2d);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, some_method_test_2)
{
    // Construct input
    int _pointer2d[2][2] = {{0, 1}, {0, 0}};
    int ** pointer2d = (int **) calloc(3, sizeof(int *));
    for (int it_9_0 = 0; it_9_0 < 2; it_9_0 ++) {
        pointer2d[it_9_0] = _pointer2d[it_9_0];
    }
    pointer2d[2] = NULL;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = some_method(pointer2d);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, some_method_test_3)
{
    // Construct input
    int _pointer2d[2][2] = {{0, 0}, {1, 0}};
    int ** pointer2d = (int **) calloc(3, sizeof(int *));
    for (int it_9_0 = 0; it_9_0 < 2; it_9_0 ++) {
        pointer2d[it_9_0] = _pointer2d[it_9_0];
    }
    pointer2d[2] = NULL;

    // Expected output
    int expected = 2;

    // Trigger the function
    int actual = some_method(pointer2d);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, some_method_test_4)
{
    // Construct input
    int _pointer2d[2][2] = {{1, 0}, {0, 0}};
    int ** pointer2d = (int **) calloc(3, sizeof(int *));
    for (int it_9_0 = 0; it_9_0 < 2; it_9_0 ++) {
        pointer2d[it_9_0] = _pointer2d[it_9_0];
    }
    pointer2d[2] = NULL;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = some_method(pointer2d);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Enums

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/structures/enums.c#L5)
```cpp
enum Sign {
    NEGATIVE,
    ZERO,
    POSITIVE
};


int enumSignToInt(enum Sign s) {
    if (s == ZERO) {
      return 0;
    }
    if (s == NEGATIVE) {
        return -1;
    } else {
        return 1;
    } 
}

int enumSignPointerToInt(enum Sign *s) {
    return enumSignToInt(*s);
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/structures/enums_test.cpp#L9)
```cpp
TEST(regression, enumSignToInt_test_1)
{
    // Construct input
    enum Sign s = POSITIVE;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = enumSignToInt(s);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, enumSignToInt_test_2)
{
    // Construct input
    enum Sign s = NEGATIVE;

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = enumSignToInt(s);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, enumSignToInt_test_3)
{
    // Construct input
    enum Sign s = ZERO;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = enumSignToInt(s);

    // Check results
    EXPECT_EQ(expected, actual);
}


TEST(regression, enumSignPointerToInt_test_1)
{
    // Construct input
    enum Sign s = NEGATIVE;

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = enumSignPointerToInt(&s);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, enumSignPointerToInt_test_2)
{
    // Construct input
    enum Sign s = POSITIVE;

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = enumSignPointerToInt(&s);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, enumSignPointerToInt_test_3)
{
    // Construct input
    enum Sign s = ZERO;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = enumSignPointerToInt(&s);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Typedef

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/types/typedefs_1.c#L20)
```cpp
typedef struct __typeDefStruct {
    int a;
} TypeDefStruct2;

int sign_of_typedef_struct2(TypeDefStruct2 x) {
    if (x.a > 0) {
        return 1;
    }

    if (x.a < 0) {
        return -1;
    }

    return 0;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/types/typedefs_1_test.cpp#L86)
```cpp
TEST(regression, sign_of_typedef_struct2_test_1)
{
    // Construct input
    TypeDefStruct2 x = {0};

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = sign_of_typedef_struct2(x);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, sign_of_typedef_struct2_test_2)
{
    // Construct input
    TypeDefStruct2 x = {-10};

    // Expected output
    int expected = -1;

    // Trigger the function
    int actual = sign_of_typedef_struct2(x);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, sign_of_typedef_struct2_test_3)
{
    // Construct input
    TypeDefStruct2 x = {1};

    // Expected output
    int expected = 1;

    // Trigger the function
    int actual = sign_of_typedef_struct2(x);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Static functions

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/static.c#L4)
```cpp
static int static_simple(int dx)
{
    if (x > 0)
    {
        return x + dx;
    }
    if (x < 0)
    {
        return -x + dx;
    }
    return 0;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/static_test.cpp#L11)
```cpp
TEST(regression, static_simple_test_1)
{
    // Initialize global variables
    x = 0;

    // Construct input
    int dx = 0;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = static_simple(dx);

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    int expected_x = 0;
    EXPECT_EQ(expected_x, x);
}

TEST(regression, static_simple_test_2)
{
    // Initialize global variables
    x = -10;

    // Construct input
    int dx = -10;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = static_simple(dx);

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    int expected_x = -10;
    EXPECT_EQ(expected_x, x);
}

TEST(regression, static_simple_test_3)
{
    // Initialize global variables
    x = 1;

    // Construct input
    int dx = -1;

    // Expected output
    int expected = 0;

    // Trigger the function
    int actual = static_simple(dx);

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    int expected_x = 1;
    EXPECT_EQ(expected_x, x);
}
```

## Qualifiers: const, volatile, restrict etc.

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/keywords/qualifiers.c#L45)
```cpp
const char * const foo_bar(volatile int a) {
    if (a < 0) {
        return "-1";
    } else if (a == 0) {
        return "0";
    } else {
        return "1";
    }
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/keywords/qualifiers_test.cpp#L192)
```cpp
TEST(regression, foo_bar_test_1)
{
    // Construct input
    int a = 2;

    // Expected output
    char expected = '1';

    // Trigger the function
    const char actual = *foo_bar(a);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, foo_bar_test_2)
{
    // Construct input
    int a = 0;

    // Expected output
    char expected = '0';

    // Trigger the function
    const char actual = *foo_bar(a);

    // Check results
    EXPECT_EQ(expected, actual);
}

TEST(regression, foo_bar_test_3)
{
    // Construct input
    int a = -1;

    // Expected output
    char expected = '-';

    // Trigger the function
    const char actual = *foo_bar(a);

    // Check results
    EXPECT_EQ(expected, actual);
}
```

## Global variables

###### [Source code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/lib/globals.c#L60)
```cpp
static char* global_mutable_string;
static const char* global_const_string;


char use_global_strings() {
    if (!global_mutable_string) {
        return 'M';
    }
    if (!global_const_string) {
        return 'C';
    }
    char c = global_const_string[0];
    char res;
    if (c >= 'a' && c <= 'z') {
        res = 'A' + c - 'a';
    } else {
        res = c;
    }
    global_mutable_string[0] = res;
    return res;
}
```

###### [Tests code example](https://rnd-gitlab-msc.huawei.com/unittestbot/SampleSolutions/-/blob/master/cpp/c-example/tests-utbot/lib/globals_test.cpp#L177)
```cpp
TEST(regression, use_global_strings_test_1)
{
    // Initialize global variables
    char global_mutable_string_buffer[] = "ccacccbbbc";
    global_mutable_string = global_mutable_string_buffer;
    char global_const_string_buffer[] = "{ccaccccc{";
    global_const_string = global_const_string_buffer;


    // Expected output
    char expected = '{';

    // Trigger the function
    char actual = use_global_strings();

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    char expected_global_mutable_string = '{';
    EXPECT_EQ(expected_global_mutable_string, (*global_mutable_string));
    char expected_global_const_string = '{';
    EXPECT_EQ(expected_global_const_string, (*global_const_string));
}

TEST(regression, use_global_strings_test_2)
{
    // Initialize global variables
    char global_mutable_string_buffer[] = "ccacccbbbc";
    global_mutable_string = global_mutable_string_buffer;
    char global_const_string_buffer[] = "cccacccccc";
    global_const_string = global_const_string_buffer;


    // Expected output
    char expected = 'C';

    // Trigger the function
    char actual = use_global_strings();

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    char expected_global_mutable_string = 'C';
    EXPECT_EQ(expected_global_mutable_string, (*global_mutable_string));
    char expected_global_const_string = 'c';
    EXPECT_EQ(expected_global_const_string, (*global_const_string));
}

TEST(regression, use_global_strings_test_3)
{
    // Initialize global variables
    char global_mutable_string_buffer[] = "ccacccbbbc";
    global_mutable_string = global_mutable_string_buffer;
    char global_const_string_buffer[] = "";
    global_const_string = global_const_string_buffer;


    // Expected output
    char expected = '\0';

    // Trigger the function
    char actual = use_global_strings();

    // Check results
    EXPECT_EQ(expected, actual);
    // Check global variables
    char expected_global_mutable_string = '\0';
    EXPECT_EQ(expected_global_mutable_string, (*global_mutable_string));
    char expected_global_const_string = '\0';
    EXPECT_EQ(expected_global_const_string, (*global_const_string));
}
```
