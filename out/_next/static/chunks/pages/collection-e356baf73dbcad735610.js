(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{1496:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return z}});var r,a=e(5893),o=e(1385),i=e(7294),c=e(9704),u=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(n){return"string"===typeof n&&l.test(n)},f=[],p=0;p<256;++p)f.push((p+256).toString(16).substr(1));var m=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(f[n[t+0]]+f[n[t+1]]+f[n[t+2]]+f[n[t+3]]+"-"+f[n[t+4]]+f[n[t+5]]+"-"+f[n[t+6]]+f[n[t+7]]+"-"+f[n[t+8]]+f[n[t+9]]+"-"+f[n[t+10]]+f[n[t+11]]+f[n[t+12]]+f[n[t+13]]+f[n[t+14]]+f[n[t+15]]).toLowerCase();if(!d(e))throw TypeError("Stringified UUID is invalid");return e};var v=function(n,t,e){var r=(n=n||{}).random||(n.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){e=e||0;for(var a=0;a<16;++a)t[e+a]=r[a];return t}return m(r)},w=e(3935),h=e(923),b=e(8655),_=e.n(b),x=function(n){var t=n.children,e=n.show,r=n.onClose,o=(0,i.useState)(!1),c=o[0],u=o[1],s=(0,i.useRef)(null);(0,i.useEffect)((function(){u(!0)}),[]),(0,i.useEffect)((function(){!0===e?document.documentElement.classList.add("is-fixed"):document.documentElement.classList.remove("is-fixed")}),[e]);var l=function(n){n.preventDefault(),r()},d=(0,a.jsx)(h.Z,{in:e,timeout:400,classNames:"fade",nodeRef:s,unmountOnExit:!0,appear:!0,children:(0,a.jsx)("div",{ref:s,className:_()["popup-desktop"],"aria-hidden":"true",onClick:l,children:(0,a.jsxs)("div",{className:_().roof,"aria-hidden":"true",onClick:function(n){n.stopPropagation()},children:[(0,a.jsxs)("button",{type:"button","aria-label":"close-popup",className:_()["close-btn"],onClick:l,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)("div",{className:_().content,children:t})]})})});return!0===c?w.createPortal(d,document.getElementById("modal-root-popup")):null},y=e(3347),g=e(7175),j=e.n(g),N=e(3385),S=e.n(N),E=function(n){var t=n.id,e=n.wordData,r=(0,y.Z)(),o=e.en,i=e.zh,c=e.parts;return(0,a.jsxs)("div",{className:S().roof,children:[(0,a.jsx)("div",{className:S().title,children:o}),(0,a.jsxs)("div",{className:S().body,children:[(0,a.jsx)("div",{className:S().feature,children:(0,a.jsx)("button",{type:"button","aria-label":"speech",className:j()["speech-btn"],onClick:function(){return r(o)}})}),i.map((function(n,e){var r="".concat(t,"_zh-").concat(e);return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:S().part,children:c[e]}),(0,a.jsx)("span",{children:n})]},r)}))]})]})},C=e(1606),k=e.n(C),R=function(n){var t=n.wordData,e=(0,i.useState)(!1),r=e[0],o=e[1],c=t.id,u=t.en,s=t.zh,l=t.parts;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:k().roof,"aria-hidden":"true",onClick:function(){return o(!0)},children:[(0,a.jsx)("div",{className:k().title,children:u}),s.map((function(n,t){var e="".concat(c,"_zh-").concat(t);return(0,a.jsxs)("div",{className:k().description,children:[(0,a.jsx)("span",{className:k().part,children:l[t]}),(0,a.jsx)("span",{children:n})]},e)}))]}),(0,a.jsx)(x,{show:r,onClose:function(){return o(!1)},children:(0,a.jsx)(E,{id:v(),wordData:t})})]})},O=e(1898),D=e.n(O),A=function(n){var t=n.options,e=n.onChange,r=(0,i.useState)(""),o=r[0],c=r[1];(0,i.useEffect)((function(){var n=t.length>0?t[0].value:"";c(n)}),[t]);return(0,a.jsx)("div",{className:D().select,children:(0,a.jsx)("select",{value:o,onChange:function(n){c(n.target.value),e(n)},children:t.map((function(n){var t=n.value,e=n.name;return(0,a.jsx)("option",{value:t,children:e},t)}))})})},L=e(6670),V=e(1858),I=e(39),z=function(){var n=V.partsOptionsData,t=I.alphabetOptionsData,e=(0,L.Z)(),r=(0,c.v9)((function(n){return n.collection.words})),u=(0,c.v9)((function(n){return n.collection.parts})),s=((0,c.v9)((function(n){return n.common})).scrollValue,(0,i.useState)([])),l=s[0],d=s[1],f=(0,i.useState)(!1),p=f[0],m=f[1],v=(0,i.useState)("all"),w=v[0],h=v[1],b=(0,i.useState)([]),_=b[0],x=b[1],y=(0,i.useState)("all"),g=y[0],N=y[1],S=(0,i.useState)([]),E=S[0],C=S[1],k=(0,i.useState)(!1),O=k[0],D=k[1],z=(0,i.useCallback)((function(){var n=(0,o.Z)(r).filter((function(n){var t=n.alphabet,e=n.parts;return"all"===g&&"all"===w||("all"===g?e.includes(w):"all"===w?t===g:t===g&&e.includes(w))})).sort((function(n,t){var e=n.en.toLocaleLowerCase(),r=t.en.toLocaleLowerCase();return e>r?!1===O?1:-1:e<r?!1===O?-1:1:0}));d(n)}),[r,w,g,O]);(0,i.useEffect)((function(){return m(!0),function(){return m(!1)}}),[]),(0,i.useEffect)((function(){if(p){var e=["all"].concat((0,o.Z)(u)).map((function(t){return{name:n.filter((function(n){return n.id===t}))[0].name||t,value:t}})),r=t.map((function(n){var t=n.id;return{name:n.name,value:t}}));h("all"),N("all"),x(e),C(r)}}),[p,u,t,n]),(0,i.useEffect)((function(){p&&z()}),[p,z,r,w,g,O]);var P=(0,i.useMemo)((function(){return l.map((function(n,t){var e=n.id,r=!(t%2!==1),o=!((t+1)%3!==0);return(0,a.jsx)("li",{className:"\n            tw-w-full\n            tw-mb-3\n            tablet:tw-w-[calc((100%-0.75rem)/2)]\n            tablet:tw-mr-3\n            develop:tw-w-[calc((100%-1.5rem)/3)]\n            ".concat(r?"tablet:tw-mr-0 develop:tw-mr-3":"","\n            ").concat(o?"develop:tw-mr-0":"","\n          "),children:(0,a.jsx)(R,{wordData:n})},e)}))}),[l]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"title",children:"\u55ae\u5b57\u5217\u8868"}),(0,a.jsx)("div",{className:"content size-large tw-p-0 tw-rounded-none tw-bg-transparent",children:(0,a.jsxs)("div",{className:"tw-flex tw-items-center tw-flex-wrap tw-justify-end",children:[(0,a.jsx)("div",{className:"tw-w-full tw-mr-0 tw-mb-2.5 tw-leading-none tablet:tw-w-auto tablet:tw-mr-2.5 tablet:tw-mb-0",children:(0,a.jsx)(A,{options:E,onChange:function(n){N(n.target.value)}})}),(0,a.jsx)("div",{className:"tw-w-full tw-mr-0 tw-mb-2.5 tw-leading-none tablet:tw-w-auto tablet:tw-mr-2.5 tablet:tw-mb-0",children:(0,a.jsx)(A,{options:_,onChange:function(n){h(n.target.value)}})}),(0,a.jsx)("div",{className:"tw-mr-2.5 tw-mb-2.5 tw-leading-none tablet:tw-mb-0",children:(0,a.jsx)("button",{type:"button",className:"\n    ".concat(j()["fab-btn"],"\n    ").concat(j()["fab__sort-down-btn"]," \n    ").concat(O?j()["is-down-alt"]:"","\n  "),"aria-label":"sort-alpha-button",onClick:function(){return D(!O)}})}),(0,a.jsx)("div",{className:"tw-mr-0 tw-mb-2.5 tw-leading-none tablet:tw-mb-0",children:(0,a.jsx)("button",{type:"button",className:"\n                ".concat(j()["fab-btn"],"\n                ").concat(j()["fab__update-btn"],"\n              "),"aria-label":"data-update-button",onClick:e})})]})}),(0,a.jsx)("div",{className:"content size-large",children:(0,a.jsx)("ul",{className:"tw-flex tw-flex-wrap",children:P})})]})}},3347:function(n,t,e){"use strict";var r=e(7294),a=e(5827);t.Z=function(){var n=(0,a.h5)(),t=n.speak,e=n.speaking;return(0,r.useCallback)((function(n){!1===e&&t({text:n})}),[t,e])}},5028:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection",function(){return e(1496)}])},7175:function(n){n.exports={"fab-btn":"button_fab-btn__3WWnB","fab__sort-down-btn":"button_fab__sort-down-btn__3smar","is-down-alt":"button_is-down-alt__7NUFE","fab__update-btn":"button_fab__update-btn__3hUwH","speech-btn":"button_speech-btn__3FkzA"}},1606:function(n){n.exports={roof:"card_roof__1aJIK",title:"card_title__16FVc",description:"card_description__1Kype",part:"card_part__1hYs-"}},1898:function(n){n.exports={select:"form_select__100yN"}},8655:function(n){n.exports={"popup-desktop":"popup_popup-desktop__1lNEW",roof:"popup_roof__2LVLH","close-btn":"popup_close-btn__215ve",content:"popup_content__i7qMO"}},3385:function(n){n.exports={roof:"wordItemDetail_roof__qjr8d",title:"wordItemDetail_title__2LsNX",body:"wordItemDetail_body__3KrHE",part:"wordItemDetail_part__1Rldz"}},5827:function(n,t,e){"use strict";var r=e(219);var a=e(4989);function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"h5",{enumerable:!0,get:function(){return o(a).default}})},219:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=e(7294);var o=function(n,t){var e=(0,a.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));return(0,a.useEffect)((function(){e.current=n}),[n].concat(function(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}(t))),(0,a.useCallback)((function(n){return(0,e.current)(n)}),[e])};t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.onEnd,e=void 0===t?function(){}:t,i=n.onResult,c=void 0===i?function(){}:i,u=n.onError,s=void 0===u?function(){}:u,l=(0,a.useRef)(null),d=(0,a.useState)(!1),f=r(d,2),p=f[0],m=f[1],v=(0,a.useState)(!1),w=r(v,2),h=w[0],b=w[1],_=function(n){var t=Array.from(n.results).map((function(n){return n[0]})).map((function(n){return n.transcript})).join("");c(t)},x=function(n){"not-allowed"===n.error&&(l.current.onend=function(){},m(!1)),s(n)},y=o((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!p&&h){var t=n.lang,e=void 0===t?"":t,r=n.interimResults,a=void 0===r||r,o=n.continuous,i=void 0!==o&&o,c=n.maxAlternatives,u=void 0===c?1:c,s=n.grammars;m(!0),l.current.lang=e,l.current.interimResults=a,l.current.onresult=_,l.current.onerror=x,l.current.continuous=i,l.current.maxAlternatives=u,s&&(l.current.grammars=s),l.current.onend=function(){return l.current.start()},l.current.start()}}),[p,h,l]),g=o((function(){p&&h&&(l.current.onresult=function(){},l.current.onend=function(){},l.current.onerror=function(){},m(!1),l.current.stop(),e())}),[p,h,l,e]);return(0,a.useEffect)((function(){"undefined"!==typeof window&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.SpeechRecognition&&(b(!0),l.current=new window.SpeechRecognition))}),[]),{listen:y,listening:p,stop:g,supported:h}}},4989:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=e(7294);t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.onEnd,e=void 0===t?function(){}:t,o=(0,a.useState)([]),i=r(o,2),c=i[0],u=i[1],s=(0,a.useState)(!1),l=r(s,2),d=l[0],f=l[1],p=(0,a.useState)(!1),m=r(p,2),v=m[0],w=m[1],h=function(n){u(n)},b=function(){var n=window.speechSynthesis.getVoices();n.length>0?h(n):window.speechSynthesis.onvoiceschanged=function(t){n=t.target.getVoices(),h(n)}},_=function(){f(!1),e()};(0,a.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(w(!0),b())}),[]);var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.voice,e=void 0===t?null:t,r=n.text,a=void 0===r?"":r,o=n.rate,i=void 0===o?1:o,c=n.pitch,u=void 0===c?1:c,s=n.volume,l=void 0===s?1:s;if(v){f(!0);var d=new window.SpeechSynthesisUtterance;d.text=a,d.voice=e,d.onend=_,d.rate=i,d.pitch=u,d.volume=l,window.speechSynthesis.speak(d)}},y=function(){v&&(f(!1),window.speechSynthesis.cancel())};return{supported:v,speak:x,speaking:d,cancel:y,voices:c}}},39:function(n){"use strict";n.exports=JSON.parse('{"alphabetOptionsData":[{"id":"all","name":"\u5168\u90e8"},{"id":"a","name":"A"},{"id":"b","name":"B"},{"id":"c","name":"C"},{"id":"d","name":"D"},{"id":"e","name":"E"},{"id":"f","name":"F"},{"id":"g","name":"G"},{"id":"h","name":"H"},{"id":"i","name":"I"},{"id":"j","name":"J"},{"id":"k","name":"K"},{"id":"l","name":"L"},{"id":"m","name":"M"},{"id":"n","name":"N"},{"id":"o","name":"O"},{"id":"p","name":"P"},{"id":"q","name":"Q"},{"id":"r","name":"R"},{"id":"s","name":"S"},{"id":"t","name":"T"},{"id":"u","name":"U"},{"id":"v","name":"V"},{"id":"w","name":"W"},{"id":"x","name":"X"},{"id":"y","name":"Y"},{"id":"z","name":"Z"}]}')},1858:function(n){"use strict";n.exports=JSON.parse('{"partsOptionsData":[{"id":"adj","name":"\u5f62\u5bb9\u8a5e"},{"id":"adv","name":"\u526f\u8a5e"},{"id":"conj","name":"\u9023\u63a5\u8a5e"},{"id":"int","name":"\u611f\u5606\u8a5e"},{"id":"n","name":"\u540d\u8a5e"},{"id":"num","name":"\u6578\u8a5e"},{"id":"phrase","name":"\u7247\u8a9e"},{"id":"prep","name":"\u4ecb\u7cfb\u8a5e"},{"id":"pron","name":"\u4ee3\u540d\u8a5e"},{"id":"v","name":"\u52d5\u8a5e"},{"id":"vi","name":"\u4e0d\u53ca\u7269\u52d5\u8a5e"},{"id":"vt","name":"\u53ca\u7269\u52d5\u8a5e"},{"id":"all","name":"\u5168\u90e8"}]}')}},function(n){n.O(0,[774,888,179],(function(){return t=5028,n(n.s=t);var t}));var t=n.O();_N_E=t}]);