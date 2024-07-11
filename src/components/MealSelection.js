import React, { useEffect, useState } from 'react';
import './MealSelection.css';

function MealSelection() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [drinks, setDrinks] = useState([]);
  const [drink, setDrink] = useState("");
  const [drinkidx, setDrinkidx] = useState(0);
  const [meals, setMeals] = useState(null);
  const [labels, setLabels] = useState(null);
  const [total, setTotal] = useState(0);
  const [passengers, setPassengers] = useState([
    { id: 1, meal: "" },
    { id: 2, meal: "" },
  ]);
  const onPassengerSelect = (ev) => {
    const tag = ev.target.parentElement;
    const siblings = Array.from(tag.parentElement.children);

    siblings.forEach(el => {
      el.classList.remove("active");
    });

    tag.classList.add("active");
  }

  const onDrinkSelect = (ev) => {
    const tag = ev.target.parentElement;
    const siblings = Array.from(tag.parentElement.children);

    siblings.forEach(el => {
      el.classList.remove("active");
    });
    tag.classList.add("active");
    setDrink(tag.getAttribute("id"));
    setDrinkidx(siblings.indexOf(tag));
  };

  useEffect(() => {
    const getmeals = async () => {
      const res = await fetch('http://localhost:3001/get-meals');
      const data = await res.json();
      setMeals(data);
    };
    const getlabels = async () => {
      const res = await fetch('http://localhost:3001/get-labels');
      const data = await res.json();
      setLabels(data.labels);
    };
    getmeals();
    getlabels();
  }, []);

  const handleMealSelect = (meal) => {
    if (selectedMeal && selectedMeal.id === meal.id) {
      // Deselect the meal
      setSelectedMeal(null);
      setTotal(total - meal.price - meal.drinks[drinkidx].price);
    } else {
      // Select the meal
      if (selectedMeal) {
        setTotal(total - selectedMeal.price - selectedMeal.drinks[drinkidx].price);
      }
      setSelectedMeal(meal);
      setTotal(total + meal.price + meal.drinks[drinkidx].price);
    }
  };

  return (
    meals &&
    <div className="container">
      <div className="categories">
        {labels && labels.map(label => (
          <button key={label.id} className="category-button" id={label.id}>{label.label}</button>
        ))}
      <div className="meals-list">
        {meals.meals.map((meal) => (
          <div key={meal.id} className="meal-item">
            <div className="meal-image">
              <img src={meal.img} alt={meal.title} />
            </div>
            <div className="meal-details">
              <h3>{meal.title}</h3>
              <ul>
                <li>Starter: {meal.starter}</li>
                {meal.desert && <li>Dessert: {meal.desert}</li>}
                <li>Selected drink: {meal.drinks[drinkidx].title}</li>
              </ul>
              <div className="drink-select">
                <div className='drink-options'>
                  <ul>
                    {meal.drinks && meal.drinks.map((drink) => (
                      <li key={drink.id} onClick={onDrinkSelect} id={drink.id}>
                        <img height={100} src={drink.img} alt={drink.title} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="button-price">
                  <div className="price">{meal.price}Rs</div>
                  <button 
                    onClick={() => handleMealSelect(meal)} 
                    className={selectedMeal && selectedMeal.id === meal.id ? 'selected' : ''}
                  >
                    {selectedMeal && selectedMeal.id === meal.id ? 'Deselect' : 'Select'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="meal-selection">
        <h2>Select meal</h2>
        <div className="flight-info">
          <h3>Riga - St Petersburg</h3>
          <p>Flight duration: 1h 40min</p>
        </div>
        {passengers.map((passenger) => (
          <div key={passenger.id} className="passenger-selection" onClick={onPassengerSelect}>
            <h4>Adult passenger {passenger.id}</h4>
          </div>
        ))}
        <div className="total-price">
          <h3>Total: {total.toFixed(2)} &euro;</h3>
        </div>
      </div>
    </div>
  );
}

export default MealSelection;
