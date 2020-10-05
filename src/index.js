
module.exports = function towelSort (matrix) {
  if(!matrix){
return []
  }
  matrix.map(function(item){
      if((matrix.indexOf(item)+1)%2==0){
          item.reverse()
      }
  })
return matrix.flat();
}