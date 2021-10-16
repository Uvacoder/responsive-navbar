import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("responsive-navbar")
export class ResponsiveNavbar extends LitElement {
  static styles = css`
  `;

  @property({type: String})
  menuAlign = 'left';

  render() {
    return html`<div>
      <slot></slot>
    </div> `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "responsive-navbar": ResponsiveNavbar;
  }
}
