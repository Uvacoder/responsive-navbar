import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { menuIcon, closeIcon } from "./icons";

export const tagName = "responsive-navbar";

@customElement("responsive-navbar")
export class ResponsiveNavbar extends LitElement {
  static styles = css`
    header {
      width: 100%;
      display: flex;
      background-color: var(--navbar-background-color, #ffffff);
    }
    .nav {
      width: 100%;
      display: flex;
      align-items: center;
      background-color: var(--navbar-background-color, #ffffff);
    }
    .nav--align-right {
      justify-content: space-between;
    }
    .action-items__section {
      display: flex;
      align-self: flex-end;
    }
    #menu-icon__button {
      display: none;
    }
    @media only screen and (max-width: 475px) {
      .nav {
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
      .nav-links__container {
        width: 100%;
        height: 93vh;
        display: none;
        background-color: var(--menu-background-color, #ffffff);
        position: absolute;
        top: 7vh;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
      }
      .nav-links__container--open {
        display: block;
      }
    }
  `;

  // TODO add property to make navbar stick on scroll up
  // @property({ type: Boolean, reflect: true, attribute: "sticky" })
  // sticky = false;

  @property({ type: Boolean, reflect: true, attribute: "menu-open" })
  menuOpen: boolean = false;

  @property({ type: String, reflect: true, attribute: "nav-align" })
  navAlign: string = "left";

  render() {
    return html` <header>
      <nav class="nav ${this.navAlign === "right" ? "nav--align-right" : ""}">
        <button id="menu-icon__button" @click=${this._toggleMenu}>
          ${this.menuOpen
            ? html`<slot name="close-icon"><span>${closeIcon}</span></slot>`
            : html`<slot name="menu-icon"><span>${menuIcon}</span></slot>`}
        </button>
        <div class="logo__container">
          <slot name="logo"> </slot>
        </div>
        <div
          class="nav-links__container ${this.menuOpen
            ? "  nav-links__container--open"
            : ""}"
        >
          <slot name="nav-links"></slot>
        </div>
      </nav>
      <section class="action-items__section">
        <slot name="action-items"></slot>
      </section>
    </header>`;
  }

  private _toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.toggleAttribute("no-scroll");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "responsive-navbar": ResponsiveNavbar;
  }
}
