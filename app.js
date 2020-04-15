//  Find out how many elements can be removed from an array so that
//  the sum of the even indexed numbers is equal to the 
//  the sum of the odd indexed numbers 
// let arr=[5,5,2,5,8];
// let arr=[2,1,6,4];
let arr=[2,2,2];
let cutNum=0;
let compareArr=[];
let evenSum=0;
let oddSum=0;
let count=0;

for ( let i=0; i<= arr.length-1; i++){
  
       let cutArr=arr.splice(i,1);
       compareArr=arr;
       evenSum=0;
       oddSum=0;
  
       for( let j=0; j<= compareArr.length-1; j+=2){
           evenSum += compareArr[j];
           if (j+1 < compareArr.length){
           oddSum += compareArr[j+1];}
       }

    if (evenSum == oddSum){
        count++;
    }  

    cutNum=cutArr[0]
    arr.splice(i,0,cutNum);   
   
}


console.log("count is " + count)







// let arr=[1,2,3]
//  arr.splice(0,0,0)
//  console.log(arr)


// for (let i=0; i<=10; i+=2){
//     console.log(i);
// }


// let newArr=[];
// arr.splice(2,1);
// newArr=arr;
// console.log(newArr)