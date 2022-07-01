let age;
age = 14;
age = Number(age);
document.getElementById("submitButton").onclick = function(){
    age = document.getElementById("ageInput").value;
    if(age >= 65){
        alert("You are a senior!");
    }
    else if(age >= 18) {
        alert("You are an adult!");
    }
    else if (age < 0) {
        alert("You are still raining in the heavens!");
    }
    else {
        alert("You are a child!");
    }  
}




