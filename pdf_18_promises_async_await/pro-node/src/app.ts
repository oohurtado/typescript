
import { promise01 } from './01_promise_resuelta'
import { promise02 } from './02_promise_numerica'

let op = 2

if (op == 1) {
    promise01.then(p => console.log(p))
} else if (op == 2) {
    promise02.then(p => console.log(p))
}
    