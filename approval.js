var approval = document.getElementById("approval");
var client = getUrlVars();

var age;
var name = paragraphGenerator('Congratulations, '  + client['name'] + ' , you have been approved!'); 
if (age > 65)
    age = paragraphGenerator('You are old' + client['age'] + ', you should retire!'); 

else 
    age = paragraphGenerator('You are a baby' + client['age'] + ', you should go to work!');

var accountNumber

var retired
var married
var employed







function paragraphGenerator(text){
    var para = document.createElement('p');
    para.innerHTML = text;
    return approval.appendChild(para);
} 


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}