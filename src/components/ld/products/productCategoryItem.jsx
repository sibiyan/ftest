import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: grow;
  flex-flow: row wrap;
  margin: 20px auto;
  max-width: 1000px;
`;

const Mybutton = styled.button`
  width: auto;
  margin: 5px;
  border: 1px solid #ff5722;
  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  background: ${props => (props.active ? "#ff5722" : "#fff")};
  &:hover {
    width: auto;
    background: #ff5722;
    color: #fff;
    padding: 7px 14px;
    cursor: pointer;
  }
`;

class ProductCategoryItem extends Component {
  handleChangeCategory = cat => {
    this.props.handleChangeCategory(cat);
    window.scrollTo(0, 1200);
  };

  render() {
    const { ShopProductCategory, ShopDetail } = this.props;
    console.log(ShopProductCategory);
    return (
      <Mybutton>
        <a href={null} onClick={() => this.handleChangeCategory(cat.id)}>
          {ShopDetail && ShopDetail.preferred_language === "Malayalam" ? (
            <React.Fragment> {cat.local_name}</React.Fragment>
          ) : (
            <React.Fragment> {cat.name}</React.Fragment>
          )}
        </a>
      </Mybutton>
    );
  }
}

export default ProductCategoryItem;
