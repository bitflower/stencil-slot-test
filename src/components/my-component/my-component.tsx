import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @State() allowed: boolean;

  componentWillLoad(): void {
    this.allowed = true;
  }

  render() {
    return (
      <div>
        {this.allowed ? <slot /> : null}
      </div>
    );
  }
}
