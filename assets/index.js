//Add click event handler to submit button
const btn = document.getElementById('btn');

btn.addEventListener('click', function (event){

    //Get user input values from the textBox
    let inputBoxes = document.getElementsByTagName("input");
    
    //Loop through the values in the text boxes 
    for(let i=0; i<inputBoxes.length; i++){

        document.getElementById(`name${i+1}`).innerHTML = inputBoxes[i].value;      
    }
});
