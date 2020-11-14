'''
Without using any string methods, print the following: 123...n
without spaces
'''

def printer(n):
  # val = ''
    
  # for x in range(1, n+1):
  #   val += str(x)
        
  # print(val)

  for x in range(1, n+1):
    print(x, sep='',end='')
  
printer(8)