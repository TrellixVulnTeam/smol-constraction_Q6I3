(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{329:function(t,e,n){"use strict";n.r(e);var r=n(330),l=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=l.a},330:function(t,e){},331:function(t,e,n){var content=n(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3f7ae3b1",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n.r(e);var r=n(335),l=n(329);for(var c in l)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(c);n(333);var o=n(2),component=Object(o.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n(331)},334:function(t,e,n){(e=n(9)(!1)).push([t.i,"",""]),t.exports=e},335:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div")},l=[]},336:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6142e8a8",content,!0,{sourceMap:!1})},337:function(t,e,n){var content=n(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4f35e80c",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n.r(e);var r={},l=(n(341),n(2)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"application application_img",attrs:{id:"appli"}},[this._m(0),e("ApplicationForm")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"application-header"},[e("h2",{staticClass:"title"},[this._v("Оставить заявку")]),e("p",{staticClass:"sub-title sub-title_width250"},[this._v("И наш менеджер свяжется с Вами в ближайшее время.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ApplicationForm:n(345).default})},340:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("8c10d7f8",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n(336)},342:function(t,e,n){(e=n(9)(!1)).push([t.i,".application{padding-top:68px;padding-bottom:78px;display:flex;position:relative}@media screen and (max-width:1200px){.application{flex-direction:column}}.application_img{background:url(/img/application.png) no-repeat 52.5rem 100%;background-size:87%}@media screen and (max-width:1200px){.application_img{background:url(/img/application.png) no-repeat 28.5rem 100%;background-size:132%}}.application-header{width:288px}@media screen and (max-width:1200px){.application-header{width:100%;margin-bottom:51px}}@media screen and (max-width:600px){.application-header{margin-bottom:25px}}",""]),t.exports=e},343:function(t,e,n){"use strict";n(337)},344:function(t,e,n){(e=n(9)(!1)).push([t.i,".application-form{display:flex;flex-direction:column;width:484px}@media screen and (max-width:600px){.application-form{width:283px}}",""]),t.exports=e},345:function(t,e,n){"use strict";n.r(e);n(57);var r=n(111),l=n(110),c={data:function(){return{mask:{mask:"+7 000 000-00-00",lazy:!0},name:""}},methods:{send:function(){this.$v.$touch(),this.$v.$invalid?alert("Имя должно быть не мении 4 символов"):console.log(this.name)}},validations:{name:{minLength:Object(l.minLength)(4)}},directives:{imask:r.a}},o=(n(343),n(2)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"application-form",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[n("label",{staticClass:"label label_bottom14",attrs:{for:"name"}},[t._v("Ваше имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Введите своё имя",required:"",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.minLength?t._e():n("span",{staticClass:"error-input"},[t._v("Имя дожно быть не менее "+t._s(t.$v.name.$params.minLength.min)+"х символов.")]),n("label",{staticClass:"label label_bottom14",attrs:{for:"phone"}},[t._v("Ваш номер телефона")]),n("input",{directives:[{name:"imask",rawName:"v-imask",value:t.mask,expression:"mask"}],staticClass:"input",attrs:{type:"phone",placeholder:"+7 (___) ___-__-__",required:"",id:"phone"}}),n("recaptcha"),n("p",{staticClass:"policity"},[t._v("Нажимая кнопку «Заказать звонок» вы соглашаетесь с правилами "),n("nuxt-link",{staticClass:"underlined-text",attrs:{to:"/privacypolicy"}},[t._v("Пользовательского соглашения")])],1),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"button button_radius30 button_color button_padding button_border-green"},[e("span",{staticClass:"button__text"},[this._v("Заказать звонок")])])}],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n(340)},350:function(t,e,n){(e=n(9)(!1)).push([t.i,".bread-crums{font-weight:300;font-size:16px;line-height:26px;color:#333;transform:translateY(50px)}.bread-crums-items{display:flex;margin-left:0;padding-left:0}.bread-crums-item{list-style-type:square;margin-right:28px}.bread-crums-item::marker{color:#000}.bread-crums-item:first-child{list-style-type:none}.bread-crums-link_active{opacity:.5}",""]),t.exports=e},351:function(t,e,n){"use strict";n.r(e);var r={},l=(n(349),n(2)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bread-crums"},[e("ul",{staticClass:"bread-crums-items"},[e("li",{staticClass:"bread-crums-item"},[e("nuxt-link",{staticClass:"bread-crums-link",attrs:{to:"/"}},[this._v("Главная")])],1),e("li",{staticClass:"bread-crums-item"},[e("nuxt-link",{staticClass:"bread-crums-link bread-crums-link_active",attrs:{to:"/about"}},[this._v("О компании")])],1)])])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,n){var content=n(550);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3537c8ab",content,!0,{sourceMap:!1})},440:function(t,e,n){var content=n(552);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("1dbbff58",content,!0,{sourceMap:!1})},549:function(t,e,n){"use strict";n(439)},550:function(t,e,n){(e=n(9)(!1)).push([t.i,".services{margin-top:91px}.services-wrapper{display:flex;flex-wrap:wrap;margin-top:60px;justify-content:space-between}.services-container{margin-bottom:40px}",""]),t.exports=e},551:function(t,e,n){"use strict";n(440)},552:function(t,e,n){(e=n(9)(!1)).push([t.i,".services-block{background:#f8f8ff;border:1px solid #f8f8ff;box-sizing:border-box;border-radius:0 30px;max-width:348px;height:306px;padding:45px 30px 53px;position:relative}@media screen and (max-width:1200px){.services-block{width:329px}}@media screen and (max-width:600px){.services-block{width:285px;padding:40px 0 45px 30px;display:flex;flex-direction:column;justify-content:center}}.services-block:hover .claster{opacity:1}.services-block .title{color:#000}.services-block__descr{font-weight:300;font-size:16px;line-height:26px;color:#292929;margin:15px 0 20px}",""]),t.exports=e},622:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{servicesItems:[{title:"Строительство промышленной недвижимости",descr:"Все объекты тщательно проверяются, чтобы минимизировать риски наших клиентов."},{title:"Строительство промышленной недвижимости",descr:"Проект строительства доходных домов — виды и особенности"},{title:"Строительство жилой недвижимости",descr:"Строительство мелких и крупных жилых комплексов, частных домов"},{title:"Ремонт промышленной недвижимости",descr:"«Эксклюзивные» объекты и условия, наиболее выгодные предложения"},{title:"Ремонт коммерческой недвижимости",descr:"Ремонт коммерческой недвижимости достаточно похож на отделку жилья"},{title:"Ремонт жилой недвижимости",descr:"Ремонтные работы, которые направлены на улучшение общего состояния квартиры"}]}}},l=(n(549),n(2)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services"},[e("h1",{staticClass:"title"},[this._v("Услуги")]),e("div",{staticClass:"services-wrapper"},this._l(this.servicesItems,(function(t,i){return e("div",{key:i,staticClass:"services-container"},[e("ServicesPageBlock",{attrs:{serv:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ServicesPageBlock:n(643).default})},643:function(t,e,n){"use strict";n.r(e);var r={props:["serv"]},l=(n(551),n(2)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services-block"},[e("div",{staticClass:"claster"}),e("h5",{staticClass:"title"},[this._v(this._s(this.serv.title))]),e("p",{staticClass:"services-block__descr"},[this._v(this._s(this.serv.descr))]),e("nuxt-link",{staticClass:"details",attrs:{to:"/typicalservice"}},[this._v("подробней"),e("img",{staticClass:"details__img",attrs:{src:"arrowGreen.svg"}})])],1)}),[],!1,null,null,null);e.default=component.exports},669:function(t,e,n){"use strict";n.r(e);var r={layout:"second"},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"container container_full"},[e("BreadCrums"),e("ServicesPage")],1),e("div",{staticClass:"container container_no-right"},[e("Application")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BreadCrums:n(351).default,ServicesPage:n(622).default,Application:n(338).default,Section:n(332).default})}}]);