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
    ` background: ${this.bg}; font-size: ${this.fontSize}px; color: ${this.color}; text-align: center;`;
    elem.textContent = prompt(`Добавьте текст в элемент`, 'Hello, world!');
    document.addEventListener('DOMContentLoaded', () => {document.body.prepend(elem); elem.style.position = this.position});
    
    elem.style.top = 0;
    elem.style.left = 0;
    let top = 0;
    let left = 0;
    
    document.addEventListener('keydown', () => {
        
        

        if (event.key === 'ArrowDown') {
            top +=10;
        }
        if (event.key === 'ArrowUp') {
            top -=10;
        }
        if (event.key === 'ArrowLeft') {
            
            left -=10;
        }
        if (event.key === 'ArrowRight') {
            left += 10;
        }
        elem.style.top = top +'px';
        elem.style.left = left +'px';
    });
};


let domElement1 = new DomElement('.class', 100, 100, 'red', 15, '#dfa35a');
domElement1.position = 'absolute';
domElement1.createDomElem();
