function doAjax() {
  $.ajax({
    url: 'http://localhost:1337/localhost:9022/package.json?nonce=' + Math.random(),
    dataType: 'json',
    success: function (json) {
    }
  });
}