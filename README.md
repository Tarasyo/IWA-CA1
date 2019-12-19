# IWA-CA1

College assignment 

The app
This web application main functionality is read, delete, upload, update and is
developed using the gitpod online IDE and stored using the Github platform.

What it does
The purpose of this web application is to store data about Nintendo Switch
game. All games have main information like: name of the game, publisher, release,
director, and rank.

Modules utilized
Modules that was installed to support all functionality :
● http - module which allows Node.js to transfer data over the Hyper
Text Transfer Protocol;
● express - provides a robust set of features to develop web and mobile
applications;
● path - provides useful functions to interact with file paths;
● fs - module allows you to work with the file system on your computer;
● xml2js - to parse XML to JavaScript array;
● xmlParse - Validate XML, Parse XML to JS/JSON and vice versa;
● expAutoSan - module to make control on the user uploads and
updates.
● xsltProcess - functions and variables to perform XSL transformations.

Project Structure
The project structure could be find below:
-backend/
--node_modules
--package-lock.json
--jquery
---jquery.min.js
---table.js
-frontend/
--index.html
--img/
---nintendo.jpg
--css/
---bootstrap.min.css
---games.css
--js/
--index.js
--games.xml
--games.xsl


Add new record
In the left side of the page have to buttons in the top of application forms add
and edit, need to press add . The form contains the following fields:
● Name - input for the name of the game;
● Publisher - which company create the game;
● Release - date of release;
● Director - main creator of the game.
● Rank - the ranks of the game which can input user.
In the end need to press submit button and data will be added to the table.
Update record
To update the record need to press the edit button and click on the row
which user like to update, the selected row will have red color and to change
information user can use application form on the left side of the web page. After all
information will be in the input boxes need to press the edit button and the row will
be updated.
Deleting Records
To delete record, need to click on the row which user like to remove and
press the delete button, after this row will be deleted.
