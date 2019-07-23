
var client = getUrlVars();

var age;
if (client['age'] > 65)
    age = paragraphGenerator('Congratulations! You are ready to retire ' + client['name'] + ', you have been approved for our retirement plans!'); 

else
    age = paragraphGenerator('You are not eligible for our retirement plans, ' + client['name'] + ' , but there are other plans that you may qualify for!');



var accountNumber;
var retired;
var married;
nameGenerator (client['name']);

if (married = false)
    married = paragraphGenerator('You do not qualify for our marriage bonus offers.');

else 
    married = paragraphGenerator('You qualify for our bonus offers for married couples!');

var employed;

function nameGenerator(text){
   
    return document.getElementById('name').innerHTML = text;
} 







function paragraphGenerator(text){
    
    return document.getElementById("approval").innerHTML = text;
} 


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}