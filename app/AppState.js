import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack({ name: 'snickers', price: 2, imgUrl: 'https://media.istockphoto.com/id/529240903/photo/snickers-chocolate-bar-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IJG7PzXzMXAU2-PHrfI4gKZgPJqqVOxDxvLLEv9QwTo=' }),
    new Snack({ name: 'twix', price: 1.50, imgUrl: 'https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png' }),
    new Snack({ name: 'milky way', price: 3, imgUrl: 'https://www.milkywaybar.com/sites/g/files/fnmzdf631/files/migrate-product-files/navjcnc7rdmfi5v4b6qf.png' })
  ]

  /** @type {number} */
  money = 0
}



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
