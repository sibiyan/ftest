(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{463:function(e,t,a){"use strict";a.r(t);var n=a(78),o=a(8),c=a(9),l=a(11),r=a(10),i=a(12),s=a(0),u=a.n(s),h=a(18),d=a(384),g=a(50),m=a.n(g),p=a(456),_=a(60),C=a(45),b=a(7),f=a(14),k=a(390),y=(a(15),a(395)),E=a(388),v=a(398),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",title_local:"",stock_count:null,product_image:"",productategory:"",is_available:!0,is_on_sale:!1,is_featured:!1,item_stock:!1,id:"",success:!1,error:null,loading:!1,categoryID:1,productImages:[],selectedImage:"",shopID:1,ShopProductCategory:[]},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.handleChangeCategory=function(e){a.setState({productategory:e.id},function(){a.fetchProductImage()})},a.handleChangeImage=function(e){a.setState({product_image:e.id}),a.setState({selectedImage:e.image1})},a.handleChangeCheckBox=function(e){a.setState(Object(n.a)({},e.target.name,e.target.checked))},a.fetchProductCategory=function(){var e=a.props.user.user.id;a.setState({loading:!0}),m.a.get(Object(b.n)(e)).then(function(e){a.setState({ShopProductCategory:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.fetchProductImage=function(){var e=a.state.productategory;a.setState({loading:!0}),m.a.get(Object(b.ab)(e)).then(function(e){a.setState({productImages:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.handleCreateItem=function(e){e.preventDefault();var t=a.props.user.user.id,n=a.state,o=n.title,c=n.title_local,l=n.stock_count,r=n.productategory,i=n.product_image,s=n.is_available,u=n.is_on_sale,h=n.is_featured,d=n.item_stock;f.a.post(b.u,{userID:t,title:o,title_local:c,stock_count:l,productategory:r,product_image:i,is_available:s,is_on_sale:u,is_featured:h,item_stock:d}).then(function(e){a.setState({saving:!1,success:!0})}).catch(function(e){a.setState({error:e})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchProductCategory()}},{key:"render",value:function(){var e=this.state,t=e.success,a=(e.error,e.loading,e.id,e.title),n=e.title_local,o=e.stock_count,c=e.is_available,l=e.is_on_sale,r=(e.is_featured,e.item_stock);e.productategory;return t?u.a.createElement(d.a,{to:"/shop-product-list"}):this.props.token?u.a.createElement(_.c,null,u.a.createElement(_.b,null,this.state.loading&&u.a.createElement(C.c,null),u.a.createElement(y.a,{onSubmit:this.handleCreateItem},u.a.createElement(y.a.Group,{controlId:"title"},u.a.createElement(y.a.Label,null,"Product Name"),u.a.createElement(y.a.Control,{type:"text",name:"title",value:a||"",onChange:this.handleChange})),u.a.createElement(y.a.Group,{controlId:"title"},u.a.createElement(y.a.Label,null,"Product Local Name"),u.a.createElement(y.a.Control,{type:"text",name:"title_local",value:n||"",onChange:this.handleChange})),u.a.createElement(y.a.Group,{controlId:"stock_count"},u.a.createElement(y.a.Label,null,"Stock Count"),u.a.createElement(y.a.Control,{type:"text",name:"stock_count",value:o||"",onChange:this.handleChange})),u.a.createElement("div",null,u.a.createElement(k.a,{className:"mb-3",onChange:this.handleChangeCategory,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:this.state.ShopProductCategory,isSearchable:!0,placeholder:"Select product category"})),u.a.createElement("div",null,u.a.createElement(k.a,{className:"mb-3",onChange:this.handleChangeImage,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:this.state.productImages,isSearchable:!0,noOptionsMessage:function(){return null},placeholder:"Select image"})),this.state.selectedImage?u.a.createElement(E.a,{xs:8,md:4},u.a.createElement(p.a,{src:this.state.selectedImage,loading:"lazy",fluid:!0})):null,u.a.createElement(y.a.Group,{controlId:"on_sale"},u.a.createElement(y.a.Check,{type:"checkbox",label:"On sale",name:"is_on_sale",checked:l,onChange:this.handleChangeCheckBox})),u.a.createElement(y.a.Group,{controlId:"is_available"},u.a.createElement(y.a.Check,{type:"checkbox",name:"is_available",label:"In stock",checked:c,onChange:this.handleChangeCheckBox})),u.a.createElement(y.a.Group,{controlId:"item_stock"},u.a.createElement(y.a.Check,{type:"checkbox",label:"Manage stock from product",name:"item_stock",checked:r,onChange:this.handleChangeCheckBox})),u.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))):u.a.createElement(d.a,{to:"/login"})}}]),t}(s.Component);t.default=Object(h.connect)(function(e){return{token:e.auth.token,user:e.user}})(I)}}]);
//# sourceMappingURL=37.af562aa9.chunk.js.map