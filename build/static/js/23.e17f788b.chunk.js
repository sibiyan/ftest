(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{609:function(e,t,a){"use strict";a.r(t);var n=a(57),c=a(49),o=a(9),r=a(10),l=a(12),i=a(11),s=a(13),d=a(0),u=a.n(d),h=(a(84),a(16)),m=(a(28),a(4)),p=a(6),E=a(76),v=(a(48),a(41)),b=a(592),k=a(425),f=a(605),C=a(363),g=a(357),_=a(17),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={form:{id:"",title:"",title_local:"",is_available:!0,is_featured:!0,is_on_sale:!0}},a.handleChange=function(e){var t=a.state.form,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.value));a.setState({form:o})},a.handlecheckBox=function(e){var t=a.state.form,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.checked));a.setState({form:o})},a.handleUpdateProduct=function(e){e.preventDefault();var t=a.state.form;p.a.put(Object(m.q)(t.id),Object(n.a)({},t)).then(function(e){a.setState({}),a.props.fetchProduct(),a.props.hide(),_.toast.success("Your edit is successful")}).catch(function(e){a.setState({error:e})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.productForm;this.setState({form:e})}},{key:"render",value:function(){var e,t=this.state.form;return u.a.createElement(f.a,{show:this.props.show,"aria-labelledby":"contained-modal-title-vcenter"},u.a.createElement(f.a.Header,{closeButton:!0,onClick:this.props.hide},u.a.createElement(f.a.Title,null,"Edit Item")),u.a.createElement(f.a.Body,null,u.a.createElement(C.a,null,u.a.createElement(g.a,null,u.a.createElement(g.a.Group,{controlId:"title"},u.a.createElement(g.a.Label,null,"Item Name"),u.a.createElement(g.a.Control,{type:"text",name:"title",value:t.title||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"title"},u.a.createElement(g.a.Label,null,"Local Name"),u.a.createElement(g.a.Control,{type:"text",name:"title_local",value:t.title_local||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},u.a.createElement(g.a.Check,{type:"checkbox",name:"is_available",label:"In stock",checked:t.is_available,onChange:this.handlecheckBox})),u.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},u.a.createElement(g.a.Check,(e={type:"checkbox",label:"Feautured product",checked:t.is_featured,name:"is_featured"},Object(c.a)(e,"checked",t.is_featured),Object(c.a)(e,"onChange",this.handlecheckBox),e))),u.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},u.a.createElement(g.a.Check,{type:"checkbox",label:"On sale",name:"is_on_sale",checked:t.is_on_sale,onChange:this.handlecheckBox}))))),u.a.createElement(f.a.Footer,null,u.a.createElement(E.a,{onClick:this.props.hide,variant:"secondary"},"Close"),u.a.createElement(E.a,{onClick:this.handleUpdateProduct,variant:"primary"},"Save")))}}]),t}(u.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",price:"",discount_price:"",is_available:!0,item_stock:!1,stock_count:""},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleCheckBox=function(e){a.setState(Object(c.a)({},e.target.name,e.target.checked))},a.handleCreateVariation=function(e){e.preventDefault();var t=a.props.item,n=a.state,c=n.name,o=n.price,r=n.discount_price,l=n.is_available,i=n.stock_count,s=n.item_stock;p.a.post(m.cb,{item:t,name:c,price:o,stock_count:i,item_stock:s,discount_price:r,is_available:l}).then(function(e){a.setState({loading:!1}),_.toast.success("Variation added"),a.props.HideAddVariationModal(),a.props.fetchProductDetails()}).catch(function(e){_.toast.error("error")})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.price,n=e.discount_price,c=e.stock_count,o=e.is_available,r=e.item_stock;return u.a.createElement(f.a,{show:this.props.show,"aria-labelledby":"contained-modal-title-vcenter"},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Add a Variation")),u.a.createElement(f.a.Body,null,u.a.createElement(C.a,null,u.a.createElement(g.a,null,u.a.createElement(g.a.Group,{controlId:"name"},u.a.createElement(g.a.Label,null,"Name (KG|Color|Size)"),u.a.createElement(g.a.Control,{type:"text",name:"name",value:t||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"mrp"},u.a.createElement(g.a.Label,null,"MRP"),u.a.createElement(g.a.Control,{type:"text",name:"price",value:a||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"price"},u.a.createElement(g.a.Label,null,"Price"),u.a.createElement(g.a.Control,{type:"text",name:"discount_price",value:n||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"price"},u.a.createElement(g.a.Label,null,"Stock count"),u.a.createElement(g.a.Control,{type:"text",name:"stock_count",value:c||"",onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"is_available"},u.a.createElement(g.a.Check,{type:"checkbox",name:"is_available",label:"In stock",checked:o,onChange:this.handleCheckBox})),u.a.createElement(g.a.Group,{controlId:"FromProductstock"},u.a.createElement(g.a.Check,{type:"checkbox",name:"item_stock",label:"From Product stock",checked:r,onChange:this.handleCheckBox}))))),u.a.createElement(f.a.Footer,null,u.a.createElement(E.a,{onClick:this.props.HideAddVariationModal,variant:"secondary"},"Close"),u.a.createElement(E.a,{onClick:this.handleCreateVariation,variant:"primary"},"Save")))}}]),t}(u.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={variationForm:{item:"",id:"",name:"",price:"",discount_price:"",is_available:!1,item_stock:!1,stock_count:""}},a.handleChange=function(e){var t=a.state.variationForm,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.value));a.setState({variationForm:o})},a.handlecheckBox=function(e){var t=a.state.variationForm,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.checked));a.setState({variationForm:o})},a.handleUpdateVariation=function(e){e.preventDefault();var t=a.props.item,c=a.state.variationForm;p.a.put(Object(m.s)(c.id),Object(n.a)({},c,{item:t})).then(function(e){a.setState({loading:!1}),a.props.fetchProductDetails(),a.props.hideEdit()}).catch(function(e){a.setState({error:e})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.variation;this.setState({variationForm:e})}},{key:"render",value:function(){var e=this.state.variationForm;return u.a.createElement(f.a,{show:this.props.show,"aria-labelledby":"contained-modal-title-vcenter"},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Edit Product Variation")),u.a.createElement(f.a.Body,null,u.a.createElement(C.a,null,u.a.createElement(g.a,null,u.a.createElement(g.a.Group,{controlId:"name"},u.a.createElement(g.a.Label,null,"Name (KG|Color|Size)"),u.a.createElement(g.a.Control,{type:"text",name:"name",value:e.name,onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"mrp"},u.a.createElement(g.a.Label,null,"MRP"),u.a.createElement(g.a.Control,{type:"text",name:"price",value:e.price,onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"discountprice"},u.a.createElement(g.a.Label,null,"Price"),u.a.createElement(g.a.Control,{type:"text",name:"discount_price",value:e.discount_price,onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"stock_count"},u.a.createElement(g.a.Label,null,"Stock count"),u.a.createElement(g.a.Control,{type:"text",label:"Stock Count",name:"stock_count",value:e.stock_count,onChange:this.handleChange})),u.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},u.a.createElement(g.a.Check,{type:"checkbox",label:"In Stock",name:"is_available",checked:e.is_available,onChange:this.handlecheckBox})),u.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},u.a.createElement(g.a.Check,{type:"checkbox",label:"Product stock",name:"item_stock",checked:e.item_stock,onChange:this.handlecheckBox}))))),u.a.createElement(f.a.Footer,null,u.a.createElement(E.a,{onClick:this.props.hideEdit,variant:"secondary"},"Close"),u.a.createElement(E.a,{onClick:this.handleUpdateVariation,variant:"primary"},"Save")))}}]),t}(u.a.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={editMode:!1},a.showEdit=function(){a.setState({editMode:!0})},a.hideEdit=function(){a.setState({editMode:!1})},a.handleDeleteVariation=function(e){e.preventDefault();var t=a.props.variation;p.a.delete(Object(m.r)(t.id)).then(function(e){a.setState({loading:!1}),_.toast.error("Variation deleted"),a.props.fetchProductDetails()}).catch(function(e){_.toast.error("error")})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.variation,a=e.item;return u.a.createElement("div",null,this.state.editMode?u.a.createElement(j,{show:this.state.editMode,variation:t,item:a,hideEdit:this.hideEdit,fetchProductDetails:this.props.fetchProductDetails}):null,u.a.createElement("br",null),u.a.createElement(v.a,{style:{width:"18rem"}},u.a.createElement(v.a.Header,null,"Name: ",t.name),u.a.createElement(b.a,{variant:"flush"},u.a.createElement(k.a,null,"MRP: ",t.price),u.a.createElement(k.a,null,"Price: ",t.discount_price),u.a.createElement(k.a,null,"Stcok Count: ",t.stock_count),u.a.createElement(k.a,null,"In Stock: ",t.is_available?"Yes":"No"),u.a.createElement(k.a,null,"Product Stock: ",t.item_stock?"Yes":"No")),u.a.createElement(k.a,null,u.a.createElement(E.a,{onClick:this.showEdit,variant:"outline-primary",size:"sm"},"edit")," ",u.a.createElement(E.a,{onClick:this.handleDeleteVariation,variant:"outline-danger",size:"sm"},"Delete")," ")))}}]),t}(u.a.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={productForm:{id:"",title:"",title_local:"",is_in_stock:!1,is_featured:!1,is_on_sale:!1},editProductMode:!1,addVariationModal:!1,product:"",item:"",loading:!1,vName:"",vMRP:"",vPrice:"",vis_available:!0},a.showAddVariationModal=function(){a.setState({addVariationModal:!0})},a.HideAddVariationModal=function(){a.setState({addVariationModal:!1})},a.editModalShow=function(){a.setState({editProductMode:!0})},a.editModalHide=function(){a.setState({editProductMode:!1})},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleChangeCheckBox=function(e){a.setState(Object(c.a)({},e.target.name,e.target.checked))},a.handleChangeProductForm=function(e){var t=a.state.productForm,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.value));a.setState({productForm:o})},a.handlecheckBox=function(e){var t=a.state.productForm,o=Object(n.a)({},t,Object(c.a)({},e.target.name,e.target.checked));a.setState({productForm:o})},a.fetchProductDetails=function(){var e=a.props.match.params;a.setState({loading:!0}),p.a.get(Object(m.Y)(e.productID)).then(function(e){a.setState({product:e.data,productForm:e.data,loading:!1})}).catch(function(e){a.setState({error:e,success:!1,loading:!1})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchProductDetails()}},{key:"render",value:function(){var e=this,t=this.state,a=t.product,n=t.addVariationModal,c=t.editProductMode,o=t.productForm;return u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},c?u.a.createElement(y,{show:c,productForm:o,hide:this.editModalHide,fetchProduct:this.fetchProductDetails}):null,u.a.createElement(v.a,{style:{width:"18rem"}},u.a.createElement(v.a.Img,{variant:"top",src:"".concat(m.H,"/").concat(a.image)}),u.a.createElement(v.a.Body,null,u.a.createElement(v.a.Title,null,a.title),u.a.createElement(v.a.Text,null,a.title_local),u.a.createElement(v.a.Text,null,"Product ID:",a.id),u.a.createElement(E.a,{onClick:this.editModalShow,variant:"outline-primary",size:"sm"},"edit")," "),u.a.createElement(b.a,{className:"list-group-flush"},u.a.createElement(k.a,null,"In Stock: ",a.is_available?"Yes":"No"),u.a.createElement(k.a,null,"Featured: ",a.is_featured?"Yes":"No"),u.a.createElement(k.a,null,"Is on Sale: ",a.is_on_sale?"Yes":"No")),u.a.createElement(v.a.Body,null,u.a.createElement(E.a,{onClick:this.showAddVariationModal,variant:"outline-success"},"Add a variation")," ")),n?u.a.createElement(O,{item:a.id,show:n,HideAddVariationModal:this.HideAddVariationModal,fetchProductDetails:this.fetchProductDetails}):null,a.variations?u.a.createElement(u.a.Fragment,null,a.variations.map(function(t,n){return u.a.createElement(S,{item:a.id,key:n,variation:t,fetchProductDetails:e.fetchProductDetails})})):null))}}]),t}(d.Component);t.default=Object(h.connect)(function(e){return{user:e.user}})(x)}}]);
//# sourceMappingURL=23.e17f788b.chunk.js.map