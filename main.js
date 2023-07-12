function  myfuncion(){
    let name = "oscar";
    document.getElementById("texto").vale = name;

    //alert("hola mundo. estamos conectado a esta pagina dinamica mente.");
}

//[1]: Crea una función flecha sin parámetros de entrada, crea una variable, asignale una operación y muestralo por pantalla.
let a = 5*2;

const sum = ()=> a;
console.log(sum(a));

//`[2] Declara dos variables, haz una función flecha que tenga dos parámetros de entrada.

let x=8, y=6;
// declara una variable y multiplica el primer parámetro por el segundo parámetro.


const operation = () => x*y;
console.log(operation());


// declara una variable y suma 10 al segundo parámetro.


const operation3 = ()=> x + 10;
console.log(operation3 ()); 

// retorna un array con las variables y muestralo por consola.
console.log('--Retorna un array con las variables y has un log-->');

let array = ()=> [x,y];
console.log(array());

//[3] Dado este array [1,3,5,7], tienes que usar .map() conseguir que en el nuevo array sean todos pares.

     let arrays = [1,2,3,5,7];
     const modificArray = arrays.map((element)=>(element*2))
     console.log(modificArray);
    


//[4]: Crea una función flecha sin parámetros de entrada, Crea un objeto y retorna su longitud. Luego muesrta ese resultado por consola.
    let myobjetc ={name:'Dani'};
    let operation4 = ()=> myobjetc;;
    console.log(operation4(myobjetc.length));


    // Mapea el array para obtener un nuevo array con los países de habla hispana Spanish.
    // Obten otro array con solo los de habla inglesa English.
    // Consigue finalmente otro array con los países que tengan United en su nombre.

  
//[5] Dado este arrays:
let array5 = [
      {
        name:"Spain",
        language: "Spanish"
    },
    {
        name:"Venezuela",
        language: "Spanish"
    },
    {
        name:"United kingdom",
        language: "English"
    },
    {
        name:"Nicaragua",
        language: "Spanish"
    },
    {
        name:"United States",
        language: "English"
    },
    {
        name:"Iceland",
        language: "English"
    },
    {
        name:"United Arab Emirates",
        language: "Arabic"
    },
    ];
    let speakSpanis = array5.filter((language)=>language=='spanish');
    console.log(speakSpanis);


//[6] Recorre el array anterior de países y muestra la siguiente frase por consola.
// in country <name> they speak <language>
// 
console.log('--****----ordenados de menor a mayor ****-----');

//[7] Crea una función que acepte un array
let array7 = [1,2,5,6,4,3]
    let orderDescent = array7.sort((a,b)=>a-b)
    console.log(orderDescent);

    console.warn('ordenados  de mayor a menor');
    
// Dentro haz que el array se ordene de menor a mayor.
// Prueba con estos arrays:

// [1,2,5,6,4,3]

let arralist = [35, 8, 5, 67, 23];
    let orderAcendet = arralist.sort((a,b)=>b-a)
    console.log(orderAcendet);

// [35, 8, 5, 67, 23]

    console.log('---van de menor a mayor:---');
    
let newOrder = [3.5, 8, 5, 6.7, 2.6];
    let ordermyArray = newOrder.sort((a,b)=>a-b);
    console.log(ordermyArray);

// [3.5, 8, 5, 6.7, 2.6]
        console.log('--ordenados en orden alfabeticos---');
        
let orderString = ['casa', 'arboleda', 'mutante', 'huerto', 'zapato', 'rata'];
 const ordermyString = orderString.sort()
    console.log(ordermyString);

// [casa, arboleda, mutante, huerto, zapato, rata]


