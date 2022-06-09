//Questn 1
const arr = [21,'Afams Val',30,'Unizik']
// make a sentence from the array above that says
// Afams Val is 28 years old and will be in Unizik when 30 years

console.log(arr[1] + ' is ' + arr[0] + ' years old and will be in ' + arr[3] + ' when ' + arr[2] + ' years')

//Qestn 2
const arr1 = [21,'Afams Val',30,'Unizik']
//destructure Unizik and 21 from the array and add to a new array and console

const [goat, sheep, cat, red] = arr1
console.log(red,goat)