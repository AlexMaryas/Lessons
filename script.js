const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
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
    elem.style.cssText = `height: ${this.height}px; width:` +
        ` ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize};`;
    elem.textContent = prompt(`Добавьте текст в элемент`, 'Hello, world!');
    document.body.append(elem);
    console.log(elem);
};

let domElement1 = new DomElement('.class', 80, 60, 'red', 8);
domElement1.createDomElem();