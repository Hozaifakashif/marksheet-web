var studentName = prompt("Enter your name")
var english = +prompt("Enter english marks")
var urdu = +prompt("Enter urdu marks")
var maths = +prompt("Enter maths marks")
var fsx = +prompt("Enter fsx marks")
var computer = +prompt("Enter computer marks")
var total = english + urdu + maths + fsx + computer
var perc = (total / 500) * 100
var grade;

if(perc >= 80){
    grade = "A+"
}
else if(perc >= 70){
    grade = "A"
}

else if(perc >= 60){
    grade = "B"
}

else if(perc >= 50){
    grade = "C"
}

else if(perc >= 40){
    grade = "D"
}
else{
    grade = "Fail"
}
document.write(
    `<table border='1px'>
    <tr>
    <th>STUDENTS NAME</th>
    <th>ENGLISH</th>
    <th>URDU</th>
    <th>MATHS</th>
    <th>FSX</th>
    <th>COMPUTER</th>
    <th>TOTAL</th>
    <th>PERCENTAGE</th>
    <th>GRADE</th>
    </tr>

    <tr>
    <td>${studentName}</td>
    <td>${english}</td>
    <td>${urdu}</td>
    <td>${maths}</td>
    <td>${fsx}</td>
    <td>${computer}</td>
    <td>${total}</td>
    <td>${perc.toFixed(2)}%</td>
    <td>${grade}</td>
    </tr>


    </table>`
)







