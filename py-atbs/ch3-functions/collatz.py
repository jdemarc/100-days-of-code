'''
The Collatz Sequence

Write a function named collatz() that has one parameter named number.
  If number is even, then collatz() should print number // 2 and return this value.
  If number is odd, then collatz() should print and return 3 * number + 1.

Then write a program that lets the user type in an integer and that keeps calling collatz() on that number
until the function returns the value 1.

Remember to convert the return value from input() to an integer with the int() function; otherwise, it will be a string value.

Hint: An integer number is even if number % 2 == 0, and it’s odd if number % 2 == 1.
'''

def main():
  try:
    user_input = input("Enter any integer: ")

    # Input comes in as a string, must be converted to integer.
    user_input = int(user_input)

    while user_input != 1:
      user_input = collatz(user_input)

  except:
    print('Non-integer entered.')

def collatz(number):
  # If user_input % 2 returns a value, it is odd.
  # If it returns 0, or falsy, it is even.
  # user_input % 2 != 0
  if (not number % 2):
    number = number // 2
  elif (number % 2):
    number = 3 * number + 1
  
  print(number)
  return number

# MAIN
if __name__ == "__main__":
  main()

