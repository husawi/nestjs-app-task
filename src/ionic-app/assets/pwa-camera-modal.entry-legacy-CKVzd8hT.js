System.register(["./index-legacy-DuUMURFy.js"],(function(t,e){"use strict";var n,r,i;return{setters:[t=>{n=t.h,r=t.r,i=t.c}],execute:function(){var e=function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function c(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?n(t.value):i(t.value).then(c,a)}u((r=r.apply(t,e||[])).next())}))},o=function(t,e){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){c.label=a[1];break}if(6===a[0]&&c.label<i[1]){c.label=i[1],i=a;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(a);break}i[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};t("pwa_camera_modal",function(){function t(t){r(this,t),this.onPhoto=i(this,"onPhoto"),this.noDeviceError=i(this,"noDeviceError"),this.facingMode="user",this.hidePicker=!1}return t.prototype.present=function(){return e(this,void 0,void 0,(function(){var t,n=this;return o(this,(function(r){return(t=document.createElement("pwa-camera-modal-instance")).facingMode=this.facingMode,t.hidePicker=this.hidePicker,t.addEventListener("onPhoto",(function(t){return e(n,void 0,void 0,(function(){var e;return o(this,(function(n){return this._modal?(e=t.detail,this.onPhoto.emit(e),[2]):[2]}))}))})),t.addEventListener("noDeviceError",(function(t){return e(n,void 0,void 0,(function(){return o(this,(function(e){return this.noDeviceError.emit(t),[2]}))}))})),document.body.append(t),this._modal=t,[2]}))}))},t.prototype.dismiss=function(){return e(this,void 0,void 0,(function(){return o(this,(function(t){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]}))}))},t.prototype.render=function(){return n("div",null)},t}()).style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}"}}}));
