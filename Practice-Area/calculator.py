def getUserInput():
    user_input = int(input("Enter an integer: "))
    return user_input

def getMathematicalOperation():
    operator = input("Enter operator: ")
    return operator

def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    return num1 / num2

num1 = getUserInput()

operator = getMathematicalOperation()

num2 = getUserInput()

if operator == "+":
    answer = add(num1, num2)
    print(f"{num1} plus {num2} equals {answer}")
elif operator == "-":
    answer = subtract(num1, num2)
    print(f"{num1} minus {num2} equals {answer}")
elif operator == "*":
    answer = multiply(num1, num2)
    print(f"{num1} times {num2} equals {answer}")
elif operator == "/":
    answer = divide(num1, num2)   
    print(f"{num1} divided by {num2} equals {answer}")

