/*
three ways to create string in js
1)'...'
2)"..."
3)`...`(template string)
*/

console.log('hello')

// add two string
console.log('some'+'text')
console.log('some '+'more'+' text')   //concatenation

//You can get the data type of any object by using the typeof
console.log(typeof 2)
console.log(typeof 'hello')

//type coercion(automatic type of conversion)
console.log('hello'+3)


console.log('$'+20.95+7.99)

//string also follow the order of operation
console.log('$'+(20.95+7.99))   //this math is inaccurate

//create entire line
console.log('$'+(2095+799)/100) //string follows the same operration and adding string as last result


console.log('items('+(1+1)+'): $' + (2095+799)/100)

//double quote strings
console.log("'I' am learning js")


//Escape character
console.log('I\'am learning js')

// console.log(alert('some \ntext'))

console.warn('some \ntext')    //in here we are using warn to check output in terminal


console.warn("This is an alert message in the console!");


//template string ans interpolation
console.log(`hello`)

console.log(`Items(${1+2}): $${(1090*2 + 2095)/100}`)


//multiline string
console.log(`some
text`)