export default function(receita){
  let str = '';
  for(var j = 0; j < receita.length;j++){
    if(receita[j].quantidade)
      str = str.concat(receita[j].quantidade," ")
      
    str = str.concat(receita[j].ingrediente, "\n" );
  }
  console.log(str);
  return str;
}




