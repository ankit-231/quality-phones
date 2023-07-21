// call changeColor function every 1 second
setInterval(changeColor, 1000);

// function to validate form
function validateForm() {
    // getting values of specific fields
    var name = document.forms["contact-us-form"]["yourName"].value
    var email = document.forms["contact-us-form"]["email"].value
    var phone = document.forms["contact-us-form"]["phone"].value

    // checking if the values are empty
    if (name === "" || email === "" || phone === "") {
        alert("Please enter required fields")
    }

    // checking if even one of the genders is not checked
    else if (!document.getElementById("male").checked && !document.getElementById("female").checked && !document.getElementById("others").checked) {
        alert("Please select a gender")
    } else {
        alert("Thank you. We'll call you shortly.")
    }
}

i = 0;
j = 0;
k = 0;


function changeColor() {

    var doc = document.getElementsByClassName("change");
    var colors1 = ["brown", "blue", "green", "gray"];
    var colors2 = ["green", "brown", "gray", "blue"];
    var colors3 = ["gray", "blue", "green", "brown"];
    if (i < colors1.length - 1) {
        i++;
    } else {
        i = 0;
    }

    if (j < colors1.length - 1) {
        j++;
    } else {
        j = 0;
    }

    if (k < colors2.length - 1) {
        k++;
    } else {
        k = 0;
    }

    for (a = 0; a < doc.length; a++) {
        doc[0].style.color = colors1[i];
        doc[1].style.color = colors2[j];
        doc[2].style.color = colors3[k];
    }
}