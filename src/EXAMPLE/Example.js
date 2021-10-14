import {log} from "util";

console.log('EXAMPLE')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*console.log(5 + '2')  //52
console.log(5 - '2') // 3
console.log(5 * '2') //10
console.log(true + true) // 2
console.log([12, 2, 3] + {}) // 1,2,3[object Object]*/


////////////////////////////////////

/*const user = {
    name: 'Alex',
    hello: function () {
        console.log(`Hello, ${this.name}`)
    }
}
setTimeout(() => user.hello(), 10)
setTimeout(user.hello.bind(user), 10)*/

///////////////////////////////////////


/*
const a = {

    go: function () {
        console.log(this.toString()) //[object Object]
    },
    run: () => {
        console.log(this) //undefined/window
    },
    stop: function () {
        (() => {
            console.log(this) //{go: ƒ, run: ƒ, stop: ƒ}
        })()
    }
}

a.go()
a.run()
a.stop()
*/

///////////////////////////////

/*
function User(name) {
    this.name = name
    console.log(this)
    return this
}

const admin = new User("Alex")
const developer = User("Hanna")

name = "John"

console.log(admin.name)
console.log(developer.name)
*/

///////////////////////////////////////////////

/*const a = {
    name: 'a',
    getName: function () {
        console.log(this.name)
    }
}

const b = Object.assign({name: 'b'}, a)
const c = Object.create(a, {
    name: {
        value: 'c',
        configurable: true,
        writable: true,
        enumerable: false
    }
})

b.getName()
c.getName()

console.log(c.__proto__ === a)*/

///////////////////////////////////////////////////////////////////////////

/*
new Promise((resolve) => {
    resolve(1)
})

    .then(res => {
        console.log(res)
        return new Promise(() => (2))
    })
    .then(res => {
        console.log(res)
    })

    .then(res => console.log(res))
*/

/*const arr = [-1, -2, 10, 1, 4, 5, 2]

const getMaxWithIndex = (arr) => {
    let temp = [0]

    arr.forEach((number, index) => {
        if (number > temp[0]) {
            temp[0] = number
            temp[1] = index
        }

    })
    return temp
}

console.log(getMaxWithIndex(arr))*/
///////////////////////////////////////////////////////////////////////////////


/*const arr = [-1, -2, 10, 1, 4, 5, 2]

const getMaxWithIndex = (arr) => {
    let resultNum = arr[0]
    let resultIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (resultNum < arr[i]) {
            resultNum = arr[i]
            resultIndex = i
        }
    }
    return [resultNum, resultIndex]
}

console.log(getMaxWithIndex(arr))*/


export default () => {
};

/*
const foo = () => {

    console.log(a)
    console.log(bar())

    function bar() {
        return 2
    }

    var a = 2
}
foo()

*/

// (() => {
//     let b
//     let a = b = 5
//
// })()
// console.log(b)
//


// const a = (x, y) => {
//     console.log(y)
//
//     return {
//         obj: (z) => {
//             a(y, z)
//         }
//     }
//
// }
//
// const res = a(1)
// res.obj(2)
// res.obj(3)
// res.obj(4)

// name = 'John'
// const a = {
//     name: 'Colin',
//     prop: {
//         name: 'Aurelio',
//         getName: function () {
//             return this.name
//         }
//     }
// }
//
// console.log(a.prop.getName())
// const test = a.prop.getName
// console.log(test())

// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }


// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
//
// }
//
// let animal = {
//     eats: true
// }
//
// function Rabbit(name) {
//     // this.eats = animal
//     this.name = name
// }
//
// Rabbit.prototype = animal
//
// let rabbit = new Rabbit('White Rabbit')
//
// console.log(rabbit.eats)

// function Rabbit(name) {
//     this.name = name;
//     console.log(name)
// }
//
// let rabbit = new Rabbit('White Rabbit');
// let rabbit2 = new rabbit.constructor('Black Rabbit')

// function Rabbit() {
//
// }
//
// Rabbit.prototype = {
//     jumps: true,
//     constructor: Rabbit
// }
//
// let rabbit = new Rabbit();
//
// console.log(rabbit.constructor === Rabbit)

//
// const a = {
//     toString() {
//         return 'key of a'
//     },
//     b: {
//         name:'b'
//     }
// }
//
// const c = {}
// c[a]= 'a'
// c.b = a.b.name
// console.log(c)

// String.prototype.add = function (str) {
//     return this + str
// }
//
// const arr = [1, 2, 3]
//
// console.log(
//     arr.map(n => n * 2)
// )
//
// console.log(
//     arr.some(n => n * 2)
// )
//
// console.log(
//     arr
//         .join("a")
//         .replaceAll("a", '0,')
//         .add("0")
//         .split(",")
//         .map(n => +n)
//         .reduce((acc, n) => {
//             acc[n] = n
//             return acc
//         }, {})
// )

// function foo(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const a = foo(1)(2)(3);
// console.log(a);


// function foo(a) {
//     return function (b) {
//         return function (c) {
//             return `${a}${b}${c}`
//         }
//     }
// }
//
// console.log(foo(1)(2)(3))

// String.prototype.repeatify = function (n) {
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(this)
//     }
//     return arr.join("")
// }
//
// console.log(
//     "hi".repeatify(4)
// )
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// this.bark = function () {
//     if (this.weight > 25) {
//         console.log(this.species + " species");
//     } else {
//         console.log(this.bla + "bla");
//     }
// };
//
// }

// Dog.prototype.species = "Canine";
// Dog.prototype.bla = "bla";
// Dog.prototype.bark = function () {
//     if (this.weight > 25) {
//         console.log(this.species + " says Woof!");
//     } else {
//         console.log(this.bla + " says Yip!");
//     }
// };
// Dog.prototype.run = function () {
//     console.log("Run!");
// };
// Dog.prototype.wag = function () {
//     console.log("Wag!");
// };
// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 24);
// var spot = new Dog("Spot", "Chihuahua", 10);
// spot.bark = function () {
//     console.log(this.name + " says WOOF!");
// };
//
// var barnaby = new Dog("Barnaby", "Basset Hound", 55);
// Dog.prototype.sit = function () {
//     console.log(this.name + " is now sitting");
// }
//
//
// fido.sit();
// fido.bark();
// fido.run();
// fido.wag();
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
// spot.bark();
// spot.run();
// spot.wag();
// barnaby.sit();