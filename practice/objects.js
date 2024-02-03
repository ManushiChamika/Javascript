// objects{}
// const person = {name: 'Leonardo',
//                 shirt: 'white'
//                }

// access object : dot notation vs. bracket notation
// dot
// console.log(person.name)
// console.log(person.shirt)

// bracket
// console.log(person['name'])
// console.log(person['shirt'])


// assign objects
// person.phone = '1-222-555-999'//dot method
// console.log(person.phone)
// console.log(person)

// person['color'] = 'tan'//bracket method
// console.log(person['color'])

// --person2--

//                 //key: value
// const person2 = {name: 'Quazi',
//                 shirt: 'black'
//                }

// person2.eyes = 'glasses'

// console.log(person2['name'])
// console.log(person2['shirt'])
// console.log(person2)

// // use functions

// /*
// concepts used here:es6 arrow function(2 arguments
//                    objects
//                    Template literals
// */

const introducer = (name, shirt) => {
    const person = {name: name,
                    shirt: shirt,
                    assets: 100000,
                    liabilities: 50000,
                    netWorth: function(){
                                // this refers to the object 'person' that you have created
                                return this.assets - this.liabilities 
                             }
                   }
    
    // const intro = `Hi, my name is ${person.name} and my color of shirt is ${person.shirt} and my net worth is ${person.assets - person.liabilities}.`
    // const intro = `Hi, my name is ${person.name} and my color of shirt is ${person.shirt} and my net worth is ${person.netWorth}.` //this wont work either properly as we must call the function              
    const intro = `Hi, my name is ${person.name} and my color of shirt is ${person.shirt} and my net worth is ${person.netWorth()}.` //calling the function netWorth
    return intro
}

console.log(introducer('ana', 'white'))


// method
/*A method is a property containing a function definition.
  Math.floor() = Is an object
  floor() = without math, this would be a function
  Math.floor = without the brackets this would be a property
*/