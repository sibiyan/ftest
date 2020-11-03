(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(395),c=a(468),o=a(414),u=a(396),i=function(e){var t=e.placeholder,a=e.name,n=e.value,l=e.onChange,c=void 0===l?function(){return null}:l;return r.a.createElement(u.a.Group,null,r.a.createElement(u.a.Control,{placeholder:t,name:a,value:n||"",onChange:c}))};window.Date.prototype.isValid=function(){return this.getTime()===this.getTime()};var s=function(e){var t=e.column,a=t.filterValue,n=t.setFilter,l=t.filter;return r.a.createElement(i,{value:a||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"Search ".concat(l||"","...")})};t.a=function(e){var t=e.columns,a=e.data,n={year:function(e,t,a){return e.filter(function(e){var n=e.values[t];return!(void 0!==n&&Number(a)&&new Date(n)&&new Date(n).isValid())||new Date(n).getFullYear()===Number(a)})},text:function(e,t,a){return e.filter(function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())})}},u={Filter:s},i=Object(o.useTable)({columns:t,data:a,defaultColumn:u,filterTypes:n},o.useFilters,o.useSortBy),d=i.getTableProps,m=i.getTableBodyProps,f=i.headerGroups,b=i.rows,p=i.prepareRow;return r.a.createElement(l.a,null,r.a.createElement(c.a,Object.assign({responsive:"md",striped:!0,bordered:!0,hover:!0,size:"sm"},d()),r.a.createElement("thead",null,f.map(function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e,t){var a=e.render,n=e.getHeaderProps,l=e.isSorted,c=e.isSortedDesc,o=e.getSortByToggleProps,u=e.canFilter,i=l?c?"desc":"asc":"";return r.a.createElement("th",{key:"th-".concat(t),className:i},r.a.createElement("div",n(o()),a("Header")),r.a.createElement("div",null,u?a("Filter"):null))}))})),r.a.createElement("tbody",m(),b.map(function(e,t){return p(e),r.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))))}},416:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),l=a(13),c=a(11),o=a(12),u=a(0),i=a.n(u),s=a(21),d=a(391),m=a(5),f=a(380),b=a(16),p=a(7),g=(a(104),a(416),a(215)),v=a(214),O=a(398),h=a(403),j=a(15),E=a(58),y=(a(71),a(59)),w=a(6);function S(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]);return S=function(){return e},e}function D(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return e},e}var C=w.b.div(D()),H=Object(w.b)(y.b)(S()),T=function(e){var t=Object(u.useState)(null),a=Object(d.a)(t,2),n=a[0],r=a[1],l=Object(u.useState)(!1),c=Object(d.a)(l,2),o=c[0],s=c[1],m=Object(u.useState)(""),w=Object(d.a)(m,2),S=w[0],D=w[1],T=Object(u.useState)(Object(g.default)(Object(v.default)(new Date,0),0)),F=Object(d.a)(T,2),x=F[0],M=F[1],P=Object(u.useState)(Object(g.default)(Object(v.default)(new Date,59),23)),k=Object(d.a)(P,2),N=k[0],_=k[1],B=function(){console.log("submitting");var e=void 0===S?null:S,t=void 0===N?null:N,a=void 0===x?null:x;""!==e?(s(!0),b.a.get(p.N,{params:{selectedPlace:e,staringtDate:a,endingtDate:t}}).then(function(e){r(e.data),s(!1)}).catch(function(e){s(!1),j.toast.error("error occured")})):j.toast.error("Please select a place")},A=[{Header:"ID",accessor:"id",Cell:function(e){return i.a.createElement(f.a,{to:"staff-order/".concat(e.value)},e.value)}},{Header:"Area",accessor:"area_name"},{Header:"Shop",accessor:"shop_name"},{Header:"Status",accessor:"orderStatus"},{Header:"Date",accessor:"start_date"},{Header:"Customer",accessor:"customer_name"},{Header:"Mobile",accessor:"mobile_number"}];return i.a.createElement(H,null,i.a.createElement(j.ToastContainer,null),o&&i.a.createElement(E.c,null),i.a.createElement(y.e,{style:{marginLeft:"10px",marginRight:"10px"}},i.a.createElement(C,{onSubmit:B},i.a.createElement(y.g,{id:"place",name:"place",type:"text",onChange:function(e){console.log(e.target.value),D(e.target.value)},value:S},i.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select your place"),e.places.map(function(e,t){return i.a.createElement("option",{key:t},e)})),i.a.createElement(y.f,{selected:x,selectsStart:!0,onChange:function(e){return M(e)},popperModifiers:{preventOverflow:{enabled:!0}},dateFormat:"dd/MMM/yy",onFocus:function(e){return e.target.readOnly=!0},timeFormat:"HH:mm",injectTimes:[Object(g.default)(Object(v.default)(new Date,1),0),Object(g.default)(Object(v.default)(new Date,5),12),Object(g.default)(Object(v.default)(new Date,59),23)]}),i.a.createElement(y.f,{selected:N,onChange:function(e){return _(e)},popperModifiers:{preventOverflow:{enabled:!0}},onFocus:function(e){return e.target.readOnly=!0},dateFormat:"dd/MMM/yy",timeFormat:"HH:mm",injectTimes:[Object(g.default)(Object(v.default)(new Date,1),0),Object(g.default)(Object(v.default)(new Date,5),12),Object(g.default)(Object(v.default)(new Date,59),23)]}),i.a.createElement(y.a,{onClick:B}," Submit"))),n?i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{bg:"danger",style:{width:"18rem"},className:"mb-2",text:"light"},i.a.createElement(O.a.Body,null,i.a.createElement(O.a.Title,null," ",n.filter(function(e){return 1===e.order_status}).length," ","Pending Orders"," "))),i.a.createElement(O.a,{bg:"success",style:{width:"18rem"},className:"mb-2",text:"light"},i.a.createElement(O.a.Body,null,i.a.createElement(O.a.Title,null," ",n.length," Total Orders ")))):null,n?i.a.createElement(y.e,{style:{padding:"5px"}},i.a.createElement(h.a,{data:n,columns:A})):null)},F=a(60),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).fetchServieArea=function(){a.setState({loading:!0},function(){b.a.get(p.eb).then(function(e){a.setState({data:e.data[0]}),a.setState({places:e.data[0].places})}).catch(function(e){a.setState({error:e.message,loading:!1})})})},a.state={places:null,loading:!1,error:null,data:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchServieArea()}},{key:"render",value:function(){var e=this.state.places;return i.a.createElement("div",null,e&&i.a.createElement(T,{places:e}))}}]),t}(u.Component);t.default=Object(s.connect)(function(e){return{user:e.user,token:e.auth.token}},function(e){return{fetchUserType:function(){return e(Object(F.b)())}}})(x)}}]);
//# sourceMappingURL=20.3e848a34.chunk.js.map