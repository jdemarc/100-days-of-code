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

# Similar to arrays (C)

list = [ 'elmo', 42 , .67, 'Mariah Carrie']
tinylist = [123, 'bee']

print(list)          # Prints complete list
print(list[0])       # Prints first element of the list
print(list[1:3])     # Prints elements starting from 2nd till 3rd 
print(list[2:])      # Prints elements starting from 3rd element
print(tinylist * 2)  # Prints list two times
print(list + tinylist) # Prints concatenated lists


### TUPLES ###

# 'Read Only lists'

tuple = ( 'abcd', 786 , 2.23, 'john', 70.2  )
tinytuple = (123, 'john')

print(tuple)              # Prints the complete tuple
print(tuple[0])            # Prints first element of the tuple
print(tuple[1:3])          # Prints elements of the tuple starting from 2nd till 3rd 
print(tuple[2:])           # Prints elements of the tuple starting from 3rd element
print(tinytuple * 2)       # Prints the contents of the tuple twice
print(tuple + tinytuple)   # Prints concatenated tuples

# tuple[0] = 'bread' # type error

### DICTIONARY ###

# Key value pairs enclosed in curly braces.

dict = {}
dict['one'] = "This is one"
dict[2]     = "This is two"

tinydict = {'name': 'john','code':6734, 'dept': 'sales'}


print(dict['one'])       # Prints value for 'one' key
print(dict[2])           # Prints value for 2 key, 
print(tinydict)          # Prints complete dictionary
print(tinydict.keys())   # Prints all the keys 'name', 'code', 'dept'
print(tinydict.values()) # Prints all the values, 'john', 6734, 'sales'

### DATA CONVERSION ###

'''
int(x [,base])

Converts x to an integer. base specifies the base if x is a string.

long(x [,base] )
Converts x to a long integer. base specifies the base if x is a string.

float(x)
Converts x to a floating-point number.

complex(real [,imag])
Creates a complex number.

str(x)
Converts object x to a string representation.

repr(x)
Converts object x to an expression string.

eval(str)
Evaluates a string and returns an object.

tuple(s)
Converts s to a tuple.

list(s)
Converts s to a list.

set(s)
Converts s to a set.

dict(d)
Creates a dictionary. d must be a sequence of (key,value) tuples.

frozenset(s)
Converts s to a frozen set.

chr(x)
Converts an integer to a character.

unichr(x)
Converts an integer to a Unicode character.

ord(x)
Converts a single character to its integer value.

hex(x)
Converts an integer to a hexadecimal string.

oct(x)
Converts an integer to an octal string.
'''