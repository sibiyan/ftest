(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{235:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(216),c=a(558),o=a(266),s=a(217),u=function(e){var t=e.placeholder,a=e.name,r=e.value,l=e.onChange,c=void 0===l?function(){return null}:l;return n.a.createElement(s.a.Group,null,n.a.createElement(s.a.Control,{placeholder:t,name:a,value:r||"",onChange:c}))};window.Date.prototype.isValid=function(){return this.getTime()===this.getTime()};var i=function(e){var t=e.column,a=t.filterValue,r=t.setFilter,l=t.filter;return n.a.createElement(u,{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search ".concat(l||"","...")})};t.a=function(e){var t=e.columns,a=e.data,r={year:function(e,t,a){return e.filter(function(e){var r=e.values[t];return!(void 0!==r&&Number(a)&&new Date(r)&&new Date(r).isValid())||new Date(r).getFullYear()===Number(a)})},text:function(e,t,a){return e.filter(function(e){var r=e.values[t];return void 0===r||String(r).toLowerCase().startsWith(String(a).toLowerCase())})}},s={Filter:i},u=Object(o.useTable)({columns:t,data:a,defaultColumn:s,filterTypes:r},o.useFilters,o.useSortBy),d=u.getTableProps,m=u.getTableBodyProps,f=u.headerGroups,b=u.rows,v=u.prepareRow;return n.a.createElement(l.a,null,n.a.createElement(c.a,Object.assign({responsive:"md",striped:!0,bordered:!0,hover:!0,size:"sm"},d()),n.a.createElement("thead",null,f.map(function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e,t){var a=e.render,r=e.getHeaderProps,l=e.isSorted,c=e.isSortedDesc,o=e.getSortByToggleProps,s=e.canFilter,u=l?c?"desc":"asc":"";return n.a.createElement("th",{key:"th-".concat(t),className:u},n.a.createElement("div",r(o()),a("Header")),n.a.createElement("div",null,s?a("Filter"):null))}))})),n.a.createElement("tbody",m(),b.map(function(e,t){return v(e),n.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))))}},559:function(e,t,a){"use strict";a.r(t);var r=a(212),n=a(0),l=a.n(n),c=(a(12),a(22),a(113)),o=(a(29),a(13)),s=a(7),u=(a(50),a(333)),i=a.n(u),d=a(213),m=(a(332),a(268)),f=a(269),b=a(235);t.default=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],u=t[1],v=Object(n.useState)(!1),p=Object(r.a)(v,2),E=p[0],g=p[1],O=Object(n.useState)(Object(m.default)(Object(f.default)(new Date,0),0)),h=Object(r.a)(O,2),w=h[0],j=h[1],y=Object(n.useState)(Object(m.default)(Object(f.default)(new Date,59),23)),N=Object(r.a)(y,2),D=N[0],C=N[1];Object(n.useEffect)(function(){H()},[]);var H=function(e){var t=void 0===D?null:D,a=void 0===w?null:w;g(!0),o.a.get(s.M,{params:{staringtDate:a,endingtDate:t}}).then(function(e){u(e.data),g(!1)}).catch(function(e){g(!1)})},S=[{Header:"ID",accessor:"id",Cell:function(e){var t=e.row;return l.a.createElement(c.a,{to:"".concat("","/order/").concat(t.values.id)},t.values.id)}},{Header:"Customer",accessor:"customer_name"},{Header:"Area",accessor:"area_name"},{Header:"Status",accessor:"orderStatus"},{Header:"Date",accessor:"start_date"},{Header:"Mobile",accessor:"mobile_number"},{Header:"Mode of payment",accessor:"mode_of_payment"}];return l.a.createElement("div",null,l.a.createElement("section",{className:"register-page section-b-space"},l.a.createElement("div",{className:"container"},E&&l.a.createElement("div",{className:"loading-cls"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("h4",null,"Find Orders"),l.a.createElement("div",{className:"theme-card"},l.a.createElement("div",{className:"checkout-page"},l.a.createElement("div",{className:"checkout-form"},l.a.createElement("div",{className:"row check-out"}),l.a.createElement("br",null),l.a.createElement("div",{className:"form-inline"},l.a.createElement("div",{className:"row check-out"},l.a.createElement("div",{className:"form-group col-md-8 col-sm-8 col-xs-8"},l.a.createElement(i.a,{selected:w,selectsStart:!0,onChange:function(e){return j(e)},dateFormat:"dd/MMM/yy",onFocus:function(e){return e.target.readOnly=!0},popperModifiers:{preventOverflow:{enabled:!0}},timeFormat:"HH:mm",injectTimes:[Object(m.default)(Object(f.default)(new Date,1),0),Object(m.default)(Object(f.default)(new Date,5),12),Object(m.default)(Object(f.default)(new Date,59),23)]})),l.a.createElement("div",{className:"form-group col-md-8 col-sm-8 col-xs-8"},l.a.createElement(i.a,{selected:D,popperModifiers:{preventOverflow:{enabled:!0}},onChange:function(e){return C(e)},onFocus:function(e){return e.target.readOnly=!0},dateFormat:"dd/MMM/yy",timeFormat:"HH:mm",injectTimes:[Object(m.default)(Object(f.default)(new Date,1),0),Object(m.default)(Object(f.default)(new Date,5),12),Object(m.default)(Object(f.default)(new Date,59),23)]})))),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-solid",id:"submit",placeholder:"search",onClick:H,required:""}))),l.a.createElement("br",null),a?l.a.createElement("div",null,l.a.createElement(d.a,{bg:"secondary",style:{width:"18rem"},className:"mb-2",text:"light"},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null," ",a.length," Orders ")))):null))))),a?l.a.createElement(b.a,{data:a,columns:S}):null)}}}]);
//# sourceMappingURL=28.97bd98bb.chunk.js.map