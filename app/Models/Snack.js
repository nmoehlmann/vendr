export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackTemplate() {
    return `
        <div class="col-4 d-flex justify-content-evenly">
      <div class="fw-bold card px-4 d-flex flex-colum align-items-center text-center justify-content-between">
        <img
          src=${this.imgUrl}
          alt="" class="snackImg">
        <h1>${this.name}</h1>
        <p>Price: ${this.price}</p>
        <div id="buyButton">
          <button class="btn btn-dark" onclick="app.moneyController.buySnack('${this.name}')">Buy</button>
        </div>
      </div>
    </div>`
  }
}