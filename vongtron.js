let Circle = function (radius) {
        this.radius = radius;
        this.getRadius = function () {
            return radius;
        }
        this.getArea = function () {
            return Math.PI*radius*radius;
        }
}
let r = parseInt(prompt('Nhập vào bán kính : '));
let circle = new Circle(r);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius : " + radius + " area " + area);