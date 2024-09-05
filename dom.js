var a = "html";
let b = "css";
const c = "javascript";
// console.log(a);
const array=[1, 3, 8, 5, 9];
        function getSum(arr){
        sum=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]%3==0){
                sum+=arr[i]
            }
        }
        return sum;
    }
    console.log(getSum(array))

function filterPalindromes(arr) {
    return arr.filter(str => {
      let reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    });
  }
  
  
  const input = ["level", "world", "radar", "hello", "madam"];
  const palindromes = filterPalindromes(input);
  console.log(palindromes); 
