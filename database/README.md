# Database Categories Connection - How to Run
#### Elizabeth Moniz

## * STEP 1 *
Set up the database! 
I used MongoDB Atlas and created a read-only account for you to be able to access the database from your locally hosted server as a temporary fix for accessing the categories (until we get a working multiplayer server). 

You shouldn't need to login or anything, but I used my school Google account to create the database & cluster.

All you should need is a connection via the .env file hidden in the uploaded folder.
These credentials should allow you to pull information from it 

## * STEP 2 *
Set up the environment. My commit has the following files:

```
database
├── README.md
├── backend
│   ├── testround.js	A test file to run a practice round of randomized categories.
│   ├── database.js	The file that establishes the database connection.
│   ├── server.js	The file that manages server connections to access database info.
│   ├── package.json	
│   └── package-lock.json
└── .env		The file containing SENSITIVE login information.

```

Once you've pulled these files from the repo, navigate to the database/backend.
```
cd ~/database/backend/
```
Here, set up the dependencies by running:
```
npm install
```
You should now have packages loaded in ```node_modules/```

## * STEP 3 *
You'll need one tab to run the server and another to run the test file. 
I work out of console, but you can use two terminals in any other program to do so.

### First Tab: Server
Navigate to ```database/backend/``` and run:
```
npm install
npm start
```
You should see "Connected to MongoDB!" and a port 3000 that the server is running on.

### Second Tab: Test File
Navigate to ```database/backend/``` and run:
```
node testround.js
```
You should see an output of about 13 categories.
You can run this command over and over to see variety pulled from the database.

