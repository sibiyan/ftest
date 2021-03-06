import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";

import { ShopProductUpdateURL, productDetailURL } from "../../../constants";
import { authAxios } from "../../../authAxios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Col,
  Container
} from "react-bootstrap";

class EditProduct extends Component {
  state = {
    formData: {
      id: "",
      title: "",
      title_local: "",
      item_quantity: "",
      price: "",
      discount_price: "",
      //   category: "",
      description: "",
      is_available: false,
      is_on_sale: false,
      is_featured: false
    },
    success: false,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchProductDetails();
  }

  fetchProductDetails = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    authAxios
      .get(productDetailURL(params.productID))
      .then(res => {
        this.setState({ formData: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, success: false, loading: false });
      });
  };

  handleChange = e => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleChangeCheckBox = e => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      [e.target.name]: e.target.checked
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleUpdateProductDetails = e => {
    e.preventDefault();
    const { userID } = this.props;
    const { formData } = this.state;
    authAxios
      .put(ShopProductUpdateURL(formData.id), {
        ...formData,
        user: userID
      })
      .then(res => {
        this.setState({
          saving: false,
          success: true,
          formData: { default: false }
        });
        toast.success("Your edit is successful");
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    const { formData, success, error, loading } = this.state;
    // console.log(formData);

    if (success) {
      return <Redirect to="/shop-product-list" />;
    }
    return (
      <Container>
        {this.state.loading && <div className="loading-cls"></div>}
        <Form onSubmit={this.handleUpdateProductDetails}>
          <Form.Group controlId="title">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Product Name"
              name="title"
              value={formData.title || ""}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="title-local">
            <Form.Label>Name in Local language</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Product Local Name"
              name="title_local"
              value={formData.title_local || ""}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Quantity"
              name="item_quantity"
              value={formData.item_quantity || ""}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Price"
              name="price"
              value={formData.price || ""}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Discounted Price</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Discount"
              name="discount_price"
              value={formData.discount_price || ""}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* <Form.Group
            controlId="formBasicPassword"
            name="detail"
            value={formData.detail}
          >
            <Form.Label>Detail</Form.Label>
            <Form.Control type="text" placeholder="Detail" />
          </Form.Group> */}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="is_available"
              label="In stock"
              checked={formData.is_available}
              onChange={this.handleChangeCheckBox}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Feautured product"
              checked={formData.is_featured}
              name="is_featured"
              checked={formData.is_featured}
              onChange={this.handleChangeCheckBox}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="On sale"
              name="is_on_sale"
              checked={formData.is_on_sale}
              onChange={this.handleChangeCheckBox}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userID: state.user.user.userID
  };
};

export default connect(mapStateToProps)(EditProduct);
