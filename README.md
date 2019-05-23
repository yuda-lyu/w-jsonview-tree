# w-jsonview-tree
A support package for web developer.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) [![npm version](http://img.shields.io/npm/v/w-jsonview-tree.svg?style=flat)](https://npmjs.org/package/w-jsonview-tree) [![Build Status](https://travis-ci.org/yuda-lyu/w-jsonview-tree.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-jsonview-tree) [![npm download](https://img.shields.io/npm/dt/w-jsonview-tree.svg)](https://npmjs.org/package/w-jsonview-tree) [![license](https://img.shields.io/npm/l/w-jsonview-tree.svg?style=flat)](https://npmjs.org/package/w-jsonview-tree)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-jsonview-tree/global.html).

## Example
To view some examples for more understanding, visit examples:
> **small data:** [ex-small.html](https://yuda-lyu.github.io/w-jsonview-tree/examples/ex-small.html) [[source code](https://github.com/yuda-lyu/w-jsonview-tree/blob/master/docs/examples/ex-small.html)]

> **large data:** [ex-large.html](https://yuda-lyu.github.io/w-jsonview-tree/examples/ex-large.html) [[source code](https://github.com/yuda-lyu/w-jsonview-tree/blob/master/docs/examples/ex-large.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-jsonview-tree does't depend on any package.
```alias
npm i w-jsonview-tree
...
import jv from 'w-jsonview-tree'
let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')
jv(data, element, {expanded:true})
```

### In a browser(UMD module):
Add script for w-jsonview-tree.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-jsonview-tree@1.0.3/dist/w-jsonview-tree.umd.js"></script>
...
let jv=window['w-jsonview-tree']
let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')
jv(data, element, {expanded:true})
```
