const DomElement = function (selector, height, width, bg, fontSize, color) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.color = color;
};
DomElement.prototype.createDomElem = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        const divClass = this.selector.slice(1);
        elem.classList.add(divClass);
    } else if (this.selector[0] === '#') {
        elem = document.createElement('p');
        const pId = this.selector.slice(1);
        elem.id = pId;
    } else return;
    elem.style.cssText = `height: ${this.height}px; width: ${this.width}px;` + 
    ` background: url('${this.bg}'); font-size: ${this.fontSize}px; color: ${this.color}; text-align: center;`;
    elem.textContent = prompt(`Добавьте текст в элемент`, 'Hello, world!');
    document.body.prepend(elem);
};


let domElement1 = new DomElement('.class', 200, 250, 'red', 15, '#dfa35a');
domElement1.createDomElem();