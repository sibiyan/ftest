import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { fetchUser } from "../../../actions/user";
import Breadcrumb from "../common/breadcrumb";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { orderListURL, orderStatusListURL } from "../../../constants";
import { authAxios } from "../../../authAxios";

import Result from "./result":

class ShopOrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      newOrders: [],
      loading: false,
      error: null,
      offset: 0,
      limit: 10,
      query: "all",
      hasMore: true,
      orderStatus: []
    };
  }

  componentDidMount() {
    this.props.fetchUserType();
    this.handleOrderStatus();

    this.setState({ loading: true }, () => {
      const { offset, limit, query } = this.state;
      authAxios
        .get(orderListURL + `?limit=${limit}&offset=${offset}&q=${query}`)
        .then(res => {
          this.setState({ orders: res.data.orders });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  }

  handleOrderStatus = () => {
    this.setState({ loading: true }, () => {
      console.log("order status");
      authAxios
        .get(orderStatusListURL)
        .then(res => {
          this.setState({ orderStatus: res.data });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  };

  handleFetchOrdersScroll = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit, query } = this.state;
      this.setState({ offset: this.state.offset + limit });
      authAxios
        .get(orderListURL + `?limit=${limit}&offset=${offset}&q=${query}`)
        .then(res => {
          this.setState({ orders: this.state.orders.concat(res.data.orders) });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  };

  render() {
    const { orders, hasMore, query, orderStatus } = this.state;
    const { userType, token } = this.props;
    console.log(orderStatus);

    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Breadcrumb title={"My Orders"} />

        {orders && (
          <div>
            <InfiniteScroll
              dataLength={this.state.orders.length} //This is important field to render the next data
              next={this.handleFetchOrdersScroll}
              hasMore={this.state.hasMore}
              loader={<div className="loading-cls"></div>}
              endMessage={
                <p className="seen-cls seen-it-cls">
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <section className="section-b-space">
                <div className="container">
                  <div className="account-sidebar">
                    <Link
                      style={{ color: "#FFF" }}
                      to={`/orders`}
                      onClick={this.handleFetchOrders}
                    >
                      My Orders
                    </Link>
                  </div>
                  {orders.map((order, index) => (
                    <div key={index} className="row">
                      <div className="col-lg-3">
                        <div className="dashboard-left">
                          <div className="collection-mobile-back">
                            <span className="filter-back">
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              ></i>{" "}
                              back
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="dashboard-right">
                          <div className="dashboard">
                            <div className="box-account box-info">
                              <div className="box-head">
                                <h3>{order.shop_name}</h3>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="box">
                                    <div className="box-title">
                                      <h4>Order No: {order.id}</h4>
                                      {(userType === "DeliveryStaff") |
                                        (userType === "ShopOwner") && (
                                        <div>
                                          <div>
                                            Customer: {order.customer_name}
                                          </div>
                                          <div>
                                            Customer: {order.phone_number}
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    <div className="box-content">
                                      <h6>Date: {order.start_date}</h6>
                                      <h6>Status: {order.orderStatus}</h6>
                                      <br></br>
                                      <a href={`order/${order.id}`}>
                                        View More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </InfiniteScroll>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.user.user.UserType,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserType: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopOrderManagement);

// export default Orders;
