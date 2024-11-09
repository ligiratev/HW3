 let ammountNumbers = [6,17,25,2,10,3,7,8,29,40,34,19];

 let evenNumbers = 0;
 let oddNumbers = 0;
 for (let i = 0; i < ammountNumbers.length; i++) {
     if (ammountNumbers[i] % 2 === 0){
         evenNumbers += ammountNumbers [i];
     } else {
         oddNumbers += ammountNumbers[i];
     }
 }

 console .log("Четныех чисел", evenNumbers, "Нечетных чисел", oddNumbers,);


// __________________________________________________________________________________



 let schoolGrades = [5, 4, 3, 2, 4, 5, 1,]
for (let i = 0; i < schoolGrades.length; i++) {
    let gradeLatter;
    switch (schoolGrades[i]) {
        case 5:
         gradeLatter = 'A';
         break;
        case 4:
          gradeLatter = 'B';
          break;
        case 3:
          gradeLatter = 'C';
          break;
        case 2:
           gradeLatter = 'D';
           break;
        case 1:
            gradeLatter = 'E';
            break;
        default:
          console.error("Invalid grade")
    }
    console.log ( gradeLatter, " ", schoolGrades[i]);
}
