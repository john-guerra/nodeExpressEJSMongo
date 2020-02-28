# nodeExpressEJSMongo

A very simple and basic example on how to create an application with a Mongo database, a Node + Express + EJS backend and an HTML5 + AJAX frontend created in my class. [See the class recording here](https://www.youtube.com/watch?v=EYAqEUsQDHY&feature=youtu.be)

Demonstrates how to do server side rendering using EJS as the template system for the root page (/). It also shows how to create an endpoint for creating new grades taking parameters from a POST call, made from the client with a from and an action.

For the client side rendering, it shows two search forms one that queries a data endpoint on /grades/:query and the other one using server side rendering again.

Use it at your own risk, is full of bugs and half baked code. Not intended for production.

# Install

```
cd nodeExpressEJSMongo
yarn install
yarn start
```

Expects a Mongo Server to be running on `mongodb://localhost:27017`, and it uses a database called "lotteryTests" with a collection "grades" that has three attributes: name, grade and timestamp.
