
// import { promise01 } from './01_promise_resuelta'
// promise01.then(p => console.log(p))

// import { promise02 } from './02_promise_numerica'
// promise02.then(p => console.log(p))

// import { promise03 } from './03_promise_rechazada'
// promise03.catch((p:Error) => console.log(p.message))

// import { promise04 } from './04_promise_finally'
// promise04.finally(() => console.log('lol 2'))

// import { delay } from './05_retraso'
// (async () => {
//     console.log('inicia!')
//     await delay(2000)
//     console.log('termina!');
// })();

// import { sayHi } from './06_funcion_async'
// (async () => {
//     let a = await sayHi('oscar')
//     console.log(a)
// })()

import { calculate } from './07_await_basico'
(async() => {
    await calculate()
    console.log('fin')
})();