import { html, css, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { menuIcon, closeIcon } from "./icons";

@customElement("responsive-navbar")
export class ResponsiveNavbar extends LitElement {
  static styles = css`
    #nav {
      padding: 0.25rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--navbar-background-color, #ffffff);
    }
    #menu-icon__button {
      display: none;
    }
    @media only screen and (max-width: 475px) {
      #nav {
        padding: 0.5rem 2rem 0.5rem 1rem;
        justify-content: initial;
      }
      #menu-icon__button {
        padding: 1rem;
        display: flex;
        background-color: transparent;
        border: none;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        color: inherit;
      }
      .navlinks__container {
        width: 100%;
        height: 91vh;
        display: none;
        background-color: var(--menu-background-color, #ffffff);
        position: absolute;
        top: 9vh;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .navlinks__container--open {
        display: block;
      }
    }
  `;

  @property({ type: String })
  menuAlign = "left";

  @property({ type: Boolean, reflect: true, attribute: "menu-open" })
  menuOpen: boolean = false;

  render() {
    return html`<nav id="nav">
      <button id="menu-icon__button" @click=${this._toggleMenu}>
        ${this.menuOpen
          ? html`<slot name="close-icon"><span>${closeIcon}</span></slot>`
          : html`<slot name="menu-icon"><span>${menuIcon}</span></slot>`}
      </button>
      <div class="logo__container">
        <slot name="logo">
          <h3>Your Logo</h3>
        </slot>
      </div>
      <div
        class="navlinks__container ${this.menuOpen
          ? "  navlinks__container--open"
          : ""}"
      >
        <slot name="navlinks"></slot>
      </div>
    </nav>`;
  }

  private _toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "responsive-navbar": ResponsiveNavbar;
  }
}
