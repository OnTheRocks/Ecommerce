

function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">EStore</a>
      </div>
      <div>
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <main>
      <div className="row center">
        <div className="card">
          <a href="product.html">
{/* Image size: 680px by 830px  */}
            <img className="medium" src="./images/p1.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-alt"></i></span>
              <span><i className="far fa-star"></i></span>
            </div>
            <div className="price">
              $77
            </div>
          </div>
        </div>
        <div className="card">
          <a href="product.html">
{/* Image size: 680px by 830px  */}
            <img className="medium" src="./images/p2.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
            </div>
            <div className="price">
              $79
            </div>
          </div>
        </div>
        <div className="card">
          <a href="product.html">
{/* Image size: 680px by 830px */}
            <img className="medium" src="./images/p3.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-alt"></i></span>
              <span><i className="far fa-star"></i></span>
            </div>
            <div className="price">
              $79
            </div>
          </div>
        </div>
        <div className="card">
          <a href="product.html">
{/* Image size: 680px by 830px */}
            <img className="medium" src="./images/p4.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
            </div>
            <div className="price">
              $89
            </div>
          </div>
        </div>
        <div className="card">
          <a href="product.html">
{/* Image size: 680px by 830px */}
            <img className="medium" src="./images/p5.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
            </div>
            <div className="price">
              $89
            </div>
          </div>
        </div>
        <div className="card">
          <a href="product.html">
            {/* Image size: 680px by 830px */}
            <img className="medium" src="./images/p6.jpg" alt="product" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Nike Slim Shirts</h2>
            </a>
            <div className="rating">
              <span><i className="fa fa-star"></i></span>
              <span><i className="fa fa-star"></i></span>
              <span><i className="fa fa-star"></i></span>
              <span><i className="fas fa-star-half-alt"></i></span>
              <span><i className="far fa-star"></i></span>
            </div>
            <div className="price">
              $99
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="row center" >
      All Rights Reserved
    </footer>
  </div>
  );
}

export default App;
