
export function getSummerAndSpringMonth(x){
  switch(Math.floor(x)){ 
    case 3: return 'March';
    case 4: return 'April';
    case 5:  return 'May';
    case 6:  return 'June';
    case 7:  return 'July';
    case 8:  return 'August';
  };
  if(x>8 || x<3){
    return 'only summer or spring months'
  }
  else if (x==null){ return 'enter number'}
  else if(x!=Number){
    return 'only numbers'
  }
};

