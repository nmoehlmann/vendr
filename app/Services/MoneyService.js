import { appState } from "../AppState.js"

class MoneyService {
  addFunds() {
    appState.money += .25
  }

  buySnack(snackName) {
    let foundSnack = appState.snacks.find(s => s.name == snackName)
    // @ts-ignore
    if (appState.money < foundSnack.price) {
      alert('you dont have enough money :()')
      return
    } else {
      // @ts-ignore
      appState.money -= foundSnack.price
    }
  }
}

export const moneyService = new MoneyService()