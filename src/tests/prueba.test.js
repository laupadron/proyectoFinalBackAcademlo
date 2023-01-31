//el primer parametro nos indica de que va la prueba
//el segundo es una f de callback que se va a ejecutar con la prueba(debe fallar)
const {checkInteger} = require('./math');

test("debe devolver un true cuando le pasamos el valor de 5", ()=>{
  //Arrange(organizar la info)
  const value = 5;
  //act (armar la funcion)
  const result = checkInteger(value)
  //assert(afirmar)
  expect(result).toBe(true);
});

test("debe devolver un true cuando le pasamos un numero 100", () =>{
  //arrange
  const value =100;
  //act
  const result = checkInteger(value);
  //assert
  expect(result).toBe(true);
});

test("debe devolver un true cuando el valor sea -3", () =>{
  const value =-3;
  const result = checkInteger(value);
  expect(result).toBe(true)
})