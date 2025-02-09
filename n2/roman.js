function convertToRoman(num) {
  /*
    Verificar se o número está dentro do intervalo válido para a conversão. 
  */
  if (num <= 0 || num >= 4000) {
    return "Número inválido";
  }
  /* 
    1. Criar um array de objetos para mapear os valores arábicos aos seus correspondentes símbolos romanos.
       1.1. Cada objeto possui duas propriedades:
            - value: o valor arábico.
            - numeral: o símbolo romano correspondente.
       1.2. O array é ordenado do maior para o menor, para que o loop não seja ou contrário (começando com valores maiores).
  */
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  /* 
    2. Inicializar uma string vazia para acumular o numeral romano.
       2.1. Essa string armazenará o resultado final da conversão.
  */
  let roman = "";

  /* 
    3. Percorrer o array de mapeamentos dos números romanos.
       3.1. Para cada objeto do array, verificar se o valor atual de 'num' é maior ou igual ao valor do mapeamento.
       3.2. Enquanto essa condição for verdadeira, concatenar o símbolo romano correspondente à string 'roman'
            e subtrair o valor do mapeamento de 'num'.
  */
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].numeral; // Adiciona o símbolo romano ao resultado.
      num -= romanNumerals[i].value; // Subtrai o valor correspondente de 'num'.
    }
  }

  /* 
    4. Retornar a string final que representa o número convertido para o numeral romano.
       4.1. A string 'roman' contém a conversão completa do número arábico para o numeral romano.
  */
  return roman;
}
