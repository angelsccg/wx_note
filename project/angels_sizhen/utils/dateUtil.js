//位数转换
function timePlaces(time) {
  return time * (time < 10000000000 ? 1000 : 1);
}
//将时间戳转换成日期格式
function timestampToDate(timestamp) {
  var date = new Date(timePlaces(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  // return Y + M + D + h + m + s;
  return Y + M + D;
}
//将时间戳转换成时间格式
function timestampToTime(timestamp) {
  var date = new Date(timePlaces(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes();
  var s = date.getSeconds();
  // return Y + M + D + h + m + s;
  return h + m;
}
//将日期格式转换成时间戳
function timeToTimestamp(time) {
  var date = new Date(time);
  // 有三种方式获取
  // var time1 = date.getTime();
  // var time2 = date.valueOf();
  // var time3 = Date.parse(date);
  // console.log(time1);//1398250549123
  // console.log(time2);//1398250549123
  // console.log(time3);//1398250549000
  return date.getTime();
}

module.exports = {
  timestampToDate: timestampToDate,
  timestampToTime: timestampToTime,
  timeToTimestamp: timeToTimestamp
}
