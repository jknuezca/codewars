function solution(str){
   //array of the string, and an array to save the result
   var arr = str.split('');
   var result = [];

   for(let i = 0; i<arr.length; i+=2){
     if(arr[i+1]) result.push(arr[i]+arr[i+1])
     else result.push(arr[i]+'_')
   }

  return result;
}
