let arr = [3,4,5,6,7];
let output=[];
arr.forEach(function(element,index){
  if(element%2!==0){
    output.push(element);
  }
})
console.log(output.join("-"));

