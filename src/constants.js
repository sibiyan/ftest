// export const localhost = "http://127.0.0.1:8000";

export const localhost = "https://www.localdukans.com";

//rest auth
export const signUp = `${localhost}/rest-auth/registration/`;
export const login = `${localhost}/rest-auth/login/`;
export const resetRequest = `${localhost}/rest-auth/password/reset/`;
export const resetConfirm = `${localhost}/rest-auth/password/reset/confirm/`;

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

export const appInfoURL = `${endpoint}/app-info/`;
export const candidateAddURL = `${endpoint}/candidate-add/`;
export const registerComplaintURL = `${endpoint}/complaint-add/`;

//location urls
export const stateListURL = `${endpoint}/states/`;
export const placeListURL = `${endpoint}/places-list/`;

export const districtFilterURL = `${endpoint}/districts-filter/`;
export const clusterFilterURL = `${endpoint}/cluster-filter/`;
export const villagesFilterURL = `${endpoint}/villages-filter/`;
export const placeFilterURL = `${endpoint}/places-filter/`;
export const areaFilterURL = `${endpoint}/areas-filter/`;

export const placeDetailURL = id => `${endpoint}/places/${id}/detail/`;
export const ShopDetailURL = id => `${endpoint}/shops/${id}/detail/`;

//shop dashboard
export const ShopDashboardDetialURL = `${endpoint}/shop-dash-detail/`;
export const ShopDashProductsURL = `${endpoint}/shop-dash-products/`;
export const ShopDashOrdersURL = `${endpoint}/shop-dash-orders/`;
export const ShopDashOpenStatusURL = id =>
  `${endpoint}/shop-dash-open-status/${id}/update/`;

export const ShopModeOfPaymentURL = `${endpoint}/mode-of-payment/`;

// export const areaFilterURL = name => `${endpoint}/places/${name}/areas`;
export const placeShopListURL = id => `${endpoint}/places/${id}/shops/`;
export const productListURL = `${endpoint}/products/`;
// export const shopProductListURL = `${endpoint}/producstsofashop/`;

//product - shop
export const shopProductListURL = id => `${endpoint}/producstsofashop/${id}/`;
export const ShopProductInfinitURL = `${endpoint}/infinitproductforshops/`;
export const addProductURL = `${endpoint}/add-product/`;
export const shopProductDetailURL = `${endpoint}/shop-product-detail/`;

//variation
export const shopAddProductVariationURL = `${endpoint}/shop-product-add-variation/`;
export const shopDeleteProductVariationURL = `${endpoint}/shop-product-delete-variation/`;

export const productImagesURL = id => `${endpoint}/product-images/${id}/`;
export const ShopProductCategoryURL = id =>
  `${endpoint}/product-shop-category/${id}/`;
export const ShopProductCategoryForCustomerURL = id =>
  `${endpoint}/product-shop-category-for-customer/${id}/`;

export const productDetailURL = id => `${endpoint}/products/${id}/`;
export const ShopFProductListURL = id => `${endpoint}/shops/${id}/fproducts`;
export const ShopProductUpdateURL = id =>
  `${endpoint}/producstsofashop/${id}/update/`;
export const VariationUpdateURL = id => `${endpoint}/variation/${id}/update/`;
export const VariationDeleteURL = id => `${endpoint}/variation/${id}/delete/`;
export const shopListURL = `${endpoint}/shops/`;
export const shopAddURL = `${endpoint}/shop-add/`;
export const shopFilterURL = `${endpoint}/shops-filter/`;
// export const ShopProductListURL = id => `${endpoint}/shops/${id}/products`;

export const ShopProductListInfinitURL = `${endpoint}/shop-product-list/`;
export const ShopProductListForShopsInfinitURL = `${endpoint}/shop-product-list-for-shops/`;

export const shopSearchURL = `${endpoint}/shop-search/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary/`;
export const orderDetailURL = id => `${endpoint}/orders/${id}/detail/`;
export const orderFilterURL = `${endpoint}/order-filter/`;

export const checkoutURL = `${endpoint}/checkout/`;
export const addCouponURL = `${endpoint}/add-coupon/`;

export const userIDURL = `${endpoint}/user-id/`;
export const userTypeURL = `${endpoint}/user-type/`;
export const serviceAreaURL = `${endpoint}/service-area/`;

export const addressListURL = `${endpoint}/addresses/`;
export const addressCreateURL = `${endpoint}/addresses/create/`;
export const addressUpdateURL = id => `${endpoint}/addresses/${id}/update/`;
export const orderAddressURL = id => `${endpoint}/addresses/${id}/`;
export const addressDeleteURL = id => `${endpoint}/addresses/${id}/delete/`;

//order
export const orderItemDeleteURL = id => `${endpoint}/order-items/${id}/delete/`;
export const orderItemURL = id => `${endpoint}/order-items/${id}/`;
export const orderItemUpdateQuantityURL = `${endpoint}/order-item/update-quantity/`;
export const orderStatusUpdateURL = id =>
  `${endpoint}/orders/${id}/status-update/`;
// export const paymentListURL = `${endpoint}/payments/`;
export const orderListURL = `${endpoint}/orders/`;
export const orderStatusListURL = `${endpoint}/order-status/`;
export const orderSearchURL = `${endpoint}/order-search/`;
// export const orderItemURL = id => `${endpoint}/orders/${id}/`;
export const orderDeleteURL = id => `${endpoint}/orders/${id}/delete/`;

//new items
export const newPlacesURL = `${endpoint}/new-places/`;
export const feautredShopsURL = `${endpoint}/featured-shops/`;
export const feautredShopsInPlaceURL = id => `${endpoint}/places/${id}/fshops/`;

//wish list
export const AddToFavoritePlacesURL = `${endpoint}/add-to-favorite-places/`;
// export const RemoveFromFavoriteShopsURL = `${endpoint}/removefromfavoriteshops/`;
export const AddToFavoriteShopsURL = `${endpoint}/add-to-favorite-shops/`;
export const FavoriteShopsURL = `${endpoint}/favorite-shops/`;
export const FavoritePlacesURL = `${endpoint}/favorite-places/`;

export const RemoveFromFavoriteShopsURL = id =>
  `${endpoint}/remove-from-favorite-shops/${id}/`;
export const RemoveFromFavoritePlacesURL = id =>
  `${endpoint}/remove-from-favorite-places/${id}/`;
