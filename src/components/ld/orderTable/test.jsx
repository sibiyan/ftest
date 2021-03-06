import React, { useState } from "react";
import { connect } from "react-redux";
import { authSignup } from "../../../actions/auth";
import { Redirect } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import { authAxios } from "../../../authAxios";
import { orderFilterURL } from "../../../constants";
import { useFormik, Field } from "formik";
// import Result from "./orderList";

const Manage = props => {
  const [orders, setOrders] = useState([]);
  const formik = useFormik({
    initialValues: {
      place: "",
      areas: "",
      places: "",
      villages: "",
      clusters: "",
      districts: "",
      states: ""
    },
    onSubmit: values => {
      const place = values["place"] === undefined ? null : values["place"];
      const village =
        values["village"] === undefined ? null : values["village"];
      const cluster =
        values["cluster"] === undefined ? null : values["cluster"];
      const district =
        values["district"] === undefined ? null : values["district"];
      const state = values["state"] === undefined ? null : values["state"];

      // this.setState({ loading: true });
      authAxios
        .get(orderFilterURL, {
          params: {
            place,
            village,
            cluster,
            district,
            state
          }
        })
        .then(res => {
          // this.setState({ orders: res.data, loading: false, success: true });
          setOrders(res.data);
        })
        .catch(err => {
          // this.setState({ loading: false, error: err });
        });
    }
  });

  // console.log(orders);

  return (
    <div>
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Filter Orders</h4>
              <div className="theme-card">
                <div className="checkout-page">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="checkout-form">
                      <div className="row check-out">
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Village</div>
                          <select
                            id="village"
                            name="village"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.village}
                          >
                            <option value="" disabled selected>
                              Select your option
                            </option>
                            {props.villages.map(a => (
                              <option key={a.id}>{a}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Place</div>
                          <select
                            id="place"
                            name="place"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.place}
                          >
                            <option value="" disabled selected>
                              Select your option
                            </option>
                            {props.places.map(a => (
                              <option key={a.id}>{a}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <br></br>
                      <input
                        type="submit"
                        className="btn btn-solid"
                        id="submit"
                        placeholder="search"
                        required=""
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Result orders={orders} /> */}
    </div>
  );
};

export default Manage;
