'use client';

//rendering books

thumbnailBook = (bookdata) => {
    return(
        <div>
            {bookdata.map((book) => (
                <div key={book.id}>
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jgp`} />
                    <h1>{book.title}</h1>
                    <p>{book.author_name}</p>
                </div>
            ))}
        </div>
    );
}