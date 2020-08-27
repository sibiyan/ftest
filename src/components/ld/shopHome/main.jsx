import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import "../../common/index.scss";
import Slider from "react-slick";
import Jumbotron from "react-bootstrap/Jumbotron";
import Offer from "./offer";
// import { Link } from "react-router-dom";
import axios from "axios";
import { fetchCart } from "../../../actions/cart";
import Image from "react-bootstrap/Image";

import Shipping from "./shipping";
import Trending from "./trending";
import ProductList from "./product-list";
import ShopImage from "./shopImage";
import Productcategory from "../products/productCategory";
// import ProductList from "./product-test";

import {
  ShopProductListURL,
  ShopFProductListURL,
  ShopDetailURL,
  ShopProductCategoryForCustomerURL
} from "../../../constants";

class Shop extends Component {
  state = {
    loading: false,
    error: null,
    products: [],
    featuredProducts: [],
    ShopDetail: null,
    ShopProductCategory: [],
    SelectedCategory: "all",
    filteredProduct: []
  };

  componentDidMount() {
    document.getElementById("color").setAttribute("href", `#`);
    this.fetchProducts();
    this.fetchfeaturedProducts();
    this.fetchShopDetails();
    this.fetchProductCategory();
    this.props.refreshCart();
  }
  handleChangeCategory = cat => {
    this.setState({ SelectedCategory: cat });
    // console.log(cat);
    this.filterProduct();
  };

  filterProduct() {
    const { SelectedCategory } = this.state;
    this.setState({
      filteredProduct: this.state.products.filter(
        product => product.productategory == SelectedCategory
      )
    });
  }

  handleClearCategory = () => {
    this.setState({ SelectedCategory: "all" });
    window.scrollTo(0, 1300);
    // console.log("all");
  };

  fetchProducts = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    axios
      .get(ShopProductListURL(params.shopID))
      .then(res => {
        this.setState({ products: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  fetchShopDetails = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    axios
      .get(ShopDetailURL(params.shopID))
      .then(res => {
        this.setState({ ShopDetail: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  fetchProductCategory = () => {
    // const ownerID = this.props.userID;
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    // authAxios
    axios
      .get(ShopProductCategoryForCustomerURL(params.shopID))
      .then(res => {
        this.setState({ ShopProductCategory: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  fetchfeaturedProducts = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    axios
      .get(ShopFProductListURL(params.shopID))
      .then(res => {
        this.setState({ featuredProducts: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const {
      products,
      featuredProducts,
      ShopDetail,
      ShopProductCategory,
      filteredProduct
    } = this.state;
    // console.log(products);

    return (
      <div>
        <Helmet>
          <title>Local Dukans</title>
        </Helmet>
        {/* <Header /> */}
        {this.state.loading && <div className="loading-cls"></div>}

        {/* <section className="p-0">
          {ShopDetail ? <Image src={ShopDetail.image} fluid /> : null}
        </section> */}
        <section className="ratio_asos metro-section portfolio-section ">
          {ShopDetail && <ShopImage ShopDetail={ShopDetail} />}
        </section>

        {ShopDetail && (
          <div>
            {ShopDetail.is_active ? (
              <div>
                {ShopDetail.is_accepting_orders ? (
                  <div>
                    {/* <Shipping /> */}
                    {ShopDetail && (
                      <div>
                        {ShopDetail.shipping_message !== "" ? (
                          <Shipping message={ShopDetail.shipping_message} />
                        ) : null}
                        {ShopDetail.offer_message !== "" ? (
                          <Offer message={ShopDetail.offer_message} />
                        ) : null}
                      </div>
                    )}

                    {featuredProducts && (
                      <Trending fProducts={featuredProducts} />
                    )}

                    {ShopProductCategory.length > 0 ? (
                      <Productcategory
                        handleClearCategory={this.handleClearCategory}
                        handleChangeCategory={this.handleChangeCategory}
                        ShopProductCategory={ShopProductCategory}
                      />
                    ) : null}

                    {/* <Search /> */}

                    {this.state.SelectedCategory !== "all" ? (
                      <React.Fragment>
                        {/* <h1>filter exist</h1> */}
                        {products && (
                          <ProductList
                            products={filteredProduct}
                            SelectedCategory={this.state.SelectedCategory}
                          />
                        )}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {/* <h1>filter does not exist</h1> */}
                        {products && (
                          <ProductList
                            products={products}
                            SelectedCategory={this.state.SelectedCategory}
                          />
                        )}
                      </React.Fragment>
                    )}
                  </div>
                ) : (
                  <Jumbotron>
                    <h4>We are not accepting orders now</h4>
                    <p>please check back later</p>
                  </Jumbotron>
                )}
              </div>
            ) : (
              <Jumbotron>
                <h4>This shop is currently not active</h4>
                <p>please check back later</p>
              </Jumbotron>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Shop);
