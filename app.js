
var grandTotal = 0;
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    var totalAmount = item.price * item.quantity;
    grandTotal += totalAmount;
    console.log("<h3>" + item.quantity + " " + item.name + " of " + item.price + " is equal to " + totalAmount + " Amount</h3>");
}

console.log("<h1> Your Total Bill Amount is "+grandTotal+"</h1");

var user = {
    name: "rabii",
    email: "rabi.41006@gmail.com",
    password: 'test123',
    age: 17,
    gender: "male",
    city: "Karachi",
    country: "Pakistan"
};
 if (user.hasOwnProperty("age")) {
    console.log("Yes")
} else {
    console.log("sorry")
 }
 if (user.hasOwnProperty("country")) {
    console.log("sorry")
 } else {
    console.log("sorry")
}
 if (user.hasOwnProperty("firstName")) {
    console.log("sorry")
 } else {
     console.log("sorry")
 }
 if (user.hasOwnProperty("lastName")) {
     console.log("Sorry")
 } else {
     console.log("Sorry")
 }


function Employee(name, age, designation, education) {
     this.name = name;
        this.age = age;
        this.designation = designation;
         this.education = education
 }

var employee1 = new Employee("Rabi Waseem ", 17, "Full Stack Developer", "Intermediate");
 var employee2 = new Employee("Haris Khan", 21, "Project Manager", "BSc");
 console.log("<h2>"+employee1.name+" is a "+employee1.designation+". His Age is "+employee1.age+"<br />"+employee2.name+" is a "+employee2.designation+". His Age is "+employee2.age+"<br /> "+employee1.name+" is a good friend of "+employee2.name+"</h2")

function User(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
var arr = []
function getsubmit() {
    Name = document.getElementById("Name").value;
    Gender = document.getElementById("Gender").value;
    Address = document.getElementById("Address").value;
    Education = document.getElementById("Education").value;
    Profession = document.getElementById("Profession").value;
    
    
    
    // var arr = []
    var myuser2 = new User(Name, Gender, Address, Education, Profession);
    arr.push(myuser2);
    console.log(arr);
    
}
