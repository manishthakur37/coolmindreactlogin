import React from "react";
import "./index.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h2 style={{ paddingLeft: "14px", paddingTop: "50px" }}>
              {" "}
              Cool Mind{" "}
            </h2>
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Enter Your username"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Enter Your Password"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Login</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>
                <a href="kayıtol.php">Sign Up</a>
              </h3>
              <h3>
                <a href="sifremiunuttum.php">Forgot Password</a>
              </h3>
              <div className="social-icons">
                <a
                  href="https://instagram.com/isikabatay06"
                  className="social-login__icon fab fa-instagram"
                ></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a
                  href="https://twitter.com/isikabatay06"
                  className="social-login__icon fab fa-twitter"
                ></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
