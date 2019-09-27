var arrnum1 = [1, 2, 5, 67, 100];
var sumayprom = x => {
    let sum=0;
   x.forEach(element => {
       sum += element;    
   });
   let prom= sum/x.length;
   console.log(sum);
   console.log(prom);
   } ;

sumayprom(arrnum1);




