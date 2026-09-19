const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    let userName = prompt("Введіть ім'я");
    
    alert(`Hello, ${userName}`);
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
  let age = prompt("Введіть Ваш вік");
  const currentYear = 2026;
  
  let result = currentYear - age;
  alert(`You were born in ${result}`);
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    let firstName = prompt("Введіть Ваше ім'я");
    let lastName = prompt("Введіть Ваше прізвище");

    console.log("Your full name is " + firstName + " " + lastName);
    console.log(`Your full name is ${firstName} ${lastName}`);
})

const task4 = document.getElementById("task4")
task4.addEventListener("click", () => {
    let userName = "Ростислав";

    if (true) {
        let userName = prompt("Введіть ім'я");
        console.log(`${userName}`);
    }

    console.log(`${userName}`);
})

const task5 = document.getElementById("task5")
task5.addEventListener("click", () => {
    let name = prompt("Введіть ім'я");
    let age = prompt("Введіть вік");

    const choose = confirm(`Hello ${name}! Your age is ${age}. Continue?`)

    if (choose) {
        alert("Welcome!");
    }
    else {
        alert("Goodbye!");
    }
})

const task6 = document.getElementById("task6")
task6.addEventListener("click", () => {
    let number = prompt("Введіть будь-яке число");

    let result = number % 2 == 0;

    if (result) {
        alert("Number is even")
    } 
    else alert("Number is odd")
})

const task7 = document.getElementById("task7")
task7.addEventListener("click", () => {
    function calculate() {
        let result = 12;
        
        if (true) {
            let result = 5;
            console.log(result);
        }

        console.log(result);
    }
    calculate();
})

const task8 = document.getElementById("task8")
task8.addEventListener("click", () => {
    const secretNumber = 13 % 10;

    let guess = prompt("Введіть цифру від 0 до 9");

    if (guess == secretNumber) {
        alert("Correct!");
    }
    else alert("Wrong!");
})

const task9 = document.getElementById("task9")
task9.addEventListener("click", () => {
    let name = prompt("Введіть Ваше ім'я");
    let firstNumber = +prompt("Введіть перше число");
    let secondNumber = +prompt("Введіть друге число");

    let result = firstNumber + secondNumber;
    alert(`Hello, ${name}. The sum of ${firstNumber} and ${secondNumber} is ${result}`);
})