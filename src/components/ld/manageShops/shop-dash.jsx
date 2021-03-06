import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import Breadcrumb from "../common/breadcrumb";
import { connect } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import {
  ShopDashboardDetialURL,
  ShopDashProductsURL,
  ShopDashOrdersURL,
  ShopDashOpenStatusURL
} from "../../../constants";
import { authAxios } from "../../../authAxios";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto 30px auto;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopDetail: "",
      pendingOrders: "",
      totalOrders: "",
      item: "",
      orders: null,
      loading: false
    };
  }

  componentWillMount() {
    this.fetchShopDetails();
    this.fetchShopDashOrders();
  }

  fetchShopDashOrders = () => {
    this.setState({ loading: true });
    authAxios
      .get(ShopDashOrdersURL)
      .then(res => {
        this.setState({ orders: res.data, loading: false });
        // console.log(res.data.pendingOrders);
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  fetchShopDetails = () => {
    this.setState({ loading: true });
    authAxios
      .get(ShopDashboardDetialURL)
      .then(res => {
        this.setState({ ShopDetail: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  shopOpenStatus = (status, id) => {
    this.setState({ loading: true });
    authAxios
      .put(ShopDashOpenStatusURL(id), {
        is_accepting_orders: status
      })
      .then(res => {
        // toast.error("Order  cancelled");
        this.fetchShopDetails();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err });
        this.setState({ loading: false });
      });
  };

  refreshpage = () => {
    console.log("hi");
    window.location.reload();
  };

  render() {
    const { ShopDetail, orders } = this.state;
    const { token } = this.props;
    // console.log(token);

    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        {this.state.loading ? (
          <div className="loading-cls"></div>
        ) : (
          <React.Fragment>
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="dashboard-right">
                      <div className="dashboard">
                        <div className="box-account box-info">
                          <div className="box-head">
                            <h3>{ShopDetail.name}</h3>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="box">
                                <div className="box-title">
                                  {/* <h4>Order ID: {order.id}</h4> */}
                                </div>
                                <div className="box-content">
                                  <h6>{ShopDetail.place}</h6>
                                  <h6>Phone: {ShopDetail.phone_number}</h6>
                                  <br />
                                  <h4>
                                    {ShopDetail.is_accepting_orders ? (
                                      <Alert variant={"success"}>
                                        Your shop is open
                                      </Alert>
                                    ) : (
                                      <Alert variant={"danger"}>
                                        Your shop is closed
                                      </Alert>
                                    )}
                                  </h4>
                                  <br></br>
                                  <>
                                    <Button
                                      onClick={() => {
                                        this.shopOpenStatus(
                                          !ShopDetail.is_accepting_orders,
                                          ShopDetail.id
                                        );
                                      }}
                                      variant={
                                        ShopDetail.is_accepting_orders
                                          ? "outline-danger"
                                          : "outline-success"
                                      }
                                    >
                                      {ShopDetail.is_accepting_orders
                                        ? "Close shop"
                                        : "Open shop"}
                                    </Button>
                                  </>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {orders ? (
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="dashboard-right">
                        <div className="dashboard">
                          <div className="box-account box-info">
                            <div className="box-head">
                              <h3>
                                {this.state.orders.pendingOrders} Pending Orders
                              </h3>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="box">
                                  <div className="box-title"></div>
                                  <div className="box-content">
                                    <Link to="/shop-order-table">
                                      <Button variant="outline-primary">
                                        Go to orders
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {orders ? (
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="dashboard-right">
                        <div className="dashboard">
                          <div className="box-account box-info">
                            <div className="box-head">
                              <h3>
                                {this.state.orders.item} Products in your shop
                              </h3>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="box">
                                  <div className="box-title">
                                    {/* <h4>Order ID: {order.id}</h4> */}
                                  </div>
                                  <div className="box-content">
                                    {/* <a href="/shop-product-list"> */}{" "}
                                    <Link to="/shop-product-list">
                                      <Button variant="outline-primary">
                                        Go to products
                                      </Button>{" "}
                                    </Link>
                                    {/* </a> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {orders ? (
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="dashboard-right">
                        <div className="dashboard">
                          <div className="box-account box-info">
                            <div className="box-head">
                              <h3>
                                {this.state.orders.totalOrders} Total Orders
                              </h3>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="box">
                                  <div className="box-title"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* </section> */}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.user.user,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Orders);

// export default Orders;
