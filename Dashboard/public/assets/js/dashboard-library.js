/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap=function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(){function t(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(){return{bindType:r.end,delegateType:r.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function i(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in o)if("undefined"!=typeof t.style[e])return{end:o[e]};return!1}function s(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},t),this}var r=!1,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(r.end)},supportsTransitionEnd:function(){return Boolean(r)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(e,n,i){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var r=i[s],o=n[s],l=o&&a.isElement(o)?"element":t(o);if(!new RegExp(r).test(l))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+l+'" but expected type "'+r+'".')}}};return r=i(),e.fn.emulateTransitionEnd=s,a.supportsTransitionEnd()&&(e.event.special[a.TRANSITION_END]=n()),a}(),r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t},o=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e},a=function(){var t="alert",n=e.fn[t],i={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},o={ALERT:"alert",FADE:"fade",SHOW:"show"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=s.getSelectorFromElement(t),i=!1;return n&&(i=e(n)[0]),i||(i=e(t).closest("."+o.ALERT)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(i.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;e(t).removeClass(o.SHOW),s.supportsTransitionEnd()&&e(t).hasClass(o.FADE)?e(t).one(s.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(i.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.alert");s||(s=new t(this),i.data("bs.alert",s)),"close"===n&&s[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(i.CLICK_DATA_API,{DISMISS:'[data-dismiss="alert"]'}.DISMISS,a._handleDismiss(new a)),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),l=function(){var t="button",n=e.fn[t],i={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},o={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(s.DATA_TOGGLE)[0];if(r){var o=e(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(i.ACTIVE))t=!1;else{var a=e(r).find(s.ACTIVE)[0];a&&e(a).removeClass(i.ACTIVE)}if(t){if(o.hasAttribute("disabled")||r.hasAttribute("disabled")||o.classList.contains("disabled")||r.classList.contains("disabled"))return;o.checked=!e(this._element).hasClass(i.ACTIVE),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i.ACTIVE)),t&&e(this._element).toggleClass(i.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(o.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(i.BUTTON)||(n=e(n).closest(s.BUTTON)),a._jQueryInterface.call(e(n),"toggle")}).on(o.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(s.BUTTON)[0];e(n).toggleClass(i.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),h=function(){var t="carousel",n="bs.carousel",i="."+n,o=e.fn[t],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},c={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},u={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},d={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},f=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(d.INDICATORS)[0],this._addEventListeners()}var f=o.prototype;return f.next=function(){this._isSliding||this._slide(h.NEXT)},f.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},f.prev=function(){this._isSliding||this._slide(h.PREV)},f.pause=function(t){t||(this._isPaused=!0),e(this._element).find(d.NEXT_PREV)[0]&&s.supportsTransitionEnd()&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},f.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},f.to=function(t){var n=this;this._activeElement=e(this._element).find(d.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(c.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var s=t>i?h.NEXT:h.PREV;this._slide(s,this._items[t])}},f.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},f._getConfig=function(n){return n=e.extend({},a,n),s.typeCheckConfig(t,n,l),n},f._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(c.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(c.MOUSEENTER,function(e){return t.pause(e)}).on(c.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(c.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},f._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},f._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(d.ITEM)),this._items.indexOf(t)},f._getItemByDirection=function(t,e){var n=t===h.NEXT,i=t===h.PREV,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===h.PREV?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},f._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),s=this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),r=e.Event(c.SLIDE,{relatedTarget:t,direction:n,from:s,to:i});return e(this._element).trigger(r),r},f._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(u.ACTIVE)}},f._slide=function(t,n){var i,r,o,a=this,l=e(this._element).find(d.ACTIVE_ITEM)[0],f=this._getItemIndex(l),_=n||l&&this._getItemByDirection(t,l),g=this._getItemIndex(_),m=Boolean(this._interval);if(t===h.NEXT?(i=u.LEFT,r=u.NEXT,o=h.LEFT):(i=u.RIGHT,r=u.PREV,o=h.RIGHT),_&&e(_).hasClass(u.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(_,o).isDefaultPrevented()&&l&&_){this._isSliding=!0,m&&this.pause(),this._setActiveIndicatorElement(_);var p=e.Event(c.SLID,{relatedTarget:_,direction:o,from:f,to:g});s.supportsTransitionEnd()&&e(this._element).hasClass(u.SLIDE)?(e(_).addClass(r),s.reflow(_),e(l).addClass(i),e(_).addClass(i),e(l).one(s.TRANSITION_END,function(){e(_).removeClass(i+" "+r).addClass(u.ACTIVE),e(l).removeClass(u.ACTIVE+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(p)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(u.ACTIVE),e(_).addClass(u.ACTIVE),this._isSliding=!1,e(this._element).trigger(p)),m&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},a,e(this).data());"object"==typeof t&&e.extend(s,t);var r="string"==typeof t?t:s.slide;if(i||(i=new o(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof r){if("undefined"==typeof i[r])throw new Error('No method named "'+r+'"');i[r]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(t){var i=s.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass(u.CAROUSEL)){var a=e.extend({},e(r).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(e(r),a),l&&e(r).data(n).to(l),t.preventDefault()}}},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}}]),o}();return e(document).on(c.CLICK_DATA_API,d.DATA_SLIDE,f._dataApiClickHandler),e(window).on(c.LOAD_DATA_API,function(){e(d.DATA_RIDE).each(function(){var t=e(this);f._jQueryInterface.call(t,t.data())})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=o,f._jQueryInterface},f}(),c=function(){var t="collapse",n="bs.collapse",i=e.fn[t],o={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},l={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},h={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},u={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},d=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(u.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],a=s.getSelectorFromElement(o);null!==a&&e(a).filter(t).length>0&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var d=i.prototype;return d.toggle=function(){e(this._element).hasClass(h.SHOW)?this.hide():this.show()},d.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(h.SHOW)){var r,o;if(this._parent&&((r=e.makeArray(e(this._parent).children().children(u.ACTIVES))).length||(r=null)),!(r&&(o=e(r).data(n))&&o._isTransitioning)){var a=e.Event(l.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){r&&(i._jQueryInterface.call(e(r),"hide"),o||e(r).data(n,null));var c=this._getDimension();e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING),this._element.style[c]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var d=function(){e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW),t._element.style[c]="",t.setTransitioning(!1),e(t._element).trigger(l.SHOWN)};if(s.supportsTransitionEnd()){var f="scroll"+(c[0].toUpperCase()+c.slice(1));e(this._element).one(s.TRANSITION_END,d).emulateTransitionEnd(600),this._element.style[c]=this._element[f]+"px"}else d()}}}},d.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(h.SHOW)){var n=e.Event(l.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",s.reflow(this._element),e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW),this._triggerArray.length)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],a=s.getSelectorFromElement(o);null!==a&&(e(a).hasClass(h.SHOW)||e(o).addClass(h.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var c=function(){t.setTransitioning(!1),e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)};this._element.style[i]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,c).emulateTransitionEnd(600):c()}}},d.setTransitioning=function(t){this._isTransitioning=t},d.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},d._getConfig=function(n){return n=e.extend({},o,n),n.toggle=Boolean(n.toggle),s.typeCheckConfig(t,n,a),n},d._getDimension=function(){return e(this._element).hasClass(c.WIDTH)?c.WIDTH:c.HEIGHT},d._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},d._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(h.SHOW);n.length&&e(n).toggleClass(h.COLLAPSED,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var s=e(this),r=s.data(n),a=e.extend({},o,s.data(),"object"==typeof t&&t);if(!r&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new i(this,a),s.data(n,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new Error('No method named "'+t+'"');r[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,u.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=s.getSelectorFromElement(this);e(r).each(function(){var t=e(this),s=t.data(n)?"toggle":i.data();d._jQueryInterface.call(t,s)})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),u=function(){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t="dropdown",i="bs.dropdown",o="."+i,a=e.fn[t],l=new RegExp("38|40|27"),h={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},c={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},u={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},d={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},f={offset:0,flip:!0},_={offset:"(number|string|function)",flip:"boolean"},g=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=a.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(c.DISABLED)){var t=a._getParentFromElement(this._element),i=e(this._menu).hasClass(c.SHOW);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=e.Event(h.SHOW,s);if(e(t).trigger(r),!r.isDefaultPrevented()){var o=this._element;e(t).hasClass(c.DROPUP)&&(e(this._menu).hasClass(c.MENULEFT)||e(this._menu).hasClass(c.MENURIGHT))&&(o=t),this._popper=new n(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(u.NAVBAR_NAV).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(c.SHOW),e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN,s))}}}},g.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(h.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=e.extend({},this.constructor.Default,e(this._element).data(),n),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var t=a._getParentFromElement(this._element);this._menu=e(t).find(u.MENU)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=d.BOTTOM;return t.hasClass(c.DROPUP)?(n=d.TOP,e(this._menu).hasClass(c.MENURIGHT)&&(n=d.TOPEND)):e(this._menu).hasClass(c.MENURIGHT)&&(n=d.BOTTOMEND),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var t=this,n={};"function"==typeof this._config.offset?n.fn=function(n){return n.offsets=e.extend({},n.offsets,t._config.offset(n.offsets)||{}),n}:n.offset=this._config.offset;var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip}}};return this._inNavbar&&(i.modifiers.applyStyle={enabled:!this._inNavbar}),i},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),s="object"==typeof t?t:null;if(n||(n=new a(this,s),e(this).data(i,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},a._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(u.DATA_TOGGLE)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=e(n[s]).data(i),l={relatedTarget:n[s]};if(o){var d=o._menu;if(e(r).hasClass(c.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(r,t.target))){var f=e.Event(h.HIDE,l);e(r).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[s].setAttribute("aria-expanded","false"),e(d).removeClass(c.SHOW),e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN,l)))}}}},a._getParentFromElement=function(t){var n,i=s.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},a._dataApiKeydownHandler=function(t){if(!(!l.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(c.DISABLED)))){var n=a._getParentFromElement(this),i=e(n).hasClass(c.SHOW);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var s=e(n).find(u.VISIBLE_ITEMS).get();if(s.length){var r=s.indexOf(t.target);38===t.which&&r>0&&r--,40===t.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===t.which){var o=e(n).find(u.DATA_TOGGLE)[0];e(o).trigger("focus")}e(this).trigger("click")}}},r(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return f}},{key:"DefaultType",get:function(){return _}}]),a}();return e(document).on(h.KEYDOWN_DATA_API,u.DATA_TOGGLE,g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API,u.MENU,g._dataApiKeydownHandler).on(h.CLICK_DATA_API+" "+h.KEYUP_DATA_API,g._clearMenus).on(h.CLICK_DATA_API,u.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),g._jQueryInterface.call(e(this),"toggle")}).on(h.CLICK_DATA_API,u.FORM_CHILD,function(t){t.stopPropagation()}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=a,g._jQueryInterface},g}(),d=function(){var t="modal",n=".bs.modal",i=e.fn[t],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},l={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},h={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},c={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},u=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(c.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var u=i.prototype;return u.toggle=function(t){return this._isShown?this.hide():this.show(t)},u.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)&&(this._isTransitioning=!0);var i=e.Event(l.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(h.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(l.CLICK_DISMISS,c.DATA_DISMISS,function(t){return n.hide(t)}),e(this._dialog).on(l.MOUSEDOWN_DISMISS,function(){e(n._element).one(l.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},u.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(l.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(l.FOCUSIN),e(this._element).removeClass(h.SHOW),e(this._element).off(l.CLICK_DISMISS),e(this._dialog).off(l.MOUSEDOWN_DISMISS),r?e(this._element).one(s.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},u.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},u.handleUpdate=function(){this._adjustDialog()},u._getConfig=function(n){return n=e.extend({},o,n),s.typeCheckConfig(t,n,a),n},u._showElement=function(t){var n=this,i=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&s.reflow(this._element),e(this._element).addClass(h.SHOW),this._config.focus&&this._enforceFocus();var r=e.Event(l.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};i?e(this._dialog).one(s.TRANSITION_END,o).emulateTransitionEnd(300):o()},u._enforceFocus=function(){var t=this;e(document).off(l.FOCUSIN).on(l.FOCUSIN,function(n){document===n.target||t._element===n.target||e(t._element).has(n.target).length||t._element.focus()})},u._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(l.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(l.KEYDOWN_DISMISS)},u._setResizeEvent=function(){var t=this;this._isShown?e(window).on(l.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(l.RESIZE)},u._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(h.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(l.HIDDEN)})},u._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},u._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(h.FADE)?h.FADE:"";if(this._isShown&&this._config.backdrop){var r=s.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=h.BACKDROP,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(l.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&s.reflow(this._backdrop),e(this._backdrop).addClass(h.SHOW),!t)return;if(!r)return void t();e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(h.SHOW);var o=function(){n._removeBackdrop(),t&&t()};s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)?e(this._backdrop).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},u._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},u._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},u._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},u._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(c.FIXED_CONTENT).each(function(n,i){var s=e(i)[0].style.paddingRight,r=e(i).css("padding-right");e(i).data("padding-right",s).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),e(c.STICKY_CONTENT).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),e(c.NAVBAR_TOGGLER).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=e("body").css("padding-right");e("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},u._resetScrollbar=function(){e(c.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");"undefined"!=typeof i&&e(n).css("padding-right",i).removeData("padding-right")}),e(c.STICKY_CONTENT+", "+c.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")});var t=e("body").data("padding-right");"undefined"!=typeof t&&e("body").css("padding-right",t).removeData("padding-right")},u._getScrollbarWidth=function(){var t=document.createElement("div");t.className=h.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},i._jQueryInterface=function(t,n){return this.each(function(){var s=e(this).data("bs.modal"),r=e.extend({},i.Default,e(this).data(),"object"==typeof t&&t);if(s||(s=new i(this,r),e(this).data("bs.modal",s)),"string"==typeof t){if("undefined"==typeof s[t])throw new Error('No method named "'+t+'"');s[t](n)}else r.show&&s.show(n)})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,c.DATA_TOGGLE,function(t){var n,i=this,r=s.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":e.extend({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(l.SHOW,function(t){t.isDefaultPrevented()||a.one(l.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});u._jQueryInterface.call(e(n),o,this)}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(),f=function(){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t="tooltip",i=".bs.tooltip",o=e.fn[t],a=new RegExp("(^|\\s)bs-tooltip\\S+","g"),l={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},h={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},c={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},u={SHOW:"show",OUT:"out"},d={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},f={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function o(t,e){this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var m=o.prototype;return m.enable=function(){this._isEnabled=!0},m.disable=function(){this._isEnabled=!1},m.toggleEnabled=function(){this._isEnabled=!this._isEnabled},m.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null,this);this._enter(null,this)}},m.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},m.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var r=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var a=this.getTipElement(),l=s.getUID(this.constructor.NAME);a.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(a).addClass(f.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,a,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var d=!1===this.config.container?document.body:e(this.config.container);e(a).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(a).appendTo(d),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,a,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(a).addClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop);var g=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===u.OUT&&t._leave(null,t)};s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(this.tip).one(s.TRANSITION_END,g).emulateTransitionEnd(o._TRANSITION_DURATION):g()}},m.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==u.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};e(this.element).trigger(r),r.isDefaultPrevented()||(e(i).removeClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(i).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},m.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},m.isWithContent=function(){return Boolean(this.getTitle())},m.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},m.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},m.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(_.TOOLTIP_INNER),this.getTitle()),t.removeClass(f.FADE+" "+f.SHOW)},m.setElementContent=function(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},m.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},m._getAttachment=function(t){return h[t.toUpperCase()]},m._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==g.MANUAL){var i=n===g.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,s=n===g.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(s,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},m._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},m._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?g.FOCUS:g.HOVER]=!0),e(n.getTipElement()).hasClass(f.SHOW)||n._hoverState===u.SHOW?n._hoverState=u.SHOW:(clearTimeout(n._timeout),n._hoverState=u.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===u.SHOW&&n.show()},n.config.delay.show):n.show())},m._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=u.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===u.OUT&&n.hide()},n.config.delay.hide):n.hide())},m._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},m._getConfig=function(n){return"number"==typeof(n=e.extend({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},m._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(a);null!==n&&n.length>0&&t.removeClass(n.join(""))},m._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},m._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(f.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return c}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return l}}]),o}();return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=o,m._jQueryInterface},m}(),_=function(){var t="popover",n=".bs.popover",i=e.fn[t],s=new RegExp("(^|\\s)bs-popover\\S+","g"),a=e.extend({},f.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=e.extend({},f.DefaultType,{content:"(string|element|function)"}),h={FADE:"fade",SHOW:"show"},c={TITLE:".popover-header",CONTENT:".popover-body"},u={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},d=function(i){function d(){return i.apply(this,arguments)||this}o(d,i);var f=d.prototype;return f.isWithContent=function(){return this.getTitle()||this._getContent()},f.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},f.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},f.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(c.TITLE),this.getTitle()),this.setElementContent(t.find(c.CONTENT),this._getContent()),t.removeClass(h.FADE+" "+h.SHOW)},f._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},f._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s);null!==n&&n.length>0&&t.removeClass(n.join(""))},d._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new d(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(d,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return u}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),d}(f);return e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),g=function(){var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},l={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},h={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},c={OFFSET:"offset",POSITION:"position"},u=function(){function n(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+h.NAV_LINKS+","+this._config.target+" "+h.LIST_ITEMS+","+this._config.target+" "+h.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(a.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var u=n.prototype;return u.refresh=function(){var t=this,n=this._scrollElement!==this._scrollElement.window?c.POSITION:c.OFFSET,i="auto"===this._config.method?n:this._config.method,r=i===c.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=s.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[i]().top+r,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},u.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},u._getConfig=function(n){if("string"!=typeof(n=e.extend({},i,n)).target){var r=e(n.target).attr("id");r||(r=s.getUID(t),e(n.target).attr("id",r)),n.target="#"+r}return s.typeCheckConfig(t,n,o),n},u._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},u._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},u._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},u._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;)this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}},u._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=e(n.join(","));i.hasClass(l.DROPDOWN_ITEM)?(i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE),i.addClass(l.ACTIVE)):(i.addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS+", "+h.LIST_ITEMS).addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)),e(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},u._clear=function(){e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),s="object"==typeof t&&t;if(i||(i=new n(this,s),e(this).data("bs.scrollspy",i)),"string"==typeof t){if("undefined"==typeof i[t])throw new Error('No method named "'+t+'"');i[t]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return i}}]),n}();return e(window).on(a.LOAD_DATA_API,function(){for(var t=e.makeArray(e(h.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);u._jQueryInterface.call(i,i.data())}}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=n,u._jQueryInterface},u}(),m=function(){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},i={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=function(){function t(t){this._element=t}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(i.ACTIVE)||e(this._element).hasClass(i.DISABLED))){var r,a,l=e(this._element).closest(o.NAV_LIST_GROUP)[0],h=s.getSelectorFromElement(this._element);if(l){var c="UL"===l.nodeName?o.ACTIVE_UL:o.ACTIVE;a=e.makeArray(e(l).find(c)),a=a[a.length-1]}var u=e.Event(n.HIDE,{relatedTarget:this._element}),d=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(u),e(this._element).trigger(d),!d.isDefaultPrevented()&&!u.isDefaultPrevented()){h&&(r=e(h)[0]),this._activate(this._element,l);var f=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),s=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(i),e(t._element).trigger(s)};r?this._activate(r,r.parentNode,f):f()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,r){var a,l=this,h=(a="UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE))[0],c=r&&s.supportsTransitionEnd()&&h&&e(h).hasClass(i.FADE),u=function(){return l._transitionComplete(t,h,c,r)};h&&c?e(h).one(s.TRANSITION_END,u).emulateTransitionEnd(150):u(),h&&e(h).removeClass(i.SHOW)},a._transitionComplete=function(t,n,r,a){if(n){e(n).removeClass(i.ACTIVE);var l=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];l&&e(l).removeClass(i.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(i.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),r?(s.reflow(t),e(t).addClass(i.SHOW)):e(t).removeClass(i.FADE),t.parentNode&&e(t.parentNode).hasClass(i.DROPDOWN_MENU)){var h=e(t).closest(o.DROPDOWN)[0];h&&e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),t.setAttribute("aria-expanded",!0)}a&&a()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.tab");if(s||(s=new t(this),i.data("bs.tab",s)),"string"==typeof n){if("undefined"==typeof s[n])throw new Error('No method named "'+n+'"');s[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}();return function(){if("undefined"==typeof e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=s,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=d,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=f,t}({},$,Popper);
//# sourceMappingURL=bootstrap.min.js.map
/* 
Ace Responsive Menu Plugin
Version: 1.0
Author: Samson.Onna 
Email : samson3d@gmail.com
----------------------------------------*/

(function ($) {
    $.fn.aceResponsiveMenu = function (options) {

        //plugin's default options
        var defaults = {
            resizeWidth: '768',
            animationSpeed: 'fast',
            accoridonExpAll: false
        };

        //Variables
        var options = $.extend(defaults, options),
            opt = options,
            $resizeWidth = opt.resizeWidth,
            $animationSpeed = opt.animationSpeed,
            $expandAll = opt.accoridonExpAll,
            $aceMenu = $(this),
            $menuStyle = $(this).attr('data-menu-style');

        // Initilizing        
        $aceMenu.find('ul').addClass("sub-menu");
        $aceMenu.find('ul').siblings('a').append('<span class="arrow "></span>');
        if ($menuStyle == 'accordion') { $(this).addClass('collapse'); }

        // Window resize on menu breakpoint 
        if ($(window).innerWidth() <= $resizeWidth) {
            menuCollapse();
        }
        $(window).resize(function () {
            menuCollapse();
        });

        // Menu Toggle
        function menuCollapse() {
            var w = $(window).innerWidth();
            if (w <= $resizeWidth) {
                $aceMenu.find('li.menu-active').removeClass('menu-active');
                $aceMenu.find('ul.slide').removeClass('slide').removeAttr('style');
                $aceMenu.addClass('collapse hide-menu');
                $aceMenu.attr('data-menu-style', '');
                $('.menu-toggle').show();
            } else {
                $aceMenu.attr('data-menu-style', $menuStyle);
                $aceMenu.removeClass('collapse hide-menu').removeAttr('style');
                $('.menu-toggle').hide();
                if ($aceMenu.attr('data-menu-style') == 'accordion') {
                    $aceMenu.addClass('collapse');
                    return;
                }
                $aceMenu.find('li.menu-active').removeClass('menu-active');
                $aceMenu.find('ul.slide').removeClass('slide').removeAttr('style');
            }
        }

        //ToggleBtn Click
        $('#menu-btn').click(function () {
            $aceMenu.slideToggle().toggleClass('hide-menu');
        });


        // Main function 
        return this.each(function () {
            // Function for Horizontal menu on mouseenter
            $aceMenu.on('mouseover', '> li a', function () {
                if ($aceMenu.hasClass('collapse') === true) {
                    return false;
                }
                $(this).off('click', '> li a');
                $(this).parent('li').siblings().children('.sub-menu').stop(true, true).slideUp($animationSpeed).removeClass('slide').removeAttr('style').stop();
                $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                return;
            });
            $aceMenu.on('mouseleave', 'li', function () {
                if ($aceMenu.hasClass('collapse') === true) {
                    return false;
                }
                $(this).off('click', '> li a');
                $(this).removeClass('menu-active');
                $(this).children('ul.sub-menu').stop(true, true).slideUp($animationSpeed).removeClass('slide').removeAttr('style');
                return;
            });
            //End of Horizontal menu function

            // Function for Vertical/Responsive Menu on mouse click
            $aceMenu.on('click', '> li a', function () {
                if ($aceMenu.hasClass('collapse') === false) {
                    //return false;
                }
                $(this).off('mouseover', '> li a');
                if ($(this).parent().hasClass('menu-active')) {
                    $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().removeClass('menu-active');
                } else {
                    if ($expandAll == true) {
                        $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                        return;
                    }
                    $(this).parent().siblings().removeClass('menu-active');
                    $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().addClass('menu-active').children('.sub-menu').slideDown($animationSpeed).addClass('slide');
                }
            });
            //End of responsive menu function

        });
        //End of Main function
    }
})(jQuery);

/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Jasny Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}void 0===a.support.transition&&(a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()}))}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),a(window).on("resize",a.proxy(this.recalc,this))),this.options.autohide&&a(document).on("click",a.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)};b.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},b.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();case"top":case"bottom":return this.$element.outerHeight()}},b.prototype.calcPlacement=function(){function b(a,b){if("auto"===e.css(b))return a;if("auto"===e.css(a))return b;var c=parseInt(e.css(a),10),d=parseInt(e.css(b),10);return c>d?b:a}if("auto"!==this.options.placement)return void(this.placement=this.options.placement);this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");var c=a(window).width()/this.$element.width(),d=a(window).height()/this.$element.height(),e=this.$element;this.placement=c>=d?b("left","right"):b("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")},b.prototype.opposite=function(a){switch(a){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}},b.prototype.getCanvasElements=function(){var b=this.options.canvas?a(this.options.canvas):this.$element,c=b.find("*").filter(function(){return"fixed"===a(this).css("position")}).not(this.options.exclude);return b.add(c)},b.prototype.slide=function(b,c,d){if(!a.support.transition){var e={};return e[this.placement]="+="+c,b.animate(e,350,d)}var f=this.placement,g=this.opposite(f);b.each(function(){"auto"!==a(this).css(f)&&a(this).css(f,(parseInt(a(this).css(f),10)||0)+c),"auto"!==a(this).css(g)&&a(this).css(g,(parseInt(a(this).css(g),10)||0)-c)}),this.$element.one(a.support.transition.end,d).emulateTransitionEnd(350)},b.prototype.disableScrolling=function(){var b=a("body").width(),c="padding-"+this.opposite(this.placement);if(void 0===a("body").data("offcanvas-style")&&a("body").data("offcanvas-style",a("body").attr("style")||""),a("body").css("overflow","hidden"),a("body").width()>b){var d=parseInt(a("body").css(c),10)+a("body").width()-b;setTimeout(function(){a("body").css(c,d)},1)}},b.prototype.show=function(){if(!this.state){var b=a.Event("show.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();var c=this.getCanvasElements(),d=this.placement,e=this.opposite(d),f=this.offset();-1!==c.index(this.$element)&&(a(this.$element).data("offcanvas-style",a(this.$element).attr("style")||""),this.$element.css(d,-1*f),this.$element.css(d)),c.addClass("canvas-sliding").each(function(){void 0===a(this).data("offcanvas-style")&&a(this).data("offcanvas-style",a(this).attr("style")||""),"static"===a(this).css("position")&&a(this).css("position","relative"),"auto"!==a(this).css(d)&&"0px"!==a(this).css(d)||"auto"!==a(this).css(e)&&"0px"!==a(this).css(e)||a(this).css(d,0)}),this.options.disableScrolling&&this.disableScrolling();var g=function(){"slide-in"==this.state&&(this.state="slid",c.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))};setTimeout(a.proxy(function(){this.$element.addClass("in"),this.slide(c,f,a.proxy(g,this))},this),1)}}},b.prototype.hide=function(){if("slid"===this.state){var b=a.Event("hide.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-out";var c=a(".canvas-slid"),d=(this.placement,-1*this.offset()),e=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),c.removeClass("canvas-sliding"),c.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")}),this.$element.trigger("hidden.bs.offcanvas"))};c.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(a.proxy(function(){this.slide(c,d,a.proxy(e,this))},this),1)}}},b.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()},b.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(a("body"))},b.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;var b=this.getCanvasElements();this.$element.removeClass("in"),b.removeClass("canvas-slid"),b.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")})}},b.prototype.autohide=function(b){0===a(b.target).closest(this.$element).length&&this.hide()};var c=a.fn.offcanvas;a.fn.offcanvas=function(c){return this.each(function(){var d=a(this),e=d.data("bs.offcanvas"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.offcanvas",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.offcanvas.Constructor=b,a.fn.offcanvas.noConflict=function(){return a.fn.offcanvas=c,this},a(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.offcanvas"),h=g?"toggle":d.data();b.stopPropagation(),g?g.toggle():f.offcanvas(h)})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",a.proxy(this.click,this))};b.DEFAULTS={target:"a"},b.prototype.click=function(b){var c=a(b.currentTarget).closest("tr").find(this.options.target)[0];if(a(b.target)[0]!==c)if(b.preventDefault(),c.click)c.click();else if(document.createEvent){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}};var c=a.fn.rowlink;a.fn.rowlink=function(c){return this.each(function(){var d=a(this),e=d.data("bs.rowlink");e||d.data("bs.rowlink",e=new b(this,c))})},a.fn.rowlink.Constructor=b,a.fn.rowlink.noConflict=function(){return a.fn.rowlink=c,this},a(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(b){if(0===a(b.target).closest(".rowlink-skip").length){var c=a(this);c.data("bs.rowlink")||(c.rowlink(c.data()),a(b.target).trigger("click.bs.rowlink"))}})}(window.jQuery),+function(a){"use strict";var b=void 0!==window.orientation,c=navigator.userAgent.toLowerCase().indexOf("android")>-1,d="Microsoft Internet Explorer"==window.navigator.appName,e=function(b,d){c||(this.$element=a(b),this.options=a.extend({},e.DEFAULTS,d),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};e.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]","*":"."}},e.prototype.init=function(){var b=this.options.definitions,c=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,a.each(this.mask.split(""),a.proxy(function(a,d){"?"==d?(c--,this.partialPosition=a):b[d]?(this.tests.push(new RegExp(b[d])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=a.map(this.mask.split(""),a.proxy(function(a){return"?"!=a?b[a]?this.options.placeholder:a:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",a.proxy(function(){return a.map(this.buffer,function(a,b){return this.tests[b]&&a!=this.options.placeholder?a:null}).join("")},this))},e.prototype.listen=function(){if(!this.$element.attr("readonly")){var b=(d?"paste":"input")+".mask";this.$element.on("unmask.bs.inputmask",a.proxy(this.unmask,this)).on("focus.bs.inputmask",a.proxy(this.focusEvent,this)).on("blur.bs.inputmask",a.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",a.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",a.proxy(this.keypressEvent,this)).on(b,a.proxy(this.pasteEvent,this))}},e.prototype.caret=function(a,b){if(0!==this.$element.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}});if(this.$element[0].setSelectionRange)a=this.$element[0].selectionStart,b=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},e.prototype.seekNext=function(a){for(var b=this.mask.length;++a<=b&&!this.tests[a];);return a},e.prototype.seekPrev=function(a){for(;--a>=0&&!this.tests[a];);return a},e.prototype.shiftL=function(a,b){var c=this.mask.length;if(!(0>a)){for(var d=a,e=this.seekNext(b);c>d;d++)if(this.tests[d]){if(!(c>e&&this.tests[d].test(this.buffer[e])))break;this.buffer[d]=this.buffer[e],this.buffer[e]=this.options.placeholder,e=this.seekNext(e)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,a))}},e.prototype.shiftR=function(a){for(var b=this.mask.length,c=a,d=this.options.placeholder;b>c;c++)if(this.tests[c]){var e=this.seekNext(c),f=this.buffer[c];if(this.buffer[c]=d,!(b>e&&this.tests[e].test(f)))break;d=f}},e.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")},e.prototype.focusEvent=function(){this.focusText=this.$element.val();var a=this.mask.length,b=this.checkVal();this.writeBuffer();var c=this,d=function(){b==a?c.caret(0,b):c.caret(b)};d(),setTimeout(d,50)},e.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")},e.prototype.keydownEvent=function(a){var c=a.which;if(8==c||46==c||b&&127==c){var d=this.caret(),e=d.begin,f=d.end;return f-e===0&&(e=46!=c?this.seekPrev(e):f=this.seekNext(e-1),f=46==c?this.seekNext(f):f),this.clearBuffer(e,f),this.shiftL(e,f-1),!1}return 27==c?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},e.prototype.keypressEvent=function(a){var b=this.mask.length,c=a.which,d=this.caret();if(a.ctrlKey||a.altKey||a.metaKey||32>c)return!0;if(c){d.end-d.begin!==0&&(this.clearBuffer(d.begin,d.end),this.shiftL(d.begin,d.end-1));var e=this.seekNext(d.begin-1);if(b>e){var f=String.fromCharCode(c);if(this.tests[e].test(f)){this.shiftR(e),this.buffer[e]=f,this.writeBuffer();var g=this.seekNext(e);this.caret(g)}}return!1}},e.prototype.pasteEvent=function(){var a=this;setTimeout(function(){a.caret(a.checkVal(!0))},0)},e.prototype.clearBuffer=function(a,b){for(var c=this.mask.length,d=a;b>d&&c>d;d++)this.tests[d]&&(this.buffer[d]=this.options.placeholder)},e.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},e.prototype.checkVal=function(a){for(var b=this.mask.length,c=this.$element.val(),d=-1,e=0,f=0;b>e;e++)if(this.tests[e]){for(this.buffer[e]=this.options.placeholder;f++<c.length;){var g=c.charAt(f-1);if(this.tests[e].test(g)){this.buffer[e]=g,d=e;break}}if(f>c.length)break}else this.buffer[e]==c.charAt(f)&&e!=this.partialPosition&&(f++,d=e);return!a&&d+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,b)):(a||d+1>=this.partialPosition)&&(this.writeBuffer(),a||this.$element.val(this.$element.val().substring(0,d+1))),this.partialPosition?e:this.firstNonMaskPos};var f=a.fn.inputmask;a.fn.inputmask=function(b){return this.each(function(){var c=a(this),d=c.data("bs.inputmask");d||c.data("bs.inputmask",d=new e(this,b))})},a.fn.inputmask.Constructor=e,a.fn.inputmask.noConflict=function(){return a.fn.inputmask=f,this},a(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var b=a(this);b.data("bs.inputmask")||b.inputmask(b.data())})}(window.jQuery),+function(a){"use strict";var b="Microsoft Internet Explorer"==window.navigator.appName,c=function(b,c){if(this.$element=a(b),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=a('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var d=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==d&&"none"!==d&&this,this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};c.prototype.listen=function(){this.$input.on("change.bs.fileinput",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.bs.fileinput",a.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",a.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",a.proxy(this.clear,this))},c.prototype.change=function(b){var c=void 0===b.target.files?b.target&&b.target.value?[{name:b.target.value.replace(/^.+\\/,"")}]:[]:b.target.files;if(b.stopPropagation(),0===c.length)return void this.clear();this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var d=c[0];if(this.$preview.length>0&&("undefined"!=typeof d.type?d.type.match(/^image\/(gif|png|jpeg)$/):d.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var e=new FileReader,f=this.$preview,g=this.$element;e.onload=function(b){var e=a("<img class=\"img-fluid \">");e[0].src=b.target.result,c[0].result=b.target.result,g.find(".fileinput-filename").text(d.name),"none"!=f.css("max-height")&&e.css("max-height",parseInt(f.css("max-height"),10)-parseInt(f.css("padding-top"),10)-parseInt(f.css("padding-bottom"),10)-parseInt(f.css("border-top"),10)-parseInt(f.css("border-bottom"),10)),f.html(e),g.addClass("fileinput-exists").removeClass("fileinput-new"),g.trigger("change.bs.fileinput",c)},e.readAsDataURL(d)}else this.$element.find(".fileinput-filename").text(d.name),this.$preview.text(d.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},c.prototype.clear=function(a){if(a&&a.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),b){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==a&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},c.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},c.prototype.trigger=function(a){this.$input.trigger("click"),a.preventDefault()};var d=a.fn.fileinput;a.fn.fileinput=function(b){return this.each(function(){var d=a(this),e=d.data("bs.fileinput");e||d.data("bs.fileinput",e=new c(this,b)),"string"==typeof b&&e[b]()})},a.fn.fileinput.Constructor=c,a.fn.fileinput.noConflict=function(){return a.fn.fileinput=d,this},a(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(b){var c=a(this);if(!c.data("bs.fileinput")){c.fileinput(c.data());var d=a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');d.length>0&&(b.preventDefault(),d.trigger("click.bs.fileinput"))}})}(window.jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Improved by keenthemes for Metronic Theme
 * Version: 1.3.2
 *
 */
!function(e){jQuery.fn.extend({slimScroll:function(i){var o={width:"auto",height:"200px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px",animate:!0},a=e.extend(o,i);return this.each(function(){function o(t){if(u){var t=t||window.event,i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+a.wrapperClass).is(S.parent())&&r(i,!0),t.preventDefault&&!y&&t.preventDefault(),y||(t.returnValue=!1)}}function r(e,t,i){y=!1;var o=e,r=S.outerHeight()-M.outerHeight();if(t&&(o=parseInt(M.css("top"))+e*parseInt(a.wheelStep)/100*M.outerHeight(),o=Math.min(Math.max(o,0),r),o=e>0?Math.ceil(o):Math.floor(o),M.css({top:o+"px"})),v=parseInt(M.css("top"))/(S.outerHeight()-M.outerHeight()),o=v*(S[0].scrollHeight-S.outerHeight()),i){o=e;var s=o/S[0].scrollHeight*S.outerHeight();s=Math.min(Math.max(s,0),r),M.css({top:s+"px"})}"scrollTo"in a&&a.animate?S.animate({scrollTop:o}):S.scrollTop(o),S.trigger("slimscrolling",~~o),l(),c()}function s(){window.addEventListener?(this.addEventListener("DOMMouseScroll",o,!1),this.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}function n(){f=Math.max(S.outerHeight()/S[0].scrollHeight*S.outerHeight(),m),M.css({height:f+"px"});var e=f==S.outerHeight()?"none":"block";M.css({display:e})}function l(){if(n(),clearTimeout(p),v==~~v){if(y=a.allowPageScroll,b!=v){var e=0==~~v?"top":"bottom";S.trigger("slimscroll",e)}}else y=!1;return b=v,f>=S.outerHeight()?void(y=!0):(M.stop(!0,!0).fadeIn("fast"),void(a.railVisible&&H.stop(!0,!0).fadeIn("fast")))}function c(){a.alwaysVisible||(p=setTimeout(function(){a.disableFadeOut&&u||h||d||(M.fadeOut("slow"),H.fadeOut("slow"))},1e3))}var u,h,d,p,g,f,v,b,w="<div></div>",m=30,y=!1,S=e(this);if("ontouchstart"in window&&window.navigator.msPointerEnabled&&S.css("-ms-touch-action","none"),S.parent().hasClass(a.wrapperClass)){var E=S.scrollTop();if(M=S.parent().find("."+a.barClass),H=S.parent().find("."+a.railClass),n(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){S.parent().css("height","auto"),S.css("height","auto");var x=S.parent().parent().height();S.parent().css("height",x),S.css("height",x)}if("scrollTo"in i)E=parseInt(a.scrollTo);else if("scrollBy"in i)E+=parseInt(a.scrollBy);else if("destroy"in i)return M.remove(),H.remove(),void S.unwrap();r(E,!1,!0)}}else{a.height="auto"==i.height?S.parent().height():i.height;var C=e(w).addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});S.css({overflow:"hidden",width:a.width,height:a.height});var H=e(w).addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),M=e(w).addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),D="right"==a.position?{right:a.distance}:{left:a.distance};H.css(D),M.css(D),S.wrap(C),S.parent().append(M),S.parent().append(H),a.railDraggable&&M.bind("mousedown",function(i){var o=e(document);return d=!0,t=parseFloat(M.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,M.css("top",currTop),r(0,M.position().top,!1)}),o.bind("mouseup.slimscroll",function(){d=!1,c(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),"ontouchstart"in window&&window.navigator.msPointerEnabled&&(S.bind("MSPointerDown",function(e){g=e.originalEvent.pageY}),S.bind("MSPointerMove",function(e){e.originalEvent.preventDefault();var t=(g-e.originalEvent.pageY)/a.touchScrollStep;r(t,!0),g=e.originalEvent.pageY})),H.hover(function(){l()},function(){c()}),M.hover(function(){h=!0},function(){h=!1}),S.hover(function(){u=!0,l(),c()},function(){u=!1,c()}),S.bind("touchstart",function(e){e.originalEvent.touches.length&&(g=e.originalEvent.touches[0].pageY)}),S.bind("touchmove",function(e){if(y||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(g-e.originalEvent.touches[0].pageY)/a.touchScrollStep;r(t,!0),g=e.originalEvent.touches[0].pageY}}),n(),"bottom"===a.start?(M.css({top:S.outerHeight()-M.outerHeight()}),r(0,!0)):"top"!==a.start&&(r(e(a.start).position().top,null,!0),a.alwaysVisible||M.hide()),s()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery);
/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});
//# sourceMappingURL=jquery.nanoscroller.min.js.map
/*!
* metismenu - v2.7.7
* A jQuery menu plugin
* https://github.com/onokumus/metismenu#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):n.metisMenu=e(n.jQuery)}(this,function(n){"use strict";function e(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),s.forEach(function(t){e(n,t,i[t])})}return n}var i=function(n){var e="transitionend",t={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(t){n(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)}};function i(e){var i=this,s=!1;return n(this).one(t.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||t.triggerTransitionEnd(i)},e),this}return n.fn.mmEmulateTransitionEnd=i,n.event.special[t.TRANSITION_END]={bindType:e,delegateType:e,handle:function(e){if(n(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},t}(n=n&&n.hasOwnProperty("default")?n.default:n);return function(n){var e="metisMenu",s=n.fn[e],a={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},r={SHOW:"show.metisMenu",SHOWN:"shown.metisMenu",HIDE:"hide.metisMenu",HIDDEN:"hidden.metisMenu",CLICK_DATA_API:"click.metisMenu.data-api"},o=function(){function e(n,e){this.element=n,this.config=t({},a,e),this.transitioning=null,this.init()}var s=e.prototype;return s.init=function(){var e=this,t=this.config;n(this.element).find(t.parentTrigger+"."+t.activeClass).has(t.subMenu).children(t.subMenu).attr("aria-expanded",!0).addClass(t.collapseClass+" "+t.collapseInClass),n(this.element).find(t.parentTrigger).not("."+t.activeClass).has(t.subMenu).children(t.subMenu).attr("aria-expanded",!1).addClass(t.collapseClass),n(this.element).find(t.parentTrigger).has(t.subMenu).children(t.triggerElement).on(r.CLICK_DATA_API,function(i){var s=n(this),a=s.parent(t.parentTrigger),r=a.siblings(t.parentTrigger).children(t.triggerElement),o=a.children(t.subMenu);t.preventDefault&&i.preventDefault(),"true"!==s.attr("aria-disabled")&&(a.hasClass(t.activeClass)?(s.attr("aria-expanded",!1),e.hide(o)):(e.show(o),s.attr("aria-expanded",!0),t.toggle&&r.attr("aria-expanded",!1)),t.onTransitionStart&&t.onTransitionStart(i))})},s.show=function(e){var t=this;if(!this.transitioning&&!n(e).hasClass(this.config.collapsingClass)){var s=n(e),a=n.Event(r.SHOW);if(s.trigger(a),!a.isDefaultPrevented()){s.parent(this.config.parentTrigger).addClass(this.config.activeClass),this.config.toggle&&this.hide(s.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+this.config.collapseInClass).attr("aria-expanded",!1)),s.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),this.setTransitioning(!0);var o=function(){t.config&&t.element&&(s.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass+" "+t.config.collapseInClass).height("").attr("aria-expanded",!0),t.setTransitioning(!1),s.trigger(r.SHOWN))};i.supportsTransitionEnd()?s.height(e[0].scrollHeight).one(i.TRANSITION_END,o).mmEmulateTransitionEnd(350):o()}}},s.hide=function(e){var t=this;if(!this.transitioning&&n(e).hasClass(this.config.collapseInClass)){var s=n(e),a=n.Event(r.HIDE);if(s.trigger(a),!a.isDefaultPrevented()){s.parent(this.config.parentTrigger).removeClass(this.config.activeClass),s.height(s.height())[0].offsetHeight,s.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),this.setTransitioning(!0);var o=function(){t.config&&t.element&&(t.transitioning&&t.config.onTransitionEnd&&t.config.onTransitionEnd(),t.setTransitioning(!1),s.trigger(r.HIDDEN),s.removeClass(t.config.collapsingClass).addClass(t.config.collapseClass).attr("aria-expanded",!1))};i.supportsTransitionEnd()?0===s.height()||"none"===s.css("display")?o():s.height(0).one(i.TRANSITION_END,o).mmEmulateTransitionEnd(350):o()}}},s.setTransitioning=function(n){this.transitioning=n},s.dispose=function(){n.removeData(this.element,"metisMenu"),n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},e.jQueryInterface=function(i){return this.each(function(){var s=n(this),r=s.data("metisMenu"),o=t({},a,s.data(),"object"==typeof i&&i?i:{});if(!r&&/dispose/.test(i)&&this.dispose(),r||(r=new e(this,o),s.data("metisMenu",r)),"string"==typeof i){if(void 0===r[i])throw new Error('No method named "'+i+'"');r[i]()}})},e}();return n.fn[e]=o.jQueryInterface,n.fn[e].Constructor=o,n.fn[e].noConflict=function(){return n.fn[e]=s,o.jQueryInterface},o}(n)});
//# sourceMappingURL=metisMenu.min.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function p(e){return Object.keys(e).map(function(t){return e[t]})}function m(t){return Array.prototype.slice.call(t)}function g(t){console.error("".concat(e," ").concat(t))}function h(t,e){!function(t){-1===n.indexOf(t)&&(n.push(t),y(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function v(t){return t&&Promise.resolve(t)===t}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function b(e,t,n){m(e.classList).forEach(function(t){-1===p(k).indexOf(t)&&-1===p(B).indexOf(t)&&e.classList.remove(t)}),t&&t[n]&&nt(e,t[n])}var e="SweetAlert2:",y=function(t){console.warn("".concat(e," ").concat(t))},n=[],w=function(t){return"function"==typeof t?t():t},C=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),k=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),B=t(["success","warning","info","question","error"]),x={previousBodyPadding:null},S=function(t,e){return t.classList.contains(e)};function P(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return it(t,k[e]);case"checkbox":return t.querySelector(".".concat(k.checkbox," input"));case"radio":return t.querySelector(".".concat(k.radio," input:checked"))||t.querySelector(".".concat(k.radio," input:first-child"));case"range":return t.querySelector(".".concat(k.range," input"));default:return it(t,k.input)}}function A(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function L(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function E(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)}function T(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function O(t){t.style.opacity="",t.style.display="none"}function M(t,e,n){e?T(t,n):O(t)}function V(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function j(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function q(){return document.body.querySelector("."+k.container)}function H(t){var e=q();return e?e.querySelector(t):null}function I(t){return H("."+t)}function R(){var t=rt();return m(t.querySelectorAll("."+k.icon))}function N(){var t=R().filter(function(t){return V(t)});return t.length?t[0]:null}function D(){return I(k.title)}function U(){return I(k.content)}function _(){return I(k.image)}function z(){return I(k["progress-steps"])}function W(){return I(k["validation-message"])}function K(){return H("."+k.actions+" ."+k.confirm)}function F(){return H("."+k.actions+" ."+k.cancel)}function Z(){return I(k.actions)}function Q(){return I(k.header)}function Y(){return I(k.footer)}function $(){return I(k.close)}function J(){var t=m(rt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=m(rt().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return V(t)})}function X(){return"undefined"==typeof window||"undefined"==typeof document}function G(t){ce.isVisible()&&et!==t.target.value&&ce.resetValidationMessage(),et=t.target.value}function tt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===f(t)?lt(e,t):t&&(e.innerHTML=t)}var et,nt=function(t,e){L(t,e,!0)},ot=function(t,e){L(t,e,!1)},it=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(S(t.childNodes[n],e))return t.childNodes[n]},rt=function(){return I(k.popup)},at=function(){return!st()&&!document.body.classList.contains(k["no-backdrop"])},st=function(){return document.body.classList.contains(k["toast-shown"])},ut='\n <div aria-labelledby="'.concat(k.title,'" aria-describedby="').concat(k.content,'" class="').concat(k.popup,'" tabindex="-1">\n   <div class="').concat(k.header,'">\n     <ul class="').concat(k["progress-steps"],'"></ul>\n     <div class="').concat(k.icon," ").concat(B.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon," ").concat(B.question,'"></div>\n     <div class="').concat(k.icon," ").concat(B.warning,'"></div>\n     <div class="').concat(k.icon," ").concat(B.info,'"></div>\n     <div class="').concat(k.icon," ").concat(B.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image,'" />\n     <h2 class="').concat(k.title,'" id="').concat(k.title,'"></h2>\n     <button type="button" class="').concat(k.close,'">&times;</button>\n   </div>\n   <div class="').concat(k.content,'">\n     <div id="').concat(k.content,'"></div>\n     <input class="').concat(k.input,'" />\n     <input type="file" class="').concat(k.file,'" />\n     <div class="').concat(k.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select,'"></select>\n     <div class="').concat(k.radio,'"></div>\n     <label for="').concat(k.checkbox,'" class="').concat(k.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(k.label,'"></span>\n     </label>\n     <textarea class="').concat(k.textarea,'"></textarea>\n     <div class="').concat(k["validation-message"],'" id="').concat(k["validation-message"],'"></div>\n   </div>\n   <div class="').concat(k.actions,'">\n     <button type="button" class="').concat(k.confirm,'">OK</button>\n     <button type="button" class="').concat(k.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(k.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ct=function(t){if(function(){var t=q();t&&(t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k["no-backdrop"],k["toast-shown"],k["has-column"]]))}(),X())g("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=k.container,e.innerHTML=ut;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=rt();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&nt(q(),k.rtl)}(n),function(){var t=U(),e=it(t,k.input),n=it(t,k.file),o=t.querySelector(".".concat(k.range," input")),i=t.querySelector(".".concat(k.range," output")),r=it(t,k.select),a=t.querySelector(".".concat(k.checkbox," input")),s=it(t,k.textarea);e.oninput=G,n.onchange=G,r.onchange=G,a.onchange=G,s.oninput=G,o.oninput=function(t){G(t),i.value=o.value},o.onchange=function(t){G(t),o.nextSibling.value=o.value}}()}},lt=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},dt=function(){if(X())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];return!1}();function pt(t,e,n){M(t,n["showC"+e.substring(1)+"Button"],"inline-block"),t.innerHTML=n[e+"ButtonText"],t.setAttribute("aria-label",n[e+"ButtonAriaLabel"]),t.className=k[e],b(t,n.customClass,e+"Button"),nt(t,n[e+"ButtonClass"])}function ft(t,e){var n=Z(),o=K(),i=F();e.showConfirmButton||e.showCancelButton?T(n):O(n),b(n,e.customClass,"actions"),pt(o,"confirm",e),pt(i,"cancel",e),e.buttonsStyling?function(t,e,n){nt([t,e],k.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(ot([o,i],k.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor="")}function mt(t,e){var n=q();n&&(function(t,e){"string"==typeof e?t.style.background=e:e||nt([document.documentElement,document.body],k["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in k?nt(t,k[e]):(y('The "position" parameter is not valid, defaulting to "center"'),nt(t,k.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-"+e;n in k&&nt(t,k[n])}}(n,e.grow),b(n,e.customClass,"container"),e.customContainerClass&&nt(n,e.customContainerClass))}function gt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var ht={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},vt=function(t,e){var n=P(U(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},bt=function(t,e,n){t.className=e,n.inputClass&&nt(t,n.inputClass),n.customClass&&nt(t,n.customClass.input)},yt={};yt.text=yt.email=yt.password=yt.number=yt.tel=yt.url=function(t){var e=it(U(),k.input);return"string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:v(t.inputValue)||y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(t.inputValue),'"')),gt(e,t),e.type=t.input,e},yt.file=function(t){var e=it(U(),k.file);return gt(e,t),e.type=t.input,e},yt.range=function(t){var e=it(U(),k.range),n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,e},yt.select=function(t){var e=it(U(),k.select);if(e.innerHTML="",t.inputPlaceholder){var n=document.createElement("option");n.innerHTML=t.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return e},yt.radio=function(){var t=it(U(),k.radio);return t.innerHTML="",t},yt.checkbox=function(t){var e=it(U(),k.checkbox),n=P(U(),"checkbox");return n.type="checkbox",n.value=1,n.id=k.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span").innerHTML=t.inputPlaceholder,e},yt.textarea=function(t){var e=it(U(),k.textarea);return e.value=t.inputValue,gt(e,t),e};function wt(t,e){var n=U().querySelector("#"+k.content);e.html?(tt(e.html,n),T(n,"block")):e.text?(n.textContent=e.text,T(n,"block")):O(n),function(t,e){for(var n=ht.innerParams.get(t),o=!n||e.input!==n.input,i=U(),r=["input","file","range","select","radio","checkbox","textarea"],a=0;a<r.length;a++){var s=k[r[a]],u=it(i,s);vt(r[a],e.inputAttributes),bt(u,s,e),o&&O(u)}if(e.input){if(!yt[e.input])return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));if(o){var c=yt[e.input](e);T(c)}}}(t,e),b(U(),e.customClass,"content")}function Ct(t,i){var r=z();if(!i.progressSteps||0===i.progressSteps.length)return O(r);T(r),r.innerHTML="";var a=parseInt(null===i.currentProgressStep?ce.getQueueStep():i.currentProgressStep);a>=i.progressSteps.length&&y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(t,e){var n=function(t){var e=document.createElement("li");return nt(e,k["progress-step"]),e.innerHTML=t,e}(t);if(r.appendChild(n),e===a&&nt(n,k["active-progress-step"]),e!==i.progressSteps.length-1){var o=function(t){var e=document.createElement("li");return nt(e,k["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);r.appendChild(o)}})}function kt(t,e){var n=Q();b(n,e.customClass,"header"),Ct(0,e),function(t,e){var n=ht.innerParams.get(t);if(n&&e.type===n.type&&N())b(N(),e.customClass,"icon");else if(xt(),e.type)if(St(),-1!==Object.keys(B).indexOf(e.type)){var o=H(".".concat(k.icon,".").concat(B[e.type]));T(o),b(o,e.customClass,"icon"),L(o,"swal2-animate-".concat(e.type,"-icon"),e.animation)}else g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t,e),function(t,e){var n=_();if(!e.imageUrl)return O(n);T(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),E(n,"width",e.imageWidth),E(n,"height",e.imageHeight),n.className=k.image,b(n,e.customClass,"image"),e.imageClass&&nt(n,e.imageClass)}(0,e),function(t,e){var n=D();M(n,e.title||e.titleText),e.title&&tt(e.title,n),e.titleText&&(n.innerText=e.titleText),b(n,e.customClass,"title")}(0,e),function(t,e){var n=$();b(n,e.customClass,"closeButton"),M(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}function Bt(t,e){!function(t,e){var n=rt();E(n,"width",e.width),E(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=k.popup,e.toast?(nt([document.documentElement,document.body],k["toast-shown"]),nt(n,k.toast)):nt(n,k.modal),b(n,e.customClass,"popup"),"string"==typeof e.customClass&&nt(n,e.customClass),L(n,k.noanimation,!e.animation)}(0,e),mt(0,e),kt(t,e),wt(t,e),ft(0,e),function(t,e){var n=Y();M(n,e.footer),e.footer&&tt(e.footer,n),b(n,e.customClass,"footer")}(0,e)}var xt=function(){for(var t=R(),e=0;e<t.length;e++)O(t[e])},St=function(){for(var t=rt(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e};function Pt(){var t=rt();t||ce.fire(""),t=rt();var e=Z(),n=K(),o=F();T(e),T(n),nt([t,e],k.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function At(t){return Mt.hasOwnProperty(t)}function Lt(t){return jt[t]}var Et=[],Tt={},Ot=function(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Tt.restoreFocusTimeout=setTimeout(function(){Tt.previousActiveElement&&Tt.previousActiveElement.focus?(Tt.previousActiveElement.focus(),Tt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})},Mt={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},Vt=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],jt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},qt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Ht=Object.freeze({isValidParameter:At,isUpdatableParameter:function(t){return-1!==Vt.indexOf(t)},isDeprecatedParameter:Lt,argsToParams:function(n){var o={};switch(f(n[0])){case"object":a(o,n[0]);break;default:["title","html","type"].forEach(function(t,e){switch(f(n[e])){case"string":o[t]=n[e];break;case"undefined":break;default:g("Unexpected type of ".concat(t,'! Expected "string", got ').concat(f(n[e])))}})}return o},isVisible:function(){return V(rt())},clickConfirm:function(){return K()&&K().click()},clickCancel:function(){return F()&&F().click()},getContainer:q,getPopup:rt,getTitle:D,getContent:U,getImage:_,getIcon:N,getIcons:R,getCloseButton:$,getActions:Z,getConfirmButton:K,getCancelButton:F,getHeader:Q,getFooter:Y,getFocusableElements:J,getValidationMessage:W,isLoading:function(){return rt().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),r(e,[{key:"_main",value:function(t){return d(s(e.prototype),"_main",this).call(this,a({},n,t))}}]),e}(this)},queue:function(t){var r=this;Et=t;function a(t,e){Et=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}var s=[];return new Promise(function(i){!function e(n,o){n<Et.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Et[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<Et.length?Et.splice(e,0,t):Et.push(t)},deleteQueueStep:function(t){void 0!==Et[t]&&Et.splice(t,1)},showLoading:Pt,enableLoading:Pt,getTimerLeft:function(){return Tt.timeout&&Tt.timeout.getTimerLeft()},stopTimer:function(){return Tt.timeout&&Tt.timeout.stop()},resumeTimer:function(){return Tt.timeout&&Tt.timeout.start()},toggleTimer:function(){var t=Tt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return Tt.timeout&&Tt.timeout.increase(t)},isTimerRunning:function(){return Tt.timeout&&Tt.timeout.isRunning()}});function It(){var t=ht.innerParams.get(this),e=ht.domCache.get(this);t.showConfirmButton||(O(e.confirmButton),t.showCancelButton||O(e.actions)),ot([e.popup,e.actions],k.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}function Rt(){null===x.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(x.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=x.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px")}function Nt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Dt(){var t=q(),e=rt();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var Ut=function(){null!==x.previousBodyPadding&&(document.body.style.paddingRight=x.previousBodyPadding+"px",x.previousBodyPadding=null)},_t=function(){var e,n=q();n.ontouchstart=function(t){e=t.target===n||!function(t){return!!(t.scrollHeight>t.clientHeight)}(n)&&"INPUT"!==t.target.tagName},n.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},zt=function(){if(S(document.body,k.iosfix)){var t=parseInt(document.body.style.top,10);ot(document.body,k.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Wt=function(){"undefined"!=typeof window&&Nt()&&window.removeEventListener("resize",Dt)},Kt=function(){m(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Ft={swalPromiseResolve:new WeakMap};function Zt(t,e,n){e?$t(n):(Ot().then(function(){return $t(n)}),Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),delete Tt.keydownHandler,delete Tt.keydownTarget,t.parentNode&&t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k.shown,k["height-auto"],k["no-backdrop"],k["toast-shown"],k["toast-column"]]),at()&&(Ut(),zt(),Wt(),Kt())}function Qt(t){var e=q(),n=rt();if(n&&!S(n,k.hide)){var o=ht.innerParams.get(this),i=Ft.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;ot(n,k.show),nt(n,k.hide),dt&&j(n)?n.addEventListener(dt,function(t){t.target===n&&function(t,e,n,o){S(t,k.hide)&&Zt(e,n,o),Yt(ht),Yt(Ft)}(n,e,st(),a)}):Zt(e,st(),a),null!==r&&"function"==typeof r&&r(n),i(t||{}),delete this.params}}var Yt=function(t){for(var e in t)t[e]=new WeakMap},$t=function(t){null!==t&&"function"==typeof t&&setTimeout(function(){t()})};function Jt(t,e,n){var o=ht.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Xt(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Gt=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return r(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),te={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function ee(t,e){t.removeEventListener(dt,ee),e.style.overflowY="auto"}function ne(t){var e=q(),n=rt();null!==t.onBeforeOpen&&"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),t.animation&&(nt(n,k.show),nt(e,k.fade)),T(n),dt&&j(n)?(e.style.overflowY="hidden",n.addEventListener(dt,ee.bind(null,n,e))):e.style.overflowY="auto",nt([document.documentElement,document.body,e],k.shown),t.heightAuto&&t.backdrop&&!t.toast&&nt([document.documentElement,document.body],k["height-auto"]),at()&&(t.scrollbarPadding&&Rt(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!S(document.body,k.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",nt(document.body,k.iosfix),_t()}}(),"undefined"!=typeof window&&Nt()&&(Dt(),window.addEventListener("resize",Dt)),m(document.body.children).forEach(function(t){t===q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),setTimeout(function(){e.scrollTop=0})),st()||Tt.previousActiveElement||(Tt.previousActiveElement=document.activeElement),null!==t.onOpen&&"function"==typeof t.onOpen&&setTimeout(function(){t.onOpen(n)})}var oe=void 0,ie={select:function(t,e,i){var r=it(t,k.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var s=it(t,k.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=k.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=k.label,i.appendChild(o),i.appendChild(r),s.appendChild(i)});var n=s.querySelectorAll("input");n.length&&n[0].focus()}},re=function(e){var n=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n};var ae,se=Object.freeze({hideLoading:It,disableLoading:It,getInput:function(t){var e=ht.innerParams.get(t||this);return P(ht.domCache.get(t||this).content,e.input)},close:Qt,closePopup:Qt,closeModal:Qt,closeToast:Qt,enableButtons:function(){Jt(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Jt(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){h("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),Jt(this,["confirmButton"],!1)},disableConfirmButton:function(){h("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),Jt(this,["confirmButton"],!0)},enableInput:function(){return Xt(this.getInput(),!1)},disableInput:function(){return Xt(this.getInput(),!0)},showValidationMessage:function(t){var e=ht.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),T(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",k["validation-message"]),A(o),nt(o,k.inputerror))},resetValidationMessage:function(){var t=ht.domCache.get(this);t.validationMessage&&O(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ot(e,k.inputerror))},getProgressSteps:function(){return h("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),ht.innerParams.get(this).progressSteps},setProgressSteps:function(t){h("Swal.setProgressSteps()","Swal.update()");var e=a({},ht.innerParams.get(this),{progressSteps:t});Ct(0,e),ht.innerParams.set(this,e)},showProgressSteps:function(){var t=ht.domCache.get(this);T(t.progressSteps)},hideProgressSteps:function(){var t=ht.domCache.get(this);O(t.progressSteps)},_main:function(t){var c=this;!function(t){for(var e in t)At(i=e)||y('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==qt.indexOf(o)&&y('The parameter "'.concat(o,'" is incompatible with toasts'))),Lt(n=void 0)&&h(n,Lt(n));var n,o,i}(t);var l=a({},Mt,t);!function(e){e.inputValidator||Object.keys(te).forEach(function(t){e.input===t&&(e.inputValidator=te[t])}),e.showLoaderOnConfirm&&!e.preConfirm&&y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),e.animation=w(e.animation),e.target&&("string"!=typeof e.target||document.querySelector(e.target))&&("string"==typeof e.target||e.target.appendChild)||(y('Target parameter is not valid, defaulting to "body"'),e.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t=rt(),n="string"==typeof e.target?document.querySelector(e.target):e.target;(!t||t&&n&&t.parentNode!==n.parentNode)&&ct(e)}(l),Object.freeze(l),Tt.timeout&&(Tt.timeout.stop(),delete Tt.timeout),clearTimeout(Tt.restoreFocusTimeout);var d={popup:rt(),container:q(),content:U(),actions:Z(),confirmButton:K(),cancelButton:F(),closeButton:$(),validationMessage:W(),progressSteps:z()};ht.domCache.set(this,d),Bt(this,l),ht.innerParams.set(this,l);var p=this.constructor;return new Promise(function(t){function n(t){c.closePopup({value:t})}function s(t){c.closePopup({dismiss:t})}Ft.swalPromiseResolve.set(c,t),l.timer&&(Tt.timeout=new Gt(function(){s("timer"),delete Tt.timeout},l.timer));l.input&&setTimeout(function(){var t=c.getInput();t&&A(t)},0);for(var u=function(e){(l.showLoaderOnConfirm&&p.showLoading(),l.preConfirm)?(c.resetValidationMessage(),Promise.resolve().then(function(){return l.preConfirm(e,l.validationMessage)}).then(function(t){V(d.validationMessage)||!1===t?c.hideLoading():n(void 0===t?e:t)})):n(e)},e=function(t){var e=t.target,n=d.confirmButton,o=d.cancelButton,i=n&&(n===e||n.contains(e)),r=o&&(o===e||o.contains(e));switch(t.type){case"click":if(i)if(c.disableButtons(),l.input){var a=function(){var t=c.getInput();if(!t)return null;switch(l.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return l.inputAutoTrim?t.value.trim():t.value}}();if(l.inputValidator)c.disableInput(),Promise.resolve().then(function(){return l.inputValidator(a,l.validationMessage)}).then(function(t){c.enableButtons(),c.enableInput(),t?c.showValidationMessage(t):u(a)});else c.getInput().checkValidity()?u(a):(c.enableButtons(),c.showValidationMessage(l.validationMessage))}else u(!0);else r&&(c.disableButtons(),s(p.DismissReason.cancel))}},o=d.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=e,o[i].onmouseover=e,o[i].onmouseout=e,o[i].onmousedown=e;if(d.closeButton.onclick=function(){s(p.DismissReason.close)},l.toast)d.popup.onclick=function(){l.showConfirmButton||l.showCancelButton||l.showCloseButton||l.input||s(p.DismissReason.close)};else{var r=!1;d.popup.onmousedown=function(){d.container.onmouseup=function(t){d.container.onmouseup=void 0,t.target===d.container&&(r=!0)}},d.container.onmousedown=function(){d.popup.onmouseup=function(t){d.popup.onmouseup=void 0,t.target!==d.popup&&!d.popup.contains(t.target)||(r=!0)}},d.container.onclick=function(t){r?r=!1:t.target===d.container&&w(l.allowOutsideClick)&&s(p.DismissReason.backdrop)}}l.reverseButtons?d.confirmButton.parentNode.insertBefore(d.cancelButton,d.confirmButton):d.confirmButton.parentNode.insertBefore(d.confirmButton,d.cancelButton);function a(t,e){for(var n=J(l.focusCancel),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();d.popup.focus()}Tt.keydownTarget&&Tt.keydownHandlerAdded&&(Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),l.toast||(Tt.keydownHandler=function(t){return function(t,e){e.stopKeydownPropagation&&t.stopPropagation();if("Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var n=t.target,o=J(e.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?a(i,-1):a(i,1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===d.confirmButton&&V(d.cancelButton)?d.cancelButton.focus():document.activeElement===d.cancelButton&&V(d.confirmButton)&&d.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==w(e.allowEscapeKey)||(t.preventDefault(),s(p.DismissReason.esc));else if(t.target&&c.getInput()&&t.target.outerHTML===c.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;p.clickConfirm(),t.preventDefault()}}(t,l)},Tt.keydownTarget=l.keydownListenerCapture?window:d.popup,Tt.keydownListenerCapture=l.keydownListenerCapture,Tt.keydownTarget.addEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!0),c.enableButtons(),c.hideLoading(),c.resetValidationMessage(),l.toast&&(l.input||l.footer||l.showCloseButton)?nt(document.body,k["toast-column"]):ot(document.body,k["toast-column"]),"select"===l.input||"radio"===l.input?function(e,n){function o(t){return ie[n.input](i,re(t),n)}var i=U();v(n.inputOptions)?(Pt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===f(n.inputOptions)?o(n.inputOptions):g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(f(n.inputOptions)))}(c,l):-1!==["text","email","number","tel","textarea"].indexOf(l.input)&&v(l.inputValue)&&function(e,n){var o=e.getInput();O(o),n.inputValue.then(function(t){o.value="number"===n.input?parseFloat(t)||0:t+"",T(o),o.focus(),e.hideLoading()}).catch(function(t){g("Error in inputValue promise: "+t),o.value="",T(o),o.focus(),oe.hideLoading()})}(c,l),ne(l),l.toast||(w(l.allowEnterKey)?l.focusCancel&&V(d.cancelButton)?d.cancelButton.focus():l.focusConfirm&&V(d.confirmButton)?d.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),d.container.scrollTop=0})},update:function(e){var n={};Object.keys(e).forEach(function(t){ce.isUpdatableParameter(t)?n[t]=e[t]:y('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var t=a({},ht.innerParams.get(this),n);Bt(this,t),ht.innerParams.set(this,t),Object.defineProperties(this,{params:{value:a({},this.params,e),writable:!1,enumerable:!0}})}});function ue(){if("undefined"!=typeof window){"undefined"==typeof Promise&&g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),ae=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);ht.promise.set(this,i)}}ue.prototype.then=function(t){return ht.promise.get(this).then(t)},ue.prototype.finally=function(t){return ht.promise.get(this).finally(t)},a(ue.prototype,se),a(ue,Ht),Object.keys(se).forEach(function(e){ue[e]=function(){var t;if(ae)return(t=ae)[e].apply(t,arguments)}}),ue.DismissReason=C,ue.version="8.11.8";var ce=ue;return ce.default=ce}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"؟\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}");
/*! jsTree - v3.3.2 - 2016-08-15 - (MIT) */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a,b){"use strict";if(!a.jstree){var c=0,d=!1,e=!1,f=!1,g=[],h=a("script:last").attr("src"),i=window.document,j=i.createElement("LI"),k,l;j.setAttribute("role","treeitem"),k=i.createElement("I"),k.className="jstree-icon jstree-ocl",k.setAttribute("role","presentation"),j.appendChild(k),k=i.createElement("A"),k.className="jstree-anchor",k.setAttribute("href","#"),k.setAttribute("tabindex","-1"),l=i.createElement("I"),l.className="jstree-icon jstree-themeicon",l.setAttribute("role","presentation"),k.appendChild(l),j.appendChild(k),k=l=null,a.jstree={version:"3.3.2",defaults:{plugins:[]},plugins:{},path:h&&-1!==h.indexOf("/")?h.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},a.jstree.create=function(b,d){var e=new a.jstree.core(++c),f=d;return d=a.extend(!0,{},a.jstree.defaults,d),f&&f.plugins&&(d.plugins=f.plugins),a.each(d.plugins,function(a,b){"core"!==a&&(e=e.plugin(b,d[b]))}),a(b).data("jstree",e),e.init(b,d),e},a.jstree.destroy=function(){a(".jstree:jstree").jstree("destroy"),a(i).off(".jstree")},a.jstree.core=function(a){this._id=a,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},a.jstree.reference=function(b){var c=null,d=null;if(!b||!b.id||b.tagName&&b.nodeType||(b=b.id),!d||!d.length)try{d=a(b)}catch(e){}if(!d||!d.length)try{d=a("#"+b.replace(a.jstree.idregex,"\\$&"))}catch(e){}return d&&d.length&&(d=d.closest(".jstree")).length&&(d=d.data("jstree"))?c=d:a(".jstree").each(function(){var d=a(this).data("jstree");return d&&d._model.data[b]?(c=d,!1):void 0}),c},a.fn.jstree=function(c){var d="string"==typeof c,e=Array.prototype.slice.call(arguments,1),f=null;return c!==!0||this.length?(this.each(function(){var g=a.jstree.reference(this),h=d&&g?g[c]:null;return f=d&&h?h.apply(g,e):null,g||d||c!==b&&!a.isPlainObject(c)||a.jstree.create(this,c),(g&&!d||c===!0)&&(f=g||!1),null!==f&&f!==b?!1:void 0}),null!==f&&f!==b?f:this):!1},a.expr.pseudos.jstree=a.expr.createPseudo(function(c){return function(c){return a(c).hasClass("jstree")&&a(c).data("jstree")!==b}}),a.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:a.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0},a.jstree.core.prototype={plugin:function(b,c){var d=a.jstree.plugins[b];return d?(this._data[b]={},d.prototype=this,new d(c,this)):this},init:function(b,c){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=a(b).addClass("jstree jstree-"+this._id),this.settings=c,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl="rtl"===this.element.css("direction"),this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return 3===this.nodeType&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().height()||24,this.trigger("loading"),this.load_node(a.jstree.root)},destroy:function(a){if(this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch(b){}a||this.element.empty(),this.teardown()},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){var b="",c=null,d=0;this.element.on("dblclick.jstree",function(a){if(a.target.tagName&&"input"===a.target.tagName.toLowerCase())return!0;if(i.selection&&i.selection.empty)i.selection.empty();else if(window.getSelection){var b=window.getSelection();try{b.removeAllRanges(),b.collapse()}catch(c){}}}).on("mousedown.jstree",a.proxy(function(a){a.target===this.element[0]&&(a.preventDefault(),d=+new Date)},this)).on("mousedown.jstree",".jstree-ocl",function(a){a.preventDefault()}).on("click.jstree",".jstree-ocl",a.proxy(function(a){this.toggle_node(a.target)},this)).on("dblclick.jstree",".jstree-anchor",a.proxy(function(a){return a.target.tagName&&"input"===a.target.tagName.toLowerCase()?!0:void(this.settings.core.dblclick_toggle&&this.toggle_node(a.target))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(b){b.preventDefault(),b.currentTarget!==i.activeElement&&a(b.currentTarget).focus(),this.activate_node(b.currentTarget,b)},this)).on("keydown.jstree",".jstree-anchor",a.proxy(function(b){if(b.target.tagName&&"input"===b.target.tagName.toLowerCase())return!0;if(32!==b.which&&13!==b.which&&(b.shiftKey||b.ctrlKey||b.altKey||b.metaKey))return!0;var c=null;switch(this._data.core.rtl&&(37===b.which?b.which=39:39===b.which&&(b.which=37)),b.which){case 32:b.ctrlKey&&(b.type="click",a(b.currentTarget).trigger(b));break;case 13:b.type="click",a(b.currentTarget).trigger(b);break;case 37:b.preventDefault(),this.is_open(b.currentTarget)?this.close_node(b.currentTarget):(c=this.get_parent(b.currentTarget),c&&c.id!==a.jstree.root&&this.get_node(c,!0).children(".jstree-anchor").focus());break;case 38:b.preventDefault(),c=this.get_prev_dom(b.currentTarget),c&&c.length&&c.children(".jstree-anchor").focus();break;case 39:b.preventDefault(),this.is_closed(b.currentTarget)?this.open_node(b.currentTarget,function(a){this.get_node(a,!0).children(".jstree-anchor").focus()}):this.is_open(b.currentTarget)&&(c=this.get_node(b.currentTarget,!0).children(".jstree-children")[0],c&&a(this._firstChild(c)).children(".jstree-anchor").focus());break;case 40:b.preventDefault(),c=this.get_next_dom(b.currentTarget),c&&c.length&&c.children(".jstree-anchor").focus();break;case 106:this.open_all();break;case 36:b.preventDefault(),c=this._firstChild(this.get_container_ul()[0]),c&&a(c).children(".jstree-anchor").filter(":visible").focus();break;case 35:b.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().focus();break;case 113:b.preventDefault(),this.edit(b.currentTarget)}},this)).on("load_node.jstree",a.proxy(function(b,c){c.status&&(c.node.id!==a.jstree.root||this._data.core.loaded||(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(a.proxy(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var b=[],c,d;for(c=0,d=this._data.core.selected.length;d>c;c++)b=b.concat(this._model.data[this._data.core.selected[c]].parents);for(b=a.vakata.array_unique(b),c=0,d=b.length;d>c;c++)this.open_node(b[c],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this),0))},this)).on("keypress.jstree",a.proxy(function(d){if(d.target.tagName&&"input"===d.target.tagName.toLowerCase())return!0;c&&clearTimeout(c),c=setTimeout(function(){b=""},500);var e=String.fromCharCode(d.which).toLowerCase(),f=this.element.find(".jstree-anchor").filter(":visible"),g=f.index(i.activeElement)||0,h=!1;if(b+=e,b.length>1){if(f.slice(g).each(a.proxy(function(c,d){return 0===a(d).text().toLowerCase().indexOf(b)?(a(d).focus(),h=!0,!1):void 0},this)),h)return;if(f.slice(0,g).each(a.proxy(function(c,d){return 0===a(d).text().toLowerCase().indexOf(b)?(a(d).focus(),h=!0,!1):void 0},this)),h)return}if(new RegExp("^"+e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(b)){if(f.slice(g+1).each(a.proxy(function(b,c){return a(c).text().toLowerCase().charAt(0)===e?(a(c).focus(),h=!0,!1):void 0},this)),h)return;if(f.slice(0,g+1).each(a.proxy(function(b,c){return a(c).text().toLowerCase().charAt(0)===e?(a(c).focus(),h=!0,!1):void 0},this)),h)return}},this)).on("init.jstree",a.proxy(function(){var a=this.settings.core.themes;this._data.core.themes.dots=a.dots,this._data.core.themes.stripes=a.stripes,this._data.core.themes.icons=a.icons,this.set_theme(a.name||"default",a.url),this.set_theme_variant(a.variant)},this)).on("loading.jstree",a.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"]()},this)).on("blur.jstree",".jstree-anchor",a.proxy(function(b){this._data.core.focused=null,a(b.currentTarget).filter(".jstree-hovered").mouseleave(),this.element.attr("tabindex","0")},this)).on("focus.jstree",".jstree-anchor",a.proxy(function(b){var c=this.get_node(b.currentTarget);c&&c.id&&(this._data.core.focused=c.id),this.element.find(".jstree-hovered").not(b.currentTarget).mouseleave(),a(b.currentTarget).mouseenter(),this.element.attr("tabindex","-1")},this)).on("focus.jstree",a.proxy(function(){if(+new Date-d>500&&!this._data.core.focused){d=0;var a=this.get_node(this.element.attr("aria-activedescendant"),!0);a&&a.find("> .jstree-anchor").focus()}},this)).on("mouseenter.jstree",".jstree-anchor",a.proxy(function(a){this.hover_node(a.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",a.proxy(function(a){this.dehover_node(a.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),a(i).off(".jstree-"+this._id)},trigger:function(a,b){b||(b={}),b.instance=this,this.element.triggerHandler(a.replace(".jstree","")+".jstree",b)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(b){var c=this.settings.core.strings;return a.isFunction(c)?c.call(this,b):c&&c[b]?c[b]:b},_firstChild:function(a){a=a?a.firstChild:null;while(null!==a&&1!==a.nodeType)a=a.nextSibling;return a},_nextSibling:function(a){a=a?a.nextSibling:null;while(null!==a&&1!==a.nodeType)a=a.nextSibling;return a},_previousSibling:function(a){a=a?a.previousSibling:null;while(null!==a&&1!==a.nodeType)a=a.previousSibling;return a},get_node:function(b,c){b&&b.id&&(b=b.id);var d;try{if(this._model.data[b])b=this._model.data[b];else if("string"==typeof b&&this._model.data[b.replace(/^#/,"")])b=this._model.data[b.replace(/^#/,"")];else if("string"==typeof b&&(d=a("#"+b.replace(a.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[d.closest(".jstree-node").attr("id")])b=this._model.data[d.closest(".jstree-node").attr("id")];else if((d=a(b,this.element)).length&&this._model.data[d.closest(".jstree-node").attr("id")])b=this._model.data[d.closest(".jstree-node").attr("id")];else{if(!(d=a(b,this.element)).length||!d.hasClass("jstree"))return!1;b=this._model.data[a.jstree.root]}return c&&(b=b.id===a.jstree.root?this.element:a("#"+b.id.replace(a.jstree.idregex,"\\$&"),this.element)),b}catch(e){return!1}},get_path:function(b,c,d){if(b=b.parents?b:this.get_node(b),!b||b.id===a.jstree.root||!b.parents)return!1;var e,f,g=[];for(g.push(d?b.id:b.text),e=0,f=b.parents.length;f>e;e++)g.push(d?b.parents[e]:this.get_text(b.parents[e]));return g=g.reverse().slice(1),c?g.join(c):g},get_next_dom:function(b,c){var d;if(b=this.get_node(b,!0),b[0]===this.element[0]){d=this._firstChild(this.get_container_ul()[0]);while(d&&0===d.offsetHeight)d=this._nextSibling(d);return d?a(d):!1}if(!b||!b.length)return!1;if(c){d=b[0];do d=this._nextSibling(d);while(d&&0===d.offsetHeight);return d?a(d):!1}if(b.hasClass("jstree-open")){d=this._firstChild(b.children(".jstree-children")[0]);while(d&&0===d.offsetHeight)d=this._nextSibling(d);if(null!==d)return a(d)}d=b[0];do d=this._nextSibling(d);while(d&&0===d.offsetHeight);return null!==d?a(d):b.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(b,c){var d;if(b=this.get_node(b,!0),b[0]===this.element[0]){d=this.get_container_ul()[0].lastChild;while(d&&0===d.offsetHeight)d=this._previousSibling(d);return d?a(d):!1}if(!b||!b.length)return!1;if(c){d=b[0];do d=this._previousSibling(d);while(d&&0===d.offsetHeight);return d?a(d):!1}d=b[0];do d=this._previousSibling(d);while(d&&0===d.offsetHeight);if(null!==d){b=a(d);while(b.hasClass("jstree-open"))b=b.children(".jstree-children").first().children(".jstree-node:visible:last");return b}return d=b[0].parentNode.parentNode,d&&d.className&&-1!==d.className.indexOf("jstree-node")?a(d):!1},get_parent:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.parent:!1},get_children_dom:function(a){return a=this.get_node(a,!0),a[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):a&&a.length?a.children(".jstree-children").children(".jstree-node"):!1},is_parent:function(a){return a=this.get_node(a),a&&(a.state.loaded===!1||a.children.length>0)},is_loaded:function(a){return a=this.get_node(a),a&&a.state.loaded},is_loading:function(a){return a=this.get_node(a),a&&a.state&&a.state.loading},is_open:function(a){return a=this.get_node(a),a&&a.state.opened},is_closed:function(a){return a=this.get_node(a),a&&this.is_parent(a)&&!a.state.opened},is_leaf:function(a){return!this.is_parent(a)},load_node:function(b,c){var d,e,f,g,h;if(a.isArray(b))return this._load_nodes(b.slice(),c),!0;if(b=this.get_node(b),!b)return c&&c.call(this,b,!1),!1;if(b.state.loaded){for(b.state.loaded=!1,f=0,g=b.parents.length;g>f;f++)this._model.data[b.parents[f]].children_d=a.vakata.array_filter(this._model.data[b.parents[f]].children_d,function(c){return-1===a.inArray(c,b.children_d)});for(d=0,e=b.children_d.length;e>d;d++)this._model.data[b.children_d[d]].state.selected&&(h=!0),delete this._model.data[b.children_d[d]];h&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(c){return-1===a.inArray(c,b.children_d)})),b.children=[],b.children_d=[],h&&this.trigger("changed",{action:"load_node",node:b,selected:this._data.core.selected})}return b.state.failed=!1,b.state.loading=!0,this.get_node(b,!0).addClass("jstree-loading").attr("aria-busy",!0),this._load_node(b,a.proxy(function(a){b=this._model.data[b.id],b.state.loading=!1,b.state.loaded=a,b.state.failed=!b.state.loaded;var d=this.get_node(b,!0),e=0,f=0,g=this._model.data,h=!1;for(e=0,f=b.children.length;f>e;e++)if(g[b.children[e]]&&!g[b.children[e]].state.hidden){h=!0;break}b.state.loaded&&d&&d.length&&(d.removeClass("jstree-closed jstree-open jstree-leaf"),h?"#"!==b.id&&d.addClass(b.state.opened?"jstree-open":"jstree-closed"):d.addClass("jstree-leaf")),d.removeClass("jstree-loading").attr("aria-busy",!1),this.trigger("load_node",{node:b,status:a}),c&&c.call(this,b,a)},this)),!0},_load_nodes:function(a,b,c,d){var e=!0,f=function(){this._load_nodes(a,b,!0)},g=this._model.data,h,i,j=[];for(h=0,i=a.length;i>h;h++)g[a[h]]&&(!g[a[h]].state.loaded&&!g[a[h]].state.failed||!c&&d)&&(this.is_loading(a[h])||this.load_node(a[h],f),e=!1);if(e){for(h=0,i=a.length;i>h;h++)g[a[h]]&&g[a[h]].state.loaded&&j.push(a[h]);b&&!b.done&&(b.call(this,j),b.done=!0)}},load_all:function(b,c){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var d=[],e=this._model.data,f=e[b.id].children_d,g,h;for(b.state&&!b.state.loaded&&d.push(b.id),g=0,h=f.length;h>g;g++)e[f[g]]&&e[f[g]].state&&!e[f[g]].state.loaded&&d.push(f[g]);d.length?this._load_nodes(d,function(){this.load_all(b,c)}):(c&&c.call(this,b),this.trigger("load_all",{node:b}))},_load_node:function(b,c){var d=this.settings.core.data,e,f=function g(){return 3!==this.nodeType&&8!==this.nodeType};return d?a.isFunction(d)?d.call(this,b,a.proxy(function(d){d===!1?c.call(this,!1):this["string"==typeof d?"_append_html_data":"_append_json_data"](b,"string"==typeof d?a(a.parseHTML(d)).filter(f):d,function(a){c.call(this,a)})},this)):"object"==typeof d?d.url?(d=a.extend(!0,{},d),a.isFunction(d.url)&&(d.url=d.url.call(this,b)),a.isFunction(d.data)&&(d.data=d.data.call(this,b)),a.ajax(d).done(a.proxy(function(d,e,g){var h=g.getResponseHeader("Content-Type");return h&&-1!==h.indexOf("json")||"object"==typeof d?this._append_json_data(b,d,function(a){c.call(this,a)}):h&&-1!==h.indexOf("html")||"string"==typeof d?this._append_html_data(b,a(a.parseHTML(d)).filter(f),function(a){c.call(this,a)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:b.id,xhr:g})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1))},this)).fail(a.proxy(function(a){c.call(this,!1),this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:b.id,xhr:a})},this.settings.core.error.call(this,this._data.core.last_error)},this))):(e=a.isArray(d)||a.isPlainObject(d)?JSON.parse(JSON.stringify(d)):d,b.id===a.jstree.root?this._append_json_data(b,e,function(a){c.call(this,a)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:b.id})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1))):"string"==typeof d?b.id===a.jstree.root?this._append_html_data(b,a(a.parseHTML(d)).filter(f),function(a){c.call(this,a)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:b.id})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1)):c.call(this,!1):b.id===a.jstree.root?this._append_html_data(b,this._data.core.original_container_html.clone(!0),function(a){c.call(this,a)}):c.call(this,!1)},_node_changed:function(a){a=this.get_node(a),a&&this._model.changed.push(a.id)},_append_html_data:function(b,c,d){b=this.get_node(b),b.children=[],b.children_d=[];var e=c.is("ul")?c.children():c,f=b.id,g=[],h=[],i=this._model.data,j=i[f],k=this._data.core.selected.length,l,m,n;for(e.each(a.proxy(function(b,c){l=this._parse_model_from_html(a(c),f,j.parents.concat()),l&&(g.push(l),h.push(l),i[l].children_d.length&&(h=h.concat(i[l].children_d)))},this)),j.children=g,j.children_d=h,m=0,n=j.parents.length;n>m;m++)i[j.parents[m]].children_d=i[j.parents[m]].children_d.concat(h);this.trigger("model",{nodes:h,parent:f}),f!==a.jstree.root?(this._node_changed(f),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==k&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),d.call(this,!0)},_append_json_data:function(b,c,d,e){if(null!==this.element){b=this.get_node(b),b.children=[],b.children_d=[],c.d&&(c=c.d,"string"==typeof c&&(c=JSON.parse(c))),a.isArray(c)||(c=[c]);var f=null,g={df:this._model.default_state,dat:c,par:b.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},h=function(a,b){a.data&&(a=a.data);var c=a.dat,d=a.par,e=[],f=[],g=[],h=a.df,i=a.t_id,j=a.t_cnt,k=a.m,l=k[d],m=a.sel,n,o,p,q,r=function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=a.id.toString(),f,i,j,l,m={id:e,text:a.text||"",icon:a.icon!==b?a.icon:!0,parent:c,parents:d,children:a.children||[],children_d:a.children_d||[],data:a.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in h)h.hasOwnProperty(f)&&(m.state[f]=h[f]);if(a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(m.icon=a.data.jstree.icon),(m.icon===b||null===m.icon||""===m.icon)&&(m.icon=!0),a&&a.data&&(m.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(m.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(m.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(m.li_attr[f]=a.li_attr[f]);if(m.li_attr.id||(m.li_attr.id=e),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(m.a_attr[f]=a.a_attr[f]);for(a&&a.children&&a.children===!0&&(m.state.loaded=!1,m.children=[],m.children_d=[]),k[m.id]=m,f=0,i=m.children.length;i>f;f++)j=r(k[m.children[f]],m.id,d),l=k[j],m.children_d.push(j),l.children_d.length&&(m.children_d=m.children_d.concat(l.children_d));return delete a.data,delete a.children,k[m.id].original=a,m.state.selected&&g.push(m.id),m.id},s=function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=!1,f,l,m,n,o;do e="j"+i+"_"+ ++j;while(k[e]);o={id:!1,text:"string"==typeof a?a:"",icon:"object"==typeof a&&a.icon!==b?a.icon:!0,parent:c,parents:d,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in h)h.hasOwnProperty(f)&&(o.state[f]=h[f]);if(a&&a.id&&(o.id=a.id.toString()),a&&a.text&&(o.text=a.text),a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(o.icon=a.data.jstree.icon),(o.icon===b||null===o.icon||""===o.icon)&&(o.icon=!0),a&&a.data&&(o.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(o.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(o.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(o.li_attr[f]=a.li_attr[f]);if(o.li_attr.id&&!o.id&&(o.id=o.li_attr.id.toString()),o.id||(o.id=e),o.li_attr.id||(o.li_attr.id=o.id),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(o.a_attr[f]=a.a_attr[f]);if(a&&a.children&&a.children.length){for(f=0,l=a.children.length;l>f;f++)m=s(a.children[f],o.id,d),n=k[m],o.children.push(m),n.children_d.length&&(o.children_d=o.children_d.concat(n.children_d));o.children_d=o.children_d.concat(o.children)}return a&&a.children&&a.children===!0&&(o.state.loaded=!1,o.children=[],o.children_d=[]),delete a.data,delete a.children,o.original=a,k[o.id]=o,o.state.selected&&g.push(o.id),o.id};if(c.length&&c[0].id!==b&&c[0].parent!==b){for(o=0,p=c.length;p>o;o++)c[o].children||(c[o].children=[]),k[c[o].id.toString()]=c[o];for(o=0,p=c.length;p>o;o++)k[c[o].parent.toString()].children.push(c[o].id.toString()),l.children_d.push(c[o].id.toString());for(o=0,p=l.children.length;p>o;o++)n=r(k[l.children[o]],d,l.parents.concat()),f.push(n),k[n].children_d.length&&(f=f.concat(k[n].children_d));for(o=0,p=l.parents.length;p>o;o++)k[l.parents[o]].children_d=k[l.parents[o]].children_d.concat(f);q={cnt:j,mod:k,sel:m,par:d,dpc:f,add:g}}else{for(o=0,p=c.length;p>o;o++)n=s(c[o],d,l.parents.concat()),n&&(e.push(n),f.push(n),k[n].children_d.length&&(f=f.concat(k[n].children_d)));for(l.children=e,l.children_d=f,o=0,p=l.parents.length;p>o;o++)k[l.parents[o]].children_d=k[l.parents[o]].children_d.concat(f);q={cnt:j,mod:k,sel:m,par:d,dpc:f,add:g}}return"undefined"!=typeof window&&"undefined"!=typeof window.document?q:void postMessage(q)},i=function(b,c){if(null!==this.element){this._cnt=b.cnt;var e,f=this._model.data;for(e in f)f.hasOwnProperty(e)&&f[e].state&&f[e].state.loading&&b.mod[e]&&(b.mod[e].state.loading=!0);if(this._model.data=b.mod,c){var g,h=b.add,i=b.sel,j=this._data.core.selected.slice();if(f=this._model.data,i.length!==j.length||a.vakata.array_unique(i.concat(j)).length!==i.length){for(e=0,g=i.length;g>e;e++)-1===a.inArray(i[e],h)&&-1===a.inArray(i[e],j)&&(f[i[e]].state.selected=!1);for(e=0,g=j.length;g>e;e++)-1===a.inArray(j[e],i)&&(f[j[e]].state.selected=!0)}}b.add.length&&(this._data.core.selected=this._data.core.selected.concat(b.add)),this.trigger("model",{nodes:b.dpc,parent:b.par}),b.par!==a.jstree.root?(this._node_changed(b.par),this.redraw()):this.redraw(!0),b.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),d.call(this,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{null===this._wrk&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+h.toString()],{type:"text/javascript"}))),!this._data.core.working||e?(this._data.core.working=!0,f=new window.Worker(this._wrk),f.onmessage=a.proxy(function(a){i.call(this,a.data,!0);try{f.terminate(),f=null}catch(b){}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),g.par?f.postMessage(g):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([b,c,d,!0])}catch(j){i.call(this,h(g),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else i.call(this,h(g),!1)}},_parse_model_from_html:function(c,d,e){e=e?[].concat(e):[],d&&e.unshift(d);var f,g,h=this._model.data,i={id:!1,text:!1,icon:!0,parent:d,parents:e,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},j,k,l;for(j in this._model.default_state)this._model.default_state.hasOwnProperty(j)&&(i.state[j]=this._model.default_state[j]);if(k=a.vakata.attributes(c,!0),a.each(k,function(b,c){return c=a.trim(c),c.length?(i.li_attr[b]=c,void("id"===b&&(i.id=c.toString()))):!0}),k=c.children("a").first(),k.length&&(k=a.vakata.attributes(k,!0),a.each(k,function(b,c){c=a.trim(c),c.length&&(i.a_attr[b]=c)})),k=c.children("a").first().length?c.children("a").first().clone():c.clone(),k.children("ins, i, ul").remove(),k=k.html(),k=a("<div />").html(k),i.text=this.settings.core.force_text?k.text():k.html(),k=c.data(),i.data=k?a.extend(!0,{},k):null,i.state.opened=c.hasClass("jstree-open"),i.state.selected=c.children("a").hasClass("jstree-clicked"),i.state.disabled=c.children("a").hasClass("jstree-disabled"),i.data&&i.data.jstree)for(j in i.data.jstree)i.data.jstree.hasOwnProperty(j)&&(i.state[j]=i.data.jstree[j]);k=c.children("a").children(".jstree-themeicon"),k.length&&(i.icon=k.hasClass("jstree-themeicon-hidden")?!1:k.attr("rel")),i.state.icon!==b&&(i.icon=i.state.icon),(i.icon===b||null===i.icon||""===i.icon)&&(i.icon=!0),k=c.children("ul").children("li");do l="j"+this._id+"_"+ ++this._cnt;while(h[l]);return i.id=i.li_attr.id?i.li_attr.id.toString():l,k.length?(k.each(a.proxy(function(b,c){f=this._parse_model_from_html(a(c),i.id,e),g=this._model.data[f],i.children.push(f),g.children_d.length&&(i.children_d=i.children_d.concat(g.children_d))},this)),i.children_d=i.children_d.concat(i.children)):c.hasClass("jstree-closed")&&(i.state.loaded=!1),i.li_attr["class"]&&(i.li_attr["class"]=i.li_attr["class"].replace("jstree-closed","").replace("jstree-open","")),i.a_attr["class"]&&(i.a_attr["class"]=i.a_attr["class"].replace("jstree-clicked","").replace("jstree-disabled","")),h[i.id]=i,i.state.selected&&this._data.core.selected.push(i.id),i.id},_parse_model_from_flat_json:function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=a.id.toString(),f=this._model.data,g=this._model.default_state,h,i,j,k,l={id:e,text:a.text||"",icon:a.icon!==b?a.icon:!0,parent:c,parents:d,children:a.children||[],children_d:a.children_d||[],data:a.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(h in g)g.hasOwnProperty(h)&&(l.state[h]=g[h]);if(a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(l.icon=a.data.jstree.icon),(l.icon===b||null===l.icon||""===l.icon)&&(l.icon=!0),a&&a.data&&(l.data=a.data,a.data.jstree))for(h in a.data.jstree)a.data.jstree.hasOwnProperty(h)&&(l.state[h]=a.data.jstree[h]);if(a&&"object"==typeof a.state)for(h in a.state)a.state.hasOwnProperty(h)&&(l.state[h]=a.state[h]);if(a&&"object"==typeof a.li_attr)for(h in a.li_attr)a.li_attr.hasOwnProperty(h)&&(l.li_attr[h]=a.li_attr[h]);if(l.li_attr.id||(l.li_attr.id=e),a&&"object"==typeof a.a_attr)for(h in a.a_attr)a.a_attr.hasOwnProperty(h)&&(l.a_attr[h]=a.a_attr[h]);for(a&&a.children&&a.children===!0&&(l.state.loaded=!1,l.children=[],l.children_d=[]),f[l.id]=l,h=0,i=l.children.length;i>h;h++)j=this._parse_model_from_flat_json(f[l.children[h]],l.id,d),k=f[j],l.children_d.push(j),k.children_d.length&&(l.children_d=l.children_d.concat(k.children_d));return delete a.data,delete a.children,f[l.id].original=a,l.state.selected&&this._data.core.selected.push(l.id),l.id},_parse_model_from_json:function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=!1,f,g,h,i,j=this._model.data,k=this._model.default_state,l;do e="j"+this._id+"_"+ ++this._cnt;while(j[e]);l={id:!1,text:"string"==typeof a?a:"",icon:"object"==typeof a&&a.icon!==b?a.icon:!0,parent:c,parents:d,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in k)k.hasOwnProperty(f)&&(l.state[f]=k[f]);if(a&&a.id&&(l.id=a.id.toString()),a&&a.text&&(l.text=a.text),a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(l.icon=a.data.jstree.icon),(l.icon===b||null===l.icon||""===l.icon)&&(l.icon=!0),a&&a.data&&(l.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(l.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(l.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(l.li_attr[f]=a.li_attr[f]);if(l.li_attr.id&&!l.id&&(l.id=l.li_attr.id.toString()),l.id||(l.id=e),l.li_attr.id||(l.li_attr.id=l.id),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(l.a_attr[f]=a.a_attr[f]);if(a&&a.children&&a.children.length){for(f=0,g=a.children.length;g>f;f++)h=this._parse_model_from_json(a.children[f],l.id,d),i=j[h],l.children.push(h),i.children_d.length&&(l.children_d=l.children_d.concat(i.children_d));l.children_d=l.children_d.concat(l.children)}return a&&a.children&&a.children===!0&&(l.state.loaded=!1,l.children=[],l.children_d=[]),delete a.data,delete a.children,l.original=a,j[l.id]=l,l.state.selected&&this._data.core.selected.push(l.id),l.id},_redraw:function(){var b=this._model.force_full_redraw?this._model.data[a.jstree.root].children.concat([]):this._model.changed.concat([]),c=i.createElement("UL"),d,e,f,g=this._data.core.focused;for(e=0,f=b.length;f>e;e++)d=this.redraw_node(b[e],!0,this._model.force_full_redraw),d&&this._model.force_full_redraw&&c.appendChild(d);this._model.force_full_redraw&&(c.className=this.get_container_ul()[0].className,c.setAttribute("role","group"),this.element.empty().append(c)),null!==g&&(d=this.get_node(g,!0),d&&d.length&&d.children(".jstree-anchor")[0]!==i.activeElement?d.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:b})},redraw:function(a){a&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(b){var c=this.get_node(b),d=!1,e=!1,f=!1,g=i;if(!c)return!1;if(c.id===a.jstree.root)return this.redraw(!0);if(b=this.get_node(b,!0),!b||!b.length)return!1;if(b.children(".jstree-children").remove(),b=b[0],c.children.length&&c.state.loaded){for(f=g.createElement("UL"),f.setAttribute("role","group"),f.className="jstree-children",d=0,e=c.children.length;e>d;d++)f.appendChild(this.redraw_node(c.children[d],!0,!0));b.appendChild(f)}},redraw_node:function(b,c,d,e){var f=this.get_node(b),g=!1,h=!1,k=!1,l=!1,m=!1,n=!1,o="",p=i,q=this._model.data,r=!1,s=!1,t=null,u=0,v=0,w=!1,x=!1;if(!f)return!1;if(f.id===a.jstree.root)return this.redraw(!0);if(c=c||0===f.children.length,b=i.querySelector?this.element[0].querySelector("#"+(-1!=="0123456789".indexOf(f.id[0])?"\\3"+f.id[0]+" "+f.id.substr(1).replace(a.jstree.idregex,"\\$&"):f.id.replace(a.jstree.idregex,"\\$&"))):i.getElementById(f.id))b=a(b),
d||(g=b.parent().parent()[0],g===this.element[0]&&(g=null),h=b.index()),c||!f.children.length||b.children(".jstree-children").length||(c=!0),c||(k=b.children(".jstree-children")[0]),r=b.children(".jstree-anchor")[0]===i.activeElement,b.remove();else if(c=!0,!d){if(g=f.parent!==a.jstree.root?a("#"+f.parent.replace(a.jstree.idregex,"\\$&"),this.element)[0]:null,!(null===g||g&&q[f.parent].state.opened))return!1;h=a.inArray(f.id,null===g?q[a.jstree.root].children:q[f.parent].children)}b=j.cloneNode(!0),o="jstree-node ";for(l in f.li_attr)if(f.li_attr.hasOwnProperty(l)){if("id"===l)continue;"class"!==l?b.setAttribute(l,f.li_attr[l]):o+=f.li_attr[l]}for(f.a_attr.id||(f.a_attr.id=f.id+"_anchor"),b.setAttribute("aria-selected",!!f.state.selected),b.setAttribute("aria-level",f.parents.length),b.setAttribute("aria-labelledby",f.a_attr.id),f.state.disabled&&b.setAttribute("aria-disabled",!0),l=0,m=f.children.length;m>l;l++)if(!q[f.children[l]].state.hidden){w=!0;break}if(null!==f.parent&&q[f.parent]&&!f.state.hidden&&(l=a.inArray(f.id,q[f.parent].children),x=f.id,-1!==l))for(l++,m=q[f.parent].children.length;m>l;l++)if(q[q[f.parent].children[l]].state.hidden||(x=q[f.parent].children[l]),x!==f.id)break;f.state.hidden&&(o+=" jstree-hidden"),f.state.loaded&&!w?o+=" jstree-leaf":(o+=f.state.opened&&f.state.loaded?" jstree-open":" jstree-closed",b.setAttribute("aria-expanded",f.state.opened&&f.state.loaded)),x===f.id&&(o+=" jstree-last"),b.id=f.id,b.className=o,o=(f.state.selected?" jstree-clicked":"")+(f.state.disabled?" jstree-disabled":"");for(m in f.a_attr)if(f.a_attr.hasOwnProperty(m)){if("href"===m&&"#"===f.a_attr[m])continue;"class"!==m?b.childNodes[1].setAttribute(m,f.a_attr[m]):o+=" "+f.a_attr[m]}if(o.length&&(b.childNodes[1].className="jstree-anchor "+o),(f.icon&&f.icon!==!0||f.icon===!1)&&(f.icon===!1?b.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":-1===f.icon.indexOf("/")&&-1===f.icon.indexOf(".")?b.childNodes[1].childNodes[0].className+=" "+f.icon+" jstree-themeicon-custom":(b.childNodes[1].childNodes[0].style.backgroundImage='url("'+f.icon+'")',b.childNodes[1].childNodes[0].style.backgroundPosition="center center",b.childNodes[1].childNodes[0].style.backgroundSize="auto",b.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?b.childNodes[1].appendChild(p.createTextNode(f.text)):b.childNodes[1].innerHTML+=f.text,c&&f.children.length&&(f.state.opened||e)&&f.state.loaded){for(n=p.createElement("UL"),n.setAttribute("role","group"),n.className="jstree-children",l=0,m=f.children.length;m>l;l++)n.appendChild(this.redraw_node(f.children[l],c,!0));b.appendChild(n)}if(k&&b.appendChild(k),!d){for(g||(g=this.element[0]),l=0,m=g.childNodes.length;m>l;l++)if(g.childNodes[l]&&g.childNodes[l].className&&-1!==g.childNodes[l].className.indexOf("jstree-children")){t=g.childNodes[l];break}t||(t=p.createElement("UL"),t.setAttribute("role","group"),t.className="jstree-children",g.appendChild(t)),g=t,h<g.childNodes.length?g.insertBefore(b,g.childNodes[h]):g.appendChild(b),r&&(u=this.element[0].scrollTop,v=this.element[0].scrollLeft,b.childNodes[1].focus(),this.element[0].scrollTop=u,this.element[0].scrollLeft=v)}return f.state.opened&&!f.state.loaded&&(f.state.opened=!1,setTimeout(a.proxy(function(){this.open_node(f.id,!1,0)},this),0)),b},open_node:function(c,d,e){var f,g,h,i;if(a.isArray(c)){for(c=c.slice(),f=0,g=c.length;g>f;f++)this.open_node(c[f],d,e);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?(e=e===b?this.settings.core.animation:e,this.is_closed(c)?this.is_loaded(c)?(h=this.get_node(c,!0),i=this,h.length&&(e&&h.children(".jstree-children").length&&h.children(".jstree-children").stop(!0,!0),c.children.length&&!this._firstChild(h.children(".jstree-children")[0])&&this.draw_children(c),e?(this.trigger("before_open",{node:c}),h.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded",!0).children(".jstree-children").stop(!0,!0).slideDown(e,function(){this.style.display="",i.element&&i.trigger("after_open",{node:c})})):(this.trigger("before_open",{node:c}),h[0].className=h[0].className.replace("jstree-closed","jstree-open"),h[0].setAttribute("aria-expanded",!0))),c.state.opened=!0,d&&d.call(this,c,!0),h.length||this.trigger("before_open",{node:c}),this.trigger("open_node",{node:c}),e&&h.length||this.trigger("after_open",{node:c}),!0):this.is_loading(c)?setTimeout(a.proxy(function(){this.open_node(c,d,e)},this),500):void this.load_node(c,function(a,b){return b?this.open_node(a,d,e):d?d.call(this,a,!1):!1}):(d&&d.call(this,c,!1),!1)):!1},_open_to:function(b){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var c,d,e=b.parents;for(c=0,d=e.length;d>c;c+=1)c!==a.jstree.root&&this.open_node(e[c],!1,0);return a("#"+b.id.replace(a.jstree.idregex,"\\$&"),this.element)},close_node:function(c,d){var e,f,g,h;if(a.isArray(c)){for(c=c.slice(),e=0,f=c.length;f>e;e++)this.close_node(c[e],d);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?this.is_closed(c)?!1:(d=d===b?this.settings.core.animation:d,g=this,h=this.get_node(c,!0),c.state.opened=!1,this.trigger("close_node",{node:c}),void(h.length?d?h.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded",!1).children(".jstree-children").stop(!0,!0).slideUp(d,function(){this.style.display="",h.children(".jstree-children").remove(),g.element&&g.trigger("after_close",{node:c})}):(h[0].className=h[0].className.replace("jstree-open","jstree-closed"),h.attr("aria-expanded",!1).children(".jstree-children").remove(),this.trigger("after_close",{node:c})):this.trigger("after_close",{node:c}))):!1},toggle_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.toggle_node(b[c]);return!0}return this.is_closed(b)?this.open_node(b):this.is_open(b)?this.close_node(b):void 0},open_all:function(b,c,d){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var e=b.id===a.jstree.root?this.get_container_ul():this.get_node(b,!0),f,g,h;if(!e.length){for(f=0,g=b.children_d.length;g>f;f++)this.is_closed(this._model.data[b.children_d[f]])&&(this._model.data[b.children_d[f]].state.opened=!0);return this.trigger("open_all",{node:b})}d=d||e,h=this,e=this.is_closed(b)?e.find(".jstree-closed").addBack():e.find(".jstree-closed"),e.each(function(){h.open_node(this,function(a,b){b&&this.is_parent(a)&&this.open_all(a,c,d)},c||0)}),0===d.find(".jstree-closed").length&&this.trigger("open_all",{node:this.get_node(d)})},close_all:function(b,c){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var d=b.id===a.jstree.root?this.get_container_ul():this.get_node(b,!0),e=this,f,g;for(d.length&&(d=this.is_open(b)?d.find(".jstree-open").addBack():d.find(".jstree-open"),a(d.get().reverse()).each(function(){e.close_node(this,c||0)})),f=0,g=b.children_d.length;g>f;f++)this._model.data[b.children_d[f]].state.opened=!1;this.trigger("close_all",{node:b})},is_disabled:function(a){return a=this.get_node(a),a&&a.state&&a.state.disabled},enable_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.enable_node(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.state.disabled=!1,this.get_node(b,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),void this.trigger("enable_node",{node:b})):!1},disable_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.disable_node(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.state.disabled=!0,this.get_node(b,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),void this.trigger("disable_node",{node:b})):!1},is_hidden:function(a){return a=this.get_node(a),a.state.hidden===!0},hide_node:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.hide_node(b[d],!0);return c||this.redraw(),!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?void(b.state.hidden||(b.state.hidden=!0,this._node_changed(b.parent),c||this.redraw(),this.trigger("hide_node",{node:b}))):!1},show_node:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.show_node(b[d],!0);return c||this.redraw(),!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?void(b.state.hidden&&(b.state.hidden=!1,this._node_changed(b.parent),c||this.redraw(),this.trigger("show_node",{node:b}))):!1},hide_all:function(b){var c,d=this._model.data,e=[];for(c in d)d.hasOwnProperty(c)&&c!==a.jstree.root&&!d[c].state.hidden&&(d[c].state.hidden=!0,e.push(c));return this._model.force_full_redraw=!0,b||this.redraw(),this.trigger("hide_all",{nodes:e}),e},show_all:function(b){var c,d=this._model.data,e=[];for(c in d)d.hasOwnProperty(c)&&c!==a.jstree.root&&d[c].state.hidden&&(d[c].state.hidden=!1,e.push(c));return this._model.force_full_redraw=!0,b||this.redraw(),this.trigger("show_all",{nodes:e}),e},activate_node:function(a,c){if(this.is_disabled(a))return!1;if(c&&"object"==typeof c||(c={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==b?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(c.metaKey||c.ctrlKey||c.shiftKey)&&(!c.shiftKey||this._data.core.last_clicked&&this.get_parent(a)&&this.get_parent(a)===this._data.core.last_clicked.parent))if(c.shiftKey){var d=this.get_node(a).id,e=this._data.core.last_clicked.id,f=this.get_node(this._data.core.last_clicked.parent).children,g=!1,h,i;for(h=0,i=f.length;i>h;h+=1)f[h]===d&&(g=!g),f[h]===e&&(g=!g),this.is_disabled(f[h])||!g&&f[h]!==d&&f[h]!==e?this.deselect_node(f[h],!0,c):this.is_hidden(f[h])||this.select_node(f[h],!0,!1,c);this.trigger("changed",{action:"select_node",node:this.get_node(a),selected:this._data.core.selected,event:c})}else this.is_selected(a)?this.deselect_node(a,!1,c):this.select_node(a,!1,!1,c);else!this.settings.core.multiple&&(c.metaKey||c.ctrlKey||c.shiftKey)&&this.is_selected(a)?this.deselect_node(a,!1,c):(this.deselect_all(!0),this.select_node(a,!1,!1,c),this._data.core.last_clicked=this.get_node(a));this.trigger("activate_node",{node:this.get_node(a),event:c})},hover_node:function(a){if(a=this.get_node(a,!0),!a||!a.length||a.children(".jstree-hovered").length)return!1;var b=this.element.find(".jstree-hovered"),c=this.element;b&&b.length&&this.dehover_node(b),a.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(a)}),setTimeout(function(){c.attr("aria-activedescendant",a[0].id)},0)},dehover_node:function(a){return a=this.get_node(a,!0),a&&a.length&&a.children(".jstree-hovered").length?(a.children(".jstree-anchor").removeClass("jstree-hovered"),void this.trigger("dehover_node",{node:this.get_node(a)})):!1},select_node:function(b,c,d,e){var f,g,h,i;if(a.isArray(b)){for(b=b.slice(),g=0,h=b.length;h>g;g++)this.select_node(b[g],c,d,e);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=this.get_node(b,!0),void(b.state.selected||(b.state.selected=!0,this._data.core.selected.push(b.id),d||(f=this._open_to(b)),f&&f.length&&f.attr("aria-selected",!0).children(".jstree-anchor").addClass("jstree-clicked"),this.trigger("select_node",{node:b,selected:this._data.core.selected,event:e}),c||this.trigger("changed",{action:"select_node",node:b,selected:this._data.core.selected,event:e})))):!1},deselect_node:function(b,c,d){var e,f,g;if(a.isArray(b)){for(b=b.slice(),e=0,f=b.length;f>e;e++)this.deselect_node(b[e],c,d);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(g=this.get_node(b,!0),void(b.state.selected&&(b.state.selected=!1,this._data.core.selected=a.vakata.array_remove_item(this._data.core.selected,b.id),g.length&&g.attr("aria-selected",!1).children(".jstree-anchor").removeClass("jstree-clicked"),this.trigger("deselect_node",{node:b,selected:this._data.core.selected,event:d}),c||this.trigger("changed",{action:"deselect_node",node:b,selected:this._data.core.selected,event:d})))):!1},select_all:function(b){var c=this._data.core.selected.concat([]),d,e;for(this._data.core.selected=this._model.data[a.jstree.root].children_d.concat(),d=0,e=this._data.core.selected.length;e>d;d++)this._model.data[this._data.core.selected[d]]&&(this._model.data[this._data.core.selected[d]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),b||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:c})},deselect_all:function(a){var b=this._data.core.selected.concat([]),c,d;for(c=0,d=this._data.core.selected.length;d>c;c++)this._model.data[this._data.core.selected[c]]&&(this._model.data[this._data.core.selected[c]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:b}),a||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:b})},is_selected:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.state.selected:!1},get_selected:function(b){return b?a.map(this._data.core.selected,a.proxy(function(a){return this.get_node(a)},this)):this._data.core.selected.slice()},get_top_selected:function(b){var c=this.get_selected(!0),d={},e,f,g,h;for(e=0,f=c.length;f>e;e++)d[c[e].id]=c[e];for(e=0,f=c.length;f>e;e++)for(g=0,h=c[e].children_d.length;h>g;g++)d[c[e].children_d[g]]&&delete d[c[e].children_d[g]];c=[];for(e in d)d.hasOwnProperty(e)&&c.push(e);return b?a.map(c,a.proxy(function(a){return this.get_node(a)},this)):c},get_bottom_selected:function(b){var c=this.get_selected(!0),d=[],e,f;for(e=0,f=c.length;f>e;e++)c[e].children.length||d.push(c[e].id);return b?a.map(d,a.proxy(function(a){return this.get_node(a)},this)):d},get_state:function(){var b={core:{open:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},c;for(c in this._model.data)this._model.data.hasOwnProperty(c)&&c!==a.jstree.root&&(this._model.data[c].state.opened&&b.core.open.push(c),this._model.data[c].state.selected&&b.core.selected.push(c));return b},set_state:function(c,d){if(c){if(c.core){var e,f,g,h,i;if(c.core.open)return a.isArray(c.core.open)&&c.core.open.length?this._load_nodes(c.core.open,function(a){this.open_node(a,!1,0),delete c.core.open,this.set_state(c,d)}):(delete c.core.open,this.set_state(c,d)),!1;if(c.core.scroll)return c.core.scroll&&c.core.scroll.left!==b&&this.element.scrollLeft(c.core.scroll.left),c.core.scroll&&c.core.scroll.top!==b&&this.element.scrollTop(c.core.scroll.top),delete c.core.scroll,this.set_state(c,d),!1;if(c.core.selected)return h=this,this.deselect_all(),a.each(c.core.selected,function(a,b){h.select_node(b,!1,!0)}),delete c.core.selected,this.set_state(c,d),!1;for(i in c)c.hasOwnProperty(i)&&"core"!==i&&-1===a.inArray(i,this.settings.plugins)&&delete c[i];if(a.isEmptyObject(c.core))return delete c.core,this.set_state(c,d),!1}return a.isEmptyObject(c)?(c=null,d&&d.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(b,c){this._data.core.state=c===!0?{}:this.get_state(),c&&a.isFunction(c)&&(this._data.core.state=c.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var d=this.get_container_ul()[0].className;b||(this.element.html("<ul class='"+d+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(a.jstree.root,function(b,c){c&&(this.get_container_ul()[0].className=d,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(a.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(b){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var c=[],d=[],e=this._data.core.selected.concat([]);d.push(b.id),b.state.opened===!0&&c.push(b.id),this.get_node(b,!0).find(".jstree-open").each(function(){d.push(this.id),c.push(this.id)}),this._load_nodes(d,a.proxy(function(a){this.open_node(c,!1,0),this.select_node(e),this.trigger("refresh_node",{node:b,nodes:a})},this),!1,!0)},set_id:function(b,c){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var d,e,f=this._model.data,g=b.id;for(c=c.toString(),f[b.parent].children[a.inArray(b.id,f[b.parent].children)]=c,d=0,e=b.parents.length;e>d;d++)f[b.parents[d]].children_d[a.inArray(b.id,f[b.parents[d]].children_d)]=c;for(d=0,e=b.children.length;e>d;d++)f[b.children[d]].parent=c;for(d=0,e=b.children_d.length;e>d;d++)f[b.children_d[d]].parents[a.inArray(b.id,f[b.children_d[d]].parents)]=c;return d=a.inArray(b.id,this._data.core.selected),-1!==d&&(this._data.core.selected[d]=c),d=this.get_node(b.id,!0),d&&(d.attr("id",c),this.element.attr("aria-activedescendant")===b.id&&this.element.attr("aria-activedescendant",c)),delete f[b.id],b.id=c,b.li_attr.id=c,f[c]=b,this.trigger("set_id",{node:b,"new":b.id,old:g}),!0},get_text:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.text:!1},set_text:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.set_text(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.text=c,this.get_node(b,!0).length&&this.redraw_node(b.id),this.trigger("set_text",{obj:b,text:c}),!0):!1},get_json:function(b,c,d){if(b=this.get_node(b||a.jstree.root),!b)return!1;c&&c.flat&&!d&&(d=[]);var e={id:b.id,text:b.text,icon:this.get_icon(b),li_attr:a.extend(!0,{},b.li_attr),a_attr:a.extend(!0,{},b.a_attr),state:{},data:c&&c.no_data?!1:a.extend(!0,{},b.data)},f,g;if(c&&c.flat?e.parent=b.parent:e.children=[],c&&c.no_state)delete e.state;else for(f in b.state)b.state.hasOwnProperty(f)&&(e.state[f]=b.state[f]);if(c&&c.no_li_attr&&delete e.li_attr,c&&c.no_a_attr&&delete e.a_attr,c&&c.no_id&&(delete e.id,e.li_attr&&e.li_attr.id&&delete e.li_attr.id,e.a_attr&&e.a_attr.id&&delete e.a_attr.id),c&&c.flat&&b.id!==a.jstree.root&&d.push(e),!c||!c.no_children)for(f=0,g=b.children.length;g>f;f++)c&&c.flat?this.get_json(b.children[f],c,d):e.children.push(this.get_json(b.children[f],c));return c&&c.flat?d:b.id===a.jstree.root?e.children:e},create_node:function(c,d,e,f,g){if(null===c&&(c=a.jstree.root),c=this.get_node(c),!c)return!1;if(e=e===b?"last":e,!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(c))return this.load_node(c,function(){this.create_node(c,d,e,f,!0)});d||(d={text:this.get_string("New node")}),"string"==typeof d&&(d={text:d}),d.text===b&&(d.text=this.get_string("New node"));var h,i,j,k;switch(c.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":h=this.get_node(c.parent),e=a.inArray(c.id,h.children),c=h;break;case"after":h=this.get_node(c.parent),e=a.inArray(c.id,h.children)+1,c=h;break;case"inside":case"first":e=0;break;case"last":e=c.children.length;break;default:e||(e=0)}if(e>c.children.length&&(e=c.children.length),d.id||(d.id=!0),!this.check("create_node",d,c,e))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(d.id===!0&&delete d.id,d=this._parse_model_from_json(d,c.id,c.parents.concat()),!d)return!1;for(h=this.get_node(d),i=[],i.push(d),i=i.concat(h.children_d),this.trigger("model",{nodes:i,parent:c.id}),c.children_d=c.children_d.concat(i),j=0,k=c.parents.length;k>j;j++)this._model.data[c.parents[j]].children_d=this._model.data[c.parents[j]].children_d.concat(i);for(d=h,h=[],j=0,k=c.children.length;k>j;j++)h[j>=e?j+1:j]=c.children[j];return h[e]=d.id,c.children=h,this.redraw_node(c,!0),f&&f.call(this,this.get_node(d)),this.trigger("create_node",{node:this.get_node(d),parent:c.id,position:e}),d.id},rename_node:function(b,c){var d,e,f;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.rename_node(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=b.text,this.check("rename_node",b,this.get_parent(b),c)?(this.set_text(b,c),this.trigger("rename_node",{node:b,text:c,old:f}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1)):!1},delete_node:function(b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.delete_node(b[c]);return!0}if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;if(e=this.get_node(b.parent),f=a.inArray(b.id,e.children),l=!1,!this.check("delete_node",b,e,f))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(-1!==f&&(e.children=a.vakata.array_remove(e.children,f)),g=b.children_d.concat([]),g.push(b.id),h=0,i=b.parents.length;i>h;h++)this._model.data[b.parents[h]].children_d=a.vakata.array_filter(this._model.data[b.parents[h]].children_d,function(b){return-1===a.inArray(b,g)});for(j=0,k=g.length;k>j;j++)if(this._model.data[g[j]].state.selected){l=!0;break}for(l&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(b){return-1===a.inArray(b,g)})),this.trigger("delete_node",{node:b,parent:e.id}),l&&this.trigger("changed",{action:"delete_node",node:b,selected:this._data.core.selected,parent:e.id}),j=0,k=g.length;k>j;j++)delete this._model.data[g[j]];return-1!==a.inArray(this._data.core.focused,g)&&(this._data.core.focused=null,m=this.element[0].scrollTop,n=this.element[0].scrollLeft,e.id===a.jstree.root?this._model.data[a.jstree.root].children[0]&&this.get_node(this._model.data[a.jstree.root].children[0],!0).children(".jstree-anchor").focus():this.get_node(e,!0).children(".jstree-anchor").focus(),this.element[0].scrollTop=m,this.element[0].scrollLeft=n),this.redraw_node(e,!0),!0},check:function(b,c,d,e,f){c=c&&c.id?c:this.get_node(c),d=d&&d.id?d:this.get_node(d);var g=b.match(/^move_node|copy_node|create_node$/i)?d:c,h=this.settings.core.check_callback;return"move_node"!==b&&"copy_node"!==b||f&&f.is_multi||c.id!==d.id&&("move_node"!==b||a.inArray(c.id,d.children)!==e)&&-1===a.inArray(d.id,c.children_d)?(g&&g.data&&(g=g.data),g&&g.functions&&(g.functions[b]===!1||g.functions[b]===!0)?(g.functions[b]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+b,data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})}),g.functions[b]):h===!1||a.isFunction(h)&&h.call(this,b,c,d,e,f)===!1||h&&h[b]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+b,data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})},!1):!0):(this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})},!1)},last_error:function(){return this._data.core.last_error},move_node:function(c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w;if(d=this.get_node(d),e=e===b?0:e,!d)return!1;if(!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(d))return this.load_node(d,function(){this.move_node(c,d,e,f,!0,!1,i)});if(a.isArray(c)){if(1!==c.length){for(j=0,k=c.length;k>j;j++)(r=this.move_node(c[j],d,e,f,g,!1,i))&&(d=r,e="after");return this.redraw(),!0}c=c[0]}if(c=c&&c.id?c:this.get_node(c),!c||c.id===a.jstree.root)return!1;if(l=(c.parent||a.jstree.root).toString(),n=e.toString().match(/^(before|after)$/)&&d.id!==a.jstree.root?this.get_node(d.parent):d,o=i?i:this._model.data[c.id]?this:a.jstree.reference(c.id),p=!o||!o._id||this._id!==o._id,m=o&&o._id&&l&&o._model.data[l]&&o._model.data[l].children?a.inArray(c.id,o._model.data[l].children):-1,o&&o._id&&(c=o._model.data[c.id]),p)return(r=this.copy_node(c,d,e,f,g,!1,i))?(o&&o.delete_node(c),r):!1;switch(d.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":e=a.inArray(d.id,n.children);break;case"after":e=a.inArray(d.id,n.children)+1;break;case"inside":case"first":e=0;break;case"last":e=n.children.length;break;default:e||(e=0)}if(e>n.children.length&&(e=n.children.length),!this.check("move_node",c,n,e,{core:!0,origin:i,is_multi:o&&o._id&&o._id!==this._id,is_foreign:!o||!o._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(c.parent===n.id){for(q=n.children.concat(),r=a.inArray(c.id,q),-1!==r&&(q=a.vakata.array_remove(q,r),e>r&&e--),r=[],s=0,t=q.length;t>s;s++)r[s>=e?s+1:s]=q[s];r[e]=c.id,n.children=r,this._node_changed(n.id),this.redraw(n.id===a.jstree.root)}else{for(r=c.children_d.concat(),r.push(c.id),s=0,t=c.parents.length;t>s;s++){for(q=[],w=o._model.data[c.parents[s]].children_d,u=0,v=w.length;v>u;u++)-1===a.inArray(w[u],r)&&q.push(w[u]);o._model.data[c.parents[s]].children_d=q}for(o._model.data[l].children=a.vakata.array_remove_item(o._model.data[l].children,c.id),s=0,t=n.parents.length;t>s;s++)this._model.data[n.parents[s]].children_d=this._model.data[n.parents[s]].children_d.concat(r);for(q=[],s=0,t=n.children.length;t>s;s++)q[s>=e?s+1:s]=n.children[s];for(q[e]=c.id,n.children=q,n.children_d.push(c.id),n.children_d=n.children_d.concat(c.children_d),c.parent=n.id,r=n.parents.concat(),r.unshift(n.id),w=c.parents.length,c.parents=r,r=r.concat(),s=0,t=c.children_d.length;t>s;s++)this._model.data[c.children_d[s]].parents=this._model.data[c.children_d[s]].parents.slice(0,-1*w),Array.prototype.push.apply(this._model.data[c.children_d[s]].parents,r);(l===a.jstree.root||n.id===a.jstree.root)&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(l),this._node_changed(n.id)),h||this.redraw()}return f&&f.call(this,c,n,e),this.trigger("move_node",{node:c,parent:n.id,position:e,old_parent:l,old_position:m,is_multi:o&&o._id&&o._id!==this._id,is_foreign:!o||!o._id,old_instance:o,new_instance:this}),c.id},copy_node:function(c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t;if(d=this.get_node(d),e=e===b?0:e,!d)return!1;if(!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(d))return this.load_node(d,function(){this.copy_node(c,d,e,f,!0,!1,i)});if(a.isArray(c)){if(1!==c.length){for(j=0,k=c.length;k>j;j++)(m=this.copy_node(c[j],d,e,f,g,!0,i))&&(d=m,e="after");return this.redraw(),!0}c=c[0]}if(c=c&&c.id?c:this.get_node(c),!c||c.id===a.jstree.root)return!1;switch(q=(c.parent||a.jstree.root).toString(),r=e.toString().match(/^(before|after)$/)&&d.id!==a.jstree.root?this.get_node(d.parent):d,s=i?i:this._model.data[c.id]?this:a.jstree.reference(c.id),t=!s||!s._id||this._id!==s._id,s&&s._id&&(c=s._model.data[c.id]),d.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":e=a.inArray(d.id,r.children);break;case"after":e=a.inArray(d.id,r.children)+1;break;case"inside":case"first":e=0;break;case"last":e=r.children.length;break;default:e||(e=0)}if(e>r.children.length&&(e=r.children.length),!this.check("copy_node",c,r,e,{core:!0,origin:i,is_multi:s&&s._id&&s._id!==this._id,is_foreign:!s||!s._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(p=s?s.get_json(c,{no_id:!0,no_data:!0,no_state:!0}):c,!p)return!1;if(p.id===!0&&delete p.id,p=this._parse_model_from_json(p,r.id,r.parents.concat()),!p)return!1;for(m=this.get_node(p),c&&c.state&&c.state.loaded===!1&&(m.state.loaded=!1),l=[],l.push(p),l=l.concat(m.children_d),this.trigger("model",{nodes:l,parent:r.id}),n=0,o=r.parents.length;o>n;n++)this._model.data[r.parents[n]].children_d=this._model.data[r.parents[n]].children_d.concat(l);for(l=[],n=0,o=r.children.length;o>n;n++)l[n>=e?n+1:n]=r.children[n];return l[e]=m.id,r.children=l,r.children_d.push(m.id),r.children_d=r.children_d.concat(m.children_d),r.id===a.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(r.id),h||this.redraw(r.id===a.jstree.root),f&&f.call(this,m,r,e),this.trigger("copy_node",{node:m,original:c,parent:r.id,position:e,old_parent:q,old_position:s&&s._id&&q&&s._model.data[q]&&s._model.data[q].children?a.inArray(c.id,s._model.data[q].children):-1,is_multi:s&&s._id&&s._id!==this._id,is_foreign:!s||!s._id,old_instance:s,new_instance:this}),m.id},cut:function(b){if(b||(b=this._data.core.selected.concat()),a.isArray(b)||(b=[b]),!b.length)return!1;var c=[],g,h,i;for(h=0,i=b.length;i>h;h++)g=this.get_node(b[h]),g&&g.id&&g.id!==a.jstree.root&&c.push(g);return c.length?(d=c,f=this,e="move_node",void this.trigger("cut",{node:b})):!1},copy:function(b){if(b||(b=this._data.core.selected.concat()),a.isArray(b)||(b=[b]),!b.length)return!1;var c=[],g,h,i;for(h=0,i=b.length;i>h;h++)g=this.get_node(b[h]),g&&g.id&&g.id!==a.jstree.root&&c.push(g);return c.length?(d=c,f=this,e="copy_node",void this.trigger("copy",{node:b})):!1},get_buffer:function(){return{mode:e,node:d,inst:f}},can_paste:function(){return e!==!1&&d!==!1},paste:function(a,b){return a=this.get_node(a),a&&e&&e.match(/^(copy_node|move_node)$/)&&d?(this[e](d,a,b,!1,!1,!1,f)&&this.trigger("paste",{parent:a.id,node:d,mode:e}),d=!1,e=!1,void(f=!1)):!1},clear_buffer:function(){d=!1,e=!1,f=!1,this.trigger("clear_buffer")},edit:function(b,c,d){var e,f,g,h,j,k,l,m,n,o=!1;return(b=this.get_node(b))?this.settings.core.check_callback===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_07",reason:"Could not edit node because of check_callback"},this.settings.core.error.call(this,this._data.core.last_error),!1):(n=b,c="string"==typeof c?c:b.text,this.set_text(b,""),b=this._open_to(b),n.text=c,e=this._data.core.rtl,f=this.element.width(),this._data.core.focused=n.id,g=b.children(".jstree-anchor").focus(),h=a("<span>"),j=c,k=a("<div />",{css:{position:"absolute",top:"-200px",left:e?"0px":"-1000px",visibility:"hidden"}}).appendTo("body"),l=a("<input />",{value:j,"class":"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:a.proxy(function(c){c.stopImmediatePropagation(),c.preventDefault();var e=h.children(".jstree-rename-input"),f=e.val(),i=this.settings.core.force_text,m;""===f&&(f=j),k.remove(),h.replaceWith(g),h.remove(),j=i?j:a("<div></div>").append(a.parseHTML(j)).html(),this.set_text(b,j),m=!!this.rename_node(b,i?a("<div></div>").text(f).text():a("<div></div>").append(a.parseHTML(f)).html()),m||this.set_text(b,j),this._data.core.focused=n.id,setTimeout(a.proxy(function(){var a=this.get_node(n.id,!0);a.length&&(this._data.core.focused=n.id,a.children(".jstree-anchor").focus())},this),0),d&&d.call(this,n,m,o),l=null},this),keydown:function(a){var b=a.which;27===b&&(o=!0,this.value=j),(27===b||13===b||37===b||38===b||39===b||40===b||32===b)&&a.stopImmediatePropagation(),(27===b||13===b)&&(a.preventDefault(),this.blur())},click:function(a){a.stopImmediatePropagation()},mousedown:function(a){a.stopImmediatePropagation()},keyup:function(a){l.width(Math.min(k.text("pW"+this.value).width(),f))},keypress:function(a){return 13===a.which?!1:void 0}}),m={fontFamily:g.css("fontFamily")||"",fontSize:g.css("fontSize")||"",fontWeight:g.css("fontWeight")||"",fontStyle:g.css("fontStyle")||"",fontStretch:g.css("fontStretch")||"",fontVariant:g.css("fontVariant")||"",letterSpacing:g.css("letterSpacing")||"",wordSpacing:g.css("wordSpacing")||""},h.attr("class",g.attr("class")).append(g.contents().clone()).append(l),g.replaceWith(h),k.css(m),l.css(m).width(Math.min(k.text("pW"+l[0].value).width(),f))[0].select(),
void a(i).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(b){l&&b.target!==l&&a(l).blur()})):!1},set_theme:function(b,c){if(!b)return!1;if(c===!0){var d=this.settings.core.themes.dir;d||(d=a.jstree.path+"/themes"),c=d+"/"+b+"/style.css"}c&&-1===a.inArray(c,g)&&(a("head").append('<link rel="stylesheet" href="'+c+'" type="text/css" />'),g.push(c)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=b,this.element.addClass("jstree-"+b),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+b+"-responsive"),this.trigger("set_theme",{theme:b})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(a){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=a,a&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},set_icon:function(c,d){var e,f,g,h;if(a.isArray(c)){for(c=c.slice(),e=0,f=c.length;f>e;e++)this.set_icon(c[e],d);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?(h=c.icon,c.icon=d===!0||null===d||d===b||""===d?!0:d,g=this.get_node(c,!0).children(".jstree-anchor").children(".jstree-themeicon"),d===!1?this.hide_icon(c):d===!0||null===d||d===b||""===d?(g.removeClass("jstree-themeicon-custom "+h).css("background","").removeAttr("rel"),h===!1&&this.show_icon(c)):-1===d.indexOf("/")&&-1===d.indexOf(".")?(g.removeClass(h).css("background",""),g.addClass(d+" jstree-themeicon-custom").attr("rel",d),h===!1&&this.show_icon(c)):(g.removeClass(h).css("background",""),g.addClass("jstree-themeicon-custom").css("background","url('"+d+"') center center no-repeat").attr("rel",d),h===!1&&this.show_icon(c)),!0):!1},get_icon:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.icon:!1},hide_icon:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.hide_icon(b[c]);return!0}return b=this.get_node(b),b&&b!==a.jstree.root?(b.icon=!1,this.get_node(b,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.show_icon(b[c]);return!0}return b=this.get_node(b),b&&b!==a.jstree.root?(e=this.get_node(b,!0),b.icon=e.length?e.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,b.icon||(b.icon=!0),e.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},a.vakata={},a.vakata.attributes=function(b,c){b=a(b)[0];var d=c?{}:[];return b&&b.attributes&&a.each(b.attributes,function(b,e){-1===a.inArray(e.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])&&null!==e.value&&""!==a.trim(e.value)&&(c?d[e.name]=e.value:d.push(e.name))}),d},a.vakata.array_unique=function(a){var c=[],d,e,f,g={};for(d=0,f=a.length;f>d;d++)g[a[d]]===b&&(c.push(a[d]),g[a[d]]=!0);return c},a.vakata.array_remove=function(a,b){return a.splice(b,1),a},a.vakata.array_remove_item=function(b,c){var d=a.inArray(c,b);return-1!==d?a.vakata.array_remove(b,d):b},a.vakata.array_filter=function(a,b,c,d,e){if(a.filter)return a.filter(b,c);d=[];for(e in a)~~e+""==e+""&&e>=0&&b.call(c,a[e],+e,a)&&d.push(a[e]);return d},a.jstree.plugins.changed=function(a,b){var c=[];this.trigger=function(a,d){var e,f;if(d||(d={}),"changed"===a.replace(".jstree","")){d.changed={selected:[],deselected:[]};var g={};for(e=0,f=c.length;f>e;e++)g[c[e]]=1;for(e=0,f=d.selected.length;f>e;e++)g[d.selected[e]]?g[d.selected[e]]=2:d.changed.selected.push(d.selected[e]);for(e=0,f=c.length;f>e;e++)1===g[c[e]]&&d.changed.deselected.push(c[e]);c=d.selected.slice()}b.trigger.call(this,a,d)},this.refresh=function(a,d){return c=[],b.refresh.apply(this,arguments)}};var m=i.createElement("I");m.className="jstree-icon jstree-checkbox",m.setAttribute("role","presentation"),a.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0},a.jstree.plugins.checkbox=function(c,d){this.bind=function(){d.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",a.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",a.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),-1!==this.settings.checkbox.cascade.indexOf("undetermined")&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",a.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",a.proxy(function(a,b){var c=this._model.data,d=c[b.parent],e=b.nodes,f,g;for(f=0,g=e.length;g>f;f++)c[e[f]].state.checked=c[e[f]].state.checked||c[e[f]].original&&c[e[f]].original.state&&c[e[f]].original.state.checked,c[e[f]].state.checked&&this._data.checkbox.selected.push(e[f])},this)),(-1!==this.settings.checkbox.cascade.indexOf("up")||-1!==this.settings.checkbox.cascade.indexOf("down"))&&this.element.on("model.jstree",a.proxy(function(b,c){var d=this._model.data,e=d[c.parent],f=c.nodes,g=[],h,i,j,k,l,m,n=this.settings.checkbox.cascade,o=this.settings.checkbox.tie_selection;if(-1!==n.indexOf("down"))if(e.state[o?"selected":"checked"]){for(i=0,j=f.length;j>i;i++)d[f[i]].state[o?"selected":"checked"]=!0;this._data[o?"core":"checkbox"].selected=this._data[o?"core":"checkbox"].selected.concat(f)}else for(i=0,j=f.length;j>i;i++)if(d[f[i]].state[o?"selected":"checked"]){for(k=0,l=d[f[i]].children_d.length;l>k;k++)d[d[f[i]].children_d[k]].state[o?"selected":"checked"]=!0;this._data[o?"core":"checkbox"].selected=this._data[o?"core":"checkbox"].selected.concat(d[f[i]].children_d)}if(-1!==n.indexOf("up")){for(i=0,j=e.children_d.length;j>i;i++)d[e.children_d[i]].children.length||g.push(d[e.children_d[i]].parent);for(g=a.vakata.array_unique(g),k=0,l=g.length;l>k;k++){e=d[g[k]];while(e&&e.id!==a.jstree.root){for(h=0,i=0,j=e.children.length;j>i;i++)h+=d[e.children[i]].state[o?"selected":"checked"];if(h!==j)break;e.state[o?"selected":"checked"]=!0,this._data[o?"core":"checkbox"].selected.push(e.id),m=this.get_node(e,!0),m&&m.length&&m.attr("aria-selected",!0).children(".jstree-anchor").addClass(o?"jstree-clicked":"jstree-checked"),e=this.get_node(e.parent)}}}this._data[o?"core":"checkbox"].selected=a.vakata.array_unique(this._data[o?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",a.proxy(function(b,c){var d=c.node,e=this._model.data,f=this.get_node(d.parent),g=this.get_node(d,!0),h,i,j,k,l=this.settings.checkbox.cascade,m=this.settings.checkbox.tie_selection,n={},o=this._data[m?"core":"checkbox"].selected;for(h=0,i=o.length;i>h;h++)n[o[h]]=!0;if(-1!==l.indexOf("down"))for(h=0,i=d.children_d.length;i>h;h++)n[d.children_d[h]]=!0,k=e[d.children_d[h]],k.state[m?"selected":"checked"]=!0,k&&k.original&&k.original.state&&k.original.state.undetermined&&(k.original.state.undetermined=!1);if(-1!==l.indexOf("up"))while(f&&f.id!==a.jstree.root){for(j=0,h=0,i=f.children.length;i>h;h++)j+=e[f.children[h]].state[m?"selected":"checked"];if(j!==i)break;f.state[m?"selected":"checked"]=!0,n[f.id]=!0,k=this.get_node(f,!0),k&&k.length&&k.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"),f=this.get_node(f.parent)}o=[];for(h in n)n.hasOwnProperty(h)&&o.push(h);this._data[m?"core":"checkbox"].selected=o,-1!==l.indexOf("down")&&g.length&&g.find(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked").parent().attr("aria-selected",!0)},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",a.proxy(function(b,c){var d=this.get_node(a.jstree.root),e=this._model.data,f,g,h;for(f=0,g=d.children_d.length;g>f;f++)h=e[d.children_d[f]],h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",a.proxy(function(b,c){var d=c.node,e=this.get_node(d,!0),f,g,h,i=this.settings.checkbox.cascade,j=this.settings.checkbox.tie_selection,k=this._data[j?"core":"checkbox"].selected,l={};if(d&&d.original&&d.original.state&&d.original.state.undetermined&&(d.original.state.undetermined=!1),-1!==i.indexOf("down"))for(f=0,g=d.children_d.length;g>f;f++)h=this._model.data[d.children_d[f]],h.state[j?"selected":"checked"]=!1,h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1);if(-1!==i.indexOf("up"))for(f=0,g=d.parents.length;g>f;f++)h=this._model.data[d.parents[f]],h.state[j?"selected":"checked"]=!1,h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1),h=this.get_node(d.parents[f],!0),h&&h.length&&h.attr("aria-selected",!1).children(".jstree-anchor").removeClass(j?"jstree-clicked":"jstree-checked");for(l={},f=0,g=k.length;g>f;f++)-1!==i.indexOf("down")&&-1!==a.inArray(k[f],d.children_d)||-1!==i.indexOf("up")&&-1!==a.inArray(k[f],d.parents)||(l[k[f]]=!0);k=[];for(f in l)l.hasOwnProperty(f)&&k.push(f);this._data[j?"core":"checkbox"].selected=k,-1!==i.indexOf("down")&&e.length&&e.find(".jstree-anchor").removeClass(j?"jstree-clicked":"jstree-checked").parent().attr("aria-selected",!1)},this)),-1!==this.settings.checkbox.cascade.indexOf("up")&&this.element.on("delete_node.jstree",a.proxy(function(b,c){var d=this.get_node(c.parent),e=this._model.data,f,g,h,i,j=this.settings.checkbox.tie_selection;while(d&&d.id!==a.jstree.root&&!d.state[j?"selected":"checked"]){for(h=0,f=0,g=d.children.length;g>f;f++)h+=e[d.children[f]].state[j?"selected":"checked"];if(!(g>0&&h===g))break;d.state[j?"selected":"checked"]=!0,this._data[j?"core":"checkbox"].selected.push(d.id),i=this.get_node(d,!0),i&&i.length&&i.attr("aria-selected",!0).children(".jstree-anchor").addClass(j?"jstree-clicked":"jstree-checked"),d=this.get_node(d.parent)}},this)).on("move_node.jstree",a.proxy(function(b,c){var d=c.is_multi,e=c.old_parent,f=this.get_node(c.parent),g=this._model.data,h,i,j,k,l,m=this.settings.checkbox.tie_selection;if(!d){h=this.get_node(e);while(h&&h.id!==a.jstree.root&&!h.state[m?"selected":"checked"]){for(i=0,j=0,k=h.children.length;k>j;j++)i+=g[h.children[j]].state[m?"selected":"checked"];if(!(k>0&&i===k))break;h.state[m?"selected":"checked"]=!0,this._data[m?"core":"checkbox"].selected.push(h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"),h=this.get_node(h.parent)}}h=f;while(h&&h.id!==a.jstree.root){for(i=0,j=0,k=h.children.length;k>j;j++)i+=g[h.children[j]].state[m?"selected":"checked"];if(i===k)h.state[m?"selected":"checked"]||(h.state[m?"selected":"checked"]=!0,this._data[m?"core":"checkbox"].selected.push(h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"));else{if(!h.state[m?"selected":"checked"])break;h.state[m?"selected":"checked"]=!1,this._data[m?"core":"checkbox"].selected=a.vakata.array_remove_item(this._data[m?"core":"checkbox"].selected,h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!1).children(".jstree-anchor").removeClass(m?"jstree-clicked":"jstree-checked")}h=this.get_node(h.parent)}},this))},this._undetermined=function(){if(null!==this.element){var c,d,e,f,g={},h=this._model.data,i=this.settings.checkbox.tie_selection,j=this._data[i?"core":"checkbox"].selected,k=[],l=this;for(c=0,d=j.length;d>c;c++)if(h[j[c]]&&h[j[c]].parents)for(e=0,f=h[j[c]].parents.length;f>e;e++){if(g[h[j[c]].parents[e]]!==b)break;h[j[c]].parents[e]!==a.jstree.root&&(g[h[j[c]].parents[e]]=!0,k.push(h[j[c]].parents[e]))}for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var i=l.get_node(this),j;if(i.state.loaded){for(c=0,d=i.children_d.length;d>c;c++)if(j=h[i.children_d[c]],!j.state.loaded&&j.original&&j.original.state&&j.original.state.undetermined&&j.original.state.undetermined===!0)for(g[j.id]===b&&j.id!==a.jstree.root&&(g[j.id]=!0,k.push(j.id)),e=0,f=j.parents.length;f>e;e++)g[j.parents[e]]===b&&j.parents[e]!==a.jstree.root&&(g[j.parents[e]]=!0,k.push(j.parents[e]))}else if(i.original&&i.original.state&&i.original.state.undetermined&&i.original.state.undetermined===!0)for(g[i.id]===b&&i.id!==a.jstree.root&&(g[i.id]=!0,k.push(i.id)),e=0,f=i.parents.length;f>e;e++)g[i.parents[e]]===b&&i.parents[e]!==a.jstree.root&&(g[i.parents[e]]=!0,k.push(i.parents[e]))}),this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),c=0,d=k.length;d>c;c++)h[k[c]].state[i?"selected":"checked"]||(j=this.get_node(k[c],!0),j&&j.length&&j.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined"))}},this.redraw_node=function(b,c,e,f){if(b=d.redraw_node.apply(this,arguments)){var g,h,i=null,j=null;for(g=0,h=b.childNodes.length;h>g;g++)if(b.childNodes[g]&&b.childNodes[g].className&&-1!==b.childNodes[g].className.indexOf("jstree-anchor")){i=b.childNodes[g];break}i&&(!this.settings.checkbox.tie_selection&&this._model.data[b.id].state.checked&&(i.className+=" jstree-checked"),j=m.cloneNode(!1),this._model.data[b.id].state.checkbox_disabled&&(j.className+=" jstree-checkbox-disabled"),i.insertBefore(j,i.childNodes[0]))}return e||-1===this.settings.checkbox.cascade.indexOf("undetermined")||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)),b},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(b){b=this.get_node(b);var c=this.settings.checkbox.cascade,d,e,f=this.settings.checkbox.tie_selection,g=this._data[f?"core":"checkbox"].selected,h=this._model.data;if(!b||b.state[f?"selected":"checked"]===!0||-1===c.indexOf("undetermined")||-1===c.indexOf("down")&&-1===c.indexOf("up"))return!1;if(!b.state.loaded&&b.original.state.undetermined===!0)return!0;for(d=0,e=b.children_d.length;e>d;d++)if(-1!==a.inArray(b.children_d[d],g)||!h[b.children_d[d]].state.loaded&&h[b.children_d[d]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.disable_checkbox(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(e=this.get_node(b,!0),void(b.state.checkbox_disabled||(b.state.checkbox_disabled=!0,e&&e.length&&e.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:b})))):!1},this.enable_checkbox=function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.enable_checkbox(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(e=this.get_node(b,!0),void(b.state.checkbox_disabled&&(b.state.checkbox_disabled=!1,e&&e.length&&e.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:b})))):!1},this.activate_node=function(b,c){return a(c.target).hasClass("jstree-checkbox-disabled")?!1:(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||a(c.target).hasClass("jstree-checkbox"))&&(c.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!a(c.target).hasClass("jstree-checkbox")?d.activate_node.call(this,b,c):this.is_disabled(b)?!1:(this.is_checked(b)?this.uncheck_node(b,c):this.check_node(b,c),void this.trigger("activate_node",{node:this.get_node(b)})))},this.check_node=function(b,c){if(this.settings.checkbox.tie_selection)return this.select_node(b,!1,!0,c);var d,e,f,g;if(a.isArray(b)){for(b=b.slice(),e=0,f=b.length;f>e;e++)this.check_node(b[e],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(d=this.get_node(b,!0),void(b.state.checked||(b.state.checked=!0,this._data.checkbox.selected.push(b.id),d&&d.length&&d.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:b,selected:this._data.checkbox.selected,event:c})))):!1},this.uncheck_node=function(b,c){if(this.settings.checkbox.tie_selection)return this.deselect_node(b,!1,c);var d,e,f;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.uncheck_node(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=this.get_node(b,!0),void(b.state.checked&&(b.state.checked=!1,this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,b.id),f.length&&f.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:b,selected:this._data.checkbox.selected,event:c})))):!1},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var b=this._data.checkbox.selected.concat([]),c,d;for(this._data.checkbox.selected=this._model.data[a.jstree.root].children_d.concat(),c=0,d=this._data.checkbox.selected.length;d>c;c++)this._model.data[this._data.checkbox.selected[c]]&&(this._model.data[this._data.checkbox.selected[c]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var a=this._data.checkbox.selected.concat([]),b,c;for(b=0,c=this._data.checkbox.selected.length;c>b;b++)this._model.data[this._data.checkbox.selected[b]]&&(this._model.data[this._data.checkbox.selected[b]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:a})},this.is_checked=function(b){return this.settings.checkbox.tie_selection?this.is_selected(b):(b=this.get_node(b),b&&b.id!==a.jstree.root?b.state.checked:!1)},this.get_checked=function(b){return this.settings.checkbox.tie_selection?this.get_selected(b):b?a.map(this._data.checkbox.selected,a.proxy(function(a){return this.get_node(a)},this)):this._data.checkbox.selected},this.get_top_checked=function(b){if(this.settings.checkbox.tie_selection)return this.get_top_selected(b);var c=this.get_checked(!0),d={},e,f,g,h;for(e=0,f=c.length;f>e;e++)d[c[e].id]=c[e];for(e=0,f=c.length;f>e;e++)for(g=0,h=c[e].children_d.length;h>g;g++)d[c[e].children_d[g]]&&delete d[c[e].children_d[g]];c=[];for(e in d)d.hasOwnProperty(e)&&c.push(e);return b?a.map(c,a.proxy(function(a){return this.get_node(a)},this)):c},this.get_bottom_checked=function(b){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(b);var c=this.get_checked(!0),d=[],e,f;for(e=0,f=c.length;f>e;e++)c[e].children.length||d.push(c[e].id);return b?a.map(d,a.proxy(function(a){return this.get_node(a)},this)):d},this.load_node=function(b,c){var e,f,g,h,i,j;if(!a.isArray(b)&&!this.settings.checkbox.tie_selection&&(j=this.get_node(b),j&&j.state.loaded))for(e=0,f=j.children_d.length;f>e;e++)this._model.data[j.children_d[e]].state.checked&&(i=!0,this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,j.children_d[e]));return d.load_node.apply(this,arguments)},this.get_state=function(){var a=d.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection?a:(a.checkbox=this._data.checkbox.selected.slice(),a)},this.set_state=function(b,c){var e=d.set_state.apply(this,arguments);if(e&&b.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var f=this;a.each(b.checkbox,function(a,b){f.check_node(b)})}return delete b.checkbox,this.set_state(b,c),!1}return e},this.refresh=function(a,b){return this.settings.checkbox.tie_selection||(this._data.checkbox.selected=[]),d.refresh.apply(this,arguments)}},a.jstree.defaults.conditionalselect=function(){return!0},a.jstree.plugins.conditionalselect=function(a,b){this.activate_node=function(a,c){this.settings.conditionalselect.call(this,this.get_node(a),c)&&b.activate_node.call(this,a,c)}},a.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(b,c){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.create_node(d,{},"last",function(a){setTimeout(function(){c.edit(a)},0)})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.edit(d)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.delete_node(c.get_selected()):c.delete_node(d)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.cut(c.get_top_selected()):c.cut(d)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.copy(c.get_top_selected()):c.copy(d)}},paste:{separator_before:!1,icon:!1,_disabled:function(b){return!a.jstree.reference(b.reference).can_paste()},separator_after:!1,label:"Paste",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.paste(d)}}}}}}},a.jstree.plugins.contextmenu=function(c,d){this.bind=function(){d.bind.call(this);var b=0,c=null,e,f;this.element.on("contextmenu.jstree",".jstree-anchor",a.proxy(function(a,d){"input"!==a.target.tagName.toLowerCase()&&(a.preventDefault(),b=a.ctrlKey?+new Date:0,(d||c)&&(b=+new Date+1e4),c&&clearTimeout(c),this.is_loading(a.currentTarget)||this.show_contextmenu(a.currentTarget,a.pageX,a.pageY,a))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(c){this._data.contextmenu.visible&&(!b||+new Date-b>250)&&a.vakata.context.hide(),b=0},this)).on("touchstart.jstree",".jstree-anchor",function(b){b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(e=b.originalEvent.changedTouches[0].clientX,f=b.originalEvent.changedTouches[0].clientY,c=setTimeout(function(){a(b.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(a){c&&a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]&&(Math.abs(e-a.originalEvent.changedTouches[0].clientX)>50||Math.abs(f-a.originalEvent.changedTouches[0].clientY)>50)&&clearTimeout(c)}).on("touchend.vakata.jstree",function(a){c&&clearTimeout(c)}),a(i).on("context_hide.vakata.jstree",a.proxy(function(b,c){this._data.contextmenu.visible=!1,a(c.reference).removeClass("jstree-context")},this))},this.teardown=function(){this._data.contextmenu.visible&&a.vakata.context.hide(),d.teardown.call(this)},this.show_contextmenu=function(c,d,e,f){if(c=this.get_node(c),!c||c.id===a.jstree.root)return!1;var g=this.settings.contextmenu,h=this.get_node(c,!0),i=h.children(".jstree-anchor"),j=!1,k=!1;(g.show_at_node||d===b||e===b)&&(j=i.offset(),d=j.left,e=j.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(c)&&this.activate_node(c,f),k=g.items,a.isFunction(k)&&(k=k.call(this,c,a.proxy(function(a){this._show_contextmenu(c,d,e,a)},this))),a.isPlainObject(k)&&this._show_contextmenu(c,d,e,k)},this._show_contextmenu=function(b,c,d,e){var f=this.get_node(b,!0),g=f.children(".jstree-anchor");a(i).one("context_show.vakata.jstree",a.proxy(function(b,c){var d="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";a(c.element).addClass(d),g.addClass("jstree-context")},this)),this._data.contextmenu.visible=!0,a.vakata.context.show(g,{x:c,y:d},e),this.trigger("show_contextmenu",{node:b,x:c,y:d})}},function(a){var b=!1,c={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};a.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(b){a(i).triggerHandler("context_"+b+".vakata",{reference:c.reference,element:c.element,position:{x:c.position_x,y:c.position_y}})},_execute:function(b){return b=c.items[b],b&&(!b._disabled||a.isFunction(b._disabled)&&!b._disabled({item:b,reference:c.reference,element:c.element}))&&b.action?b.action.call(null,{item:b,reference:c.reference,element:c.element,position:{x:c.position_x,y:c.position_y}}):!1},_parse:function(b,d){if(!b)return!1;d||(c.html="",c.items=[]);var e="",f=!1,g;return d&&(e+="<ul>"),a.each(b,function(b,d){return d?(c.items.push(d),!f&&d.separator_before&&(e+="<li class='vakata-context-separator'><a href='#' "+(a.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>"),f=!1,e+="<li class='"+(d._class||"")+(d._disabled===!0||a.isFunction(d._disabled)&&d._disabled({item:d,reference:c.reference,element:c.element})?" vakata-contextmenu-disabled ":"")+"' "+(d.shortcut?" data-shortcut='"+d.shortcut+"' ":"")+">",e+="<a href='#' rel='"+(c.items.length-1)+"' "+(d.title?"title='"+d.title+"'":"")+">",a.vakata.context.settings.icons&&(e+="<i ",d.icon&&(e+=-1!==d.icon.indexOf("/")||-1!==d.icon.indexOf(".")?" style='background:url(\""+d.icon+"\") center center no-repeat' ":" class='"+d.icon+"' "),e+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),e+=(a.isFunction(d.label)?d.label({item:b,reference:c.reference,element:c.element}):d.label)+(d.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+d.shortcut+'">'+(d.shortcut_label||"")+"</span>":"")+"</a>",d.submenu&&(g=a.vakata.context._parse(d.submenu,!0),g&&(e+=g)),e+="</li>",void(d.separator_after&&(e+="<li class='vakata-context-separator'><a href='#' "+(a.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>",f=!0))):!0}),e=e.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),d&&(e+="</ul>"),d||(c.html=e,a.vakata.context._trigger("parse")),e.length>10?e:!1},_show_submenu:function(c){if(c=a(c),c.length&&c.children("ul").length){var d=c.children("ul"),e=c.offset().left,f=e+c.outerWidth(),g=c.offset().top,h=d.width(),i=d.height(),j=a(window).width()+a(window).scrollLeft(),k=a(window).height()+a(window).scrollTop();b?c[f-(h+10+c.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):c[f+h>j&&e>j-f?"addClass":"removeClass"]("vakata-context-right"),g+i+10>k&&d.css("bottom","-1px"),c.hasClass("vakata-context-right")?h>e&&d.css("margin-right",e-h):h>j-f&&d.css("margin-left",j-f-h),d.show()}},show:function(d,e,f){var g,h,i,j,k,l,m,n,o=!0;switch(c.element&&c.element.length&&c.element.width(""),o){case!e&&!d:return!1;case!!e&&!!d:c.reference=d,c.position_x=e.x,c.position_y=e.y;break;case!e&&!!d:c.reference=d,g=d.offset(),c.position_x=g.left+d.outerHeight(),c.position_y=g.top;break;case!!e&&!d:c.position_x=e.x,c.position_y=e.y}d&&!f&&a(d).data("vakata_contextmenu")&&(f=a(d).data("vakata_contextmenu")),a.vakata.context._parse(f)&&c.element.html(c.html),c.items.length&&(c.element.appendTo("body"),h=c.element,i=c.position_x,j=c.position_y,k=h.width(),l=h.height(),m=a(window).width()+a(window).scrollLeft(),n=a(window).height()+a(window).scrollTop(),b&&(i-=h.outerWidth()-a(d).outerWidth(),i<a(window).scrollLeft()+20&&(i=a(window).scrollLeft()+20)),i+k+20>m&&(i=m-(k+20)),j+l+20>n&&(j=n-(l+20)),c.element.css({left:i,top:j}).show().find("a").first().focus().parent().addClass("vakata-context-hover"),c.is_visible=!0,a.vakata.context._trigger("show"))},hide:function(){c.is_visible&&(c.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),c.is_visible=!1,a.vakata.context._trigger("hide"))}},a(function(){b="rtl"===a("body").css("direction");var d=!1;c.element=a("<ul class='vakata-context'></ul>"),c.element.on("mouseenter","li",function(b){b.stopImmediatePropagation(),a.contains(this,b.relatedTarget)||(d&&clearTimeout(d),c.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),a(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),a.vakata.context._show_submenu(this))}).on("mouseleave","li",function(b){a.contains(this,b.relatedTarget)||a(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(b){a(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),a.vakata.context.settings.hide_onmouseleave&&(d=setTimeout(function(b){return function(){a.vakata.context.hide()}}(this),a.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(b){b.preventDefault(),a(this).blur().parent().hasClass("vakata-context-disabled")||a.vakata.context._execute(a(this).attr("rel"))===!1||a.vakata.context.hide()}).on("keydown","a",function(b){var d=null;switch(b.which){case 13:case 32:b.type="mouseup",b.preventDefault(),a(b.currentTarget).trigger(b);break;case 37:c.is_visible&&(c.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 38:c.is_visible&&(d=c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),d.length||(d=c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),d.addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 39:c.is_visible&&(c.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 40:c.is_visible&&(d=c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),d.length||(d=c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),d.addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),
b.preventDefault());break;case 27:a.vakata.context.hide(),b.preventDefault()}}).on("keydown",function(a){a.preventDefault();var b=c.element.find(".vakata-contextmenu-shortcut-"+a.which).parent();b.parent().not(".vakata-context-disabled")&&b.click()}),a(i).on("mousedown.vakata.jstree",function(b){c.is_visible&&!a.contains(c.element[0],b.target)&&a.vakata.context.hide()}).on("context_show.vakata.jstree",function(a,d){c.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),b&&c.element.addClass("vakata-context-rtl").css("direction","rtl"),c.element.find("ul").hide().end()})})}(a),a.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1};var n,o;a.jstree.plugins.dnd=function(b,c){this.init=function(a,b){c.init.call(this,a,b),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in i.createElement("span")},this.bind=function(){c.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",a.proxy(function(b){if(this.settings.dnd.large_drag_target&&a(b.target).closest(".jstree-node")[0]!==b.currentTarget)return!0;if("touchstart"===b.type&&(!this.settings.dnd.touch||"selected"===this.settings.dnd.touch&&!a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var c=this.get_node(b.target),d=this.is_selected(c)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,e=d>1?d+" "+this.get_string("nodes"):this.get_text(b.currentTarget);if(this.settings.core.force_text&&(e=a.vakata.html.escape(e)),c&&c.id&&c.id!==a.jstree.root&&(1===b.which||"touchstart"===b.type||"dragstart"===b.type)&&(this.settings.dnd.is_draggable===!0||a.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,d>1?this.get_top_selected(!0):[c],b))){if(n={jstree:!0,origin:this,obj:this.get_node(c,!0),nodes:d>1?this.get_top_selected():[c.id]},o=b.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),a.vakata.dnd.start(b,n,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+e+'<ins class="jstree-copy" style="display:none;">+</ins></div>');a.vakata.dnd._trigger("start",b,{helper:a(),element:o,data:n})}},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(b){return b.preventDefault(),a.vakata.dnd._trigger("move",b,{helper:a(),element:o,data:n}),!1}).on("drop.jstree",a.proxy(function(b){return b.preventDefault(),a.vakata.dnd._trigger("stop",b,{helper:a(),element:o,data:n}),!1},this))},this.redraw_node=function(a,b,d,e){if(a=c.redraw_node.apply(this,arguments),a&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)a.setAttribute("draggable",!0);else{var f,g,h=null;for(f=0,g=a.childNodes.length;g>f;f++)if(a.childNodes[f]&&a.childNodes[f].className&&-1!==a.childNodes[f].className.indexOf("jstree-anchor")){h=a.childNodes[f];break}h&&h.setAttribute("draggable",!0)}return a}},a(function(){var c=!1,d=!1,e=!1,f=!1,g=a('<div id="jstree-marker">&#160;</div>').hide();a(i).on("dnd_start.vakata.jstree",function(a,b){c=!1,e=!1,b&&b.data&&b.data.jstree&&g.appendTo("body")}).on("dnd_move.vakata.jstree",function(h,i){if(f&&(i.event&&"dragover"===i.event.type&&i.event.target===e.target||clearTimeout(f)),i&&i.data&&i.data.jstree&&(!i.event.target.id||"jstree-marker"!==i.event.target.id)){e=i.event;var j=a.jstree.reference(i.event.target),k=!1,l=!1,m=!1,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(j&&j._data&&j._data.dnd)if(g.attr("class","jstree-"+j.get_theme()+(j.settings.core.themes.responsive?" jstree-dnd-responsive":"")),C=i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey)),i.helper.children().attr("class","jstree-"+j.get_theme()+" jstree-"+j.get_theme()+"-"+j.get_theme_variant()+" "+(j.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[C?"show":"hide"](),i.event.target!==j.element[0]&&i.event.target!==j.get_container_ul()[0]||0!==j.get_container_ul().children().length){if(k=j.settings.dnd.large_drop_target?a(i.event.target).closest(".jstree-node").children(".jstree-anchor"):a(i.event.target).closest(".jstree-anchor"),k&&k.length&&k.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(l=k.offset(),m=(i.event.pageY!==b?i.event.pageY:i.event.originalEvent.pageY)-l.top,q=k.outerHeight(),t=q/3>m?["b","i","a"]:m>q-q/3?["a","i","b"]:m>q/2?["i","a","b"]:["i","b","a"],a.each(t,function(b,e){switch(e){case"b":o=l.left-6,p=l.top,r=j.get_parent(k),s=k.parent().index();break;case"i":A=j.settings.dnd.inside_pos,B=j.get_node(k.parent()),o=l.left-2,p=l.top+q/2+1,r=B.id,s="first"===A?0:"last"===A?B.children.length:Math.min(A,B.children.length);break;case"a":o=l.left-6,p=l.top+q,r=j.get_parent(k),s=k.parent().index()+1}for(u=!0,v=0,w=i.data.nodes.length;w>v;v++)if(x=i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey))?"copy_node":"move_node",y=s,"move_node"===x&&"a"===e&&i.data.origin&&i.data.origin===j&&r===j.get_parent(i.data.nodes[v])&&(z=j.get_node(r),y>a.inArray(i.data.nodes[v],z.children)&&(y-=1)),u=u&&(j&&j.settings&&j.settings.dnd&&j.settings.dnd.check_while_dragging===!1||j.check(x,i.data.origin&&i.data.origin!==j?i.data.origin.get_node(i.data.nodes[v]):i.data.nodes[v],r,y,{dnd:!0,ref:j.get_node(k.parent()),pos:e,origin:i.data.origin,is_multi:i.data.origin&&i.data.origin!==j,is_foreign:!i.data.origin})),!u){j&&j.last_error&&(d=j.last_error());break}return"i"===e&&k.parent().is(".jstree-closed")&&j.settings.dnd.open_timeout&&(f=setTimeout(function(a,b){return function(){a.open_node(b)}}(j,k),j.settings.dnd.open_timeout)),u?(D=j.get_node(r,!0),D.hasClass(".jstree-dnd-parent")||(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),D.addClass("jstree-dnd-parent")),c={ins:j,par:r,pos:"i"!==e||"last"!==A||0!==s||j.is_loaded(B)?s:"last"},g.css({left:o+"px",top:p+"px"}).show(),i.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect=C?"copy":"move"),d={},t=!0,!1):void 0}),t===!0))return}else{for(u=!0,v=0,w=i.data.nodes.length;w>v;v++)if(u=u&&j.check(i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey))?"copy_node":"move_node",i.data.origin&&i.data.origin!==j?i.data.origin.get_node(i.data.nodes[v]):i.data.nodes[v],a.jstree.root,"last",{dnd:!0,ref:j.get_node(a.jstree.root),pos:"i",origin:i.data.origin,is_multi:i.data.origin&&i.data.origin!==j,is_foreign:!i.data.origin}),!u)break;if(u)return c={ins:j,par:a.jstree.root,pos:"last"},g.hide(),i.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect=C?"copy":"move"))}a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),c=!1,i.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect="none"),g.hide()}}).on("dnd_scroll.vakata.jstree",function(a,b){b&&b.data&&b.data.jstree&&(g.hide(),c=!1,e=!1,b.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(b,h){if(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),f&&clearTimeout(f),h&&h.data&&h.data.jstree){g.hide().detach();var i,j,k=[];if(c){for(i=0,j=h.data.nodes.length;j>i;i++)k[i]=h.data.origin?h.data.origin.get_node(h.data.nodes[i]):h.data.nodes[i];c.ins[h.data.origin&&(h.data.origin.settings.dnd.always_copy||h.data.origin.settings.dnd.copy&&(h.event.metaKey||h.event.ctrlKey))?"copy_node":"move_node"](k,c.par,c.pos,!1,!1,!1,h.data.origin)}else i=a(h.event.target).closest(".jstree"),i.length&&d&&d.error&&"check"===d.error&&(i=i.jstree(!0),i&&i.settings.core.error.call(this,d));e=!1,c=!1}}).on("keyup.jstree keydown.jstree",function(b,h){h=a.vakata.dnd._get(),h&&h.data&&h.data.jstree&&("keyup"===b.type&&27===b.which?(f&&clearTimeout(f),c=!1,d=!1,e=!1,f=!1,g.hide().detach(),a.vakata.dnd._clean()):(h.helper.find(".jstree-copy").first()[h.data.origin&&(h.data.origin.settings.dnd.always_copy||h.data.origin.settings.dnd.copy&&(b.metaKey||b.ctrlKey))?"show":"hide"](),e&&(e.metaKey=b.metaKey,e.ctrlKey=b.ctrlKey,a.vakata.dnd._trigger("move",e))))})}),function(a){a.vakata.html={div:a("<div />"),escape:function(b){return a.vakata.html.div.text(b).html()},strip:function(b){return a.vakata.html.div.empty().append(a.parseHTML(b)).text()}};var c={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};a.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:50},_trigger:function(c,d,e){e===b&&(e=a.vakata.dnd._get()),e.event=d,a(i).triggerHandler("dnd_"+c+".vakata",e)},_get:function(){return{data:c.data,element:c.element,helper:c.helper}},_clean:function(){c.helper&&c.helper.remove(),c.scroll_i&&(clearInterval(c.scroll_i),c.scroll_i=!1),c={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},a(i).off("mousemove.vakata.jstree touchmove.vakata.jstree",a.vakata.dnd.drag),a(i).off("mouseup.vakata.jstree touchend.vakata.jstree",a.vakata.dnd.stop)},_scroll:function(b){if(!c.scroll_e||!c.scroll_l&&!c.scroll_t)return c.scroll_i&&(clearInterval(c.scroll_i),c.scroll_i=!1),!1;if(!c.scroll_i)return c.scroll_i=setInterval(a.vakata.dnd._scroll,100),!1;if(b===!0)return!1;var d=c.scroll_e.scrollTop(),e=c.scroll_e.scrollLeft();c.scroll_e.scrollTop(d+c.scroll_t*a.vakata.dnd.settings.scroll_speed),c.scroll_e.scrollLeft(e+c.scroll_l*a.vakata.dnd.settings.scroll_speed),(d!==c.scroll_e.scrollTop()||e!==c.scroll_e.scrollLeft())&&a.vakata.dnd._trigger("scroll",c.scroll_e)},start:function(b,d,e){"touchstart"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_drag&&a.vakata.dnd.stop({});try{b.currentTarget.unselectable="on",b.currentTarget.onselectstart=function(){return!1},b.currentTarget.style&&(b.currentTarget.style.touchAction="none",b.currentTarget.style.msTouchAction="none",b.currentTarget.style.MozUserSelect="none")}catch(f){}return c.init_x=b.pageX,c.init_y=b.pageY,c.data=d,c.is_down=!0,c.element=b.currentTarget,c.target=b.target,c.is_touch="touchstart"===b.type,e!==!1&&(c.helper=a("<div id='vakata-dnd'></div>").html(e).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),a(i).on("mousemove.vakata.jstree touchmove.vakata.jstree",a.vakata.dnd.drag),a(i).on("mouseup.vakata.jstree touchend.vakata.jstree",a.vakata.dnd.stop),!1},drag:function(b){if("touchmove"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_down){if(!c.is_drag){if(!(Math.abs(b.pageX-c.init_x)>(c.is_touch?a.vakata.dnd.settings.threshold_touch:a.vakata.dnd.settings.threshold)||Math.abs(b.pageY-c.init_y)>(c.is_touch?a.vakata.dnd.settings.threshold_touch:a.vakata.dnd.settings.threshold)))return;c.helper&&(c.helper.appendTo("body"),c.helper_w=c.helper.outerWidth()),c.is_drag=!0,a(c.target).one("click.vakata",!1),a.vakata.dnd._trigger("start",b)}var d=!1,e=!1,f=!1,g=!1,h=!1,j=!1,k=!1,l=!1,m=!1,n=!1;return c.scroll_t=0,c.scroll_l=0,c.scroll_e=!1,a(a(b.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(a(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var d=a(this),e=d.offset();return this.scrollHeight>this.offsetHeight&&(e.top+d.height()-b.pageY<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=1),b.pageY-e.top<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(e.left+d.width()-b.pageX<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=1),b.pageX-e.left<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=-1)),c.scroll_t||c.scroll_l?(c.scroll_e=a(this),!1):void 0}),c.scroll_e||(d=a(i),e=a(window),f=d.height(),g=e.height(),h=d.width(),j=e.width(),k=d.scrollTop(),l=d.scrollLeft(),f>g&&b.pageY-k<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=-1),f>g&&g-(b.pageY-k)<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=1),h>j&&b.pageX-l<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=-1),h>j&&j-(b.pageX-l)<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=1),(c.scroll_t||c.scroll_l)&&(c.scroll_e=d)),c.scroll_e&&a.vakata.dnd._scroll(!0),c.helper&&(m=parseInt(b.pageY+a.vakata.dnd.settings.helper_top,10),n=parseInt(b.pageX+a.vakata.dnd.settings.helper_left,10),f&&m+25>f&&(m=f-50),h&&n+c.helper_w>h&&(n=h-(c.helper_w+2)),c.helper.css({left:n+"px",top:m+"px"})),a.vakata.dnd._trigger("move",b),!1}},stop:function(b){if("touchend"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_drag)b.target!==c.target&&a(c.target).off("click.vakata"),a.vakata.dnd._trigger("stop",b);else if("touchend"===b.type&&b.target===c.target){var d=setTimeout(function(){a(b.target).click()},100);a(b.target).one("click",function(){d&&clearTimeout(d)})}return a.vakata.dnd._clean(),!1}}}(a),a.jstree.defaults.massload=null,a.jstree.plugins.massload=function(b,c){this.init=function(a,b){this._data.massload={},c.init.call(this,a,b)},this._load_nodes=function(b,d,e,f){var g=this.settings.massload,h=JSON.stringify(b),i=[],j=this._model.data,k,l,m;if(!e){for(k=0,l=b.length;l>k;k++)(!j[b[k]]||!j[b[k]].state.loaded&&!j[b[k]].state.failed||f)&&(i.push(b[k]),m=this.get_node(b[k],!0),m&&m.length&&m.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},i.length){if(a.isFunction(g))return g.call(this,i,a.proxy(function(a){var g,h;if(a)for(g in a)a.hasOwnProperty(g)&&(this._data.massload[g]=a[g]);for(g=0,h=b.length;h>g;g++)m=this.get_node(b[g],!0),m&&m.length&&m.removeClass("jstree-loading").attr("aria-busy",!1);c._load_nodes.call(this,b,d,e,f)},this));if("object"==typeof g&&g&&g.url)return g=a.extend(!0,{},g),a.isFunction(g.url)&&(g.url=g.url.call(this,i)),a.isFunction(g.data)&&(g.data=g.data.call(this,i)),a.ajax(g).done(a.proxy(function(a,g,h){var i,j;if(a)for(i in a)a.hasOwnProperty(i)&&(this._data.massload[i]=a[i]);for(i=0,j=b.length;j>i;i++)m=this.get_node(b[i],!0),m&&m.length&&m.removeClass("jstree-loading").attr("aria-busy",!1);c._load_nodes.call(this,b,d,e,f)},this)).fail(a.proxy(function(a){c._load_nodes.call(this,b,d,e,f)},this))}}return c._load_nodes.call(this,b,d,e,f)},this._load_node=function(b,d){var e=this._data.massload[b.id],f=null,g;return e?(f=this["string"==typeof e?"_append_html_data":"_append_json_data"](b,"string"==typeof e?a(a.parseHTML(e)).filter(function(){return 3!==this.nodeType}):e,function(a){d.call(this,a)}),g=this.get_node(b.id,!0),g&&g.length&&g.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[b.id],f):c._load_node.call(this,b,d)}},a.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},a.jstree.plugins.search=function(c,d){this.bind=function(){d.bind.call(this),this._data.search.str="",this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",a.proxy(function(b,c){if(this._data.search.som&&c.res.length){var d=this._model.data,e,f,g=[],h,i;for(e=0,f=c.res.length;f>e;e++)if(d[c.res[e]]&&!d[c.res[e]].state.hidden&&(g.push(c.res[e]),g=g.concat(d[c.res[e]].parents),this._data.search.smc))for(h=0,i=d[c.res[e]].children_d.length;i>h;h++)d[d[c.res[e]].children_d[h]]&&!d[d[c.res[e]].children_d[h]].state.hidden&&g.push(d[c.res[e]].children_d[h]);g=a.vakata.array_remove_item(a.vakata.array_unique(g),a.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(g,!0),this.redraw(!0)}},this)).on("clear_search.jstree",a.proxy(function(a,b){this._data.search.som&&b.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))},this))},this.search=function(c,d,e,f,g,h){if(c===!1||""===a.trim(c.toString()))return this.clear_search();f=this.get_node(f),f=f&&f.id?f.id:null,c=c.toString();var i=this.settings.search,j=i.ajax?i.ajax:!1,k=this._model.data,l=null,m=[],n=[],o,p;if(this._data.search.res.length&&!g&&this.clear_search(),e===b&&(e=i.show_only_matches),h===b&&(h=i.show_only_matches_children),!d&&j!==!1)return a.isFunction(j)?j.call(this,c,a.proxy(function(b){b&&b.d&&(b=b.d),this._load_nodes(a.isArray(b)?a.vakata.array_unique(b):[],function(){this.search(c,!0,e,f,g)})},this),f):(j=a.extend({},j),j.data||(j.data={}),j.data.str=c,f&&(j.data.inside=f),a.ajax(j).fail(a.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(j)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(a.proxy(function(b){b&&b.d&&(b=b.d),this._load_nodes(a.isArray(b)?a.vakata.array_unique(b):[],function(){this.search(c,!0,e,f,g)})},this)));if(g||(this._data.search.str=c,this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=e,this._data.search.smc=h),l=new a.vakata.search(c,!0,{caseSensitive:i.case_sensitive,fuzzy:i.fuzzy}),a.each(k[f?f:a.jstree.root].children_d,function(a,b){var d=k[b];d.text&&!d.state.hidden&&(!i.search_leaves_only||d.state.loaded&&0===d.children.length)&&(i.search_callback&&i.search_callback.call(this,c,d)||!i.search_callback&&l.search(d.text).isMatch)&&(m.push(b),n=n.concat(d.parents))}),m.length){for(n=a.vakata.array_unique(n),o=0,p=n.length;p>o;o++)n[o]!==a.jstree.root&&k[n[o]]&&this.open_node(n[o],null,0)===!0&&this._data.search.opn.push(n[o]);g?(this._data.search.dom=this._data.search.dom.add(a(this.element[0].querySelectorAll("#"+a.map(m,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=a.vakata.array_unique(this._data.search.res.concat(m))):(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(m,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=m),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:c,res:this._data.search.res,show_only_matches:e})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(this._data.search.res,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=a()},this.redraw_node=function(b,c,e,f){if(b=d.redraw_node.apply(this,arguments),b&&-1!==a.inArray(b.id,this._data.search.res)){var g,h,i=null;for(g=0,h=b.childNodes.length;h>g;g++)if(b.childNodes[g]&&b.childNodes[g].className&&-1!==b.childNodes[g].className.indexOf("jstree-anchor")){i=b.childNodes[g];break}i&&(i.className+=" jstree-search")}return b}},function(a){a.vakata.search=function(b,c,d){d=d||{},d=a.extend({},a.vakata.search.defaults,d),d.fuzzy!==!1&&(d.fuzzy=!0),b=d.caseSensitive?b:b.toLowerCase();var e=d.location,f=d.distance,g=d.threshold,h=b.length,i,j,k,l;return h>32&&(d.fuzzy=!1),d.fuzzy&&(i=1<<h-1,j=function(){var a={},c=0;for(c=0;h>c;c++)a[b.charAt(c)]=0;for(c=0;h>c;c++)a[b.charAt(c)]|=1<<h-c-1;return a}(),k=function(a,b){var c=a/h,d=Math.abs(e-b);return f?c+d/f:d?1:c}),l=function(a){if(a=d.caseSensitive?a:a.toLowerCase(),b===a||-1!==a.indexOf(b))return{isMatch:!0,score:0};if(!d.fuzzy)return{isMatch:!1,score:1};var c,f,l=a.length,m=g,n=a.indexOf(b,e),o,p,q=h+l,r,s,t,u,v,w=1,x=[];for(-1!==n&&(m=Math.min(k(0,n),m),n=a.lastIndexOf(b,e+h),-1!==n&&(m=Math.min(k(0,n),m))),n=-1,c=0;h>c;c++){o=0,p=q;while(p>o)k(c,e+p)<=m?o=p:q=p,p=Math.floor((q-o)/2+o);for(q=p,s=Math.max(1,e-p+1),t=Math.min(e+p,l)+h,u=new Array(t+2),u[t+1]=(1<<c)-1,f=t;f>=s;f--)if(v=j[a.charAt(f-1)],0===c?u[f]=(u[f+1]<<1|1)&v:u[f]=(u[f+1]<<1|1)&v|((r[f+1]|r[f])<<1|1)|r[f+1],u[f]&i&&(w=k(c,f-1),m>=w)){if(m=w,n=f-1,x.push(n),!(n>e))break;s=Math.max(1,2*e-n)}if(k(c+1,e)>m)break;r=u}return{isMatch:n>=0,score:w}},c===!0?{search:l}:l(c)},a.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1}}(a),a.jstree.defaults.sort=function(a,b){return this.get_text(a)>this.get_text(b)?1:-1},a.jstree.plugins.sort=function(b,c){this.bind=function(){c.bind.call(this),this.element.on("model.jstree",a.proxy(function(a,b){this.sort(b.parent,!0)},this)).on("rename_node.jstree create_node.jstree",a.proxy(function(a,b){this.sort(b.parent||b.node.parent,!1),this.redraw_node(b.parent||b.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",a.proxy(function(a,b){this.sort(b.parent,!1),this.redraw_node(b.parent,!0)},this))},this.sort=function(b,c){var d,e;if(b=this.get_node(b),b&&b.children&&b.children.length&&(b.children.sort(a.proxy(this.settings.sort,this)),c))for(d=0,e=b.children_d.length;e>d;d++)this.sort(b.children_d[d],!1)}};var p=!1;a.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1},a.jstree.plugins.state=function(b,c){this.bind=function(){c.bind.call(this);var b=a.proxy(function(){this.element.on(this.settings.state.events,a.proxy(function(){p&&clearTimeout(p),p=setTimeout(a.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",a.proxy(function(a,c){this.element.one("restore_state.jstree",b),this.restore_state()||b()},this))},this.save_state=function(){var b={state:this.get_state(),ttl:this.settings.state.ttl,sec:+new Date};a.vakata.storage.set(this.settings.state.key,JSON.stringify(b))},this.restore_state=function(){var b=a.vakata.storage.get(this.settings.state.key);if(b)try{b=JSON.parse(b)}catch(c){return!1}return b&&b.ttl&&b.sec&&+new Date-b.sec>b.ttl?!1:(b&&b.state&&(b=b.state),b&&a.isFunction(this.settings.state.filter)&&(b=this.settings.state.filter.call(this,b)),b?(this.element.one("set_state.jstree",function(c,d){d.instance.trigger("restore_state",{state:a.extend(!0,{},b)})}),this.set_state(b),!0):!1)},this.clear_state=function(){return a.vakata.storage.del(this.settings.state.key)}},function(a,b){a.vakata.storage={set:function(a,b){return window.localStorage.setItem(a,b)},get:function(a){return window.localStorage.getItem(a)},del:function(a){return window.localStorage.removeItem(a)}}}(a),a.jstree.defaults.types={"default":{}},a.jstree.defaults.types[a.jstree.root]={},a.jstree.plugins.types=function(c,d){this.init=function(c,e){var f,g;if(e&&e.types&&e.types["default"])for(f in e.types)if("default"!==f&&f!==a.jstree.root&&e.types.hasOwnProperty(f))for(g in e.types["default"])e.types["default"].hasOwnProperty(g)&&e.types[f][g]===b&&(e.types[f][g]=e.types["default"][g]);d.init.call(this,c,e),this._model.data[a.jstree.root].type=a.jstree.root},this.refresh=function(b,c){d.refresh.call(this,b,c),this._model.data[a.jstree.root].type=a.jstree.root},this.bind=function(){this.element.on("model.jstree",a.proxy(function(c,d){var e=this._model.data,f=d.nodes,g=this.settings.types,h,i,j="default",k;for(h=0,i=f.length;i>h;h++){if(j="default",e[f[h]].original&&e[f[h]].original.type&&g[e[f[h]].original.type]&&(j=e[f[h]].original.type),e[f[h]].data&&e[f[h]].data.jstree&&e[f[h]].data.jstree.type&&g[e[f[h]].data.jstree.type]&&(j=e[f[h]].data.jstree.type),e[f[h]].type=j,e[f[h]].icon===!0&&g[j].icon!==b&&(e[f[h]].icon=g[j].icon),g[j].li_attr!==b&&"object"==typeof g[j].li_attr)for(k in g[j].li_attr)if(g[j].li_attr.hasOwnProperty(k)){if("id"===k)continue;e[f[h]].li_attr[k]===b?e[f[h]].li_attr[k]=g[j].li_attr[k]:"class"===k&&(e[f[h]].li_attr["class"]=g[j].li_attr["class"]+" "+e[f[h]].li_attr["class"])}if(g[j].a_attr!==b&&"object"==typeof g[j].a_attr)for(k in g[j].a_attr)if(g[j].a_attr.hasOwnProperty(k)){if("id"===k)continue;e[f[h]].a_attr[k]===b?e[f[h]].a_attr[k]=g[j].a_attr[k]:"href"===k&&"#"===e[f[h]].a_attr[k]?e[f[h]].a_attr.href=g[j].a_attr.href:"class"===k&&(e[f[h]].a_attr["class"]=g[j].a_attr["class"]+" "+e[f[h]].a_attr["class"])}}e[a.jstree.root].type=a.jstree.root},this)),d.bind.call(this)},this.get_json=function(b,c,e){var f,g,h=this._model.data,i=c?a.extend(!0,{},c,{no_id:!1}):{},j=d.get_json.call(this,b,i,e);if(j===!1)return!1;if(a.isArray(j))for(f=0,g=j.length;g>f;f++)j[f].type=j[f].id&&h[j[f].id]&&h[j[f].id].type?h[j[f].id].type:"default",c&&c.no_id&&(delete j[f].id,j[f].li_attr&&j[f].li_attr.id&&delete j[f].li_attr.id,j[f].a_attr&&j[f].a_attr.id&&delete j[f].a_attr.id);else j.type=j.id&&h[j.id]&&h[j.id].type?h[j.id].type:"default",c&&c.no_id&&(j=this._delete_ids(j));return j},this._delete_ids=function(b){if(a.isArray(b)){for(var c=0,d=b.length;d>c;c++)b[c]=this._delete_ids(b[c]);return b}return delete b.id,b.li_attr&&b.li_attr.id&&delete b.li_attr.id,b.a_attr&&b.a_attr.id&&delete b.a_attr.id,b.children&&a.isArray(b.children)&&(b.children=this._delete_ids(b.children)),b},this.check=function(c,e,f,g,h){if(d.check.call(this,c,e,f,g,h)===!1)return!1;e=e&&e.id?e:this.get_node(e),f=f&&f.id?f:this.get_node(f);var i=e&&e.id?h&&h.origin?h.origin:a.jstree.reference(e.id):null,j,k,l,m;switch(i=i&&i._model&&i._model.data?i._model.data:null,c){case"create_node":case"move_node":case"copy_node":if("move_node"!==c||-1===a.inArray(e.id,f.children)){if(j=this.get_rules(f),j.max_children!==b&&-1!==j.max_children&&j.max_children===f.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;if(j.valid_children!==b&&-1!==j.valid_children&&-1===a.inArray(e.type||"default",j.valid_children))return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;if(i&&e.children_d&&e.parents){for(k=0,l=0,m=e.children_d.length;m>l;l++)k=Math.max(k,i[e.children_d[l]].parents.length);k=k-e.parents.length+1}(0>=k||k===b)&&(k=1);do{if(j.max_depth!==b&&-1!==j.max_depth&&j.max_depth<k)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;f=this.get_node(f.parent),j=this.get_rules(f),k++}while(f)}}return!0},this.get_rules=function(a){if(a=this.get_node(a),!a)return!1;var c=this.get_type(a,!0);return c.max_depth===b&&(c.max_depth=-1),c.max_children===b&&(c.max_children=-1),c.valid_children===b&&(c.valid_children=-1),c},this.get_type=function(b,c){return b=this.get_node(b),b?c?a.extend({type:b.type},this.settings.types[b.type]):b.type:!1},this.set_type=function(c,d){var e=this._model.data,f,g,h,i,j,k,l,m;if(a.isArray(c)){for(c=c.slice(),g=0,h=c.length;h>g;g++)this.set_type(c[g],d);return!0}if(f=this.settings.types,c=this.get_node(c),!f[d]||!c)return!1;if(l=this.get_node(c,!0),l&&l.length&&(m=l.children(".jstree-anchor")),i=c.type,j=this.get_icon(c),c.type=d,(j===!0||f[i]&&f[i].icon!==b&&j===f[i].icon)&&this.set_icon(c,f[d].icon!==b?f[d].icon:!0),f[i].li_attr!==b&&"object"==typeof f[i].li_attr)for(k in f[i].li_attr)if(f[i].li_attr.hasOwnProperty(k)){if("id"===k)continue;"class"===k?(e[c.id].li_attr["class"]=(e[c.id].li_attr["class"]||"").replace(f[i].li_attr[k],""),l&&l.removeClass(f[i].li_attr[k])):e[c.id].li_attr[k]===f[i].li_attr[k]&&(e[c.id].li_attr[k]=null,l&&l.removeAttr(k))}if(f[i].a_attr!==b&&"object"==typeof f[i].a_attr)for(k in f[i].a_attr)if(f[i].a_attr.hasOwnProperty(k)){if("id"===k)continue;"class"===k?(e[c.id].a_attr["class"]=(e[c.id].a_attr["class"]||"").replace(f[i].a_attr[k],""),m&&m.removeClass(f[i].a_attr[k])):e[c.id].a_attr[k]===f[i].a_attr[k]&&("href"===k?(e[c.id].a_attr[k]="#",m&&m.attr("href","#")):(delete e[c.id].a_attr[k],m&&m.removeAttr(k)))}if(f[d].li_attr!==b&&"object"==typeof f[d].li_attr)for(k in f[d].li_attr)if(f[d].li_attr.hasOwnProperty(k)){if("id"===k)continue;e[c.id].li_attr[k]===b?(e[c.id].li_attr[k]=f[d].li_attr[k],l&&("class"===k?l.addClass(f[d].li_attr[k]):l.attr(k,f[d].li_attr[k]))):"class"===k&&(e[c.id].li_attr["class"]=f[d].li_attr[k]+" "+e[c.id].li_attr["class"],l&&l.addClass(f[d].li_attr[k]))}if(f[d].a_attr!==b&&"object"==typeof f[d].a_attr)for(k in f[d].a_attr)if(f[d].a_attr.hasOwnProperty(k)){if("id"===k)continue;e[c.id].a_attr[k]===b?(e[c.id].a_attr[k]=f[d].a_attr[k],m&&("class"===k?m.addClass(f[d].a_attr[k]):m.attr(k,f[d].a_attr[k]))):"href"===k&&"#"===e[c.id].a_attr[k]?(e[c.id].a_attr.href=f[d].a_attr.href,m&&m.attr("href",f[d].a_attr.href)):"class"===k&&(e[c.id].a_attr["class"]=f[d].a_attr["class"]+" "+e[c.id].a_attr["class"],m&&m.addClass(f[d].a_attr[k]))}return!0}},a.jstree.defaults.unique={case_sensitive:!1,duplicate:function(a,b){return a+" ("+b+")"}},a.jstree.plugins.unique=function(c,d){this.check=function(b,c,e,f,g){if(d.check.call(this,b,c,e,f,g)===!1)return!1;if(c=c&&c.id?c:this.get_node(c),e=e&&e.id?e:this.get_node(e),!e||!e.children)return!0;var h="rename_node"===b?f:c.text,i=[],j=this.settings.unique.case_sensitive,k=this._model.data,l,m;for(l=0,m=e.children.length;m>l;l++)i.push(j?k[e.children[l]].text:k[e.children[l]].text.toLowerCase());switch(j||(h=h.toLowerCase()),b){case"delete_node":return!0;case"rename_node":return l=-1===a.inArray(h,i)||c.text&&c.text[j?"toString":"toLowerCase"]()===h,l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"create_node":return l=-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"copy_node":return l=-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",
id:"unique_02",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"move_node":return l=c.parent===e.id&&(!g||!g.is_multi)||-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l}return!0},this.create_node=function(c,e,f,g,h){if(!e||e.text===b){if(null===c&&(c=a.jstree.root),c=this.get_node(c),!c)return d.create_node.call(this,c,e,f,g,h);if(f=f===b?"last":f,!f.toString().match(/^(before|after)$/)&&!h&&!this.is_loaded(c))return d.create_node.call(this,c,e,f,g,h);e||(e={});var i,j,k,l,m,n=this._model.data,o=this.settings.unique.case_sensitive,p=this.settings.unique.duplicate;for(j=i=this.get_string("New node"),k=[],l=0,m=c.children.length;m>l;l++)k.push(o?n[c.children[l]].text:n[c.children[l]].text.toLowerCase());l=1;while(-1!==a.inArray(o?j:j.toLowerCase(),k))j=p.call(this,i,++l).toString();e.text=j}return d.create_node.call(this,c,e,f,g,h)}};var q=i.createElement("DIV");if(q.setAttribute("unselectable","on"),q.setAttribute("role","presentation"),q.className="jstree-wholerow",q.innerHTML="&#160;",a.jstree.plugins.wholerow=function(b,c){this.bind=function(){c.bind.call(this),this.element.on("ready.jstree set_state.jstree",a.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",a.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",a.proxy(function(a,b){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",a.proxy(function(a,b){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var c=!1,d,e;for(d=0,e=b.selected.length;e>d;d++)c=this.get_node(b.selected[d],!0),c&&c.length&&c.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",a.proxy(function(a,b){this.get_node(b.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",a.proxy(function(a,b){"hover_node"===a.type&&this.is_disabled(b.node)||this.get_node(b.node,!0).children(".jstree-wholerow")["hover_node"===a.type?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",a.proxy(function(b){if(this._data.contextmenu){b.preventDefault();var c=a.Event("contextmenu",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey,pageX:b.pageX,pageY:b.pageY});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c)}},this)).on("click.jstree",".jstree-wholerow",function(b){b.stopImmediatePropagation();var c=a.Event("click",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",a.proxy(function(b){b.stopImmediatePropagation();var c=a.Event("click",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",a.proxy(function(a){return a.stopImmediatePropagation(),this.is_disabled(a.currentTarget)||this.hover_node(a.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",a.proxy(function(a){this.dehover_node(a.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),c.teardown.call(this)},this.redraw_node=function(b,d,e,f){if(b=c.redraw_node.apply(this,arguments)){var g=q.cloneNode(!0);-1!==a.inArray(b.id,this._data.core.selected)&&(g.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===b.id&&(g.className+=" jstree-wholerow-hovered"),b.insertBefore(g,b.childNodes[0])}return b}},i.registerElement&&Object&&Object.create){var r=Object.create(HTMLElement.prototype);r.createdCallback=function(){var b={core:{},plugins:[]},c;for(c in a.jstree.plugins)a.jstree.plugins.hasOwnProperty(c)&&this.attributes[c]&&(b.plugins.push(c),this.getAttribute(c)&&JSON.parse(this.getAttribute(c))&&(b[c]=JSON.parse(this.getAttribute(c))));for(c in a.jstree.defaults.core)a.jstree.defaults.core.hasOwnProperty(c)&&this.attributes[c]&&(b.core[c]=JSON.parse(this.getAttribute(c))||this.getAttribute(c));a(this).jstree(b)};try{i.registerElement("vakata-jstree",{prototype:r})}catch(s){}}}});
/**
 * Display a nice easy to use multiselect list
 * @Version: 2.4.17
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * @Source: https://github.com/nobleclem/jQuery-MultiSelect
 *
 * Usage:
 *     $('select[multiple]').multiselect();
 *     $('select[multiple]').multiselect({ texts: { placeholder: 'Select options' } });
 *     $('select[multiple]').multiselect('reload');
 *     $('select[multiple]').multiselect( 'loadOptions', [{
 *         name   : 'Option Name 1',
 *         value  : 'option-value-1',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     },{
 *         name   : 'Option Name 2',
 *         value  : 'option-value-2',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     }]);
 *
 **/
(function($){
    var defaults = {
        columns: 1,     // how many columns should be use to show options
        search : false, // include option search box

        // search filter options
        searchOptions : {
            delay        : 250,                  // time (in ms) between keystrokes until search happens
            showOptGroups: false,                // show option group titles if no options remaining
            searchText   : true,                 // search within the text
            searchValue  : false,                // search within the value
            onSearch     : function( element ){} // fires on keyup before search on options happens
        },

        // plugin texts
        texts: {
            placeholder    : 'Select options', // text to use in dummy input
            search         : 'Search',         // search input placeholder text
            selectedOptions: ' selected',      // selected suffix text
            selectAll      : 'Select all',     // select all text
            unselectAll    : 'Unselect all',   // unselect all text
            noneSelected   : 'None Selected'   // None selected text
        },

        // general options
        selectAll          : false, // add select all option
        selectGroup        : false, // select entire optgroup
        minHeight          : 200,   // minimum height of option overlay
        maxHeight          : null,  // maximum height of option overlay
        maxWidth           : null,  // maximum width of option overlay (or selector)
        maxPlaceholderWidth: null,  // maximum width of placeholder button
        maxPlaceholderOpts : 10,    // maximum number of placeholder options to show until "# selected" shown instead
        showCheckbox       : true,  // display the checkbox to the user
        checkboxAutoFit    : false,  // auto calc checkbox padding
        optionAttributes   : [],    // attributes to copy to the checkbox from the option element

        // Callbacks
        onLoad        : function( element ){},           // fires at end of list initialization
        onOptionClick : function( element, option ){},   // fires when an option is clicked
        onControlClose: function( element ){},           // fires when the options list is closed
        onSelectAll   : function( element, selected ){}, // fires when (un)select all is clicked
        onPlaceholder : function( element, placeholder, selectedOpts ){}, // fires when the placeholder txt is updated
    };

    var msCounter    = 1; // counter for each select list
    var msOptCounter = 1; // counter for each option on page

    // FOR LEGACY BROWSERS (talking to you IE8)
    if( typeof Array.prototype.map !== 'function' ) {
        Array.prototype.map = function( callback, thisArg ) {
            if( typeof thisArg === 'undefined' ) {
                thisArg = this;
            }

            return $.isArray( thisArg ) ? $.map( thisArg, callback ) : [];
        };
    }
    if( typeof String.prototype.trim !== 'function' ) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    function MultiSelect( element, options )
    {
        this.element           = element;
        this.options           = $.extend( true, {}, defaults, options );
        this.updateSelectAll   = true;
        this.updatePlaceholder = true;
        this.listNumber        = msCounter;

        msCounter = msCounter + 1; // increment counter

        /* Make sure its a multiselect list */
        if( !$(this.element).attr('multiple') ) {
            throw new Error( '[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin' );
        }

        /* Options validation checks */
        if( this.options.search ){
            if( !this.options.searchOptions.searchText && !this.options.searchOptions.searchValue ){
                throw new Error( '[jQuery-MultiSelect] Either searchText or searchValue should be true.' );
            }
        }

        /** BACKWARDS COMPATIBILITY **/
        if( 'placeholder' in this.options ) {
            this.options.texts.placeholder = this.options.placeholder;
            delete this.options.placeholder;
        }
        if( 'default' in this.options.searchOptions ) {
            this.options.texts.search = this.options.searchOptions['default'];
            delete this.options.searchOptions['default'];
        }
        /** END BACKWARDS COMPATIBILITY **/

        // load this instance
        this.load();
    }

    MultiSelect.prototype = {
        /* LOAD CUSTOM MULTISELECT DOM/ACTIONS */
        load: function() {
            var instance = this;

            // make sure this is a select list and not loaded
            if( (instance.element.nodeName != 'SELECT') || $(instance.element).hasClass('jqmsLoaded') ) {
                return true;
            }

            // sanity check so we don't double load on a select element
            $(instance.element).addClass('jqmsLoaded ms-list-'+ instance.listNumber ).data( 'plugin_multiselect-instance', instance );

            // add option container
            $(instance.element).after('<div id="ms-list-'+ instance.listNumber +'" class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>');

            var placeholder = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> button:first-child');
            var optionsWrap = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');
            var optionsList = optionsWrap.find('> ul');

            // don't show checkbox (add class for css to hide checkboxes)
            if( !instance.options.showCheckbox ) {
                optionsWrap.addClass('hide-checkbox');
            }
            else if( instance.options.checkboxAutoFit ) {
                optionsWrap.addClass('checkbox-autofit');
            }

            // check if list is disabled
            if( $(instance.element).prop( 'disabled' ) ) {
                placeholder.prop( 'disabled', true );
            }

            // set placeholder maxWidth
            if( instance.options.maxPlaceholderWidth ) {
                placeholder.css( 'maxWidth', instance.options.maxPlaceholderWidth );
            }

            // override with user defined maxHeight
            if( instance.options.maxHeight ) {
                var maxHeight = instance.options.maxHeight;
            }
            else {
                // cacl default maxHeight
                var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
            }

            // maxHeight cannot be less than options.minHeight
            maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

            optionsWrap.css({
                maxWidth : instance.options.maxWidth,
                minHeight: instance.options.minHeight,
                maxHeight: maxHeight,
            });

            // isolate options scroll
            // @source: https://github.com/nobleclem/jQuery-IsolatedScroll
            optionsWrap.on( 'touchmove mousewheel DOMMouseScroll', function ( e ) {
                if( ($(this).outerHeight() < $(this)[0].scrollHeight) ) {
                    var e0 = e.originalEvent,
                        delta = e0.wheelDelta || -e0.detail;

                    if( ($(this).outerHeight() + $(this)[0].scrollTop) > $(this)[0].scrollHeight ) {
                        e.preventDefault();
                        this.scrollTop += ( delta < 0 ? 1 : -1 );
                    }
                }
            });

            // hide options menus if click happens off of the list placeholder button
            $(document).off('click.ms-hideopts').on('click.ms-hideopts', function( event ){
                if( !$(event.target).closest('.ms-options-wrap').length ) {
                    $('.ms-options-wrap.ms-active > .ms-options').each(function(){
                        $(this).closest('.ms-options-wrap').removeClass('ms-active');

                        var listID = $(this).closest('.ms-options-wrap').attr('id');

                        var thisInst = $(this).parent().siblings('.'+ listID +'.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    });
                }
            // hide open option lists if escape key pressed
            }).on('keydown', function( event ){
                if( (event.keyCode || event.which) == 27 ) { // esc key
                    $(this).trigger('click.ms-hideopts');
                }
            });

            // handle pressing enter|space while tabbing through
            placeholder.on('keydown', function( event ){
                var code = (event.keyCode || event.which);
                if( (code == 13) || (code == 32) ) { // enter OR space
                    placeholder.trigger( 'mousedown' );
                }
            });

            // disable button action
            placeholder.on( 'mousedown', function( event ){
                // ignore if its not a left click
                if( event.which && (event.which != 1) ) {
                    return true;
                }

                // hide other menus before showing this one
                $('.ms-options-wrap.ms-active').each(function(){
                    if( $(this).siblings( '.'+ $(this).attr('id') +'.jqmsLoaded')[0] != optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded')[0] ) {
                        $(this).removeClass('ms-active');

                        var thisInst = $(this).siblings( '.'+ $(this).attr('id') +'.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    }
                });

                // show/hide options
                optionsWrap.closest('.ms-options-wrap').toggleClass('ms-active');

                // recalculate height
                if( optionsWrap.closest('.ms-options-wrap').hasClass('ms-active') ) {
                    optionsWrap.css( 'maxHeight', '' );

                    // override with user defined maxHeight
                    if( instance.options.maxHeight ) {
                        var maxHeight = instance.options.maxHeight;
                    }
                    else {
                        // cacl default maxHeight
                        var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
                    }

                    if( maxHeight ) {
                        // maxHeight cannot be less than options.minHeight
                        maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

                        optionsWrap.css( 'maxHeight', maxHeight );
                    }
                }
                else if( typeof instance.options.onControlClose == 'function' ) {
                    instance.options.onControlClose( instance.element );
                }
            }).click(function( event ){ event.preventDefault(); });

            // add placeholder copy
            if( instance.options.texts.placeholder ) {
                placeholder.find('span').text( instance.options.texts.placeholder );
            }

            // add search box
            if( instance.options.search ) {
                optionsList.before('<div class="ms-search"><input type="text" value="" placeholder="'+ instance.options.texts.search +'" /></div>');

                var search = optionsWrap.find('.ms-search input');
                search.on('keyup', function(){
                    // ignore keystrokes that don't make a difference
                    if( $(this).data('lastsearch') == $(this).val() ) {
                        return true;
                    }

                    // pause timeout
                    if( $(this).data('searchTimeout') ) {
                        clearTimeout( $(this).data('searchTimeout') );
                    }

                    var thisSearchElem = $(this);

                    $(this).data('searchTimeout', setTimeout(function(){
                        thisSearchElem.data('lastsearch', thisSearchElem.val() );

                        // USER CALLBACK
                        if( typeof instance.options.searchOptions.onSearch == 'function' ) {
                            instance.options.searchOptions.onSearch( instance.element );
                        }

                        // search non optgroup li's
                        var searchString = $.trim( search.val().toLowerCase() );
                        if( searchString ) {
                            optionsList.find('li[data-search-term*="'+ searchString +'"]:not(.optgroup)').removeClass('ms-hidden');
                            optionsList.find('li:not([data-search-term*="'+ searchString +'"], .optgroup)').addClass('ms-hidden');
                        }
                        else {
                            optionsList.find('.ms-hidden').removeClass('ms-hidden');
                        }

                        // show/hide optgroups based on if there are items visible within
                        if( !instance.options.searchOptions.showOptGroups ) {
                            optionsList.find('.optgroup').each(function(){
                                if( $(this).find('li:not(.ms-hidden)').length ) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        }

                        instance._updateSelectAllText();
                    }, instance.options.searchOptions.delay ));
                });
            }

            // add global select all options
            if( instance.options.selectAll ) {
                optionsList.before('<a href="#" class="ms-selectall global">' + instance.options.texts.selectAll + '</a>');
            }

            // handle select all option
            optionsWrap.on('click', '.ms-selectall', function( event ){
                event.preventDefault();

                instance.updateSelectAll   = false;
                instance.updatePlaceholder = false;

                var select = optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded');

                if( $(this).hasClass('global') ) {
                    // check if any options are not selected if so then select them
                    if( optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').length ) {
                        // get unselected vals, mark as selected, return val list
                        optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').addClass('selected');
                        optionsList.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optionsList.find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
                        optionsList.find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }
                else if( $(this).closest('li').hasClass('optgroup') ) {
                    var optgroup = $(this).closest('li.optgroup');

                    // check if any selected if so then select them
                    if( optgroup.find('li:not(.selected, .ms-hidden)').length ) {
                        optgroup.find('li:not(.selected, .ms-hidden)').addClass('selected');
                        optgroup.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optgroup.find('li:not(.ms-hidden).selected').removeClass('selected');
                        optgroup.find('li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }

                var vals = [];
                optionsList.find('li.selected input[type="checkbox"]').each(function(){
                    vals.push( $(this).val() );
                });
                select.val( vals ).trigger('change');

                instance.updateSelectAll   = true;
                instance.updatePlaceholder = true;

                // USER CALLBACK
                if( typeof instance.options.onSelectAll == 'function' ) {
                    instance.options.onSelectAll( instance.element, vals.length );
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // add options to wrapper
            var options = [];
            $(instance.element).children().each(function(){
                if( this.nodeName == 'OPTGROUP' ) {
                    var groupOptions = [];

                    $(this).children('option').each(function(){
                        var thisOptionAtts = {};
                        for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                            var thisOptAttr = instance.options.optionAttributes[ i ];

                            if( $(this).attr( thisOptAttr ) !== undefined ) {
                                thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                            }
                        }

                        groupOptions.push({
                            name   : $(this).text(),
                            value  : $(this).val(),
                            checked: $(this).prop( 'selected' ),
                            attributes: thisOptionAtts
                        });
                    });

                    options.push({
                        label  : $(this).attr('label'),
                        options: groupOptions
                    });
                }
                else if( this.nodeName == 'OPTION' ) {
                    var thisOptionAtts = {};
                    for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                        var thisOptAttr = instance.options.optionAttributes[ i ];

                        if( $(this).attr( thisOptAttr ) !== undefined ) {
                            thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                        }
                    }

                    options.push({
                        name      : $(this).text(),
                        value     : $(this).val(),
                        checked   : $(this).prop( 'selected' ),
                        attributes: thisOptionAtts
                    });
                }
                else {
                    // bad option
                    return true;
                }
            });
            instance.loadOptions( options, true, false );

            // BIND SELECT ACTION
            optionsWrap.on( 'click', 'input[type="checkbox"]', function(){
                $(this).closest( 'li' ).toggleClass( 'selected' );

                var select = optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded');

                // toggle clicked option
                select.find('option[value="'+ instance._escapeSelector( $(this).val() ) +'"]').prop(
                    'selected', $(this).is(':checked')
                ).closest('select').trigger('change');

                // USER CALLBACK
                if( typeof instance.options.onOptionClick == 'function' ) {
                    instance.options.onOptionClick(instance.element, this);
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // BIND FOCUS EVENT
            optionsWrap.on('focusin', 'input[type="checkbox"]', function(){
                $(this).closest('label').addClass('focused');
            }).on('focusout', 'input[type="checkbox"]', function(){
                $(this).closest('label').removeClass('focused');
            });

            // USER CALLBACK
            if( typeof instance.options.onLoad === 'function' ) {
                instance.options.onLoad( instance.element );
            }

            // hide native select list
            $(instance.element).hide();
        },

        /* LOAD SELECT OPTIONS */
        loadOptions: function( options, overwrite, updateSelect ) {
            overwrite    = (typeof overwrite == 'boolean') ? overwrite : true;
            updateSelect = (typeof updateSelect == 'boolean') ? updateSelect : true;

            var instance    = this;
            var select      = $(instance.element);
            var optionsList = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options > ul');
            var optionsWrap = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            if( overwrite ) {
                optionsList.find('> li').remove();

                if( updateSelect ) {
                    select.find('> *').remove();
                }
            }

            var containers = [];
            for( var key in options ) {
                // Prevent prototype methods injected into options from being iterated over.
                if( !options.hasOwnProperty( key ) ) {
                    continue;
                }

                var thisOption      = options[ key ];
                var container       = $('<li/>');
                var appendContainer = true;

                // OPTION
                if( thisOption.hasOwnProperty('value') ) {
                    if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                        container.addClass('ms-reflow');
                    }

                    // add option to ms dropdown
                    instance._addOption( container, thisOption );

                    if( updateSelect ) {
                        var selOption = $('<option value="'+ thisOption.value +'">'+ thisOption.name +'</option>');

                        // add custom user attributes
                        if( thisOption.hasOwnProperty('attributes') && Object.keys( thisOption.attributes ).length ) {
                            selOption.attr( thisOption.attributes );
                        }

                        // mark option as selected
                        if( thisOption.checked ) {
                            selOption.prop( 'selected', true );
                        }

                        select.append( selOption );
                    }
                }
                // OPTGROUP
                else if( thisOption.hasOwnProperty('options') ) {
                    var optGroup = $('<optgroup label="'+ thisOption.label +'"></optgroup>');

                    optionsList.find('> li.optgroup > span.label').each(function(){
                        if( $(this).text() == thisOption.label ) {
                            container       = $(this).closest('.optgroup');
                            appendContainer = false;
                        }
                    });

                    // prepare to append optgroup to select element
                    if( updateSelect ) {
                        if( select.find('optgroup[label="'+ thisOption.label +'"]').length ) {
                            optGroup = select.find('optgroup[label="'+ thisOption.label +'"]');
                        }
                        else {
                            select.append( optGroup );
                        }
                    }

                    // setup container
                    if( appendContainer ) {
                        container.addClass('optgroup');
                        container.append('<span class="label">'+ thisOption.label +'</span>');
                        container.find('> .label').css({
                            clear: 'both'
                        });

                        // add select all link
                        if( instance.options.selectGroup ) {
                            container.append('<a href="#" class="ms-selectall">' + instance.options.texts.selectAll + '</a>');
                        }

                        container.append('<ul/>');
                    }

                    for( var gKey in thisOption.options ) {
                        // Prevent prototype methods injected into options from
                        // being iterated over.
                        if( !thisOption.options.hasOwnProperty( gKey ) ) {
                            continue;
                        }

                        var thisGOption = thisOption.options[ gKey ];
                        var gContainer  = $('<li/>');
                        if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                            gContainer.addClass('ms-reflow');
                        }

                        // no clue what this is we hit (skip)
                        if( !thisGOption.hasOwnProperty('value') ) {
                            continue;
                        }

                        instance._addOption( gContainer, thisGOption );

                        container.find('> ul').append( gContainer );

                        // add option to optgroup in select element
                        if( updateSelect ) {
                            var selOption = $('<option value="'+ thisGOption.value +'">'+ thisGOption.name +'</option>');

                            // add custom user attributes
                            if( thisGOption.hasOwnProperty('attributes') && Object.keys( thisGOption.attributes ).length ) {
                                selOption.attr( thisGOption.attributes );
                            }

                            // mark option as selected
                            if( thisGOption.checked ) {
                                selOption.prop( 'selected', true );
                            }

                            optGroup.append( selOption );
                        }
                    }
                }
                else {
                    // no clue what this is we hit (skip)
                    continue;
                }

                if( appendContainer ) {
                    containers.push( container );
                }
            }
            optionsList.append( containers );

            // pad out label for room for the checkbox
            if( instance.options.checkboxAutoFit && instance.options.showCheckbox && !optionsWrap.hasClass('hide-checkbox') ) {
                var chkbx = optionsList.find('.ms-reflow:eq(0) input[type="checkbox"]');
                if( chkbx.length ) {
                    var checkboxWidth = chkbx.outerWidth();
                        checkboxWidth = checkboxWidth ? checkboxWidth : 15;

                    optionsList.find('.ms-reflow label').css(
                        'padding-left',
                        (parseInt( chkbx.closest('label').css('padding-left') ) * 2) + checkboxWidth
                    );

                    optionsList.find('.ms-reflow').removeClass('ms-reflow');
                }
            }

            // update placeholder text
            instance._updatePlaceholderText();

            // RESET COLUMN STYLES
            optionsWrap.find('ul').css({
                'column-count'        : '',
                'column-gap'          : '',
                '-webkit-column-count': '',
                '-webkit-column-gap'  : '',
                '-moz-column-count'   : '',
                '-moz-column-gap'     : ''
            });

            // COLUMNIZE
            if( select.find('optgroup').length ) {
                // float non grouped options
                optionsList.find('> li:not(.optgroup)').css({
                    'float': 'left',
                    width: (100 / instance.options.columns) +'%'
                });

                // add CSS3 column styles
                optionsList.find('li.optgroup').css({
                    clear: 'both'
                }).find('> ul').css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('li.optgroup > ul > li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }
            else {
                // add CSS3 column styles
                optionsList.css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('> li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }

            // update un/select all logic
            instance._updateSelectAllText();
        },

        /* UPDATE MULTISELECT CONFIG OPTIONS */
        settings: function( options ) {
            this.options = $.extend( true, {}, this.options, options );
            this.reload();
        },

        /* RESET THE DOM */
        unload: function() {
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').remove();
            $(this.element).show(function(){
                $(this).css('display','').removeClass('jqmsLoaded');
            });
        },

        /* RELOAD JQ MULTISELECT LIST */
        reload: function() {
            // remove existing options
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').remove();
            $(this.element).removeClass('jqmsLoaded');

            // load element
            this.load();
        },

        // RESET BACK TO DEFAULT VALUES & RELOAD
        reset: function() {
            var defaultVals = [];
            $(this.element).find('option').each(function(){
                if( $(this).prop('defaultSelected') ) {
                    defaultVals.push( $(this).val() );
                }
            });

            $(this.element).val( defaultVals );

            this.reload();
        },

        disable: function( status ) {
            status = (typeof status === 'boolean') ? status : true;
            $(this.element).prop( 'disabled', status );
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').find('button:first-child')
                .prop( 'disabled', status );
        },

        /** PRIVATE FUNCTIONS **/
        // update the un/select all texts based on selected options and visibility
        _updateSelectAllText: function(){
            if( !this.updateSelectAll ) {
                return;
            }

            var instance = this;

            // select all not used at all so just do nothing
            if( !instance.options.selectAll && !instance.options.selectGroup ) {
                return;
            }

            var optionsWrap = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            // update un/select all text
            optionsWrap.find('.ms-selectall').each(function(){
                var unselected = $(this).parent().find('li:not(.optgroup,.selected,.ms-hidden)');

                $(this).text(
                    unselected.length ? instance.options.texts.selectAll : instance.options.texts.unselectAll
                );
            });
        },

        // update selected placeholder text
        _updatePlaceholderText: function(){
            if( !this.updatePlaceholder ) {
                return;
            }

            var instance       = this;
            var select         = $(instance.element);
            var selectVals     = select.val() ? select.val() : [];
            var placeholder    = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> button:first-child');
            var placeholderTxt = placeholder.find('span');
            var optionsWrap    = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            // if there are disabled options get those values as well
            if( select.find('option:selected:disabled').length ) {
                selectVals = [];
                select.find('option:selected').each(function(){
                    selectVals.push( $(this).val() );
                });
            }

            // get selected options
            var selOpts = [];
            for( var key in selectVals ) {
                // Prevent prototype methods injected into options from being iterated over.
                if( !selectVals.hasOwnProperty( key ) ) {
                    continue;
                }

                selOpts.push(
                    $.trim( select.find('option[value="'+ instance._escapeSelector( selectVals[ key ] ) +'"]').text() )
                );

                if( selOpts.length >= instance.options.maxPlaceholderOpts ) {
                    break;
                }
            }

            // UPDATE PLACEHOLDER TEXT WITH OPTIONS SELECTED
            placeholderTxt.text( selOpts.join( ', ' ) );

            if( selOpts.length ) {
                optionsWrap.closest('.ms-options-wrap').addClass('ms-has-selections');

                // USER CALLBACK
                if( typeof instance.options.onPlaceholder == 'function' ) {
                    instance.options.onPlaceholder( instance.element, placeholderTxt, selOpts );
                }
            }
            else {
                optionsWrap.closest('.ms-options-wrap').removeClass('ms-has-selections');
            }

            // replace placeholder text
            if( !selOpts.length ) {
                placeholderTxt.text( instance.options.texts.placeholder );
            }
            // if copy is larger than button width use "# selected"
            else if( (placeholderTxt.width() > placeholder.width()) || (selOpts.length != selectVals.length) ) {
                placeholderTxt.text( selectVals.length + instance.options.texts.selectedOptions );
            }
        },

        // Add option to the custom dom list
        _addOption: function( container, option ) {
            var instance = this;
            var thisOption = $('<label/>', {
                for : 'ms-opt-'+ msOptCounter,
                text: option.name
            });

            var thisCheckbox = $('<input>', {
                type : 'checkbox',
                title: option.name,
                id   : 'ms-opt-'+ msOptCounter,
                value: option.value
            });

            // add user defined attributes
            if( option.hasOwnProperty('attributes') && Object.keys( option.attributes ).length ) {
                thisCheckbox.attr( option.attributes );
            }

            if( option.checked ) {
                container.addClass('default selected');
                thisCheckbox.prop( 'checked', true );
            }

            thisOption.prepend( thisCheckbox );

            var searchTerm = '';
            if( instance.options.searchOptions.searchText ) {
                searchTerm += ' ' + option.name.toLowerCase();
            }
            if( instance.options.searchOptions.searchValue ) {
                searchTerm += ' ' + option.value.toLowerCase();
            }

            container.attr( 'data-search-term', $.trim( searchTerm ) ).prepend( thisOption );

            msOptCounter = msOptCounter + 1;
        },

        // check ie version
        _ieVersion: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        },

        // escape selector
        _escapeSelector: function( string ) {
            if( typeof $.escapeSelector == 'function' ) {
                return $.escapeSelector( string );
            }
            else {
                return string.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&");
            }
        }
    };

    // ENABLE JQUERY PLUGIN FUNCTION
    $.fn.multiselect = function( options ){
        if( !this.length ) {
            return;
        }

        var args = arguments;
        var ret;

        // menuize each list
        if( (options === undefined) || (typeof options === 'object') ) {
            return this.each(function(){
                if( !$.data( this, 'plugin_multiselect' ) ) {
                    $.data( this, 'plugin_multiselect', new MultiSelect( this, options ) );
                }
            });
        } else if( (typeof options === 'string') && (options[0] !== '_') && (options !== 'init') ) {
            this.each(function(){
                var instance = $.data( this, 'plugin_multiselect' );

                if( instance instanceof MultiSelect && typeof instance[ options ] === 'function' ) {
                    ret = instance[ options ].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // special destruct handler
                if( options === 'unload' ) {
                    $.data( this, 'plugin_multiselect', null );
                }
            });

            return ret;
        }
    };
}(jQuery));

//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (utils_hooks__hooks.deprecationHandler != null) {
                utils_hooks__hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (utils_hooks__hooks.deprecationHandler != null) {
            utils_hooks__hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;
    utils_hooks__hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function isObject(input) {
        return Object.prototype.toString.call(input) === '[object Object]';
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale');
                config = mergeConfigs(locales[name]._config, config);
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    config = mergeConfigs(locales[config.parentLocale]._config, config);
                } else {
                    // treat as if there is no base config
                    deprecateSimple('parentLocaleUndefined',
                            'specified parentLocale is not defined yet');
                }
            }
            locales[name] = new Locale(config);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale;
            if (locales[name] != null) {
                config = mergeConfigs(locales[name]._config, config);
            }
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function locale_locales__listLocales() {
        return keys(locales);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        return isArray(this._months) ? this._months[m.month()] :
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function units_month__handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = create_utc__createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return units_month__handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (typeof value !== 'number') {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             if (this.isValid() && other.isValid()) {
                 return other < this ? this : other;
             } else {
                 return valid__createInvalid();
             }
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(matchOffset, this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return this._offset ? new Date(this.valueOf()) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function day_of_week__handleStrictParse(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = create_utc__createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = create_utc__createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add               = add_subtract__add;
    momentPrototype__proto.calendar          = moment_calendar__calendar;
    momentPrototype__proto.clone             = clone;
    momentPrototype__proto.diff              = diff;
    momentPrototype__proto.endOf             = endOf;
    momentPrototype__proto.format            = format;
    momentPrototype__proto.from              = from;
    momentPrototype__proto.fromNow           = fromNow;
    momentPrototype__proto.to                = to;
    momentPrototype__proto.toNow             = toNow;
    momentPrototype__proto.get               = getSet;
    momentPrototype__proto.invalidAt         = invalidAt;
    momentPrototype__proto.isAfter           = isAfter;
    momentPrototype__proto.isBefore          = isBefore;
    momentPrototype__proto.isBetween         = isBetween;
    momentPrototype__proto.isSame            = isSame;
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
    momentPrototype__proto.isValid           = moment_valid__isValid;
    momentPrototype__proto.lang              = lang;
    momentPrototype__proto.locale            = locale;
    momentPrototype__proto.localeData        = localeData;
    momentPrototype__proto.max               = prototypeMax;
    momentPrototype__proto.min               = prototypeMin;
    momentPrototype__proto.parsingFlags      = parsingFlags;
    momentPrototype__proto.set               = getSet;
    momentPrototype__proto.startOf           = startOf;
    momentPrototype__proto.subtract          = add_subtract__subtract;
    momentPrototype__proto.toArray           = toArray;
    momentPrototype__proto.toObject          = toObject;
    momentPrototype__proto.toDate            = toDate;
    momentPrototype__proto.toISOString       = moment_format__toISOString;
    momentPrototype__proto.toJSON            = toJSON;
    momentPrototype__proto.toString          = toString;
    momentPrototype__proto.unix              = unix;
    momentPrototype__proto.valueOf           = to_type__valueOf;
    momentPrototype__proto.creationData      = creationData;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months            =        localeMonths;
    prototype__proto._months           = defaultLocaleMonths;
    prototype__proto.monthsShort       =        localeMonthsShort;
    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
    prototype__proto.monthsParse       =        localeMonthsParse;
    prototype__proto._monthsRegex      = defaultMonthsRegex;
    prototype__proto.monthsRegex       = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex  = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    prototype__proto._weekdaysRegex      = defaultWeekdaysRegex;
    prototype__proto.weekdaysRegex       =        weekdaysRegex;
    prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
    prototype__proto._weekdaysMinRegex   = defaultWeekdaysMinRegex;
    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = lists__get(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = locale_locales__getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return lists__get(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function lists__listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function lists__listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function lists__listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function lists__listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes <= 1           && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   <= 1           && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    <= 1           && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  <= 1           && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.13.0';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.now                   = now;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.updateLocale          = updateLocale;
    utils_hooks__hooks.locales               = locale_locales__listLocales;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype             = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
/**
* @version: 2.1.25
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2017 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            return (root.daterangepicker = factory(moment, jquery));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo( this.container.find('.calendar.left').parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

/**
 * Super simple wysiwyg editor v0.8.7
 * http://summernote.org/
 *
 * summernote.js
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: 2017-08-15T06:31Z
 */
(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
  'use strict';

  var isSupportAmd = typeof define === 'function' && define.amd;

  /**
   * returns whether font is installed or not.
   *
   * @param {String} fontName
   * @return {Boolean}
   */
  var isFontInstalled = function (fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $('<div>').css({
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      fontSize: '200px'
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

    $tester.remove();

    return originalWidth !== width;
  };

  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
  }

  var isEdge = /Edge\/\d+/.test(userAgent);

  var hasCodeMirror = !!window.CodeMirror;
  if (!hasCodeMirror && isSupportAmd && typeof require !== 'undefined') {
    if (typeof require.resolve !== 'undefined') {
      try {
        // If CodeMirror can't be resolved, `require.resolve` will throw an
        // exception and `hasCodeMirror` won't be set to `true`.
        require.resolve('codemirror');
        hasCodeMirror = true;
      } catch (e) {
        // Do nothing.
      }
    } else if (typeof eval('require').specified !== 'undefined') {
      hasCodeMirror = eval('require').specified('codemirror');
    }
  }

  var isSupportTouch =
    (('ontouchstart' in window) ||
     (navigator.MaxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));

  /**
   * @class core.agent
   *
   * Object which check platform and agent
   *
   * @singleton
   * @alternateClassName agent
   */
  var agent = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent),
    browserVersion: browserVersion,
    jqueryVersion: parseFloat($.fn.jquery),
    isSupportAmd: isSupportAmd,
    isSupportTouch: isSupportTouch,
    hasCodeMirror: hasCodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange
  };

  /**
   * @class core.func
   *
   * func utils (for high-order func's arg)
   *
   * @singleton
   * @alternateClassName func
   */
  var func = (function () {
    var eq = function (itemA) {
      return function (itemB) {
        return itemA === itemB;
      };
    };

    var eq2 = function (itemA, itemB) {
      return itemA === itemB;
    };

    var peq2 = function (propName) {
      return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
      };
    };

    var ok = function () {
      return true;
    };

    var fail = function () {
      return false;
    };

    var not = function (f) {
      return function () {
        return !f.apply(f, arguments);
      };
    };

    var and = function (fA, fB) {
      return function (item) {
        return fA(item) && fB(item);
      };
    };

    var self = function (a) {
      return a;
    };

    var invoke = function (obj, method) {
      return function () {
        return obj[method].apply(obj, arguments);
      };
    };

    var idCounter = 0;

    /**
     * generate a globally-unique id
     *
     * @param {String} [prefix]
     */
    var uniqueId = function (prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };

    /**
     * returns bnd (bounds) from rect
     *
     * - IE Compatibility Issue: http://goo.gl/sRLOAo
     * - Scroll Issue: http://goo.gl/sNjUc
     *
     * @param {Rect} rect
     * @return {Object} bounds
     * @return {Number} bounds.top
     * @return {Number} bounds.left
     * @return {Number} bounds.width
     * @return {Number} bounds.height
     */
    var rect2bnd = function (rect) {
      var $document = $(document);
      return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    };

    /**
     * returns a copy of the object where the keys have become the values and the values the keys.
     * @param {Object} obj
     * @return {Object}
     */
    var invertObject = function (obj) {
      var inverted = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          inverted[obj[key]] = key;
        }
      }
      return inverted;
    };

    /**
     * @param {String} namespace
     * @param {String} [prefix]
     * @return {String}
     */
    var namespaceToCamel = function (namespace, prefix) {
      prefix = prefix || '';
      return prefix + namespace.split('.').map(function (name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
      }).join('');
    };

    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     * @param {Function} func
     * @param {Number} wait
     * @param {Boolean} immediate
     * @return {Function}
     */
    var debounce = function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    };

    return {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      invoke: invoke,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject,
      namespaceToCamel: namespaceToCamel,
      debounce: debounce
    };
  })();

  /**
   * @class core.list
   *
   * list utils
   *
   * @singleton
   * @alternateClassName list
   */
  var list = (function () {
    /**
     * returns the first item of an array.
     *
     * @param {Array} array
     */
    var head = function (array) {
      return array[0];
    };

    /**
     * returns the last item of an array.
     *
     * @param {Array} array
     */
    var last = function (array) {
      return array[array.length - 1];
    };

    /**
     * returns everything but the last entry of the array.
     *
     * @param {Array} array
     */
    var initial = function (array) {
      return array.slice(0, array.length - 1);
    };

    /**
     * returns the rest of the items in an array.
     *
     * @param {Array} array
     */
    var tail = function (array) {
      return array.slice(1);
    };

    /**
     * returns item of array
     */
    var find = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        var item = array[idx];
        if (pred(item)) {
          return item;
        }
      }
    };

    /**
     * returns true if all of the values in the array pass the predicate truth test.
     */
    var all = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!pred(array[idx])) {
          return false;
        }
      }
      return true;
    };

    /**
     * returns index of item
     */
    var indexOf = function (array, item) {
      return $.inArray(item, array);
    };

    /**
     * returns true if the value is present in the list.
     */
    var contains = function (array, item) {
      return indexOf(array, item) !== -1;
    };

    /**
     * get sum from a list
     *
     * @param {Array} array - array
     * @param {Function} fn - iterator
     */
    var sum = function (array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
        return memo + fn(v);
      }, 0);
    };
  
    /**
     * returns a copy of the collection with array type.
     * @param {Collection} collection - collection eg) node.childNodes, ...
     */
    var from = function (collection) {
      var result = [], idx = -1, length = collection.length;
      while (++idx < length) {
        result[idx] = collection[idx];
      }
      return result;
    };

    /**
     * returns whether list is empty or not
     */
    var isEmpty = function (array) {
      return !array || !array.length;
    };
  
    /**
     * cluster elements by predicate function.
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     * @param {Array[]}
     */
    var clusterBy = function (array, fn) {
      if (!array.length) { return []; }
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
          aLast[aLast.length] = v;
        } else {
          memo[memo.length] = [v];
        }
        return memo;
      }, [[head(array)]]);
    };
  
    /**
     * returns a copy of the array with all false values removed
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     */
    var compact = function (array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (array[idx]) { aResult.push(array[idx]); }
      }
      return aResult;
    };

    /**
     * produces a duplicate-free version of the array
     *
     * @param {Array} array
     */
    var unique = function (array) {
      var results = [];

      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!contains(results, array[idx])) {
          results.push(array[idx]);
        }
      }

      return results;
    };

    /**
     * returns next item.
     * @param {Array} array
     */
    var next = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx + 1];
    };

    /**
     * returns prev item.
     * @param {Array} array
     */
    var prev = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx - 1];
    };

    return { head: head, last: last, initial: initial, tail: tail,
             prev: prev, next: next, find: find, contains: contains,
             all: all, sum: sum, from: from, isEmpty: isEmpty,
             clusterBy: clusterBy, compact: compact, unique: unique };
  })();


  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

  /**
   * @class core.dom
   *
   * Dom functions
   *
   * @singleton
   * @alternateClassName dom
   */
  var dom = (function () {
    /**
     * @method isEditable
     *
     * returns whether node is `note-editable` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEditable = function (node) {
      return node && $(node).hasClass('note-editable');
    };

    /**
     * @method isControlSizing
     *
     * returns whether node is `note-control-sizing` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isControlSizing = function (node) {
      return node && $(node).hasClass('note-control-sizing');
    };

    /**
     * @method makePredByNodeName
     *
     * returns predicate which judge whether nodeName is same
     *
     * @param {String} nodeName
     * @return {Function}
     */
    var makePredByNodeName = function (nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
      };
    };

    /**
     * @method isText
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is text(3)
     */
    var isText = function (node) {
      return node && node.nodeType === 3;
    };

    /**
     * @method isElement
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is element(1)
     */
    var isElement = function (node) {
      return node && node.nodeType === 1;
    };

    /**
     * ex) br, col, embed, hr, img, input, ...
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
     */
    var isVoid = function (node) {
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(node.nodeName.toUpperCase());
    };

    var isPara = function (node) {
      if (isEditable(node)) {
        return false;
      }

      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isHeading = function (node) {
      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isPre = makePredByNodeName('PRE');

    var isLi = makePredByNodeName('LI');

    var isPurePara = function (node) {
      return isPara(node) && !isLi(node);
    };

    var isTable = makePredByNodeName('TABLE');

    var isData = makePredByNodeName('DATA');

    var isInline = function (node) {
      return !isBodyContainer(node) &&
             !isList(node) &&
             !isHr(node) &&
             !isPara(node) &&
             !isTable(node) &&
             !isBlockquote(node) &&
             !isData(node);
    };

    var isList = function (node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
    };

    var isHr = makePredByNodeName('HR');

    var isCell = function (node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
    };

    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

    var isBodyContainer = function (node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
    };

    var isAnchor = makePredByNodeName('A');

    var isParaInline = function (node) {
      return isInline(node) && !!ancestor(node, isPara);
    };

    var isBodyInline = function (node) {
      return isInline(node) && !ancestor(node, isPara);
    };

    var isBody = makePredByNodeName('BODY');

    /**
     * returns whether nodeB is closest sibling of nodeA
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     * @return {Boolean}
     */
    var isClosestSibling = function (nodeA, nodeB) {
      return nodeA.nextSibling === nodeB ||
             nodeA.previousSibling === nodeB;
    };

    /**
     * returns array of closest siblings with node
     *
     * @param {Node} node
     * @param {function} [pred] - predicate function
     * @return {Node[]}
     */
    var withClosestSiblings = function (node, pred) {
      pred = pred || func.ok;

      var siblings = [];
      if (node.previousSibling && pred(node.previousSibling)) {
        siblings.push(node.previousSibling);
      }
      siblings.push(node);
      if (node.nextSibling && pred(node.nextSibling)) {
        siblings.push(node.nextSibling);
      }
      return siblings;
    };

    /**
     * blank HTML for cursor position
     * - [workaround] old IE only works with &nbsp;
     * - [workaround] IE11 and other browser works with bogus br
     */
    var blankHTML = agent.isMSIE && agent.browserVersion < 11 ? '&nbsp;' : '<br>';

    /**
     * @method nodeLength
     *
     * returns #text's text size or element's childNodes size
     *
     * @param {Node} node
     */
    var nodeLength = function (node) {
      if (isText(node)) {
        return node.nodeValue.length;
      }
      
      if (node) {
        return node.childNodes.length;
      }
      
      return 0;
      
    };

    /**
     * returns whether node is empty or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEmpty = function (node) {
      var len = nodeLength(node);

      if (len === 0) {
        return true;
      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {
        // ex) <p></p>, <span></span>
        return true;
      }

      return false;
    };

    /**
     * padding blankHTML if node is empty (for cursor position)
     */
    var paddingBlankHTML = function (node) {
      if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
      }
    };

    /**
     * find nearest ancestor predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var ancestor = function (node, pred) {
      while (node) {
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * find nearest ancestor only single child blood line and predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var singleChildAncestor = function (node, pred) {
      node = node.parentNode;

      while (node) {
        if (nodeLength(node) !== 1) { break; }
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * returns new array of ancestor nodes (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listAncestor = function (node, pred) {
      pred = pred || func.fail;

      var ancestors = [];
      ancestor(node, function (el) {
        if (!isEditable(el)) {
          ancestors.push(el);
        }

        return pred(el);
      });
      return ancestors;
    };

    /**
     * find farthest ancestor predicate hit
     */
    var lastAncestor = function (node, pred) {
      var ancestors = listAncestor(node);
      return list.last(ancestors.filter(pred));
    };

    /**
     * returns common ancestor node between two nodes.
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     */
    var commonAncestor = function (nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
        if ($.inArray(n, ancestors) > -1) { return n; }
      }
      return null; // difference document area
    };

    /**
     * listing all previous siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listPrev = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.previousSibling;
      }
      return nodes;
    };

    /**
     * listing next siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listNext = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.nextSibling;
      }
      return nodes;
    };

    /**
     * listing descendant nodes
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listDescendant = function (node, pred) {
      var descendants = [];
      pred = pred || func.ok;

      // start DFS(depth first search) with node
      (function fnWalk(current) {
        if (node !== current && pred(current)) {
          descendants.push(current);
        }
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
          fnWalk(current.childNodes[idx]);
        }
      })(node);

      return descendants;
    };

    /**
     * wrap node with new tag.
     *
     * @param {Node} node
     * @param {Node} tagName of wrapper
     * @return {Node} - wrapper
     */
    var wrap = function (node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $('<' + wrapperName + '>')[0];

      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);

      return wrapper;
    };

    /**
     * insert node after preceding
     *
     * @param {Node} node
     * @param {Node} preceding - predicate function
     */
    var insertAfter = function (node, preceding) {
      var next = preceding.nextSibling, parent = preceding.parentNode;
      if (next) {
        parent.insertBefore(node, next);
      } else {
        parent.appendChild(node);
      }
      return node;
    };

    /**
     * append elements.
     *
     * @param {Node} node
     * @param {Collection} aChild
     */
    var appendChildNodes = function (node, aChild) {
      $.each(aChild, function (idx, child) {
        node.appendChild(child);
      });
      return node;
    };

    /**
     * returns whether boundaryPoint is left edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isLeftEdgePoint = function (point) {
      return point.offset === 0;
    };

    /**
     * returns whether boundaryPoint is right edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isRightEdgePoint = function (point) {
      return point.offset === nodeLength(point.node);
    };

    /**
     * returns whether boundaryPoint is edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isEdgePoint = function (point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
    };

    /**
     * returns whether node is left edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgeOf = function (node, ancestor) {
      while (node && node !== ancestor) {
        if (position(node) !== 0) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether node is right edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgeOf = function (node, ancestor) {
      if (!ancestor) {
        return false;
      }
      while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether point is left edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgePointOf = function (point, ancestor) {
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
    };

    /**
     * returns whether point is right edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgePointOf = function (point, ancestor) {
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
    };

    /**
     * returns offset from parent.
     *
     * @param {Node} node
     */
    var position = function (node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
        offset += 1;
      }
      return offset;
    };

    var hasChildren = function (node) {
      return !!(node && node.childNodes && node.childNodes.length);
    };

    /**
     * returns previous boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var prevPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (point.offset === 0) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node);
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns next boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var nextPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node) + 1;
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns whether pointA and pointB is same or not.
     *
     * @param {BoundaryPoint} pointA
     * @param {BoundaryPoint} pointB
     * @return {Boolean}
     */
    var isSamePoint = function (pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
    };

    /**
     * returns whether point is visible (can set cursor) or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isVisiblePoint = function (point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
        return true;
      }

      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
      }

      return false;
    };

    /**
     * @method prevPointUtil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var prevPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = prevPoint(point);
      }

      return null;
    };

    /**
     * @method nextPointUntil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var nextPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = nextPoint(point);
      }

      return null;
    };

    /**
     * returns whether point has character or not.
     *
     * @param {Point} point
     * @return {Boolean}
     */
    var isCharPoint = function (point) {
      if (!isText(point.node)) {
        return false;
      }

      var ch = point.node.nodeValue.charAt(point.offset - 1);
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
    };

    /**
     * @method walkPoint
     *
     * @param {BoundaryPoint} startPoint
     * @param {BoundaryPoint} endPoint
     * @param {Function} handler
     * @param {Boolean} isSkipInnerOffset
     */
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;

      while (point) {
        handler(point);

        if (isSamePoint(point, endPoint)) {
          break;
        }

        var isSkipOffset = isSkipInnerOffset &&
                           startPoint.node !== point.node &&
                           endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
      }
    };

    /**
     * @method makeOffsetPath
     *
     * return offsetPath(array of offset) from ancestor
     *
     * @param {Node} ancestor - ancestor node
     * @param {Node} node
     */
    var makeOffsetPath = function (ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return ancestors.map(position).reverse();
    };

    /**
     * @method fromOffsetPath
     *
     * return element from offsetPath(array of offset)
     *
     * @param {Node} ancestor - ancestor node
     * @param {array} offsets - offsetPath
     */
    var fromOffsetPath = function (ancestor, offsets) {
      var current = ancestor;
      for (var i = 0, len = offsets.length; i < len; i++) {
        if (current.childNodes.length <= offsets[i]) {
          current = current.childNodes[current.childNodes.length - 1];
        } else {
          current = current.childNodes[offsets[i]];
        }
      }
      return current;
    };

    /**
     * @method splitNode
     *
     * split element or #text
     *
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitNode = function (point, options) {
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;

      // edge case
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
        if (isLeftEdgePoint(point)) {
          return point.node;
        } else if (isRightEdgePoint(point)) {
          return point.node.nextSibling;
        }
      }

      // split #text
      if (isText(point.node)) {
        return point.node.splitText(point.offset);
      } else {
        var childNode = point.node.childNodes[point.offset];
        var clone = insertAfter(point.node.cloneNode(false), point.node);
        appendChildNodes(clone, listNext(childNode));

        if (!isSkipPaddingBlankHTML) {
          paddingBlankHTML(point.node);
          paddingBlankHTML(clone);
        }

        return clone;
      }
    };

    /**
     * @method splitTree
     *
     * split tree by point
     *
     * @param {Node} root - split root
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitTree = function (root, point, options) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));

      if (!ancestors.length) {
        return null;
      } else if (ancestors.length === 1) {
        return splitNode(point, options);
      }

      return ancestors.reduce(function (node, parent) {
        if (node === point.node) {
          node = splitNode(point, options);
        }

        return splitNode({
          node: parent,
          offset: node ? dom.position(node) : nodeLength(parent)
        }, options);
      });
    };

    /**
     * split point
     *
     * @param {Point} point
     * @param {Boolean} isInline
     * @return {Object}
     */
    var splitPoint = function (point, isInline) {
      // find splitRoot, container
      //  - inline: splitRoot is a child of paragraph
      //  - block: splitRoot is a child of bodyContainer
      var pred = isInline ? isPara : isBodyContainer;
      var ancestors = listAncestor(point.node, pred);
      var topAncestor = list.last(ancestors) || point.node;

      var splitRoot, container;
      if (pred(topAncestor)) {
        splitRoot = ancestors[ancestors.length - 2];
        container = topAncestor;
      } else {
        splitRoot = topAncestor;
        container = splitRoot.parentNode;
      }

      // if splitRoot is exists, split with splitTree
      var pivot = splitRoot && splitTree(splitRoot, point, {
        isSkipPaddingBlankHTML: isInline,
        isNotSplitEdgePoint: isInline
      });

      // if container is point.node, find pivot with point.offset
      if (!pivot && container === point.node) {
        pivot = point.node.childNodes[point.offset];
      }

      return {
        rightNode: pivot,
        container: container
      };
    };

    var create = function (nodeName) {
      return document.createElement(nodeName);
    };

    var createText = function (text) {
      return document.createTextNode(text);
    };

    /**
     * @method remove
     *
     * remove node, (isRemoveChild: remove child or not)
     *
     * @param {Node} node
     * @param {Boolean} isRemoveChild
     */
    var remove = function (node, isRemoveChild) {
      if (!node || !node.parentNode) { return; }
      if (node.removeNode) { return node.removeNode(isRemoveChild); }

      var parent = node.parentNode;
      if (!isRemoveChild) {
        var nodes = [];
        var i, len;
        for (i = 0, len = node.childNodes.length; i < len; i++) {
          nodes.push(node.childNodes[i]);
        }

        for (i = 0, len = nodes.length; i < len; i++) {
          parent.insertBefore(nodes[i], node);
        }
      }

      parent.removeChild(node);
    };

    /**
     * @method removeWhile
     *
     * @param {Node} node
     * @param {Function} pred
     */
    var removeWhile = function (node, pred) {
      while (node) {
        if (isEditable(node) || !pred(node)) {
          break;
        }

        var parent = node.parentNode;
        remove(node);
        node = parent;
      }
    };

    /**
     * @method replace
     *
     * replace node with provided nodeName
     *
     * @param {Node} node
     * @param {String} nodeName
     * @return {Node} - new node
     */
    var replace = function (node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
      }

      var newNode = create(nodeName);

      if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
      }

      appendChildNodes(newNode, list.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);

      return newNode;
    };

    var isTextarea = makePredByNodeName('TEXTAREA');

    /**
     * @param {jQuery} $node
     * @param {Boolean} [stripLinebreaks] - default: false
     */
    var value = function ($node, stripLinebreaks) {
      var val = isTextarea($node[0]) ? $node.val() : $node.html();
      if (stripLinebreaks) {
        return val.replace(/[\n\r]/g, '');
      }
      return val;
    };

    /**
     * @method html
     *
     * get the HTML contents of node
     *
     * @param {jQuery} $node
     * @param {Boolean} [isNewlineOnBlock]
     */
    var html = function ($node, isNewlineOnBlock) {
      var markup = value($node);

      if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
          name = name.toUpperCase();
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                                       !!endSlash;
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
        });
        markup = $.trim(markup);
      }

      return markup;
    };

    var posFromPlaceholder = function (placeholder) {
      var $placeholder = $(placeholder);
      var pos = $placeholder.offset();
      var height = $placeholder.outerHeight(true); // include margin

      return {
        left: pos.left,
        top: pos.top + height
      };
    };

    var attachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.on(key, events[key]);
      });
    };

    var detachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.off(key, events[key]);
      });
    };

    /**
     * @method isCustomStyleTag
     *
     * assert if a node contains a "note-styletag" class,
     * which implies that's a custom-made style tag node
     *
     * @param {Node} an HTML DOM node
     */
    var isCustomStyleTag = function (node) {
      return node && !dom.isText(node) && list.contains(node.classList, 'note-styletag');
    };

    return {
      /** @property {String} NBSP_CHAR */
      NBSP_CHAR: NBSP_CHAR,
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      /** @property {String} blank */
      blank: blankHTML,
      /** @property {String} emptyPara */
      emptyPara: '<p>' + blankHTML + '</p>',
      makePredByNodeName: makePredByNodeName,
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      isText: isText,
      isElement: isElement,
      isVoid: isVoid,
      isPara: isPara,
      isPurePara: isPurePara,
      isHeading: isHeading,
      isInline: isInline,
      isBlock: func.not(isInline),
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isPre: isPre,
      isList: isList,
      isTable: isTable,
      isData: isData,
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isBR: makePredByNodeName('BR'),
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty,
      isEmptyAnchor: func.and(isAnchor, isEmpty),
      isClosestSibling: isClosestSibling,
      withClosestSiblings: withClosestSiblings,
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      isLeftEdgePointOf: isLeftEdgePointOf,
      isRightEdgePointOf: isRightEdgePointOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      isCharPoint: isCharPoint,
      walkPoint: walkPoint,
      ancestor: ancestor,
      singleChildAncestor: singleChildAncestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      splitPoint: splitPoint,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value,
      posFromPlaceholder: posFromPlaceholder,
      attachEvents: attachEvents,
      detachEvents: detachEvents,
      isCustomStyleTag: isCustomStyleTag
    };
  })();

  /**
   * @param {jQuery} $note
   * @param {Object} options
   * @return {Context}
   */
  var Context = function ($note, options) {
    var self = this;

    var ui = $.summernote.ui;
    this.memos = {};
    this.modules = {};
    this.layoutInfo = {};
    this.options = options;

    /**
     * create layout and initialize modules and other resources
     */
    this.initialize = function () {
      this.layoutInfo = ui.createLayout($note, options);
      this._initialize();
      $note.hide();
      return this;
    };

    /**
     * destroy modules and other resources and remove layout
     */
    this.destroy = function () {
      this._destroy();
      $note.removeData('summernote');
      ui.removeLayout($note, this.layoutInfo);
    };

    /**
     * destory modules and other resources and initialize it again
     */
    this.reset = function () {
      var disabled = self.isDisabled();
      this.code(dom.emptyPara);
      this._destroy();
      this._initialize();

      if (disabled) {
        self.disable();
      }
    };

    this._initialize = function () {
      // add optional buttons
      var buttons = $.extend({}, this.options.buttons);
      Object.keys(buttons).forEach(function (key) {
        self.memo('button.' + key, buttons[key]);
      });

      var modules = $.extend({}, this.options.modules, $.summernote.plugins || {});

      // add and initialize modules
      Object.keys(modules).forEach(function (key) {
        self.module(key, modules[key], true);
      });

      Object.keys(this.modules).forEach(function (key) {
        self.initializeModule(key);
      });
    };

    this._destroy = function () {
      // destroy modules with reversed order
      Object.keys(this.modules).reverse().forEach(function (key) {
        self.removeModule(key);
      });

      Object.keys(this.memos).forEach(function (key) {
        self.removeMemo(key);
      });
      // trigger custom onDestroy callback
      this.triggerEvent('destroy', this);
    };

    this.code = function (html) {
      var isActivated = this.invoke('codeview.isActivated');

      if (html === undefined) {
        this.invoke('codeview.sync');
        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
      } else {
        if (isActivated) {
          this.layoutInfo.codable.val(html);
        } else {
          this.layoutInfo.editable.html(html);
        }
        $note.val(html);
        this.triggerEvent('change', html);
      }
    };

    this.isDisabled = function () {
      return this.layoutInfo.editable.attr('contenteditable') === 'false';
    };

    this.enable = function () {
      this.layoutInfo.editable.attr('contenteditable', true);
      this.invoke('toolbar.activate', true);
      this.triggerEvent('disable', false);
    };

    this.disable = function () {
      // close codeview if codeview is opend
      if (this.invoke('codeview.isActivated')) {
        this.invoke('codeview.deactivate');
      }
      this.layoutInfo.editable.attr('contenteditable', false);
      this.invoke('toolbar.deactivate', true);

      this.triggerEvent('disable', true);
    };

    this.triggerEvent = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
      if (callback) {
        callback.apply($note[0], args);
      }
      $note.trigger('summernote.' + namespace, args);
    };

    this.initializeModule = function (key) {
      var module = this.modules[key];
      module.shouldInitialize = module.shouldInitialize || func.ok;
      if (!module.shouldInitialize()) {
        return;
      }

      // initialize module
      if (module.initialize) {
        module.initialize();
      }

      // attach events
      if (module.events) {
        dom.attachEvents($note, module.events);
      }
    };

    this.module = function (key, ModuleClass, withoutIntialize) {
      if (arguments.length === 1) {
        return this.modules[key];
      }

      this.modules[key] = new ModuleClass(this);

      if (!withoutIntialize) {
        this.initializeModule(key);
      }
    };

    this.removeModule = function (key) {
      var module = this.modules[key];
      if (module.shouldInitialize()) {
        if (module.events) {
          dom.detachEvents($note, module.events);
        }

        if (module.destroy) {
          module.destroy();
        }
      }

      delete this.modules[key];
    };

    this.memo = function (key, obj) {
      if (arguments.length === 1) {
        return this.memos[key];
      }
      this.memos[key] = obj;
    };

    this.removeMemo = function (key) {
      if (this.memos[key] && this.memos[key].destroy) {
        this.memos[key].destroy();
      }

      delete this.memos[key];
    };

    /**
     *Some buttons need to change their visual style immediately once they get pressed
     */
    this.createInvokeHandlerAndUpdateState = function (namespace, value) {
      return function (event) {
        self.createInvokeHandler(namespace, value)(event);
        self.invoke('buttons.updateCurrentStyle');
      };
    };

    this.createInvokeHandler = function (namespace, value) {
      return function (event) {
        event.preventDefault();
        var $target = $(event.target);
        self.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
      };
    };

    this.invoke = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var splits = namespace.split('.');
      var hasSeparator = splits.length > 1;
      var moduleName = hasSeparator && list.head(splits);
      var methodName = hasSeparator ? list.last(splits) : list.head(splits);

      var module = this.modules[moduleName || 'editor'];
      if (!moduleName && this[methodName]) {
        return this[methodName].apply(this, args);
      } else if (module && module[methodName] && module.shouldInitialize()) {
        return module[methodName].apply(module, args);
      }
    };

    return this.initialize();
  };

  $.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function () {
      var type = $.type(list.head(arguments));
      var isExternalAPICalled = type === 'string';
      var hasInitOptions = type === 'object';

      var options = hasInitOptions ? list.head(arguments) : {};

      options = $.extend({}, $.summernote.options, options);

      // Update options
      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);
      options.icons = $.extend(true, {}, $.summernote.options.icons, options.icons);
      options.tooltip = options.tooltip === 'auto' ? !agent.isSupportTouch : options.tooltip;

      this.each(function (idx, note) {
        var $note = $(note);
        if (!$note.data('summernote')) {
          var context = new Context($note, options);
          $note.data('summernote', context);
          $note.data('summernote').triggerEvent('init', context.layoutInfo);
        }
      });

      var $note = this.first();
      if ($note.length) {
        var context = $note.data('summernote');
        if (isExternalAPICalled) {
          return context.invoke.apply(context, list.from(arguments));
        } else if (options.focus) {
          context.invoke('editor.focus');
        }
      }

      return this;
    }
  });


  var Renderer = function (markup, children, options, callback) {
    this.render = function ($parent) {
      var $node = $(markup);

      if (options && options.contents) {
        $node.html(options.contents);
      }

      if (options && options.className) {
        $node.addClass(options.className);
      }

      if (options && options.data) {
        $.each(options.data, function (k, v) {
          $node.attr('data-' + k, v);
        });
      }

      if (options && options.click) {
        $node.on('click', options.click);
      }

      if (children) {
        var $container = $node.find('.note-children-container');
        children.forEach(function (child) {
          child.render($container.length ? $container : $node);
        });
      }

      if (callback) {
        callback($node, options);
      }

      if (options && options.callback) {
        options.callback($node);
      }

      if ($parent) {
        $parent.append($node);
      }

      return $node;
    };
  };

  var renderer = {
    create: function (markup, callback) {
      return function () {
        var children = $.isArray(arguments[0]) ? arguments[0] : [];
        var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
        if (options && options.children) {
          children = options.children;
        }
        return new Renderer(markup, children, options, callback);
      };
    }
  };

  var editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>');
  var toolbar = renderer.create('<div class="note-toolbar panel-heading"/>');
  var editingArea = renderer.create('<div class="note-editing-area"/>');
  var codable = renderer.create('<textarea class="note-codable"/>');
  var editable = renderer.create('<div class="note-editable panel-body" contentEditable="true"/>');
  var statusbar = renderer.create([
    '<div class="note-statusbar">',
    '  <div class="note-resizebar">',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '  </div>',
    '</div>'
  ].join(''));

  var airEditor = renderer.create('<div class="note-editor"/>');
  var airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>');

  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');

  var dropdown = renderer.create('<div class="dropdown-menu">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      var option = (typeof item === 'object') ? item.option : undefined;

      var dataValue = 'data-value="' + value + '"';
      var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
      return '<li><a href="#" ' + (dataValue + dataOption) + '>' + content + '</a></li>';
    }).join('') : options.items;

    $node.html(markup);
  });

  var dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      return '<li><a href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
    }).join('') : options.items;
    $node.html(markup);
  });

  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
    var contents = [];
    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
      var eventName = options.eventName;
      var colors = options.colors[row];
      var buttons = [];
      for (var col = 0, colSize = colors.length; col < colSize; col++) {
        var color = colors[col];
        buttons.push([
          '<button type="button" class="note-color-btn"',
          'style="background-color:', color, '" ',
          'data-event="', eventName, '" ',
          'data-value="', color, '" ',
          'title="', color, '" ',
          'data-toggle="button" tabindex="-1"></button>'
        ].join(''));
      }
      contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
    }
    $node.html(contents.join(''));

    if (options.tooltip) {
      $node.find('.note-color-btn').tooltip({
        container: 'body',
        trigger: 'hover',
        placement: 'bottom'
      });
    }
  });

  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function ($node, options) {
    if (options.fade) {
      $node.addClass('fade');
    }
    $node.html([
      '<div class="modal-dialog">',
      '  <div class="modal-content">',
      (options.title ?
      '    <div class="modal-header">' +
      '      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
      '      <h4 class="modal-title">' + options.title + '</h4>' +
      '    </div>' : ''
      ),
      '    <div class="modal-body">' + options.body + '</div>',
      (options.footer ?
      '    <div class="modal-footer">' + options.footer + '</div>' : ''
      ),
      '  </div>',
      '</div>'
    ].join(''));
  });

  var popover = renderer.create([
    '<div class="note-popover popover in">',
    '  <div class="arrow"/>',
    '  <div class="popover-content note-children-container"/>',
    '</div>'
  ].join(''), function ($node, options) {
    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';

    $node.addClass(direction);

    if (options.hideArrow) {
      $node.find('.arrow').hide();
    }
  });

  var icon = function (iconClassName, tagName) {
    tagName = tagName || 'i';
    return '<' + tagName + ' class="' + iconClassName + '"/>';
  };

  var ui = {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    dropdown: dropdown,
    dropdownCheck: dropdownCheck,
    palette: palette,
    dialog: dialog,
    popover: popover,
    icon: icon,
    options: {},

    button: function ($node, options) {
      return renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function ($node, options) {
        if (options && options.tooltip && self.options.tooltip) {
          $node.attr({
            title: options.tooltip
          }).tooltip({
            container: 'body',
            trigger: 'hover',
            placement: 'bottom'
          });
        }
      })($node, options);
    },

    toggleBtn: function ($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
    },

    toggleBtnActive: function ($btn, isActive) {
      $btn.toggleClass('active', isActive);
    },

    onDialogShown: function ($dialog, handler) {
      $dialog.one('shown.bs.modal', handler);
    },

    onDialogHidden: function ($dialog, handler) {
      $dialog.one('hidden.bs.modal', handler);
    },

    showDialog: function ($dialog) {
      $dialog.modal('show');
    },

    hideDialog: function ($dialog) {
      $dialog.modal('hide');
    },

    createLayout: function ($note, options) {
      self.options = options;
      var $editor = (options.airMode ? ui.airEditor([
        ui.editingArea([
          ui.airEditable()
        ])
      ]) : ui.editor([
        ui.toolbar(),
        ui.editingArea([
          ui.codable(),
          ui.editable()
        ]),
        ui.statusbar()
      ])).render();

      $editor.insertAfter($note);

      return {
        note: $note,
        editor: $editor,
        toolbar: $editor.find('.note-toolbar'),
        editingArea: $editor.find('.note-editing-area'),
        editable: $editor.find('.note-editable'),
        codable: $editor.find('.note-codable'),
        statusbar: $editor.find('.note-statusbar')
      };
    },

    removeLayout: function ($note, layoutInfo) {
      $note.html(layoutInfo.editable.html());
      layoutInfo.editor.remove();
      $note.show();
    }
  };

  $.summernote = $.summernote || {
    lang: {}
  };

  $.extend($.summernote.lang, {
    'en-US': {
      font: {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        clear: 'Remove Font Style',
        height: 'Line Height',
        name: 'Font Family',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Font Size'
      },
      image: {
        image: 'Picture',
        insert: 'Insert Image',
        resizeFull: 'Resize Full',
        resizeHalf: 'Resize Half',
        resizeQuarter: 'Resize Quarter',
        floatLeft: 'Float Left',
        floatRight: 'Float Right',
        floatNone: 'Float None',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Drag image or text here',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Select from files',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Image URL',
        remove: 'Remove Image'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insert Link',
        unlink: 'Unlink',
        edit: 'Edit',
        textToDisplay: 'Text to display',
        url: 'To what URL should this link go?',
        openInNewWindow: 'Open in new window'
      },
      table: {
        table: 'Table',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Insert Horizontal Rule'
      },
      style: {
        style: 'Style',
        p: 'Normal',
        blockquote: 'Quote',
        pre: 'Code',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6'
      },
      lists: {
        unordered: 'Unordered list',
        ordered: 'Ordered list'
      },
      options: {
        help: 'Help',
        fullscreen: 'Full Screen',
        codeview: 'Code View'
      },
      paragraph: {
        paragraph: 'Paragraph',
        outdent: 'Outdent',
        indent: 'Indent',
        left: 'Align left',
        center: 'Align center',
        right: 'Align right',
        justify: 'Justify full'
      },
      color: {
        recent: 'Recent Color',
        more: 'More Color',
        background: 'Background Color',
        foreground: 'Foreground Color',
        transparent: 'Transparent',
        setTransparent: 'Set transparent',
        reset: 'Reset',
        resetToDefault: 'Reset to default'
      },
      shortcut: {
        shortcuts: 'Keyboard shortcuts',
        close: 'Close',
        textFormatting: 'Text formatting',
        action: 'Action',
        paragraphFormatting: 'Paragraph formatting',
        documentStyle: 'Document Style',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Undo',
        redo: 'Redo'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });


  /**
   * @class core.key
   *
   * Object for keycodes.
   *
   * @singleton
   * @alternateClassName key
   */
  var key = (function () {
    var keyMap = {
      'BACKSPACE': 8,
      'TAB': 9,
      'ENTER': 13,
      'SPACE': 32,
      'DELETE': 46,

      // Arrow
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,

      // Number: 0-9
      'NUM0': 48,
      'NUM1': 49,
      'NUM2': 50,
      'NUM3': 51,
      'NUM4': 52,
      'NUM5': 53,
      'NUM6': 54,
      'NUM7': 55,
      'NUM8': 56,

      // Alphabet: a-z
      'B': 66,
      'E': 69,
      'I': 73,
      'J': 74,
      'K': 75,
      'L': 76,
      'R': 82,
      'S': 83,
      'U': 85,
      'V': 86,
      'Y': 89,
      'Z': 90,

      'SLASH': 191,
      'LEFTBRACKET': 219,
      'BACKSLASH': 220,
      'RIGHTBRACKET': 221
    };

    return {
      /**
       * @method isEdit
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isEdit: function (keyCode) {
        return list.contains([
          keyMap.BACKSPACE,
          keyMap.TAB,
          keyMap.ENTER,
          keyMap.SPACE,
          keyMap.DELETE
        ], keyCode);
      },
      /**
       * @method isMove
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isMove: function (keyCode) {
        return list.contains([
          keyMap.LEFT,
          keyMap.UP,
          keyMap.RIGHT,
          keyMap.DOWN
        ], keyCode);
      },
      /**
       * @property {Object} nameFromCode
       * @property {String} nameFromCode.8 "BACKSPACE"
       */
      nameFromCode: func.invertObject(keyMap),
      code: keyMap
    };
  })();

  var range = (function () {

    /**
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
     *
     * @param {TextRange} textRange
     * @param {Boolean} isStart
     * @return {BoundaryPoint}
     *
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
     */
    var textRangeToPoint = function (textRange, isStart) {
      var container = textRange.parentElement(), offset;
  
      var tester = document.body.createTextRange(), prevContainer;
      var childNodes = list.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
          continue;
        }
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
          break;
        }
        prevContainer = childNodes[offset];
      }
  
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange(), curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
  
        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
  
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }
  
        /* jshint ignore:start */
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
        /* jshint ignore:end */
  
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }
  
        container = curTextNode;
        offset = textCount;
      }
  
      return {
        cont: container,
        offset: offset
      };
    };
    
    /**
     * return TextRange from boundary point (inspired by google closure-library)
     * @param {BoundaryPoint} point
     * @return {TextRange}
     */
    var pointToTextRange = function (point) {
      var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;
  
        if (dom.isText(container)) {
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
          var prevContainer = list.last(prevTextNodes).previousSibling;
          node =  prevContainer || container.parentNode;
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
          isCollapseToStart = !prevContainer;
        } else {
          node = container.childNodes[offset] || container;
          if (dom.isText(node)) {
            return textRangeInfo(node, 0);
          }
  
          offset = 0;
          isCollapseToStart = false;
        }
  
        return {
          node: node,
          collapseToStart: isCollapseToStart,
          offset: offset
        };
      };
  
      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);
  
      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
    };
    
    /**
     * Wrapped Range
     *
     * @constructor
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     */
    var WrappedRange = function (sc, so, ec, eo) {
      this.sc = sc;
      this.so = so;
      this.ec = ec;
      this.eo = eo;
  
      // nativeRange: get nativeRange from sc, so, ec, eo
      var nativeRange = function () {
        if (agent.isW3CRangeSupport) {
          var w3cRange = document.createRange();
          w3cRange.setStart(sc, so);
          w3cRange.setEnd(ec, eo);

          return w3cRange;
        } else {
          var textRange = pointToTextRange({
            node: sc,
            offset: so
          });

          textRange.setEndPoint('EndToEnd', pointToTextRange({
            node: ec,
            offset: eo
          }));

          return textRange;
        }
      };

      this.getPoints = function () {
        return {
          sc: sc,
          so: so,
          ec: ec,
          eo: eo
        };
      };

      this.getStartPoint = function () {
        return {
          node: sc,
          offset: so
        };
      };

      this.getEndPoint = function () {
        return {
          node: ec,
          offset: eo
        };
      };

      /**
       * select update visible range
       */
      this.select = function () {
        var nativeRng = nativeRange();
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (selection.rangeCount > 0) {
            selection.removeAllRanges();
          }
          selection.addRange(nativeRng);
        } else {
          nativeRng.select();
        }
        
        return this;
      };

      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
      this.scrollIntoView = function (container) {
        var height = $(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
          container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }

        return this;
      };

      /**
       * @return {WrappedRange}
       */
      this.normalize = function () {

        /**
         * @param {BoundaryPoint} point
         * @param {Boolean} isLeftToRight
         * @return {BoundaryPoint}
         */
        var getVisiblePoint = function (point, isLeftToRight) {
          if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
              (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
            return point;
          }

          // point on block's edge
          var block = dom.ancestor(point.node, dom.isBlock);
          if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
              ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {

            // returns point already on visible point
            if (dom.isVisiblePoint(point)) {
              return point;
            }
            // reverse direction 
            isLeftToRight = !isLeftToRight;
          }

          var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) :
                                          dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
          return nextPoint || point;
        };

        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };

      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
      this.nodes = function (pred, options) {
        pred = pred || func.ok;

        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;

        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();

        var nodes = [];
        var leftEdgeNodes = [];

        dom.walkPoint(startPoint, endPoint, function (point) {
          if (dom.isEditable(point.node)) {
            return;
          }

          var node;
          if (fullyContains) {
            if (dom.isLeftEdgePoint(point)) {
              leftEdgeNodes.push(point.node);
            }
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
              node = point.node;
            }
          } else if (includeAncestor) {
            node = dom.ancestor(point.node, pred);
          } else {
            node = point.node;
          }

          if (node && pred(node)) {
            nodes.push(node);
          }
        }, true);

        return list.unique(nodes);
      };

      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
      this.commonAncestor = function () {
        return dom.commonAncestor(sc, ec);
      };

      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
      this.expand = function (pred) {
        var startAncestor = dom.ancestor(sc, pred);
        var endAncestor = dom.ancestor(ec, pred);

        if (!startAncestor && !endAncestor) {
          return new WrappedRange(sc, so, ec, eo);
        }

        var boundaryPoints = this.getPoints();

        if (startAncestor) {
          boundaryPoints.sc = startAncestor;
          boundaryPoints.so = 0;
        }

        if (endAncestor) {
          boundaryPoints.ec = endAncestor;
          boundaryPoints.eo = dom.nodeLength(endAncestor);
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
      this.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
          return new WrappedRange(sc, so, sc, so);
        } else {
          return new WrappedRange(ec, eo, ec, eo);
        }
      };

      /**
       * splitText on range
       */
      this.splitText = function () {
        var isSameContainer = sc === ec;
        var boundaryPoints = this.getPoints();

        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
          ec.splitText(eo);
        }

        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
          boundaryPoints.sc = sc.splitText(so);
          boundaryPoints.so = 0;

          if (isSameContainer) {
            boundaryPoints.ec = boundaryPoints.sc;
            boundaryPoints.eo = eo - so;
          }
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * delete contents on range
       * @return {WrappedRange}
       */
      this.deleteContents = function () {
        if (this.isCollapsed()) {
          return this;
        }

        var rng = this.splitText();
        var nodes = rng.nodes(null, {
          fullyContains: true
        });

        // find new cursor point
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
          return !list.contains(nodes, point.node);
        });

        var emptyParents = [];
        $.each(nodes, function (idx, node) {
          // find empty parents
          var parent = node.parentNode;
          if (point.node !== parent && dom.nodeLength(parent) === 1) {
            emptyParents.push(parent);
          }
          dom.remove(node, false);
        });

        // remove empty parents
        $.each(emptyParents, function (idx, node) {
          dom.remove(node, false);
        });

        return new WrappedRange(
          point.node,
          point.offset,
          point.node,
          point.offset
        ).normalize();
      };
      
      /**
       * makeIsOn: return isOn(pred) function
       */
      var makeIsOn = function (pred) {
        return function () {
          var ancestor = dom.ancestor(sc, pred);
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
        };
      };
  
      // isOnEditable: judge whether range is on editable or not
      this.isOnEditable = makeIsOn(dom.isEditable);
      // isOnList: judge whether range is on list node or not
      this.isOnList = makeIsOn(dom.isList);
      // isOnAnchor: judge whether range is on anchor node or not
      this.isOnAnchor = makeIsOn(dom.isAnchor);
      // isOnCell: judge whether range is on cell node or not
      this.isOnCell = makeIsOn(dom.isCell);
      // isOnData: judge whether range is on data node or not
      this.isOnData = makeIsOn(dom.isData);

      /**
       * @param {Function} pred
       * @return {Boolean}
       */
      this.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
          return false;
        }

        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
      };

      /**
       * returns whether range was collapsed or not
       */
      this.isCollapsed = function () {
        return sc === ec && so === eo;
      };

      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
      this.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
          sc.innerHTML = dom.emptyPara;
          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);
        }

        /**
         * [workaround] firefox often create range on not visible point. so normalize here.
         *  - firefox: |<p>text</p>|
         *  - chrome: <p>|text|</p>
         */
        var rng = this.normalize();
        if (dom.isParaInline(sc) || dom.isPara(sc)) {
          return rng;
        }

        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(rng.sc)) {
          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
          topAncestor = list.last(ancestors);
          if (!dom.isInline(topAncestor)) {
            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
          }
        } else {
          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }

        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

        // wrap with paragraph
        if (inlineSiblings.length) {
          var para = dom.wrap(list.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, list.tail(inlineSiblings));
        }

        return this.normalize();
      };

      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @return {Node}
       */
      this.insertNode = function (node) {
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

        if (info.rightNode) {
          info.rightNode.parentNode.insertBefore(node, info.rightNode);
        } else {
          info.container.appendChild(node);
        }

        return node;
      };

      /**
       * insert html at current cursor
       */
      this.pasteHTML = function (markup) {
        var contentsContainer = $('<div></div>').html(markup)[0];
        var childNodes = list.from(contentsContainer.childNodes);

        var rng = this.wrapBodyInlineWithPara().deleteContents();

        return childNodes.reverse().map(function (childNode) {
          return rng.insertNode(childNode);
        }).reverse();
      };
  
      /**
       * returns text in range
       *
       * @return {String}
       */
      this.toString = function () {
        var nativeRng = nativeRange();
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      };

      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
      this.getWordRange = function (findAfter) {
        var endPoint = this.getEndPoint();

        if (!dom.isCharPoint(endPoint)) {
          return this;
        }

        var startPoint = dom.prevPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });

        if (findAfter) {
          endPoint = dom.nextPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
          });
        }

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };
  
      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
      this.bookmark = function (editable) {
        return {
          s: {
            path: dom.makeOffsetPath(editable, sc),
            offset: so
          },
          e: {
            path: dom.makeOffsetPath(editable, ec),
            offset: eo
          }
        };
      };

      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
      this.paraBookmark = function (paras) {
        return {
          s: {
            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),
            offset: so
          },
          e: {
            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),
            offset: eo
          }
        };
      };

      /**
       * getClientRects
       * @return {Rect[]}
       */
      this.getClientRects = function () {
        var nativeRng = nativeRange();
        return nativeRng.getClientRects();
      };
    };

  /**
   * @class core.range
   *
   * Data structure
   *  * BoundaryPoint: a point of dom tree
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
   *
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   *
   * @singleton
   * @alternateClassName range
   */
    return {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node} sc - start container
       * @param {Number} so - start offset
       * @param {Node} ec - end container
       * @param {Number} eo - end offset
       * @return {WrappedRange}
       */
      create: function (sc, so, ec, eo) {
        if (arguments.length === 4) {
          return new WrappedRange(sc, so, ec, eo);
        } else if (arguments.length === 2) { //collapsed
          ec = sc;
          eo = so;
          return new WrappedRange(sc, so, ec, eo);
        } else {
          var wrappedRange = this.createFromSelection();
          if (!wrappedRange && arguments.length === 1) {
            wrappedRange = this.createFromNode(arguments[0]);
            return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
          }
          return wrappedRange;
        }
      },

      createFromSelection: function () {
        var sc, so, ec, eo;
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (!selection || selection.rangeCount === 0) {
            return null;
          } else if (dom.isBody(selection.anchorNode)) {
            // Firefox: returns entire body as range on initialization.
            // We won't never need it.
            return null;
          }

          var nativeRng = selection.getRangeAt(0);
          sc = nativeRng.startContainer;
          so = nativeRng.startOffset;
          ec = nativeRng.endContainer;
          eo = nativeRng.endOffset;
        } else { // IE8: TextRange
          var textRange = document.selection.createRange();
          var textRangeEnd = textRange.duplicate();
          textRangeEnd.collapse(false);
          var textRangeStart = textRange;
          textRangeStart.collapse(true);

          var startPoint = textRangeToPoint(textRangeStart, true),
          endPoint = textRangeToPoint(textRangeEnd, false);

          // same visible point case: range was collapsed.
          if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
              dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
              endPoint.node.nextSibling === startPoint.node) {
            startPoint = endPoint;
          }

          sc = startPoint.cont;
          so = startPoint.offset;
          ec = endPoint.cont;
          eo = endPoint.offset;
        }

        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method 
       * 
       * create WrappedRange from node
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNode: function (node) {
        var sc = node;
        var so = 0;
        var ec = node;
        var eo = dom.nodeLength(ec);

        // browsers can't target a picture or void node
        if (dom.isVoid(sc)) {
          so = dom.listPrev(sc).length - 1;
          sc = sc.parentNode;
        }
        if (dom.isBR(ec)) {
          eo = dom.listPrev(ec).length - 1;
          ec = ec.parentNode;
        } else if (dom.isVoid(ec)) {
          eo = dom.listPrev(ec).length;
          ec = ec.parentNode;
        }

        return this.create(sc, so, ec, eo);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeBefore: function (node) {
        return this.createFromNode(node).collapse(true);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeAfter: function (node) {
        return this.createFromNode(node).collapse();
      },

      /**
       * @method 
       * 
       * create WrappedRange from bookmark
       *
       * @param {Node} editable
       * @param {Object} bookmark
       * @return {WrappedRange}
       */
      createFromBookmark: function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method 
       *
       * create WrappedRange from paraBookmark
       *
       * @param {Object} bookmark
       * @param {Node[]} paras
       * @return {WrappedRange}
       */
      createFromParaBookmark: function (bookmark, paras) {
        var so = bookmark.s.offset;
        var eo = bookmark.e.offset;
        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);
        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);

        return new WrappedRange(sc, so, ec, eo);
      }
    };
  })();

  /**
   * @class core.async
   *
   * Async functions which returns `Promise`
   *
   * @singleton
   * @alternateClassName async
   */
  var async = (function () {
    /**
     * @method readFileAsDataURL
     *
     * read contents of file as representing URL
     *
     * @param {File} file
     * @return {Promise} - then: dataUrl
     */
    var readFileAsDataURL = function (file) {
      return $.Deferred(function (deferred) {
        $.extend(new FileReader(), {
          onload: function (e) {
            var dataURL = e.target.result;
            deferred.resolve(dataURL);
          },
          onerror: function () {
            deferred.reject(this);
          }
        }).readAsDataURL(file);
      }).promise();
    };
  
    /**
     * @method createImage
     *
     * create `<image>` from url string
     *
     * @param {String} url
     * @return {Promise} - then: $image
     */
    var createImage = function (url) {
      return $.Deferred(function (deferred) {
        var $img = $('<img>');

        $img.one('load', function () {
          $img.off('error abort');
          deferred.resolve($img);
        }).one('error abort', function () {
          $img.off('load').detach();
          deferred.reject($img);
        }).css({
          display: 'none'
        }).appendTo(document.body).attr('src', url);
      }).promise();
    };

    return {
      readFileAsDataURL: readFileAsDataURL,
      createImage: createImage
    };
  })();

  /**
   * @class editing.History
   *
   * Editor History
   *
   */
  var History = function ($editable) {
    var stack = [], stackOffset = -1;
    var editable = $editable[0];

    var makeSnapshot = function () {
      var rng = range.create(editable);
      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};

      return {
        contents: $editable.html(),
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
      };
    };

    var applySnapshot = function (snapshot) {
      if (snapshot.contents !== null) {
        $editable.html(snapshot.contents);
      }
      if (snapshot.bookmark !== null) {
        range.createFromBookmark(editable, snapshot.bookmark).select();
      }
    };

    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */
    this.rewind = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      // Return to the first available snapshot.
      stackOffset = 0;

      // Apply that snapshot.
      applySnapshot(stack[stackOffset]);
    };

    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */
    this.reset = function () {
      // Clear the stack.
      stack = [];

      // Restore stackOffset to its original value.
      stackOffset = -1;

      // Clear the editable area.
      $editable.html('');

      // Record our first snapshot (of nothing).
      this.recordUndo();
    };

    /**
     * undo
     */
    this.undo = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      if (0 < stackOffset) {
        stackOffset--;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * redo
     */
    this.redo = function () {
      if (stack.length - 1 > stackOffset) {
        stackOffset++;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * recorded undo
     */
    this.recordUndo = function () {
      stackOffset++;

      // Wash out stack after stackOffset
      if (stack.length > stackOffset) {
        stack = stack.slice(0, stackOffset);
      }

      // Create new snapshot and push it to the end
      stack.push(makeSnapshot());
    };
  };

  /**
   * @class editing.Style
   *
   * Style
   *
   */
  var Style = function () {
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    var jQueryCSS = function ($obj, propertyNames) {
      if (agent.jqueryVersion < 1.9) {
        var result = {};
        $.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
        });
        return result;
      }
      return $obj.css.call($obj, propertyNames);
    };

    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.fromNode = function ($node) {
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = jQueryCSS($node, properties) || {};
      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
      return styleInfo;
    };

    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */
    this.stylePara = function (rng, styleInfo) {
      $.each(rng.nodes(dom.isPara, {
        includeAncestor: true
      }), function (idx, para) {
        $(para).css(styleInfo);
      });
    };

    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */
    this.styleNodes = function (rng, options) {
      rng = rng.splitText();

      var nodeName = options && options.nodeName || 'SPAN';
      var expandClosestSibling = !!(options && options.expandClosestSibling);
      var onlyPartialContains = !!(options && options.onlyPartialContains);

      if (rng.isCollapsed()) {
        return [rng.insertNode(dom.create(nodeName))];
      }

      var pred = dom.makePredByNodeName(nodeName);
      var nodes = rng.nodes(dom.isText, {
        fullyContains: true
      }).map(function (text) {
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
      });

      if (expandClosestSibling) {
        if (onlyPartialContains) {
          var nodesInRange = rng.nodes();
          // compose with partial contains predication
          pred = func.and(pred, function (node) {
            return list.contains(nodesInRange, node);
          });
        }

        return nodes.map(function (node) {
          var siblings = dom.withClosestSiblings(node, pred);
          var head = list.head(siblings);
          var tails = list.tail(siblings);
          $.each(tails, function (idx, elem) {
            dom.appendChildNodes(head, elem.childNodes);
            dom.remove(elem);
          });
          return list.head(siblings);
        });
      } else {
        return nodes;
      }
    };

    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */
    this.current = function (rng) {
      var $cont = $(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
      var styleInfo = this.fromNode($cont);

      // document.queryCommandState for toggle state
      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
      try {
        styleInfo = $.extend(styleInfo, {
          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
          'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
        });
      } catch (e) {}

      // list-style-type to list-style(unordered, ordered)
      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
      } else {
        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = $.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
      }

      var para = dom.ancestor(rng.sc, dom.isPara);
      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
      } else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
      }

      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;

      return styleInfo;
    };
  };


  /**
   * @class editing.Bullet
   *
   * @alternateClassName Bullet
   */
  var Bullet = function () {
    var self = this;

    /**
     * toggle ordered list
     */
    this.insertOrderedList = function (editable) {
      this.toggleList('OL', editable);
    };

    /**
     * toggle unordered list
     */
    this.insertUnorderedList = function (editable) {
      this.toggleList('UL', editable);
    };

    /**
     * indent
     */
    this.indent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.wrapList(paras, head.parentNode.nodeName);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
            });
          });
        }
      });

      rng.select();
    };

    /**
     * outdent
     */
    this.outdent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.releaseList([paras]);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              val = (parseInt(val, 10) || 0);
              return val > 25 ? val - 25 : '';
            });
          });
        }
      });

      rng.select();
    };

    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */
    this.toggleList = function (listName, editable) {
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var bookmark = rng.paraBookmark(paras);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      // paragraph to list
      if (list.find(paras, dom.isPurePara)) {
        var wrappedParas = [];
        $.each(clustereds, function (idx, paras) {
          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));
        });
        paras = wrappedParas;
      // list to paragraph or change list style
      } else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
        }).filter(function (listNode) {
          return !$.nodeName(listNode, listName);
        });

        if (diffLists.length) {
          $.each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
          });
        } else {
          paras = this.releaseList(clustereds, true);
        }
      }

      range.createFromParaBookmark(bookmark, paras).select();
    };

    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */
    this.wrapList = function (paras, listName) {
      var head = list.head(paras);
      var last = list.last(paras);

      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

      // P to LI
      paras = paras.map(function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
      });

      // append to list(<ul>, <ol>)
      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
        dom.remove(nextList);
      }

      return paras;
    };

    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */
    this.releaseList = function (clustereds, isEscapseToBody) {
      var releasedParas = [];

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        var last = list.last(paras);

        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
                                         head.parentNode;
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
          node: last.parentNode,
          offset: dom.position(last) + 1
        }, {
          isSkipPaddingBlankHTML: true
        }) : null;

        var middleList = dom.splitTree(headList, {
          node: head.parentNode,
          offset: dom.position(head)
        }, {
          isSkipPaddingBlankHTML: true
        });

        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
                                  list.from(middleList.childNodes).filter(dom.isLi);

        // LI to P
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
          paras = paras.map(function (para) {
            return dom.replace(para, 'P');
          });
        }

        $.each(list.from(paras).reverse(), function (idx, para) {
          dom.insertAfter(para, headList);
        });

        // remove empty lists
        var rootLists = list.compact([headList, middleList, lastList]);
        $.each(rootLists, function (idx, rootList) {
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
          $.each(listNodes.reverse(), function (idx, listNode) {
            if (!dom.nodeLength(listNode)) {
              dom.remove(listNode, true);
            }
          });
        });

        releasedParas = releasedParas.concat(paras);
      });

      return releasedParas;
    };
  };


  /**
   * @class editing.Typing
   *
   * Typing
   *
   */
  var Typing = function () {

    // a Bullet instance to toggle lists off
    var bullet = new Bullet();

    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    this.insertTab = function (rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);

      rng = range.create(tab, tabsize);
      rng.select();
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = function (editable) {
      var rng = range.create(editable);

      // deleteContents on range.
      rng = rng.deleteContents();

      // Wrap range if it needs to be wrapped by paragraph
      rng = rng.wrapBodyInlineWithPara();

      // finding paragraph
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

      var nextPara;
      // on paragraph: split paragraph
      if (splitRoot) {
        // if it is an empty line with li
        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
          // toogle UL/OL and escape
          bullet.toggleList(splitRoot.parentNode.nodeName);
          return;
        // if it is an empty line with para on blockquote
        } else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
          // escape blockquote
          dom.insertAfter(splitRoot, splitRoot.parentNode);
          nextPara = splitRoot;
        // if new line has content (not a line break)
        } else {
          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

          $.each(emptyAnchors, function (idx, anchor) {
            dom.remove(anchor);
          });

          // replace empty heading, pre or custom-made styleTag with P tag
          if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
            nextPara = dom.replace(nextPara, 'p');
          }
        }
      // no paragraph: insert empty paragraph
      } else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = $(dom.emptyPara)[0];
        if (next) {
          rng.sc.insertBefore(nextPara, next);
        } else {
          rng.sc.appendChild(nextPara);
        }
      }

      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    };
  };


  /**
   * @class Create a virtual table to create what actions to do in change.
   * @param {object} startPoint Cell selected to apply change.
   * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
   * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
   * @param {object} domTable Dom element of table to make changes.
   */
  var TableResultAction = function (startPoint, where, action, domTable) {
    var _startPoint = { 'colPos': 0, 'rowPos': 0 };
    var _virtualTable = [];
    var _actionCellList = [];

    //////////////////////////////////////////////
    // Private functions
    //////////////////////////////////////////////

    /**
     * Set the startPoint of action.
     */
    function setStartPoint() {
      if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
        console.error('Impossible to identify start Cell point.', startPoint);
        return;
      }
      _startPoint.colPos = startPoint.cellIndex;
      if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
        console.error('Impossible to identify start Row point.', startPoint);
        return;
      }
      _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }

    /**
     * Define virtual table position info object.
     * 
     * @param {int} rowIndex Index position in line of virtual table.
     * @param {int} cellIndex Index position in column of virtual table.
     * @param {object} baseRow Row affected by this position.
     * @param {object} baseCell Cell affected by this position.
     * @param {bool} isSpan Inform if it is an span cell/row.
     */
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
      var objPosition = {
        'baseRow': baseRow,
        'baseCell': baseCell,
        'isRowSpan': isRowSpan,
        'isColSpan': isColSpan,
        'isVirtual': isVirtualCell
      };
      if (!_virtualTable[rowIndex]) {
        _virtualTable[rowIndex] = [];
      }
      _virtualTable[rowIndex][cellIndex] = objPosition;
    }

    /**
     * Create action cell object.
     * 
     * @param {object} virtualTableCellObj Object of specific position on virtual table.
     * @param {enum} resultAction Action to be applied in that item.
     */
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
      return {
        'baseCell': virtualTableCellObj.baseCell,
        'action': resultAction,
        'virtualTable': {
          'rowIndex': virtualRowPosition,
          'cellIndex': virtualColPosition
        }
      };
    }

    /**
     * Recover free index of row to append Cell.
     * 
     * @param {int} rowIndex Index of row to find free space.
     * @param {int} cellIndex Index of cell to find free space in table.
     */
    function recoverCellIndex(rowIndex, cellIndex) {
      if (!_virtualTable[rowIndex]) {
        return cellIndex;
      }
      if (!_virtualTable[rowIndex][cellIndex]) {
        return cellIndex;
      }

      var newCellIndex = cellIndex;
      while (_virtualTable[rowIndex][newCellIndex]) {
        newCellIndex++;
        if (!_virtualTable[rowIndex][newCellIndex]) {
          return newCellIndex;
        }
      }
    }

    /**
     * Recover info about row and cell and add information to virtual table.
     * 
     * @param {object} row Row to recover information.
     * @param {object} cell Cell to recover information.
     */
    function addCellInfoToVirtual(row, cell) {
      var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
      var cellHasColspan = (cell.colSpan > 1);
      var cellHasRowspan = (cell.rowSpan > 1);
      var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
      setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);

      // Add span rows to virtual Table.
      var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
      if (rowspanNumber > 1) {
        for (var rp = 1; rp < rowspanNumber; rp++) {
          var rowspanIndex = row.rowIndex + rp;
          adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
        }
      }

      // Add span cols to virtual table.
      var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
      if (colspanNumber > 1) {
        for (var cp = 1; cp < colspanNumber; cp++) {
          var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
          adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
        }
      }
    }

    /**
     * Process validation and adjust of start point if needed
     * 
     * @param {int} rowIndex 
     * @param {int} cellIndex 
     * @param {object} cell 
     * @param {bool} isSelectedCell 
     */
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
      if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
        _startPoint.colPos++;
      }
    }

    /**
     * Create virtual table of cells with all cells, including span cells.
     */
    function createVirtualTable() {
      var rows = domTable.rows;
      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var cells = rows[rowIndex].cells;
        for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
        }
      }
    }

    /**
     * Get action to be applied on the cell.
     * 
     * @param {object} cell virtual table cell to apply action
     */
    function getDeleteResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
        case TableResultAction.where.Row:
          if (!cell.isVirtual && cell.isRowSpan) {
            return TableResultAction.resultAction.AddCell;
          }
          else if (cell.isRowSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
      }
      return TableResultAction.resultAction.RemoveCell;
    }

    /**
     * Get action to be applied on the cell.
     * 
     * @param {object} cell virtual table cell to apply action
     */
    function getAddResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isRowSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
        case TableResultAction.where.Row:
          if (cell.isRowSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isColSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
      }
      return TableResultAction.resultAction.AddCell;
    }

    function init() {
      setStartPoint();
      createVirtualTable();
    }

    //////////////////////////////////////////////
    // Public functions
    //////////////////////////////////////////////

    /**
     * Recover array os what to do in table.
     */
    this.getActionList = function () {
      var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
      var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;

      var actualPosition = 0;
      var canContinue = true;
      while (canContinue) {
        var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
        var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
        var row = _virtualTable[rowPosition];
        if (!row) {
          canContinue = false;
          return _actionCellList;
        }
        var cell = row[colPosition];
        if (!cell) {
          canContinue = false;
          return _actionCellList;
        }

        // Define action to be applied in this cell
        var resultAction = TableResultAction.resultAction.Ignore;
        switch (action) {
          case TableResultAction.requestAction.Add:
            resultAction = getAddResultActionToCell(cell);
            break;
          case TableResultAction.requestAction.Delete:
            resultAction = getDeleteResultActionToCell(cell);
            break;
        }
        _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
        actualPosition++;
      }

      return _actionCellList;
    };

    init();
  };
  /**
  * 
  * Where action occours enum.
  */
  TableResultAction.where = { 'Row': 0, 'Column': 1 };
  /**
  * 
  * Requested action to apply enum.
  */
  TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
  /**
  * 
  * Result action to be executed enum.
  */
  TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };

  /**
   * 
   * @class editing.Table
   *
   * Table
   *
   */
  var Table = function () {
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    this.tab = function (rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);

      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
      if (nextCell) {
        range.create(nextCell, 0).select();
      }
    };

    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */
    this.addRow = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);

      var currentTr = $(cell).closest('tr');
      var trAttributes = this.recoverAttributes(currentTr);
      var html = $('<tr' + trAttributes + '></tr>');

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Add, $(currentTr).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var idCell = 0; idCell < actions.length; idCell++) {
        var currentCell = actions[idCell];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'top') {
              var baseCellTr = currentCell.baseCell.parent;
              var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
              if (isTopFromRowSpan) {
                var newTd = $('<div></div>').append($('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                html.append(newTd);
                break;
              }
            }
            var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
            rowspanNumber++;
            currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
            break;
        }
      }

      if (position === 'top') {
        currentTr.before(html);
      }
      else {
        var cellHasRowspan = (cell.rowSpan > 1);
        if (cellHasRowspan) {
          var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
          $($(currentTr).parent().find('tr')[lastTrIndex]).after($(html));
          return;
        }
        currentTr.after(html);
      }
    };

    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */
    this.addCol = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var rowsGroup = $(row).siblings();
      rowsGroup.push(row);

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Add, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        var currentCell = actions[actionIndex];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            if (position === 'right') {
              $(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'right') {
              var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
              colspanNumber++;
              currentCell.baseCell.setAttribute('colSpan', colspanNumber);
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
        }
      }
    };

    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */
    this.recoverAttributes = function (el) {
      var resultStr = '';

      if (!el) {
        return resultStr;
      }

      var attrList = el.attributes || [];

      for (var i = 0; i < attrList.length; i++) {
        if (attrList[i].name.toLowerCase() === 'id') {
          continue;
        }

        if (attrList[i].specified) {
          resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
        }
      }

      return resultStr;
    };

    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteRow = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));
      var rowPos = row[0].rowIndex;

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        var baseCell = actions[actionIndex].baseCell;
        var virtualPosition = actions[actionIndex].virtualTable;
        var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
        var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.AddCell:
            var nextRow = row.next('tr')[0];
            if (!nextRow) { continue; }
            var cloneRow = row[0].cells[cellPos];
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                nextRow.cells[cellPos].innerHTML = '';
              } else if (rowspanNumber === 2) {
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].removeAttribute('rowSpan');
                nextRow.cells[cellPos].innerHTML = '';
              }
            }
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                baseCell.setAttribute('rowSpan', rowspanNumber);
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (rowspanNumber === 2) {
                baseCell.removeAttribute('rowSpan');
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            // Do not need remove cell because row will be deleted.
            continue;
        }
      }
      row.remove();
    };

    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteCol = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            var baseCell = actions[actionIndex].baseCell;
            var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
            if (hasColspan) {
              var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
              if (colspanNumber > 2) {
                colspanNumber--;
                baseCell.setAttribute('colSpan', colspanNumber);
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (colspanNumber === 2) {
                baseCell.removeAttribute('colSpan');
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            dom.remove(actions[actionIndex].baseCell, true);
            continue;
        }
      }
    };

    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */
    this.createTable = function (colCount, rowCount, options) {
      var tds = [], tdHTML;
      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
      }
      tdHTML = tds.join('');

      var trs = [], trHTML;
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
      }
      trHTML = trs.join('');
      var $table = $('<table>' + trHTML + '</table>');
      if (options && options.tableClassName) {
        $table.addClass(options.tableClassName);
      }

      return $table[0];
    };

    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteTable = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      $(cell).closest('table').remove();
    };
  };


  var KEY_BOGUS = 'bogus';

  /**
   * @class Editor
   */
  var Editor = function (context) {
    var self = this;

    var $note = context.layoutInfo.note;
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;

    var editable = $editable[0];
    var lastRange = null;

    var style = new Style();
    var table = new Table();
    var typing = new Typing();
    var bullet = new Bullet();
    var history = new History($editable);

    this.initialize = function () {
      // bind custom events
      $editable.on('keydown', function (event) {
        if (event.keyCode === key.code.ENTER) {
          context.triggerEvent('enter', event);
        }
        context.triggerEvent('keydown', event);

        if (!event.isDefaultPrevented()) {
          if (options.shortcuts) {
            self.handleKeyMap(event);
          } else {
            self.preventDefaultEditableShortCuts(event);
          }
        }
      }).on('keyup', function (event) {
        context.triggerEvent('keyup', event);
      }).on('focus', function (event) {
        context.triggerEvent('focus', event);
      }).on('blur', function (event) {
        context.triggerEvent('blur', event);
      }).on('mousedown', function (event) {
        context.triggerEvent('mousedown', event);
      }).on('mouseup', function (event) {
        context.triggerEvent('mouseup', event);
      }).on('scroll', function (event) {
        context.triggerEvent('scroll', event);
      }).on('paste', function (event) {
        context.triggerEvent('paste', event);
      });

      // init content before set event
      $editable.html(dom.html($note) || dom.emptyPara);

      // [workaround] IE doesn't have input events for contentEditable
      // - see: https://goo.gl/4bfIvA
      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
      $editable.on(changeEventName, func.debounce(function () {
        context.triggerEvent('change', $editable.html());
      }, 250));

      $editor.on('focusin', function (event) {
        context.triggerEvent('focusin', event);
      }).on('focusout', function (event) {
        context.triggerEvent('focusout', event);
      });

      if (!options.airMode) {
        if (options.width) {
          $editor.outerWidth(options.width);
        }
        if (options.height) {
          $editable.outerHeight(options.height);
        }
        if (options.maxHeight) {
          $editable.css('max-height', options.maxHeight);
        }
        if (options.minHeight) {
          $editable.css('min-height', options.minHeight);
        }
      }

      history.recordUndo();
    };

    this.destroy = function () {
      $editable.off();
    };

    this.handleKeyMap = function (event) {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      var keys = [];

      if (event.metaKey) { keys.push('CMD'); }
      if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }
      if (event.shiftKey) { keys.push('SHIFT'); }

      var keyName = key.nameFromCode[event.keyCode];
      if (keyName) {
        keys.push(keyName);
      }

      var eventName = keyMap[keys.join('+')];
      if (eventName) {
        event.preventDefault();
        context.invoke(eventName);
      } else if (key.isEdit(event.keyCode)) {
        this.afterCommand();
      }
    };

    this.preventDefaultEditableShortCuts = function (event) {
      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
      if ((event.ctrlKey || event.metaKey) &&
        list.contains([66, 73, 85], event.keyCode)) {
        event.preventDefault();
      }
    };

    /**
     * create range
     * @return {WrappedRange}
     */
    this.createRange = function () {
      this.focus();
      return range.create(editable);
    };

    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */
    this.saveRange = function (thenCollapse) {
      lastRange = this.createRange();
      if (thenCollapse) {
        lastRange.collapse().select();
      }
    };

    /**
     * restoreRange
     *
     * restore lately range
     */
    this.restoreRange = function () {
      if (lastRange) {
        lastRange.select();
        this.focus();
      }
    };

    this.saveTarget = function (node) {
      $editable.data('target', node);
    };

    this.clearTarget = function () {
      $editable.removeData('target');
    };

    this.restoreTarget = function () {
      return $editable.data('target');
    };

    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */
    this.currentStyle = function () {
      var rng = range.create();
      if (rng) {
        rng = rng.normalize();
      }
      return rng ? style.current(rng) : style.fromNode($editable);
    };

    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.styleFromNode = function ($node) {
      return style.fromNode($node);
    };

    /**
     * undo
     */
    this.undo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.undo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.undo', lang.help.undo);

    /**
     * redo
     */
    this.redo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.redo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.redo', lang.help.redo);

    /**
     * before command
     */
    var beforeCommand = this.beforeCommand = function () {
      context.triggerEvent('before.command', $editable.html());
      // keep focus on editable before command execution
      self.focus();
    };

    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */
    var afterCommand = this.afterCommand = function (isPreventTrigger) {
      history.recordUndo();
      if (!isPreventTrigger) {
        context.triggerEvent('change', $editable.html());
      }
    };

    /* jshint ignore:start */
    // native commands(with execCommand), generate function for execCommand
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat',
                    'backColor', 'foreColor', 'fontName'];

    for (var idx = 0, len = commands.length; idx < len; idx ++) {
      this[commands[idx]] = (function (sCmd) {
        return function (value) {
          beforeCommand();
          document.execCommand(sCmd, false, value);
          afterCommand(true);
        };
      })(commands[idx]);
      context.memo('help.' + commands[idx], lang.help[commands[idx]]);
    }
    /* jshint ignore:end */

    /**
     * handle tab key
     */
    this.tab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng);
      } else {
        beforeCommand();
        typing.insertTab(rng, options.tabSize);
        afterCommand();
      }
    };
    context.memo('help.tab', lang.help.tab);

    /**
     * handle shift+tab key
     */
    this.untab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng, true);
      }
    };
    context.memo('help.untab', lang.help.untab);

    /**
     * run given function between beforeCommand and afterCommand
     */
    this.wrapCommand = function (fn) {
      return function () {
        beforeCommand();
        fn.apply(self, arguments);
        afterCommand();
      };
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = this.wrapCommand(function () {
      typing.insertParagraph(editable);
    });
    context.memo('help.insertParagraph', lang.help.insertParagraph);

    this.insertOrderedList = this.wrapCommand(function () {
      bullet.insertOrderedList(editable);
    });
    context.memo('help.insertOrderedList', lang.help.insertOrderedList);

    this.insertUnorderedList = this.wrapCommand(function () {
      bullet.insertUnorderedList(editable);
    });
    context.memo('help.insertUnorderedList', lang.help.insertUnorderedList);

    this.indent = this.wrapCommand(function () {
      bullet.indent(editable);
    });
    context.memo('help.indent', lang.help.indent);

    this.outdent = this.wrapCommand(function () {
      bullet.outdent(editable);
    });
    context.memo('help.outdent', lang.help.outdent);

    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */
    this.insertImage = function (src, param) {
      return async.createImage(src, param).then(function ($image) {
        beforeCommand();

        if (typeof param === 'function') {
          param($image);
        } else {
          if (typeof param === 'string') {
            $image.attr('data-filename', param);
          }
          $image.css('width', Math.min($editable.width(), $image.width()));
        }

        $image.show();
        range.create(editable).insertNode($image[0]);
        range.createFromNodeAfter($image[0]).select();
        afterCommand();
      }).fail(function (e) {
        context.triggerEvent('image.upload.error', e);
      });
    };

    /**
     * insertImages
     * @param {File[]} files
     */
    this.insertImages = function (files) {
      $.each(files, function (idx, file) {
        var filename = file.name;
        if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
          context.triggerEvent('image.upload.error', lang.image.maximumFileSizeError);
        } else {
          async.readFileAsDataURL(file).then(function (dataURL) {
            return self.insertImage(dataURL, filename);
          }).fail(function () {
            context.triggerEvent('image.upload.error');
          });
        }
      });
    };

    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */
    this.insertImagesOrCallback = function (files) {
      var callbacks = options.callbacks;

      // If onImageUpload options setted
      if (callbacks.onImageUpload) {
        context.triggerEvent('image.upload', files);
      // else insert Image as dataURL
      } else {
        this.insertImages(files);
      }
    };

    /**
     * insertNode
     * insert node
     * @param {Node} node
     */
    this.insertNode = this.wrapCommand(function (node) {
      var rng = this.createRange();
      rng.insertNode(node);
      range.createFromNodeAfter(node).select();
    });

    /**
     * insert text
     * @param {String} text
     */
    this.insertText = this.wrapCommand(function (text) {
      var rng = this.createRange();
      var textNode = rng.insertNode(dom.createText(text));
      range.create(textNode, dom.nodeLength(textNode)).select();
    });

    /**
     * return selected plain text
     * @return {String} text
     */
    this.getSelectedText = function () {
      var rng = this.createRange();

      // if range on anchor, expand range with anchor
      if (rng.isOnAnchor()) {
        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
      }

      return rng.toString();
    };

    /**
     * paste HTML
     * @param {String} markup
     */
    this.pasteHTML = this.wrapCommand(function (markup) {
      var contents = this.createRange().pasteHTML(markup);
      range.createFromNodeAfter(list.last(contents)).select();
    });

    /**
     * formatBlock
     *
     * @param {String} tagName
     */
    this.formatBlock = this.wrapCommand(function (tagName, $target) {
      var onApplyCustomStyle = context.options.callbacks.onApplyCustomStyle;
      if (onApplyCustomStyle) {
        onApplyCustomStyle.call(this, $target, context, this.onFormatBlock);
      } else {
        this.onFormatBlock(tagName);
      }
    });

    this.onFormatBlock = function (tagName) {
      // [workaround] for MSIE, IE need `<`
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
      document.execCommand('FormatBlock', false, tagName);
    };

    this.formatPara = function () {
      this.formatBlock('P');
    };
    context.memo('help.formatPara', lang.help.formatPara);

    /* jshint ignore:start */
    for (var idx = 1; idx <= 6; idx ++) {
      this['formatH' + idx] = function (idx) {
        return function () {
          this.formatBlock('H' + idx);
        };
      }(idx);
      context.memo('help.formatH'+idx, lang.help['formatH' + idx]);
    };
    /* jshint ignore:end */

    /**
     * fontSize
     *
     * @param {String} value - px
     */
    this.fontSize = function (value) {
      var rng = this.createRange();

      if (rng && rng.isCollapsed()) {
        var spans = style.styleNodes(rng);
        var firstSpan = list.head(spans);

        $(spans).css({
          'font-size': value + 'px'
        });

        // [workaround] added styled bogus span for style
        //  - also bogus character needed for cursor position
        if (firstSpan && !dom.nodeLength(firstSpan)) {
          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
          range.createFromNodeAfter(firstSpan.firstChild).select();
          $editable.data(KEY_BOGUS, firstSpan);
        }
      } else {
        beforeCommand();
        $(style.styleNodes(rng)).css({
          'font-size': value + 'px'
        });
        afterCommand();
      }
    };

    /**
     * insert horizontal rule
     */
    this.insertHorizontalRule = this.wrapCommand(function () {
      var hrNode = this.createRange().insertNode(dom.create('HR'));
      if (hrNode.nextSibling) {
        range.create(hrNode.nextSibling, 0).normalize().select();
      }
    });
    context.memo('help.insertHorizontalRule', lang.help.insertHorizontalRule);

    /**
     * remove bogus node and character
     */
    this.removeBogus = function () {
      var bogusNode = $editable.data(KEY_BOGUS);
      if (!bogusNode) {
        return;
      }

      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);

      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);
      if (bogusCharIdx !== -1) {
        textNode.deleteData(bogusCharIdx, 1);
      }

      if (dom.isEmpty(bogusNode)) {
        dom.remove(bogusNode);
      }

      $editable.removeData(KEY_BOGUS);
    };

    /**
     * lineHeight
     * @param {String} value
     */
    this.lineHeight = this.wrapCommand(function (value) {
      style.stylePara(this.createRange(), {
        lineHeight: value
      });
    });

    /**
     * unlink
     *
     * @type command
     */
    this.unlink = function () {
      var rng = this.createRange();
      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();

        beforeCommand();
        document.execCommand('unlink');
        afterCommand();
      }
    };

    /**
     * create link (command)
     *
     * @param {Object} linkInfo
     */
    this.createLink = this.wrapCommand(function (linkInfo) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.isNewWindow;
      var rng = linkInfo.range || this.createRange();
      var isTextChanged = rng.toString() !== linkText;

      // handle spaced urls from input
      if (typeof linkUrl === 'string') {
        linkUrl = linkUrl.trim();
      }

      if (options.onCreateLink) {
        linkUrl = options.onCreateLink(linkUrl);
      } else {
        // if url doesn't match an URL schema, set http:// as default
        linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl) ?
          linkUrl : 'http://' + linkUrl;
      }

      var anchors = [];
      if (isTextChanged) {
        rng = rng.deleteContents();
        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);
        anchors.push(anchor);
      } else {
        anchors = style.styleNodes(rng, {
          nodeName: 'A',
          expandClosestSibling: true,
          onlyPartialContains: true
        });
      }

      $.each(anchors, function (idx, anchor) {
        $(anchor).attr('href', linkUrl);
        if (isNewWindow) {
          $(anchor).attr('target', '_blank');
        } else {
          $(anchor).removeAttr('target');
        }
      });

      var startRange = range.createFromNodeBefore(list.head(anchors));
      var startPoint = startRange.getStartPoint();
      var endRange = range.createFromNodeAfter(list.last(anchors));
      var endPoint = endRange.getEndPoint();

      range.create(
        startPoint.node,
        startPoint.offset,
        endPoint.node,
        endPoint.offset
      ).select();
    });

    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */
    this.getLinkInfo = function () {
      var rng = this.createRange().expand(dom.isAnchor);

      // Get the first anchor on range(for edit).
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));
      var linkInfo = {
        range: rng,
        text: rng.toString(),
        url: $anchor.length ? $anchor.attr('href') : ''
      };

      // Define isNewWindow when anchor exists.
      if ($anchor.length) {
        linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
      }

      return linkInfo;
    };

    /**
     * setting color
     *
     * @param {Object} sObjColor  color code
     * @param {String} sObjColor.foreColor foreground color
     * @param {String} sObjColor.backColor background color
     */
    this.color = this.wrapCommand(function (colorInfo) {
      var foreColor = colorInfo.foreColor;
      var backColor = colorInfo.backColor;

      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
      if (backColor) { document.execCommand('backColor', false, backColor); }
    });

    /**
     * insert Table
     *
     * @param {String} dimension of table (ex : "5x5")
     */
    this.insertTable = this.wrapCommand(function (dim) {
      var dimension = dim.split('x');

      var rng = this.createRange().deleteContents();
      rng.insertNode(table.createTable(dimension[0], dimension[1], options));
    });

     /**
     * @method addRow
     *
     *
     */
    this.addRow = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addRow(rng, position);
        afterCommand();
      }
    };

     /**
     * @method addCol
     *
     *
     */
    this.addCol = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addCol(rng, position);
        afterCommand();
      }
    };

    /**
     * @method deleteRow
     *
     *
     */
    this.deleteRow = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteRow(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteCol
     *
     *
     */
    this.deleteCol = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteCol(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteTable
     *
     *
     */
    this.deleteTable = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteTable(rng);
        afterCommand();
      }
    };

    /**
     * float me
     *
     * @param {String} value
     */
    this.floatMe = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.toggleClass('note-float-left', value === 'left');
      $target.toggleClass('note-float-right', value === 'right');
      $target.css('float', value);
    });

    /**
     * resize overlay element
     * @param {String} value
     */
    this.resize = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.css({
        width: value * 100 + '%',
        height: ''
      });
    });

    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */
    this.resizeTo = function (pos, $target, bKeepRatio) {
      var imageSize;
      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
        };
      } else {
        imageSize = {
          width: pos.x,
          height: pos.y
        };
      }

      $target.css(imageSize);
    };

    /**
     * remove media object
     */
    this.removeMedia = this.wrapCommand(function () {
      var $target = $(this.restoreTarget()).detach();
      context.triggerEvent('media.delete', $target, $editable);
    });

    /**
     * returns whether editable area has focus or not.
     */
    this.hasFocus = function () {
      return $editable.is(':focus');
    };

    /**
     * set focus
     */
    this.focus = function () {
      // [workaround] Screen will move when page is scolled in IE.
      //  - do focus when not focused
      if (!this.hasFocus()) {
        $editable.focus();
      }
    };

    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */
    this.isEmpty = function () {
      return dom.isEmpty($editable[0]) || dom.emptyPara === $editable.html();
    };

    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */
    this.empty = function () {
      context.invoke('code', dom.emptyPara);
    };
  };

  var Clipboard = function (context) {
    var self = this;

    var $editable = context.layoutInfo.editable;

    this.events = {
      'summernote.keydown': function (we, e) {
        if (self.needKeydownHook()) {
          if ((e.ctrlKey || e.metaKey) && e.keyCode === key.code.V) {
            context.invoke('editor.saveRange');
            self.$paste.focus();

            setTimeout(function () {
              self.pasteByHook();
            }, 0);
          }
        }
      }
    };

    this.needKeydownHook = function () {
      return (agent.isMSIE && agent.browserVersion > 10) || agent.isFF;
    };

    this.initialize = function () {
      // [workaround] getting image from clipboard
      //  - IE11 and Firefox: CTRL+v hook
      //  - Webkit: event.clipboardData
      if (this.needKeydownHook()) {
        this.$paste = $('<div tabindex="-1" />').attr('contenteditable', true).css({
          position: 'absolute',
          left: -100000,
          opacity: 0
        });
        $editable.before(this.$paste);

        this.$paste.on('paste', function (event) {
          context.triggerEvent('paste', event);
        });
      } else {
        $editable.on('paste', this.pasteByEvent);
      }
    };

    this.destroy = function () {
      if (this.needKeydownHook()) {
        this.$paste.remove();
        this.$paste = null;
      }
    };

    this.pasteByHook = function () {
      var node = this.$paste[0].firstChild;

      var src = node && node.src;
      if (dom.isImg(node) && src.indexOf('data:') === 0) {
        var decodedData = atob(node.src.split(',')[1]);
        var array = new Uint8Array(decodedData.length);
        for (var i = 0; i < decodedData.length; i++) {
          array[i] = decodedData.charCodeAt(i);
        }

        var blob = new Blob([array], { type: 'image/png' });
        blob.name = 'clipboard.png';

        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');
        context.invoke('editor.insertImagesOrCallback', [blob]);
      } else {
        var pasteContent = $('<div />').html(this.$paste.html()).html();
        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');

        if (pasteContent) {
          context.invoke('editor.pasteHTML', pasteContent);
        }
      }

      this.$paste.empty();
    };

    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */
    this.pasteByEvent = function (event) {
      var clipboardData = event.originalEvent.clipboardData;
      if (clipboardData && clipboardData.items && clipboardData.items.length) {
        var item = list.head(clipboardData.items);
        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
          context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
        }
        context.invoke('editor.afterCommand');
      }
    };
  };

  var Dropzone = function (context) {
    var $document = $(document);
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;
    var documentEventHandlers = {};

    var $dropzone = $([
      '<div class="note-dropzone">',
      '  <div class="note-dropzone-message"/>',
      '</div>'
    ].join('')).prependTo($editor);

    var detachDocumentEvent = function () {
      Object.keys(documentEventHandlers).forEach(function (key) {
        $document.off(key.substr(2).toLowerCase(), documentEventHandlers[key]);
      });
      documentEventHandlers = {};
    };

    /**
     * attach Drag and Drop Events
     */
    this.initialize = function () {
      if (options.disableDragAndDrop) {
        // prevent default drop event
        documentEventHandlers.onDrop = function (e) {
          e.preventDefault();
        };
        $document.on('drop', documentEventHandlers.onDrop);
      } else {
        this.attachDragAndDropEvent();
      }
    };

    /**
     * attach Drag and Drop Events
     */
    this.attachDragAndDropEvent = function () {
      var collection = $(),
          $dropzoneMessage = $dropzone.find('.note-dropzone-message');

      documentEventHandlers.onDragenter = function (e) {
        var isCodeview = context.invoke('codeview.isActivated');
        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;
        if (!isCodeview && !collection.length && hasEditorSize) {
          $editor.addClass('dragover');
          $dropzone.width($editor.width());
          $dropzone.height($editor.height());
          $dropzoneMessage.text(lang.image.dragImageHere);
        }
        collection = collection.add(e.target);
      };

      documentEventHandlers.onDragleave = function (e) {
        collection = collection.not(e.target);
        if (!collection.length) {
          $editor.removeClass('dragover');
        }
      };

      documentEventHandlers.onDrop = function () {
        collection = $();
        $editor.removeClass('dragover');
      };

      // show dropzone on dragenter when dragging a object to document
      // -but only if the editor is visible, i.e. has a positive width and height
      $document.on('dragenter', documentEventHandlers.onDragenter)
        .on('dragleave', documentEventHandlers.onDragleave)
        .on('drop', documentEventHandlers.onDrop);

      // change dropzone's message on hover.
      $dropzone.on('dragenter', function () {
        $dropzone.addClass('hover');
        $dropzoneMessage.text(lang.image.dropImage);
      }).on('dragleave', function () {
        $dropzone.removeClass('hover');
        $dropzoneMessage.text(lang.image.dragImageHere);
      });

      // attach dropImage
      $dropzone.on('drop', function (event) {
        var dataTransfer = event.originalEvent.dataTransfer;

        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          event.preventDefault();
          $editable.focus();
          context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
        } else {
          $.each(dataTransfer.types, function (idx, type) {
            var content = dataTransfer.getData(type);

            if (type.toLowerCase().indexOf('text') > -1) {
              context.invoke('editor.pasteHTML', content);
            } else {
              $(content).each(function () {
                context.invoke('editor.insertNode', this);
              });
            }
          });
        }
      }).on('dragover', false); // prevent default dragover event
    };

    this.destroy = function () {
      detachDocumentEvent();
    };
  };


  var CodeMirror;
  if (agent.hasCodeMirror) {
    if (agent.isSupportAmd) {
      require(['codemirror'], function (cm) {
        CodeMirror = cm;
      });
    } else {
      CodeMirror = window.CodeMirror;
    }
  }

  /**
   * @class Codeview
   */
  var Codeview = function (context) {
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;
    var options = context.options;

    this.sync = function () {
      var isCodeview = this.isActivated();
      if (isCodeview && agent.hasCodeMirror) {
        $codable.data('cmEditor').save();
      }
    };

    /**
     * @return {Boolean}
     */
    this.isActivated = function () {
      return $editor.hasClass('codeview');
    };

    /**
     * toggle codeview
     */
    this.toggle = function () {
      if (this.isActivated()) {
        this.deactivate();
      } else {
        this.activate();
      }
      context.triggerEvent('codeview.toggled');
    };

    /**
     * activate code view
     */
    this.activate = function () {
      $codable.val(dom.html($editable, options.prettifyHtml));
      $codable.height($editable.height());

      context.invoke('toolbar.updateCodeview', true);
      $editor.addClass('codeview');
      $codable.focus();

      // activate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

        // CodeMirror TernServer
        if (options.codemirror.tern) {
          var server = new CodeMirror.TernServer(options.codemirror.tern);
          cmEditor.ternServer = server;
          cmEditor.on('cursorActivity', function (cm) {
            server.updateArgHints(cm);
          });
        }

        // CodeMirror hasn't Padding.
        cmEditor.setSize(null, $editable.outerHeight());
        $codable.data('cmEditor', cmEditor);
      }
    };

    /**
     * deactivate code view
     */
    this.deactivate = function () {
      // deactivate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = $codable.data('cmEditor');
        $codable.val(cmEditor.getValue());
        cmEditor.toTextArea();
      }

      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;
      var isChange = $editable.html() !== value;

      $editable.html(value);
      $editable.height(options.height ? $codable.height() : 'auto');
      $editor.removeClass('codeview');

      if (isChange) {
        context.triggerEvent('change', $editable.html(), $editable);
      }

      $editable.focus();

      context.invoke('toolbar.updateCodeview', false);
    };

    this.destroy = function () {
      if (this.isActivated()) {
        this.deactivate();
      }
    };
  };

  var EDITABLE_PADDING = 24;

  var Statusbar = function (context) {
    var $document = $(document);
    var $statusbar = context.layoutInfo.statusbar;
    var $editable = context.layoutInfo.editable;
    var options = context.options;

    this.initialize = function () {
      if (options.airMode || options.disableResizeEditor) {
        this.destroy();
        return;
      }

      $statusbar.on('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var editableTop = $editable.offset().top - $document.scrollTop();
        var onMouseMove = function (event) {
          var height = event.clientY - (editableTop + EDITABLE_PADDING);

          height = (options.minheight > 0) ? Math.max(height, options.minheight) : height;
          height = (options.maxHeight > 0) ? Math.min(height, options.maxHeight) : height;

          $editable.height(height);
        };

        $document
          .on('mousemove', onMouseMove)
          .one('mouseup', function () {
            $document.off('mousemove', onMouseMove);
          });
      });
    };

    this.destroy = function () {
      $statusbar.off();
      $statusbar.remove();
    };
  };

  var Fullscreen = function (context) {
    var self = this;
    var $editor = context.layoutInfo.editor;
    var $toolbar = context.layoutInfo.toolbar;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;

    var $window = $(window);
    var $scrollbar = $('html, body');

    this.resizeTo = function (size) {
      $editable.css('height', size.h);
      $codable.css('height', size.h);
      if ($codable.data('cmeditor')) {
        $codable.data('cmeditor').setsize(null, size.h);
      }
    };

    this.onResize = function () {
      self.resizeTo({
        h: $window.height() - $toolbar.outerHeight()
      });
    };

    /**
     * toggle fullscreen
     */
    this.toggle = function () {
      $editor.toggleClass('fullscreen');
      if (this.isFullscreen()) {
        $editable.data('orgHeight', $editable.css('height'));
        $window.on('resize', this.onResize).trigger('resize');
        $scrollbar.css('overflow', 'hidden');
      } else {
        $window.off('resize', this.onResize);
        this.resizeTo({ h: $editable.data('orgHeight') });
        $scrollbar.css('overflow', 'visible');
      }

      context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    };

    this.isFullscreen = function () {
      return $editor.hasClass('fullscreen');
    };
  };

  var Handle = function (context) {
    var self = this;

    var $document = $(document);
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        if (self.update(e.target)) {
          e.preventDefault();
        }
      },
      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      },
      'summernote.codeview.toggled': function () {
        self.update();
      }
    };

    this.initialize = function () {
      this.$handle = $([
        '<div class="note-handle">',
        '<div class="note-control-selection">',
        '<div class="note-control-selection-bg"></div>',
        '<div class="note-control-holder note-control-nw"></div>',
        '<div class="note-control-holder note-control-ne"></div>',
        '<div class="note-control-holder note-control-sw"></div>',
        '<div class="',
        (options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
        ' note-control-se"></div>',
        (options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
        '</div>',
        '</div>'
      ].join('')).prependTo($editingArea);

      this.$handle.on('mousedown', function (event) {
        if (dom.isControlSizing(event.target)) {
          event.preventDefault();
          event.stopPropagation();

          var $target = self.$handle.find('.note-control-selection').data('target'),
              posStart = $target.offset(),
              scrollTop = $document.scrollTop();

          var onMouseMove = function (event) {
            context.invoke('editor.resizeTo', {
              x: event.clientX - posStart.left,
              y: event.clientY - (posStart.top - scrollTop)
            }, $target, !event.shiftKey);

            self.update($target[0]);
          };

          $document
            .on('mousemove', onMouseMove)
            .one('mouseup', function (e) {
              e.preventDefault();
              $document.off('mousemove', onMouseMove);
              context.invoke('editor.afterCommand');
            });

          if (!$target.data('ratio')) { // original ratio.
            $target.data('ratio', $target.height() / $target.width());
          }
        }
      });

      // Listen for scrolling on the handle overlay.
      this.$handle.on('wheel', function (e) {
        e.preventDefault();
        self.update();
      });
    };

    this.destroy = function () {
      this.$handle.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isImage = dom.isImg(target);
      var $selection = this.$handle.find('.note-control-selection');

      context.invoke('imagePopover.update', target);

      if (isImage) {
        var $image = $(target);
        var position = $image.position();
        var pos = {
          left: position.left + parseInt($image.css('marginLeft'), 10),
          top: position.top + parseInt($image.css('marginTop'), 10)
        };

        // exclude margin
        var imageSize = {
          w: $image.outerWidth(false),
          h: $image.outerHeight(false)
        };

        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
        }).data('target', $image); // save current image element.

        var sizingText = imageSize.w + 'x' + imageSize.h;
        $selection.find('.note-control-selection-info').text(sizingText);
        context.invoke('editor.saveTarget', target);
      } else {
        this.hide();
      }

      return isImage;
    };

    /**
     * hide
     *
     * @param {jQuery} $handle
     */
    this.hide = function () {
      context.invoke('editor.clearTarget');
      this.$handle.children().hide();
    };
  };

  var AutoLink = function (context) {
    var self = this;
    var defaultScheme = 'http://';
    var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      }
    };

    this.initialize = function () {
      this.lastWordRange = null;
    };

    this.destroy = function () {
      this.lastWordRange = null;
    };

    this.replace = function () {
      if (!this.lastWordRange) {
        return;
      }

      var keyword = this.lastWordRange.toString();
      var match = keyword.match(linkPattern);

      if (match && (match[1] || match[2])) {
        var link = match[1] ? keyword : defaultScheme + keyword;
        var node = $('<a />').html(keyword).attr('href', link)[0];

        this.lastWordRange.insertNode(node);
        this.lastWordRange = null;
        context.invoke('editor.focus');
      }

    };

    this.handleKeydown = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        this.lastWordRange = wordRange;
      }
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        this.replace();
      }
    };
  };

  /**
   * textarea auto sync.
   */
  var AutoSync = function (context) {
    var $note = context.layoutInfo.note;

    this.events = {
      'summernote.change': function () {
        $note.val(context.invoke('code'));
      }
    };

    this.shouldInitialize = function () {
      return dom.isTextarea($note[0]);
    };
  };

  var Placeholder = function (context) {
    var self = this;
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.init summernote.change': function () {
        self.update();
      },
      'summernote.codeview.toggled': function () {
        self.update();
      }
    };

    this.shouldInitialize = function () {
      return !!options.placeholder;
    };

    this.initialize = function () {
      this.$placeholder = $('<div class="note-placeholder">');
      this.$placeholder.on('click', function () {
        context.invoke('focus');
      }).text(options.placeholder).prependTo($editingArea);
    };

    this.destroy = function () {
      this.$placeholder.remove();
    };

    this.update = function () {
      var isShow = !context.invoke('codeview.isActivated') && context.invoke('editor.isEmpty');
      this.$placeholder.toggle(isShow);
    };
  };

  var Buttons = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;
    var lang = options.langInfo;

    var invertedKeyMap = func.invertObject(options.keyMap[agent.isMac ? 'mac' : 'pc']);

    var representShortcut = this.representShortcut = function (editorMethod) {
      var shortcut = invertedKeyMap[editorMethod];
      if (!options.shortcuts || !shortcut) {
        return '';
      }

      if (agent.isMac) {
        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
      }

      shortcut = shortcut.replace('BACKSLASH', '\\')
                         .replace('SLASH', '/')
                         .replace('LEFTBRACKET', '[')
                         .replace('RIGHTBRACKET', ']');

      return ' (' + shortcut + ')';
    };

    this.initialize = function () {
      this.addToolbarButtons();
      this.addImagePopoverButtons();
      this.addLinkPopoverButtons();
      this.addTablePopoverButtons();
      this.fontInstalledMap = {};
    };

    this.destroy = function () {
      delete this.fontInstalledMap;
    };

    this.isFontInstalled = function (name) {
      if (!self.fontInstalledMap.hasOwnProperty(name)) {
        self.fontInstalledMap[name] = agent.isFontInstalled(name) ||
          list.contains(options.fontNamesIgnoreCheck, name);
      }

      return self.fontInstalledMap[name];
    };

    this.addToolbarButtons = function () {
      context.memo('button.style', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.magic) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.style.style,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'dropdown-style',
            items: context.options.styleTags,
            template: function (item) {

              if (typeof item === 'string') {
                item = { tag: item, title: (lang.style.hasOwnProperty(item) ? lang.style[item] : item) };
              }

              var tag = item.tag;
              var title = item.title;
              var style = item.style ? ' style="' + item.style + '" ' : '';
              var className = item.className ? ' class="' + item.className + '"' : '';

              return '<' + tag + style + className + '>' + title + '</' + tag +  '>';
            },
            click: context.createInvokeHandler('editor.formatBlock')
          })
        ]).render();
      });

      context.memo('button.bold', function () {
        return ui.button({
          className: 'note-btn-bold',
          contents: ui.icon(options.icons.bold),
          tooltip: lang.font.bold + representShortcut('bold'),
          click: context.createInvokeHandlerAndUpdateState('editor.bold')
        }).render();
      });

      context.memo('button.italic', function () {
        return ui.button({
          className: 'note-btn-italic',
          contents: ui.icon(options.icons.italic),
          tooltip: lang.font.italic + representShortcut('italic'),
          click: context.createInvokeHandlerAndUpdateState('editor.italic')
        }).render();
      });

      context.memo('button.underline', function () {
        return ui.button({
          className: 'note-btn-underline',
          contents: ui.icon(options.icons.underline),
          tooltip: lang.font.underline + representShortcut('underline'),
          click: context.createInvokeHandlerAndUpdateState('editor.underline')
        }).render();
      });

      context.memo('button.clear', function () {
        return ui.button({
          contents: ui.icon(options.icons.eraser),
          tooltip: lang.font.clear + representShortcut('removeFormat'),
          click: context.createInvokeHandler('editor.removeFormat')
        }).render();
      });

      context.memo('button.strikethrough', function () {
        return ui.button({
          className: 'note-btn-strikethrough',
          contents: ui.icon(options.icons.strikethrough),
          tooltip: lang.font.strikethrough + representShortcut('strikethrough'),
          click: context.createInvokeHandlerAndUpdateState('editor.strikethrough')
        }).render();
      });

      context.memo('button.superscript', function () {
        return ui.button({
          className: 'note-btn-superscript',
          contents: ui.icon(options.icons.superscript),
          tooltip: lang.font.superscript,
          click: context.createInvokeHandlerAndUpdateState('editor.superscript')
        }).render();
      });

      context.memo('button.subscript', function () {
        return ui.button({
          className: 'note-btn-subscript',
          contents: ui.icon(options.icons.subscript),
          tooltip: lang.font.subscript,
          click: context.createInvokeHandlerAndUpdateState('editor.subscript')
        }).render();
      });

      context.memo('button.fontname', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: '<span class="note-current-fontname"/> ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.name,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontname',
            checkClassName: options.icons.menuCheck,
            items: options.fontNames.filter(self.isFontInstalled),
            template: function (item) {
              return '<span style="font-family:' + item + '">' + item + '</span>';
            },
            click: context.createInvokeHandlerAndUpdateState('editor.fontName')
          })
        ]).render();
      });

      context.memo('button.fontsize', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: '<span class="note-current-fontsize"/>' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.size,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontsize',
            checkClassName: options.icons.menuCheck,
            items: options.fontSizes,
            click: context.createInvokeHandler('editor.fontSize')
          })
        ]).render();
      });

      context.memo('button.color', function () {
        return ui.buttonGroup({
          className: 'note-color',
          children: [
            ui.button({
              className: 'note-current-color-button',
              contents: ui.icon(options.icons.font + ' note-recent-color'),
              tooltip: lang.color.recent,
              click: function (e) {
                var $button = $(e.currentTarget);
                context.invoke('editor.color', {
                  backColor: $button.attr('data-backColor'),
                  foreColor: $button.attr('data-foreColor')
                });
              },
              callback: function ($button) {
                var $recentColor = $button.find('.note-recent-color');
                $recentColor.css('background-color', '#FFFF00');
                $button.attr('data-backColor', '#FFFF00');
              }
            }),
            ui.button({
              className: 'dropdown-toggle',
              contents: ui.icon(options.icons.caret, 'span'),
              tooltip: lang.color.more,
              data: {
                toggle: 'dropdown'
              }
            }),
            ui.dropdown({
              items: [
                '<li>',
                '<div class="btn-group">',
                '  <div class="note-palette-title">' + lang.color.background + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">',
                lang.color.transparent,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="backColor"/>',
                '</div>',
                '<div class="btn-group">',
                '  <div class="note-palette-title">' + lang.color.foreground + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">',
                lang.color.resetToDefault,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="foreColor"/>',
                '</div>',
                '</li>'
              ].join(''),
              callback: function ($dropdown) {
                $dropdown.find('.note-holder').each(function () {
                  var $holder = $(this);
                  $holder.append(ui.palette({
                    colors: options.colors,
                    eventName: $holder.data('event'),
                    tooltip: options.tooltip
                  }).render());
                });
              },
              click: function (event) {
                var $button = $(event.target);
                var eventName = $button.data('event');
                var value = $button.data('value');

                if (eventName && value) {
                  var key = eventName === 'backColor' ? 'background-color' : 'color';
                  var $color = $button.closest('.note-color').find('.note-recent-color');
                  var $currentButton = $button.closest('.note-color').find('.note-current-color-button');

                  $color.css(key, value);
                  $currentButton.attr('data-' + eventName, value);
                  context.invoke('editor.' + eventName, value);
                }
              }
            })
          ]
        }).render();
      });

      context.memo('button.ul',  function () {
        return ui.button({
          contents: ui.icon(options.icons.unorderedlist),
          tooltip: lang.lists.unordered + representShortcut('insertUnorderedList'),
          click: context.createInvokeHandler('editor.insertUnorderedList')
        }).render();
      });

      context.memo('button.ol', function () {
        return ui.button({
          contents: ui.icon(options.icons.orderedlist),
          tooltip: lang.lists.ordered + representShortcut('insertOrderedList'),
          click:  context.createInvokeHandler('editor.insertOrderedList')
        }).render();
      });

      var justifyLeft = ui.button({
        contents: ui.icon(options.icons.alignLeft),
        tooltip: lang.paragraph.left + representShortcut('justifyLeft'),
        click: context.createInvokeHandler('editor.justifyLeft')
      });

      var justifyCenter = ui.button({
        contents: ui.icon(options.icons.alignCenter),
        tooltip: lang.paragraph.center + representShortcut('justifyCenter'),
        click: context.createInvokeHandler('editor.justifyCenter')
      });

      var justifyRight = ui.button({
        contents: ui.icon(options.icons.alignRight),
        tooltip: lang.paragraph.right + representShortcut('justifyRight'),
        click: context.createInvokeHandler('editor.justifyRight')
      });

      var justifyFull = ui.button({
        contents: ui.icon(options.icons.alignJustify),
        tooltip: lang.paragraph.justify + representShortcut('justifyFull'),
        click: context.createInvokeHandler('editor.justifyFull')
      });

      var outdent = ui.button({
        contents: ui.icon(options.icons.outdent),
        tooltip: lang.paragraph.outdent + representShortcut('outdent'),
        click: context.createInvokeHandler('editor.outdent')
      });

      var indent = ui.button({
        contents: ui.icon(options.icons.indent),
        tooltip: lang.paragraph.indent + representShortcut('indent'),
        click: context.createInvokeHandler('editor.indent')
      });

      context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
      context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
      context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
      context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
      context.memo('button.outdent', func.invoke(outdent, 'render'));
      context.memo('button.indent', func.invoke(indent, 'render'));

      context.memo('button.paragraph', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.alignLeft) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.paragraph.paragraph,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown([
            ui.buttonGroup({
              className: 'note-align',
              children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
            }),
            ui.buttonGroup({
              className: 'note-list',
              children: [outdent, indent]
            })
          ])
        ]).render();
      });

      context.memo('button.height', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.textHeight) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.height,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            items: options.lineHeights,
            checkClassName: options.icons.menuCheck,
            className: 'dropdown-line-height',
            click: context.createInvokeHandler('editor.lineHeight')
          })
        ]).render();
      });

      context.memo('button.table', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.table) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.table.table,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'note-table',
            items: [
              '<div class="note-dimension-picker">',
              '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
              '  <div class="note-dimension-picker-highlighted"/>',
              '  <div class="note-dimension-picker-unhighlighted"/>',
              '</div>',
              '<div class="note-dimension-display">1 x 1</div>'
            ].join('')
          })
        ], {
          callback: function ($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
              width: options.insertTableMaxSize.col + 'em',
              height: options.insertTableMaxSize.row + 'em'
            }).mousedown(context.createInvokeHandler('editor.insertTable'))
              .on('mousemove', self.tableMoveHandler);
          }
        }).render();
      });

      context.memo('button.link', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: lang.link.link + representShortcut('linkDialog.show'),
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.picture', function () {
        return ui.button({
          contents: ui.icon(options.icons.picture),
          tooltip: lang.image.image,
          click: context.createInvokeHandler('imageDialog.show')
        }).render();
      });

      context.memo('button.video', function () {
        return ui.button({
          contents: ui.icon(options.icons.video),
          tooltip: lang.video.video,
          click: context.createInvokeHandler('videoDialog.show')
        }).render();
      });

      context.memo('button.hr', function () {
        return ui.button({
          contents: ui.icon(options.icons.minus),
          tooltip: lang.hr.insert + representShortcut('insertHorizontalRule'),
          click: context.createInvokeHandler('editor.insertHorizontalRule')
        }).render();
      });

      context.memo('button.fullscreen', function () {
        return ui.button({
          className: 'btn-fullscreen',
          contents: ui.icon(options.icons.arrowsAlt),
          tooltip: lang.options.fullscreen,
          click: context.createInvokeHandler('fullscreen.toggle')
        }).render();
      });

      context.memo('button.codeview', function () {
        return ui.button({
          className: 'btn-codeview',
          contents: ui.icon(options.icons.code),
          tooltip: lang.options.codeview,
          click: context.createInvokeHandler('codeview.toggle')
        }).render();
      });

      context.memo('button.redo', function () {
        return ui.button({
          contents: ui.icon(options.icons.redo),
          tooltip: lang.history.redo + representShortcut('redo'),
          click: context.createInvokeHandler('editor.redo')
        }).render();
      });

      context.memo('button.undo', function () {
        return ui.button({
          contents: ui.icon(options.icons.undo),
          tooltip: lang.history.undo + representShortcut('undo'),
          click: context.createInvokeHandler('editor.undo')
        }).render();
      });

      context.memo('button.help', function () {
        return ui.button({
          contents: ui.icon(options.icons.question),
          tooltip: lang.options.help,
          click: context.createInvokeHandler('helpDialog.show')
        }).render();
      });
    };

    /**
     * image : [
     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
     *   ['remove', ['removeMedia']]
     * ],
     */
    this.addImagePopoverButtons = function () {
      // Image Size Buttons
      context.memo('button.imageSize100', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: lang.image.resizeFull,
          click: context.createInvokeHandler('editor.resize', '1')
        }).render();
      });
      context.memo('button.imageSize50', function () {
        return  ui.button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: lang.image.resizeHalf,
          click: context.createInvokeHandler('editor.resize', '0.5')
        }).render();
      });
      context.memo('button.imageSize25', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: lang.image.resizeQuarter,
          click: context.createInvokeHandler('editor.resize', '0.25')
        }).render();
      });

      // Float Buttons
      context.memo('button.floatLeft', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignLeft),
          tooltip: lang.image.floatLeft,
          click: context.createInvokeHandler('editor.floatMe', 'left')
        }).render();
      });

      context.memo('button.floatRight', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignRight),
          tooltip: lang.image.floatRight,
          click: context.createInvokeHandler('editor.floatMe', 'right')
        }).render();
      });

      context.memo('button.floatNone', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignJustify),
          tooltip: lang.image.floatNone,
          click: context.createInvokeHandler('editor.floatMe', 'none')
        }).render();
      });

      // Remove Buttons
      context.memo('button.removeMedia', function () {
        return ui.button({
          contents: ui.icon(options.icons.trash),
          tooltip: lang.image.remove,
          click: context.createInvokeHandler('editor.removeMedia')
        }).render();
      });
    };

    this.addLinkPopoverButtons = function () {
      context.memo('button.linkDialogShow', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: lang.link.edit,
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.unlink', function () {
        return ui.button({
          contents: ui.icon(options.icons.unlink),
          tooltip: lang.link.unlink,
          click: context.createInvokeHandler('editor.unlink')
        }).render();
      });
    };

    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */
    this.addTablePopoverButtons = function () {
      context.memo('button.addRowUp', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowAbove),
          tooltip: lang.table.addRowAbove,
          click: context.createInvokeHandler('editor.addRow', 'top')
        }).render();
      });
      context.memo('button.addRowDown', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowBelow),
          tooltip: lang.table.addRowBelow,
          click: context.createInvokeHandler('editor.addRow', 'bottom')
        }).render();
      });
      context.memo('button.addColLeft', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colBefore),
          tooltip: lang.table.addColLeft,
          click: context.createInvokeHandler('editor.addCol', 'left')
        }).render();
      });
      context.memo('button.addColRight', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colAfter),
          tooltip: lang.table.addColRight,
          click: context.createInvokeHandler('editor.addCol', 'right')
        }).render();
      });
      context.memo('button.deleteRow', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowRemove),
          tooltip: lang.table.delRow,
          click: context.createInvokeHandler('editor.deleteRow')
        }).render();
      });
      context.memo('button.deleteCol', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colRemove),
          tooltip: lang.table.delCol,
          click: context.createInvokeHandler('editor.deleteCol')
        }).render();
      });
      context.memo('button.deleteTable', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.trash),
          tooltip: lang.table.delTable,
          click: context.createInvokeHandler('editor.deleteTable')
        }).render();
      });
    };

    this.build = function ($container, groups) {
      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
        var group = groups[groupIdx];
        var groupName = group[0];
        var buttons = group[1];

        var $group = ui.buttonGroup({
          className: 'note-' + groupName
        }).render();

        for (var idx = 0, len = buttons.length; idx < len; idx++) {
          var button = context.memo('button.' + buttons[idx]);
          if (button) {
            $group.append(typeof button === 'function' ? button(context) : button);
          }
        }
        $group.appendTo($container);
      }
    };

    this.updateCurrentStyle = function () {
      var styleInfo = context.invoke('editor.currentStyle');
      this.updateBtnStates({
        '.note-btn-bold': function () {
          return styleInfo['font-bold'] === 'bold';
        },
        '.note-btn-italic': function () {
          return styleInfo['font-italic'] === 'italic';
        },
        '.note-btn-underline': function () {
          return styleInfo['font-underline'] === 'underline';
        },
        '.note-btn-subscript': function () {
          return styleInfo['font-subscript'] === 'subscript';
        },
        '.note-btn-superscript': function () {
          return styleInfo['font-superscript'] === 'superscript';
        },
        '.note-btn-strikethrough': function () {
          return styleInfo['font-strikethrough'] === 'strikethrough';
        }
      });

      if (styleInfo['font-family']) {
        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
          return name.replace(/[\'\"]/g, '')
            .replace(/\s+$/, '')
            .replace(/^\s+/, '');
        });
        var fontName = list.find(fontNames, self.isFontInstalled);

        $toolbar.find('.dropdown-fontname li a').each(function () {
          // always compare string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (fontName + '');
          this.className = isChecked ? 'checked' : '';
        });
        $toolbar.find('.note-current-fontname').text(fontName);
      }

      if (styleInfo['font-size']) {
        var fontSize = styleInfo['font-size'];
        $toolbar.find('.dropdown-fontsize li a').each(function () {
          // always compare with string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (fontSize + '');
          this.className = isChecked ? 'checked' : '';
        });
        $toolbar.find('.note-current-fontsize').text(fontSize);
      }

      if (styleInfo['line-height']) {
        var lineHeight = styleInfo['line-height'];
        $toolbar.find('.dropdown-line-height li a').each(function () {
          // always compare with string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (lineHeight + '');
          this.className = isChecked ? 'checked' : '';
        });
      }
    };

    this.updateBtnStates = function (infos) {
      $.each(infos, function (selector, pred) {
        ui.toggleBtnActive($toolbar.find(selector), pred());
      });
    };

    this.tableMoveHandler = function (event) {
      var PX_PER_EM = 18;
      var $picker = $(event.target.parentNode); // target is mousecatcher
      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

      var posOffset;
      // HTML5 with jQuery - e.offsetX is undefined in Firefox
      if (event.offsetX === undefined) {
        var posCatcher = $(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
        };
      } else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
        };
      }

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
      };

      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
      $catcher.data('value', dim.c + 'x' + dim.r);

      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
        $unhighlighted.css({ width: dim.c + 1 + 'em'});
      }

      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
        $unhighlighted.css({ height: dim.r + 1 + 'em'});
      }

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    };
  };

  var Toolbar = function (context) {
    var ui = $.summernote.ui;

    var $note = context.layoutInfo.note;
    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;

    this.shouldInitialize = function () {
      return !options.airMode;
    };

    this.initialize = function () {
      options.toolbar = options.toolbar || [];

      if (!options.toolbar.length) {
        $toolbar.hide();
      } else {
        context.invoke('buttons.build', $toolbar, options.toolbar);
      }

      if (options.toolbarContainer) {
        $toolbar.appendTo(options.toolbarContainer);
      }

      $note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        context.invoke('buttons.updateCurrentStyle');
      });

      context.invoke('buttons.updateCurrentStyle');
    };

    this.destroy = function () {
      $toolbar.children().remove();
    };

    this.updateFullscreen = function (isFullscreen) {
      ui.toggleBtnActive($toolbar.find('.btn-fullscreen'), isFullscreen);
    };

    this.updateCodeview = function (isCodeview) {
      ui.toggleBtnActive($toolbar.find('.btn-codeview'), isCodeview);
      if (isCodeview) {
        this.deactivate();
      } else {
        this.activate();
      }
    };

    this.activate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, true);
    };

    this.deactivate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, false);
    };
  };

  var LinkDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group">' +
                   '<label>' + lang.link.textToDisplay + '</label>' +
                   '<input class="note-link-text form-control" type="text" />' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<label>' + lang.link.url + '</label>' +
                   '<input class="note-link-url form-control" type="text" value="http://" />' +
                 '</div>' +
                 (!options.disableLinkTarget ?
                   '<div class="checkbox">' +
                     '<label for="sn-checkbox-open-in-new-window">' +
                       '<input type="checkbox" id="sn-checkbox-open-in-new-window" checked />' + lang.link.openInNewWindow +
                     '</label>' +
                   '</div>' : ''
                 );
      var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';

      this.$dialog = ui.dialog({
        className: 'link-dialog',
        title: lang.link.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    /**
     * toggle update button
     */
    this.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
      ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    };

    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */
    this.showLinkDialog = function (linkInfo) {
      return $.Deferred(function (deferred) {
        var $linkText = self.$dialog.find('.note-link-text'),
        $linkUrl = self.$dialog.find('.note-link-url'),
        $linkBtn = self.$dialog.find('.note-link-btn'),
        $openInNewWindow = self.$dialog.find('input[type=checkbox]');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // if no url was given, copy text to url
          if (!linkInfo.url) {
            linkInfo.url = linkInfo.text;
          }

          $linkText.val(linkInfo.text);

          var handleLinkTextUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // if linktext was modified by keyup,
            // stop cloning text from linkUrl
            linkInfo.text = $linkText.val();
          };

          $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
            setTimeout(handleLinkTextUpdate, 0);
          });

          var handleLinkUrlUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // display same link on `Text to display` input
            // when create a new link
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
            }
          };

          $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
            setTimeout(handleLinkUrlUpdate, 0);
          }).val(linkInfo.url).trigger('focus');

          self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          self.bindEnterKey($linkUrl, $linkBtn);
          self.bindEnterKey($linkText, $linkBtn);

          var isChecked = linkInfo.isNewWindow !== undefined ?
            linkInfo.isNewWindow : context.options.linkTargetBlank;

          $openInNewWindow.prop('checked', isChecked);

          $linkBtn.one('click', function (event) {
            event.preventDefault();

            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              isNewWindow: $openInNewWindow.is(':checked')
            });
            self.$dialog.modal('hide');
          });
        });

        ui.onDialogHidden(self.$dialog, function () {
          // detach events
          $linkText.off('input paste keypress');
          $linkUrl.off('input paste keypress');
          $linkBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      }).promise();
    };

    /**
     * @param {Object} layoutInfo
     */
    this.show = function () {
      var linkInfo = context.invoke('editor.getLinkInfo');

      context.invoke('editor.saveRange');
      this.showLinkDialog(linkInfo).then(function (linkInfo) {
        context.invoke('editor.restoreRange');
        context.invoke('editor.createLink', linkInfo);
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };
    context.memo('help.linkDialog.show', options.langInfo.help['linkDialog.show']);
  };

  var LinkPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.link);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-link-popover',
        callback: function ($node) {
          var $content = $node.find('.popover-content');
          $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
        }
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.link);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      // Prevent focusing on editable when invoke('code') is executed
      if (!context.invoke('editor.hasFocus')) {
        this.hide();
        return;
      }

      var rng = context.invoke('editor.createRange');
      if (rng.isCollapsed() && rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        var href = $(anchor).attr('href');
        this.$popover.find('a').attr('href', href).html(href);

        var pos = dom.posFromPlaceholder(anchor);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var ImageDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var imageLimitation = '';
      if (options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                           ' ' + ' KMGTP'[unit] + 'B';
        imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
      }

      var body = '<div class="form-group note-group-select-from-files">' +
                   '<label>' + lang.image.selectFromFiles + '</label>' +
                   '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' +
                   imageLimitation +
                 '</div>' +
                 '<div class="form-group note-group-image-url" style="overflow:auto;">' +
                   '<label>' + lang.image.url + '</label>' +
                   '<input class="note-image-url form-control col-md-12" type="text" />' +
                 '</div>';
      var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.image.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showImageDialog().then(function (data) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        if (typeof data === 'string') { // image url
          context.invoke('editor.insertImage', data);
        } else { // array of files
          context.invoke('editor.insertImagesOrCallback', data);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showImageDialog = function () {
      return $.Deferred(function (deferred) {
        var $imageInput = self.$dialog.find('.note-image-input'),
            $imageUrl = self.$dialog.find('.note-image-url'),
            $imageBtn = self.$dialog.find('.note-image-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // Cloning imageInput to clear element.
          $imageInput.replaceWith($imageInput.clone()
            .on('change', function () {
              deferred.resolve(this.files || this.value);
            })
            .val('')
          );

          $imageBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($imageUrl.val());
          });

          $imageUrl.on('keyup paste', function () {
            var url = $imageUrl.val();
            ui.toggleBtn($imageBtn, url);
          }).val('').trigger('focus');
          self.bindEnterKey($imageUrl, $imageBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $imageInput.off('change');
          $imageUrl.off('keyup paste keypress');
          $imageBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };


  /**
   * Image popover module
   *  mouse events that show/hide popover will be handled by Handle.js.
   *  Handle.js will receive the events and invoke 'imagePopover.update'.
   */
  var ImagePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editable = context.layoutInfo.editable;
    var editable = $editable[0];
    var options = context.options;

    this.events = {
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.image);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-image-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.image);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (dom.isImg(target)) {
        var pos = dom.posFromPlaceholder(target);
        var posEditor = dom.posFromPlaceholder(editable);

        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: Math.min(pos.top, posEditor.top)
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var TablePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        self.update(e.target);
      },
      'summernote.keyup summernote.scroll summernote.change': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.table);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-table-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.table);

      // [workaround] Disable Firefox's default table editor
      if (agent.isFF) {
        document.execCommand('enableInlineTableEditing', false, false);
      }
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isCell = dom.isCell(target);

      if (isCell) {
        var pos = dom.posFromPlaceholder(target);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }

      return isCell;
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var VideoDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group row-fluid">' +
          '<label>' + lang.video.url + ' <small class="text-muted">' + lang.video.providers + '</small></label>' +
          '<input class="note-video-url form-control span12" type="text" />' +
          '</div>';
      var footer = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + lang.video.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.video.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.createVideoNode = function (url) {
      // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
      var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      var ytMatch = url.match(ytRegExp);

      var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
      var igMatch = url.match(igRegExp);

      var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
      var vMatch = url.match(vRegExp);

      var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
      var vimMatch = url.match(vimRegExp);

      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
      var dmMatch = url.match(dmRegExp);

      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
      var youkuMatch = url.match(youkuRegExp);

      var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
      var qqMatch = url.match(qqRegExp);

      var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
      var qqMatch2 = url.match(qqRegExp2);

      var mp4RegExp = /^.+.(mp4|m4v)$/;
      var mp4Match = url.match(mp4RegExp);

      var oggRegExp = /^.+.(ogg|ogv)$/;
      var oggMatch = url.match(oggRegExp);

      var webmRegExp = /^.+.(webm)$/;
      var webmMatch = url.match(webmRegExp);

      var $video;
      if (ytMatch && ytMatch[1].length === 11) {
        var youtubeId = ytMatch[1];
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.youtube.com/embed/' + youtubeId)
            .attr('width', '640').attr('height', '360');
      } else if (igMatch && igMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
            .attr('width', '612').attr('height', '710')
            .attr('scrolling', 'no')
            .attr('allowtransparency', 'true');
      } else if (vMatch && vMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', vMatch[0] + '/embed/simple')
            .attr('width', '600').attr('height', '600')
            .attr('class', 'vine-embed');
      } else if (vimMatch && vimMatch[3].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
            .attr('width', '640').attr('height', '360');
      } else if (dmMatch && dmMatch[2].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
            .attr('width', '640').attr('height', '360');
      } else if (youkuMatch && youkuMatch[1].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '498')
            .attr('width', '510')
            .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
      } else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
        var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1]:qqMatch2[2]);
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '310')
            .attr('width', '500')
            .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
      } else if (mp4Match || oggMatch || webmMatch) {
        $video = $('<video controls>')
            .attr('src', url)
            .attr('width', '640').attr('height', '360');
      } else {
        // this is not a known video link. Now what, Cat? Now what?
        return false;
      }

      $video.addClass('note-video-clip');

      return $video[0];
    };

    this.show = function () {
      var text = context.invoke('editor.getSelectedText');
      context.invoke('editor.saveRange');
      this.showVideoDialog(text).then(function (url) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        // build node
        var $node = self.createVideoNode(url);

        if ($node) {
          // insert video node
          context.invoke('editor.insertNode', $node);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showVideoDialog = function (text) {
      return $.Deferred(function (deferred) {
        var $videoUrl = self.$dialog.find('.note-video-url'),
            $videoBtn = self.$dialog.find('.note-video-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          $videoUrl.val(text).on('input', function () {
            ui.toggleBtn($videoBtn, $videoUrl.val());
          }).trigger('focus');

          $videoBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($videoUrl.val());
          });

          self.bindEnterKey($videoUrl, $videoBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $videoUrl.off('input');
          $videoBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };

  var HelpDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.createShortCutList = function () {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      return Object.keys(keyMap).map(function (key) {
        var command = keyMap[key];
        var $row = $('<div><div class="help-list-item"/></div>');
        $row.append($('<label><kbd>' + key + '</kdb></label>').css({
          'width': 180,
          'margin-right': 10
        })).append($('<span/>').html(context.memo('help.' + command) || command));
        return $row.html();
      }).join('');
    };

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = [
        '<p class="text-center">',
        '<a href="http://summernote.org/" target="_blank">Summernote 0.8.7</a> · ',
        '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
        '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
        '</p>'
      ].join('');

      this.$dialog = ui.dialog({
        title: lang.options.help,
        fade: options.dialogsFade,
        body: this.createShortCutList(),
        footer: body,
        callback: function ($node) {
          $node.find('.modal-body').css({
            'max-height': 300,
            'overflow': 'scroll'
          });
        }
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    /**
     * show help dialog
     *
     * @return {Promise}
     */
    this.showHelpDialog = function () {
      return $.Deferred(function (deferred) {
        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');
          deferred.resolve();
        });
        ui.showDialog(self.$dialog);
      }).promise();
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showHelpDialog().then(function () {
        context.invoke('editor.restoreRange');
      });
    };
  };

  var AirPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    var AIR_MODE_POPOVER_X_OFFSET = 20;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.change summernote.dialog.shown': function () {
        self.hide();
      },
      'summernote.focusout': function (we, e) {
        // [workaround] Firefox doesn't support relatedTarget on focusout
        //  - Ignore hide action on focus out in FF.
        if (agent.isFF) {
          return;
        }

        if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(self.$popover[0]))) {
          self.hide();
        }
      }
    };

    this.shouldInitialize = function () {
      return options.airMode && !list.isEmpty(options.popover.air);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-air-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.air);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      var styleInfo = context.invoke('editor.currentStyle');
      if (styleInfo.range && !styleInfo.range.isCollapsed()) {
        var rect = list.last(styleInfo.range.getClientRects());
        if (rect) {
          var bnd = func.rect2bnd(rect);
          this.$popover.css({
            display: 'block',
            left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
            top: bnd.top + bnd.height
          });
        }
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var HintPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var POPOVER_DIST = 5;
    var hint = context.options.hint || [];
    var direction = context.options.hintDirection || 'bottom';
    var hints = $.isArray(hint) ? hint : [hint];

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return hints.length > 0;
    };

    this.initialize = function () {
      this.lastWordRange = null;
      this.$popover = ui.popover({
        className: 'note-hint-popover',
        hideArrow: true,
        direction: ''
      }).render().appendTo('body');

      this.$popover.hide();

      this.$content = this.$popover.find('.popover-content');

      this.$content.on('click', '.note-hint-item', function () {
        self.$content.find('.active').removeClass('active');
        $(this).addClass('active');
        self.replace();
      });
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.selectItem = function ($item) {
      this.$content.find('.active').removeClass('active');
      $item.addClass('active');

      this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
    };

    this.moveDown = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $next = $current.next();

      if ($next.length) {
        this.selectItem($next);
      } else {
        var $nextGroup = $current.parent().next();

        if (!$nextGroup.length) {
          $nextGroup = this.$content.find('.note-hint-group').first();
        }

        this.selectItem($nextGroup.find('.note-hint-item').first());
      }
    };

    this.moveUp = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $prev = $current.prev();

      if ($prev.length) {
        this.selectItem($prev);
      } else {
        var $prevGroup = $current.parent().prev();

        if (!$prevGroup.length) {
          $prevGroup = this.$content.find('.note-hint-group').last();
        }

        this.selectItem($prevGroup.find('.note-hint-item').last());
      }
    };

    this.replace = function () {
      var $item = this.$content.find('.note-hint-item.active');

      if ($item.length) {
        var node = this.nodeFromItem($item);
        // XXX: consider to move codes to editor for recording redo/undo.
        this.lastWordRange.insertNode(node);
        range.createFromNode(node).collapse().select();

        this.lastWordRange = null;
        this.hide();
        context.triggerEvent('change', context.layoutInfo.editable.html(), context.layoutInfo.editable);
        context.invoke('editor.focus');
      }

    };

    this.nodeFromItem = function ($item) {
      var hint = hints[$item.data('index')];
      var item = $item.data('item');
      var node = hint.content ? hint.content(item) : item;
      if (typeof node === 'string') {
        node = dom.createText(node);
      }
      return node;
    };

    this.createItemTemplates = function (hintIdx, items) {
      var hint = hints[hintIdx];
      return items.map(function (item, idx) {
        var $item = $('<div class="note-hint-item"/>');
        $item.append(hint.template ? hint.template(item) : item + '');
        $item.data({
          'index': hintIdx,
          'item': item
        });

        if (hintIdx === 0 && idx === 0) {
          $item.addClass('active');
        }
        return $item;
      });
    };

    this.handleKeydown = function (e) {
      if (!this.$popover.is(':visible')) {
        return;
      }

      if (e.keyCode === key.code.ENTER) {
        e.preventDefault();
        this.replace();
      } else if (e.keyCode === key.code.UP) {
        e.preventDefault();
        this.moveUp();
      } else if (e.keyCode === key.code.DOWN) {
        e.preventDefault();
        this.moveDown();
      }
    };

    this.searchKeyword = function (index, keyword, callback) {
      var hint = hints[index];
      if (hint && hint.match.test(keyword) && hint.search) {
        var matches = hint.match.exec(keyword);
        hint.search(matches[1], callback);
      } else {
        callback();
      }
    };

    this.createGroup = function (idx, keyword) {
      var $group = $('<div class="note-hint-group note-hint-group-' + idx + '"/>');
      this.searchKeyword(idx, keyword, function (items) {
        items = items || [];
        if (items.length) {
          $group.html(self.createItemTemplates(idx, items));
          self.show();
        }
      });

      return $group;
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
        if (e.keyCode === key.code.ENTER) {
          if (this.$popover.is(':visible')) {
            return;
          }
        }
      } else {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        var keyword = wordRange.toString();
        if (hints.length && keyword) {
          this.$content.empty();

          var bnd = func.rect2bnd(list.last(wordRange.getClientRects()));
          if (bnd) {

            this.$popover.hide();

            this.lastWordRange = wordRange;

            hints.forEach(function (hint, idx) {
              if (hint.match.test(keyword)) {
                self.createGroup(idx, keyword).appendTo(self.$content);
              }
            });

            // set position for popover after group is created
            if (direction === 'top') {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
              });
            } else {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top + bnd.height + POPOVER_DIST
              });
            }

          }
        } else {
          this.hide();
        }
      }
    };

    this.show = function () {
      this.$popover.show();
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };


  $.summernote = $.extend($.summernote, {
    version: '0.8.7',
    ui: ui,
    dom: dom,

    plugins: {},

    options: {
      modules: {
        'editor': Editor,
        'clipboard': Clipboard,
        'dropzone': Dropzone,
        'codeview': Codeview,
        'statusbar': Statusbar,
        'fullscreen': Fullscreen,
        'handle': Handle,
        // FIXME: HintPopover must be front of autolink
        //  - Script error about range when Enter key is pressed on hint popover
        'hintPopover': HintPopover,
        'autoLink': AutoLink,
        'autoSync': AutoSync,
        'placeholder': Placeholder,
        'buttons': Buttons,
        'toolbar': Toolbar,
        'linkDialog': LinkDialog,
        'linkPopover': LinkPopover,
        'imageDialog': ImageDialog,
        'imagePopover': ImagePopover,
        'tablePopover': TablePopover,
        'videoDialog': VideoDialog,
        'helpDialog': HelpDialog,
        'airPopover': AirPopover
      },

      buttons: {},

      lang: 'en-US',

      // toolbar
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ],

      // popover
      popover: {
        image: [
          ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
          ['float', ['floatLeft', 'floatRight', 'floatNone']],
          ['remove', ['removeMedia']]
        ],
        link: [
          ['link', ['linkDialogShow', 'unlink']]
        ],
        table: [
          ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
          ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
        ],
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']],
          ['para', ['ul', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture']]
        ]
      },

      // air mode: inline editor
      airMode: false,

      width: null,
      height: null,
      linkTargetBlank: true,

      focus: false,
      tabSize: 4,
      styleWithSpan: true,
      shortcuts: true,
      textareaAutoSync: true,
      direction: null,
      tooltip: 'auto',

      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

      fontNames: [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
        'Tahoma', 'Times New Roman', 'Verdana'
      ],

      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

      // pallete colors(n x n)
      colors: [
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
      ],

      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

      tableClassName: 'table table-bordered',

      insertTableMaxSize: {
        col: 10,
        row: 10
      },

      dialogsInBody: false,
      dialogsFade: false,

      maximumImageFileSize: null,

      callbacks: {
        onInit: null,
        onFocus: null,
        onBlur: null,
        onEnter: null,
        onKeyup: null,
        onKeydown: null,
        onImageUpload: null,
        onImageUploadError: null
      },

      codemirror: {
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true
      },

      keyMap: {
        pc: {
          'ENTER': 'insertParagraph',
          'CTRL+Z': 'undo',
          'CTRL+Y': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CTRL+B': 'bold',
          'CTRL+I': 'italic',
          'CTRL+U': 'underline',
          'CTRL+SHIFT+S': 'strikethrough',
          'CTRL+BACKSLASH': 'removeFormat',
          'CTRL+SHIFT+L': 'justifyLeft',
          'CTRL+SHIFT+E': 'justifyCenter',
          'CTRL+SHIFT+R': 'justifyRight',
          'CTRL+SHIFT+J': 'justifyFull',
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
          'CTRL+SHIFT+NUM8': 'insertOrderedList',
          'CTRL+LEFTBRACKET': 'outdent',
          'CTRL+RIGHTBRACKET': 'indent',
          'CTRL+NUM0': 'formatPara',
          'CTRL+NUM1': 'formatH1',
          'CTRL+NUM2': 'formatH2',
          'CTRL+NUM3': 'formatH3',
          'CTRL+NUM4': 'formatH4',
          'CTRL+NUM5': 'formatH5',
          'CTRL+NUM6': 'formatH6',
          'CTRL+ENTER': 'insertHorizontalRule',
          'CTRL+K': 'linkDialog.show'
        },

        mac: {
          'ENTER': 'insertParagraph',
          'CMD+Z': 'undo',
          'CMD+SHIFT+Z': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CMD+B': 'bold',
          'CMD+I': 'italic',
          'CMD+U': 'underline',
          'CMD+SHIFT+S': 'strikethrough',
          'CMD+BACKSLASH': 'removeFormat',
          'CMD+SHIFT+L': 'justifyLeft',
          'CMD+SHIFT+E': 'justifyCenter',
          'CMD+SHIFT+R': 'justifyRight',
          'CMD+SHIFT+J': 'justifyFull',
          'CMD+SHIFT+NUM7': 'insertUnorderedList',
          'CMD+SHIFT+NUM8': 'insertOrderedList',
          'CMD+LEFTBRACKET': 'outdent',
          'CMD+RIGHTBRACKET': 'indent',
          'CMD+NUM0': 'formatPara',
          'CMD+NUM1': 'formatH1',
          'CMD+NUM2': 'formatH2',
          'CMD+NUM3': 'formatH3',
          'CMD+NUM4': 'formatH4',
          'CMD+NUM5': 'formatH5',
          'CMD+NUM6': 'formatH6',
          'CMD+ENTER': 'insertHorizontalRule',
          'CMD+K': 'linkDialog.show'
        }
      },
      icons: {
        'align': 'note-icon-align',
        'alignCenter': 'note-icon-align-center',
        'alignJustify': 'note-icon-align-justify',
        'alignLeft': 'note-icon-align-left',
        'alignRight': 'note-icon-align-right',
        'rowBelow': 'note-icon-row-below',
        'colBefore': 'note-icon-col-before',
        'colAfter': 'note-icon-col-after',
        'rowAbove': 'note-icon-row-above',
        'rowRemove': 'note-icon-row-remove',
        'colRemove': 'note-icon-col-remove',
        'indent': 'note-icon-align-indent',
        'outdent': 'note-icon-align-outdent',
        'arrowsAlt': 'note-icon-arrows-alt',
        'bold': 'note-icon-bold',
        'caret': 'note-icon-caret',
        'circle': 'note-icon-circle',
        'close': 'note-icon-close',
        'code': 'note-icon-code',
        'eraser': 'note-icon-eraser',
        'font': 'note-icon-font',
        'frame': 'note-icon-frame',
        'italic': 'note-icon-italic',
        'link': 'note-icon-link',
        'unlink': 'note-icon-chain-broken',
        'magic': 'note-icon-magic',
        'menuCheck': 'note-icon-check',
        'minus': 'note-icon-minus',
        'orderedlist': 'note-icon-orderedlist',
        'pencil': 'note-icon-pencil',
        'picture': 'note-icon-picture',
        'question': 'note-icon-question',
        'redo': 'note-icon-redo',
        'square': 'note-icon-square',
        'strikethrough': 'note-icon-strikethrough',
        'subscript': 'note-icon-subscript',
        'superscript': 'note-icon-superscript',
        'table': 'note-icon-table',
        'textHeight': 'note-icon-text-height',
        'trash': 'note-icon-trash',
        'underline': 'note-icon-underline',
        'undo': 'note-icon-undo',
        'unorderedlist': 'note-icon-unorderedlist',
        'video': 'note-icon-video'
      }
    }
  });

}));

/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof module&&module.exports?module.exports=b():a.numeral=b()}(this,function(){function a(a,b){this._input=a,this._value=b}var b,c,d="2.0.6",e={},f={},g={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},h={currentLocale:g.currentLocale,zeroFormat:g.zeroFormat,nullFormat:g.nullFormat,defaultFormat:g.defaultFormat,scalePercentBy100:g.scalePercentBy100};return b=function(d){var f,g,i,j;if(b.isNumeral(d))f=d.value();else if(0===d||"undefined"==typeof d)f=0;else if(null===d||c.isNaN(d))f=null;else if("string"==typeof d)if(h.zeroFormat&&d===h.zeroFormat)f=0;else if(h.nullFormat&&d===h.nullFormat||!d.replace(/[^0-9]+/g,"").length)f=null;else{for(g in e)if(j="function"==typeof e[g].regexps.unformat?e[g].regexps.unformat():e[g].regexps.unformat,j&&d.match(j)){i=e[g].unformat;break}i=i||b._.stringToNumber,f=i(d)}else f=Number(d)||null;return new a(d,f)},b.version=d,b.isNumeral=function(b){return b instanceof a},b._=c={numberToFormat:function(a,c,d){var e,g,h,i,j,k,l,m=f[b.options.currentLocale],n=!1,o=!1,p=0,q="",r=1e12,s=1e9,t=1e6,u=1e3,v="",w=!1;if(a=a||0,g=Math.abs(a),b._.includes(c,"(")?(n=!0,c=c.replace(/[\(|\)]/g,"")):(b._.includes(c,"+")||b._.includes(c,"-"))&&(j=b._.includes(c,"+")?c.indexOf("+"):0>a?c.indexOf("-"):-1,c=c.replace(/[\+|\-]/g,"")),b._.includes(c,"a")&&(e=c.match(/a(k|m|b|t)?/),e=e?e[1]:!1,b._.includes(c," a")&&(q=" "),c=c.replace(new RegExp(q+"a[kmbt]?"),""),g>=r&&!e||"t"===e?(q+=m.abbreviations.trillion,a/=r):r>g&&g>=s&&!e||"b"===e?(q+=m.abbreviations.billion,a/=s):s>g&&g>=t&&!e||"m"===e?(q+=m.abbreviations.million,a/=t):(t>g&&g>=u&&!e||"k"===e)&&(q+=m.abbreviations.thousand,a/=u)),b._.includes(c,"[.]")&&(o=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],k=c.indexOf(","),p=(c.split(".")[0].split(",")[0].match(/0/g)||[]).length,i?(b._.includes(i,"[")?(i=i.replace("]",""),i=i.split("["),v=b._.toFixed(a,i[0].length+i[1].length,d,i[1].length)):v=b._.toFixed(a,i.length,d),h=v.split(".")[0],v=b._.includes(v,".")?m.delimiters.decimal+v.split(".")[1]:"",o&&0===Number(v.slice(1))&&(v="")):h=b._.toFixed(a,0,d),q&&!e&&Number(h)>=1e3&&q!==m.abbreviations.trillion)switch(h=String(Number(h)/1e3),q){case m.abbreviations.thousand:q=m.abbreviations.million;break;case m.abbreviations.million:q=m.abbreviations.billion;break;case m.abbreviations.billion:q=m.abbreviations.trillion}if(b._.includes(h,"-")&&(h=h.slice(1),w=!0),h.length<p)for(var x=p-h.length;x>0;x--)h="0"+h;return k>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===c.indexOf(".")&&(h=""),l=h+v+(q?q:""),n?l=(n&&w?"(":"")+l+(n&&w?")":""):j>=0?l=0===j?(w?"-":"+")+l:l+(w?"-":"+"):w&&(l="-"+l),l},stringToNumber:function(a){var b,c,d,e=f[h.currentLocale],g=a,i={thousand:3,million:6,billion:9,trillion:12};if(h.zeroFormat&&a===h.zeroFormat)c=0;else if(h.nullFormat&&a===h.nullFormat||!a.replace(/[^0-9]+/g,"").length)c=null;else{c=1,"."!==e.delimiters.decimal&&(a=a.replace(/\./g,"").replace(e.delimiters.decimal,"."));for(b in i)if(d=new RegExp("[^a-zA-Z]"+e.abbreviations[b]+"(?:\\)|(\\"+e.currency.symbol+")?(?:\\))?)?$"),g.match(d)){c*=Math.pow(10,i[b]);break}c*=(a.split("-").length+Math.min(a.split("(").length-1,a.split(")").length-1))%2?1:-1,a=a.replace(/[^0-9\.]+/g,""),c*=Number(a)}return c},isNaN:function(a){return"number"==typeof a&&isNaN(a)},includes:function(a,b){return-1!==a.indexOf(b)},insert:function(a,b,c){return a.slice(0,c)+b+a.slice(c)},reduce:function(a,b){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof b)throw new TypeError(b+" is not a function");var c,d=Object(a),e=d.length>>>0,f=0;if(3===arguments.length)c=arguments[2];else{for(;e>f&&!(f in d);)f++;if(f>=e)throw new TypeError("Reduce of empty array with no initial value");c=d[f++]}for(;e>f;f++)f in d&&(c=b(c,d[f],f,d));return c},multiplier:function(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)},correctionFactor:function(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var d=c.multiplier(b);return a>d?a:d},1)},toFixed:function(a,b,c,d){var e,f,g,h,i=a.toString().split("."),j=b-(d||0);return e=2===i.length?Math.min(Math.max(i[1].length,j),b):j,g=Math.pow(10,e),h=(c(a+"e+"+e)/g).toFixed(e),d>b-e&&(f=new RegExp("\\.?0{1,"+(d-(b-e))+"}$"),h=h.replace(f,"")),h}},b.options=h,b.formats=e,b.locales=f,b.locale=function(a){return a&&(h.currentLocale=a.toLowerCase()),h.currentLocale},b.localeData=function(a){if(!a)return f[h.currentLocale];if(a=a.toLowerCase(),!f[a])throw new Error("Unknown locale : "+a);return f[a]},b.reset=function(){for(var a in g)h[a]=g[a]},b.zeroFormat=function(a){h.zeroFormat="string"==typeof a?a:null},b.nullFormat=function(a){h.nullFormat="string"==typeof a?a:null},b.defaultFormat=function(a){h.defaultFormat="string"==typeof a?a:"0.0"},b.register=function(a,b,c){if(b=b.toLowerCase(),this[a+"s"][b])throw new TypeError(b+" "+a+" already registered.");return this[a+"s"][b]=c,c},b.validate=function(a,c){var d,e,f,g,h,i,j,k;if("string"!=typeof a&&(a+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",a)),a=a.trim(),a.match(/^\d+$/))return!0;if(""===a)return!1;try{j=b.localeData(c)}catch(l){j=b.localeData(b.locale())}return f=j.currency.symbol,h=j.abbreviations,d=j.delimiters.decimal,e="."===j.delimiters.thousands?"\\.":j.delimiters.thousands,k=a.match(/^[^\d]+/),null!==k&&(a=a.substr(1),k[0]!==f)?!1:(k=a.match(/[^\d]+$/),null!==k&&(a=a.slice(0,-1),k[0]!==h.thousand&&k[0]!==h.million&&k[0]!==h.billion&&k[0]!==h.trillion)?!1:(i=new RegExp(e+"{2}"),a.match(/[^\d.,]/g)?!1:(g=a.split(d),g.length>2?!1:g.length<2?!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i):1===g[0].length?!!g[0].match(/^\d+$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/):!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/))))},b.fn=a.prototype={clone:function(){return b(this)},format:function(a,c){var d,f,g,i=this._value,j=a||h.defaultFormat;if(c=c||Math.round,0===i&&null!==h.zeroFormat)f=h.zeroFormat;else if(null===i&&null!==h.nullFormat)f=h.nullFormat;else{for(d in e)if(j.match(e[d].regexps.format)){g=e[d].format;break}g=g||b._.numberToFormat,f=g(i,j,c)}return f},value:function(){return this._value},input:function(){return this._input},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b,c,e){return a+Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([this._value,a],b,0)/d,this},subtract:function(a){function b(a,b,c,e){return a-Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([a],b,Math.round(this._value*d))/d,this},multiply:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)*Math.round(b*f)/Math.round(f*f)}return this._value=c.reduce([this._value,a],b,1),this},divide:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)/Math.round(b*f)}return this._value=c.reduce([this._value,a],b),this},difference:function(a){return Math.abs(b(this._value).subtract(a).value())}},b.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),function(){b.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(a,c,d){var e,f=b._.includes(c," BPS")?" ":"";return a=1e4*a,c=c.replace(/\s?BPS/,""),e=b._.numberToFormat(a,c,d),b._.includes(e,")")?(e=e.split(""),e.splice(-1,0,f+"BPS"),e=e.join("")):e=e+f+"BPS",e},unformat:function(a){return+(1e-4*b._.stringToNumber(a)).toFixed(15)}})}(),function(){var a={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},c={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},d=a.suffixes.concat(c.suffixes.filter(function(b){return a.suffixes.indexOf(b)<0})),e=d.join("|");e="("+e.replace("B","B(?!PS)")+")",b.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(e)},format:function(d,e,f){var g,h,i,j,k=b._.includes(e,"ib")?c:a,l=b._.includes(e," b")||b._.includes(e," ib")?" ":"";for(e=e.replace(/\s?i?b/,""),h=0;h<=k.suffixes.length;h++)if(i=Math.pow(k.base,h),j=Math.pow(k.base,h+1),null===d||0===d||d>=i&&j>d){l+=k.suffixes[h],i>0&&(d/=i);break}return g=b._.numberToFormat(d,e,f),g+l},unformat:function(d){var e,f,g=b._.stringToNumber(d);if(g){for(e=a.suffixes.length-1;e>=0;e--){if(b._.includes(d,a.suffixes[e])){f=Math.pow(a.base,e);break}if(b._.includes(d,c.suffixes[e])){f=Math.pow(c.base,e);break}}g*=f||1}return g}})}(),function(){b.register("format","currency",{regexps:{format:/(\$)/},format:function(a,c,d){var e,f,g,h=b.locales[b.options.currentLocale],i={before:c.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:c.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(c=c.replace(/\s?\$\s?/,""),e=b._.numberToFormat(a,c,d),a>=0?(i.before=i.before.replace(/[\-\(]/,""),i.after=i.after.replace(/[\-\)]/,"")):0>a&&!b._.includes(i.before,"-")&&!b._.includes(i.before,"(")&&(i.before="-"+i.before),g=0;g<i.before.length;g++)switch(f=i.before[g]){case"$":e=b._.insert(e,h.currency.symbol,g);break;case" ":e=b._.insert(e," ",g+h.currency.symbol.length-1)}for(g=i.after.length-1;g>=0;g--)switch(f=i.after[g]){case"$":e=g===i.after.length-1?e+h.currency.symbol:b._.insert(e,h.currency.symbol,-(i.after.length-(1+g)));break;case" ":e=g===i.after.length-1?e+" ":b._.insert(e," ",-(i.after.length-(1+g)+h.currency.symbol.length-1))}return e}})}(),function(){b.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(a,c,d){var e,f="number"!=typeof a||b._.isNaN(a)?"0e+0":a.toExponential(),g=f.split("e");return c=c.replace(/e[\+|\-]{1}0/,""),e=b._.numberToFormat(Number(g[0]),c,d),e+"e"+g[1]},unformat:function(a){function c(a,c,d,e){var f=b._.correctionFactor(a,c),g=a*f*(c*f)/(f*f);return g}var d=b._.includes(a,"e+")?a.split("e+"):a.split("e-"),e=Number(d[0]),f=Number(d[1]);return f=b._.includes(a,"e-")?f*=-1:f,b._.reduce([e,Math.pow(10,f)],c,1)}})}(),function(){b.register("format","ordinal",{regexps:{format:/(o)/},format:function(a,c,d){var e,f=b.locales[b.options.currentLocale],g=b._.includes(c," o")?" ":"";return c=c.replace(/\s?o/,""),g+=f.ordinal(a),e=b._.numberToFormat(a,c,d),e+g}})}(),function(){b.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(a,c,d){var e,f=b._.includes(c," %")?" ":"";return b.options.scalePercentBy100&&(a=100*a),c=c.replace(/\s?\%/,""),e=b._.numberToFormat(a,c,d),b._.includes(e,")")?(e=e.split(""),e.splice(-1,0,f+"%"),e=e.join("")):e=e+f+"%",e},unformat:function(a){var c=b._.stringToNumber(a);return b.options.scalePercentBy100?.01*c:c}})}(),function(){b.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(a,b,c){var d=Math.floor(a/60/60),e=Math.floor((a-60*d*60)/60),f=Math.round(a-60*d*60-60*e);return d+":"+(10>e?"0"+e:e)+":"+(10>f?"0"+f:f)},unformat:function(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}})}(),b});