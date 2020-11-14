'''
The provided code stub reads two integers from STDIN, a and b. Add code to print three lines where: 
The first line contains the sum of the two numbers.
The second line contains the difference of the two numbers (first - second).
The third line contains the product of the two numbers.
'''

def math_ops(a, b):
  print(a + b)
  print(a - b)
  print(a * b)

'''
Print division and floor division.
'''

def division_func(a, b):
  print(a // b)
  print(a / b)


'''
The provided code stub reads and integer n from STDIN. For all non-negative integers i < n print i^2. 
'''

def loops_func(n):
  x = range(0, n-1)

  for n in x:
    print (n**2)

'''
Function calls
'''

math_ops(5, 9)
division_func(3, 5)
loops_func(6)