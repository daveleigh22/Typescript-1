"use strict";
var enums_1 = require('./enums');
var classes_1 = require('./classes');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Book1', author: 'James', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'Book2', author: 'John', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'Book3', author: 'Bob', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Book4', author: 'Harris', available: true, category: enums_1.Category.Children }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    // let means only in scope of loop
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Availble: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in cetagory: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0]; // should never find more than one
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ') + name;
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckOut.push(book.title);
        }
    }
    return booksCheckOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
var favouriteLibrarian = new classes_1.UniversityLibrarian();
favouriteLibrarian.name = 'Sharon';
favouriteLibrarian.assistCustomer('Lynda');
//************************************************
// let myBook : Book = {
//     id: 5,
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages: 250,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// };
// let logDogamage: DamageLogger;
// logDogamage = (damage: string) => console.log('Damage Reported: ' + damage);
// logDogamage('coffee stain');
// Duck typing
///PrintBook(myBook);
//myBook.markDamaged('missing back cover');
// Overloaded functions
//let myBooks = GetTitles(true);
//myBooks.forEach(title => console.log(title));
// Rest params
//let myBooks: string[] = CheckoutBooks('Me', 1, 2, 3);
//myBooks.forEach(title => console.log(title));
//let poetryBooks = GetBookTitlesByCategory();
// let x: number;
// x = 5;
// let IdGenerator: (chars: string, nums: number) => string; // Function Type (params) => Return type
// IdGenerator = CreateCustomerID;
// IdGenerator = (name: string, id: number) => {return id + name;} // just like any other type
//let myID: string = IdGenerator('dan', 20);
//console.log(myID);
// We can assign this CreateCustomerID function to a variable and use the varible to call it.
//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val)); // ++idx is just displaying the index + 1 to account for 0.
// val is current value of the array.
// idx is index
// arr is the array itself 
//# sourceMappingURL=app.js.map