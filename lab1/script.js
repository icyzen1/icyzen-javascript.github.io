const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    alert("Звичайне діалогове вікно");
    const output = document.getElementById("output");
    const fio = "Ринкасовський Ростислав";
    output.textContent = `Hello, ${fio}`;
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
    const output = document.getElementById("output");
    const choose = confirm("Task2");
    if (choose) {
        output.textContent = "Натиснуто кнопку 'ОК'";
    }
    else {
        output.textContent = "Натиснуто кнопку 'Відміна'";
    }
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    const output = document.getElementById("output")
    const lastNumber = 3;

    for (let i = 1; i < 10; i++) {
        let result = lastNumber * i;
        output.textContent += result + " ";
    }
})

const task4 = document.getElementById("task4")
task4.addEventListener("click", () => {
    function task4(a) {
        if (a % 2 == 0) {
            console.log("%cЧисло парне.", "color: green")
        }
        else {
            console.log("%cЧисло непарне.", "color: red")
        }
    }
    task4(13);
})

const task5 = document.getElementById("task5")
task5.addEventListener("click", () => {
    const output = document.getElementById("output")

    function generationPassword(pass, number) {
        return pass.slice(0, 3) + (number * 2)
    }

    console.log(generationPassword("Rostyslav", 13));
})

const task6 = document.getElementById("task6")
task6.addEventListener("click", () => {
    const output = document.createElement("div");
    output.id = "13";
    function average() {
        let a = Number(prompt("Введіть оцінку 1: "));
        let b = Number(prompt("Введіть оцінку 2: "));
        let c = Number(prompt("Введіть оцінку 3: "));

        return (a + b + c) / 3
    }
    document.body.appendChild(output);
    output.textContent = "Результат: " + average();
})

const task7 = document.getElementById("task7")
task7.addEventListener("click", () => {
    const identity = prompt("Введіть кількість студентів групи: ");

    for (let i = 1; i <= identity; i++) {
        const name = prompt("Введіть прізвище та ім'я студента: ");
        alert(`Студент: ${name}`);
    }
})

const task8 = document.getElementById("task8")
task8.addEventListener("click", () => {
    const name = "Ростислав";
    const list = document.getElementById("name-list");

    name.split("").forEach(l => {
        const li = document.createElement("li")
        li.textContent = l;

        li.addEventListener("mouseenter", () => {
            alert(l);
        });

        list.appendChild(li);
    });
})

const task9 = document.getElementById("task9")
task9.addEventListener("click", () => {
    while (true) {
        const names = prompt("Введіть прізвище та ім'я: ")
        alert(names);
        if (names == null) {
            break;
        }
    }
})