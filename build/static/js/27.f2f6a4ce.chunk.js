(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{262:function(e,a,t){"use strict";var n=t(4),c=t(7),r=t(5),l=t.n(r),o=t(0),i=t.n(o),s=t(8),u=i.a.forwardRef(function(e,a){var t=e.bsPrefix,r=e.fluid,o=e.as,u=void 0===o?"div":o,d=e.className,h=Object(c.a)(e,["bsPrefix","fluid","as","className"]),m=Object(s.a)(t,"container"),f="string"===typeof r?"-"+r:"-fluid";return i.a.createElement(u,Object(n.a)({ref:a},h,{className:l()(d,r?""+m+f:m)}))});u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},445:function(e,a,t){"use strict";t.r(a);var n=t(66),c=t(123),r=t(9),l=t(10),o=t(13),i=t(11),s=t(12),u=t(0),d=t.n(u),h=t(18),m=t(253),f=(t(81),t(6)),p=t(15),b=t(17),g=(t(47),t(262)),C=t(251),v=t(248),E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={formData:{id:"",title:"",title_local:"",item_quantity:"",price:"",discount_price:"",description:"",is_available:!1,is_on_sale:!1,is_featured:!1},success:!1,error:null,loading:!1},t.fetchProductDetails=function(){var e=t.props.match.params;t.setState({loading:!0}),p.a.get(Object(f.Z)(e.productID)).then(function(e){t.setState({formData:e.data,loading:!1})}).catch(function(e){t.setState({error:e,success:!1,loading:!1})})},t.handleChange=function(e){var a=t.state.formData,r=Object(c.a)({},a,Object(n.a)({},e.target.name,e.target.value));t.setState({formData:r})},t.handleChangeCheckBox=function(e){var a=t.state.formData,r=Object(c.a)({},a,Object(n.a)({},e.target.name,e.target.checked));t.setState({formData:r})},t.handleUpdateProductDetails=function(e){e.preventDefault();var a=t.props.userID,n=t.state.formData;p.a.put(Object(f.q)(n.id),Object(c.a)({},n,{user:a})).then(function(e){t.setState({saving:!1,success:!0,formData:{default:!1}}),b.toast.success("Your edit is successful")}).catch(function(e){t.setState({error:e})})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchProductDetails()}},{key:"render",value:function(){var e,a=this.state,t=a.formData,c=a.success;a.error,a.loading;return c?d.a.createElement(m.a,{to:"/shop-product-list"}):d.a.createElement(g.a,null,this.state.loading&&d.a.createElement("div",{className:"loading-cls"}),d.a.createElement(C.a,{onSubmit:this.handleUpdateProductDetails},d.a.createElement(C.a.Group,{controlId:"title"},d.a.createElement(C.a.Label,null,"Product Name"),d.a.createElement(C.a.Control,{type:"text",name:"title",value:t.title||"",onChange:this.handleChange})),d.a.createElement(C.a.Group,{controlId:"title-local"},d.a.createElement(C.a.Label,null,"Name in Local language"),d.a.createElement(C.a.Control,{type:"text",name:"title_local",value:t.title_local||"",onChange:this.handleChange})),d.a.createElement(C.a.Group,{controlId:"quantity"},d.a.createElement(C.a.Label,null,"Quantity"),d.a.createElement(C.a.Control,{type:"text",name:"item_quantity",value:t.item_quantity||"",onChange:this.handleChange})),d.a.createElement(C.a.Group,{controlId:"formBasicPassword"},d.a.createElement(C.a.Label,null,"Price"),d.a.createElement(C.a.Control,{type:"text",name:"price",value:t.price||"",onChange:this.handleChange})),d.a.createElement(C.a.Group,{controlId:"formBasicPassword"},d.a.createElement(C.a.Label,null,"Discounted Price"),d.a.createElement(C.a.Control,{type:"text",name:"discount_price",value:t.discount_price||"",onChange:this.handleChange})),d.a.createElement(C.a.Group,{controlId:"formBasicCheckbox"},d.a.createElement(C.a.Check,{type:"checkbox",name:"is_available",label:"In stock",checked:t.is_available,onChange:this.handleChangeCheckBox})),d.a.createElement(C.a.Group,{controlId:"formBasicCheckbox"},d.a.createElement(C.a.Check,(e={type:"checkbox",label:"Feautured product",checked:t.is_featured,name:"is_featured"},Object(n.a)(e,"checked",t.is_featured),Object(n.a)(e,"onChange",this.handleChangeCheckBox),e))),d.a.createElement(C.a.Group,{controlId:"formBasicCheckbox"},d.a.createElement(C.a.Check,{type:"checkbox",label:"On sale",name:"is_on_sale",checked:t.is_on_sale,onChange:this.handleChangeCheckBox})),d.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))}}]),a}(u.Component);a.default=Object(h.connect)(function(e){return{token:e.auth.token,userID:e.user.user.userID}})(E)}}]);
//# sourceMappingURL=27.f2f6a4ce.chunk.js.map