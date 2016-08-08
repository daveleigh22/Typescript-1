import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new Ref item');
    }

    printItem() : void {
        console.log('Title: '+this.title);
    }

    get publisher() : string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;

}

class Encylopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem() :void {
        super.printItem();
        console.log('Edition: ' + this.edition + ' year: ' + this.year);
    }

    printCitation() : void {
        console.log('blah');
    }
}

export { UniversityLibrarian, ReferenceItem, Encylopedia };