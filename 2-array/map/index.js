export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(num => {
    return String.fromCharCode(num + 96);
  });
}
