# Static Server using Virtual Path

A simple web server using Virtual Path. It uses middleware from the express.static("folder-served") for loading your HTML, CSS and JS(For DOM manipulation) files.  

## Description 

The "/static" is a virtual path name that you define in the URL, but this name does not exist the file system stored on your server where your files are to be served by the express.static function. This allows multiple directories as static files to be served and helps distinguish between the multiple directories. 

## How to Run 

Open the command terminal in the project directory, and run:- 

 **npm start**

If the server is running successfully, you should see the message, "Server Running on Port 3000". Open your web browser and type http://localhost:3000. You should be able to view the web page. 





