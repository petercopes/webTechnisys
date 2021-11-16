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
function createProductDiv (product) {
  let productDiv = document.createElement('div');
  productDiv.classList.add("col-sm-12");
  productDiv.classList.add('col-md-6');
  productDiv.classList.add('productItem');
  productDiv.id = `producto${product.prodId}`;
  let link = document.createElement('a');
  link.setAttribute('href','product/index.html');
  let image = document.createElement('img');
  image.setAttribute('src',product.imageSrc);
  image.classList.add('productImage');
  link.appendChild(image);
  let productInfoDiv = document.createElement('div');
  productInfoDiv.classList.add('flex');
  productInfoDiv.classList.add('productInfo'); 
  let titleLink = document.createElement('a');
  titleLink.setAttribute('href','product/index.html');
  let title = document.createElement('h3');
  title.innerText = product.name;
  titleLink.appendChild(title);
  let price = document.createElement('p');
  price.innerText= product.price;
  price.classList.add('price');
  productInfoDiv.appendChild(titleLink);
  productInfoDiv.appendChild(price);
  productDiv.appendChild(link);
  productDiv.appendChild(productInfoDiv);
  return productDiv;
}

$('document').ready(() => {
  for (const product of mockdata) {
    productDiv = createProductDiv(product);
    container.appendChild(productDiv);
    
  }
});
