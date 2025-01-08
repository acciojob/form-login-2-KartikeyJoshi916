//your JS code here. If required.
function display(){
		let fName=document.getElementById("firstName").value;
		let lName=document.getElementById("lastName").value;
		let number=document.getElementById("number").value;
		let email=document.getElementById("email").value;
	 let message = "First Name: " + fName + " "+
                  "Last Name: " + lName + " "+
                  "Phone Number: " + number + " "+
                  "Email ID: " + email;

	alert(message);
}