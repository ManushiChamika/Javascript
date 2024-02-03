// for loops

// const fruits = ['banana','apple','orange','pear', 'banana','apple','orange','pear', 'banana','apple','orange','pear']
// // console.log(fruits[0])
// // console.log(fruits[1])
// // console.log(fruits[2])
// // console.log(fruits[3])

// for (let i=0; i < fruits.length; i++){
//     // console.log(i, fruits[i]) //fruits.length = run until end of items. Basically 11.
// }

// the above for loop is not used anymore. JS has introduced a new method





/* fruits here refers to the whole set of elements within the array of 'fruits'
   fruit refers to the first element in the array 'fruits' , but then it will loop, so we get all the elements printed
*/
// for(const fruit of fruits){
//     // console.log(fruit)
// }


// sum up all numbers in array

// const numbers = [1, 2, 3, 4, 5, 6]

// for (let i=0; i < numbers.length; i++){
//     // console.log(numbers[i])
// }
// for (const number of numbers){
//     // console.log(number * 2)
// }




    

// do an array where [1,2,3,4,5,6] gets printed as [2,4,6,8,10,12] as an array form
// const numbers = [1, 2, 3, 4, 5, 6]
// let result = []

// for(const number of numbers){
//     result.push(number * 2)
//     // console.log(result). Even this would give the same output but would repeat the steps till the last step
// }

// console.log(result)



// putting the above for loop in a function

// const double = (numbers) => {
//     let result = []
    
//     for(const number of numbers){
//         result.push(number * number) // we can square a number like this as well, result.push (number ** 2)
//         // console.log(result). Even this would give the same output but would repeat the steps till the last step
//     }
//     return result
// }

//make sure to put a braket after double = console.log(double([write array inside that bracket]))
// console.log(double([1 ,2 ,3 ,4 ,5 ,6]))


// const howManyLetters = () => {
//     const phrase = 'hey , can you go to grocery store with me?'

//     for (const letter in phrase) {// with word 'in' phrase , we count out the indexes inside the string
//         // console.log(letter)
//     }

//     for (const letter in phrase){
//          // console.log(letter+1)//this doesnt work properly
//     }
    
// /*but here inorder to make 0 as 1 and 41 as 42 , we have to add a 1 to 'letter'
//   but its it doesnt really work here as the compiler take letter as a string and add some number to it, so use type casrting to make it to a number.
    
// */
//     for (const letter in phrase){
//          console.log(Number(letter)+1)
//     }

    
//     // for (const letter of phrase) {// with word 'of' phrase , we write out letters inside the string
//     //      console.log(letter)
//     // }
// }
// howManyLetters()







// counting indexes in more easy ways

// const howManyLetters = () => {
//     const phrase = 'hey , can you go to grocery store with me?'

//     let result = 0;

//     for (const index in phrase){
//         console.log(Number(index) + 1)
//         result = Number(index) + 1    
//     }

//     // return result;
    
//     return{ result }/*You can return results as an object
//                       so for example instead of printing just a number , it is printed as = {result : '40'}
//                     */
// }

// console.log( howManyLetters())






// changing the place of word phrase and prompting

// const howManyLetters = (phrase) => {
    

//     let result = 0;

//     for (const index in phrase){
//         console.log(Number(index) + 1)
//         result = Number(index) + 1    
//     }

//     // return result;
    
//     return{ result }/*You can return results as an object
//                       so for example instead of printing just a number , it is printed as = {result : '40'}
//                     */
// }

// // const phrase = 'hey , can you go to grocery store with me?'
// const phrase = prompt('write your phrase')

// console.log( howManyLetters(phrase))



/*for strings we can use string.length t find out the length of the string*/

const howManyLetters = (phrase) => {
    
    
    return{ result: phrase.length }
}

// const phrase = 'hey , can you go to grocery store with me?'
const phrase = prompt('write your phrase')

console.log( howManyLetters(phrase))