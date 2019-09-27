var arr = [1, 5, 2, 5, 6, 7, 89, 5, 8];
function buscador(num, array) {
    var buscarnum = num;
    var contador = 0;
    for (i = 0; i < array.length; i++) {
      if (buscarnum == array[i]) {
        contador++;
      };
    };
    console.log("Ocurrencias: " + contador);
  };

buscador(5, arr)

  
