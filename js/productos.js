class Product {
  static id = 0;
  constructor(name, price,imageSrc) {
    this.prodId = ++Product.id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
  }
}
const container = document.getElementById("productsContainer");
const prod1 = new Product("SUDADERA LAVADA", 5499, "../../images/suda1.jpg");
const prod2 = new Product("CAMISA NEGRA", 5599,"../../images/camisa2.jpg");
const prod3 = new Product("JOGGER LAVADO", 3599,"../../images/pant2.jpg");
const prod4 = new Product("PANTALON NEGRO", 9499,"../../images/pant1.jpg");
const mockdata = [prod1, prod2, prod3, prod4];
document.addEventListener("DOMContentLoaded", () => {
  for (const product of mockdata) {
    container.innerHTML += `
    <div id="producto${product.prodId}" class="col-sm-12 col-md-6 productItem">
    <a href="product/index.html"
      ><img class="productImage" src=${product.imageSrc}
    /></a>
    <div class="flex productInfo">
      <a href="product/index.html">
        <h3>${product.name}</h3>
      </a>
      <p class="price">${product.price}</p>
    </div>
  </div>`;
  }
});
