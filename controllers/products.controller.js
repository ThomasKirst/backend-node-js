function getProductForm(request, response) {
  response.send(`
      <form action="/products" method="POST">
        <input type="text" name="productname" />
        <button>Add product</button>
      </form>
  `);
}

function postProduct(request, response) {
  const { productname } = request.body;
  response.send(`<h1>Product ${productname} has been added.`);
}

export { getProductForm, postProduct };