import React from "react";
import "./bootstrap.min.css";
import "./main.css";
const ProductPage = () => {
  return (
    <div id="page-top">

      <header className="page-section masthead2">
        <div className="container h-50">
          <h1 className="section-header text-white font-weight-bold">
            Products
          </h1>
          <p className="main-menu text-white-75 font-weight-light mb-5">
            <a className="link-menu" href="home.html">
              Savannah Cafe  <span style={{ color: "white" }}>Products</span>
            </a>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="page-section">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 blog-form">
              <h2 className="blog-sidebar-title">
                <b>Cart</b>
              </h2>
              <hr />
              <p className="blog-sidebar-text">No products in the cart...</p>
              <h2 className="blog-sidebar-title">
                <b>Categories</b>
              </h2>
              <hr />
              {[
                "Coffee",
                "Green Coffee",
                "Nigerian",
                "Roasted Coffee",
                "Uncategorized",
              ].map((category, index) => (
                <p key={index} className="blog-sidebar-list">
                  <b>
                    <span className="list-icon">  </span> {category}
                  </b>
                </p>
              ))}
              <h2 className="blog-sidebar-title">
                <b>Filter</b>
              </h2>
              <hr />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <p className="tags">Price $4 - $25</p>
              <button type="button" className="btn btn-dark btn-lg">
                Filter
              </button>
            </div>
            {/* Main Products */}
            <div className="col-lg-9" style={{ paddingLeft: "30px" }}>
              <div className="row">
                <div className="col">Showing all 9 results</div>
                <div className="col">
                  <select className="form-control">
                    <option value="">Default Sorting</option>
                    <option value="popularity">Sorting by popularity</option>
                    <option value="average">Sorting by average</option>
                    <option value="latest">Sorting by latest</option>
                    <option value="low">Sorting by low</option>
                    <option value="high">Sorting by high</option>
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                {[
                  {
                    title: "Accessory",
                    price: "$25.16",
                    img: "/coffee_item7.jpg",
                  },
                  {
                    title: "Coffee Bank",
                    price: "$16",
                    img: "/coffee_item8.jpg",
                  },
                  {
                    title: "Latte Accessory",
                    price: "$20",
                    img: "/coffee_item3.jpg",
                  },
                  {
                    title: "Accessories",
                    price: "$14.16",
                    img: "/coffee_item7.jpg",
                  },
                  {
                    title: "Table Accessory",
                    price: "$20.16",
                    img: "/coffee_item4.jpg",
                  },
                  {
                    title: "Online Coffee",
                    price: "$35.16",
                    img: "/coffee_item5.jpg",
                  },
                  {
                    title: "Gold Accessory",
                    price: "$16",
                    img: "/coffee_item1.jpg",
                  },
                  {
                    title: "Lating Accessory",
                    price: "$26",
                    img: "/coffee_item2.jpg",
                  },
                  {
                    title: "American Black Coffee",
                    price: "$50",
                    img: "/coffee_item6.jpg",
                  },
                ].map((product, index) => (
                  <div key={index} className="col-sm-3 col-md-6 col-lg-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="product-image"
                        />
                        <h5 className="card-title">
                          <b>{product.title}</b>
                        </h5>
                        <p className="card-text small">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <p className="tags">Price {product.price}</p>
                        <a href="#" className="btn btn-success button-text">
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          ></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
