// Define values for keycodes
var VK_ENTER      = 13;
var VK_SPACE      = 32;
var VK_LEFT       = 37;
var VK_UP         = 38;
var VK_RIGHT      = 39;
var VK_DOWN       = 40;

class RadioGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'radiogroup');
    this.radios = Array.from(this.querySelectorAll('radio-button'));

    //Setup initial state /* original setup wanted first radiobutton already checked and focused */
    // if (this.hasAttribute('selected')) {
    //   let selected = this.getAttribute('selected');
    //   this._selected = selected;
    //   this.radios[selected].setAttribute('tabindex', 0);
    //   this.radios[selected].setAttribute('aria-checked', true);
    // } else {
    //   this.selected = 0;
      this.radios[0].setAttribute('tabindex', 0); // to focus on it with Tab or Shift +Tab
    // }

    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleKeyDown(e) {

    switch(e.keyCode) {

      case VK_ENTER:
      case VK_SPACE:
        if (this.selected === undefined) {
          this.selected = 0;
        }
        break;

      case VK_UP:
      case VK_LEFT: {

        e.preventDefault();

        if (this.selected === undefined) {
          this.selected = this.radios.length - 1
        } else if (this.selected === 0) {
          this.selected = this.radios.length - 1;
        } else {
          this.selected--;
        }

        break;

      }

      case VK_DOWN:
      case VK_RIGHT: {

        e.preventDefault();

        if (this.selected === undefined) {
          this.selected = 1;
        } else if (this.selected === this.radios.length - 1) {
          this.selected = 0;
        } else {
          this.selected++;
        }

        break;
      }

    }
  }

  handleClick(e) {

    e.preventDefault();
    /* A check is done to allow clicks on custom radio-buttons only */
    if (e.target.nodeName === "RADIO-BUTTON") {
        this.selected = this.radios.indexOf(e.target);
      }

  }

/**
* Function to check if the first event happens on the first radio-button or not.
* It can be true only at the first event, if it happens on any radio-button
*   except the first, it sets "tabIndex = -1" on the first button otherwise we
*   would have 2 tabIndex = 0 in the radio-group.
* Instead, if the first event happens on first button or the event is not the
*   first it goes with the default options.
*
* condition (!this.hasAttribute('selected') && e !== 0)
*   radio-group has not attribute 'selected' only until first event
*   so condition can be true only 1 time and until the first event in the
*   radio-group is not happened
*
**/
  noSelect = (e) => {
    if (!this.hasAttribute('selected') && e !== 0) {
      return true;
    }
    return false;
  }


  set selected(idx) {

    switch(this.noSelect(idx)) {
      case true: // executed, if returned true only on the 1st event
      //Set the first button to tabindex -1
        this.radios[0].tabIndex = -1;
      default: { // this part is always executed
        if (isFinite(this.selected)) {
        //Set the old button to tabindex -1
        let previousSelected = this.radios[this.selected];
        previousSelected.tabIndex = -1;
        previousSelected.setAttribute('aria-checked', false);
      }

      //Set the new button to tabindex 0 and focus it
      let newSelected = this.radios[idx];
      newSelected.tabIndex = 0;
      newSelected.focus();
      newSelected.setAttribute('aria-checked', true);
      this.setAttribute('selected', idx);
      this._selected = idx;
      }

    }
  }

  get selected() {
    return this._selected;
  }


}

window.customElements.define('radio-group', RadioGroup);
