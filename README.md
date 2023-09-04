
# HomeEcoEarner

It is a development landing page and website of a renewal energy installation company that helps individuals to acquire renewable energy assets at low or no cost like solar panels and batteries. 

To join the waiting list at HomeEcoEarner, in advance of the company being launched, a user a directed to a waiting list form where they input their first name, email and postcode. This information is added to a database, which can be viewed through logging in on the admin login page. The admin signs in with their correct username and password and in turn receives a JWT token to access the dashboard of users.

![Screenshot](https://drive.google.com/uc?id=1Vz-WZ6nnm9iw0fbAD6WCk8BnrMA4SVS6)

The front-end was built with 
- Create-react-app
- SASS 
- Material UI Icons
- CoreUI progress bar, form and close button


## Installation
Follow these steps to run a local instance of HomeEcoEarner. You will need (node, npm and MySQL) installed before following these next steps.

Clone the front-end and back-end repository:

```bash
   $ git clone https://github.com/charlietait147/HomeEcoEarner-client

   $ git clone https://github.com/charlietait147/HomeEcoEarner-server
```

To set up the back-end first:

- Create a new database in MySQL called HomeEcoEarner

- Install server dependencies. Run:

```bash
   $ npm install
```

- Run migrations:

```bash
  $ npm run migrate
```

-  Run seeds:

```bash
  $ npm run seed
```
-  Set environment variables and change placeholders values with your own values
    
    Rename 
    `.env_sample` to `.env`

    

```bash
    PORT=<PORT_NUMER>
    JWT_KEY=<SECRET KEY>
    DB_HOST=<HOST ADDRESS>
    DB_USER=<YOUR DB USERNAME>
    DB_PASSWORD=<YOUR DB PASSWORD> 
```

- Start the server

```bash
  $ node server.js
```

To set up the front-end:

- Install client dependencies

```bash
  $ npm install
```

- Set environment variables

Rename 
    `.env_sample` to `.env` and change the placeholder of the port you set for the server. The admin and password can be used on the admin login page.

- Start the React App:

```bash
  $ npm start
```



    