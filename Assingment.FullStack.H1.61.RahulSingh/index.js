function checkFare() {
    var name = document.getElementById('userName').value;
    var age = document.getElementById('userAge').value;
    var fare;

    if (age < 18) {
        fare = "€5";
    } else if (age >= 18 && age <= 65) {
        fare = "€10";
    } else {
        fare = "€7";
    }

    document.getElementById('fareResult').innerText = name + ", your ticket price is " + fare;
}

function showFoodPreference() {
    var name = document.getElementById('foodName').value;
    var foodType = document.getElementById('foodType').value;
    var result = name + "'s favorite cuisine is " + foodType + ".";
    
    document.getElementById('foodResult').value = result;
}