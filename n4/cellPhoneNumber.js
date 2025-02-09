function telephoneCheck(str) {
  /* 
    1. Criar uma expressão regular para validar o formato do número de telefone dos EUA.
       1.1. "^": Indica o início da string.
       1.2. (1\s?)?: Opcionalmente, permite o código do país "1" seguido de um espaço opcional.
       1.3. (\(\d{3}\)|\d{3}):
            - Permite que o código de área seja informado de duas formas:
              a) Três dígitos entre parênteses, por exemplo, "(555)"
              b) Três dígitos sem parênteses, por exemplo, "555"
       1.4. ([\s-])?: Um separador opcional que pode ser um espaço ou um hífen.
       1.5. \d{3}: Exatamente três dígitos (a primeira parte do número local).
       1.6. ([\s-])?: Outro separador opcional (espaço ou hífen).
       1.7. \d{4}: Exatamente quatro dígitos (a segunda parte do número local).
       1.8. "$": Indica o final da string, garantindo que não haja caracteres extras.
       
    2. A expressão regular garante que:
       2.1. Se o código do país for fornecido, ele deve ser "1".
       2.2. O código de área esteja corretamente formatado.
       2.3. O número possua o agrupamento correto de dígitos.
  */
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;
  
  /* 
    3. Testar se a string fornecida corresponde à expressão regular.
       3.1. regex.test(str) retorna 'true' se a string for válida, ou 'false' caso contrário.
  */
  return regex.test(str);
}
