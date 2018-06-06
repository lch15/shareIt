module.exports = {
  myData: myData,
  searchmtdata: searchmtdata,
}
var mydata = myData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mydata.list.length; i++) {
    var mt = mydata.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}

function myData() {
  var arr = {
    list: [
      {
        id: '1',
        title: 'asd',
        author: 'lee',
        create_time:'2015/02/03'
      }, {
        id: '2',
        title: 'asd2',
        author: 'li',
        create_time: '2016/02/03'
      }, {
        id: '3',
        title: 'asd3',
        author: 'zhang',
        create_time: '2015/11/03'
      }, {
        id: '4',
        title: 'asd4',
        author: 'song',
        create_time: '2015/02/26'
      }
    ]
  }
  return arr
}  