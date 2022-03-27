function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }];
    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

// -------------------Enum-------------------

enum Category {
    Fiction,
    Poetry,
    Biography,
    History,
    Children
}

console.log(Category.Biography === 2);      // true
console.log(Category[2] === 'Biography'); // true

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (const currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);

// -------------------Enum end-------------------

// -------------------Tuple-------------------

let myTuple: [number, string] = [25, 'truck'];
let firstElement = myTuple[0];
let secondElement = myTuple[1];
secondElement.toUpperCase();
myTuple.push(1) //这种操作虽然可行，但是严重不建议！不可越界访问第三个元素
// firstElement.toUpperCase(); //类型“number”上不存在属性“toUpperCase”。
// myTuple[2]   // 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素。
// myTuple[2] = 100; // 不能将类型“100”分配给类型“undefined”。

let list: [number, string?, boolean?];
list = [10, 'sean', true];
list = [10, 'sean'];
list = [10];

function reset(...args: [number, string, boolean]): void {
    console.log('args:', args); // args: [ 1, 'sean', true ]
}

reset(1, 'sean', true)

// -------------------Tuple end-------------------

// -------------------Optional parameters-------------------

function CreateCustomer(name: string, age?: number, city?: string): void {
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

function CheckoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log('Checking out books for ', customer);

    let booksCheckedOut: string[] = [];

    for (let id of booksIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

let myBooks: string[] = CheckoutBooks('SEAN', 1, 3, 4);
LogBookTitles(myBooks);

// -------------------Rest parameters end-------------------