import React, { useEffect, useState } from "react";
import './App.scss';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(isLoading);

  const getMeals = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const json = await response.json();
      setData(json.meals);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      getIngredients();
    }
  };

  const getIngredients = () => {
    var ingredientArray = [];
    if (isLoading == false) {
      for (var i = 1; i <= 20; i++) {
        if ((data[0]['strIngredient' + i]) != "" && data[0]['strIngredient' + i] != null) {
          let ingredient = String(data[0]['strMeasure' + i].trimEnd() + " " + data[0]['strIngredient' + i]);
          ingredientArray.push(<li key={i}>{ingredient}</li>);
        }
      }
    }
    return (ingredientArray);
  }

  const getInstructions = () => {
    var instructionArray = [];
    if (isLoading == false) {
      if (data[0]['strInstructions'].match(/\n/g)) {
        instructionArray = data[0]['strInstructions'].split();
      }
    }
    return (instructionArray);
  }

  return (
    <>
    <button class={isLoading == false ? "topButton" : "centeredButton"} id="mainButton" onClick={() => getMeals()}>get meal</button> 
    {isLoading == false ? 
      <div className="container">
          <h1>{data[0].strMeal}</h1>
          <div className="column">
            <img id="image" src={data[0].strMealThumb} alt="Food image"/>
            <div className="ingredients">
              <h3>Ingredients</h3>
                <ul>{getIngredients()}</ul>
            </div>
            </div>
            <div className="instructions column">
              <h3>Instructions</h3>
              <p>{getInstructions()}</p>
            </div>
      </div>
    : null}
    </>
  );
}

export default App;