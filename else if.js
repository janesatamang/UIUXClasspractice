let Grade = prompt("enter the Grade Obtained")

if ( Grade >= 90 && Grade <= 100) {
    document.write("Grade - A+")
}

else if ( Grade >= 80 && Grade <= 90) {
    document.write("Grade - A")
}

else if ( Grade >= 70 && Grade <= 80) {
    document.write("Grade - B+")
}

else if ( Grade >= 60 && Grade <= 70) {
    document.write("Grade - B")
}

else if ( Grade >= 50 && Grade <= 60) {
    document.write("Grade - C+")
}

else {
    document.write("Grade - C")
}
