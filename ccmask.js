// return masked string
function maskify(cc) {

  let mask = [];
  
  for(let i = 0; i < cc.length; i++){
    if(cc[i] < 4){
      mask.push('#');
    }else{
      mask.push(cc[i]);
    }
  }
  return mask.join('');
}

