'''
Basic Python variables types.
Lesson comes from https://www.tutorialspoint.com/python/python_variable_types.htm.
'''

# Variables are reserved memory locations.

# The interpreter allocates memory and decides what can be stored based on the data type.

# Python variables do not need explicit declaration. The declaration happens when a value is assigned
# to the variable.

name = 'Joe'
age = 28

print(name) # Joe

# Multiple assignment can be performed as follows:

a = b = d = 2

print(a, b, d) # 2 2 2

one, two, three = 1, 'two', 3.0

print(one, two, three) # 1 two 3.0

'''
Five standard data types:
Numbers, String, List, Tuple, Dictionary
'''

### NUMBERS ###

# Store numeric values.
# int, long, float, complex

var1 = 1
var2 = 10

# You can delete the reference to a number using 'del' statement.

del var2

### STRINGS ###

str = 'The Krusty Crab Pizza!'
#      0123456789...........21

print(str)          # Prints complete string
print(str[0])       # Prints first character of the string
print(str[2:5])     # Prints characters starting from 3rd to 5th
print(str[2:])      # Prints string starting from 3rd character
print(str * 2)      # Prints string two times
print(str + "TEST") # Prints concatenated string

### LISTS ###

list = [ 'elmo', 42 , .67, 'Mariah Carrie']
tinylist = [123, 'bee']

print(list)          # Prints complete list
print(list[0])       # Prints first element of the list
print(list[1:3])     # Prints elements starting from 2nd till 3rd 
print(list[2:])      # Prints elements starting from 3rd element
print(tinylist * 2)  # Prints list two times
print(list + tinylist) # Prints concatenated lists