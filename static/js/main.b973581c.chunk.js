(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a,r,c,i,l,o,s=n(1),u=n.n(s),d=n(9),b=n.n(d),m=n(4),j=n(5),h=n(7),p=n(6),f=n(2),x=n(3),O=x.a.form(a||(a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px black solid;\n  padding: 30px;\n  width: 300px;\n"]))),g=x.a.label(r||(r=Object(f.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  flex-direction: column;\n"]))),y=n(0),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.HandleNameInput=function(t){e.setState({name:t.target.value})},e.HandleNumberInput=function(t){e.setState({number:t.target.value})},e.FormSubmit=function(t){var n=e.state,a=n.name,r=n.number;t.preventDefault(),e.props.onSubmit(a,r),e.setState({name:"",number:""})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(y.jsxs)(O,{onSubmit:this.FormSubmit,children:[Object(y.jsxs)(g,{children:["Name",Object(y.jsx)("input",{type:"text",name:"name",value:t,onChange:this.HandleNameInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(y.jsxs)(g,{children:["Number",Object(y.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.HandleNumberInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(y.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(u.a.Component),C=x.a.label(c||(c=Object(f.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 300px;\n  padding-left: 30px;\n  padding-right: 30px;\n"]))),k=function(e){var t=e.onChangeFilter,n=e.filter;return Object(y.jsxs)(C,{children:["Find contacts by name",Object(y.jsx)("input",{type:"text",value:n,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},S=x.a.button(i||(i=Object(f.a)(["\n  margin-left: 10px;\n  height: 30px;\n  display: inline-block;\n"]))),A=x.a.li(l||(l=Object(f.a)(["\n  align-items: center;\n  list-style-type: circle;\n  list-style-color: black;\n"]))),w=x.a.p(o||(o=Object(f.a)(["\n  display: inline-block;\n"]))),H=function(e){var t=e.contacts,n=e.filter,a=e.onClickDelete,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.length>0&&Object(y.jsx)("ul",{children:r.map((function(e){return Object(y.jsxs)(A,{children:[Object(y.jsxs)(w,{children:[e.name,":",e.number]}),Object(y.jsx)(S,{id:e.id,type:"button",onClick:a,children:"Delete"})]},e.id)}))})},z=n(22),F=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.HandleSearchContactByName=function(t){e.setState({filter:t.target.value})},e.HandleFormSubmit=function(t,n){var a=e.state.contacts;a.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert(t+" is already in contacts."):a.push({name:t,id:Object(z.a)(),number:n}),e.setState({contacts:a})},e.HandleClickDelete=function(t){var n=e.state.contacts;n.forEach((function(e,a){return e.id===t.target.id&&n.splice(a,1)})),e.setState({contacts:n})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)(v,{contacts:t,onSubmit:this.HandleFormSubmit}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(k,{onChangeFilter:this.HandleSearchContactByName,filter:n}),Object(y.jsx)(H,{filter:n,contacts:t,onClickDelete:this.HandleClickDelete})]})}}]),n}(u.a.Component);b.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b973581c.chunk.js.map