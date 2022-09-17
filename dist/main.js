(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===a(t)&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(e(1,arguments),!n(t)&&"number"!=typeof t)return!1;var a=r(t);return!isNaN(Number(a))}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function d(t,n){e(2,arguments);var a=r(t).getTime(),o=i(n);return new Date(a+o)}function u(t,n){e(2,arguments);var a=i(n);return d(t,-a)}var l=864e5;function s(t){e(1,arguments);var n=1,a=r(t),o=a.getUTCDay(),i=(o<n?7:0)+o-n;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function c(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=s(o),d=new Date(0);d.setUTCFullYear(a,0,4),d.setUTCHours(0,0,0,0);var u=s(d);return n.getTime()>=i.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function m(t){e(1,arguments);var n=c(t),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=s(a);return r}var h=6048e5,f={};function g(){return f}function v(t,n){var a,o,d,u,l,s,c,m;e(1,arguments);var h=g(),f=i(null!==(a=null!==(o=null!==(d=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==o?o:null===(c=h.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(t),p=v.getUTCDay(),w=(p<f?7:0)+p-f;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function p(t,n){var a,o,d,u,l,s,c,m;e(1,arguments);var h=r(t),f=h.getUTCFullYear(),p=g(),w=i(null!==(a=null!==(o=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==d?d:p.firstWeekContainsDate)&&void 0!==o?o:null===(c=p.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,w),y.setUTCHours(0,0,0,0);var b=v(y,n),C=new Date(0);C.setUTCFullYear(f,0,w),C.setUTCHours(0,0,0,0);var T=v(C,n);return h.getTime()>=b.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function w(t,n){var a,r,o,d,u,l,s,c;e(1,arguments);var m=g(),h=i(null!==(a=null!==(r=null!==(o=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(u=n.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(s=m.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:1),f=p(t,n),w=new Date(0);w.setUTCFullYear(f,0,h),w.setUTCHours(0,0,0,0);var y=v(w,n);return y}var y=6048e5;function b(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const C=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return b("yy"===t?a%100:a,t.length)},T=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},D=function(e,t){return b(e.getUTCDate(),t.length)},k=function(e,t){return b(e.getUTCHours()%12||12,t.length)},E=function(e,t){return b(e.getUTCHours(),t.length)},S=function(e,t){return b(e.getUTCMinutes(),t.length)},M=function(e,t){return b(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return b(Math.floor(a*Math.pow(10,n-3)),t.length)};function L(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+b(o,2)}function U(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):N(e,t)}function N(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+b(Math.floor(r/60),2)+n+b(r%60,2)}const P={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return C(e,t)},Y:function(e,t,n,a){var r=p(e,a),o=r>0?r:1-r;return"YY"===t?b(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):b(o,t.length)},R:function(e,t){return b(c(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return T(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,a,o){var i=function(t,n){e(1,arguments);var a=r(t),o=v(a,n).getTime()-w(a,n).getTime();return Math.round(o/y)+1}(t,o);return"wo"===n?a.ordinalNumber(i,{unit:"week"}):b(i,n.length)},I:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=s(n).getTime()-m(n).getTime();return Math.round(a/h)+1}(t);return"Io"===n?a.ordinalNumber(o,{unit:"week"}):b(o,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):D(e,t)},D:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=a-o;return Math.floor(i/l)+1}(t);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):b(o,n.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return b(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return b(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return k(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):b(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):S(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):M(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return U(r);case"XXXX":case"XX":return N(r);default:return N(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return U(r);case"xxxx":case"xx":return N(r);default:return N(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+N(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+N(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return b(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return b((a._originalDate||e).getTime(),t.length)}};var W=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},q=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Y={p:q,P:function(e,t){var n,a=e.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return W(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",W(r,t)).replace("{{time}}",q(o,t))}};const O=Y;function j(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var A=["D","DD"],F=["YY","YYYY"];function H(e){return-1!==A.indexOf(e)}function z(e){return-1!==F.indexOf(e)}function X(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var G,R={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},I={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[d]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function $(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,d=o[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?_(u,(function(e){return e.test(d)})):Z(u,(function(e){return e.test(d)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var s=t.slice(d.length);return{value:i,rest:s}}}function Z(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function _(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const V={code:"en-US",formatDistance:function(e,t,n){var a,r=B[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:R,formatRelative:function(e,t,n,a){return I[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(G.matchPattern);if(!n)return null;var a=n[0],r=e.match(G.parsePattern);if(!r)return null;var o=G.valueCallback?G.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(a.length);return{value:o,rest:i}}),era:$({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:$({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:$({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:$({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ne=/''/g,ae=/[a-zA-Z]/;function re(t,n,a){var d,l,s,c,m,h,f,v,p,w,y,b,C,T,D,k,E,S;e(2,arguments);var M=String(n),x=g(),L=null!==(d=null!==(l=null==a?void 0:a.locale)&&void 0!==l?l:x.locale)&&void 0!==d?d:V,U=i(null!==(s=null!==(c=null!==(m=null!==(h=null==a?void 0:a.firstWeekContainsDate)&&void 0!==h?h:null==a||null===(f=a.locale)||void 0===f||null===(v=f.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==m?m:x.firstWeekContainsDate)&&void 0!==c?c:null===(p=x.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==s?s:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var N=i(null!==(y=null!==(b=null!==(C=null!==(T=null==a?void 0:a.weekStartsOn)&&void 0!==T?T:null==a||null===(D=a.locale)||void 0===D||null===(k=D.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==C?C:x.weekStartsOn)&&void 0!==b?b:null===(E=x.locale)||void 0===E||null===(S=E.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==y?y:0);if(!(N>=0&&N<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var W=r(t);if(!o(W))throw new RangeError("Invalid time value");var q=j(W),Y=u(W,q),A={firstWeekContainsDate:U,weekStartsOn:N,locale:L,_originalDate:W},F=M.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,O[t])(e,L.formatLong):e})).join("").match(K).map((function(e){if("''"===e)return"'";var r=e[0];if("'"===r)return oe(e);var o=P[r];if(o)return null!=a&&a.useAdditionalWeekYearTokens||!z(e)||X(e,n,String(t)),null!=a&&a.useAdditionalDayOfYearTokens||!H(e)||X(e,n,String(t)),o(Y,e,L.localize,A);if(r.match(ae))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("");return F}function oe(e){var t=e.match(te);return t?t[1].replace(ne,"'"):e}function ie(t,n){var a,o,d,u,l,s,c,m;e(1,arguments);var h=g(),f=i(null!==(a=null!==(o=null!==(d=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==o?o:null===(c=h.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(t),p=v.getDay(),w=(p<f?7:0)+p-f;return v.setDate(v.getDate()-w),v.setHours(0,0,0,0),v}function de(t,n,a){e(2,arguments);var r=ie(t,a),o=ie(n,a);return r.getTime()===o.getTime()}Math.pow(10,8);var ue=36e5;function le(t,n){var a;e(1,arguments);var r=i(null!==(a=null==n?void 0:n.additionalDigits)&&void 0!==a?a:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,d=fe(t);if(d.date){var u=ge(d.date,r);o=ve(u.restDateString,u.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l,s=o.getTime(),c=0;if(d.time&&(c=we(d.time),isNaN(c)))return new Date(NaN);if(!d.timezone){var m=new Date(s+c),h=new Date(0);return h.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),h.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),h}return l=be(d.timezone),isNaN(l)?new Date(NaN):new Date(s+c+l)}var se={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ce=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,me=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,he=/^([+-])(\d{2})(?::?(\d{2}))?$/;function fe(e){var t,n={},a=e.split(se.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?t=a[0]:(n.date=a[0],t=a[1],se.timeZoneDelimiter.test(n.date)&&(n.date=e.split(se.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=se.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function ge(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:NaN,restDateString:""};var r=a[1]?parseInt(a[1]):null,o=a[2]?parseInt(a[2]):null;return{year:null===o?r:100*o,restDateString:e.slice((a[1]||a[2]).length)}}function ve(e,t){if(null===t)return new Date(NaN);var n=e.match(ce);if(!n)return new Date(NaN);var a=!!n[4],r=pe(n[1]),o=pe(n[2])-1,i=pe(n[3]),d=pe(n[4]),u=pe(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,u)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(t,d,u):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Ce[t]||(Te(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(Te(e)?366:365)}(t,r)?(l.setUTCFullYear(t,o,Math.max(r,i)),l):new Date(NaN)}function pe(e){return e?parseInt(e):1}function we(e){var t=e.match(me);if(!t)return NaN;var n=ye(t[1]),a=ye(t[2]),r=ye(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,r)?n*ue+6e4*a+1e3*r:NaN}function ye(e){return e&&parseFloat(e.replace(",","."))||0}function be(e){if("Z"===e)return 0;var t=e.match(he);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(a*ue+6e4*r):NaN}var Ce=[31,null,31,30,31,30,31,31,30,31,30,31];function Te(e){return e%400==0||e%4==0&&e%100!=0}let De=[],ke=[];class Ee{constructor(e){this.title=e,this.tasks=[]}}class Se{constructor(e,t,n){this.name=e,this.date=t,this.priority=n}}const Me=(()=>{const e=document.querySelector(".form-one"),t=document.querySelector(".form-two"),n=document.querySelector("#project-name"),a=document.querySelector(".modal-one"),r=document.querySelector(".modal-two");return{addProjectToDisplay:()=>{e.addEventListener("submit",(e=>{e.preventDefault();let t=new Ee(n.value);var r;r=t,De.push(r),(e=>{const t=document.querySelector(".added-projects"),n=document.createElement("div");n.classList.add("project-button"),t.appendChild(n);const r=document.createElement("button");r.classList.add("select-project"),r.classList.add("time");const o=document.createElement("img");o.setAttribute("src","./icons/tasks.svg");const i=document.createElement("p"),d=document.createElement("button");d.classList.add("delete-project");const u=document.createElement("p");u.textContent="X",d.appendChild(u),r.appendChild(o),r.appendChild(i),n.appendChild(r),n.appendChild(d),t.appendChild(n),a.close(),i.innerHTML=e.title,d.addEventListener("click",(()=>{n.remove();let t=0;De.forEach((n=>{n.title===e.title&&De.splice(t,1),t++}))})),r.addEventListener("click",(()=>{xe.renderProject(e.title),xe.setActivate(r)}))})(t),console.log(De)}))},addTaskToDisplay:()=>{const e=document.querySelector("#task-name"),n=document.querySelector("#date"),a=document.querySelector(".task-priority");t.addEventListener("submit",(t=>{t.preventDefault();let o=new Se(e.value,n.value,a.value);var i;i=o,ke.push(i),(e=>{const t=document.querySelector(".todo"),n=document.createElement("div");n.classList.add("todo-card");const a=document.createElement("p");a.classList.add("todo-card-text");const o=document.createElement("button");o.classList.add("todo-card-delete");const i=document.createElement("p");i.textContent="X",o.appendChild(i),n.appendChild(a),n.appendChild(o),t.appendChild(n),r.close();const d=document.createElement("span"),u=document.createElement("span"),l=document.createElement("span");var s;d.textContent=e.name,u.textContent=e.date,l.textContent=("low"===(s=e.priority)&&n.classList.add("color-add-low"),"medium"===s&&n.classList.add("color-add-medium"),void("high"===s&&n.classList.add("color-add-high"))),a.appendChild(d),a.appendChild(u),a.appendChild(l),o.addEventListener("click",(()=>{n.remove();let t=0;ke.forEach((n=>{n.name===e.name&&ke.splice(t,1),t++}))}))})(o),console.log(ke)}))}}})(),xe=(()=>{const e=document.querySelector(".todo-container"),t=document.querySelector(".modal-two"),n=document.querySelector(".add-project"),a=document.querySelector(".modal-one"),r=document.querySelector("#all-button"),o=document.querySelector("#day-button"),i=document.querySelector("#week-button"),d=document.querySelectorAll(".closee"),u=document.querySelectorAll(".closeee"),l=document.createElement("div");l.classList.add("todo-title");const s=document.createElement("h1"),c=document.createElement("div");c.classList.add("todo");const m=document.createElement("button");m.classList.add("add-task");const h=document.createElement("img");h.classList.add("icon-img"),h.setAttribute("src","./icons/add.svg"),h.setAttribute("alt","add");const f=document.createElement("p");function g(e){for(;e.firstChild;)e.removeChild(e.firstChild)}f.textContent="Add Task",l.appendChild(s),l.appendChild(c),m.appendChild(h),m.appendChild(f),e.appendChild(l),e.appendChild(m),e.appendChild(c);const v=e=>{document.querySelectorAll(".time").forEach((e=>{e.classList.remove("activate")})),e.classList.add("activate")};return{renderAll:()=>{r.addEventListener("click",(()=>{if(s.textContent="All Tasks",!r.classList.contains("activate")){g(c),v(r);for(let e=0;e<ke.length;e++){const t=document.createElement("div");t.classList.add("todo-card");const n=document.createElement("p");n.classList.add("todo-card-text");const a=document.createElement("button");a.classList.add("todo-card-delete");const r=document.createElement("p");r.textContent="X";const o=document.createElement("span"),i=document.createElement("span"),d=document.createElement("span");a.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(d),t.appendChild(n),t.appendChild(a),c.appendChild(t);const u=e=>{"low"===e&&t.classList.add("color-add-low"),"medium"===e&&t.classList.add("color-add-medium"),"high"===e&&t.classList.add("color-add-high")};o.textContent=ke[e].name,i.textContent=ke[e].date,d.textContent=u(ke[e].priority),a.addEventListener("click",(()=>{t.remove();let n=0;ke.forEach((t=>{t.name===ke[e].name&&t.date===ke[e].date&&ke.splice(n,1),n++}))}))}v(r)}})),s.textContent="All Tasks",v(r)},renderDay:()=>{o.addEventListener("click",(()=>{if(s.textContent="Today's Tasks",!o.classList.contains("activate")){g(c),v(o);for(let e=0;e<ke.length;e++){if(re(new Date,"yyyy-MM-dd")===ke[e].date){const t=document.createElement("div");t.classList.add("todo-card");const n=document.createElement("p");n.classList.add("todo-card-text");const a=document.createElement("button");a.classList.add("todo-card-delete");const r=document.createElement("p");r.textContent="X";const o=document.createElement("span"),i=document.createElement("span"),d=document.createElement("span");a.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(d),t.appendChild(n),t.appendChild(a),c.appendChild(t);const u=e=>{"low"===e&&t.classList.add("color-add-low"),"medium"===e&&t.classList.add("color-add-medium"),"high"===e&&t.classList.add("color-add-high")};o.textContent=ke[e].name,i.textContent=ke[e].date,d.textContent=u(ke[e].priority),a.addEventListener("click",(()=>{t.remove();let n=0;ke.forEach((t=>{t.name===ke[e].name&&t.date===ke[e].date&&ke.splice(n,1),n++}))}))}v(o)}}}))},renderWeek:()=>{i.addEventListener("click",(()=>{if(s.textContent="Week's Tasks",!i.classList.contains("activate")){g(c),v(i);for(let e=0;e<ke.length;e++)if(!0===de(le(re(new Date,"yyyy-MM-dd")),le(ke[e].date))){const t=document.createElement("div");t.classList.add("todo-card");const n=document.createElement("p");n.classList.add("todo-card-text");const a=document.createElement("button");a.classList.add("todo-card-delete");const r=document.createElement("p");r.textContent="X";const o=document.createElement("span"),i=document.createElement("span"),d=document.createElement("span");a.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(d),t.appendChild(n),t.appendChild(a),c.appendChild(t);const u=e=>{"low"===e&&t.classList.add("color-add-low"),"medium"===e&&t.classList.add("color-add-medium"),"high"===e&&t.classList.add("color-add-high")};o.textContent=ke[e].name,i.textContent=ke[e].date,d.textContent=u(ke[e].priority),a.addEventListener("click",(()=>{t.remove();let n=0;ke.forEach((t=>{t.name===ke[e].name&&ke.splice(n,1),n++}))}))}}}))},renderProject:e=>{document.querySelectorAll(".project-button"),s.textContent=`${e}`},addTask:()=>{const e=document.getElementById("task-name"),n=document.getElementById("date"),a=document.querySelector(".task-priority");m.addEventListener("click",(()=>{e.value="",n.value="",a.value="",xe.renderAll(),t.showModal()}))},addProject:()=>{const e=document.getElementById("project-name");n.addEventListener("click",(()=>{e.value="",a.showModal()}))},closeModalOne:()=>{d.forEach((e=>{e.addEventListener("click",(()=>{a.close()}))}))},closeModalTwo:()=>{u.forEach((e=>{e.addEventListener("click",(()=>{t.close()}))}))},setActivate:v}})();(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".side");e.addEventListener("click",(()=>{t.classList.toggle("hide")}))})(),xe.renderAll(),xe.renderDay(),xe.renderWeek(),xe.addTask(),xe.addProject(),xe.closeModalOne(),xe.closeModalTwo(),Me.addProjectToDisplay(),Me.addTaskToDisplay()})();