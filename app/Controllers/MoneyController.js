import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"


function _drawFunds() {
  console.log('drawing coins')
  let funds = appState.money
  // @ts-ignore
  document.getElementById('money').innerText = `${funds}`
}


export class MoneyController {
  constructor() {
    console.log('money controller online')
    appState.on('money', _drawFunds)
  }

  addFunds() {
    moneyService.addFunds()
    console.log('adding funds')
  }

  buySnack(snackName) {
    console.log('buying snack')
    console.log(snackName)
    moneyService.buySnack(snackName)
  }
}