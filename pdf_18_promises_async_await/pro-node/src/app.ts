
import { promise01 } from './01_promise_resuelta'
import { promise02 } from './02_promise_numerica'
import { promise03 } from './03_promise_rechazada'

let op = 3

if (op == 1) {
    promise01.then(p => console.log(p))
} else if (op == 2) {
    promise02.then(p => console.log(p))
} else if ( op == 3) {
    promise03.catch((p:Error) => console.log(p.message))
}
    