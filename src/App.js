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
    }
  };

  return (
    <>
    <button onClick={() => getMeals()}>Click</button> 
    {isLoading == false ? 
      <div className="container">
        
        <h1>{data[0].strMeal}</h1>
        <h3>Ingredients</h3>
        <ul>
          <li>ingredient</li>
        </ul>
        <h3>Instructions</h3>
        <ul>
          <li>instruction</li>
        </ul>
        <img src={data[0].strMealThumb} alt="Food image" />
      </div>
    : null}
    </>
  );
}

export default App;
