// Author:Adaxh

class Glitch {
    constructor(el) {
        this.option = {
            el: el,
            zIndexDefault: 3,
            effect1TimeMin: 600,
            effect1TimeMax: 900,
            effect2TimeMin: 10,
            effect2TimeMax: 115,
            time: 100
        }
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    init() {
        const el1 = this.option.el.cloneNode(true)
        el1.style.zIndex = '' + this.option.zIndexDefault
        this.option.el.parentNode.appendChild(el1)

        const el2 = this.option.el.cloneNode(true)
        this.option.el.parentNode.appendChild(el2)
        el2.className += ' front-3'
        el2.style['z-index'] = '' + (this.option.zIndexDefault + 1);

        const el3 = this.option.el.cloneNode(true)
        this.option.el.parentNode.appendChild(el3)
        el3.style['z-index'] = '' + (this.option.zIndexDefault + 2);
    }
    setStyle(el, styles) {
        for (let key in styles)
            el.style[key] = styles[key]
        return el
    }
    mix() {
        const clipPos1 = this.randomInt(10, 1900);
        const clipPos2 = 9999;
        const clipPos3 = this.randomInt(10, 1300);
        const clipPos4 = 0;
        const leftValue = this.randomInt(0, 40);
        const rightValue = this.randomInt(0, 40);
        const scaleValue = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
        const randomTime = this.randomInt(this.option.effect2TimeMin, this.option.effect2TimeMax);

        this.setStyle(this.option.el.parentNode.children[1], {
            'clip': 'rect(' + clipPos1 + 'px, ' + clipPos2 + 'px, ' + clipPos3 + 'px,' + clipPos4 + 'px)',
            'left': leftValue,
            'right': rightValue,
            '-webkit-transform': 'scale(' + scaleValue + ')',
            '-ms-transform': 'scale(' + scaleValue + ')',
            'transform': 'scale(' + scaleValue + ')',
            'mix-blend-mode': 'hue'
        })
    }
    glitch1() {
        const clip1 = this.randomInt(10, 1900);
        const clip2 = 9999;
        const clip3 = this.randomInt(10, 1300);
        const clip4 = 0;
        const left = this.randomInt(0, 16);
        const right = this.randomInt(0, 16);
        const randomTime = this.randomInt(this.option.effect1TimeMin, this.option.effect1TimeMax);

        this.setStyle(this.option.el.parentNode.children[2], {
            'clip': 'rect(' + clip1 + 'px, ' + clip2 + 'px, ' + clip3 + 'px,' + clip4 + 'px)',
            'right': right,
            'left': left
        })
    }
    glitch2() {
        const clip1 = this.randomInt(10, 1900);
        const clip2 = 9999;
        const clip3 = this.randomInt(10, 1300);
        const clip4 = 0;
        const left = this.randomInt(0, 40);
        const right = this.randomInt(0, 40);
        const randomTime = this.randomInt(this.option.effect2TimeMin, this.option.effect2TimeMax);
        const scale = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);

        this.setStyle(this.option.el.parentNode.children[3], {
            'clip': 'rect(' + clip1 + 'px, ' + clip2 + 'px, ' + clip3 + 'px,' + clip4 + 'px)',
            'left': left,
            'right': right,
            '-webkit-transform': 'scale(' + scale + ')',
            '-ms-transform': 'scale(' + scale + ')',
            'transform': 'scale(' + scale + ')',
        })
    }
    start() {
        this.init()
        setInterval(() => {
            this.glitch1();
            this.glitch2();
            this.mix();
        }, this.option.time);
    }
}
