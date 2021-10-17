import { html, css, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { menuIcon } from "./icons";


@customElement("responsive-navbar")
export class ResponsiveNavbar extends LitElement {
  static styles = css`
    #nav {
      padding: 0.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--navbar-bg, lightgray);
    }
    #menu-icon__container {
      display: none;
    }
    @media only screen and (max-width: 475px) {
      #nav {
        padding: 0.5rem 2rem 0.5rem 0;
        justify-content: initial;
      }
      #menu-icon__container {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
      }
      .navlinks__container {
        width: 100%;
        height: 100vh;
        display: none;
        background-color: var(--navbar-bg, lightgray);
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .navlinks__container--open {
        display: flex;
      }
    }
  `;

  @property({ type: String })
  menuAlign = "left";

  @state()
  _menuOpen:boolean = false;

  render() {
    return html`<nav id="nav">
      <div id="menu-icon__container" @click=${this._toggleMenu}>
        ${menuIcon}
      </div>
      <div class="logo__container">
        <slot name="logo">
          <h3>Your Logo</h3>
        </slot>
      </div>
      <div class="navlinks__container ${this._menuOpen ? '  navlinks__container--open' : ''}">
        <slot name="navlinks"></slot>
      </div>
    </nav>`;
  }

  private _toggleMenu() {
    this._menuOpen = !this._menuOpen;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "responsive-navbar": ResponsiveNavbar;
  }
}
