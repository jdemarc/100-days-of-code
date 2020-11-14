'''
Given a year, determine whether it is a leap year.
If it is a leap year, return the Boolean True, otherwise return False.

In the Gregorian calendar, three conditions are used to identify leap years:

    The year can be evenly divided by 4, is a leap year, unless:
        The year can be evenly divided by 100, it is NOT a leap year, unless:
            The year is also evenly divisible by 400. Then it is a leap year.

'''

def is_leap(year):
  leap = False

  # if not year % 4:
  #   leap = True

  #   if not year % 100:
  #     leap = False
    
  #     if not year % 400:
  #       leap = True

  if not year % 4:
    if not year % 100 and year % 400:
      leap = False
    else:
      leap = True

  return leap

print(is_leap(2000))