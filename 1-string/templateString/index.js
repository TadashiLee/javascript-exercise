function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const { id, firstName, lastName } = person;
  const score = getScore(id);
  // '你好，刘明！你的考试成绩为60分'
  return `你好，${lastName}${firstName}！你的考试成绩为${score}分`;
}
