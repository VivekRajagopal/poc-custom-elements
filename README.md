# poc-custom-elements

Proof of concept of using web [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) as a basis for a common component library that can be consumed by web apps across different frameworks.

[LitElement](https://lit.dev/) is used as tooling to develop, build and publish the custom elements.

The `elements` package must be built before it can be used in the consuming apps (named `app-*`).

## Custom Elements

1. `cd elements`
1. `npm install`
1. `npm run build`

This will create library of components that can be published and consumed by other apps.

## Consuming Apps

### 1. `app-angular` - Angular v16

- `npm install`
- `npm start`

### 2. `app-angular-v6` - Angular v6

- `npm install windows-build-tools -g` (required for `node-sass`)
- `npm install`
- `npm start`

### 3. `app-react`- React v18 Typescript

- `npm install`
- `npm start`

### 4. `app-js` - No framework

Since custom elements are part of the browser standard, they are framework agnostic, and can be interacted with in the same was as standard Web Components like `div` and `p`. However, since there is no build step, we need to bundle the elements modules into a single distributable script.

- In `elements`, run `npm run bundle`
- In `app-js`
    - Run `start.sh` in `app-js`
    - Open `http://localhost:5000`
