(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{284:function(e,t,a){"use strict";var n=a(9),r=a(10),o=a(13),i=a(11),c=a(12),l=a(0),s=a.n(l),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).handleChangeCategory=function(e){a.props.handleChangeCategory(e),window.scrollTo(0,1300)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.ShopProductCategory,n=t.ShopDetail;return s.a.createElement("div",null,this.props.loading?s.a.createElement("div",{className:"loading-cls"}):s.a.createElement("div",{className:"container category-button"},s.a.createElement("section",{className:"section-b-space"},s.a.createElement("div",{className:"row partition1"},s.a.createElement("div",{className:"col"},s.a.createElement("a",{href:null,onClick:function(t){return e.props.handleClearCategory(t)},className:"btn btn-outline btn-block"},"All Products")),a&&s.a.createElement(s.a.Fragment,null,a.map(function(t,a){return s.a.createElement("div",{key:a,className:"col"},s.a.createElement("a",{href:null,className:"btn btn-outline btn-block",onClick:function(){return e.handleChangeCategory(t.id)}},n&&"Malayalam"===n.preferred_language?s.a.createElement(s.a.Fragment,null," ",t.local_name):s.a.createElement(s.a.Fragment,null," ",t.name)))}))))))}}]),t}(l.Component);t.a=u},459:function(e,t,a){"use strict";a.r(t);var n=a(266),r=a(9),o=a(10),i=a(13),c=a(11),l=a(12),s=a(3),u=a(0),d=a.n(u),p=(a(87),a(18)),f=(a(168),a(4)),m=a(7),h=a(5),g=a.n(h),b=a(8),v=d.a.forwardRef(function(e,t){var a,n=e.as,r=void 0===n?"div":n,o=e.className,i=e.fluid,c=e.bsPrefix,l=Object(m.a)(e,["as","className","fluid","bsPrefix"]),s=((a={})[c=Object(b.a)(c,"jumbotron")]=!0,a[c+"-fluid"]=i,a);return d.a.createElement(r,Object(f.a)({ref:t},l,{className:g()(o,s)}))});v.defaultProps={fluid:!1},v.displayName="Jumbotron";var E=v,y=a(259),O=(u.Component,a(40)),j=a.n(O),x=a(31),S=(u.Component,a(279)),C=a.n(S),P=a(258),V=a(6),w=a(20),N=a(19),D=a(15),k=a(17),A=(a(47),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,selectedVariationID:"",selectedVariationName:"",selectedVariationMRP:"",selectedVariationPrice:""},a.setDefaultVariation=function(){if(a.props.variations&&"undefined"!==typeof a.props.variations[0]){var e=a.props.variations[0].name,t=a.props.variations[0].id,n=a.props.variations[0].price,r=a.props.variations[0].discount_price;a.setState({selectedVariationName:e,selectedVariationID:t,selectedVariationMRP:n,selectedVariationPrice:r})}},a.handleAddToCart=function(e,t,n){null!==a.props.token?(a.setState({isAdding:!0}),D.a.post(V.v,{id:e,shop:t,variation:n}).then(function(e){k.toast.success("item added to cart"),a.props.refreshCart(),a.setState({isAdding:!1})}).catch(function(e){if(e.response)if(401===e.response.status)a.setState({isAdding:!1}),k.toast.error("please login or refresh");else if(e.response.data){var t=e.response.data.message;a.setState({isAdding:!1}),k.toast.error(t)}else a.setState({isAdding:!1}),k.toast.error("Oops there was an error")})):(a.setState({isAdding:!1}),k.toast.error("Please login or refresh"))},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setDefaultVariation()}},{key:"handleChangeVariation",value:function(e){console.log(e),this.setState({selectedVariationID:e.id,selectedVariationName:e.name,selectedVariationMRP:e.price,selectedVariationPrice:e.discount_price})}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.variations,r=t.defaultOption,o=t.ShopDetail;return d.a.createElement("div",{className:"product-box"},this.state.loading&&d.a.createElement("div",{className:"loading-cls"}),d.a.createElement("div",{className:"img-wrapper"},d.a.createElement("div",{className:"lable-block"},1==a.is_featured&&a.is_available?d.a.createElement("span",{className:"lable3"},"new"):"",1==a.is_on_sale&&a.is_available?d.a.createElement("span",{className:"lable3"},"sale"):"",!0!==a.is_available?d.a.createElement("span",{className:"lable4"},"Out of stock"):""),d.a.createElement("div",{className:"front"},d.a.createElement("img",{src:"".concat(V.H).concat(a.product_image),className:"img-fluid",alt:""})),d.a.createElement("div",{className:"cart-info cart-wrap"},a.is_available?d.a.createElement("button",{title:"Add to cart",onClick:function(){return e.handleAddToCart(a.id,a.shop,e.state.selectedVariationID)}},d.a.createElement("i",null,d.a.createElement(N.a,{icon:w.g,size:"lg",color:"#ff4c3b"}))):null)),d.a.createElement("div",{className:"product-detail"},d.a.createElement("div",null,d.a.createElement("div",{className:"rating"},""),"Malayalam"===o.preferred_language?d.a.createElement("h6",null,a.title_local):d.a.createElement("h6",null,a.title," "),d.a.createElement("h4",null,"Rs: "," ",this.state.selectedVariationMRP," ",d.a.createElement("del",null,d.a.createElement("span",{className:"money"},"  MRP ",this.state.selectedVariationMRP))),d.a.createElement("br",null),r?d.a.createElement(d.a.Fragment,null,r.name&&d.a.createElement(P.a,{options:n,getOptionLabel:function(e){return"".concat(e.name)},value:n.filter(function(t){return t.name===e.state.selectedVariationName}),onChange:function(t){return e.handleChangeVariation(t)},isSearchable:!1})):null)))}}]),t}(u.Component)),_=Object(p.connect)(null,function(e){return{refreshCart:function(){return e(Object(x.b)())}}})(A),M=(u.Component,a(2));function I(){var e=Object(s.a)(["\n  padding: 5px 2px;\n"]);return I=function(){return e},e}function F(){var e=Object(s.a)(["\n  margin-top: 10px;\n  width: auto;\n  border: 1px solid #ff5722;\n  background: #fff;\n  padding: 7px 14px;\n  color: #ff5722;\n  border-radius: 50px;\n  cursor: pointer;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  &:hover {\n    width: auto;\n    background: #ff5722;\n    color: #fff;\n    padding: 7px 14px;\n    cursor: pointer;\n  }\n"]);return F=function(){return e},e}function R(){var e=Object(s.a)(["\n  font-size: 14px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #343a40;\n  /* margin-bottom: 50px; */\n"]);return R=function(){return e},e}function z(){var e=Object(s.a)(["\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #343a40;\n  padding-right: 10px;\n"]);return z=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n"]);return q=function(){return e},e}function T(){var e=Object(s.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #343a40;\n"]);return T=function(){return e},e}function J(){var e=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 30px 20px;\n  width: 50%;\n"]);return J=function(){return e},e}function L(){var e=Object(s.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n"]);return L=function(){return e},e}function H(){var e=Object(s.a)(["\n  flex: 1;\n  height: 200px;\n  width: 200px;\n  overflow: hidden;\n  display: flex;\n  align-content: center;\n"]);return H=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: flex;\n  border: 1px solid transparent;\n  /* max-width: 325px; */\n  width: 350;\n  height: 200px;\n  margin: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 5px;\n  padding: 0px 25px;\n"]);return B=function(){return e},e}var W=M.b.div(B()),G=M.b.div(H()),K=M.b.img(L()),Q=M.b.div(J()),U=M.b.h2(T()),X=M.b.div(q()),Y=M.b.h2(z()),Z=(M.b.h2(R()),M.b.button(F())),$=M.b.div(I()),ee=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={isAdding:!1,selectedVariationID:"",selectedVariationName:"",selectedVariationMRP:"",selectedVariationPrice:""},a.setDefaultVariation=function(){if(a.props.variations&&"undefined"!==typeof a.props.variations[0]){var e=a.props.variations[0].name,t=a.props.variations[0].id,n=a.props.variations[0].price,r=a.props.variations[0].discount_price;a.setState({selectedVariationName:e,selectedVariationID:t,selectedVariationMRP:n,selectedVariationPrice:r})}},a.handleAddToCart=function(e,t,n){null!==a.props.token?(a.setState({isAdding:!0}),D.a.post(V.v,{id:e,shop:t,variation:n}).then(function(e){k.toast.success("item added to cart"),a.props.refreshCart(),a.setState({isAdding:!1})}).catch(function(e){if(e.response)if(401===e.response.status)a.setState({isAdding:!1}),k.toast.error("please login or refresh");else if(e.response.data){var t=e.response.data.message;a.setState({isAdding:!1}),k.toast.error(t)}else a.setState({isAdding:!1}),k.toast.error("Oops there was an error")})):(a.setState({isAdding:!1}),k.toast.error("Please login or refresh"))},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setDefaultVariation()}},{key:"handleChangeVariation",value:function(e){this.setState({selectedVariationID:e.id,selectedVariationName:e.name,selectedVariationMRP:e.price,selectedVariationPrice:e.discount_price})}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.variations,r=t.defaultOption,o=(t.loading,t.ShopDetail),i=this.state.isAdding;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,null,d.a.createElement(G,null,d.a.createElement(K,{src:"".concat(V.H).concat(a.product_image)})),d.a.createElement(Q,null,void 0!=o?d.a.createElement(d.a.Fragment,null,(o.preferred_language,d.a.createElement(U,null,a.title))):null,d.a.createElement(X,null,d.a.createElement(Y,null,"Rs: ",this.state.selectedVariationPrice),d.a.createElement("del",null,d.a.createElement(Y,null,this.state.selectedVariationMRP))),d.a.createElement($,null,r?d.a.createElement(d.a.Fragment,null,r.name&&d.a.createElement(P.a,{options:n,getOptionLabel:function(e){return"".concat(e.name)},value:n.filter(function(t){return t.name===e.state.selectedVariationName}),onChange:function(t){return e.handleChangeVariation(t)},isSearchable:!1})):null),a.variations.length>0?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"cart-bottom"},a.do_not_disply_when_not_available?d.a.createElement(Z,{disabled:i,title:"Add to cart",onClick:function(){return e.handleAddToCart(a.id,a.shop,e.state.selectedVariationID)}},"Add to cart"):null)):null)))}}]),t}(u.Component),te=Object(p.connect)(null,function(e){return{refreshCart:function(){return e(Object(x.b)())}}})(ee),ae=a(264),ne=a(283),re=a.n(ne);function oe(){var e=Object(s.a)(['\n  display: flex;\n  justify-content: center;\n  font-family: "Playfair Display";\n  color: #333333;\n  font-size: 30px;\n  font-weight: 800;\n  /* margin-bottom: 3rem; */\n  margin-top: 3rem;\n  text-shadow: rgba(black, 0.5) 0 10px 10px;\n']);return oe=function(){return e},e}function ie(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* margin: 10px auto; */\n  padding-top: 30px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return ce=function(){return e},e}var le=Object(ae.css)(ce()),se=M.b.div(ie()),ue=M.b.h1(oe()),de=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.loading,n=e.ShopDetail;return console.log(a),d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(ue,null,"Products"),d.a.createElement(se,null,t.map(function(e){var t=e.variations,r=e.variations[0];return d.a.createElement(te,{product:e,key:e.id,variations:t,defaultOption:r,loading:a,ShopDetail:n})}))),this.props.loading?d.a.createElement(d.a.Fragment,null,d.a.createElement(re.a,{css:le,size:50,color:"#123abc",loading:this.props.loading})):d.a.createElement(d.a.Fragment,null,this.props.hasmore?d.a.createElement("p",{onClick:this.props.fetchProducts},d.a.createElement("b",null,"Load More")):d.a.createElement("p",null,d.a.createElement("b",null,"No more products"))))}}]),t}(u.Component),pe=Object(p.connect)(function(e){return{cartItems:e.cart.shoppingCart}},function(e){return{refreshCart:function(){return e(Object(x.b)())}}})(de),fe=(a(284),a(263));function me(){var e=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return me=function(){return e},e}var he=Object(ae.css)(me()),ge=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,error:null,products:[],featuredProducts:[],ShopDetail:null,ShopProductCategory:[],SelectedCategory:"all",filteredProduct:[],offset:0,limit:20,query:"all",hasMore:!0,data:[]},a.handleChangeCategory=function(e){a.setState({offset:0,query:e,hasMore:!0},function(){a.fetchFreshProducts()})},a.handleClearCategory=function(){a.setState({offset:0,query:"all",hasMore:!0},function(){a.fetchFreshProducts()})},a.fetchProducts=function(){var e=a.props.match.params;a.setState({loading:!0});var t=a.state,r=t.limit,o=t.offset,i=t.query,c=e.shopID;j.a.get(V.p+"?limit=".concat(r,"&offset=").concat(o,"&query=").concat(i,"&shopID=").concat(c)).then(function(e){var t=e.data.products,i=e.data.has_more;a.setState({hasMore:i,loading:!1,products:Object(n.a)(a.state.products).concat(Object(n.a)(t)),offset:o+r})}).catch(function(e){a.setState({error:e,loading:!1})})},a.fetchFreshProducts=function(){var e=a.props.match.params;a.setState({loading:!0});var t=a.state,n=t.limit,r=t.offset,o=t.query,i=e.shopID;j.a.get(V.p+"?limit=".concat(n,"&offset=").concat(r,"&query=").concat(o,"&shopID=").concat(i)).then(function(e){a.setState({data:e.data,loading:!1,hasMore:e.data.has_more,products:e.data.products,offset:r+n})}).catch(function(e){a.setState({error:e,loading:!1})})},a.fetchShopDetails=function(){var e=a.props.match.params;a.setState({loading:!0}),j.a.get(Object(V.j)(e.shopID)).then(function(e){a.setState({ShopDetail:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.fetchProductCategory=function(){var e=a.props.match.params;a.setState({loading:!0}),j.a.get(Object(V.m)(e.shopID)).then(function(e){a.setState({ShopProductCategory:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.fetchfeaturedProducts=function(){var e=a.props.match.params;a.setState({loading:!0}),j.a.get(Object(V.k)(e.shopID)).then(function(e){a.setState({featuredProducts:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("color").setAttribute("href","#"),this.fetchProducts(),this.fetchfeaturedProducts(),this.fetchShopDetails(),this.fetchProductCategory()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.products,n=(e.featuredProducts,e.ShopDetail);e.ShopProductCategory,e.filteredProduct,e.hasMore,e.data;return console.log(t),d.a.createElement("div",null,d.a.createElement(re.a,{css:he,size:50,color:"#123abc",loading:this.state.loading}),n&&d.a.createElement("div",null,d.a.createElement(fe.d,{imgurl:n.image},d.a.createElement(fe.b,null,d.a.createElement(fe.c,null,n.name))),d.a.createElement("div",null,n.is_accepting_orders?d.a.createElement("div",null,a&&d.a.createElement(pe,{loading:this.state.loading,fetchProducts:this.fetchProducts,hasmore:this.state.hasMore,products:a,SelectedCategory:this.state.SelectedCategory,ShopDetail:n})):d.a.createElement(E,null,d.a.createElement("h4",null,"We are not accepting orders now"),d.a.createElement("p",null,"please check back later")))))}}]),t}(u.Component);t.default=Object(p.connect)(null,function(e){return{refreshCart:function(){return e(Object(x.b)())}}})(ge)}}]);
//# sourceMappingURL=28.cf578b96.chunk.js.map