# Stencil slot test hiding children

We're trying to hide children of our component by not returning a `<slot>` under certain conditions (here `allow = false`).
However this works in CHrome with shadow dom on but not in Firefox.

Should the polyfill take over here ?

# Outcome

Chrome hides the node children successfully, Firefox does not with code like this:

```html

  We're hiding DOM children through slot here:
  <my-component>
    <p>What !???</p>
  </my-component>
  
```

![](https://raw.githubusercontent.com/bitflower/stencil-slot-test/master/preview.png)

# How to run

`npm run dev --es5`

# Shadow dom off

With shadowm dom off it doesn't event work in Chrome anymore:

![](https://raw.githubusercontent.com/bitflower/stencil-slot-test/master/err.png)

# Fallback for old browser

We still can hide the children with a fallback solution sketch out in the code (commented) with something like this:

```typescript

    // Fallback for browsers not supporting shadow DOM
    const CAN_SHADOW: boolean = !!(document.head.attachShadow || (document.head as any).createShadowRoot);

    if (CAN_SHADOW === false && this.allowed === false) {
      while (this.el.lastChild) {
        this.el.removeChild(this.el.lastChild);
      }
    }

```

Not sure if this is the right way!