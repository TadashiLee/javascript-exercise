import Person from './person';

// TODO 20: 在这里写实现代码
export default class Teacher extends Person {
  constructor(name, age, klass) {
    super();
    this.name = name;
    this.age = age;
    this.klass = klass;
  }

  introduce() {
    if (this.klass === undefined) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
    }
    return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`;
  }
}
