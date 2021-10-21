function tabuada(){
  var num = document.getElementById('num').value
  var resultado = document.getElementById('resultado')

  if(num === ""){
    resultado.innerHTML = 'Insira um número'
  }
  else{
    
    resultado.innerHTML = ""
    
    for(var cont=1; cont<=10; cont++){
      resultado.innerHTML += `${num} x ${cont} = ${(num*cont)} <br>`
    }
  }
}
