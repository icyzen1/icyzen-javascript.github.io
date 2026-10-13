const task1 = document.getElementById("task1")

task1.addEventListener('click', () => {
    const FInput = document.getElementById("tempf")
    const CInput = document.getElementById("tempc")

    FInput.addEventListener('input', () => {
        const Fvalue = parseFloat(event.target.value)
        const Cvalue = 5 / 9 * (Fvalue - 32)
        CInput.value = Cvalue
    })

    CInput.addEventListener('input', () => {
        const CValue = parseFloat(event.target.value)
        const FValue = CValue * 9 / 5 + 32
        FInput.value = FValue
    })
})


const task_2 = document.getElementById("task_2")

task_2.addEventListener('click', () => {
    const score = document.getElementById("score")
    const next = document.getElementById("next")
    const task = document.getElementById("task")
    const input = document.getElementById("input")
    const checkbtn = document.getElementById("check")
    const output = document.getElementById("output")

    let totalCount = 0
    let correctCount = 0
    let num1 = 0
    let num2 = 0
    let correctAnswer = 0
    let isAnswered = 0

    function generateTask() {
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
        correctAnswer = num1 * num2

        task.textContent = `${num1} * ${num2} = `
        input.value = ''
        output.textContent = '';
        isAnswered = false
    }

    function update() {
        const p = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
        return score.textContent = `Загальний рахунок ${p}% (${correctCount} правильних відповідей з ${totalCount})`
    }

    function check() {
        if (isAnswered) return;

        const user = parseInt(input.value)
        totalCount++
        isAnswered = true

        if (user === correctAnswer) {
            correctCount++
            output.textContent = "Відповідь правильна"
        }
        else {
            output.textContent = `Помилка, правильна відповідь ${correctAnswer}`
        }

        update()
    }

    next.addEventListener('click', generateTask)
    checkbtn.addEventListener('click', check)

    generateTask()
})


const task3 = document.getElementById("task3")

task3.addEventListener('click', () => {
    const score2 = document.getElementById("score2");
    const next2 = document.getElementById("next2");
    const task2 = document.getElementById("task2");
    const optionsContainer = document.getElementById("optionsContainer");
    const output2 = document.getElementById("output2");

    let totalCount = 0;
    let correctCount = 0;
    let num1 = 0;
    let num2 = 0;
    let correctAnswer = 0;
    let isAnswered = false;

    function generateTask() {
        num1 = Math.floor(Math.random() * 9) + 2;
        num2 = Math.floor(Math.random() * 9) + 2;
        correctAnswer = num1 * num2;

        task2.textContent = `${num1} * ${num2} =`;
        output2.textContent = "";
        isAnswered = false;
        optionsContainer.innerHTML = "";

        const correctIndex = Math.floor(Math.random() * 4);

        for (let i = 0; i < 4; i++) {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "variant";
            radio.id = `opt${i}`;

            let currentAnswer;

            if (i === correctIndex) {
                currentAnswer = correctAnswer;
            } else {
                do {
                    currentAnswer = (Math.floor(Math.random() * 9) + 2) * (Math.floor(Math.random() * 9) + 2);
                } while (currentAnswer === correctAnswer);
            }

            radio.value = currentAnswer;

            radio.addEventListener('change', () => {
                check(currentAnswer);
            });

            label.appendChild(radio);
            label.append(` ${currentAnswer}`);
            optionsContainer.appendChild(label);
        }
    }

    function updateScore() {
        const p = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
        score2.textContent = `Загальний рахунок ${p}% (${correctCount} правильних відповідей з ${totalCount})`;
    }

    function check(userAnswer) {
        if (isAnswered) return;

        isAnswered = true;
        totalCount++;

        const radios = optionsContainer.querySelectorAll('input[type="radio"]');
        radios.forEach(r => r.disabled = true);

        if (userAnswer === correctAnswer) {
            correctCount++;
            output2.textContent = "Відповідь правильна";
        } else {
            output2.textContent = `Помилка, правильна відповідь ${correctAnswer}`;
        }

        updateScore();
    }

    next2.addEventListener('click', generateTask);


    generateTask();
})


const task4 = document.getElementById("task4")

task4.addEventListener('click', () => {
    let imagesArray = [
        {
            path: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
            title: 'Сучасний диван',
            description: 'Зручний м\'який диван для вітальні'
        },
        {
            path: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
            title: 'Обідній стіл',
            description: 'Дерев\'яний стіл для кухні або їдальні'
        },
        {
            path: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
            title: 'Шафа для одягу',
            description: 'Шафа для кімнати'
        }
    ];

    function initPhotoRotator(containerId, images) {
        let container = document.getElementById(containerId);
        if (!container) return;

        let currentIndex = 0;

        let headerDiv = document.createElement('div');
        headerDiv.className = 'rotator-header';

        let mainContentDiv = document.createElement('div');
        mainContentDiv.className = 'rotator-content';

        let prevBtn = document.createElement('button');
        prevBtn.className = 'rotator-btn';
        prevBtn.textContent = 'Назад';

        let imgElem = document.createElement('img');
        imgElem.className = 'rotator-image';

        let nextBtn = document.createElement('button');
        nextBtn.className = 'rotator-btn';
        nextBtn.textContent = 'Вперед';

        let footerDiv = document.createElement('div');
        footerDiv.className = 'rotator-footer';

        let titleElem = document.createElement('p');
        titleElem.className = 'rotator-title';

        let descElem = document.createElement('p');
        descElem.className = 'rotator-desc';

        mainContentDiv.appendChild(prevBtn);
        mainContentDiv.appendChild(imgElem);
        mainContentDiv.appendChild(nextBtn);

        footerDiv.appendChild(titleElem);
        footerDiv.appendChild(descElem);

        container.appendChild(headerDiv);
        container.appendChild(mainContentDiv);
        container.appendChild(footerDiv);

        function updateRotator() {
            let currentItem = images[currentIndex];

            headerDiv.textContent = `Фотографія ${currentIndex + 1} з ${images.length}`;
            imgElem.src = currentItem.path;
            titleElem.textContent = currentItem.title;
            descElem.textContent = currentItem.description;

            if (currentIndex === 0) {
                prevBtn.classList.add('hidden');
            } else {
                prevBtn.classList.remove('hidden');
            }

            if (currentIndex === images.length - 1) {
                nextBtn.classList.add('hidden');
            } else {
                nextBtn.classList.remove('hidden');
            }
        }

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateRotator();
            }
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateRotator();
            }
        });

        updateRotator();
    }

    initPhotoRotator('rotator', imagesArray);
})