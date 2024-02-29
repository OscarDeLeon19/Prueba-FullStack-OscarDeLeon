//Prueba FullStack Oscar Antonio de León Urizar

class Nodo {
  /**
   * Constructor de la clase Nodo
   * @param {number} id
   * @param {string} nombre
   * @param {number} idPadre
   */
  constructor(id, nombre, idPadre) {
    this.id = id;
    this.nombre = nombre;
    this.idPadre = idPadre;
    this.nivel = 0;
    this.hijos = [];
  }

  /**
   * Metodo recursivo para agregar un hijo al nodo
   * @param {Nodo} nodo
   */
  agregarHijo(nodo) {
    if (this.id == nodo.idPadre) {
      // Comprueba que el idPadre sea igual al id actual
      nodo.nivel = this.nivel + 1;
      this.hijos.push(nodo);
    } else {
      this.hijos.forEach((nodoHijo) => nodoHijo.agregarHijo(nodo)); // Realiza el mismo proceso para todos los hijos del nodos
    }
  }

  /**
   * Imprime el nombre del nodo con los espacios en blanco de acuerdo a su nivel.
   * Metodo recursivo que llama al metodo imprimir de los nodos hijos.
   */
  imprimirNodos() {
    const espacioBlanco = "    ";
    const espacios = espacioBlanco.repeat(this.nivel);
    console.log(espacios + this.nombre); // Imprime la cantidad de espacios junto con el nombre del nodo
    this.hijos.forEach((nodoHijo) => {
      nodoHijo.imprimirNodos(); // LLama al metodo de imprimir de cada hijo.
    });
  }
}

class Arbol {
  /**
   * Constructor de la Clase Arbol
   * @param {Nodo} raiz
   */
  constructor(raiz) {
    this.raiz = raiz;
  }

  /**
   * Crea un nuevo nodo junto y llama al metodo de agregar hijo de la raiz.
   * @param {number} id
   * @param {string} nombre
   * @param {number} idPadre
   */
  agregarNodo(id, nombre, idPadre) {
    const nuevoNodo = new Nodo(id, nombre, idPadre);
    this.raiz.agregarHijo(nuevoNodo);
  }

  /**
   * Llama al metodo de imprimir nodos de la raiz.
   */
  imprimirArbol() {
    this.raiz.imprimirNodos();
  }
}

// Creacion del Arbol e ingreso de registros de la tabla.
const nodo = new Nodo(0, "", 0);
const arbol = new Arbol(nodo);
arbol.agregarNodo(1, "Mascotas", 0);
arbol.agregarNodo(2, "Gato", 1);
arbol.agregarNodo(3, "Perro", 1);
arbol.agregarNodo(4, "Plantas", 0);
arbol.agregarNodo(5, "Arbol", 4);
arbol.agregarNodo(7, "Micu", 2);
arbol.agregarNodo(8, "Sasy", 2);
arbol.agregarNodo(9, "Fido", 3);
arbol.agregarNodo(10, "Bobby", 3);
arbol.agregarNodo(11, "Roble", 5);
console.log("Arbol Inicial");
arbol.imprimirArbol();

console.log("");
console.log("Tarea #1");
console.log("Se agregan dos nuevos registros y se imprime el arbol");
arbol.agregarNodo(12, "Nusa", 2);
arbol.agregarNodo(13, "Nuevo Fido", 9);
arbol.imprimirArbol();

console.log("Tarea #2");
console.log("El registro Flores tiene un IdPadre = 3, pero este registro con Id = 3 es Perro");
console.log("Esto no coincide con la interpretacion esperada, sino se esperaria que tuviera un IdPadre = 4, que corresponde a Planta.");
console.log("Ya que la interpretacion nos indica que Flores es un tipo de Planta.");
console.log("");
//arbol.agregarNodo(6, "Flores", 3);

console.log("Tarea #3");
console.log("Ingresando mas registros teniendo encuenta un crecimiento en n cantidad");
arbol.agregarNodo(14, "Lugares", 0);
arbol.agregarNodo(15, "Departamento", 14);
arbol.agregarNodo(16, "Quetzaltenango", 15);
arbol.agregarNodo(17, "Municipios", 16);
arbol.agregarNodo(18, "San Mateo", 17);
arbol.agregarNodo(19, "La Esperanza", 17);
arbol.agregarNodo(20, "Coatepeque", 17);
arbol.agregarNodo(21, "Guatemala", 15);
console.log("Arbol final con los registros extra.");
arbol.imprimirArbol();
