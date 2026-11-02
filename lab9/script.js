const loader = document.getElementById("loader")
const result = document.getElementById("result")
const resultFunc = document.getElementById("resultFunc")
const resultTask = document.getElementById("resultTask5")

loader.style.display = "block"

let loaderPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World!")
    }, 2000);
})

loaderPromise
    .then(ldp => {
        result.textContent = ldp
    })

    .catch(error => {
        result.textContent = error
    })

    .finally(() => {
        loader.style.display = "none"
    });


function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Число більше 10")
        }
        else {
            reject("Число менше або дорівнює 10")
        }
    })
}

checkNumber(10)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })

checkNumber(11)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })


function randomNumber() {
    let randSec = (Math.floor(Math.random() * 3) + 1) * 1000
    let randNum = Math.floor(Math.random() * 100) + 1

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randNum)
        }, randSec);
    })
}

randomNumber()
    .then((message) => {
        resultFunc.textContent = message
    })
    .catch((error) => {
        resultFunc.textContent = error
    })


function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 > num2) {
            resolve("Перше число більше")
        }
        else if (num1 < num2) {
            resolve("Друге число більше")
        }
        else {
            reject("Числа рівні")
        }
    })
}

compareNumbers(5, 5)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })


let promise1 = new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1) * 1000, 1000));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1) * 1000, 2000));
let promise3 = new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1) * 1000, 3000));

Promise.all([promise1, promise2, promise3])
.then((values) => {
    let sum = values.reduce((ac, curr) => ac + curr, 0)
    resultTask.textContent = ("Всі значення:", sum)
})
.catch((error) => {
    resultTask.textContent = ("Помилка:", error)
});