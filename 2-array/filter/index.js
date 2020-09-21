function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(x => x % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((number, index) => {
    return collection.indexOf(number) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
