import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires clicked - Tracks button clicks
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('labelled-button')
export class LabelledButton extends LitElement {
  static override styles = css`
    :host {
      font-family: segoe ui, sans-serif;
      display: inline-block;
    }

    div {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }

    .label {
      color: #06f;
      font-weight: 600;
      margin: 0;
    }

    button {
      background: #fff;
      border: 2px solid #06f;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      outline: none;
      font: inherit;
      font-size: 1rem;
      font-weight: 600;
      align-self: stretch;
      color: #06f;
    }

    button:hover {
      border-color: #06f;
      background-color: #06f1;
    }

    button:active {
      border-color: #06f;
      background-color: #06f2;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({type: String})
  label?: string;

  override render() {
    return html`
      <div>
        <h4 class="label">${this.label}</h4>
        <button @click=${this._onClick} part="button">
          <slot></slot>
        </button>
      </div>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('clicked'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'labelled-button': LabelledButton;
  }
}
