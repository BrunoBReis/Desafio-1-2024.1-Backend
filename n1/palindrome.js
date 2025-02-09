function palindrome(str) {
  /*
    1. Se a string for vazia, retornar undefined.
  */
  if (str === "") return "Entrada vazia";
  /* 
    Para comparar as strings, é necessário remover os caracteres indesejados.
    1. Definir as flags que serão usadas:
        1.1. g: global, ou seja, substituir todas as ocorrências
        1.2. i: case-insensitive, ou seja, não diferenciar maiúsculas de minúsculas
            1.2.1. toLowerCase() garante que não haverá diferença entre letras maiúsculas e minúsculas
                obs: toUpperCase() também poderia ser usado
    2. Definir a expressão regular
        2.1. "^": nega o que está dentro do colchetes
        2.2. a-zA-Z0-9: letras de a até z, A até Z e números de 0 até 9
    3. Substituir os caracteres indesejados por uma string vazia
        3.1. replace() substitui o que foi encontrado pela string passada como segundo argumento
  */
  const myRegex = /[^a-zA-Z0-9]/gi;
  let filteredStr = str.replace(myRegex, "");
  filteredStr = filteredStr.toLowerCase();

  /*
    Se a string filtrada for vazia, retornar undefined.
  */
  if (filteredStr === "") return "Sem caracteres alfanuméricos";

  /* 
    Com os dados trataods pela constante filteredStr, é possível inverter a string.
    1. split("") divide a string em um array de caracteres
        obs: sem deixar espaço entre as strings
    2. reverse() inverte a ordem dos elementos do array
    3. join("") junta os elementos do array em uma string
  */
  let reversedStr = filteredStr.split("");
  reversedStr = reversedStr.reverse();
  reversedStr = reversedStr.join("");

  /* 
    Por fim, compara-se as strings.
    1. == compara se os valores são iguais e se os tipos são iguais
        obs: como a comparação é entre strings, não é necessário comparar com ===
  */
  return filteredStr == reversedStr;
}

palindrome("");
