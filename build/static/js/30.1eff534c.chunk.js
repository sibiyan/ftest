(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{486:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(9),l=a(10),s=a(13),c=a(11),u=a(12),o=a(0),i=a.n(o),m=a(48),h=a.n(m),d=a(7),p=a(415),b=a(398),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.results;return console.log(e),i.a.createElement(p.a,null,this.props.results.map(function(e,t){return i.a.createElement(b.a,{key:t,border:"success",style:{width:"20rem"}},i.a.createElement(b.a.Header,null,"Order No:",e.id),i.a.createElement(b.a.Body,null,i.a.createElement(b.a.Title,null,e.shop_name),i.a.createElement(b.a.Text,null,i.a.createElement("p",null,e.order_status),i.a.createElement("p",null,e.order_status),i.a.createElement("p",null,e.order_status),i.a.createElement("p",null,e.order_status))))}))}}]),t}(o.Component),f=a(395),O=a(396),j=a(399),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.search;h.a.get(d.R+"?search=".concat(t)).then(function(e){a.setState({results:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.state={search:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.results;return i.a.createElement(f.a,null,i.a.createElement(O.a,{inline:!0},i.a.createElement(O.a.Label,{for:"inlineFormInputName2",srOnly:!0},"search"),i.a.createElement(O.a.Control,{name:"search",className:"mb-2 mr-sm-2",id:"inlineFormInputName2",placeholder:"search with order number/name/phone number",defaultValue:this.state.search,onChange:this.handleChange}),i.a.createElement(j.a,{type:"submit",className:"mb-2",onClick:this.handleSubmit},"Search")),e?i.a.createElement("div",null,i.a.createElement(E,{results:e})):i.a.createElement("p",null,"No order to show"))}}]),t}(o.Component);t.default=v}}]);
//# sourceMappingURL=30.1eff534c.chunk.js.map