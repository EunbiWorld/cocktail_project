import styled from "styled-components";
const MyRecipePage = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 90px;

  #RecipeLogo {
    text-align: center;
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    color: white;
    font-size: 10rem;
    letter-spacing: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 50px;
  }

  .contentWrapper {
    display: flex;
    flex-direction: column;
  }
  .mainContent {
    display: flex;
    justify-content: space-between;
  }

  .leftContent {
    flex: 1;
    margin-right: 20px;

    .NameSet {
      display: flex;
      flex-direction: column;
      color: white;

      .myRecipeName {
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 18px;
      }

      input[type="text"] {
        font-size: 18px;
        color: #000000;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 18px;
        background-color: #ffffff;
      }
    }

    .ingredients {
      .ingredientsHeader {
        display: flex;
        align-items: center;
      }

      h2 {
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 18px;
        margin-right: 5px;
      }

      .addIngredientsBtn {
        font-size: 15px;
        border-radius: 5px;
        background-color: #ffffff;
        color: #000000;
        cursor: pointer;
        margin-bottom: 15px;
      }

      .ingredientItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 15px;
        color: #ffffff;
      }

      .ingredientItem .customIngredients {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .ingredientItem input[type="text"] {
        flex: 1;
        font-size: 15px;
        color: #000000;
        padding: 3px;
        border-radius: 5px;
        background-color: #ffffff;
        margin-right: 5px;
      }
    }
  }

  .rightContent {
    flex: 1;

    .photoBox {
      width: 100%;
      height: 500px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ccc;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom: 15px;
    }

    .NameSet {
      display: flex;
      color: white;
      flex-direction: column;

      .myRecipeName {
        font-size: 24px;
        margin-bottom: 15px;
      }
      input[type="text"] {
        width: 100%;
        padding: 5px;
        font-size: 15px;
      }
    }
  }

  .bottomContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin-top: 20px;

    .inputs section {
      margin-bottom: 15px;
    }

    h2 {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 15px;
    }

    .inputs textarea {
      width: 100%;
      height: 150px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      background-color: #ffffff;
      color: #000000;
    }

    .submitNav {
      display: flex;
      justify-content: center;
    }

    .submitNav .submitBtn {
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      margin-top: 15px;
      margin-bott: 15px;
      background-color: #007bff;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;
export default MyRecipePage;
