// console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

//console.dir(function(){});
//console.dir(()=>{});

// function Test (name, age) {
//     //let tempObj = {};
//     //this = tempObj;
//     this.name = name;
//     this.age = age;
//     //this.sayHi = function(){};
// }
//
// Test.prototype.sayHi = function(){};
//
// let obj = new Test('Evgen', 30);
// console.log(obj);


// type TestFuncType = {
//     name: string;
// }
//
// function TestFunc( this: TestFuncType, name: string) {
//     this.name = name;
// }
//
// let result:TestFuncType = new (TestFunc as any)('Evgen');
// console.log(result);

// class Test {
//     name: string;
//     //sayHi: Function;
//
//     constructor(name: string) {
//         this.name = name;
//         //this.sayHi = function () {};
//         //@ts-ignore
//         //return [10,50];
//         //return 10;
//     }
//
//     sayHi() {
//         console.log('Hi');
//     }
//
//     sayBye = () => {
//         console.log('Bye');
//     }
// }
//
// // let obj = new Test('Evgen');
// //
// // console.log(obj)
//
// class Test2 extends Test {
//     age: number;
//
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     sayYo() {}
//
//     sayHi() {
//         console.log('Hi hi hi hi');
//         super.sayHi();
//     }
//
//     sayBye = () => {
//         console.log('Yo Yo Yo Bye');
//     }
// }
//
// let obj = new Test2('Evgen', 33);
//
// console.log(obj)
// obj.sayHi();

/////////

// interface ITest {
//     name: string,
//     sayHi: Function,
// }
//
// interface ITest2 {
//     name: string,
//     sayBye: (arg: number) =>  number,
// }
//
// class Test implements ITest, ITest2 {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     sayHi() {}
//
//     sayBye(arg: number) {
//         return arg;
//     }
// }


/////////

// class Test {
//
//     //private fullName: string = 'Eugene Sheuchuk';
//
//     constructor(public name: string, public age: number, private fullName: string) {
//
//     }
//
//     sayHi() {
//         this.fullName = 'Yo yo yo ';
//         console.log(this.fullName);
//     }
//
// }
//
// let obj = new Test('Evg', 33, 'zxcvznbdzj');
// console.log(obj)
// obj.sayHi();
// //@ts-ignore
// obj.fullName = 'aaaa';
// console.log(obj)

////////
// class Student {
//     static testParam = 10;
//
//     constructor(public name: string, public age: number ) {}
//
//     sayHi() {
//         console.log(this.name);
//     }
//
//     static showStudent(s: Student[]) {
//         console.log(s);
//         console.log(this.testParam);
//     }
// }
//
// let sObj = new Student('Evgene', 33);
// //console.log(sObj)
// //Student.showStudent(sObj);
// console.dir(Student)


/////

// class Test {
//     private testParam: number = 10;
//
//     get param(): number {
//         return this.testParam;
//     }
//
//     set param(value) {
//         this.testParam = value;
//     }
// }
//
// let obj = new Test();
// console.log(obj.param);
// obj.param = 50;
// console.log(obj.param);
// console.log(obj)


/////////

// class Test {
//     constructor(public name: string) {}
//
//     sayHi(){}
// }
//
// class Test2 extends Test {
//     constructor(public name: string, public age: number) {
//         super(name);
//     }
//
//     sayBye() {}
// }
//
// class Test3 extends Test2 {
//     constructor(public name: string, public age: number, public city: string) {
//         super(name, age);
//     }
//
//     sayCity(){}
// }
//
// let obj = new Test3('Evgen', 33, 'Minsk');
// console.log(obj);

// Task 01
// ???????????????? ?????????????????? ?? ???????????? student, ???????????????????? ????????: ?????? ?? ??????????????, ?????????? ????????????, ???????????????????????? (???????????? ???? ???????? ??????????????????).
// ?????????????? ???????????? ???? ???????????? ?????????????????? ???????????? ????????, ?????????????????????? ???????????? ???? ?????????????????????? ???????????????? ??????????.
// ???????????????? ?????????????????????? ???????????? ?????????????? ?? ?????????????? ?????????? ??????????????????, ?????????????? ????????????, ???????????? ???????????? 4 ?????? 5.

// Task 02
// ?????????????? ?????????? ?? ?????????? ??????????????????????. ???????????????? ?????????????????????? ?? ???????????????? ?????????????????????? ?? ???????????????????????????????? ?????????? ???????????? ???? ??????????????????.
// ?????????? ???? ?????????????? ?????????? ???? ???????????????????? ???????????? ?????????????? ?????????? ?????????????? ?????? ?????????????????? ?????????????
// ?????????? ???? ?????????????? ?????????? ???????????? ?????????????? ?????????? ?????????????? ?????????????????? ?????????????

// Task 03
// ?????????????????? ???????????????? ???????????? ?????? ?????????????????????????? ??????????????. ?????????????????????????? ?????????????????????? ?????????????????? ?????????????? ?? ?????????????????? ?????? ??????????????????
// ?????????? (??????, ????????????, ??????????????) ?? ?????????????????? ???????????????????????? ???????????????? ????????????????. ?? ???????????? ???????????????????????? ???????????????? ?????????? ?????????????????????????? ????????????????????.
// ?????????????? ???????????? ?????????????????? ?????????????? ???? ???????????????? ???????????????????? ??????????, ?????????? ?? ????????????.
// ?????????????? ?????????? ?????????????????? ?????????? ?? ???????????? ?????????????? HH:MM:SS
// ?????????????? ?????????? ???? ???????????????????????????? ????????????????

// Task 04
// ?????????? ????????????????????: ??????????????, ??????, ??????????, ?????????? ?????????????????????? ??????????;
// ????????????: ?????????????????? ???????????????? ??????????????????, ?????????????????? ???????????????? ??????????????????, ?????????? ????????????????????.
// ?????????????? ???????????? ???????????????? ?????????????? ????????????.
// ?????????????? ???????????? ?????????????????????? ?? ???????????????????? ?????????????? ?? ???????????? ??????????????????????, ?? ?????????????? ?????????? ?????????????????? ???????????????? ?????????????????? ?? ???????????????? ??????????????????.

// Task 05
// ?????????????? ?????????? ???????????? - ?????????????? ??????????, ?????????? ??????????????????, ????????????????. ???????????????????? ?????????????????????? ?? ?????????????? ????????????.
// ?????????????? ?????????????????????? ?????????? ??? ????????????????, ?????????????? ???????????????????????????????? ????????????.
// ???????????????????? ?????????????? ???????????????????????????? ?????????? ?? ????????????????????????????????.

// just a plug
export default () => {
};