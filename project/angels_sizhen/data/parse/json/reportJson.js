
var dateUtil = require('../../../utils/dateUtil.js');
var reportArray = [];
module.exports = {

}

function reportListData(json){
  console.log("http-->json-->reportListData-->start:" + json.data.length);
  for (var i = 0; i < json.data.length;i++){
    // var reportModel = require('../../../model/reportModel.js');
    var reportModel = {};
    reportModel.date = dateUtil.timestampToDate(json.data[i].reportSubmitTime);
    reportModel.time = dateUtil.timestampToTime(json.data[i].reportSubmitTime);
    reportModel.title = json.data[i].reportTitle;
    reportArray[i] = reportModel;
  }

  return reportArray;
}

module.exports.reportArray = reportListData;