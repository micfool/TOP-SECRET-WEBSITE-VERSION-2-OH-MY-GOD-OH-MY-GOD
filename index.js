

document.getElementById("submitButton").onclick = function () {

    let firstName = document.getElementById("submitBox1").value;
    let lastName = document.getElementById("submitBox2").value;

    document.getElementById("initials").innerHTML =  firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();

    if (firstName == "" || lastName == ""){
        document.getElementById("initials").innerHTML = "please enter a first and last name"
 }
}
