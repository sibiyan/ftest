import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import { connect } from "react-redux";
import axios from "axios";
import { authAxios } from "../../../authAxios";
import { fetchUser } from "../../../actions/user";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Alert, Row, Col } from "react-bootstrap";

import {
  orderDetailURL,
  orderAddressURL,
  orderStatusUpdateURL,
  orderStatusListURL
} from "../../../constants";

class OrderItem extends Component {
  state = {
    order: [],
    loading: false,
    ShopSuccess: false,
    CustomerSuccess: false,
    error: null,
    addressID: null,
    orderAddress: [],
    orderItems: [],
    orderID: null,
    shippingCharges: 25,
    orderTotal: null,
    orderStatus: [],
    shopOrderStatus: [],
    staffOrderStatus: [],
    selectedOrderStatus: null
  };

  componentWillMount() {
    this.fetchOrder();
    this.props.fetchUserType();
  }

  fetchOrder = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({ loading: true });
    // const { shippingCharges } = this.state;
    authAxios
      .get(orderDetailURL(params.orderID))
      .then(res => {
        this.setState({
          order: res.data,
          loading: false,
          addressID: res.data.address,
          orderID: res.data.id,
          orderItems: res.data.order_items,
          orderTotal: res.data.total
        });
        this.handleCallback();
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleCallback = () => {
    this.fetchAddress();
  };

  fetchAddress = () => {
    const { addressID } = this.state;
    this.setState({ loading: true });
    authAxios
      .get(orderAddressURL(addressID))
      .then(res => {
        this.setState({ orderAddress: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  orderCancelCustoemr = e => {
    e.preventDefault();
    const { orderID } = this.state;
    const selectedOrderStatus = 4;
    console.log(selectedOrderStatus);
    authAxios
      .put(orderStatusUpdateURL(orderID), {
        order_status: selectedOrderStatus
      })
      .then(res => {
        toast.error("Order  cancelled");
        this.setState({ CustomerSuccess: true });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    const {
      order,
      orderAddress,
      orderItems,
      ShopSuccess,
      CustomerSuccess
    } = this.state;

    // const { userType } = this.props;
    // console.log(this.state.shopOrderStatus, userType);

    // console.log(order);

    if (CustomerSuccess) {
      return <Redirect to="/orders" />;
    }

    return (
      <div>
        <ToastContainer />
        <Breadcrumb title={"Order Details"} />
        <section className="section-b-space">
          <div className="container padding-cls">
            <Link to={"/orders"}>
              <Button variant="outline-info">Back to orders</Button>{" "}
            </Link>
            <br></br>
            <div className="row">
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
                            </div>
                            <h6>Date: {order.start_date}</h6>
                            <h6
                              className={
                                order.status === "Pending" ? "text-danger" : ""
                              }
                            >
                              Status: {order.orderStatus}
                            </h6>
                            <h6>Mod of Payment: {order.mode_of_payment}</h6>
                          </div>
                          <br></br>
                          {order.orderStatus !== "Cancelled by customer" ? (
                            <Button
                              type="submit"
                              variant="outline-danger"
                              size="sm"
                              onClick={this.orderCancelCustoemr}
                            >
                              Cancel order
                            </Button>
                          ) : (
                            <Alert variant={"danger"}>
                              Order has been cancelled
                            </Alert>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {order.coupon ? (
              <Row>
                <Col>
                  <Alert variant={"success"}>
                    {" "}
                    {order.coupon_code} coupon Applied !!{order.coupon_offer}
                  </Alert>
                </Col>
              </Row>
            ) : null}

            {order ? (
              <div className="row section-t-space">
                <div className="col-lg-6">
                  <div className="stripe-section">
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                      <div className="checkout-details">
                        <div className="order-box">
                          <div className="title-box">
                            {/* <div>
                              Product <span> Total</span>
                            </div> */}
                            <Row>
                              <Col xs={8}>
                                {" "}
                                <h4>Product</h4>{" "}
                              </Col>
                              <Col xs={4}>
                                {" "}
                                <h4>Total</h4>{" "}
                              </Col>
                            </Row>
                          </div>
                          <ul className="qty">
                            {orderItems.map((item, index) => {
                              return (
                                <Row>
                                  <Col xs={8}>
                                    {" "}
                                    {item.itemLocalName
                                      ? item.itemLocalName
                                      : item.itemName}{" "}
                                    [{item.vname}] × {item.quantity}{" "}
                                  </Col>
                                  <Col xs={4}>Rs: {item.final_price}</Col>
                                </Row>
                              );
                            })}
                          </ul>

                          <ul className="total">
                            <li>
                              Total{" "}
                              <span className="count">Rs: {order.total}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="row section-t-space">
              <div className="col-lg-6">
                <div className="stripe-section">
                  <h5>Address</h5>
                  <div>
                    <h5 className="checkout_class">{orderAddress.PlaceName}</h5>
                    <h6 className="checkout_class">{orderAddress.areaName}</h6>
                    <table>
                      <tbody>
                        <tr>
                          <td>{orderAddress.full_address}</td>
                        </tr>
                        <tr>
                          <td>{orderAddress.districtName}</td>
                          <td>{orderAddress.vilalgeName}</td>
                        </tr>

                        <tr>
                          <td>
                            {" "}
                            <a href={"tel:" + orderAddress.phone_number}>
                              {orderAddress.phone_number}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.user.user.UserType
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
)(OrderItem);
// export default OrderItem;
