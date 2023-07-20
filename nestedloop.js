// let n= prompt("enter a number")
// temp = 0 ;
// for (i=1; i<=n; i++){
//    if(n%i == 0 ){
//       temp++;
//    }
// }


// if (temp == 2){

//    document.write(n + "is a prime number.")
// }
// else{
//    document.write(n + "is not a prime number.")
// }

// for (i = 1; i<=100; i++){
//     for (j=1; j<=i; j++){
//         if(i%j== 0){
//             temp++
//         }
//     }
// }
// if (temp == 2){
//     document.write(i)
// }


// n=0;
// for (let i = 1; i<=100; i++){
//     for (j=2; j<=i-1; j++){
//         if(i%j == 0){
//             n= n+1
//         }
//     }
// if(n==0){
//     document.write(i)
// }
// else{
//     n = 0;
// }
// }


// for (let i =1; i<=5; i++){
//     for (j = 1; j<=i; j++){
//         document.write(j)
//     }     
//     document.write("<br>")
// }

// for (let i =5; i>=1; i--){
//     for (j = 1; j<=i; j++){
//         document.write(j)
//     }     
//     document.write("<br>")
// }

// for (let i =1; i<=5; i++){
//     for (j = 1; j<=i; j++){
//         document.write("*")
//     }     
//     document.write("<br>")
// }

// for (let i =5; i>=1; i--){
//     for (j = 1; j<=i; j++){
//         document.write("*")
//     }     
//     document.write("<br>")
// }

// for (i = 1; i<=5; i++){
//     for(j = 1; j<=5; j++){
//      document.write("*")
//     }
//     document.write("<br>")
// }


const n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  
  for (let j = 0; j < n; j++) {
    if (i == 0 || i === 4) {


      row += "* ";

    } 
    else if(j==0 || i===i && j==4){
        row +=" * "
        
    }
    
    else {
        
        
      row += "   ";
    }
  }
  
  console.log(row );
}

