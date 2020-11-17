'''
Write a program to find out how often a streak of six heads or a streak of six tails comes up
in a randomly generated list of heads and tails.
Your program breaks up the experiment into two parts: the first part generates a list
of randomly selected 'heads' and 'tails' values, and the second part checks if there is a streak in it.

Put all of this code in a loop that repeats the experiment 10,000 times so we can find out
what percentage of the coin flips contains a streak of six heads or tails in a row.
As a hint, the function call random.randint(0, 1) will return a 0 value 50% of the time and a 1 value the other 50% of the time.
'''

import random

consecutive_count = 0
streak_count = 0

for trial in range(10000):
    flip_list = []

    for i in range(100):
      # Create a list of 100 values, randomly 0 or 1.
        flip_list.append(random.randint(0,1))

    for i in range(len(flip_list)):
        # if i==0:
        #     pass
        if flip_list[i] == flip_list[i-1]:
            consecutive_count += 1
        else:
            consecutive_count = 0

        if consecutive_count == 6:
            streak_count += 1

print('Chance of streak: %s%%' % (streak_count / (100*10000)))

#https://stackoverflow.com/questions/60658830/automate-the-boring-stuff-coin-flip-streaks