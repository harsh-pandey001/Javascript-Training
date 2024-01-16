// class Rectangle1 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // constructor() {
//     //     this.height = 25;
//     //     this.width = 25;
//     // }
// }


// // Expression; the class is anonymous but assigned to a variable
// const Rectangle2 = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// class Rectangl3 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
//     *getSides() {
//         yield this.height;
//         yield this.width;
//         yield this.height;
//         yield this.width;
//     }
// }

// const square = new Rectangl3(10, 10);

// console.log(square.area); // 100
// console.log([...square.getSides()]);


// const trio  =  new Rectangl3(25, 25)

// console.log(trio.area);

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
 const mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show();



  

