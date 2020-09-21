export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let zero;
  collection.forEach(persen => {
    if (persen.age >= 10 && persen.age <= 20) {
      zero = persen.name;
    }
  });
  return zero;
}
