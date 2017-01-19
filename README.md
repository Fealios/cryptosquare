App will remove spaces in a string
  input: "Hello, this is an example string."
  output: "Hello,thisisanexamplestring."

App will remove all special characters from a string
  input: "Hello,thisisanexamplestring."
  output: "Hellothisisanexamplestring"

App will change all characters to lowercase
  input: "Hellothisisanexamplestring"
  output: "hellothisisanexamplestring"

App will split joined string up into an array of it's characters
  input: "thisisatest"
  output: ['t','h','i','s','i','s','a','t','e','s','t']

App will determine length of message sans special characters
  input: "helloworld"
  output: "10"

App will determine if length of message has whole square root
  input: 37
  output: non whole number sqrt

App will make perfect square grid if sqrt is whole number
  input: 36
  output: 6x6

App will make grid based off nonwhole number sqrt by rounding down the number for both row and col dimensions, then adding 1 to row
  input: 37
  output: 6cx7r

App will use 2 for loops, one nested within another to distribute characters into subarrays, based on grid length
  grid: 4cx3r
  input: ['t','h','i','s','i','s','a','t','e','s','t']
  output: [['t','h','i','s'],
           ['i','s','a','t'],
           ['e','s','t']]

App will use while loop and for loop to distribute characters into array
 input: [['t','h','i','s'],
          ['i','s','a','t'],
          ['e','s','t']]
 output: ['t','i','e','h','s','s','i','a','t','s','t']

 App will join array into single string
  input: ['t','i','e','h','s','s','i','a','t','s','t']
  output: 'tiehssiatst'

App will add spaces between every 5 characters
  input: "tiehssiatst"
  output: 'tiehs siats t'
