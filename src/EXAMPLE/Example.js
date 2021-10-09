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