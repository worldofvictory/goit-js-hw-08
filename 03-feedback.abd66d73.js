!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),s?p(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=y();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&i?p(e):(i=o=void 0,a)}function w(){var e=y(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:T(y())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var S="feedback-form-state",h=document.querySelector(".feedback-form"),O=document.querySelector(".email"),T=document.querySelector(".submit");h.addEventListener(O,e(t)((function(e){w={email:N.value,message:E.value},localStorage.setItem(S,JSON.stringify(w))}),500)),h.addEventListener(T,(function(e){if(e.preventDefault(),console.log({email:N.value,message:E.value}),""===N.value||""===E.value)return alert("Please fill in all the fields!");localStorage.removeItem(S),e.currentTarget.reset(),w={}}));var w=JSON.parse(localStorage.getItem(S))||{},x=h.elements,N=x.email,E=x.message;w&&(N.value=w.email||"",E.value=w.message||"")}();
//# sourceMappingURL=03-feedback.abd66d73.js.map
