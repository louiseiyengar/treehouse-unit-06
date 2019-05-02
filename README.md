# FSJS project 6 - Front-end JavaScript projects site using Static Node.js and Express.

For this project, I used node.js, the Express web application framework, and Pug for template rendering.  

The project displays six websites I created in which functionality was added using front-end JavaScript code.  The site also contains information about my career as a web developer, as well as a button allowing a user to view my resume.  
======= Error Processing ==========================

If you request a page that doesn't exist or a project that doesn't exist, for example (localhost:3000/does-not-exist/ or localhost:3000/project/100/) you will see both a 404 error page and a console.log message indicating there was a 404 error.

======= Design Modifications ======================

I made design modifications on all pages of the site.  The modifications were added to the bottom of the styles.css file.
1) I changed the font family and font color of the header tags.
2) I changed the font family, font size, and text color for all paragraphs.
3) I adjusted padding and line height for certain paragraphs in the site.
4) I changed the background and text color for the sidebar.
5) I changed the background color, font color, and hover background color for all buttons.  I also added box shadow and ease-in transitions for the hover state of the buttons.
6) On the Portfolio of Projects page, I added box shadow and ease-in transitions to the hover state of each project's image.

======= Instuctions to view project locally =========
1) To run this project locally, you must have node.js and npm installed.
2) Download or clone the project from this repo.
3) The project uses the Express web application framework and Pug for template rendering.  You will install these by running:
**npm install**
4) Run 
**npm start**
to start the server and application.  You should see the message: 'The application is running on localhost:3000'.
5) Enter 'localhost:3000' in the address bar of your browser, and you should see the web page below.


Screenshot of Portfolo of Projects page:
![Unit06-1Example](https://user-images.githubusercontent.com/42808209/57055560-34d1ab00-6c6a-11e9-9e6f-d7b0d559e632.jpg)


