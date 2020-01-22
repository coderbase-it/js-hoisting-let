function getName(user) {
  if (user.isAdmin) {
    var name = 'Admin : ' + user.name;
    return name;
  }
  //console.log(name)
  return user.name;
}
const res = getName({name: 'Pierre', isAdmin:false})
//console.log(res)


 const user  = { name : 'Angular', version : 9};
 const { name : finalName, version : angularVersion } = user 
 console.log(finalName)
  console.log(angularVersion)

 const user  = { name : 'Angular', version : 9};
 const { name , version } = user 
  console.log(name)
  console.log(version)








  //ES6 Way to Clone an Array 🐑

const sheeps = ['🐑', '🐑', '🐑'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];

//Why Can’t I Use = to Copy an Array?

const sheeps = ['🐑', '🐑', '🐑'];

const fakeSheeps = sheeps;
const cloneSheeps = [...sheeps];

console.log(sheeps === fakeSheeps);
// true --> it's pointing to the same memory space

console.log(sheeps === cloneSheeps);
// false --> it's pointing to a new memory space


//Problem with Reference Values

const sheeps = ['🐑', '🐑'];

const sheeps2 = sheeps;

sheeps2.push('🐺');

console.log(sheeps2);
// [ '🐑', '🐑', '🐺' ]

// Ahhh 😱 , our original sheeps have changed?!
console.log(sheeps);
// [ '🐑', '🐑', '🐺' ]

//That's why we need to clone an array:
const sheeps = ['🐑', '🐑'];

const sheeps2 = [...sheeps];

// Let's change our sheeps2 array
sheeps2.push('🐺');

console.log(sheeps2);
// [ '🐑', '🐑', '🐺' ]

// ✅ Yay, our original sheeps is not affected!
console.log(sheeps);
// [ '🐑', '🐑' ]


/*
Mutable vs Immutable Data Types
Mutable:

object
array
function
Immutable:

All primitives are immutable.

string
number
boolean
null
undefined
symbol
*/

//Shallow Copy Only

const nums = [
  [1, 2], 
  [10],
];

const cloneNums = [...nums];

// Let's change the first item in the first nested item in our cloned array.
cloneNums[0][0] = '👻';

console.log(cloneNums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]
 
// NOOooo, the original is also affected
console.log(nums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

//Array.from is Another Way to Clone array
const sheeps = ['🐑', '🐑', '🐑'];

const cloneSheeps = Array.from(sheeps);


function getUser
(  id = 1 ,  
 userNumber = getDefautUser(id) ,
  userID = userNumber + 1 , 
  ...usersID ){
  console.log(id)
  console.log(userNumber)
  console.log(userID)
  console.log(usersID)
}

function getDefautUser(identifiant = 1) {
  return identifiant * 10
}

/*getUser()
getUser(2)
getUser(2, 24 )
getUser(2, 24 , 666 )
*/getUser(2, 24 , 666 , 1, 2 ,3, 8   )

/* ARROW FUNCTION  OPERATOR */
// function with args ES5
var fparam = function(arg1) {
    console.log('salut'+ arg1);
}

// ES6
let fparam = (arg1) => console.log('salut'+ arg1);


getDefautUser  = (identifiant = 1) =>  identifiant * 100

getUser()



/* IF TERNAIRE */
let simple = a => a > 15 ? 15 : a; 
console.log(simple(16));
console.log(simple(10));


// function with object ES5
var dog = {
    fullname: 'le chien',
    toys: ["ballon","balle"],
    getToys: function() {
        var self = this;
        this.toys.forEach(function(toy){
            var sentence = self.fullname + " joue avec 1 "+ toy;
            console.log(sentence);
        }); 
    },
    getName : function() { console.log(this.fullname)}
}

dog.getToys();

// en ES6
let dog2 = {
    fullname: 'le chien',
    toys: ["ballon","balle"],
    getToys: function() {
        this.toys.forEach( (toy) => {
            let sentence = this.fullname + " joue avec 1 "+ toy;
            console.log(sentence);
        }); 
    },
    getName : () =>  { console.log(this.fullname)} // arrow ne crée pas de contexte error ici .
}

dog2.getToys();
dog2.getName();

/* SPREAD OPERATOR */

// en ES5
var fruits = ['bananes','pommes'];
var vegetables = ['poireaux','carottes'];

var food = [fruits, vegetables];
// on obtien un tableau à deux dimension

// pour obtenir un tableau à une dimension à partir de 2 tableaux
let food2 = [...fruits, ...vegetables];

// combiner avec d'autres string
let food3 = [...fruits, ...vegetables, 'navets'];

// utiliser les spreed operator dans une fonction
// en ES5 
var mixer = function(ing1, ing2) {
    console.log(ing1 + " avec " + ing2);
}

// en ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + " avec " + ing2); // template de string à illuster
mixer2('banane', 'poire');

// avec un spreed operator 
let ingredients = ['carotte','fraise'];
mixer2(...ingredients);

// rest operator
let mixer3 = (...args) => console.log(args.join('-'));
mixer3('Fraise','banane','abricot'); // Fraise-banane-abricot


/* CLASS */

// en ES5
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('BMW', 'Rouge');
console.log(myCar);

Car.prototype.klaxone = function() {
    console.log('tuuuut');
}

myCar.klaxone();

console.log('--------------------------------');

// ES6
class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    klaxone() {
        console.log('taaaaaaat');
    }
}

let myVehicule = new Vehicule('Mercedes', 'black');
console.log(myVehicule);
myVehicule.klaxone();

console.log('--------------------------------');

class VoitureDeCourse extends Vehicule {
    constructor(brand, color, vitesse) {
        super(brand, color);
        this.vitesse = vitesse; 
    }
    turbo() {
        console.log('mise en route du turbo');
    }
    kloxone() {
        console.log('tatt');
    }
}


let myFerrari = new VoitureDeCourse('Ferrari', 'rouge', 250);
console.log(myFerrari);
myFerrari.turbo();
myFerrari.klaxone();

/* IMPORT/EXPORT */

import {User} from './user';

let Pierre = new User('Pierre', '33')
console.log(Pierre)

/* SET */

let brands = new Set();

brands.add('honda')
       .add('ducati')
       .add('triomph')
       .add('honda')
       .add('kawazaki');

console.log(brands); // affiche une seule fois honda 

// créer un Set() directement à partir d'un tableau 
let brandsArray = ['honda', 'ducati', 'triomph', 'Honda', 'honda'];
let brands2 = new Set(brandsArray);

// methode has pour tester si un set contient une valeur
console.log(brands.has('honda')); // true
console.log(brands.has('Honda')); // false

// methode delete pour supprime une entrée
console.log(brands.delete('honda')); // supprime et return true
console.log(brands.delete('Honda')); // supprime rien et return false

// methode forEach pour lister un set
brands.forEach(function(val1, val2, val3) {
    console.log(val1); // cle
    console.log(val2); // valeur
    console.log(val3); // le set lui-meme
});


/* MAP */
let books = new Map();

books.set('Umberto Eco','Le nom de la rose');
books.set('Michel Tournier','Le roi des Aulnes');
console.log(books);
// propriété size pour récupérer la taille d'une Map()
console.log(books.size);

// methode get pour lire valeur d'un Map en lui passant un clé
console.log(books.get('Umberto Eco'));

// methode forEach 
books.forEach(function(cle, val, map) {
    console.log(cle); // cle
    console.log(val); // valeur
    console.log(map); // le set lui-meme
});

console.log(books.keys()); 
console.log(books.values()); 
console.log(books.entries()); 

/* ITERATOR */

let fruits = new Set();
fruits.add('pommes').add('bananes');
let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);

// recupérer val suivante d'un setIterator

if (fruitsIteratorEntries.next().done) {
    console.log('itération terminée');
} else {
    console.log(fruitsIteratorEntries.next());    
}

/* GENERATOR */

// permet de créer des fonctions qu'on peut mettre en pause et faire repartir à 
// l'endroit ou on s'est arreté 

function* misc() {
    let a = 10;
    let b = 15;
    console.log(a+b);
    yield;
    console.log('atteint à la 2e execution');
    yield;
    console.log('atteint à la 3e execution');
}

// un generator retoune un iterator

let miscIterator = misc();

miscIterator.next(); // affiche 25
miscIterator.next(); // affiche atteint à la 2e execution
miscIterator.next(); // affiche atteint à la 3e execution

function* decollage() {
    yield 'trois';
    yield 'deux';
    yield 'un';
    yield 'zéro';
    yield 'décollage';
}

let monIterator = decollage();

let handle = setInterval(() => {
    let instruction = monIterator.next();
    if (instruction.done) {
        clearInterval(handle);
    } else {
        console.log(instruction);
    }
}, 2000);

/* PROMISE */
// permet de créer des fonctions qu'on peut mettre en pause et faire repartir à 
// l'endroit ou on s'est arreté 

console.log('je vais à une formation Angular');
let myPromise = new Promise ( (resolve, reject) =>  {
    setTimeout( () => {
        let message = 'bravo vous êtes reçu ';
        resolve(message);
        //reject('Désolé viré !');
    }, 5000 );
});

console.log('je sort de cette formation');

myPromise.then( (data) => {
    console.log(data);
} );

console.log('après avoir apris plein de chose ');
