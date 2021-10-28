---
title: Rollup官网文档阅读总结
date: 2021-10-18 20:05:19
tags: 
  - rollup
categories:
  - 工具
---



## 介绍

### 安装

```bash
npm install --global rollup
```

> >See [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) and [rollup-starter-app](https://github.com/rollup/rollup-starter-app) to see example library and application projects using Rollup

For browsers:

```bash
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife
```
<!--more-->
For Node.js:

```bash
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
```

For both browsers and Node.js:

```bash
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```

### why

**Rollup allows you to write your code using the new module system, and will then compile it back down to existing supported formats such as CommonJS modules, AMD modules, and IIFE-style scripts.** This means that you get to *write future-proof code*, and you also get the tremendous benefits of…

翻译过来就是：Rollup允许用esm语法写代码，然后编译成cjs,amd,iife等格式

### Tree-Shaking

Rollup可以Tree-Shakinig

### Compatibility (兼容)

Rollup可以借助插件import CommonJS模块，也可以将代码编译成UMD或者CommonJS格式，给Node和webpack使用。

## 命令行接口

### 配置文件

```javascript
// rollup.config.js,如果配置文件想写成cjs格式，可以将后缀名改成 **.cjs**
export default {
	input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    }
}
```

支持的配置项

```javascript
// rollup.config.js

// can be an array (for multiple inputs)
export default {
  // core input options
  external,
  input, // conditionally required
  plugins,

  // advanced input options
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // danger zone
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // experimental
  experimentalCacheExpiry,
  perf,

  // required (can be an array, for multiple outputs)
  output: {
    // core output options
    dir,
    file,
    format, // required
    globals,
    name,
    plugins,

    // advanced output options
    assetFileNames,
    banner,
    chunkFileNames,
    compact,
    entryFileNames,
    extend,
    footer,
    hoistTransitiveImports,
    inlineDynamicImports,
    interop,
    intro,
    manualChunks,
    minifyInternalExports,
    outro,
    paths,
    preserveModules,
    preserveModulesRoot,
    sourcemap,
    sourcemapExcludeSources,
    sourcemapFile,
    sourcemapPathTransform,
    validate,

    // danger zone
    amd,
    esModule,
    exports,
    externalLiveBindings,
    freeze,
    indent,
    namespaceToStringTag,
    noConflict,
    preferConst,
    sanitizeFileName,
    strict,
    systemNullSetters
  },

  watch: {
    buildDelay,
    chokidar,
    clearScreen,
    skipWrite,
    exclude,
    include
  }
};
```

You can export an **array** from your config file to build bundles from several unrelated inputs at once, even in watch mode. To build different bundles with the same input, you supply an array of output options for each input:

```javascript
// rollup.config.js (building more than one bundle)

export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs'
    }
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es'
      }
    ]
  }
];
```

```bash
# pass a custom config file location to Rollup
rollup --config my.config.js

# if you do not pass a file name, Rollup will try to load
# configuration files in the following order:
# rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
rollup --config
```

自定义配置项

```javascript
// rollup.config.js
import defaultConfig from './rollup.default.config.js';
import debugConfig from './rollup.debug.config.js';

export default commandLineArgs => {
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
};
```

忽略命令行配置项

```javascript
// rollup.config.js
export default commandLineArgs => {
  const inputBase = commandLineArgs.input || 'main.js';

  // this will make Rollup ignore the CLI argument
  delete commandLineArgs.input;
  return {
    input: 'src/entries/' + inputBase,
    output: {...}
  }
}
```

## JavaScript API

[详细接口见原文](https://rollupjs.org/guide/en/#configuration-files)

通过Rollup提供的API，可以使用程序控制rollup的打包。

## ES Module 语法



### importing

```javascript
import { something } from './module.js';

import { something as somethingElse } from './module.js';

import * as module from './module.js';

import something from './module.js';

import './module.js';

import('./modules.js').then(({ default: DefaultExport, NamedExport }) => {
  // do something with modules.
});
```

### exporting

```javascript
const something = true;
export { something };
```

```javascript
export { something as somethingElse };
```

```js
// this works with `var`, `let`, `const`, `class`, and `function`
export const something = true;
```

```js
export default something;
```

ES modules export *live bindings*, not values, so values can be changed after they are initially imported as per [this demo](https://rollupjs.org/repl/?shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmltcG9ydCUyMCU3QiUyMGNvdW50JTJDJTIwaW5jcmVtZW50JTIwJTdEJTIwZnJvbSUyMCcuJTJGaW5jcmVtZW50ZXIuanMnJTNCJTVDbiU1Q25jb25zb2xlLmxvZyhjb3VudCklM0IlNUNuaW5jcmVtZW50KCklM0IlNUNuY29uc29sZS5sb2coY291bnQpJTNCJTIyJTdEJTJDJTdCJTIybmFtZSUyMiUzQSUyMmluY3JlbWVudGVyLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmV4cG9ydCUyMGxldCUyMGNvdW50JTIwJTNEJTIwMCUzQiU1Q24lNUNuZXhwb3J0JTIwZnVuY3Rpb24lMjBpbmNyZW1lbnQoKSUyMCU3QiU1Q24lNUN0Y291bnQlMjAlMkIlM0QlMjAxJTNCJTVDbiU3RCUyMiU3RCU1RCUyQyUyMm9wdGlvbnMlMjIlM0ElN0IlMjJmb3JtYXQlMjIlM0ElMjJjanMlMjIlMkMlMjJnbG9iYWxzJTIyJTNBJTdCJTdEJTJDJTIybW9kdWxlSWQlMjIlM0ElMjIlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==):

```js
// incrementer.js
export let count = 0;

export function increment() {
  count += 1;
}
```

```js
// main.js
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1

count += 1; // Error — only incrementer.js can change this
```

## 教程

```bash
rollup --config rollup.config.js
```

### 使用插件

[the Rollup Awesome List](https://github.com/rollup/awesome)

```javascript
// rollup.config.js
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'bundle.js',
      format: 'cjs'
    },
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};
```

### 代码分割 Code Splitting

[代码分割demo](https://github.com/rollup/rollup-starter-code-splitting)

there is a way to explicitly tell Rollup which modules to split into separate chunks via the [`output.manualChunks`](https://rollupjs.org/guide/en/#outputmanualchunks) option.

```javascript
// src/main.js
export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
}
```

```bash
rollup src/main.js -f cjs -d dist
```

## 插件开发

[【插件列表】](https://github.com/rollup/awesome)

A Rollup plugin is an object with one or more of the [properties](https://rollupjs.org/guide/en/#properties), [build hooks](https://rollupjs.org/guide/en/#build-hooks), and [output generation hooks](https://rollupjs.org/guide/en/#output-generation-hooks) described below, and which follows our [conventions](https://rollupjs.org/guide/en/#conventions). A plugin should be distributed as a package which exports a function that can be called with plugin specific options and returns such an object.

```javascript
// rollup-plugin-my-example.js
export default function myExample () {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId ( source ) {
      if (source === 'virtual-module') {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load ( id ) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    }
  };
}

// rollup.config.js
import myExample from './rollup-plugin-my-example.js';
export default ({
  input: 'virtual-module', // resolved by our plugin
  plugins: [myExample()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});
```

### Conventions

- Plugins should have a clear name with `rollup-plugin-` prefix.
- Include `rollup-plugin` keyword in `package.json`.
- Plugins should be tested. We recommend [mocha](https://github.com/mochajs/mocha) or [ava](https://github.com/avajs/ava) which support promises out of the box.
- Use asynchronous methods when it is possible.
- Document your plugin in English.
- Make sure your plugin outputs correct source mappings if appropriate.
- If your plugin uses 'virtual modules' (e.g. for helper functions), prefix the module ID with `\0`. This prevents other plugins from trying to process it.

### Build Hooks

