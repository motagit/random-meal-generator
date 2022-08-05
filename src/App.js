import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import './App.scss';

function App() {
  const [recipe, setRecipe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(recipe);

  const getMeals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const json = await response.json();
      setData(json.meals);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setRecipe(true);
      getIngredients();
      setLoading(false);
    }
  };

  const getIngredients = () => {
    let ingredientArray = [];
    if (recipe) {
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
    let instructionArray = [];
    if (recipe) {
      if (data[0]['strInstructions'].match(/\n/g)) {
        instructionArray = data[0]['strInstructions'].split();
      }
    }
    return (instructionArray);
  }

  return (
    <>
    {!recipe && <h1 className="mainTitle">It's cooking time!</h1>}
    {!recipe && <h2 className="subTitle">click in the button below to get a random recipe</h2>}

    <button className={recipe ? "topButton" : "centeredButton"} id="mainButton" onClick={() => getMeals()}>get meal 😋</button> 
    <div className="container">
      {recipe && ( 
        !loading ? (
          <>
            <h1>{data[0]?.strMeal}</h1>
            <div className="column">
              <img id="image" width={340} height={340} src={data[0].strMealThumb} alt={data[0]?.strMeal}/>
              <div className="ingredients">
                <h3>Ingredients</h3>
                  <ul>{getIngredients()}</ul>
              </div>
            </div>
            <div className="instructions column">
              <h3>Instructions</h3>
              <p>{getInstructions()}</p>
            </div>
          </>
        ) : (
          <div class="loading">
            <MoonLoader color='#7c0a02' loading={loading} size={100} cssOverride={{margin: '0 auto'}} />
          </div>
        ))}
    </div>
    </>
  );
}

export default App;