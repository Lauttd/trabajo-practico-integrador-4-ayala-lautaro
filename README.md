# trabajo-practico-integrador-4-ayala-lautaro
GLOSARIO: 
GLOSARIO DE TYPESCRIPT
Tipo "string"
Representa texto.

Ejemplo: 
 let nombreEjemplo: string = "Juan"; 

----------------------------------------------------------------
Tipo "number"
Representa números.

Ejemplo: 
 let edadEjemplo: number = 25; 


----------------------------------------------------------------
Union Type
Permite más de un tipo.

Ejemplo:
let idEjemplo: string | number = "A1";


----------------------------------------------------------------
Interface
Define forma de un objeto.

Ejemplo:
interface Persona {
  nombre: string;
  edad: number;
}

----------------------------------------------------------------
Enum
Conjunto de valores constantes.

Ejemplo:
enum Dia { Lunes = "Lunes", Martes = "Martes" }


----------------------------------------------------------------
Función tipada

Ejemplo:
function sumar(a: number, b: number): number {
  return a + b;
}