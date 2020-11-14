'''
Given an integer, perform the following conditional actions:

If is odd, print Weird
If is even and in the inclusive range of 2 to 5print Not Weird
If is even and in the inclusive range of 6 to 20 print Weird
If is even and greater than 20 print Not Weird
'''

def is_weird(n):
  # If n is odd or in the range [6, 20]
  if n % 2 or n >= 6 and n <= 20:
    print('Weird')

  # If n is even or in the range [2, 5]
  # If there is not a remainder from the operation n % 2, it is even.
  elif not n % 2 or n >= 2 and n <= 5:
    print('Not Weird')

is_weird(20)

