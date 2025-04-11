class FormField extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        ::slotted(label) {
          font-weight: 500;
          color: #333;
        }
        ::slotted(input),
        ::slotted(select) {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 0.5rem;
          width: 100%;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('form-field', FormField);
