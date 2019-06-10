Send a GET request to localhost: 4000 / api / projects

/* 
Data Types:
let number_variable;  //Here, we declared a null variable.

print(number_variable); // This will print' null'

number_variable = { }

What is number_variable's data type? 


a) integer
b) string
c) boolean
d) object/dictionary
    --Everything to the left of the . is an object. 
    --Right of the . is the name of the key
    --A key in a dictionary can be ANY data type. 
e) array/list
f) null 
g) function -- function()




people= {
    boy: "Brian", //key-value pair
    girl: {name: "Daisy", age: 88, speak:()=> print("Hello")}
}


 print(people.girl) //Print "Daisy"
 
req = { // The Browser/Postman will wrap the body inside of an object. 
    body: {   //YOU are defining and sending this body object 
    
    } 
}
*/

router.post("/", (req, res) => {
    const newProj = req.body;
    
})


router.post("/", () => { })




