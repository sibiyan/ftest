import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "react-bootstrap";

import { orderListURL } from "../../../constants";
import { authAxios } from "../../../authAxios";
// import { fetchUser } from "../../../actions/user";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      newOrders: [],
      loading: false,
      error: null,
      offset: 0,
      limit: 2,
      query: "all",
      // query: 184
      hasMore: true
    };
  }

  componentWillMount() {
    // this.props.fetchUserType();

    this.setState({ loading: true }, () => {
      const { offset, limit, query } = this.state;
      authAxios
        .get(orderListURL + `?limit=${limit}&offset=${offset}`)
        .then(res => {
          this.setState({ orders: res.data.orders, loading: false });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  }

  handleFetchOrdersScroll = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;
      this.setState({ offset: this.state.offset + limit });
      authAxios
        .get(orderListURL + `?limit=${limit}&offset=${offset}`)
        // .get(orderListURL)
        .then(res => {
          this.setState({ orders: this.state.orders.concat(res.data.orders) });
          this.setState({ hasMore: res.data.hasMore, loading: false });
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
    const { orders, loading, hasMore, query, limit } = this.state;
    const { token } = this.props;
    // console.log(this.state.loading);

    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Breadcrumb title={"My Orders"} />
        {loading ? (
          <div className="loading-cls"></div>
        ) : (
          <React.Fragment>
            {orders && (
              <div>
                <InfiniteScroll
                  dataLength={this.state.orders.length} //This is important field to render the next data
                  next={this.handleFetchOrdersScroll}
                  hasMore={this.state.hasMore}
                  // loader={<div className="loading-cls"></div>}
                  endMessage={
                    <p className="seen-cls seen-it-cls">
                      <b>No more order to show</b>
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
                                          <h4>Order ID: {order.id}</h4>
                                        </div>

                                        <div className="box-content">
                                          <h6>Date: {order.start_date}</h6>
                                          <h6
                                            className={
                                              order.status === "Pending"
                                                ? "text-danger"
                                                : ""
                                            }
                                          >
                                            Status: {order.orderStatus}
                                          </h6>
                                          <br></br>

                                          <Link
                                            to={`customer-order/${order.id}`}
                                          >
                                            <Button
                                              variant="outline-primary"
                                              size="sm"
                                            >
                                              View More
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
                      ))}
                    </div>
                  </section>
                </InfiniteScroll>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // userType: state.user.user.UserType,
    user: state.user,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Orders);

// export default Orders;
