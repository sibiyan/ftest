(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{587:function(e,a,t){"use strict";t.r(a);var n=t(154),l=t.n(n),c=t(158),s=t(4),r=t(5),o=t(8),i=t(6),d=t(7),m=t(0),u=t.n(m),h=(t(44),t(9)),p=t(137),E=t(70),f=(t(550),t(30),t(13)),v=t(167),b=t(551),N=t(10),g=t(19),y=t(27),O=t(173),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).handleCheckBox=function(e){t.props.handleModeOfPayment(e.target.value)},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props.options;return u.a.createElement(O.c,{initialValues:{modOfPayment:""}},function(t){return u.a.createElement(O.b,null,u.a.createElement("div",{className:"form-control"},u.a.createElement(O.a,{name:"modOfPayment"},function(t){var n=t.field;return a.map(function(a){return u.a.createElement(u.a.Fragment,{key:a.id},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"radio"},u.a.createElement("input",Object.assign({type:"radio",id:a.id},n,{value:a.id,onChange:function(a){e.handleCheckBox(a)}})),u.a.createElement("label",{htmlFor:a.name},a.name))))))})})))})}}]),a}(m.Component),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,shipping:25,addressList:[],cart:null,selectedAddress:null,shop_id:null,ShopModeOfPayment:[],selectedModeofPayment:null,coupon:"",offer:""},t.handleFetchOrder=function(){t.setState({loading:!0}),g.a.get(N.Q).then(function(e){t.setState({cart:e.data,loading:!1}),t.setState({shop_id:e.data.shop_id},function(){t.fetchModeOfPayment()})}).catch(function(e){t.setState({error:e})})},t.fetchModeOfPayment=function(){var e=t.state.shop_id;void 0!==e&&(t.setState({loading:!0}),g.a.get(N.l,{params:{shopID:e}}).then(function(e){t.setState({ShopModeOfPayment:e.data,loading:!1})}).catch(function(e){t.setState({error:e,loading:!1})}))},t.handleFetchAddresses=Object(c.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({loading:!0}),g.a.get(N.u).then(function(e){t.setState({addressList:e.data,loading:!1})}).catch(function(e){t.setState({error:e,loading:!1})});case 2:case"end":return e.stop()}},e,this)})),t.handleCouponChange=function(e){t.setState({coupon:e.target.value})},t.handleCouponSubmit=function(){var e=Object(c.a)(l.a.mark(function e(a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),""!==(n=t.state.coupon)?(t.setState({loading:!0}),g.a.post(N.q,{code:n}).then(function(e){t.setState({offer:e.data,loading:!1}),f.toast.success("Coupon applied succesfully")}).catch(function(e){t.setState({error:e,loading:!1})})):f.toast.error("Coupon not entered");case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.handleAddress=function(e){t.setState({selectedAddress:e.target.value}),console.log(e.target.value)},t.handleModeOfPayment=function(e){t.setState({selectedModeofPayment:e})},t.submit=function(e){e.preventDefault(),t.setState({loading:!0});var a=t.state,n=a.selectedAddress,l=a.selectedModeofPayment;null!==n&&null!==l?g.a.post(N.z,{selectedAddress:n,selectedModeofPayment:l}).then(function(e){t.setState({loading:!1,success:!0}),f.toast.success("Order placed succesfully"),t.redirectToOrders(),t.props.refreshCart()}).catch(function(e){t.setState({loading:!1,error:e},function(){f.toast.success("There was an error")})}):f.toast.error("Please select an address and mode of payment")},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.handleFetchAddresses(),this.handleFetchOrder()}},{key:"redirectToOrders",value:function(){this.props.clearKart(),setTimeout(this.props.history.push("/orders"),1e4)}},{key:"render",value:function(){var e=this,a=this.props.isAuthenticated,t=this.state,n=t.addressList,l=(t.selectedAddress,t.cart),c=t.ShopModeOfPayment,s=(t.shop_id,t.offer);return a?u.a.createElement("div",null,u.a.createElement(f.ToastContainer,null),this.state.loading&&u.a.createElement("div",{className:"loading-cls"}),l?u.a.createElement("div",{className:"container padding-cls"},u.a.createElement("div",{className:"checkout-page"},u.a.createElement("div",{className:"checkout-form"},u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-9"},u.a.createElement("div",{className:"dashboard-right"},u.a.createElement("div",{className:"dashboard"},u.a.createElement("div",{className:"box-account box-info"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"box"},u.a.createElement("h3",null,l.shop_name),u.a.createElement("h6",null,l.place_name)),u.a.createElement("br",null),u.a.createElement("h4",null,l.shipping_message)))))))))),u.a.createElement("div",{className:"col-lg-6 col-sm-12 col-xs-12"},u.a.createElement("div",{className:"checkout-details"},u.a.createElement("div",{className:"order-box"},u.a.createElement("div",{className:"title-box"},u.a.createElement("div",null,"Product ",u.a.createElement("span",null," Total"))),u.a.createElement("ul",{className:"qty"},l.order_items.map(function(e,a){return u.a.createElement("li",{key:a},e.item.title," \xd7 ",e.quantity," ",u.a.createElement("span",null,e.final_price))})),u.a.createElement("ul",{className:"sub-total"},u.a.createElement("li",null,"Subtotal"," ",u.a.createElement("span",{className:"count"},l.total))),u.a.createElement("ul",{className:"total"},u.a.createElement("li",null,"Total"," ",u.a.createElement("span",{className:"count"},l.total)))),u.a.createElement(E.a,{style:{color:"#FFF"},to:"/order-summary"},u.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Edit Order"))))),c?u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"account-sidebar"},u.a.createElement("h6",{style:{color:"#FFF"}}," Select Mode of Payment")),u.a.createElement(S,{handleModeOfPayment:this.handleModeOfPayment,options:c}))):null,n.length>0?u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"account-sidebar"},u.a.createElement("h6",{style:{color:"#FFF"}}," Select Address")),n.map(function(a){return u.a.createElement("div",{key:a.id,className:"row"},u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("div",{className:"dashboard-left"},u.a.createElement("div",{className:"collection-mobile-back"},u.a.createElement("span",{className:"filter-back"},u.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})," ","back")))),u.a.createElement("div",{className:"col-lg-9"},u.a.createElement("div",{className:"dashboard-right"},u.a.createElement("div",{className:"dashboard"},u.a.createElement("div",{className:"box-account box-info"},u.a.createElement("div",{className:"box-head"},u.a.createElement("h2",null,a.PlaceName)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"box-title"},u.a.createElement("h3",null,a.areaName)),u.a.createElement("div",{className:"box-content"},u.a.createElement("h6",null,a.full_address),u.a.createElement("h6",null,"Village: ",a.vilalgeName),u.a.createElement("h6",null,"District: ",a.districtName),u.a.createElement("h6",null,"Sate: ",a.stateName),u.a.createElement("h6",null,"Phone: ",a.phone_number),u.a.createElement("br",null)),u.a.createElement("div",{className:"radio"},u.a.createElement("label",null,u.a.createElement("input",{value:a.id,type:"radio",name:"optradio",onChange:e.handleAddress})," ","Select"))))))))))}))):u.a.createElement("div",null,u.a.createElement(E.a,{style:{color:"#FFF"},to:"/create-address"},"Add Address")),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"theme-card"},u.a.createElement("form",{className:"theme-form"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"coupon"},"Enter Coupon code"),u.a.createElement("input",{onChange:this.handleCouponChange.bind(this),type:"text",className:"form-control",id:"coupon",value:this.state.coupon,name:"coupon",required:""})),u.a.createElement("div",null,s?u.a.createElement(b.a,{variant:"success"},"Offer Applied !!",s.message):null),u.a.createElement(v.a,{type:"submit",onClick:this.handleCouponSubmit.bind(this),variant:"flat",size:"xxl",style:{color:"red"}},"Apply coupon"))))),u.a.createElement("br",null),u.a.createElement("button",{type:"button",className:"btn-solid btn",onClick:this.submit},"Place Order"))):u.a.createElement("p",null,"You dont have an active order")):u.a.createElement(p.a,{to:"/login"})}}]),a}(m.Component);a.default=Object(h.connect)(function(e){return{isAuthenticated:e.auth.token,cart:e.cart.shoppingCart}},function(e){return{refreshCart:function(){return e(Object(y.b)())},clearKart:function(){return e(y.a)}}})(k)}}]);
//# sourceMappingURL=38.1b482a2c.chunk.js.map