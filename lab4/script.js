const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    let book = {
        title: "Harry Potter and the Sorcerer`s Stone",
        author: "J.K. Rowling",
        year: 1997,
        isRead: true,
        bookInfo() {
            console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
        }
    }

    book.bookInfo()
    book.isRead = !book.isRead
    book.bookInfo()
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
    let library = [
        { title: "Harry Potter and the Sorcerer`s Stone", author: "J.K. Rowling", year: 1997, isRead: true },
        { title: "The Hobbit", author: "J.R.R Tolkien", year: 1937, isRead: false },
        { title: "1984", author: "George Orwell", year: 1949, isRead: true },
    ]

    function displayLibrary() {
        library.forEach(book => {
            console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`)
        })
    }

    displayLibrary()

    library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerals", year: 1925, isRead: false })
    displayLibrary()

    library.sort((a, b) => a.year - b.year)
    console.log(library)

    let unreadBooks = library.filter(book => !book.isRead)
    console.log(unreadBooks)

    let findBook = library.find(book => book.author === "J.R.R Tolkien")
    console.log(findBook)

    function addBookToLibrary() {
        let title = prompt("Введіть назву книги:")
        let author = prompt("Введіть автора книги:")
        let year = +prompt("Введіть рік видання книги:")
        let isRead = confirm("Чи прочитана книга?")

        library.push({ title, author, year, isRead })
        displayLibrary()
    }

    addBookToLibrary()


    library.forEach(book => {
        book.markAsRead = function () {
            this.isRead = true
        }
    })

    library[1].markAsRead()
    displayLibrary()

    function calculateAverageYear() {
        let sum = 0
        library.forEach(book => {
            sum += book.year
        })

        return sum / library.length
    }
    let result = calculateAverageYear()
    console.log(`Середній рік видання всіх книг: ${result}`)
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    let wardrobe = [
        {
            type: "Куртка",
            color: "Чорний",
            size: "L",
            season: "Зима",
            isWorn: true
        },
        {
            type: "Футболка",
            color: "Білий",
            size: "M",
            season: "Літо",
            isWorn: false
        },
        {
            type: "Джинси",
            color: "Синій",
            size: "M",
            season: "Будь-який",
            isWorn: true
        }
    ]

    function displayWardrobe() {
        wardrobe.forEach(clothing => {
            console.log(`Тип: ${clothing.type}, Колір: ${clothing.color}, Розмір: ${clothing.size}, Сезон: ${clothing.season}, Одягався: ${clothing.isWorn ? "Так" : "Ні"}`)
        })
    }

    displayWardrobe()

    wardrobe.push({type: "Пальто", color: "Сірий", size: "XL", season: "Зима", isworn: false})
    displayWardrobe()

    let unWorn = wardrobe.filter(clothing => !clothing.isWorn)
    console.log(unWorn)

    let findSize = wardrobe.find(clothing => clothing.size === "L")
    console.log(findSize)

    function addClothingToWardrobe() {
        let type = prompt("Введіть тип одягу:")
        let color = prompt("Введіть колір: ")
        let size = prompt("Розмір одягу: ")
        let season = prompt("Введіть сезон в який можна носити цей одяг: ")
        let isWorn = confirm("Чи одягався?")

        wardrobe.push({type, color, size, season, isWorn})
        displayWardrobe()
    }

    addClothingToWardrobe()

    wardrobe.forEach(clothing => {
        clothing.markAsWorn = function () {
            this.isWorn = true
        }
    })

    wardrobe[3].markAsWorn()
    displayWardrobe()
})