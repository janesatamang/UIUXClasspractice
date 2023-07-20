let age = prompt("enter the age of the person")

if ( age >= 0 && age <= 3) {
    document.write("Infant")
}

else if ( age >= 4 && age <= 12) {
    document.write("Child")
}

else if ( age >= 13  && age <= 19) {
    document.write("Teenager")
}

else if ( age >= 20 && age <= 59) {
    document.write("Adult")
}

else {
    document.write("Senior")
}
