'''
Write a program to find out how often a streak of six heads or a streak of six tails comes up
in a randomly generated list of heads and tails.
Your program breaks up the experiment into two parts: the first part generates a list
of randomly selected 'heads' and 'tails' values, and the second part checks if there is a streak in it.

Put all of this code in a loop that repeats the experiment 10,000 times so we can find out
what percentage of the coin flips contains a streak of six heads or tails in a row.
As a hint, the function call random.randint(0, 1) will return a 0 value 50% of the time and a 1 value the other 50% of the time.
'''

#######################################
# I AM BROKEN AND DO NOT WORK.
#######################################

import random

def calc_streak_chance():
  streak_count = 0
  consecutive_count = 0

  for trial in range(1):
    # for trial in range(10000):
    val_list = []

    # Create list of 100 heads or tails.
    for val in range(10):
      # for val in range(100)

      # Generate a random number.
      head_tail = random.randint(0, 1)

      # Append it to the list.
      val_list.append(head_tail)

    # Check for streak of 6
    current = val_list[0]
    print (val_list)

    for num in val_list:
    # For each number in the list,

      if num == current:
      # If num matches the current, (and it should), increment consecutive counter.

        consecutive_count += 1

        if consecutive_count == 2:
        # If X consecutives are found, reset the consecutive count and increment the streak count.

          consecutive_count = 0
          streak_count += 1

      else:
      # Reset the consecutive count and update the current value.
        consecutive_count = 0
        current = num
    
    # print('Current', current)
    # print(val_list)

    print(streak_count)


  # print(streak_count/100)

calc_streak_chance()