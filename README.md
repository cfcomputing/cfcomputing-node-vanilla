# cfcomputing-node-vanilla

Wanted to give the ECMAScript modules in node a shot. So I created this simple webserver and quick tests to see what it looks/feels like.

https://nodejs.org/api/esm.html#

Things I have found are that tools like Jest (Thanks! https://github.com/facebook/jest/issues/4637 for getting Jest up and running with the proper babel config settings) and VSCode are still a bit limitted in their support and it makes sense as it is still experimental. I do believe this is the right way to do import/exports in Javascript in general.

Run this with:

```
npm install

npm start
```

Test with:

```
npm test
```
