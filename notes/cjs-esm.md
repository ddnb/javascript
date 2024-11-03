# CommonJS (CJS) vs. ES Modules (ESM)

CommonJS (CJS) and ES Modules (ESM) are two different module systems used in JavaScript. Here are the key differences between them:

## 1. Syntax

**CommonJS:**

- Uses `require()` for importing modules and `module.exports` for exporting.

```javascript
  // Exporting in CommonJS
  function greet() {
    console.log("Hello, World!");
  }
  module.exports = greet;

  // Importing in CommonJS
  const greet = require('./greet');
```

**ES Modules:**

- Uses import for importing modules and export for exporting.

```javascript
// Exporting in ES Modules
export function greet() {
  console.log("Hello, World!");
}

// Importing in ES Modules
import { greet } from './greet.js';
```

## 2. Loading Mechanism

- **CommonJS:** Synchronous loading; modules load when `require()` is called. This works well for server-side environments (like Node.js) but may cause performance issues in the browser.

- **ES Modules:** Asynchronous loading, which is optimized for browsers by allowing modules to load in parallel, improving loading times.

## 3. Scope

- **CommonJS:** Each module has its own scope, meaning variables are private unless explicitly exported.

- **ES Modules:** Each module also has its own scope, but `import` and `export` provide a clearer understanding of dependencies.

## 4. File Extension

- **CommonJS:** Generally used with `.js` files but is flexible with extensions.

- **ES Modules:** Typically requires `.mjs` in Node.js unless configured with `"type": "module"` in `package.json`. In browsers, `.js` is usually sufficient.

## 5. Dynamic Import

- **CommonJS:** Dynamic imports use `require()`, but it doesn’t support asynchronous loading directly.

- **ES Modules:** Supports dynamic imports using `import()`, which returns a promise, enabling truly asynchronous module loading.

```javascript
  // Dynamic import in ES Modules
  import('./module.js').then(module => {
    module.default();
  });
```

## 6. Top-Level `this`

- **CommonJS:** At the top level, `this` refers to the module object.

- **ES Modules:** In ES Modules, `this` is `undefined` at the top level.

## Summary

- **CommonJS:** Primarily used in Node.js, synchronous, suitable for server-side applications, but less optimal for the browser.

- **ES Modules:** The standard for modular JavaScript in browsers, increasingly adopted in Node.js, supporting better performance and asynchronous loading.
