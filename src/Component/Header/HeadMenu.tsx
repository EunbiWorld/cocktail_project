import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../res/img/ic_cocktail.png";
import HeadMenuPage from "../../styled/HeadMenu";

const HeadMenu: React.FC = () => {
  return (
    <HeadMenuPage>
      <div className="container">
        <Link to="/" className="link-style">
          <div className="content">
            <img src={logoimg} alt="Cocktail Sense Logo" />
            <div className="logo">Cocktail Sense</div>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about" className="link-style">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="link-style">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/cocktail-bar" className="link-style">
              Cocktail Bar
            </Link>
          </li>
          <li>
            <Link to="/class" className="link-style">
              Class
            </Link>
          </li>
        </ul>
      </nav>

      <div className="login-button">
        <Link to="/login" className="link-style">
          Login
        </Link>
        <Link to="/signup" className="link-style">
          <button>Sign Up</button>
        </Link>
      </div>
    </HeadMenuPage>
  );
};

export default HeadMenu;
