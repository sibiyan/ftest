(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{606:function(e,a,t){"use strict";t.r(a);var n=t(32),c=t.n(n),l=t(52),s=t(6),r=t(7),i=t(9),o=t(8),d=t(10),m=t(0),u=t.n(m),h=t(251),E=t(167),v=t(67),b=t(18),N=t(244),p=t(5),f=t(14),g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={addressList:[],loading:!1,error:null,editMode:!0},t.handleFetchAddresses=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({loading:!0}),f.a.get(p.x).then(function(e){t.setState({addressList:e.data,loading:!1})}).catch(function(e){t.setState({error:e,loading:!1})});case 2:case"end":return e.stop()}},e,this)})),t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.handleFetchAddresses()}},{key:"render",value:function(){var e=this.state.addressList;return this.props.token?u.a.createElement("div",null,u.a.createElement(v.a,{title:"Address"}),this.state.loading&&u.a.createElement("div",{className:"loading-cls"}),e&&u.a.createElement("section",{className:"section-b-space"},u.a.createElement("div",{className:"container"},e.length<1?u.a.createElement("div",{className:"account-sidebar"},u.a.createElement(E.a,{style:{color:"#FFF"},to:"/create-address"},"Add Address")):null,e.map(function(e){return u.a.createElement("div",{key:e.id,className:"row"},u.a.createElement("div",{className:"col-lg-9"},u.a.createElement("div",{className:"dashboard-right"},u.a.createElement("div",{className:"dashboard"},u.a.createElement("div",{className:"box-account box-info"},u.a.createElement("div",{className:"box-head"},u.a.createElement("h2",null,e.PlaceName)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"box-title"},u.a.createElement("h3",null,e.areaName)),u.a.createElement("div",{className:"box-content"},u.a.createElement("h6",null,e.full_address),u.a.createElement("h6",null,"Village: ",e.vilalgeName),u.a.createElement("h6",null,"District: ",e.districtName),u.a.createElement("h6",null,"Phone: ",e.phone_number),u.a.createElement("br",null),u.a.createElement(E.a,{style:{color:"#FFF"},to:"".concat("","/editaddress/").concat(e.id)},u.a.createElement(N.a,{variant:"outline-primary",size:"sm"},"Edit")))))))))))})))):u.a.createElement(h.a,{to:"/login"})}}]),a}(m.Component);a.default=Object(b.connect)(function(e){return{token:e.auth.token}})(g)}}]);
//# sourceMappingURL=30.d8e22f32.chunk.js.map