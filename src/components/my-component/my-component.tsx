import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  // @Element()
  // private el: HTMLStencilElement;

  @State() allowed: boolean;

  componentWillLoad(): void {
    this.allowed = false;

    // // Fallback for browsers not supporting shadow DOM
    // const CAN_SHADOW: boolean = !!(document.head.attachShadow || (document.head as any).createShadowRoot);

    // if (CAN_SHADOW === false && this.allowed === false) {
    //   while (this.el.lastChild) {
    //     this.el.removeChild(this.el.lastChild);
    //   }
    // }
  }

  render() {
    return this.allowed ? <slot /> : null;
    // return (
    //   <div>
    //     {this.allowed ? <slot /> : null}
    //   </div>
    // );
  }
}
