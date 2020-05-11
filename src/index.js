import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Store from './store';


ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <meta name="theme-color" content="#000000">
//   <link rel="stylesheet" href="./style.css">
//   <title>Trelloyes!</title>
// </head>

// <body>
//   <main class="App">
//     <header class="App-header">
//       <h1>Trelloyes!</h1>
//     </header>
//     <div class="App-list">
//       <section class="List">
//         <header class="List-header">
//           <h2>First list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>First card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fifth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Seventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Tenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//             <button type="button" class="List-add-button">
//               + Add Random Card
//             </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Second list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Third card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fourth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eighth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Ninth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eleventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//             <button type="button" class="List-add-button">
//               + Add Random Card
//             </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Third list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>First card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Third card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fourth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fifth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Seventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eighth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Ninth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Tenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eleventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <button type="button" class="List-add-button">
//             + Add Random Card
//           </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Fourth list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <button type="button" class="List-add-button">
//             + Add Random Card
//           </button>
//         </div>
//       </section>
//     </div>
//   </main>
// </body>

// </html>
