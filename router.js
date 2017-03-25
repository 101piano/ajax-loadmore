//模拟后端
app.get('/loadMore',function(req,res){
  var curIdx=req.query.index;
  var len=req.query.length;
  var data=[];
  for(var i=0;i<len;i++){
    data.push('新闻'+(parseInt(curIdx)+i+2));    
  }
  res.send(data);
});