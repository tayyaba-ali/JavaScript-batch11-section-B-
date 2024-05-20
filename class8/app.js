// var person = "sora ha"

// if(person == "jaag rha ha"){
//     alert("Nashta bnado")
// }

// else{
//     alert("bahar se le ao")
// }


// var studentName = prompt("Enter your name")

// var sub1 = +prompt("Tell us your english sub marks")
// var sub2 = +prompt("Tell us your urdu sub marks")
// var sub3 = +prompt("Tell us your maths sub marks")
// var sub4 = +prompt("Tell us your computer sub marks")

// var total = 400;
// var obtainedMarks = sub1 + sub2 + sub3 + sub4;
// var percentage = (obtainedMarks / total) * 100

// if(percentage >=80 && percentage<101 ){
//     alert("you got A+")
// }
// else if(percentage>=70 && percentage<80){
//     alert("you got A")
// }
// else if(percentage>=60 && percentage<70){
//     alert("you got B")
// }
// else{
//     alert("mehnat kro dil laga parho mobile km use kro")
// }

// // console.log("bhr");



// console.log("" && 89 && true);
// console.log("78" || undefined || true);

// var userName = prompt("enter your username")

// if (userName) {
//     alert("login successful")
// }
//  else{
//     prompt("enter your username")
//  }


// alert(userName && "login successful")


// var a = "Tayyaba"|| "67" || null;
// console.log(a);

var userName = "Hina"
var userSkills = prompt("what languages you know")
var userResidence = prompt("where do you live")
var userQualification = prompt("what's your degree")

var requiredSkills = "javascript"
var requiredResidence = "karachi"
var requiredQualification = "BSCS"

if (userSkills == requiredSkills) {
    if (requiredResidence == userResidence) {
        if (requiredQualification == userQualification) {
            alert("you are hired")
        }
        else{
            alert("BSCS krlo phr ana")
        }
    }
    else {
        alert("karachi ajao")
    }
}
else {
    alert("javascript sekh kr ao")
}

