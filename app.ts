function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
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

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {

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