'''
spam = ['apples', 'bananas', 'tofu', 'cats']

Write a function that takes a list value as an argument and returns a string with all the items separated by a comma and a space,
with and inserted before the last item. For example, passing the previous spam list to the function
would return 'apples, bananas, tofu, and cats'. But your function should be able to work with any list value passed to it.
Be sure to test the case where an empty list [] is passed to your function.
'''

def format_string(list):
  # Use join to add commas between each item in the list, not including the last item.
  # Concatenate ', and ' + the last item
  new_list = ', '.join(list[:-1]) + ', and ' + list[-1]

  print(new_list)
  return new_list

spam = ['apples', 'bananas', 'tofu', 'cats']

format_string(spam)