(this["webpackJsonpre-events-state-filter"]=this["webpackJsonpre-events-state-filter"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),n=s(3),i=s.n(n),a=(s(12),s(13),s(4)),c=s(5),g=s(7),m=s(6),l=s(0);function u(e){var t=e.projects;return Object(l.jsx)("div",{className:"project-list",children:t.map((function(e){return Object(l.jsx)("img",{src:e.img,alt:e.category},e.id)}))})}function h(e){var t=e.btn,s=e.index,r=e.selected,o=e.onSelectFilter,n=!1;return t===r&&(n=!0),Object(l.jsx)("button",{className:n?"done btn":"btn",onClick:function(){return o(t)},children:t},s)}function p(e){var t=e.filters,s=e.selected;return Object(l.jsx)("div",{className:"toolbar",children:t.map((function(t,r){return Object(l.jsx)(h,{btn:t,index:r,selected:s,onSelectFilter:e.onSelectFilter},r)}))})}var b=function(e){Object(g.a)(s,e);var t=Object(m.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).filters=["All","Websites","Flayers","Business Cards"],r.state={selected:"All"},r}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{filters:this.filters,selected:this.state.selected,onSelectFilter:function(t){return e.setState({selected:t})}}),Object(l.jsx)(u,{projects:"All"===this.state.selected?this.props.list:this.props.list.filter((function(t){return t.category===e.state.selected}))})]})}}]),s}(o.a.Component),d=[{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",category:"Flayers"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",category:"Flayers"}];var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{list:d})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),r(e),o(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.0b4ee8c5.chunk.js.map