import React from 'react';
import{ useEffect, useState } from 'react';
import MealSelection from './components/MealSelection';
import './App.css';
function App() {
  return (
    <div className="App">
      <MealSelection />

    </div>
  );
}

// function App() {
//   const [mealSelected, setMealSelected] = useState({
//     "Adult passenger 1": null,
//     "Adult passenger 2": null,
//   });

//   const handleMealSelection = (passenger, meal) => {
//     setMealSelected((prevState) => ({
//       ...prevState,
//       [passenger]: meal,
//     }));
//   };

//   const totalCost = Object.values(mealSelected).filter((meal) => meal !== null).length * 10; // Assuming each meal costs 10€

//   return (
//     <div>
//       <div className="header">
//         <span className="plus-icon">+</span>
//         <h2>Select meal</h2>
//       </div>
//       <div className="flight-details">
//         <h3>Riga - St Petersburg</h3>
//         <p>Flight duration: 1h 30min</p>
//         <span className="edit-icon">^</span>
//       </div>
//       <div className="passengers">
//         {Object.keys(mealSelected).map((passenger) => (
//           <div key={passenger} className="passenger">
//             <p>{passenger}</p>
//             {mealSelected[passenger] ? (
//               <span className="selected-meal">
//                 {mealSelected[passenger]}
//               </span>
//             ) : (
//               <button
//                 className="select-meal-button"
//                 onClick={() => handleMealSelection(passenger, "Select meal")}
//               >
//                 Select meal
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="total-cost">
//         <p>Total for all passengers</p>
//         <span>{totalCost}**€**</span>
//       </div>
//     </div>
//   );
// }

export default App;