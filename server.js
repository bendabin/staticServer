//Import express methods 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); 

//Parse form data using bodyParser 
app.use(bodyParser.urlencoded({extended: true}));

//Serve static assets from both assets and public directory
//specify the virtual path /static for the URL 
app.use('/', express.static(path.join(__dirname, 'assets')));


//Encodes the data that comes from the browser, using body parser
//(extend: true) allows us to post nested objects 
// app.use(express.urlencoded({ extended: true }));

//Check to see if PORT has been defined in env variables
//If no Env variable defined port will be set on 3000
const PORT = process.env.PORT || 3000;

//Handler Routes 
app.post('/', (req, res)=>{

    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.secondName);
    

    // const firstName1 = req.body.firstName;
    // const lastName1 = req.body.secondName;

    // console.log(req.body);

    // console.log(firstName1 + ' ' + lastName1);
    
    // res.send("Thank's for the info!");

    // console.log("thanks for positing that"); 
});




// app.use('/other', express.static('public'));


// app.get('/test', (req, res)=>{

//     x = path.join(__dirname, 'assets');

//     console.log(x);
// });



// app.use((req, res)=>{
//     res.send('Hello World');
//     console.log("Hello World I'm middleware reporting from the home route")
// });

// app.get('/', (req,res)=> {
//     res.send('Welcome to my alternative universe');
// });


//Handle Get requests from the home page route on the browser 
// app.get('/', function (req, res){
//     res.send("<h1>Welcome to my Home page!</h1>");
// });

//Set up server on localhost or value defined by PORT
app.listen(PORT, ()=> 
    console.log(`Server running on port ${PORT}`));