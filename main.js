'use strict';
/*
Вам нужно написать функцию DeepFreeze, которая принимает объект и замораживает его и все вложенные в него объекты.

Пишем функцию которая перебирает свойства объекта и «замораживает» все объекты которые ей попадаются включая исходный:

Подсказки: заморозить означает сделать так чтобы объект нельзя было изменять.

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}


 */
void function () {
    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }
    const DeepFreeze = (obj) => {
        const objectIterate = (object) => {
            for (const property in object) {
                if (typeof (object[property]) === 'object') {
                    objectIterate(object[property]);
                }
                Object.freeze(object[property]);
            }
        }
        objectIterate(obj);
        Object.freeze(obj);
    }
    DeepFreeze(user)
    console.log(Object.isFrozen(user))
    console.log(Object.isFrozen(user.data))
    console.log(Object.isFrozen(user.data.d))
    console.log(Object.isFrozen(user.data.d.d1))
}();
