//  color, size -> 7 ~ 12
window.data={
  allColor:['red','blue','green','puple','brown'],
  allSize:[7,8,9,10,11,12,13],
  byColor:{
    // color : 변화되는 size
    red:[7,8,11,12,13],
    blue:[9,10,11,13],
    green:[7,9,10,11,12,13],
    puple:[7,8,9,10,11,13],
    brown:[7,10,11,12,13]
  },
  bySize:{
    // size: 변화되는 color
    '7':['red','puple','brown'],
    '8':['red','blue','brown'],
    '9':['green','puple','brown'],
    '10':['red','blue','puple'],
    '11':[,'blue','green','puple','brown'],
    '12':['red','green',,'brown'],
    '13':['red','blue','puple',],
  }
}