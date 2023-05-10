// import { ValuesController } from "./Controllers/ValuesController.js";
import { MoneyController } from "./Controllers/MoneyController.js"
import { SnacksController } from "./Controllers/SnacksController.js"

class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController()
  snacksController = new SnacksController()
}

window["app"] = new App();
