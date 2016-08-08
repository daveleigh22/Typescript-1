import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encylopedia } from './classes';

function GetAllBooks() : Book[] {
    let books = [
        { id: 1, title: 'Book1', author : 'James', available : true, category: Category.Fiction},
        { id: 2, title: 'Book2', author : 'John', available : false, category: Category.Fiction},
         { id: 3, title: 'Book3', author : 'Bob', available : true, category: Category.Poetry},
          { id: 4, title: 'Book4', author : 'Harris', available : true, category: Category.Children}
    ];
    return books;
}

function LogFirstAvailable(books) : void {

    let numberOfBooks : number = books.length;
    let firstAvailable : string = '';

    // let means only in scope of loop
    for(let currentBook of books) {
        
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Availble: ' + firstAvailable);
}



function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction):  Array<string> {

    console.log('Getting books in cetagory: ' + Category[categoryFilter]);
   
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]) : void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number) : Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0]; // should never find more than one
}

function CreateCustomerID(name: string, id: number) : string {
    return name + id;
}

function CreateCustomer(name: string, age? : number, city?: string) {
    console.log('Creating customer ') + name;
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]) : string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckOut: string[] = [];
    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckOut.push(book.title);
        }
    }

    return booksCheckOut;
}

function GetTitles(author:string) : string[];
function GetTitles(available:boolean) : string[];
function GetTitles(bookProperty:any) : string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    
    else if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}


function PrintBook(book: Book) : void {
    console.log(book.title + ' by ' + book.author);
}


let favouriteLibrarian : Librarian = new UniversityLibrarian();
favouriteLibrarian.name = 'Sharon';
favouriteLibrarian.assistCustomer('Lynda');

//************************************************

let refBook : ReferenceItem = new Encylopedia('WorldPedia', 2013, 10);
refBook.printCitation();


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