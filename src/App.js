import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  const getIngredients= () => {
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

  return (
    <>
    <button onClick={() => getMeals()}>Click</button> 
    {isLoading == false ? 
      <div className="container">
        <h1>{data[0].strMeal}</h1>
        <h3>Ingredients</h3>
        <ul>{getIngredients()}</ul>
        <h3>Instructions</h3>
        <p>Instruction</p>
        <img src={data[0].strMealThumb} alt="Food image" width="300" />
      </div>
    : null}
    </>
  );
}

export default App;