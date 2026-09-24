const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    function getFullName(firstName, lastName) {
        const res = `${firstName} ${lastName}`
        return res
    }

    function showGreeting(fullName, age) {
        alert(`Hello, ${fullName}! You are ${age} years old.`)
    }

    let firstName = prompt("Введіть Ваше ім'я");
    let lastName = prompt("Введіть Ваше прізвище");
    let age = prompt("Введіть Ваш вік");
    const fullName = getFullName(firstName, lastName);

    showGreeting(fullName, age);
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
    function getStudentInfo() {
        const name = prompt("Введіть Ваше ім'я");
        const score = prompt("Ваш бал (0-12)");
        return name, score;
    }

    function checkGrade(score) {
        if (10 <= score <= 12) {
            return "Excellent";
        }
        else if (7 <= score <= 9) {
            return "Good";
        }
        else if (4 <= score <= 6) {
            return "Satisfactory";
        }
        else {
            return "Fail"
        }
    }

    function showResult(name, grade) {
        alert(`Student: ${name}\nGrade: ${grade}`);
    }

    const student = getStudentInfo();
    const grade = checkGrade(student.score);

    showResult(student.name, grade);
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    let amount = +prompt("Введіть загальну суму рахунку");
    function calculateTip(amount, percent = 10) {
        return (amount * percent)/100;
    }

    function showResult(amount, tip) {
        const total = amount + tip;
        alert(`Bill: ${amount} грн\nTip (10%): ${tip}\nTotal: ${total}`);
    }

    const tip = calculateTip(amount);
    showResult(amount, tip);
})

const task4 = document.getElementById("task4")
task4.addEventListener("click", () => {
    function startGreetingTimer(message, seconds, callback) {
        setTimeout (() => {
            alert(message);
            callback();
        }, seconds * 1000)
    }

    startGreetingTimer("Hello World!", 4, () => { alert ("Time is up!")})
})

const task5 = document.getElementById("task5")
task5.addEventListener("click", () => {
    function calculate(a, b, operation) {
        switch(operation) {
            case "+": 
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                alert("Invalid operation")
        }
    }

    function showResult() {
        const a = +prompt("Введіть перше число");
        const b = +prompt("Введіть друге число");
        const operation = prompt("Введіть операцію: + | - | * | /");
        const result = calculate(a, b, operation);

        alert(`Результат операції: ${result}`)
    }

    showResult()
})

const task6 = document.getElementById("task6")
task6.addEventListener("click", () => {
    function createClickCounter() {
        let count = 0;

        return function() {
            count++;
            console.log(count)
        }
    }

    const clicker = createClickCounter();
    clicker();
    clicker();
    clicker();
})

const next = document.getElementById("next")
const out = document.getElementById("out")
next.addEventListener("click", () => {
    function* randomGenerator(min, max) {
        while (true) {
            const random = Math.floor(Math.random() * (max - min + 1) + min);
            yield random;
        }
    }

    const min = +prompt("Введіть мінімальну межу для генератора");
    const max = +prompt("Введіть максимальну межу для генератора");

    const generator = randomGenerator(min, max);
    out.textContent = generator.next().value;
})

const task8 = document.getElementById("task8")
task8.addEventListener("click", () => {
    function* passwordGenerator() {
        let password = "";

       while (true) {
        const char = yield;

        if (char === "done") {
            return password;
        }

        if (char !== null) {
            password += char;
        }

        if (char == null) {
            break;
        }
       }
    }

    const generate = passwordGenerator();

    generate.next();
    while (true) {
        const value = prompt("Введіть символ/цифру для генерація пароля (done для завершення генерації");
        const result = generate.next(value);

        if (result.done) {
            alert(`Пароль створено: ${result.value}`);
            break;
        }
    }
})

const task9 = document.getElementById("task9")
task9.addEventListener("click", () => {
    function* chatBot() {
        const name = yield "Hi! What is your name?";
        const s = yield `Nice to meet you, ${name}! How are you ?`;
        yield "Goodbye!";
    }
    const bot = chatBot();
    let botr = bot.next();
    
    while (!botr.done) {
        const answer = prompt(botr.value);
        botr = bot.next(answer)
    }
})

const hello = document.getElementById("hello")
hello.addEventListener("click", () => {
    const name = prompt("Введіть Ваше ім'я");
    const user = {
        name: name,
        say() {
            alert(`Hello, ${this.name}`);
        }
    };
    user.say();
})