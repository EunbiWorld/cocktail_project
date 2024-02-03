import { useState } from "react";
import MyRecipePage from "../../styled/MyRecipe";
import { Ingredients, Recipe } from "../Fn/Interface/Recipe";
import setAutoWordText from "../Fn/SetAutoWordText";
import inputRecipeKeyword from "../Fn/InputRecipe_Keyword copy";
import CustomIngredients from "./CustomIngredients";

const MyRecipe = () => {
  let [getTheumnale, setThemnale] = useState<string>("");
  let [getIngredients, setIngredients] = useState<Ingredients[]>([]);
  return (
    <MyRecipePage
      onSubmit={(e) => {
        e.preventDefault();
        let from_data = new FormData(e.currentTarget);
        let new_data: Recipe = {
          ID: "",
          Image: from_data.get("myRecipeTheumnale") as string,
          Name: from_data.get("myRecipeEngName") as string,
          Kor_name: from_data.get("myRecipeName") as string,
          Taste: from_data.get("taste") as string,
          Ingredients: getIngredients as Ingredients[],
          Method: from_data.get("recipe") as string,
          Garnish: from_data.get("garnish") as string,
          Histoy: from_data.get("history") as string,
        };
        console.log(new_data);
        // 여기에 데이터베이스에 추가하는 기능
      }}
    >
      <header id="RecipeLogo">MY RECIPE</header>
      <div className="contentWrapper">
        <div className="mainContent">
          <div className="leftContent">
            <article className="NameSet">
              <span className="myRecipeName">국문 제목(KOR)</span>
              <input type="text" name="myRecipeName" id="myRecipeNameInput" />
              <span className="myRecipeName">영문 제목(ENG)</span>
              <input
                type="text"
                name="myRecipeEngName"
                id="myRecipeEngNameInput"
              />
            </article>
            <section className="ingredients">
              <div className="ingredientsHeader">
                <h2>재료</h2>
                <button
                  className="addIngredientsBtn"
                  onClick={() =>
                    setIngredients((v) => {
                      v.push({ Name: "", Optional: false, Volume: "" });
                      return [...v];
                    })
                  }
                >
                  +
                </button>
              </div>
              {getIngredients.map((data, i) => (
                <div className="ingredientItem">
                  <CustomIngredients
                    key={data.Name + i}
                    setter={setIngredients}
                    index={i}
                    data={data}
                  ></CustomIngredients>
                </div>
              ))}
            </section>
          </div>
          <div className="rightContent">
            <div
              className="photoBox"
              style={{
                backgroundImage: getTheumnale ? `url(${getTheumnale})` : "none",
              }}
            >
              {!getTheumnale && "사진이 없습니다"}
            </div>
            <article className="NameSet">
              <span className="myRecipeName">사진(URL)</span>
              <input
                type="text"
                name="myRecipeTheumnale"
                id="myRecipeTheumnaleInput"
                onChange={(e) => {
                  setThemnale(e.currentTarget.value);
                }}
              />
            </article>
          </div>
        </div>
        <div className="bottomContent">
          <section className="inputs">
            <section className="taste">
              <h2>맛</h2>
              <textarea name="taste" className="tasteTextarea"></textarea>
            </section>
            <section className="recipe">
              <h2>레시피</h2>
              <textarea name="recipe" className="recipeTextarea"></textarea>
            </section>
            <section className="garnish">
              <h2>가니쉬</h2>
              <textarea name="garnish" className="garnishTextarea"></textarea>
            </section>
            <section className="history">
              <h2>설명</h2>
              <textarea name="history" className="historyTextarea"></textarea>
            </section>
          </section>
          <nav className="submitNav">
            <input type="submit" value="등록" className="submitBtn" />
          </nav>
        </div>
      </div>
    </MyRecipePage>
  );
};

export default MyRecipe;
