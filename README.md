# Node.Js Easter Eggs
### Exercise in Express.Js

#### Goals
+ Create a modularized express application that sends `HTML` file responses for specified routes.
+ Implement additional middleware for console functionality and error handling 

#### Requirements
+ Include the following routes
  + `/home`
  + `/see-our-chickens`
  + `/see-our eggs`

+ Implement individual `HTML` pages for each route in a specified directory (`public`)

+ Create a middleware to read static `HTML` files

+ Create a middleware that prints an ASCII egg to the console anytime the route contains the string `egg`

+ Create a middleware that catches errors for any routes that do not match those specified