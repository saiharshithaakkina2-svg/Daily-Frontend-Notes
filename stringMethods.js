//String Methods

let str = "JavaScript ";
let result = str.length
console.log(result);

let uppdaercase = str.toUpperCase()
console.log(uppdaercase)

let lowercase = str.toLowerCase()
console.log(lowercase)

let trim = str.trim()
console.log(trim)

let includes = str.includes("i")
console.log(includes)

let startWith = str.startsWith("J")
console.log(startWith)

let endsWith = str.endsWith(" ")
console.log(endsWith)

let indexOf = str.indexOf("i")
console.log(indexOf)


let slice = str.slice(2,7)
console.log(slice)

let subString = str.substring(0,2 )
console.log(subString)


let reip = " i hate Javascript"
let replace = reip.replace("Javascript", "nava")
console.log(replace)

let fruits = "mango apple mango"
console.log(fruits.replaceAll("apple" , "mango"))

let chartat = fruits.charAt(0)
console.log(chartat)

let nuts = "wallnut , pista , badham"
let addednuts = nuts.concat("," ,"cashew")
console.log(addednuts)

let nutss = "wallnut pista badham"
let split = nutss.split(' ')
console.log(split)

let city = "hyderabad";
let value = city.toUpperCase()
console.log(value)

let message = "   Hello JavaScript   ";
let rel = message.trim()
console.log(rel)

let email = "sai@gmail.com";
let rell = email.includes("@")
console.log(rell)

let password = "JavaScript123";
console.log(password.includes(123))

let text = "I LOVE JAVASCRIPT";
console.log(text.toLowerCase().includes("javascript"))
