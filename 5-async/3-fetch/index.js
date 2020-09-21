function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // eslint-disable-next-line consistent-return
  fetch(url).then(respose => {
    if (respose.status === 200) {
      return respose.json;
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject('error msg');
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
