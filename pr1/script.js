const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    const products = [
        {
            name: "Ложка",
            category: "Кухонні прибори",
            price: 79,
            inStock: 56
        },
        {
            name: "Бездротова миша",
            category: "Аксесуари",
            price: 850,
            inStock: 45
        },
        {
            name: "Ноутбук",
            category: "Електроніка",
            price: 24999,
            inStock: 12
        },
        {
            name: "Телефон",
            category: "Електроніка",
            price: 12999,
            inStock: 0
        }
    ]

    function getAvailableProducts(list) {
        return list.filter(product => product.inStock > 0);
    }

    function findProductByName(list, name) {
        const f = list.find(product => product.name === name);
        if (f) {
            return f;
        }
        else {
            return "Товар не знайдено";
        }
    }

    const name = prompt("Введіть назву товару");
    console.log(`Масив об'єктів товарів, у яких inStock більше нуля:`, getAvailableProducts(products))
    console.log(findProductByName(products, name));
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
    const students = [
        {
            name: "Назарій",
            age: 18,
            grade: 10,
            group: "ПІ-23-01"
        },
        {
            name: "Олена",
            age: 15,
            grade: 6,
            group: "АК-26-02"
        },
        {
            name: "Дмитро",
            age: 17,
            grade: 8,
            group: "КІ-25-01"
        },
        {
            name: "Назарій",
            age: 16,
            grade: 9,
            group: "ІС-24-03"
        }
    ]

    function groupBy(list) {
        return list.reduce((acc, student) => {
            acc[student.group] = [];
            acc[student.group].push(student);
            return acc;
        }, {})
    }

    function sortStudentsByGrade(list) {
        return list.sort((a, b) => b.grade - a.grade);
    }

    console.log(groupBy(students));
    console.log(sortStudentsByGrade(students));
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    const employees = [
        {
            name: "Олег",
            position: "Senior",
            salary: 70000,
            years: 5
        },
        {
            name: "Дарина",
            position: "Manager",
            salary: 45000,
            years: 2
        },
        {
            name: "Кирило",
            position: "Junior",
            salary: 60000,
            years: 3
        },
        {
            name: "Петро",
            position: "Consultant",
            salary: 40000,
            years: 1
        }
    ]

    function getAverageSalary(list) {
        const sum = list.reduce((acc, employee) => acc + employee.salary, 0);
        return sum / list.length;
    }

    function findMostExperiencedEmployee(list) {
        return list.reduce((acc, employee) => {
            return employee.years > acc.years ? employee : acc;
        })
    }

    console.log(getAverageSalary(employees));
    console.log(findMostExperiencedEmployee(employees));
})

const task4 = document.getElementById("task4")
task4.addEventListener("click", () => {
    const books = [
        {
            title: "Кобзар",
            author: "Тарас Шевченко",
            year: 1840,
            rating: 5,
            isRead: true
        },
        {
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949,
            rating: 4.8,
            isRead: true
        },
        {
            title: "Дюна",
            author: "Френк Герберт",
            year: 1965,
            rating: 3.9,
            isRead: false
        },
        {
            title: "Володар перснів",
            author: "Дж. Р. Р. Толкін",
            year: 1954,
            rating: 5,
            isRead: false
        },
        {
            title: "Гайдамаки",
            author: "Тарас Шевченко",
            year: 1841,
            rating: 4.8,
            isRead: false
        }
    ]

    function getUnreadBooks(list) {
        return list.reduce((acc, book) => {
            if (!book.isRead) {
                acc.push(book);
            }
            return acc;
        }, []);
    }

    function getBooksByAuthor(list, name) {
        return list.reduce((acc, book) => {
            if (book.author === name) {
                acc.push(book)
            }
            return acc.sort((a, b) => a.year - b.year);
        }, [])
    }

    function getTopRatedBooks(list) {
        return list.reduce((acc, book) => {
            return book.rating > 4 ? acc.concat(book) : acc
        }, []).sort((a, b) => b.rating - a.rating);
    }

    console.log(getUnreadBooks(books));
    console.log(getBooksByAuthor(books, "Тарас Шевченко"));
    console.log(getTopRatedBooks(books));
})

const task5 = document.getElementById("task5")
task5.addEventListener("click", () => {
    const orders = [
        {
            orderId: 101,
            customer: { name: "Олена", email: "olena@example.com" },
            items: [{ name: "Ноутбук", price: 25000 }],
            total: 25000
        },
        {
            orderId: 102,
            customer: { name: "Андрій", email: "andriy@example.com" },
            items: [{ name: "Бездротова миша", price: 850 }],
            total: 850
        },
        {
            orderId: 103,
            customer: { name: "Олена", email: "olena@example.com" },
            items: [{ name: "Клавіатура", price: 2100 }, { name: "Килимок", price: 400 }],
            total: 2500
        },
        {
            orderId: 104,
            customer: { name: "Максим", email: "maksim@example.com" },
            items: [{ name: "Навушники", price: 3200 }],
            total: 3200
        }
    ]


    function getTotalSpentByCustomer(list, name) {
        return list.reduce((acc, order) => {
            if (order.customer.name === name) {
                return acc + order.total;
            }
            return acc;
        }, 0)
    }

    console.log(getTotalSpentByCustomer(orders, "Олена"));
})

const task6 = document.getElementById("task6")
task6.addEventListener("click", () => {
    const products = [
        { 
            productId: 1, 
            name: "Ноутбук", 
            price: 25000 
        },
        { 
            productId: 2, 
            name: "Бездротова миша", 
            price: 800 
        },
        { 
            productId: 3, 
            name: "Механічна клавіатура", 
            price: 2200 
        }
    ]

    const purchases = [
        {
            purchaseId: 101, 
            productId: 1, 
            quantity: 2
        },
        {
            purchaseId: 102, 
            productId: 2, 
            quantity: 5
        },
        {
            purchaseId: 104, 
            productId: 3, 
            quantity: 3
        }
    ]

    function getTotalSales(list1, list2) {
        return list2.reduce((acc, purchase) => {
            const product = list1.find(p => p.productId === purchase.productId)
            
            if (product) {
                const total = product.price * purchase.quantity;
                acc[product.name] = (acc[products.name] || 0) + total
            }
            return acc;
        }, {})
    }

    console.log(getTotalSales(products, purchases));
})