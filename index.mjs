// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}var r=require("path").resolve,t=require("@stdlib/fs-read-json").sync,o=r("/home/runner/work/datasets-stopwords-en/datasets-stopwords-en/lib","..","data","words.json"),n={encoding:"utf8"};module.exports=function(){var e=t(o,n);if(e instanceof Error)throw e;return e};var s=e(Object.freeze({__proto__:null}));export{s as default};
//# sourceMappingURL=index.mjs.map
