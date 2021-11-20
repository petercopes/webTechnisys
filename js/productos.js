
const container = document.getElementById("productsContainer");

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

$('document').ready(async() => {
  const productos = await $.get('https://60d8bcffeec56d00174774a8.mockapi.io/productos');
  for (const product of productos) {
    productDiv = createProductDiv(product);
    container.appendChild(productDiv);
    
  }
});
