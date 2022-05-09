(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{1646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,r=6e4,i=36e5,s=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:c,days:s,hours:i,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof p},f=function(t,e,n){return new p(t,n,e.$l)},h=function(t){return e.p(t)+"s"},w=function(t){return t<0},m=function(t){return w(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},x=function(t,e){return t?w(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},p=function(){function w(t,e,n){var r=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*l[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){r.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var s=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=s[0],this.$d.months=s[1],this.$d.weeks=s[2],this.$d.days=s[3],this.$d.hours=s[4],this.$d.minutes=s[5],this.$d.seconds=s[6],this.calMilliseconds(),this}}return this}var v=w.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/s),t%=s,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/r),t%=r,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=x(this.$d.years,"Y"),e=x(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=x(n,"D"),i=x(this.$d.hours,"H"),s=x(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=x(o,"S"),c=t.negative||e.negative||r.negative||i.negative||s.negative||a.negative,u=i.format||s.format||a.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+r.format+u+i.format+s.format+a.format;return"P"===l||"-P"===l?"P0D":l},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(r[t])}))},v.as=function(t){return this.$ms/l[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/l[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var r;return r=e?t*l[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+r*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},w}();return function(n,r,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=d;var s=r.prototype.add,o=r.prototype.subtract;r.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),s.bind(this)(t,e)},r.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},3407:function(t,e,n){"use strict";n.d(e,{Ph:function(){return a},oH:function(){return c},KM:function(){return u}});var r=n(5893),i=n(7294),s=n(1898),o=n.n(s),a=function(t){var e=t.options,n=t.onChange,s=(0,i.useState)(""),a=s[0],c=s[1];(0,i.useEffect)((function(){var t=e.length>0?e[0].value:"";c(t)}),[e]);return(0,r.jsx)("div",{className:o().select,children:(0,r.jsx)("select",{value:a,onChange:function(t){c(t.target.value),n(t)},children:e.map((function(t){var e=t.value,n=t.name;return(0,r.jsx)("option",{value:e,children:n},e)}))})})},c=function(t){var e=t.defaultValue,n=void 0===e?"":e,i=t.placeholder,s=void 0===i?"":i,o=t.onChange;return(0,r.jsx)("input",{type:"text",className:"tw-w-full tw-h-10 tw-block tw-py-3 tw-px-4 tw-leading-4 tw-rounded-md tw-text-xs tw-bg-gray-light",value:n,onChange:o,placeholder:s})},u=function(t){var e=t.text,n=void 0===e?"":e,s=t.colorStyle,o=void 0===s?"green":s,a=t.isDisabled,c=void 0!==a&&a,u=t.onClick,l=void 0===u?function(){}:u,d=(0,i.useMemo)((function(){switch(o){case"red":return"tw-bg-red desktop:hover:tw-bg-wine";case"green-dark":return"tw-bg-green-dark desktop:hover:tw-bg-green";default:return"tw-bg-green desktop:hover:tw-bg-green-dark"}}),[o]);return(0,r.jsx)("button",{type:"button",className:"tw-min-w-105 tw-py-2 tw-px-5 tw-mx-1.5 tw-inline-block tw-text-sm tw-text-center tw-text-white tw-rounded-lg tw-leading-6 ".concat(c?"tw-bg-gray-dark tw-cursor-not-allowed":d),onClick:l,title:n,children:n})}},1370:function(t,e,n){"use strict";var r=n(5893),i=n(7294),s=n(9704),o=n(4586),a=n(5369),c="tw-py-2.5 tw-px-4 tw-leading-relaxed tw-align-middle tw-text-center tw-border tw-border-gray-light tw-border-solid tw-text-xs";e.Z=function(t){var e=t.scoreList,n=void 0===e?[]:e,u=(0,s.v9)((function(t){return t.collection.words})),l=(0,i.useMemo)((function(){return n.map((function(t){var e=t.id,n=t.answer,i=t.solution,s=t.result,l=(0,o.Z)(),d=u.find((function(t){return t.id===e}));return(0,r.jsx)(r.Fragment,{children:d?(0,r.jsxs)("tr",{className:"tw-bg-white",children:[(0,r.jsx)("td",{className:c,children:!0===s?(0,r.jsx)("div",{className:"tw-text-center before-font-material before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-content-['\\e86c'] before:tw-text-green-light"}):(0,r.jsx)("div",{className:"tw-text-center before-font-material before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-content-['\\e5c9'] before:tw-text-red"})}),(0,r.jsx)("td",{className:c,children:(0,r.jsx)("div",{className:"tw-min-w-200 tw-m-auto tw-whitespace-normal tablet:tw-min-w-0 tablet:tw-max-w-xs",children:(0,r.jsx)(a.Z,{id:e,wordsList:d.zh,partsList:d.parts})})}),(0,r.jsx)("td",{className:c,children:(0,r.jsx)("span",{className:!s&&n?"tw-text-red":"",children:""===n?"-":n})}),(0,r.jsx)("td",{className:c,children:(0,r.jsx)("span",{children:i})})]},l):(0,r.jsx)(r.Fragment,{})})}))}),[n,u]);return(0,r.jsx)("div",{className:"tw-w-full tw-overflow-x-auto tw-overflow-y-hidden tw-rounded-lg",children:(0,r.jsxs)("table",{className:"tw-w-full tw-whitespace-nowrap",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"tw-bg-green",children:[(0,r.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u6210\u7e3e"}),(0,r.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u984c\u76ee"}),(0,r.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u4f60\u7684\u7b54\u6848"}),(0,r.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u6b63\u78ba\u7b54\u6848"})]})}),(0,r.jsx)("tbody",{children:l})]})})}},5369:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.id,n=t.wordsList,i=t.partsList,s=t.hasBrackets,o=void 0!==s&&s,a=t.hasTextCenter,c=void 0!==a&&a,u=t.hasSpeechButton,l=void 0!==u&&u,d=t.onSpeech,f=void 0===d?function(){}:d;return(0,r.jsx)(r.Fragment,{children:n.map((function(t,n){var s="".concat(e,"_zh-").concat(n);return(0,r.jsxs)("div",{className:c?"tw-flex tw-justify-center tw-items-start":"",children:[l&&0===n&&(0,r.jsx)("button",{type:"button","aria-label":"speech",className:"tw-w-8 tw-h-8 tw-inline-block tw-align-top tw-mr-1 tw-leading-8 before-font-material before:tw-content-['\\e050'] before:tw-block before:tw-leading-8",onClick:function(t){t.preventDefault(),t.stopPropagation(),f()}}),(0,r.jsxs)("span",{className:"tw-mr-2.5 tw-font-bold",children:[o&&"(",i[n],".",o&&")"]}),(0,r.jsx)("span",{children:t})]},s)}))})}},2425:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var r=n(5893),i=n(1163),s=n(7294),o=n(9704),a=n(1385),c=n(7484),u=n.n(c),l=n(1646),d=n.n(l),f=n(3407),h=n(1370),w=n(4977),m=n(5369),v=n(3347),x=n(9576),p=function(t){var e=t.currentIndex,n=t.wordItem,a=t.setAnswer,c=(0,i.useRouter)(),u=(0,o.I0)(),l=(0,v.Z)(),d=(0,o.v9)((function(t){return t.collection.favorites})),h=(0,o.v9)((function(t){return t.exam})).examGuardAlert,p=(0,s.useState)(""),g=p[0],b=p[1],y=(0,s.useState)(!1),j=y[0],$=y[1],k=(0,s.useState)(!1),S=k[0],N=k[1],M=n.en,C=n.zh,E=n.parts,R=n.id;return(0,s.useEffect)((function(){var t=new Set(d);N(t.has(n))}),[d]),(0,s.useEffect)((function(){b("")}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"tw-flex tw-items-center tw-justify-between tw-mb-4",children:[(0,r.jsxs)("div",{className:"tw-text-md tw-text-wine tw-leading-7",children:["\u7b2c"," ",e+1," ","\u984c"]}),(0,r.jsx)("button",{type:"button",onClick:function(){return $(!0)},className:"tw-flex tw-items-center tw-text-xs tw-text-green-dark desktop:hover:tw-text-green before-font-material before:tw-content-['\\e15e'] before:tw-block before:tw-mr-1",children:"\u96e2\u958b\u6e2c\u9a57"})]}),(0,r.jsx)("div",{className:"tw-mb-2",children:(0,r.jsx)(f.oH,{defaultValue:g,onChange:function(t){var e=t.target.value;b(e.toLowerCase())},placeholder:"\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u82f1\u6587\u55ae\u5b57"})}),(0,r.jsxs)("div",{className:"tw-relative tw-overflow-hidden tw-leading-7 tw-mb-4 tw-text-sm tw-text-black",children:[(0,r.jsxs)("div",{className:"tw-flex tw-items-center",children:[(0,r.jsx)("button",{type:"button","aria-label":"speech",className:"tw-w-7 tw-h-7 before-font-material before:tw-content-['\\e050'] before:tw-block before:tw-leading-7",onClick:function(){return l(M)}}),(0,r.jsx)("button",{type:"button","aria-label":"favorite-button",className:"favorite-button before-icon-star tw-w-7 tw-h-7 before:tw-leading-7 ".concat(S?"tw-text-yellow-dark":"tw-text-gray/60"),onClick:function(t){t.preventDefault(),t.stopPropagation(),u(S?(0,x.qX)(R):(0,x.wF)(R))}})]}),(0,r.jsx)("div",{className:"tw-pl-2 tw-leading-7 tw-text-xs tablet:tw-text-sm",children:(0,r.jsx)(m.Z,{id:R,wordsList:C,partsList:E})})]}),(0,r.jsxs)("div",{className:"tw-flex tw-justify-center tw-mt-6",children:[(0,r.jsx)(f.KM,{text:"\u9001\u51fa",isDisabled:!(""!==g.trim()),onClick:function(){var t=g.trim();""!==t&&a({id:R,answer:t,solution:M,result:!(t!==M)})}}),(0,r.jsx)(f.KM,{text:"\u7565\u904e",onClick:function(){a({id:R,answer:"",solution:M,result:!1})}})]})]}),(0,r.jsx)(w.Z,{show:j,title:h.title,content:h.content,confirmText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:function(){return c.back()},onCancel:function(){return $(!1)},theme:"warn"})]})},g=n(3351),b=n(7554),y=n(3235),j=function(){var t=(0,o.v9)((function(t){return t.collection.words})),e=(0,o.v9)((function(t){return t.daily.dailyWords}));return(0,s.useCallback)((function(n,r){switch(n){case"writed-daily":return(0,a.Z)(e).sort((function(){return Math.random()>.5?-1:1}));case"writed-random":return(0,y.Z)(r,t.length).map((function(e){return t[e]}));default:return[]}}),[t,e])},$=n(347),k=function(t){var e=t.id,n=void 0===e?"writed-random":e,c=t.quantity,l=void 0===c?10:c;u().extend(d());var w=u()(),m=(0,i.useRouter)(),v=(0,o.I0)(),x=j(),y=(0,o.v9)((function(t){return t.exam})),k=y.isExamTesting,S=y.recordCollection,N=(0,s.useState)([]),M=N[0],C=N[1],E=(0,s.useState)([]),R=E[0],_=E[1],Z=(0,s.useState)(!0),A=Z[0],D=Z[1],O=(0,s.useState)(!1),T=O[0],Y=O[1],L=(0,s.useState)(0),H=L[0],I=L[1],P=(0,s.useState)(0),F=P[0],V=P[1],q=(0,s.useState)(""),K=q[0],z=q[1],U=function(){v((0,$.Lf)(!1)),D(!0),Y(!1),I(0),_([]),z(""),C(x(n,l)),V(w.valueOf()),D(!1),v((0,$.Lf)(!0))},W=function(){var t=H+1;t>l-1?(I(0),C([]),Y(!0),v((0,$.Lf)(!1))):I(t)};return(0,s.useEffect)((function(){return U(),function(){v((0,$.Lf)(!1))}}),[]),(0,s.useEffect)((function(){if(T&&R.length===l){var t=w.valueOf(),e=[{id:n,startTime:F,finishTime:t,answerState:(0,a.Z)(R)}].concat((0,a.Z)(S));z(u().duration(t-F).format("HH:mm:ss")),v((0,$.jh)(e))}}),[R,T]),(0,r.jsxs)("div",{children:[A&&(0,r.jsx)("div",{className:"tw-text-center tw-text-green tw-py-8",children:"\u8cc7\u6599\u8f09\u5165\u4e2d..."}),!A&&k&&(0,r.jsx)(p,{currentIndex:H,wordItem:M[H],setAnswer:function(t){_([].concat((0,a.Z)(R),[t])),W()}}),!A&&!k&&T&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"tw-text-wine tw-my-6 tw-text-md tw-text-center",children:(0,g.Z)(n)}),(0,r.jsxs)("div",{className:"tw-w-full tw-mb-2 tw-text-base tw-text-green-dark tw-text-center tw-flex tw-items-center tw-justify-center before-font-material before:tw-content-['\\e8e8'] before:tw-block before:tw-mr-2",children:["\u6211\u7684\u5206\u6578\uff1a",(0,b.Z)(R),"\u5206"]}),(0,r.jsxs)("div",{className:"tw-mb-8 tw-text-center tw-text-xs tw-text-gray-dark",children:["\u4f5c\u7b54\u6642\u9593\uff1a",K]}),(0,r.jsx)(h.Z,{scoreList:R}),(0,r.jsxs)("div",{className:"tw-my-5 tw-flex tw-justify-center",children:[(0,r.jsx)(f.KM,{text:"\u518d\u6b21\u6e2c\u9a57",onClick:U}),(0,r.jsx)(f.KM,{text:"\u96e2\u958b\u6e2c\u9a57",onClick:function(){return m.back()}})]})]})]})},S=function(){var t=(0,i.useRouter)(),e=t.query.id,n=(0,o.I0)(),a=(0,o.v9)((function(t){return t.collection.words})),c=(0,o.v9)((function(t){return t.daily.dailyWords})),u=(0,o.v9)((function(t){return t.exam})).isExamAction;(0,s.useEffect)((function(){return function(){n((0,$.oy)(!1))}}),[]),(0,s.useEffect)((function(){!1===u&&t.push("/quiz")}),[u]);var l=function(){return(0,r.jsx)("div",{className:"tw-py-8 tw-my-4 tw-text-center tw-text-gray",children:"DATA ERROR"})},d=(0,s.useMemo)((function(){if(u&&a.length)switch(e){case"writed-random":return a.length>=10?(0,r.jsx)(k,{id:e,quantity:10}):(0,r.jsx)(l,{});case"writed-daily":return c.length?(0,r.jsx)(k,{id:e,quantity:c.length}):(0,r.jsx)(l,{});default:return(0,r.jsx)(l,{})}return(0,r.jsx)(l,{})}),[e,u,a,c]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"title",children:"\u55ae\u5b57\u6e2c\u9a57"}),(0,r.jsx)("div",{className:"content",children:d})]})}},3351:function(t,e){"use strict";e.Z=function(t){switch(t){case"writed-random":return"\u55ae\u5b57\u586b\u7a7a\u6e2c\u9a57";case"writed-daily":return"\u4eca\u65e5\u55ae\u5b57\u586b\u7a7a\u6e2c\u9a57";default:return""}}},7554:function(t,e,n){"use strict";var r=n(1385);e.Z=function(t){var e=(0,r.Z)(t),n=e.filter((function(t){return!0===t.result})).length/e.length,i=Number.isNaN(n)?0:n;return Math.floor(100*i)}},3347:function(t,e,n){"use strict";var r=n(7294),i=n(5827);e.Z=function(){var t=(0,i.h5)(),e=t.speak,n=t.speaking;return(0,r.useCallback)((function(t){!1===n&&e({text:t,voices:{default:!0,lang:"en",localService:!0,name:"Karen",voiceURI:"Karen"}})}),[e,n])}},8933:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz/[id]",function(){return n(2425)}])},1898:function(t){t.exports={select:"form_select__100yN"}},5827:function(t,e,n){"use strict";var r=n(219);var i=n(4989);function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"h5",{enumerable:!0,get:function(){return s(i).default}})},219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,s=c}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n(7294);var s=function(t,e){var n=(0,i.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));return(0,i.useEffect)((function(){n.current=t}),[t].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))),(0,i.useCallback)((function(t){return(0,n.current)(t)}),[n])};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,o=t.onResult,a=void 0===o?function(){}:o,c=t.onError,u=void 0===c?function(){}:c,l=(0,i.useRef)(null),d=(0,i.useState)(!1),f=r(d,2),h=f[0],w=f[1],m=(0,i.useState)(!1),v=r(m,2),x=v[0],p=v[1],g=function(t){var e=Array.from(t.results).map((function(t){return t[0]})).map((function(t){return t.transcript})).join("");a(e)},b=function(t){"not-allowed"===t.error&&(l.current.onend=function(){},w(!1)),u(t)},y=s((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!h&&x){var e=t.lang,n=void 0===e?"":e,r=t.interimResults,i=void 0===r||r,s=t.continuous,o=void 0!==s&&s,a=t.maxAlternatives,c=void 0===a?1:a,u=t.grammars;w(!0),l.current.lang=n,l.current.interimResults=i,l.current.onresult=g,l.current.onerror=b,l.current.continuous=o,l.current.maxAlternatives=c,u&&(l.current.grammars=u),l.current.onend=function(){return l.current.start()},l.current.start()}}),[h,x,l]),j=s((function(){h&&x&&(l.current.onresult=function(){},l.current.onend=function(){},l.current.onerror=function(){},w(!1),l.current.stop(),n())}),[h,x,l,n]);return(0,i.useEffect)((function(){"undefined"!==typeof window&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.SpeechRecognition&&(p(!0),l.current=new window.SpeechRecognition))}),[]),{listen:y,listening:h,stop:j,supported:x}}},4989:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,s=c}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n(7294);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,s=(0,i.useState)([]),o=r(s,2),a=o[0],c=o[1],u=(0,i.useState)(!1),l=r(u,2),d=l[0],f=l[1],h=(0,i.useState)(!1),w=r(h,2),m=w[0],v=w[1],x=function(t){c(t)},p=function(){var t=window.speechSynthesis.getVoices();t.length>0?x(t):window.speechSynthesis.onvoiceschanged=function(e){t=e.target.getVoices(),x(t)}},g=function(){f(!1),n()};(0,i.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(v(!0),p())}),[]);var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.voice,n=void 0===e?null:e,r=t.text,i=void 0===r?"":r,s=t.rate,o=void 0===s?1:s,a=t.pitch,c=void 0===a?1:a,u=t.volume,l=void 0===u?1:u;if(m){f(!0);var d=new window.SpeechSynthesisUtterance;d.text=i,d.voice=n,d.onend=g,d.rate=o,d.pitch=c,d.volume=l,window.speechSynthesis.speak(d)}},y=function(){m&&(f(!1),window.speechSynthesis.cancel())};return{supported:m,speak:b,speaking:d,cancel:y,voices:a}}},4586:function(t,e,n){"use strict";var r;n.d(e,{Z:function(){return d}});var i=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"===typeof t&&o.test(t)},c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(t,e,n){var r=(t=t||{}).random||(t.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return l(r)}}},function(t){t.O(0,[774,888,179],(function(){return e=8933,t(t.s=e);var e}));var e=t.O();_N_E=e}]);