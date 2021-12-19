import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/products', (req, res, next) => {
  return res.send(
    '<h1>Product ' + req.body.productname + ' has been added.</h1>'
  );
});

app.get('/', (req, res) => {
  res.send(`
    <form action="/products" method="POST">
      <input type="text" name="productname" />
      <button>Add product</button>
    </form>
  `);
});

app.listen(4000, () => console.log('Server is started.'));
