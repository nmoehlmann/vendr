import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawSnacks() {
  let snack = appState.snacks
  let template = ''
  snack.forEach(s => template += s.SnackTemplate)
  setHTML('snacks', template)
}

export class SnacksController {
  constructor() {
    console.log('SnacksController online')
    _drawSnacks()
  }
}