# Stencil slot test hiding children

We're trying to hide children of our component by not returning a `<slot>` under certain conditions (her `allow = false`).
However this works in CHrome with shadow dom on but not in Firefox.

Should the polyfill take over here ?

# Outcome

Chrome hides the node children successfully, Firefox does not:
![]()

# How ro run

`npm run dev --es5`