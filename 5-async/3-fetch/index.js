function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // eslint-disable-next-line consistent-return
  return fetch(url).then(response => {
    if (response.status === 200) {
      // console.log(response.json().toString());
      return response.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('error msg');
  });
  // .then(data => {
  //   document.writeln(data.name);
  //   return data;
  // });
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
