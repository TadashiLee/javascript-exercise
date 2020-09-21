import Person from './person';

// TODO 17: 在这里写实现代码
export default class Worker extends Person {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  // eslint-disable-next-line class-methods-use-this
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
  }
}
