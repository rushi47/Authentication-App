======================================
            README
======================================
Auth is the app for the authentication without using any tool.

We will be using express-sessions for the authentication.
All we need to do is to run the app is -
	1. npm init - it will create package.json
	2. install the dependencies

		a. npm install express --save // installing express framework

		b. npm install mongoose --save// installing mongoose wrapper for mongoDB.

		c. npm install body-parser --save// for parsing the data from the requests.

		--save will save our dependencies into package.json so that we can view later or even we can 
		bind the app to run on specific versions after deploying.

	3. node app.js // it will fireup the app.
	
First we are regestering the user by hiting the route 
and for that we have created user model which consist of -
	* username 
	* password
and we are saving it to the database by using .create function(here mongoose is our friend for create method).

As we are registering with the new user we are directly redirecting back to the secret route and once user logs out session is destroyed.

If the user is already signed in then we are authenticating it by hitting login route and authentication is done using midleware.

MIDDLEWARE - 
Authentication is done using middleware which is declared using function authenticate, so middleware checks for the session and verify credentials, once it done verifying it will move to the next function using next(), if verification is succesful. Else it redirects it to the home route.	

