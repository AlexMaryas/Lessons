class First {
    constructor() {
      
    }
    hello () {
      console.log('Привет, я метод родителя');
    }
  }
  class Second extends First {
  }
 Second.hello = function () {
      First.prototype.hello();
      console.log('А я наследуемый метод');
  };
  Second.hello();