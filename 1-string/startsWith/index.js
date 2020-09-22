export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  const reg = RegExp(/粤A.*/);
  collection.forEach(pattern => {
    if (reg.exec(pattern)) {
      count += 1;
    }
  });
  return count;
}
