//home page
'use client';
import style from '../style.module.css'
import React, {useState, useEffect} from 'react';
// import { thumbnailBook } from '../../components/book'

export default function Home() {
    return(
        <div className={style.homePage}>
            <div className='header'> 
                <p className={style.homeh1}> Welcome </p>
            </div>
            <div className='forYou'>
                <p className={style.homeh2}>For you</p>
            </div>
        </div>
    );
}

//feature for homepage based
// recommendedBooks = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async() => {
//             try {
//                 const response = await fetch('/api/search_books');
//                 if(!response.ok) {
//                     throw new Error('Failed to fetch books');
//                 }
//                 const data = await response.json();
//                 setBooks(data);
//             } catch(error) {
//                 console.error('Failed to fetch recommended books:', errors);
//             }
//         };

//         fetchBooks();
//     }, []);

//     return(
//         <div>
//             <h2>Recommended Books</h2>
//             <div className='bookWindow'>
//                 {/* {books.map(book => (
//                     <thumbnailBook bookData={books} />
//                 ))} */}
//             </div>
//         </div>
//     );
// }

