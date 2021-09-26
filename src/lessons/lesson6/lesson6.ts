console.log('Lesson 6');

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
class Student {
    static testParam = 10;

    constructor(public name: string, public age: number ) {}

    sayHi() {
        console.log(this.name);
    }

    static showStudent(s: Student[]) {
        console.log(s);
        console.log(this.testParam);
    }
}

let sObj = new Student('Evgene', 33);
//console.log(sObj)
//Student.showStudent(sObj);
console.dir(Student)


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

class Test {
    constructor(public name: string) {}

    sayHi(){}
}

class Test2 extends Test {
    constructor(public name: string, public age: number) {
        super(name);
    }

    sayBye() {}
}

class Test3 extends Test2 {
    constructor(public name: string, public age: number, public city: string) {
        super(name, age);
    }

    sayCity(){}
}

let obj = new Test3('Evgen', 33, 'Minsk');
console.log(obj);

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};