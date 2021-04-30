# node-challenge-calculator

Make a calculator adding an endpoint for each operation [Add,Substract,Multiply,Divide], each endpoint will receive two numbers and return the result

## Step 0: Build a node server from scratch with 'npm init'
 
  > [1] First create a directory named myapp to hold your application, and make that your working directory:

```js
$ mkdir myapp
$ cd myapp
```

  > [2] Make a package.json file. The package.json file is easy to create from the command line. Type the following command into your terminal to get started:

```js
$ npm init
```

  > This command will initialise a step-by-step process for creating the package.json. It will ask you a bunch of questions.

> You can skip most of the questions but change the `entry point` from
> `(index.js)` to `server.js`.

> The wizard asks you for the following information: `name`, `version`,
> `description`, `main`, `test`, `repository`, `keywords`, `author`, `license` -
> do you understand all of them?

  > At the endo of the wizard, you should see a new file called `package.json` in
your project's folder.

  > Here is an example `package.json` file for a project called [Passport](https://github.com/jaredhanson/passport/blob/master/package.json).

> [3] Before we write any code, you'll need to install the Express library. 

> As we install Express, we'll need to update the `package.json` to add Express as
a dependency. We do this so that other people working on the project will know
to install Express before running any of the code. This can be done by adding
**`--save`** to the end of your command.

> Run the following command in your terminal:

```sh
npm install express --save
```

> Express should now be installed. Check your `package.json` file to make sure it
has been added as a dependency. It will look like this:

![package.json screenshot](https://cloud.githubusercontent.com/assets/10683087/16382664/be35f0b4-3c79-11e6-82b6-ae9e4a037c3f.png)

> [4] In the myapp directory, create a file named server.js and copy in the code from the example above.

> [5] Run the app with the following command:

```js
$ node server.js
```

> [6] Then, load http://localhost:3000/ in a browser to see the output of the browser and the terminal

## Step 1: Reading endpoint query

Example when you ask for a video on youtube:
https://www.youtube.com/watch?v=7UQBMb8ZpuE

An idea of how do we read the query in Node:

```js
app.get('/watch', (req, res) => {
    const video = req.query.v;
    console.log("The user request the video ID " + video);
    res.send('The user request the video ID  ' + video);
}) 
```

Build the next endpoints of our calculator:
- http://localhost:3000/add?value1=10&value2=2
- http://localhost:3000/substract?value1=10&value2=2
- http://localhost:3000/multiply?value1=10&value2=2
- http://localhost:3000/divide?value1=10&value2=2

NOTE: put a comment if you have to do .toString to return the result

## Step 2: Reading endpoints parameters

Example when you ask a repository to Github:
- https://github.com/Migracode-Barcelona/node-challenge-calculator

An idea of how do we read the parameters in Node:

```js
app.get('/:account/:repository', (req, res) => {
    const accountID = req.params.account;
    const repositoryID = req.params.repository;
    console.log("The user requested the repository" + repositoryID + " of the user " + accountID);
    res.send('The user requested the repository' + repositoryID + ' of the user ' + accountID)
}) 
``` 

Build the next endpoints of our calculator:
- http://localhost:3000/add/10/2
- http://localhost:3000/substract/10/2
- http://localhost:3000/multiply/10/2
- http://localhost:3000/divide/10/2


## Step 3: use a logger

Adding this logger to your server, will log in the console all the requests

```js
const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);
```
