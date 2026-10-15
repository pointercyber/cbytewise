export const modules = [
  {
    "id": "m1",
    "title": "Module 1 — C Fundamentals",
    "subtitle": "Control flow • Preprocessor • Functions • Storage classes • Recursion",
    "questions": [
      {
        "part": "Part A — 1-mark questions",
        "question": "What is the conditional operator in C?",
        "answer": "The conditional operator is ?: . It chooses one of two expressions based on a condition.",
        "reference": "Nov 2022 · Part A · Q1"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which return type indicates that a function returns no value?",
        "answer": "void.",
        "reference": "Nov 2022 · Part A · Q2"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which storage class has global visibility in C?",
        "answer": "The extern storage class can refer to a global variable defined elsewhere; a file-scope variable normally has file scope.",
        "reference": "Nov 2022 · Part A · Q3"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Define recursion.",
        "answer": "Recursion is the process in which a function calls itself until a base condition is reached.",
        "reference": "Nov 2024 · Part A · Q2"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax of a for loop.",
        "answer": "for (initialization; condition; update) { statements; }",
        "reference": "Nov 2025 · Part A · Q1"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax of an if–else-if ladder.",
        "answer": "if (condition1) { ... } else if (condition2) { ... } else { ... }",
        "reference": "Nov 2024 · Part A · Q1"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Give two preprocessor directives.",
        "answer": "#include and #define.",
        "reference": "Nov 2025 · Part A · Q2"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "What is the default storage class of a local variable declared inside a function?",
        "answer": "auto.",
        "reference": "Nov 2023 · Part A · Q1"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which statement sends a value back to the calling function?",
        "answer": "The return statement.",
        "reference": "Nov 2023 · Part A · Q3"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "What is a function prototype?",
        "answer": "A declaration that specifies a function name, return type, and parameter types before the function is used.",
        "reference": "Module notes / exam topic"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Write the use of preprocessor directives with examples.",
        "answer": "Preprocessor directives are handled before compilation. `#include <stdio.h>` includes declarations from a header; `#define PI 3.14` defines a macro constant.",
        "reference": "Nov 2022 · Part B · Q1; Nov 2024 · Part C · Q3"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Differentiate function declaration and function definition.",
        "answer": "A declaration (prototype) tells the compiler the function signature, e.g. `int add(int, int);`. A definition provides the body, e.g. `int add(int a,int b){ return a+b; }`.",
        "reference": "Nov 2023 · Part B · Q4"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What are actual and formal parameters?",
        "answer": "Actual parameters are the values/variables supplied in a function call. Formal parameters are the local parameter variables listed in the function definition.",
        "reference": "Nov 2023 · Part C · Q3(a)"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Compare while and do-while loops.",
        "answer": "`while` checks its condition before the body, so it may execute zero times. `do-while` checks after the body, so it executes at least once.",
        "reference": "Nov 2024 · Part B · Q1; Nov 2025 · Part B · Q1"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Explain the static storage class.",
        "answer": "A static local variable retains its value between function calls and is initialized only once. Its lifetime is the entire program, while its local name remains visible only inside its block.",
        "reference": "Nov 2022 · Part C · Q5(b)"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is modular programming? Give advantages.",
        "answer": "Modular programming divides a program into functions or modules. It improves readability, testing, reuse, debugging, and maintenance.",
        "reference": "Nov 2023 · Part B · Q1"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Explain the storage classes in C.",
        "answer": "The common storage classes are auto, register, static, and extern. They describe aspects of a variable’s storage duration, scope/visibility, and linkage. `auto` is the default for local variables; `register` suggests fast access; `static` preserves storage duration or limits file visibility; `extern` declares a variable/function defined elsewhere. Exact scope depends on where the declaration appears.",
        "reference": "Nov 2022 · Part C · Q6; Nov 2024 · Part C · Q4; Nov 2025 · Part C · Q4"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a recursive C function to find the sum of the first n natural numbers.",
        "answer": "int sum(int n) {\n    if (n <= 0) return 0;\n    return n + sum(n - 1);\n}\n\nExample call: printf(\"%d\", sum(5)); // 15",
        "reference": "Nov 2022 · Part C · Q4"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a recursive program idea to print even numbers up to n.",
        "answer": "Use a base condition, then recurse with a smaller value. Example: `void even(int n){ if(n<2) return; even(n-2); printf(\"%d \",n); }` Call `even(n)` after ensuring the starting value is even.",
        "reference": "Nov 2024 · Part C · Q5"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a function-oriented program to reverse a number.",
        "answer": "int reverse(int n) {\n    int rev = 0;\n    while (n != 0) { rev = rev * 10 + n % 10; n /= 10; }\n    return rev;\n}\n// In main: printf(\"%d\", reverse(number));",
        "reference": "Nov 2023 · Part C · Q4; Nov 2024 · Part C · Q6"
      }
    ]
  },
  {
    "id": "m2",
    "title": "Module 2 — Arrays and Strings",
    "subtitle": "1D/2D arrays • Matrix programs • Searching • Sorting • String functions",
    "questions": [
      {
        "part": "Part A — 1-mark questions",
        "question": "What is the lowest index of an array in C?",
        "answer": "0.",
        "reference": "Nov 2024 · Part A · Q3"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which dimensional array is used to store a matrix?",
        "answer": "A two-dimensional array.",
        "reference": "Nov 2024 · Part A · Q4"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which library function returns the length of a string?",
        "answer": "strlen(), declared in <string.h>.",
        "reference": "Nov 2023 · Part A · Q4; Nov 2024 · Part A · Q5"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write an initialization statement for an array containing 3, 7, 2, 4, 1.",
        "answer": "int a[5] = {3, 7, 2, 4, 1};",
        "reference": "Nov 2023 · Part A · Q5"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "What character terminates a C string?",
        "answer": "The null character, written as \\0.",
        "reference": "Nov 2025 · Part A · Q3"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax for initializing a one-dimensional array.",
        "answer": "data_type array_name[size] = {value1, value2, ...};",
        "reference": "Nov 2025 · Part A · Q4"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "List four features of arrays.",
        "answer": "1. Store elements of the same data type. 2. Elements occupy contiguous memory. 3. Elements share one array name and are accessed by index. 4. Indexing starts at 0.",
        "reference": "Nov 2024 · Part B · Q2"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Differentiate one-dimensional and two-dimensional arrays.",
        "answer": "A one-dimensional array stores a linear list and uses one index, e.g. `a[i]`. A two-dimensional array represents rows and columns and uses two indices, e.g. `a[i][j]`.",
        "reference": "Nov 2023 · Part C · Q5(a)"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "How do you compare two strings for equality using a built-in function?",
        "answer": "Use `strcmp(s1, s2)` from <string.h>. It returns 0 when the strings are equal, a negative value when the first differs earlier with a lower character value, and a positive value when it differs with a higher character value.",
        "reference": "Nov 2022 · Part B · Q4"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Explain string copy and concatenation with syntax.",
        "answer": "`strcpy(destination, source)` copies the source string. `strcat(destination, source)` appends the source to the destination. Both are declared in <string.h>; the destination must have enough space.",
        "reference": "Nov 2024 · Part B · Q4"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "How is a one-dimensional array passed to a function?",
        "answer": "Pass the array name and usually its size: `display(a, n);`. The function can accept `void display(int a[], int n)` or `void display(int *a, int n)`. The array elements are not copied as a whole.",
        "reference": "Nov 2022 · Part B · Q5; Nov 2024 · Part B · Q5"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is array traversal?",
        "answer": "Traversal means visiting each array element in sequence, commonly using a loop to print or process each value.",
        "reference": "Module 2 notes · §2.2.1"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is binary search? State its condition.",
        "answer": "Binary search repeatedly compares the target with the middle element and discards half of the search range. The array must be sorted.",
        "reference": "Nov 2022 · Part C · Q7; Nov 2023 · Part C · Q6"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a C program to find the smallest element in a one-dimensional array.",
        "answer": "int a[5] = {8, 3, 9, 1, 6};\nint min = a[0];\nfor (int i = 1; i < 5; i++) {\n    if (a[i] < min) min = a[i];\n}\nprintf(\"Smallest = %d\", min);",
        "reference": "Nov 2024 · Part B · Q3"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write the algorithm for selection sort.",
        "answer": "For each position i, find the smallest element in the unsorted portion from i to n-1, then swap it with a[i]. Repeat until the array is sorted.",
        "reference": "Nov 2024 · Part C · Q8; Nov 2025 · Part C · Q8"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a C program to check whether a string is a palindrome.",
        "answer": "int i = 0, j = strlen(str) - 1, flag = 1;\nwhile (i < j) {\n    if (str[i] != str[j]) { flag = 0; break; }\n    i++; j--;\n}\nif (flag) printf(\"Palindrome\");\nelse printf(\"Not palindrome\");",
        "reference": "Nov 2023 · Part C · Q8; String and file practical PDF"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a C program to find the transpose of a matrix.",
        "answer": "For a matrix `a[r][c]`, transpose elements by assigning `t[j][i] = a[i][j]` for every valid row i and column j. Print `t` with c rows and r columns.",
        "reference": "Nov 2023 · Part C · Q5(b)"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Explain four string manipulation functions.",
        "answer": "`strlen(s)` returns string length; `strcpy(d,s)` copies a string; `strcat(d,s)` appends one string; `strcmp(a,b)` compares two strings. Include <string.h> to use these functions.",
        "reference": "Nov 2023 · Part C · Q7; Nov 2025 · Part C · Q9"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a program outline to count uppercase and lowercase characters in a string.",
        "answer": "Initialize `upper = 0` and `lower = 0`. Traverse the string until `\\0`; use `isupper((unsigned char)s[i])` and `islower((unsigned char)s[i])` from <ctype.h> to increment the appropriate counter.",
        "reference": "Nov 2025 · Part C · Q10"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "How do you calculate the sum of diagonal elements of a square matrix?",
        "answer": "Initialize `sum = 0`; for each i from 0 to n-1 add `a[i][i]`. For the secondary diagonal, add `a[i][n-1-i]`. Check that the matrix is square before processing.",
        "reference": "Nov 2025 · Part C · Q7"
      }
    ]
  },
  {
    "id": "m3",
    "title": "Module 3 — Pointers and Dynamic Memory",
    "subtitle": "Pointer basics • Address/dereference • Pointer arithmetic • Arrays • malloc/calloc/realloc/free",
    "questions": [
      {
        "part": "Part A — 1-mark questions",
        "question": "Define a pointer.",
        "answer": "A pointer is a variable that stores the memory address of another variable.",
        "reference": "Nov 2024 · Part A · Q6"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax for declaring a pointer variable.",
        "answer": "data_type *pointer_name; Example: `int *p;`",
        "reference": "Nov 2023 · Part A · Q7; Nov 2025 · Part A · Q5"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax of malloc().",
        "answer": "pointer = (type *) malloc(number_of_bytes); In C, casting the returned `void *` is optional. Include <stdlib.h>.",
        "reference": "Nov 2022 · Part A · Q7"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which function releases dynamically allocated memory?",
        "answer": "free().",
        "reference": "Nov 2023 · Part A · Q6; Nov 2025 · Part A · Q6"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "What does the address-of operator & do?",
        "answer": "It produces the memory address of an object.",
        "reference": "Module 3 notes · §3.1.3"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "List three advantages of pointers.",
        "answer": "Pointers support dynamic memory allocation, allow functions to modify caller variables through addresses, and provide efficient access to arrays/strings and linked data structures.",
        "reference": "Nov 2023 · Part B · Q7; Nov 2025 · Part B · Q5"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is call by reference in C? Give an example.",
        "answer": "C passes arguments by value, but a function can modify the original object by receiving its address. Example: `void change(int *p){ *p = 20; }` then call `change(&x);`.",
        "reference": "Nov 2022 · Part B · Q6"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Explain pointer arithmetic.",
        "answer": "Valid operations include increment/decrement, adding or subtracting an integer, and subtracting compatible pointers within the same array. Pointer increments move by the size of the pointed-to type.",
        "reference": "Nov 2023 · Part C · Q9(a)"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "How can array elements be accessed using a pointer?",
        "answer": "If `int a[] = {10,20,30}; int *p = a;`, then `*p` is 10, `*(p+1)` is 20, and `*(p+2)` is 30.",
        "reference": "Module 3 notes · pointer arithmetic"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is an array of pointers?",
        "answer": "It is an array whose elements are pointer variables. Example: `char *names[3] = {\"Ana\", \"Ben\", \"Kim\"};`.",
        "reference": "Nov 2023 · Part B · Q9; Nov 2024 · Part B · Q9"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Compare malloc() and calloc().",
        "answer": "`malloc(n)` allocates n bytes without initializing them. `calloc(count, size)` allocates space for count elements and initializes all bytes to zero. Both return NULL if allocation fails and their memory should be released with free().",
        "reference": "Nov 2023 · Part C · Q9(b)"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Explain dynamic memory allocation and the main functions.",
        "answer": "Dynamic memory allocation requests memory at runtime. `malloc(size)` allocates a block; `calloc(count,size)` allocates and zero-initializes an array; `realloc(ptr,new_size)` changes the size of an allocated block; `free(ptr)` releases it. These are declared in <stdlib.h>.",
        "reference": "Nov 2024 · Part C · Q10; Nov 2025 · Part C · Q11"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a function to swap two numbers using pointers.",
        "answer": "void swap(int *x, int *y) {\n    int temp = *x;\n    *x = *y;\n    *y = temp;\n}\n// Call: swap(&a, &b);",
        "reference": "Pointers practical PDF · “Swapping two numbers using pointer”"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a program idea to find the largest element in an array using pointers.",
        "answer": "Initialize `max = *arr`. For i from 1 to n-1, compare `*(arr+i)` with max and update max when larger. Return max.",
        "reference": "Pointers practical PDF · “Largest element in an array using pointer”"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a program to find the sum of natural numbers using pointers.",
        "answer": "Use a pointer to access each array element, or use a pointer parameter to a function. For an array `a`, accumulate `sum += *(a+i)` for each valid index i.",
        "reference": "Nov 2025 · Part C · Q12"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "What is a null pointer?",
        "answer": "A null pointer is a pointer value that is guaranteed not to point to a valid object or function. It can be written as `NULL` after including an appropriate standard header.",
        "reference": "Nov 2025 · Part B · Q4"
      }
    ]
  },
  {
    "id": "m4",
    "title": "Module 4 — Structures and Files",
    "subtitle": "Structures • Unions • enum • Member access • File operations • Command-line arguments",
    "questions": [
      {
        "part": "Part A — 1-mark questions",
        "question": "Which operator accesses a structure member through a structure variable?",
        "answer": "The dot operator (`.`).",
        "reference": "Nov 2022 · Part A · Q8"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Write the syntax of a union.",
        "answer": "union UnionName { data_type member1; data_type member2; };",
        "reference": "Nov 2024 · Part A · Q8"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Which function reads a character from a file?",
        "answer": "fgetc() (also getc()).",
        "reference": "Nov 2023 · Part A · Q8"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Define a structure.",
        "answer": "A structure is a user-defined data type that groups related members, which may have different data types, under one name.",
        "reference": "Nov 2025 · Part A · Q8"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "Name the different types of files in C.",
        "answer": "Text files and binary files.",
        "reference": "Nov 2025 · Part A · Q9"
      },
      {
        "part": "Part A — 1-mark questions",
        "question": "What is argc in command-line arguments?",
        "answer": "argc is the argument count: the number of command-line arguments passed to main, including the program name in the conventional hosted C environment.",
        "reference": "Nov 2023 · Part A · Q9"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "Compare an array and a structure.",
        "answer": "An array stores multiple elements of the same type accessed by index. A structure groups members that can have different types, accessed by member names.",
        "reference": "Nov 2025 · Part B · Q7"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "How do you declare and initialize a structure variable?",
        "answer": "Define `struct Student { int roll; float marks; };` then declare and initialize with `struct Student s = {1, 87.5f};`.",
        "reference": "Module 4 notes · §4.1.1–4.1.2"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What is an enumerated data type? Give syntax.",
        "answer": "An enum defines named integer constants. Example: `enum Day { MON, TUE, WED };`.",
        "reference": "Nov 2023 · Part B · Q8; Nov 2024 · Part B · Q10"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "List common file opening modes.",
        "answer": "`r` read existing file; `w` write/create or truncate; `a` append/create; `r+` read/write existing; `w+` read/write and truncate/create; `a+` read/append. Add `b` for binary mode where relevant.",
        "reference": "Nov 2025 · Part B · Q9"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "List three file-handling functions and their uses.",
        "answer": "`fopen()` opens a file; `fgetc()` reads a character; `fputc()` writes a character; `fclose()` closes a stream.",
        "reference": "Nov 2023 · Part B · Q10"
      },
      {
        "part": "Part B — 3-mark questions",
        "question": "What are command-line arguments in C?",
        "answer": "They are values passed to a program at launch and received by `int main(int argc, char *argv[])`. `argc` counts arguments; `argv` is an array of argument strings.",
        "reference": "Nov 2022 · Part C · Q12; Nov 2025 · Part B · Q10"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a structure-based program outline to store student details.",
        "answer": "Define `struct Student { int rollNo; char name[50]; float cgpa; };`. Read n students into an array of structures, then loop through the array and print each student’s roll number, name and CGPA.",
        "reference": "Nov 2024 · Part C · Q11; Structure practical PDF"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Write a program outline to add two complex numbers using structures.",
        "answer": "Define `struct Complex { float real, imag; };`. Read two values, calculate `sum.real = a.real + b.real` and `sum.imag = a.imag + b.imag`, then print the resulting real and imaginary parts.",
        "reference": "Nov 2024 · Part C · Q13; Structure practical PDF"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Explain the basic steps in file processing.",
        "answer": "1. Declare a `FILE *`. 2. Open with `fopen()` and check for NULL. 3. Read or write using functions such as `fgetc()`, `fputc()`, `fscanf()` or `fprintf()`. 4. Check errors/end-of-file where appropriate. 5. Close with `fclose()`.",
        "reference": "Nov 2022 · Part B · Q10"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "Explain five file-handling functions.",
        "answer": "`fopen()` opens a file; `fclose()` closes it; `fgetc()` reads one character; `fputc()` writes one character; `fgets()` reads a line/string; `fputs()` writes a string. `fprintf()` and `fscanf()` provide formatted file I/O.",
        "reference": "Nov 2025 · Part C · Q14"
      },
      {
        "part": "Part C — 7-mark questions",
        "question": "How do you copy the contents of one file into another?",
        "answer": "Open the source in read mode and destination in write mode. Check both file pointers. Repeatedly read a character with `fgetc()` until EOF and write it using `fputc()`. Close both files.",
        "reference": "String and file practical PDF · “Copy contents of one file into another file”"
      }
    ]
  }
];

export const quizBank = [
  {
    "id": "c001",
    "module": "m1",
    "question": "What is the conditional operator in C?",
    "options": [
      "?:",
      "&&",
      "sizeof",
      "::"
    ],
    "answer": 0,
    "hint": "It selects one of two expressions based on a condition.",
    "explanation": "It selects one of two expressions based on a condition.",
    "reference": "Nov 2022"
  },
  {
    "id": "c002",
    "module": "m1",
    "question": "Which return type means a function returns no value?",
    "options": [
      "int",
      "char",
      "void",
      "float"
    ],
    "answer": 2,
    "hint": "void indicates that no value is returned.",
    "explanation": "void indicates that no value is returned.",
    "reference": "Nov 2022"
  },
  {
    "id": "c003",
    "module": "m1",
    "question": "Which is the default storage class for a local variable?",
    "options": [
      "extern",
      "auto",
      "static",
      "register"
    ],
    "answer": 1,
    "hint": "A local variable has auto storage class by default.",
    "explanation": "A local variable has auto storage class by default.",
    "reference": "Nov 2023"
  },
  {
    "id": "c004",
    "module": "m1",
    "question": "Which statement returns a value from a function?",
    "options": [
      "break",
      "continue",
      "return",
      "goto"
    ],
    "answer": 2,
    "hint": "return sends control back to the caller and can provide a value.",
    "explanation": "return sends control back to the caller and can provide a value.",
    "reference": "Nov 2023"
  },
  {
    "id": "c005",
    "module": "m1",
    "question": "What is recursion?",
    "options": [
      "A loop only",
      "A function calling itself",
      "A pointer declaration",
      "A file mode"
    ],
    "answer": 1,
    "hint": "A recursive function calls itself and needs a base case.",
    "explanation": "A recursive function calls itself and needs a base case.",
    "reference": "Nov 2024"
  },
  {
    "id": "c006",
    "module": "m1",
    "question": "Which directive includes a header file?",
    "options": [
      "#define",
      "#include",
      "#ifdef",
      "#return"
    ],
    "answer": 1,
    "hint": "#include makes header declarations available.",
    "explanation": "#include makes header declarations available.",
    "reference": "Nov 2022/2024"
  },
  {
    "id": "c007",
    "module": "m1",
    "question": "Which operator is the conditional operator?",
    "options": [
      "&&",
      "?:",
      "->",
      "%"
    ],
    "answer": 1,
    "hint": "The conditional operator uses ? and :.",
    "explanation": "The conditional operator uses ? and :.",
    "reference": "Nov 2022"
  },
  {
    "id": "c008",
    "module": "m1",
    "question": "Which loop executes its body at least once?",
    "options": [
      "for",
      "while",
      "do-while",
      "if"
    ],
    "answer": 2,
    "hint": "do-while tests the condition after executing the body.",
    "explanation": "do-while tests the condition after executing the body.",
    "reference": "Nov 2024"
  },
  {
    "id": "c009",
    "module": "m2",
    "question": "Which index refers to the first array element?",
    "options": [
      "0",
      "1",
      "-1",
      "Depends on size"
    ],
    "answer": 0,
    "hint": "C arrays are zero-indexed.",
    "explanation": "C arrays are zero-indexed.",
    "reference": "Nov 2024"
  },
  {
    "id": "c010",
    "module": "m2",
    "question": "Which function finds a string length?",
    "options": [
      "strcpy()",
      "strlen()",
      "strcat()",
      "strcmp()"
    ],
    "answer": 1,
    "hint": "strlen() returns the number of characters before the null terminator.",
    "explanation": "strlen() returns the number of characters before the null terminator.",
    "reference": "Nov 2023/2024"
  },
  {
    "id": "c011",
    "module": "m2",
    "question": "Which character terminates a C string?",
    "options": [
      "space",
      "newline",
      "\\0",
      "EOF"
    ],
    "answer": 2,
    "hint": "The null character marks the end of a C string.",
    "explanation": "The null character marks the end of a C string.",
    "reference": "Nov 2025"
  },
  {
    "id": "c012",
    "module": "m2",
    "question": "Which header declares strlen and strcpy?",
    "options": [
      "stdio.h",
      "stdlib.h",
      "string.h",
      "ctype.h"
    ],
    "answer": 2,
    "hint": "String handling functions are declared in <string.h>.",
    "explanation": "String handling functions are declared in <string.h>.",
    "reference": "Module 2 notes"
  },
  {
    "id": "c013",
    "module": "m2",
    "question": "Which function compares two strings?",
    "options": [
      "strcmp()",
      "strcat()",
      "strcpy()",
      "strlen()"
    ],
    "answer": 0,
    "hint": "strcmp compares two strings and returns zero when they are equal.",
    "explanation": "strcmp compares two strings and returns zero when they are equal.",
    "reference": "Nov 2022"
  },
  {
    "id": "c014",
    "module": "m2",
    "question": "What must be true before binary search is used?",
    "options": [
      "Array must be sorted",
      "Array must have 2 elements",
      "Values must be negative",
      "Array must be characters"
    ],
    "answer": 0,
    "hint": "Binary search depends on sorted order.",
    "explanation": "Binary search depends on sorted order.",
    "reference": "Nov 2023/2024"
  },
  {
    "id": "c015",
    "module": "m2",
    "question": "In selection sort, what is selected in each pass?",
    "options": [
      "A random element",
      "The minimum from the unsorted part",
      "Always the last element",
      "The middle element"
    ],
    "answer": 1,
    "hint": "Selection sort finds the minimum remaining element and swaps it into place.",
    "explanation": "Selection sort finds the minimum remaining element and swaps it into place.",
    "reference": "Nov 2024/2025"
  },
  {
    "id": "c016",
    "module": "m2",
    "question": "Which type of array is used for a matrix?",
    "options": [
      "One-dimensional",
      "Two-dimensional",
      "Pointer only",
      "Character array only"
    ],
    "answer": 1,
    "hint": "A matrix is commonly represented by a two-dimensional array.",
    "explanation": "A matrix is commonly represented by a two-dimensional array.",
    "reference": "Nov 2024"
  },
  {
    "id": "c017",
    "module": "m2",
    "question": "How are array elements passed to a function most commonly?",
    "options": [
      "Pass array name and size",
      "Copy source file",
      "Pass only the last element",
      "Use #define"
    ],
    "answer": 0,
    "hint": "The array name provides access to its first element; the size is typically passed separately.",
    "explanation": "The array name provides access to its first element; the size is typically passed separately.",
    "reference": "Nov 2022/2024"
  },
  {
    "id": "c018",
    "module": "m3",
    "question": "A pointer stores what?",
    "options": [
      "A file mode",
      "An address",
      "Only a character",
      "A loop condition"
    ],
    "answer": 1,
    "hint": "A pointer stores a memory address.",
    "explanation": "A pointer stores a memory address.",
    "reference": "Nov 2024"
  },
  {
    "id": "c019",
    "module": "m3",
    "question": "What does &x mean in C?",
    "options": [
      "Value at x",
      "Address of x",
      "Logical AND only",
      "Size of x"
    ],
    "answer": 1,
    "hint": "The unary address-of operator yields the address of x.",
    "explanation": "The unary address-of operator yields the address of x.",
    "reference": "Module 3 notes"
  },
  {
    "id": "c020",
    "module": "m3",
    "question": "What does *p mean when p is a valid pointer?",
    "options": [
      "Address of p only",
      "Value at the pointed-to address",
      "A multiplication only",
      "A string terminator"
    ],
    "answer": 1,
    "hint": "Unary * dereferences the pointer.",
    "explanation": "Unary * dereferences the pointer.",
    "reference": "Module 3 notes"
  },
  {
    "id": "c021",
    "module": "m3",
    "question": "Which function allocates uninitialized memory dynamically?",
    "options": [
      "calloc()",
      "malloc()",
      "free()",
      "fopen()"
    ],
    "answer": 1,
    "hint": "malloc allocates a block without initializing its contents.",
    "explanation": "malloc allocates a block without initializing its contents.",
    "reference": "Nov 2022/2023"
  },
  {
    "id": "c022",
    "module": "m3",
    "question": "Which function initializes allocated bytes to zero?",
    "options": [
      "malloc()",
      "realloc()",
      "calloc()",
      "free()"
    ],
    "answer": 2,
    "hint": "calloc allocates an array and zero-initializes its bytes.",
    "explanation": "calloc allocates an array and zero-initializes its bytes.",
    "reference": "Nov 2023"
  },
  {
    "id": "c023",
    "module": "m3",
    "question": "Which function releases dynamically allocated memory?",
    "options": [
      "delete()",
      "remove()",
      "free()",
      "fclose()"
    ],
    "answer": 2,
    "hint": "free releases a block allocated dynamically.",
    "explanation": "free releases a block allocated dynamically.",
    "reference": "Nov 2023/2025"
  },
  {
    "id": "c024",
    "module": "m3",
    "question": "What should a program check after malloc?",
    "options": [
      "It equals 1",
      "Whether it returned NULL",
      "Whether it is a string",
      "Whether file is open"
    ],
    "answer": 1,
    "hint": "Allocation can fail; check for NULL before using the pointer.",
    "explanation": "Allocation can fail; check for NULL before using the pointer.",
    "reference": "Module 3 notes"
  },
  {
    "id": "c025",
    "module": "m3",
    "question": "Which expression accesses the second element through pointer p to an array?",
    "options": [
      "*p+2",
      "*(p+1)",
      "&p[0]",
      "p**"
    ],
    "answer": 1,
    "hint": "Pointer arithmetic advances by one element for p+1.",
    "explanation": "Pointer arithmetic advances by one element for p+1.",
    "reference": "Module 3 notes"
  },
  {
    "id": "c026",
    "module": "m3",
    "question": "Which is the correct pointer declaration?",
    "options": [
      "int p*;",
      "int *p;",
      "pointer int p;",
      "int &p;"
    ],
    "answer": 1,
    "hint": "The asterisk marks p as a pointer to int.",
    "explanation": "The asterisk marks p as a pointer to int.",
    "reference": "Nov 2023/2025"
  },
  {
    "id": "c027",
    "module": "m4",
    "question": "Which operator accesses a member of a structure variable?",
    "options": [
      "->",
      ".",
      "::",
      "[]"
    ],
    "answer": 1,
    "hint": "The dot operator accesses a member through a structure value.",
    "explanation": "The dot operator accesses a member through a structure value.",
    "reference": "Nov 2022"
  },
  {
    "id": "c028",
    "module": "m4",
    "question": "Which operator accesses a structure member through a pointer?",
    "options": [
      ".",
      "->",
      "&",
      "%"
    ],
    "answer": 1,
    "hint": "The arrow operator dereferences a structure pointer and accesses a member.",
    "explanation": "The arrow operator dereferences a structure pointer and accesses a member.",
    "reference": "Module 4 notes"
  },
  {
    "id": "c029",
    "module": "m4",
    "question": "A structure can contain:",
    "options": [
      "Only integers",
      "Only same-type members",
      "Different data types",
      "Only pointers"
    ],
    "answer": 2,
    "hint": "Structures group members of possibly different types.",
    "explanation": "Structures group members of possibly different types.",
    "reference": "Module 4 notes"
  },
  {
    "id": "c030",
    "module": "m4",
    "question": "Which keyword defines an enumerated type?",
    "options": [
      "enum",
      "union",
      "typedef only",
      "struct"
    ],
    "answer": 0,
    "hint": "enum defines named integer constants.",
    "explanation": "enum defines named integer constants.",
    "reference": "Nov 2023/2024"
  },
  {
    "id": "c031",
    "module": "m4",
    "question": "Which function opens a file?",
    "options": [
      "fopen()",
      "fclose()",
      "fgetc()",
      "fputc()"
    ],
    "answer": 0,
    "hint": "fopen returns a FILE pointer or NULL on failure.",
    "explanation": "fopen returns a FILE pointer or NULL on failure.",
    "reference": "Nov 2022/2023"
  },
  {
    "id": "c032",
    "module": "m4",
    "question": "Which mode opens a text file for appending?",
    "options": [
      "r",
      "w",
      "a",
      "x"
    ],
    "answer": 2,
    "hint": "a opens for append, creating the file if needed.",
    "explanation": "a opens for append, creating the file if needed.",
    "reference": "Nov 2025"
  },
  {
    "id": "c033",
    "module": "m4",
    "question": "Which function reads one character from a file?",
    "options": [
      "fputc()",
      "fgetc()",
      "fclose()",
      "fopen()"
    ],
    "answer": 1,
    "hint": "fgetc reads the next character and returns EOF at end/error.",
    "explanation": "fgetc reads the next character and returns EOF at end/error.",
    "reference": "Nov 2023"
  },
  {
    "id": "c034",
    "module": "m4",
    "question": "Which function closes a file stream?",
    "options": [
      "fclose()",
      "closefile()",
      "fend()",
      "free()"
    ],
    "answer": 0,
    "hint": "fclose flushes/finishes stream processing and closes the stream.",
    "explanation": "fclose flushes/finishes stream processing and closes the stream.",
    "reference": "Nov 2025"
  },
  {
    "id": "c035",
    "module": "m4",
    "question": "What does argc represent in main arguments?",
    "options": [
      "Argument count",
      "Argument character",
      "Array capacity",
      "Current line"
    ],
    "answer": 0,
    "hint": "argc counts command-line arguments including the program name in hosted C.",
    "explanation": "argc counts command-line arguments including the program name in hosted C.",
    "reference": "Nov 2023"
  },
  {
    "id": "c036",
    "module": "m4",
    "question": "What does argv represent?",
    "options": [
      "A variable-length integer",
      "Array of argument strings",
      "A file pointer",
      "An enum"
    ],
    "answer": 1,
    "hint": "argv is an array of strings containing command-line arguments.",
    "explanation": "argv is an array of strings containing command-line arguments.",
    "reference": "Nov 2022/2025"
  },
  {
    "id": "c037",
    "module": "m2",
    "question": "What is the usual type of a text file?",
    "options": [
      "A file containing readable character data",
      "Only machine code",
      "A pointer",
      "A structure"
    ],
    "answer": 0,
    "hint": "Text files store character-oriented data.",
    "explanation": "Text files store character-oriented data.",
    "reference": "Nov 2025"
  },
  {
    "id": "c038",
    "module": "m2",
    "question": "Which operation copies one string into another?",
    "options": [
      "strcat()",
      "strcpy()",
      "strcmp()",
      "strlen()"
    ],
    "answer": 1,
    "hint": "strcpy copies the source string into the destination buffer.",
    "explanation": "strcpy copies the source string into the destination buffer.",
    "reference": "Nov 2024"
  },
  {
    "id": "c039",
    "module": "m1",
    "question": "Which operation appends one string to another?",
    "options": [
      "strcat()",
      "strcmp()",
      "strlen()",
      "strchr()"
    ],
    "answer": 0,
    "hint": "strcat appends the source to the destination.",
    "explanation": "strcat appends the source to the destination.",
    "reference": "Nov 2024"
  },
  {
    "id": "c040",
    "module": "m1",
    "question": "What is the base case in recursion for?",
    "options": [
      "To stop recursive calls",
      "To allocate a file",
      "To declare an array",
      "To include a header"
    ],
    "answer": 0,
    "hint": "A base case prevents infinite recursion.",
    "explanation": "A base case prevents infinite recursion.",
    "reference": "Nov 2022/2024"
  },
  {
    "id": "c041",
    "module": "m1",
    "question": "What is a function prototype?",
    "options": [
      "Function body",
      "Function signature declaration",
      "A loop",
      "A file mode"
    ],
    "answer": 1,
    "hint": "It declares return and parameter types before use.",
    "explanation": "It declares return and parameter types before use.",
    "reference": "Nov 2023/2025"
  },
  {
    "id": "c042",
    "module": "m1",
    "question": "What does static local storage do?",
    "options": [
      "Resets every call",
      "Retains value between calls",
      "Makes the variable a pointer",
      "Opens a file"
    ],
    "answer": 1,
    "hint": "A static local variable keeps its stored value between calls.",
    "explanation": "A static local variable keeps its stored value between calls.",
    "reference": "Nov 2022"
  },
  {
    "id": "c043",
    "module": "m4",
    "question": "What is the purpose of #define?",
    "options": [
      "Open a file",
      "Define a macro",
      "Return a value",
      "Allocate memory"
    ],
    "answer": 1,
    "hint": "#define defines a macro or symbolic constant.",
    "explanation": "#define defines a macro or symbolic constant.",
    "reference": "Nov 2024"
  },
  {
    "id": "c044",
    "module": "m4",
    "question": "Which file function writes a character?",
    "options": [
      "fgetc()",
      "fputc()",
      "fopen()",
      "feof()"
    ],
    "answer": 1,
    "hint": "fputc writes a character to a stream.",
    "explanation": "fputc writes a character to a stream.",
    "reference": "Nov 2022"
  },
  {
    "id": "c045",
    "module": "m4",
    "question": "A union stores its members:",
    "options": [
      "In completely separate storage always",
      "Sharing the same memory area",
      "Only in a file",
      "Only as strings"
    ],
    "answer": 1,
    "hint": "Union members share storage; only one member value is meaningfully stored at a time.",
    "explanation": "Union members share storage; only one member value is meaningfully stored at a time.",
    "reference": "Nov 2024"
  },
  {
    "id": "c046",
    "module": "m4",
    "question": "How do you call swap for integers a and b when it takes int pointers?",
    "options": [
      "swap(a,b)",
      "swap(*a,*b)",
      "swap(&a,&b)",
      "swap(int a,int b)"
    ],
    "answer": 2,
    "hint": "Pass the addresses so the function can modify the originals.",
    "explanation": "Pass the addresses so the function can modify the originals.",
    "reference": "Pointers practical PDF"
  },
  {
    "id": "c047",
    "module": "m4",
    "question": "What should be done after finishing file operations?",
    "options": [
      "Call free on FILE",
      "Close each opened stream",
      "Call strlen",
      "Reinitialize argc"
    ],
    "answer": 1,
    "hint": "Close opened files using fclose.",
    "explanation": "Close opened files using fclose.",
    "reference": "Nov 2022/2025"
  },
  {
    "id": "c048",
    "module": "m3",
    "question": "Which file mode truncates an existing file for writing?",
    "options": [
      "r",
      "a",
      "w",
      "r+"
    ],
    "answer": 2,
    "hint": "w creates or truncates a file for writing.",
    "explanation": "w creates or truncates a file for writing.",
    "reference": "Nov 2025"
  },
  {
    "id": "c049",
    "module": "m2",
    "question": "Which statement about arrays in C is correct?",
    "options": [
      "Array indices start at 1",
      "Array elements share a common type",
      "Arrays always grow dynamically",
      "Arrays cannot use loops"
    ],
    "answer": 1,
    "hint": "An array stores elements of one type in contiguous memory.",
    "explanation": "An array stores elements of one type in contiguous memory.",
    "reference": "Module 2 notes"
  },
  {
    "id": "c050",
    "module": "m4",
    "question": "Which function can change the size of an allocated block?",
    "options": [
      "realloc()",
      "fclose()",
      "strlen()",
      "strcmp()"
    ],
    "answer": 0,
    "hint": "realloc adjusts the size of an existing allocated block.",
    "explanation": "realloc adjusts the size of an existing allocated block.",
    "reference": "Nov 2025"
  }
];

export const paperReferences = [
  {
    "year": "2022",
    "title": "Diploma Examination in Programming in C — November 2022",
    "file": "3132-2022-Nov(1).pdf",
    "note": "75 marks · 3 hours · Part A, Part B and Part C"
  },
  {
    "year": "2023",
    "title": "Diploma Examination in Programming in C — November 2023",
    "file": "TED(21)3132_qp (1)(2).pdf",
    "note": "75 marks · 3 hours · Part A, Part B and Part C"
  },
  {
    "year": "2024",
    "title": "Diploma Examination in Programming in C — November 2024",
    "file": "TED(21)3132_qp(2).pdf",
    "note": "75 marks · 3 hours · Part A, Part B and Part C"
  },
  {
    "year": "2025",
    "title": "Diploma Examination in Programming in C — November 2025",
    "file": "TED(21)31323132 (1)(2).pdf",
    "note": "75 marks · 3 hours · Part A, Part B and Part C"
  }
];

export const referenceSources = [
  {title:"Module 2 — Concept of Arrays", file:"C_Module_2(1).pdf", kind:"Module notes", topics:"Array declaration and initialization, traversal, searching, sorting, matrices and strings."},
  {title:"Module 3 — Pointers", file:"C_Module_3(1).pdf", kind:"Module notes", topics:"Pointer declaration, address and dereference operators, pointer arithmetic, arrays and dynamic memory."},
  {title:"Module 4 — Structure and File", file:"C_Module_4(1).pdf", kind:"Module notes", topics:"Structures, members, unions, enumerated types and file processing."},
  {title:"Pointer practical programs", file:"Pointers(1).pdf", kind:"Practical reference", topics:"Swap two numbers using pointers; find the largest array element using a pointer."},
  {title:"String and file practicals", file:"String and file(2).pdf", kind:"Practical reference", topics:"Palindrome string; copy contents of one file into another."},
  {title:"Structure practical programs", file:"Structure (1).pdf", kind:"Practical reference", topics:"Student details using array of structures; addition of complex numbers using structures."},
  {title:"Diploma Programming in C — November 2022", file:"3132-2022-Nov(1).pdf", kind:"Past question paper", topics:"75 marks · 3 hours · Parts A, B and C."},
  {title:"Diploma Programming in C — November 2023", file:"TED(21)3132_qp (1)(2).pdf", kind:"Past question paper", topics:"75 marks · 3 hours · Parts A, B and C."},
  {title:"Diploma Programming in C — November 2024", file:"TED(21)3132_qp(2).pdf", kind:"Past question paper", topics:"75 marks · 3 hours · Parts A, B and C."},
  {title:"Diploma Programming in C — November 2025", file:"TED(21)31323132 (1)(2).pdf", kind:"Past question paper", topics:"75 marks · 3 hours · Parts A, B and C."}
];
