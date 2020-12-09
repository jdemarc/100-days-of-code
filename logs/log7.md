### Day 41, December 6, 2020

**Today's Progress**: I was able to fix some conditional rendering. I was also able to fix revealing a button on hover.

**Thoughts**: I'm not entirely sure why, but using display:none and display:block versus visibility:hidden and visibility:visible is different and causes different results. It felt good to get one working when the other did not however.  Just lots of plug and play.  The app looks decent. I just need to keep plugging away at it.

**Link to work**: [Todo Project](https://github.com/jdemarc/react-todos)

### Day 42, December 7, 2020

**Today's Progress**: I worked on adding a new component called ActionBar.  This will display the number of todos, filter todos based on active/completed/all, and clear completed todos. I'm able to clear completed todos and the action bar is more or less styled.

**Thoughts**: I felt that I didn't get much done today, but I did get something done. I guess I'm just baby-stepping it. I need to think pretty deeply about how I want to filter the all/active/completed todos.. but I'll figure out something.

**Link to work**: [Todo Project](https://github.com/jdemarc/react-todos)

### Day 43, December 8, 2020

**Today's Progress**: I managed to create functional all/active/completed buttons to display the respective todos. It updates with a useEffect when the original todo list has been modified.

**Thoughts**: I was able to accomplish my actual goal today -- get those above buttons working -- but I find I am not DRY, and I may be adding unnecessary data structures.  I am creating a copy of the original todos and displaying the copied todos.  If I manipulate the original todo list with the buttons, then I can't revert back to display the entire todo list. But, what I have works, so I can come back and investigate later.

**Link to work**: [Todo Project](https://github.com/jdemarc/react-todos)

### Day 44, December 9, 2020

**Today's Progress**: I was able to actively track the number of completed todos in the bottom left of the box.

**Thoughts**: I've reached a break point with the todo project. It's the dark mode edition, and it does not include the toggle. There are some minor differences with design, but I'm willing to look past them for now. Overall, I'm not sure how I feel getting back into React. I definitely didn't do it the cleanest way, but I reviewed and remembered quite a bit.

**Link to work**: [Todo Project](https://github.com/jdemarc/react-todos)