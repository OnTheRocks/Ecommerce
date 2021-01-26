import React from 'react'

export default function Product(props) {
  const {product} = props;
  return (
    <div>
                  <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
  {/* Image size: 680px by 830px  */}
              <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
              <a href={`/product/${product._id}`}>
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star-half-alt"></i></span>
                <span><i className="far fa-star"></i></span>
              </div>
              <div className="price">
                ${product.price}
              </div>
            </div>
          </div> 
    </div>
  )
}
