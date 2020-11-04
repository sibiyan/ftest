(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{473:function(e,t,n){"use strict";n.r(t),n.d(t,"Form",function(){return w});var a=n(8),r=n(9),l=n(11),o=n(10),u=n(12),s=n(4),c=n(0),d=n.n(c),i=n(380),m=n(18),f=n(14),h=n(390),p=n(384),b=n(15),S=(n(59),n(382)),g=n(5),E=n(60),O=n(7);function v(){var e=Object(s.a)(["\n  padding-top: 20px;\n  padding-bottom: 5px;\n  margin-bottom: 15px;\n  margin: 30px auto 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return e},e}function x(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  height: auto;\n"]);return x=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 30px;\n  cursor: pointer;\n  background: #ff4c3b;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  border: 1px #fff solid;\n  max-width: 250px;\n"]);return y=function(){return e},e}function _(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return _=function(){return e},e}function C(){var e=Object(s.a)(["\n  margin: 20px 5px 5px 20px;\n  padding: 2px;\n\n  /* background-color: #cccccc; */\n"]);return C=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  justify-content: center;\n  color: #333;\n  border-radius: 5px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  margin: 10px;\n  width: 100%;\n  max-width: 800px;\n"]);return j=function(){return e},e}var k=g.b.div(j()),I=g.b.div(C()),w=g.b.form(_()),D=g.b.button(y()),N=g.b.div(x()),A=g.b.div(v()),T=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={order:[],loading:!1,ShopSuccess:!1,CustomerSuccess:!1,error:null,addressID:null,orderAddress:[],orderItems:[],orderID:null,shippingCharges:25,orderTotal:null,orderStatus:[],shopOrderStatus:[],staffOrderStatus:[],selectedOrderStatus:null},n.fetchOrderStatus=function(){f.a.get(O.S).then(function(e){n.setState({orderStatus:e.data})}).catch(function(e){n.setState({loading:!1})})},n.fetchOrder=function(){var e=n.props.match.params;n.setState({loading:!0}),f.a.get(Object(O.M)(e.orderID)).then(function(e){n.setState({order:e.data,loading:!1,addressID:e.data.address,orderID:e.data.id,orderItems:e.data.order_items,orderTotal:e.data.total}),n.handleCallback()}).catch(function(e){n.setState({error:e,loading:!1})})},n.handleCallback=function(){n.fetchAddress()},n.fetchAddress=function(){var e=n.state.addressID;n.setState({loading:!0}),f.a.get(Object(O.K)(e)).then(function(e){n.setState({orderAddress:e.data,loading:!1})}).catch(function(e){n.setState({error:e,loading:!1})})},n.orderCancelCustoemr=function(e){e.preventDefault();var t=n.state.orderID;console.log(4),f.a.put(Object(O.T)(t),{order_status:4}).then(function(e){b.toast.error("Order  cancelled"),n.setState({CustomerSuccess:!0})}).catch(function(e){n.setState({error:e})})},n.handleChangeOrderStatus=function(e){n.setState({selectedOrderStatus:e.id})},n.updateOrderStatus=function(e){e.preventDefault();var t=n.state.orderID,a=n.state.selectedOrderStatus;f.a.put(Object(O.T)(t),{order_status:a}).then(function(e){b.toast.success("Order status updated"),n.setState({success:!0})}).catch(function(e){n.setState({error:e})})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.fetchOrder(),this.fetchOrderStatus(),this.filter(),setTimeout(function(){e.filter()},3e3)}},{key:"filter",value:function(){this.props.user.user.is_shop_owner&&this.orderStatusShop(),this.props.user.user.is_staff_user&&this.orderStatusStaff()}},{key:"orderStatusShop",value:function(){this.state.orderStatus;this.setState({shopOrderStatus:this.state.orderStatus.filter(function(e){return"shop"===e.can_update_by})})}},{key:"orderStatusStaff",value:function(){this.state.orderStatus;this.setState({staffOrderStatus:this.state.orderStatus.filter(function(e){return"staff"===e.can_update_by})})}},{key:"render",value:function(){var e=this.state,t=e.order,n=e.orderAddress,a=e.orderItems,r=e.success,l=this.props.user;return r?d.a.createElement(p.a,{to:"/shop-order-table"}):d.a.createElement(E.b,null,d.a.createElement(i.a,{style:{marginRight:"auto",marginBottom:"20px"},to:"/manage-order-delivery"},d.a.createElement(D,null,"Back to orders")),d.a.createElement(k,null,d.a.createElement(k,null,d.a.createElement("h3",null,t.shop_name),d.a.createElement("h4",null,"Order No: ",t.id),d.a.createElement("h6",null,"Date: ",t.start_date),d.a.createElement("h6",null,"Status: ",t.orderStatus),d.a.createElement("h6",null,"Mod of Payment: ",t.mode_of_payment),"Cancelled by customer"!==t.orderStatus?d.a.createElement(D,{type:"submit",onClick:this.orderCancelCustoemr},"Cancel order"):d.a.createElement(S.a,{variant:"danger"},"Order has been cancelled")),d.a.createElement(b.ToastContainer,null),l.user?d.a.createElement(d.a.Fragment,null,l.user.is_staff_user?d.a.createElement(I,null,d.a.createElement(w,{onSubmit:this.updateOrderStatus},d.a.createElement("h3",null,"Update order status"),d.a.createElement(h.a,{className:"mb-3",onChange:this.handleChangeOrderStatus,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:this.state.staffOrderStatus,onInputChange:this.handleInputChange,placeholder:"Select order status",menuIsOpen:this.state.menuOpen}),d.a.createElement(D,{type:"submit"}," Submit"))):null):null,d.a.createElement(A,null,d.a.createElement("h2",null," Product details")),d.a.createElement(N,null,d.a.createElement("h2",null,"Product"),d.a.createElement("h4",null,"Price")),a?d.a.createElement(d.a.Fragment,null,a.map(function(e,t){return d.a.createElement(N,{key:t},d.a.createElement("h6",null,e.itemLocalName?e.itemLocalName:e.itemName," ","[",e.vname,"] \xd7 ",e.quantity),d.a.createElement("h6",null,"Rs: ",e.final_price))}),d.a.createElement(N,null,d.a.createElement("h4",null,"Total"),d.a.createElement("h4",null," Rs: ",t.total))):null,t.coupon?d.a.createElement(S.a,{variant:"success"},t.coupon_code," coupon Applied !!",t.coupon_offer):null,n?d.a.createElement(d.a.Fragment,null,d.a.createElement(A,null,d.a.createElement("h2",null," Order Address")),d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",null,n.PlaceName),d.a.createElement("h4",null,n.areaName),d.a.createElement("h5",null,n.full_address),d.a.createElement("h5",null,"Village: ",n.vilalgeName),d.a.createElement("h5",null,"District: ",n.districtName),d.a.createElement("h5",null,"Sate: ",n.stateName),d.a.createElement("h5",null,"Phone: ",n.phone_number),d.a.createElement("a",{href:"tel:"+n.phone_number},n.phone_number))):null))}}]),t}(c.Component);t.default=Object(m.connect)(function(e){return{user:e.user}})(T)}}]);
//# sourceMappingURL=36.8f29d1ee.chunk.js.map