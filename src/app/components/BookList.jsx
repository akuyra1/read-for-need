// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function BookList() {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Fetching Deathstalker series books by Simon R. Green
//         axios.get('https://openlibrary.org/search.json?author=Simon+R+Green&title=Deathstalker&limit=20')
//             .then(response => {
//                 setBooks(response.data.docs); // Store the data in state
//                 setLoading(false);
//                 console.log(response.data)
//             })
//             .catch(error => {
//                 console.error('Error fetching the data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h1>Deathstalker Series by Simon R. Green</h1>
//             <ul>
//                 {books.map((book, index) => (
//                     <li key={index}>
//                         {book.title} by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default BookList;
