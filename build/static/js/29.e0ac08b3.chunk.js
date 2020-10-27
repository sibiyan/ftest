(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{447:function(e,t,a){"use strict";a.r(t);var n=a(66),s=a(123),r=a(32),o=a.n(r),c=a(51),l=a(9),i=a(10),u=a(13),d=a(11),h=a(12),p=a(3),f=a(0),g=a.n(f),m=a(18),b=(a(34),a(253)),O=(a(81),a(258)),S=a(40),C=a.n(S),v=a(251),x=a(248),I=a(17),j=(a(47),a(2)),k=a(6),w=a(15);function D(){var e=Object(p.a)(["\n  display: inline-block;\n  padding: 10px 30px;\n  cursor: pointer;\n  background: #ff4c3b;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  border: 1px #fff solid;\n  &:hover {\n    transform: scale(0.98);\n    color: #343a40;\n  }\n"]);return D=function(){return e},e}function E(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  color: #333;\n  border-radius: 10px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  margin: 10px;\n"]);return E=function(){return e},e}function V(){var e=Object(p.a)(["\n  margin: 20px 30px auto auto;\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return e},e}var y=j.b.div(V()),A=j.b.div(E()),P=(j.b.button(D()),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChangeState=function(e){a.setState({selectedState:e.id},function(){a.loadDistricts()})},a.handleChangeDistrict=function(e){a.setState({selectedDistrict:e.id},function(){a.loadVillages()})},a.handleChangeVillage=function(e){a.setState({selectedVillage:e.id},function(){a.loadPlaces(),console.log(a.state.selectedDistrict)})},a.handleChangePlaces=function(e){a.setState({selectedPlace:e.id},function(){a.loadAreas()})},a.handleChangeArea=function(e){a.setState({selectedArea:e.id})},a.loadStates=Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),w.a.get(k.kb).then(function(e){a.setState({states:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})});case 2:case"end":return e.stop()}},e,this)})),a.loadDistricts=function(){var e=a.state.selectedState;a.setState({loading:!0}),C.a.get(k.D,{params:{stateID:e}}).then(function(e){a.setState({districts:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})})},a.loadVillages=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t=a.state.selectedDistrict,w.a.get(k.mb,{params:{districtID:t}}).then(function(e){a.setState({villages:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})});case 3:case"end":return e.stop()}},e,this)})),a.loadPlaces=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t=a.state.selectedVillage,w.a.get(k.W,{params:{villageID:t}}).then(function(e){a.setState({places:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})});case 3:case"end":return e.stop()}},e,this)})),a.loadAreas=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t=a.state.selectedPlace,w.a.get(k.A,{params:{placeID:t}}).then(function(e){a.setState({aeras:e.data,loading:!1})}).catch(function(e){a.setState({error:e,loading:!1})});case 3:case"end":return e.stop()}},e,this)})),a.handleCreateAddress=function(e){e.preventDefault();var t=a.props.user.user.id;console.log(t);var n=a.state,r=n.form,o=n.selectedArea,c=n.selectedPlace,l=n.selectedVillage,i=n.selectedDistrict,u=n.selectedState;""!==r&&""!==o&&""!==c&&""!==l&&""!==i&&""!==u?w.a.post(k.w,Object(s.a)({},r,{user:t,area:o,place:c,village:l,district:i,state:u})).then(function(e){I.toast.success("Address added succesfully"),a.setState({success:!0})}).catch(function(e){a.setState({error:e}),I.toast.error("Oops there was an error")}):(console.log("else"),I.toast.error("Please provide complete address"))},a.state={aeras:[],places:[],villages:[],districts:[],states:[],selectedArea:"",selectedPlace:"",selectedVillage:"",selectedDistrict:"",selectedState:"",form:{full_address:"",phone_number:""},success:!1,error:null,loading:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadStates()}},{key:"handleChangeB",value:function(e){var t=e.target.name,a=e.target.value;this.setState({form:Object(s.a)({},this.state.form,Object(n.a)({},t,a))})}},{key:"render",value:function(){var e=this.state,t=e.success,a=(e.error,e.loading,e.states),s=e.districts,r=e.villages,o=e.places,c=e.aeras;e.phone_number,e.full_address,e.selectedState;return t?g.a.createElement(b.a,{to:"/addresses"}):this.props.token?g.a.createElement(y,null,g.a.createElement(A,null,g.a.createElement(O.a,{className:"mb-3",onChange:this.handleChangeState,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:a,filterOption:this.customFilter,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select state",menuIsOpen:this.state.menuOpen,isSearchable:!1}),g.a.createElement(O.a,Object(n.a)({className:"mb-3",onChange:this.handleChangeDistrict,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:s,isSearchable:!0,filterOption:this.customFilter,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select district",menuIsOpen:this.state.menuOpen},"isSearchable",!1)),g.a.createElement(O.a,{className:"mb-3",onChange:this.handleChangeVillage,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:r,isSearchable:!0,filterOption:this.customFilter,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select village",menuIsOpen:this.state.menuOpen}),g.a.createElement(O.a,{className:"mb-3",onChange:this.handleChangePlaces,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:o,isSearchable:!0,filterOption:this.customFilter,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select your locality",menuIsOpen:this.state.menuOpen}),g.a.createElement(O.a,{className:"mb-3",onChange:this.handleChangeArea,getOptionLabel:function(e){return"".concat(e.name)},getOptionValue:function(e){return"".concat(e)},options:c,isSearchable:!0,filterOption:this.customFilter,onInputChange:this.handleInputChange,noOptionsMessage:function(){return null},placeholder:"Select area",menuIsOpen:this.state.menuOpen}),g.a.createElement(v.a,null,g.a.createElement(v.a.Group,{controlId:"formGridAddress1"},g.a.createElement(v.a.Control,{type:"text",name:"phone_number",placeholder:"Phone Number",ClassName:"mb-3",defaultValue:this.state.phone_number,onChange:this.handleChangeB.bind(this)})),g.a.createElement(v.a.Group,{controlId:"exampleForm.ControlTextarea1"},g.a.createElement(v.a.Control,{as:"textarea",type:"text",name:"full_address",placeholder:"Road, House Name ...",ClassName:"mb-3",defaultValue:this.state.form.full_address,onChange:this.handleChangeB.bind(this)})),g.a.createElement(x.a,{variant:"primary",type:"submit",onClick:this.handleCreateAddress},"Submit")))):g.a.createElement(b.a,{to:"/login"})}}]),t}(f.Component));t.default=Object(m.connect)(function(e){return{token:e.auth.token,user:e.user}})(P)}}]);
//# sourceMappingURL=29.e0ac08b3.chunk.js.map