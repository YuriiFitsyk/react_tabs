(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=(n(12),n(3)),l=n(4),s=n(6),u=n(5),b=(n(13),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={index:0},t.onTabSelected=function(e){t.setState({index:e})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state.index;return c.a.createElement(c.a.Fragment,null,e.map((function(e,a){return c.a.createElement("button",{type:"button",className:"Tab__tab\n              ".concat(n===a?"active":"","\n            "),key:e.title,onClick:function(){t.onTabSelected(a)}},e.title)})),c.a.createElement("div",{className:"Tab__content"},e[this.state.index].content))}}]),n}(c.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(b,{tabs:m}))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e3ece0a6.chunk.js.map