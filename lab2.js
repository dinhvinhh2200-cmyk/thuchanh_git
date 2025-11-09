//// bà1
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

const makeList = (arr) => {
	return arr.map(item => `<li class='text-warning'>${item}</li>`)
}
const failureList = makeList(result.failure)
console.log(failureList)


/// bài 2
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const removeFirstTwo = (list) => {
	const [a , b , ...rest] = list
	return rest
}
const arr = removeFirstTwo(source)
console.log(arr)
console.log(source)

///// bài 3 
const arr1 = ['jan', 'feb', 'mar', 'apr' , 'may']
let arr2
arr2 = [...arr1]
console.log(arr2)

//// bài 4 
const spreadOut = () => {
	let fragment = ['to', 'code']
	let sentence = ['learning', ...fragment, 'is', 'fun']
	return sentence
}
console.log(spreadOut())


let number = [1, 2, 3 ,6 ,9]
let numbers = [4, 5]
let total = number.concat(numbers)
console.log(total)

// test git pull ở folder lab2 và test confilct
