export class Display {

  /**
   * @param {string} elementId
   */
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    window.onresize = this.resize.bind(this);
  }

  /**
   * @param {Object} event
   */
  resize(event) {
    this.element.width = event.target.innerWidth;
    this.element.height = event.target.innerHeight;
  }

}
