# Project Information

 Data about the server is retrieved from a local json file. All you need to do to run the project is to clone the repository, install all dependencies, and then run **npm run dev**. Please make sure it's running on port 3000.

For RAM usage, CPU usage, and SIM details a line chart is used to display the information. As for modem details, a multi-axis line chart is used to show information about the downloaded data usage and the packets sent of the modem.

**Authentication**

After successful user login, a JWT token is generated and stored in a cookie. A middleware file located at the root directory is executed after each request, where it validates the JWT token. If the token is invalid or if the user is not logged in, the middleware redirects the user to the login page.

**Default Credentials:**

Username: test
Password: test
