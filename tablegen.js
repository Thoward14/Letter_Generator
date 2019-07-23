var table = document.getElementById("Mock_Data");



function addRow(client, alt) {
    var table = document.getElementById("Mock_Data");
    var row = table.insertRow(-1);
    if (alt) row.className = 'alt';
    var cellName = row.insertCell(0);
    var cellAge = row.insertCell(1);
    var cellAccountNumber = row.insertCell(2);
    var cellRetired = row.insertCell(3);
    var cellMarried = row.insertCell(4);
    var cellEmployed = row.insertCell(5);
    var cellApprovalLetter = row.insertCell(6);
    var linkApproval = {};
    cellName.innerHTML = client.name;
    cellAge.innerHTML = client.age;
    cellAccountNumber.innerHTML = client.accountNumber;
    cellRetired.innerHTML = client.retired;
    cellMarried.innerHTML = client.married;
    cellEmployed.innerHTML = client.employed;
    linkApproval.title = 'View';
    linkApproval.href = 'letter.html?name=' + client.name + '&age=' + client.age + '&accountNumber=' + client.accountNumber + '&retired=' + client.retired + '&married=' + client.married + '&employed=' + client.employed;
    cellApprovalLetter.innerHTML = '<a href= "' + linkApproval.href + '">' + linkApproval.title + '</a>';   
}
for (var i = 0; i < clients.length; i++){
    addRow(clients[i], i % 2 === 0);

}





















