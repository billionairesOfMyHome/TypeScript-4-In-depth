function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
// -------------------Enum-------------------
var Category;
(function (Category) {
    Category[Category["Fiction"] = 0] = "Fiction";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Biography"] = 2] = "Biography";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
console.log(Category.Biography === 2); // true
console.log(Category[2] === 'Biography'); // true
function GetBookTitlesByCategory(categoryFilter = Category.Fiction) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (const currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (const title of titles) {
        console.log(title);
    }
}
const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);
// -------------------Enum end-------------------
// -------------------Tuple-------------------
let myTuple = [25, 'truck'];
let firstElement = myTuple[0];
let secondElement = myTuple[1];
secondElement.toUpperCase();
myTuple.push(1); //这种操作虽然可行，但是严重不建议！不可越界访问第三个元素
// firstElement.toUpperCase(); //类型“number”上不存在属性“toUpperCase”。
// myTuple[2]   // 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素。
// myTuple[2] = 100; // 不能将类型“100”分配给类型“undefined”。
let list;
list = [10, 'sean', true];
list = [10, 'sean'];
list = [10];
function reset(...args) {
    console.log('args:', args); // args: [ 1, 'sean', true ]
}
reset(1, 'sean', true);
// -------------------Tuple end-------------------
// -------------------Optional parameters-------------------
function CreateCustomer(name, age, city) {
    console.log('Creating customer: ', name);
    if (age) {
        console.log('Age: ', age);
    }
    if (city) {
        console.log('City: ', city);
    }
}
CreateCustomer('Sean', 18, 'shanghai');
CreateCustomer('Sean', 18);
CreateCustomer('Sean');
// -------------------Optional parameters end-------------------
// -------------------Default parameters-------------------
let fictionBooks = GetBookTitlesByCategory();
LogBookTitles(fictionBooks);
LogFirstAvailable();
// -------------------Default parameters end-------------------
// -------------------Rest parameters-------------------
function CheckoutBooks(customer, ...booksIDs) {
    console.log('Checking out books for ', customer);
    let booksCheckedOut = [];
    for (let id of booksIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
let myBooks = CheckoutBooks('SEAN', 1, 3, 4);
LogBookTitles(myBooks);
//函数实现
function A(param) {
    if (typeof param === 'number') {
        // 函数实现
    }
    else if (typeof param === 'string') {
        // 函数实现
    }
}
function GetTitles(author, available) {
    const allBooks = GetAllBooks();
    const searchResults = [];
    if (available) {
        for (let book of allBooks) {
            if (book.author === author && book.available === available) {
                searchResults.push(book.title);
            }
        }
    }
    else {
        for (let book of allBooks) {
            if (book.author === author) {
                searchResults.push(book.title);
            }
        }
    }
    return searchResults;
}
LogBookTitles(GetTitles('Ernest Hemingway'));
LogBookTitles(GetTitles('Ernest Hemingway', false));
// -------------------Function overload end-------------------
