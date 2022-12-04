export {};

function mySubDecoratorFactory(className: string) {
  console.log(`className: ${className}`);
  return function (target: Function) {
    console.log(`myDecorator ${className}`);
  };
}

function myDecoratorFactory(className: string) {
  console.log(`className: ${className}`);
  return function (target: Function) {
    console.log(`myDecorator ${className}`);
  };
}

@mySubDecoratorFactory('UserBySub')
@myDecoratorFactory('User')
class User {
  name: string = 'Ham';

  constructor() {
    console.log('creating a user instance.');
  }
}

const user = new User();
console.log(user);
