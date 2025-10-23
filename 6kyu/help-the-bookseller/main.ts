
export const stockList = (books: string[], categories: string[]) => {
    // initialize the book counter which indicates number of book for given categories
    const bookCounter = categories.reduce((counter, category) => ({ ...counter, [category]: 0 }), {} as Record<string, number>);

    // count the total of books by transversing the book list 
    books.map(book => {
        const [code, quantity] = book.split(' ');
        const category = code.charAt(0);
        const isOutOfScope = bookCounter[category] === undefined;
        const parsedQuatity = parseInt(quantity);
        if (isOutOfScope || !parsedQuatity) return;
        bookCounter[category] += parsedQuatity; 
    });

    // return printed result
    const bookCounts = categories.map(category => `(${category} : ${bookCounter[category]})`);
    return bookCounts.join(" - ");
};