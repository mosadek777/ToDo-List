"use strict";(self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[]).push([[762],{1762:function(t,l,e){e.r(l),e.d(l,{default:function(){return h}});var o=e(3396),n=e(7139),a=e(4870);const s={class:"my-todos"},d={class:"container my-5 text-capitalize"},u={class:"todos-table"},i={key:0,class:"mx-auto shadow p-4 rounded-4 table"},c=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Text"),(0,o._)("th",null,"From"),(0,o._)("th",null,"To"),(0,o._)("th",null,"Created At"),(0,o._)("th",null,"completed"),(0,o._)("th",null,"deleted")])],-1),r=["onClick"],_=["onClick"],b={key:1,class:"lh-lg text-capitalize text-bg-danger"};var g={__name:"ShowTodos",setup(t){const l=(0,a.iH)([]),e=()=>{localStorage.getItem("todos")&&(l.value=JSON.parse(localStorage.getItem("todos")),console.log(l.value))},g=t=>{l.value.splice(t,1),h()},w=t=>{t.isCompleted=!t.isCompleted,h()},h=()=>{localStorage.setItem("todos",JSON.stringify(l.value))};return(0,o.bv)((()=>{e()})),(t,e)=>((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",d,[(0,o._)("div",u,[l.value.length?((0,o.wg)(),(0,o.iD)("table",i,[c,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.value,((t,l)=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id,style:(0,n.j5)(""+(t.isCompleted?"--bs-table-bg:green ; --bs-body-color:white":"--bs-table-bg:transparent"))},[(0,o._)("td",null,(0,n.zw)(t.text),1),(0,o._)("td",null,(0,n.zw)(t.from),1),(0,o._)("td",null,(0,n.zw)(t.to),1),(0,o._)("td",null,(0,n.zw)(new Date(t.createdAt).toLocaleDateString()),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-warning",onClick:l=>w(t)},(0,n.zw)(t.isCompleted?"Incompleted":"Completed"),9,r)]),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-danger",onClick:t=>g(l)}," deleted ",8,_)])],4)))),128))])])):((0,o.wg)(),(0,o.iD)("h2",b," No todos to show "))])])]))}};const w=g;var h=w}}]);
//# sourceMappingURL=762.3e842c29.js.map