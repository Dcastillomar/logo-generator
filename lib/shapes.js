class Shape{
    constructor(){
        this.color = "";
    };
    setColor(color){
        this.color = color;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`
    };
}

class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="300" height="200" fill="${this.color}" />`
    };
}
class Triangle extends Shape{
    render(){
        return `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`
    };
}

module.exports={Circle,Square,Triangle};