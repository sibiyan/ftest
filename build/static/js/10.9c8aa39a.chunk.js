(window.webpackJsonp=window.webpackJsonp||[]).push([[10,17],{270:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i});var a={infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]},r=function(t){var e=document.querySelectorAll("."+t+" h4");[].forEach.call(e,function(t){t.innerHTML+='<span class="according-menu"></span>'});for(var n=document.getElementsByClassName(t),a=0;a<n.length;a++){n[a].onclick=function(){var e=document.querySelectorAll("."+t);[].forEach.call(e,function(t){t.classList.remove("active");var e=t.nextElementSibling;e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration="500ms",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),this.classList.add("active");var n=this.nextElementSibling;n.style.removeProperty("display");var a=window.getComputedStyle(n).display;if(n.classList.contains("show"))n.classList.remove("show"),this.classList.remove("active"),n.style.height=n.offsetHeight+"px",n.style.transitionProperty="height, margin, padding",n.style.transitionDuration="500ms",n.offsetHeight,n.style.overflow="hidden",n.style.height=0,n.style.paddingTop=0,n.style.paddingBottom=0,n.style.marginTop=0,n.style.marginBottom=0,n.style.display="none",n.style.transitionProperty="height, margin, padding",n.style.transitionDuration="500ms",n.style.removeProperty("height"),n.style.removeProperty("padding-top"),n.style.removeProperty("padding-bottom"),n.style.removeProperty("margin-top"),n.style.removeProperty("margin-bottom"),window.setTimeout(function(){n.style.removeProperty("overflow"),n.style.removeProperty("transition-duration"),n.style.removeProperty("transition-property")},500);else{n.classList.add("show"),"none"===a&&(a="block"),n.style.display=a;var r=n.offsetHeight;n.style.overflow="hidden",n.style.height=0,n.style.paddingTop=0,n.style.paddingBottom=0,n.style.marginTop=0,n.style.marginBottom=0,n.offsetHeight,n.style.transitionProperty="height, margin, padding",n.style.transitionDuration="500ms",n.style.height=r+"px",n.style.removeProperty("padding-top"),n.style.removeProperty("padding-bottom"),n.style.removeProperty("margin-top"),n.style.removeProperty("margin-bottom"),window.setTimeout(function(){n.style.removeProperty("height"),n.style.removeProperty("overflow"),n.style.removeProperty("transition-duration"),n.style.removeProperty("transition-property")},500)}}}var r=document.querySelectorAll("."+t);[].forEach.call(r,function(t){t.nextElementSibling.style="display: none"})},o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n                                        <path\n                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n                                            fill="#ff4c3b"/>\n                                    </svg>',i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n                                        <path\n                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n                                            fill="#ff4c3b"/>\n                                        <path\n                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n                                            fill="#ff4c3b"/>\n                                        <path\n                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n                                            fill="#ff4c3b"/>\n                                        <path\n                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n                                            fill="#ff4c3b"/>\n                                        <path\n                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n                                            fill="#ff4c3b"/>\n                                        <path\n                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n                                            fill="#ff4c3b"/>\n                                    </svg>'},274:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return m}),n.d(e,"d",function(){return h});var a=n(2),r=(n(0),n(3));function o(){var t=Object(a.a)(["\n  position: relative;\n  height: 40vh;\n  margin-left: 0;\n  margin-right: 0;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n"]);return o=function(){return t},t}function i(){var t=Object(a.a)(['\n  text-shadow: 0 1px 0 black;\n  font-family: "Playfair Display";\n  color: #fff;\n  font-size: 25px;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n']);return i=function(){return t},t}function l(){var t=Object(a.a)(["\n  padding: 5px;\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n"]);return l=function(){return t},t}function c(){var t=Object(a.a)(["\n  position: relative;\n  width: 350px;\n  height: 350px;\n  background-color: #333;\n  background-image: url(",");\n  background-size: cover;\n  margin: 0 5px 30px 5px;\n  border-radius: 10px;\n  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,\n    inset rgba(white, 0.5) 0 0 0 6px;\n  transition: 1s $returnEasing;\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]);return c=function(){return t},t}function s(){var t=Object(a.a)(["\n  justify-content: center;\n  align-items: stretch;\n  align-content: stretch;\n"]);return s=function(){return t},t}function u(){var t=Object(a.a)(["\n  line-height: 1.5em;\n"]);return u=function(){return t},t}function f(){var t=Object(a.a)(['\n  font-family: "Raleway";\n  font-size: 24px;\n  font-weight: 700;\n  color: #5d4037;\n  text-align: center;\n']);return f=function(){return t},t}r.b.h1(f()),r.b.p(u()),r.b.div(s());var d=r.b.div(c(),function(t){return t.imgurl}),p=r.b.div(l()),m=r.b.h1(i()),h=r.b.div(o(),function(t){return t.imgurl})},276:function(t,e,n){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return a})},338:function(t,e,n){"use strict";n.r(e);var a=n(276),r=n(9),o=n(10),i=n(12),l=n(11),c=n(13),s=n(134),u=n(2),f=n(0),d=n.n(f),p=n(40),m=n.n(p),h=n(6),C=n(15),g=n(17),y=(n(47),n(258)),v=(n(133),n(19),n(274)),b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).addToWishList=function(t){n.setState({loading:!0}),C.a.post(h.a,{place:t}).then(function(t){n.setState({loading:!1}),g.toast.success("This locality added to your favorites")}).catch(function(t){401===t.response.status?(g.toast.error("Please login to add to favorites"),n.setState({loading:!1})):400===t.response.status?(g.toast.error("This locality already exists in your favorites"),n.setState({loading:!1})):g.toast.error("An error occured")})},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props.locality;return d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{to:"".concat("","/places/").concat(t.id)},d.a.createElement(v.a,{imgurl:"".concat(h.H).concat(t.image)},d.a.createElement(v.b,null,t.village_name,d.a.createElement(v.c,null,t.name)))))}}]),e}(f.Component),E=n(3),w=n(115);function L(){var t=Object(u.a)(['\n  display: flex;\n  justify-content: center;\n  font-family: "Playfair Display";\n  color: #333333;\n  font-size: 30px;\n  font-weight: 800;\n  /* margin-bottom: 3rem; */\n  /* margin-top: 3rem; */\n  text-shadow: rgba(black, 0.5) 0 10px 10px;\n']);return L=function(){return t},t}function x(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  position: absolute;\n  /* top: 0; */\n  left: 0;\n  /* bottom: 0; */\n  right: 0;\n"]);return x=function(){return t},t}function j(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 5px;\n  padding-top: 20px;\n"]);return j=function(){return t},t}n.d(e,"CardTitle",function(){return k});var O=E.b.div(j()),S=E.b.div(x()),k=E.b.h1(L()),M=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(l.a)(e).call(this,t))).fetchlaces=function(){n.setState({loading:!0},function(){var t=n.state,e=t.offset,r=t.limit,o=t.query;m.a.get(h.X+"?limit=".concat(r,"&offset=").concat(e,"&q=").concat(o)).then(function(t){var o=t.data.places,i=t.data.has_more;n.setState({hasMore:i,loading:!1,localities:Object(a.a)(n.state.localities).concat(Object(a.a)(o)),newLocalities:t.data.places,offset:e+r})}).catch(function(t){n.setState({error:t.message,loading:!1})})})},n.setQuery=function(t){n.setState({query:t.target.value}),n.callbacktest()},n.callbacktest=function(){console.log(n.state.query)},n.addToWishList=function(t){n.setState({loading:!0}),C.a.post(h.a,{place:t}).then(function(t){n.setState({loading:!1}),g.toast.success("This locality added to your favorites")}).catch(function(t){n.setState({error:t,loading:!1}),g.toast.error("This locality already exists in your favorites")})},n.state={loading:!1,error:null,localities:[],hasMore:!0,offset:0,limit:10,query:"all",newLocalities:[]},window.onscroll=function(){var t=Object(s.a)(Object(s.a)(n)),e=t.fetchlaces,a=t.state,r=a.error,o=a.loading,i=a.hasMore;r||o||!i||document.documentElement.scrollHeight-document.documentElement.scrollTop===document.documentElement.clientHeight&&e()},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){document.getElementById("color").setAttribute("href","#"),this.fetchlaces()}},{key:"render",value:function(){var t=this.state,e=t.localities;t.query,t.hasMore;return d.a.createElement(d.a.Fragment,null,d.a.createElement(k,null,"Localities"),this.state.loading?d.a.createElement(S,null,d.a.createElement(w.a,{loading:!0})):null,e&&d.a.createElement(d.a.Fragment,null,d.a.createElement(O,null,e.map(function(t,e){return d.a.createElement(b,{locality:t,key:e})}))))}}]),e}(d.a.PureComponent);e.default=M},462:function(t,e,n){"use strict";n.r(e);var a=n(32),r=n.n(a),o=n(51),i=n(9),l=n(10),c=n(12),s=n(11),u=n(13),f=n(2),d=n(0),p=n.n(d),m=n(264),h=n(40),C=n.n(h),g=n(18),y=n(6),v=n(338),b=(n(176),n(289)),E=n.n(b),w=n(17),L=n(270),x=n(15),j=(n(47),n(19)),O=(n(177),n(258)),S=n(20),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).addToWishList=function(t){n.setState({loading:!0}),x.a.post(y.b,{shop:t}).then(function(t){n.setState({loading:!1}),w.toast.success("This shop added to your favorites")}).catch(function(t){401===t.response.status?(w.toast.error("Please login to add to favorites"),n.setState({loading:!1})):400===t.response.status?(w.toast.error("This shop already exists in your favorites"),n.setState({loading:!1})):w.toast.error("An error occured")})},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.shop;return p.a.createElement("div",{className:"product-box"},p.a.createElement("div",{className:"img-wrapper"},p.a.createElement("div",{className:"front"},p.a.createElement(O.a,{to:"".concat("","/shops/").concat(e.id)},p.a.createElement("img",{src:e.image,className:"img-fluid",alt:""}))),p.a.createElement("div",{className:"cart-info cart-wrap"},p.a.createElement("button",{title:"Add to cart",onClick:function(){return t.addToWishList(e.id)}},p.a.createElement("i",null,p.a.createElement(j.a,{icon:S.d,size:"lg",color:"#ff4c3b"}))))),p.a.createElement("div",{className:"product-detail"},p.a.createElement("div",null,p.a.createElement(O.a,{to:"".concat("","/shops/").concat(e.id)},p.a.createElement("h4",null,e.name)),p.a.createElement("br",null),p.a.createElement("h6",null,e.place," "),p.a.createElement("h6",null,e.village," "," Village"))))}}]),e}(d.Component),M=(d.Component,function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("svg",{width:"320",height:"150",viewBox:"0 0 426 198",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement("g",{"clip-path":"url(#clip0)"},p.a.createElement("path",{d:"M208.894 115.332H159.572L159.049 99.3164C159.027 98.6221 159.147 97.9309 159.401 97.2903C159.656 96.6498 160.039 96.0751 160.524 95.6058C161.009 95.1365 161.584 94.7838 162.211 94.5719C162.837 94.36 163.5 94.294 164.152 94.3784L192.854 98.0903H192.858C197.113 98.1024 201.19 99.8954 204.196 103.076C207.202 106.257 208.891 110.567 208.894 115.061V115.332Z",fill:"#E70909"}),p.a.createElement("path",{d:"M186.911 58.521H152.511C152.054 58.5208 151.601 58.6159 151.178 58.8008C150.756 58.9856 150.371 59.2566 150.048 59.5983C149.724 59.9399 149.468 60.3455 149.293 60.792C149.118 61.2384 149.028 61.7169 149.028 62.2V98.5309C149.028 99.014 149.118 99.4925 149.293 99.9389C149.468 100.385 149.724 100.791 150.048 101.133C150.371 101.474 150.756 101.745 151.178 101.93C151.601 102.115 152.054 102.21 152.511 102.21H186.911C187.369 102.21 187.822 102.115 188.244 101.93C188.667 101.745 189.051 101.474 189.375 101.133C189.698 100.791 189.955 100.385 190.13 99.9389C190.305 99.4925 190.395 99.014 190.395 98.5309V62.2C190.395 61.7169 190.305 61.2384 190.13 60.792C189.955 60.3455 189.698 59.9399 189.375 59.5982C189.051 59.2566 188.667 58.9856 188.244 58.8008C187.822 58.6159 187.369 58.5208 186.911 58.521V58.521Z",fill:"#E70909"}),p.a.createElement("path",{d:"M179.164 85.6878L162.922 89.0282C161.959 89.2252 160.961 89.0105 160.147 88.4312C159.333 87.852 158.77 86.9555 158.582 85.9384L157.333 79.1674C157.147 78.1499 157.35 77.0958 157.899 76.2364C158.447 75.377 159.296 74.7825 160.259 74.5832L176.5 71.2428C177.464 71.0459 178.462 71.2606 179.276 71.8398C180.089 72.4191 180.652 73.3155 180.841 74.3326L182.089 81.1037C182.276 82.1212 182.073 83.1752 181.524 84.0346C180.976 84.894 180.127 85.4886 179.164 85.6878Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M175.914 77.6884L163.519 80.2376C163.293 80.2843 163.058 80.2339 162.866 80.0975C162.675 79.9612 162.542 79.7501 162.498 79.5107C162.454 79.2712 162.502 79.023 162.631 78.8208C162.76 78.6185 162.96 78.4786 163.187 78.432L175.581 75.8828C175.808 75.8361 176.043 75.8866 176.235 76.0229C176.426 76.1592 176.559 76.3703 176.603 76.6098C176.647 76.8492 176.599 77.0974 176.47 77.2997C176.341 77.5019 176.141 77.6418 175.914 77.6884V77.6884Z",fill:"white"}),p.a.createElement("path",{d:"M173.505 81.4636L167.094 82.7821C166.867 82.8288 166.632 82.7784 166.441 82.642C166.249 82.5057 166.117 82.2946 166.073 82.0551C166.029 81.8157 166.076 81.5675 166.205 81.3653C166.334 81.163 166.534 81.0231 166.761 80.9765L173.172 79.658C173.284 79.6349 173.4 79.6354 173.512 79.6594C173.624 79.6834 173.731 79.7305 173.825 79.7981C173.92 79.8656 174.002 79.9521 174.065 80.0528C174.128 80.1535 174.172 80.2664 174.194 80.3849C174.215 80.5035 174.215 80.6254 174.192 80.7438C174.169 80.8622 174.125 80.9747 174.061 81.0748C173.997 81.175 173.915 81.2609 173.82 81.3276C173.724 81.3943 173.617 81.4405 173.505 81.4636Z",fill:"white"}),p.a.createElement("path",{d:"M190.395 62.2V67.0288H149.028V62.2C149.028 61.7169 149.118 61.2384 149.293 60.792C149.468 60.3455 149.724 59.9399 150.048 59.5983C150.371 59.2566 150.756 58.9856 151.178 58.8008C151.601 58.6159 152.054 58.5208 152.511 58.521H186.911C187.369 58.5208 187.822 58.6159 188.244 58.8008C188.667 58.9856 189.051 59.2566 189.375 59.5983C189.698 59.9399 189.955 60.3455 190.13 60.792C190.305 61.2384 190.395 61.7169 190.395 62.2Z",fill:"#B3B3B3"}),p.a.createElement("path",{d:"M273 68.5409C272.761 67.7268 272.356 66.9778 271.814 66.3468C271.271 65.7158 270.604 65.2181 269.86 64.8887C269.115 64.5594 268.312 64.4065 267.505 64.4406C266.699 64.4748 265.91 64.6953 265.193 65.0866L217.867 47.1537L215.782 59.6402L262.957 73.3414C263.66 74.5699 264.764 75.4836 266.062 75.9095C267.359 76.3354 268.76 76.2438 269.998 75.6521C271.235 75.0604 272.225 74.0097 272.778 72.699C273.332 71.3884 273.41 69.9089 273 68.5409V68.5409Z",fill:"#FFB8B8"}),p.a.createElement("path",{opacity:"0.2",d:"M273 68.5409C272.761 67.7268 272.356 66.9778 271.814 66.3468C271.271 65.7158 270.604 65.2181 269.86 64.8887C269.115 64.5594 268.312 64.4065 267.505 64.4406C266.699 64.4748 265.91 64.6953 265.193 65.0866L217.867 47.1537L215.782 59.6402L262.957 73.3414C263.66 74.5699 264.764 75.4836 266.062 75.9095C267.359 76.3354 268.76 76.2438 269.998 75.6521C271.235 75.0604 272.225 74.0097 272.778 72.699C273.332 71.3884 273.41 69.9089 273 68.5409V68.5409Z",fill:"black"}),p.a.createElement("path",{d:"M226.267 49.429L221.798 61.7597C221.671 62.1106 221.473 62.4283 221.219 62.6914C220.966 62.9545 220.661 63.1566 220.326 63.2842C219.992 63.4117 219.635 63.4615 219.281 63.4303C218.926 63.3991 218.582 63.2876 218.272 63.1034L207.411 56.647C205.715 55.9496 204.35 54.5706 203.616 52.8121C202.881 51.0537 202.837 49.0594 203.492 47.2665C204.148 45.4736 205.45 44.0283 207.113 43.2476C208.776 42.4668 210.664 42.4143 212.363 43.1015L224.492 45.9425C224.839 46.0239 225.166 46.1835 225.449 46.4102C225.733 46.637 225.967 46.9256 226.135 47.2565C226.304 47.5874 226.403 47.9527 226.425 48.3276C226.448 48.7025 226.394 49.0782 226.267 49.429V49.429Z",fill:"#E70909"}),p.a.createElement("path",{d:"M276.725 79.9584L259.767 88.0992L261.994 96.9515C266.293 114.046 267.434 131.855 265.354 149.405V149.405L277.753 152.14L288.03 124.461L284.433 92.9837L276.725 79.9584Z",fill:"#E70909"}),p.a.createElement("path",{d:"M309.998 120.934C298.857 120.934 289.777 129.488 289.336 140.2H330.661C330.22 129.488 321.14 120.934 309.998 120.934Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M301.325 122.78C300.745 74.4244 274.67 78.873 274.67 78.873C274.67 78.873 275.157 93.9244 275.392 94.3925C292.008 127.596 264.585 166.522 229.678 159.361C229.02 159.226 228.387 159.089 227.781 158.95C223.358 157.975 219.453 155.257 216.86 151.349C214.267 147.441 213.181 142.636 213.822 137.913C217.261 108.749 200.158 109.265 200.158 109.265H175.15L162.163 96.9206C161.704 96.4849 161.152 96.1744 160.553 96.0163C159.955 95.8582 159.329 95.8573 158.73 96.0137C158.132 96.1701 157.578 96.4791 157.119 96.9135C156.659 97.348 156.308 97.8947 156.094 98.5059L154.424 103.295C154.424 103.295 129.758 106.009 131.813 131.517H139.439C139.421 132.242 139.448 132.967 139.521 133.688L196.433 133.199C199.769 133.17 202.714 136.025 202.728 139.549C202.731 140.406 202.571 141.256 202.256 142.047C201.941 142.838 201.479 143.553 200.896 144.151C200.313 144.749 199.623 145.216 198.865 145.525C198.107 145.834 197.299 145.979 196.487 145.951L187.311 145.628C184.485 158.924 191.422 167.879 199.066 173.51C206.263 178.734 214.803 181.504 223.536 181.447H248.462C280.836 181.447 286.489 152.683 286.489 152.683C303.447 145.085 301.325 122.78 301.325 122.78Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M308.457 197.186C324.421 197.186 337.362 183.518 337.362 166.658C337.362 149.798 324.421 136.13 308.457 136.13C292.493 136.13 279.551 149.798 279.551 166.658C279.551 183.518 292.493 197.186 308.457 197.186Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M308.457 174.14C312.37 174.14 315.541 170.79 315.541 166.658C315.541 162.526 312.37 159.176 308.457 159.176C304.544 159.176 301.372 162.526 301.372 166.658C301.372 170.79 304.544 174.14 308.457 174.14Z",fill:"white"}),p.a.createElement("path",{d:"M162.517 197.186C180.893 197.186 195.79 181.453 195.79 162.045C195.79 142.637 180.893 126.904 162.517 126.904C144.141 126.904 129.244 142.637 129.244 162.045C129.244 181.453 144.141 197.186 162.517 197.186Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M162.517 170.658C167.021 170.658 170.672 166.802 170.672 162.045C170.672 157.288 167.021 153.432 162.517 153.432C158.013 153.432 154.362 157.288 154.362 162.045C154.362 166.802 158.013 170.658 162.517 170.658Z",fill:"white"}),p.a.createElement("path",{d:"M259.816 90.5046L253.714 73.0022C253.396 72.09 253.251 71.1206 253.288 70.1493C253.325 69.178 253.542 68.2239 253.928 67.3414C254.314 66.459 254.861 65.6654 255.537 65.0061C256.213 64.3467 257.006 63.8345 257.87 63.4987L275.362 56.6978C276.882 56.1067 278.497 55.8376 280.115 55.9058C281.733 55.974 283.323 56.3781 284.793 57.0951C286.263 57.8121 287.585 58.8279 288.684 60.0845C289.782 61.3412 290.636 62.8141 291.195 64.4191C291.7 65.8596 291.958 67.3836 291.956 68.9196C291.95 70.8699 291.532 72.7941 290.733 74.5525C289.934 76.3108 288.774 77.8591 287.338 79.0847C286.3 79.9639 285.134 80.6584 283.885 81.1411L259.816 90.5046Z",fill:"#3F3D56"}),p.a.createElement("path",{d:"M291.699 68.9194C291.698 70.83 291.291 72.7159 290.508 74.4385C289.726 76.161 288.588 77.6763 287.177 78.8729C285.014 78.2702 283 77.177 281.277 75.6694C279.554 74.1617 278.162 72.2759 277.199 70.1428C276.235 68.0097 275.723 65.6807 275.698 63.3175C275.673 60.9544 276.136 58.6138 277.054 56.4586C278.817 56.0538 280.643 56.071 282.398 56.5091C284.154 56.9471 285.794 57.7948 287.198 58.9899C288.603 60.185 289.736 61.6972 290.515 63.4155C291.294 65.1338 291.699 67.0144 291.699 68.9194V68.9194Z",fill:"#E70909"}),p.a.createElement("path",{d:"M136.181 135.044C140.154 135.044 143.375 130.914 143.375 125.818C143.375 120.723 140.154 116.592 136.181 116.592C132.208 116.592 128.987 120.723 128.987 125.818C128.987 130.914 132.208 135.044 136.181 135.044Z",fill:"#E70909"}),p.a.createElement("path",{d:"M231.279 158.477H237.579L240.576 141.22L231.278 141.221L231.279 158.477Z",fill:"#FFB8B8"}),p.a.createElement("path",{d:"M229.672 156.305L242.079 156.304H242.079C243.118 156.304 244.146 156.52 245.105 156.94C246.064 157.359 246.936 157.974 247.67 158.75C248.404 159.525 248.987 160.446 249.384 161.459C249.781 162.472 249.986 163.558 249.986 164.654V164.926L229.672 164.927L229.672 156.305Z",fill:"#2F2E41"}),p.a.createElement("path",{d:"M238.591 151.394C238.518 151.394 238.444 151.39 238.37 151.383L229.652 150.713C229.299 150.678 228.959 150.558 228.657 150.363C228.355 150.168 228.1 149.901 227.911 149.585C227.721 149.269 227.604 148.911 227.566 148.539C227.529 148.168 227.572 147.791 227.694 147.44L239.363 119.754C239.446 119.507 239.48 119.244 239.463 118.983C239.445 118.722 239.377 118.467 239.262 118.235C239.147 118 238.986 117.793 238.79 117.629C238.595 117.464 238.368 117.345 238.125 117.28C232.639 115.765 218.561 111.732 206.375 107.012C201.154 104.991 197.866 102.069 196.602 98.3279C194.935 93.3963 197.401 88.8987 197.507 88.71L197.589 88.5621L209.056 89.6629L221.487 90.7797L248.729 106.208C251.012 107.512 252.746 109.676 253.586 112.269C254.426 114.862 254.31 117.694 253.261 120.202L240.702 149.947C240.52 150.377 240.224 150.743 239.849 151C239.475 151.257 239.038 151.394 238.591 151.394Z",fill:"#2F2E41"}),p.a.createElement("path",{d:"M211.05 34.8867C218.021 34.8867 223.671 28.9188 223.671 21.5569C223.671 14.1951 218.021 8.22717 211.05 8.22717C204.08 8.22717 198.429 14.1951 198.429 21.5569C198.429 28.9188 204.08 34.8867 211.05 34.8867Z",fill:"#FFB8B8"}),p.a.createElement("path",{d:"M227.682 160.105H233.982L236.979 142.848L227.681 142.849L227.682 160.105Z",fill:"#FFB8B8"}),p.a.createElement("path",{d:"M226.075 157.933L238.482 157.932H238.482C239.52 157.932 240.549 158.148 241.508 158.568C242.467 158.987 243.339 159.603 244.073 160.378C244.807 161.153 245.39 162.074 245.787 163.087C246.184 164.1 246.389 165.186 246.389 166.283V166.554L226.075 166.555L226.075 157.933Z",fill:"#2F2E41"}),p.a.createElement("path",{d:"M234.994 153.022C234.921 153.022 234.847 153.019 234.773 153.011L226.055 152.341C225.702 152.306 225.362 152.187 225.06 151.991C224.758 151.796 224.503 151.53 224.313 151.213C224.124 150.897 224.006 150.539 223.969 150.168C223.931 149.796 223.975 149.42 224.097 149.069L235.765 121.382C235.849 121.135 235.883 120.873 235.866 120.611C235.848 120.35 235.78 120.095 235.665 119.863C235.55 119.628 235.389 119.421 235.193 119.257C234.997 119.092 234.771 118.973 234.528 118.908C229.042 117.393 214.964 113.36 202.778 108.641C197.557 106.619 194.269 103.697 193.005 99.9561C191.338 95.0244 193.804 90.5269 193.909 90.3382L193.992 90.1903L205.459 91.2911L217.89 92.4078L245.132 107.836C247.415 109.14 249.149 111.304 249.989 113.897C250.829 116.49 250.713 119.323 249.664 121.83L237.104 151.575C236.923 152.006 236.627 152.372 236.252 152.628C235.878 152.885 235.441 153.022 234.994 153.022Z",fill:"#2F2E41"}),p.a.createElement("path",{d:"M214.943 42.4452L201.582 37.5608C201.582 37.5608 193.194 44.3665 197.224 61.2497C199.327 69.9621 198.715 79.1586 195.477 87.4741C195.087 88.5029 194.637 89.5054 194.131 90.476C194.131 90.476 209.033 109.471 222.908 95.3604L217.512 67.9531C217.512 67.9531 225.991 49.772 214.943 42.4452Z",fill:"#E70909"}),p.a.createElement("path",{d:"M212.617 35.34C210.821 32.5003 209.403 28.5628 211.381 25.8609C213.333 23.1939 217.184 23.5868 220.173 22.4067C224.338 20.763 226.753 15.5959 226 10.9685C225.247 6.3411 221.729 2.50511 217.539 0.935552C213.349 -0.63401 208.625 -0.123552 204.521 1.6839C199.47 3.90888 195.138 8.21298 193.321 13.6651C191.504 19.1173 192.475 25.6636 196.244 29.8543C200.285 34.3471 206.627 35.5444 212.494 35.4718",fill:"#2F2E41"}),p.a.createElement("path",{d:"M200.877 11.1171C198.613 13.0632 195.16 12.1988 192.73 10.4908C190.3 8.78286 188.329 6.35082 185.7 5.0117C181.065 2.6509 175.461 4.22029 170.951 6.8353C166.44 9.45031 162.441 13.063 157.677 15.1151C152.912 17.1672 146.832 17.2687 143.224 13.3938C142.336 16.1106 142.264 19.0505 143.016 21.8124C143.769 24.5744 145.31 27.0238 147.429 28.8266C149.549 30.6293 152.143 31.6976 154.859 31.8856C157.574 32.0735 160.278 31.3721 162.602 29.877C167.823 26.5185 170.707 19.4765 176.562 17.6228C179.802 16.597 183.282 17.4232 186.556 18.318C189.831 19.2129 193.246 20.1798 196.551 19.418C199.856 18.6562 202.947 15.5196 202.527 11.9747L200.877 11.1171Z",fill:"#2F2E41"}),p.a.createElement("path",{d:"M272.372 67.998C272.04 67.2212 271.551 66.5307 270.938 65.9752C270.326 65.4197 269.606 65.0127 268.829 64.7829C268.052 64.5531 267.237 64.506 266.44 64.645C265.644 64.7841 264.886 65.1058 264.221 65.5875L215.161 53.9586L214.552 66.6213L262.967 74.0704C263.807 75.198 265.01 75.9609 266.348 76.2144C267.685 76.468 269.064 76.1946 270.223 75.4461C271.383 74.6976 272.242 73.526 272.638 72.1533C273.034 70.7805 272.939 69.3021 272.372 67.998V67.998Z",fill:"#FFB8B8"}),p.a.createElement("path",{d:"M223.763 55.1218L220.769 67.9407C220.684 68.3054 220.525 68.6465 220.304 68.9406C220.082 69.2348 219.804 69.4751 219.487 69.6452C219.17 69.8154 218.821 69.9113 218.466 69.9266C218.111 69.9418 217.756 69.876 217.427 69.7335L205.895 64.7418C204.129 64.2719 202.612 63.0814 201.677 61.4317C200.742 59.782 200.464 57.8078 200.905 55.9423C201.347 54.0767 202.471 52.4723 204.031 51.4809C205.591 50.4896 207.459 50.1924 209.227 50.6545L221.594 51.8932C221.948 51.9288 222.291 52.0446 222.599 52.2326C222.907 52.4207 223.173 52.6767 223.379 52.983C223.585 53.2894 223.725 53.6391 223.792 54.0082C223.858 54.3772 223.848 54.7571 223.763 55.1218V55.1218Z",fill:"#E70909"}),p.a.createElement("path",{d:"M266.705 78.0589C268.691 78.0589 270.302 76.358 270.302 74.2598C270.302 72.1617 268.691 70.4608 266.705 70.4608C264.718 70.4608 263.108 72.1617 263.108 74.2598C263.108 76.358 264.718 78.0589 266.705 78.0589Z",fill:"#E70909"})),p.a.createElement("defs",null,p.a.createElement("clipPath",{id:"clip0"},p.a.createElement("rect",{width:"426",height:"198",fill:"white"})))))}}]),e}(d.Component)),P=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},p.a.createElement("path",{fill:"#ff5500","fill-opacity":"1",d:"M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})))}}]),e}(d.Component),T=n(3),Z=n(115);function F(){var t=Object(f.a)(["\n  background-color: #ff4c3b;\n  white-space: nowrap;\n  color: #080808;\n  font-size: 0.8rem;\n  padding: 0.25rem 5rem;\n  border: none;\n  border-radius: 30px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: #f0f8ff;\n    color: #ff4c3b;\n  }\n"]);return F=function(){return t},t}function z(){var t=Object(f.a)(["\n  font-size: 1rem;\n  display: flex;\n  color: #303030;\n  margin-bottom: 2rem;\n"]);return z=function(){return t},t}function B(){var t=Object(f.a)(["\n  height: 40vh;\n  background-color: #b8cde8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 2rem 1rem;\n  padding: 5rem 3rem;\n"]);return B=function(){return t},t}function H(){var t=Object(f.a)(['\n  display: flex;\n  justify-content: center;\n  font-family: "Playfair Display";\n  color: #333333;\n  font-size: 30px;\n  font-weight: 800;\n  /* margin-bottom: 3rem; */\n  /* margin-top: 3rem; */\n  text-shadow: rgba(black, 0.5) 0 10px 10px;\n']);return H=function(){return t},t}function A(){var t=Object(f.a)(["\n  display: flex;\n  justify-content: centet;\n  /* display: inline-block; */\n  max-width: 150px;\n  padding: 10px 30px;\n  cursor: pointer;\n  background: #ff4c3b;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  border: 1px #fff solid;\n  margin-top: 20px;\n  &:hover {\n    transform: scale(0.98);\n    color: #343a40;\n  }\n"]);return A=function(){return t},t}function V(){var t=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  height: 30vh;\n  width: 80%;\n  margin: 0 auto 25px auto;\n  flex-direction: column;\n  background-color: #fff;\n  color: #333;\n  border-radius: 10px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  padding: 5px 25px 5px 25px;\n"]);return V=function(){return t},t}function D(){var t=Object(f.a)(["\n  position: relative;\n  overflow: visible;\n  /* display: flex; */\n  /* align-items: center; */\n"]);return D=function(){return t},t}function N(){var t=Object(f.a)(["\n  /* height: 4vh; */\n  display: flex;\n  justify-content: center;\n  /* align-items: center; */\n  /* position: relative; */\n  /* overflow: overlay; */\n  overflow: visible;\n  /* z-index: 100; */\n"]);return N=function(){return t},t}function q(){var t=Object(f.a)(["\n  height: 40vh;\n  margin-left: 0;\n  margin-right: 0;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n"]);return q=function(){return t},t}n.d(e,"CardTitle",function(){return _});T.b.div(q(),function(t){return t.imgurl});var I=T.b.div(N()),W=(T.b.div(D()),T.b.div(V())),J=T.b.button(A()),_=T.b.h1(H()),G=(T.b.div(B()),T.b.p(z()),T.b.button(F()),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(l)))).state={loading:!1,error:null,Newlocalities:[],featuredShops:[],appInfo:"",bannerImage1:""},n.fetchAppInfo=Object(o.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loading:!0}),C.a.get(y.z).then(function(t){n.setState({appInfo:t.data[0],loading:!1})}).catch(function(t){n.setState({error:t,loading:!1})});case 2:case"end":return t.stop()}},t,this)})),n.fetchFeautredShops=Object(o.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loading:!0}),C.a.get(y.G).then(function(t){n.setState({featuredShops:t.data,loading:!1})}).catch(function(t){n.setState({error:t,loading:!1})});case 2:case"end":return t.stop()}},t,this)})),n.fetchNewPlaces=Object(o.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loading:!0}),C.a.get(y.J).then(function(t){n.setState({Newlocalities:t.data,loading:!1})}).catch(function(t){n.setState({error:t,loading:!1})});case 2:case"end":return t.stop()}},t,this)})),n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){document.getElementById("color").setAttribute("href","#"),this.fetchAppInfo(),this.fetchNewPlaces(),this.fetchFeautredShops()}},{key:"render",value:function(){var t=this.state,e=(t.Newlocalities,t.appInfo,this.state.featuredShops,this.props.user);return e.user&&void 0!==e.user.place&&0!==e.user.place?p.a.createElement(m.a,{to:"".concat("","/places/").concat(e.user.place)}):p.a.createElement(p.a.Fragment,null,this.state.loading?p.a.createElement(Z.a,{loading:!0}):p.a.createElement(p.a.Fragment,null,p.a.createElement(I,null,p.a.createElement(M,null)),p.a.createElement(P,null),p.a.createElement(W,null,"Local Dukans helps your locality comes online! To find your local shops, please add your address."," ",p.a.createElement(J,null,"Add Address")),p.a.createElement(v.default,null)))}}]),e}(d.Component));e.default=Object(g.connect)(function(t){return{user:t.user}})(G)}}]);
//# sourceMappingURL=10.9c8aa39a.chunk.js.map