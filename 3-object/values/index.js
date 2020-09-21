export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  const numbers = Object.values(source);
  numbers.forEach(num => {
    sum += Number(num);
  });
  return sum;
}
