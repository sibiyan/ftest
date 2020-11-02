(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{285:function(e,t,a){"use strict";var n=a(20),r=a(29),o=a(18),s=a.n(o),c=a(0),l=a.n(c),u=a(63),i=l.a.forwardRef(function(e,t){var a=e.bsPrefix,o=e.fluid,c=e.as,i=void 0===c?"div":c,m=e.className,h=Object(r.a)(e,["bsPrefix","fluid","as","className"]),d=Object(u.a)(a,"container"),f="string"===typeof o?"-"+o:"-fluid";return l.a.createElement(i,Object(n.a)({ref:t},h,{className:s()(m,o?""+d+f:d)}))});i.displayName="Container",i.defaultProps={fluid:!1},t.a=i},311:function(e,t,a){"use strict";var n=a(107);t.a=Object(n.a)("card-deck")},488:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(122),o=a(6),s=a(7),c=a(10),l=a(8),u=a(9),i=a(0),m=a.n(i),h=a(13),d=a(288),f=a(286),p=a(289),b=a(280),O=a(48),g=a(17),E=a(4),C=(a(40),a(267)),y=a(285),v=a(311),S=a(462),j=a(278),_=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.orders;return m.a.createElement(y.a,{fluid:!0},m.a.createElement(v.a,null,m.a.createElement(S.a,null,e.map(function(e,t){return m.a.createElement(j.a,{sm:4},m.a.createElement(d.a,{key:t,bg:"secondary",text:"light",style:{width:"21rem"},className:"mb-2"},m.a.createElement(d.a.Header,null,e.customer_name," ",m.a.createElement("br",null)),m.a.createElement(d.a.Body,null,m.a.createElement(d.a.Title,null,"Order No: ",e.id),e.place_name," ",m.a.createElement("br",null),e.area_name," ",m.a.createElement("br",null),e.mobile_number," ",m.a.createElement("br",null),e.start_date," ",m.a.createElement("br",null),e.orderStatus," ",m.a.createElement("br",null),m.a.createElement(C.a,{to:"order/".concat(e.id)},m.a.createElement(p.a,{variant:"secondary"},"More")))))}))))}}]),t}(i.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).fetchOrders=function(e){var t=a.state,n=t.area,r=t.order_status,o=t.phone_number,s=t.name;console.log(r);var c=a.props.userType;h.a.get(E.N,{params:{userType:c,area:n,order_status:r,phone_number:o,name:s}}).then(function(e){a.setState({orders:e.data})}).catch(function(e){a.setState({loading:!1,error:e})})},a.fetchOrderStatus=function(){h.a.get(E.S).then(function(e){a.setState({orderStatus:e.data})}).catch(function(e){})},a.fetchAreas=function(){h.a.get(E.A).then(function(e){a.setState({areas:e.data})}).catch(function(e){})},a.handleChangeArea=function(e){a.setState({area:e.name})},a.handleChangeStatus=function(e){a.setState({order_status:e.name})},a.state={orders:[],areas:[],area:"",orderStatus:[],order_status:"",form:{phone_number:"",name:""}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchAreas(),this.fetchOrders(),this.fetchOrderStatus(),this.props.fetchUserType()}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState({form:Object(r.a)({},this.state.form,Object(n.a)({},t,a))})}},{key:"render",value:function(){var e=this.state,t=(e.order_status,e.orderStatus),a=e.areas,n=(e.area,e.name,e.orders);e.phone_number;return console.log(n),m.a.createElement("div",null,m.a.createElement(d.a,{ClassName:"h-100 shadow-sm bg-white rounded"},m.a.createElement(d.a.Body,{ClassName:"d-flex felx-column"},m.a.createElement("div",{ClassName:"a-flex mb-2 justify-content-between"},m.a.createElement(b.a,{className:"mb-3",onChange:this.handleChangeStatus,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:t,isSearchable:!0,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select order status",autoFocus:!0,menuIsOpen:this.state.menuOpen}),m.a.createElement(b.a,{className:"mb-3",onChange:this.handleChangeArea,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:a,isSearchable:!0,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select area",autoFocus:!0,menuIsOpen:this.state.menuOpen}),m.a.createElement(f.a,null,m.a.createElement(f.a.Group,{controlId:"formGridcustomer_name"},m.a.createElement(f.a.Control,{type:"text",name:"name",placeholder:"Customer Name",ClassName:"mb-3",defaultValue:this.state.form.name,onChange:this.handleChange.bind(this)})),m.a.createElement(f.a.Group,{controlId:"formGridphone_number"},m.a.createElement(f.a.Control,{type:"text",name:"phone_number",placeholder:"Phone Number",ClassName:"mb-3",defaultValue:this.state.form.phone_number,onChange:this.handleChange.bind(this)})),m.a.createElement(p.a,{variant:"primary",onClick:this.fetchOrders},"Submit"))))),n?m.a.createElement("div",null,m.a.createElement(_,{orders:n})):m.a.createElement("p",null,"No order to show"))}}]),t}(i.Component);t.default=Object(g.connect)(function(e){return{userType:e.user.user.UserType,token:e.auth.token}},function(e){return{fetchUserType:function(){return e(Object(O.b)())}}})(N)}}]);
//# sourceMappingURL=23.e7b09758.chunk.js.map