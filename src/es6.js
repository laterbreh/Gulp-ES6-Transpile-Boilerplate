"use strict";
let controller;
controller = {
    getSomething: (callback) => {
        console.log('Getting something');
        setTimeout(()=>callback('I returned something'), 5000)
    }
};
controller.getSomething(something=> {
    console.log(something);
});
