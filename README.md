# SDK for Anymarket HUB
[![npm version](https://img.shields.io/npm/v/@doocacommerce/anymarket-sdk.svg?style=flat-square)](https://www.npmjs.org/package/@doocacommerce/anymarket-sdk)
[![npm downloads](https://img.shields.io/npm/dm/@doocacommerce/anymarket-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@doocacommerce/anymarket-sdk)
[![install size](https://flat.badgen.net/packagephobia/install/@doocacommerce/anymarket-sdk)](https://flat.badgen.net/packagephobia/install/@doocacommerce/anymarket-sdk)
[![license](https://flat.badgen.net/npm/license/@doocacommerce/anymarket-sdk)](https://flat.badgen.net/npm/license/@doocacommerce/anymarket-sdk)


### Documentation [http://developers.anymarket.com.br/tools.html](http://developers.anymarket.com.br/tools.html)

## Usage

```
$ sudo yarn add @doocacommerce/anymarket-sdk
```
or
```
$ sudo npm i @doocacommerce/anymarket-sdk
```

```javascript
const anymartket = require('anymarket-sdk');

anymarket.configure({
	mode: 'sandbox',
	gumgaToken: '{gumgaToken}',
});
```

Sample

```javascript
const anymartket = require('anymarket-sdk');

try {
	const params = {}; // optional params
	const getData = await anymarket.brands.get(params);
	console.log('getData', getData);
} catch (err) {
	console.log(err.toString());
}
```

Or `getFirst` sample

```javascript
const { brands } = require('anymarket-sdk');

try {
	const id = 123;
	const getData = await brands.getFirst(id);
	console.log('getData', getData);
} catch (err) {
	console.log(err.toString());
}
```

## Development

#### Available methods of SDK request:

-   [brands](#brands) / [Marca](http://developers.anymarket.com.br/v2/index.html#!/Marca)
-   [categories](#categories) / [Categoria](http://developers.anymarket.com.br/v2/index.html#!/Categoria)
-   [products](#products) / [Produto](http://developers.anymarket.com.br/v2/index.html#!/Produto)
-   [skus](#skus) / [SKU](http://developers.anymarket.com.br/v2/index.html#!/SKU)
-   [variations](#variations) / [Tipos de variação](http://developers.anymarket.com.br/v2/index.html#!/Tipos_de_varia%C3%A7%C3%A3o)
-   [variationsValues](#variationsvalues) / [Valores de variação](http://developers.anymarket.com.br/v2/index.html#!/Valores_de_varia%C3%A7%C3%A3o)
-   [stocks](#brands) / [Estoque](http://developers.anymarket.com.br/v2/index.html#!/Estoque)
-   [images](#images) / [Imagem](http://developers.anymarket.com.br/v2/index.html#!/Imagem)
-   [orders](#orders) / [Pedido](http://developers.anymarket.com.br/v2/index.html#!/Pedido)
-   [ordersFeed](#ordersfeed) / [Feed pedido](http://developers.anymarket.com.br/v2/index.html#!/Feed_pedido)

#### <a id="brands"></a>Brands

```javascript
const { brands } = require('anymarket-sdk');

brands.create({ Object });
brands.get({ Object }); // params { limit:5, offset: 5 }
brands.getFirst(123);
brands.update(id, { Object });
brands.delete(123); // or { id: 123 }
```

#### <a id="categories"></a>Categories

```javascript
const { categories } = require('anymarket-sdk');

categories.create({ Object });
categories.get({ Object }); // params { limit:5, offset: 5 }
categories.getFirst(123);
categories.getFullPath({ Object }); // get category tree { limit: 5, offset: 5 }
categories.update(id, { Object });
categories.delete(123); // or { id: 123 }
```

#### <a id="products"></a>Products

```javascript
const { products } = require('anymarket-sdk');

products.create({ Object });
products.get({ Object }); // params { limit:5, offset: 5 }
products.getFirst(123);
products.update(id, { Object });
```

#### <a id="variations"></a>Variations

```javascript
const { variations } = require('anymarket-sdk');

variations.create({ Object });
variations.get({ Object }); // params { limit:5, offset: 5 }
variations.getFirst(123);
variations.update(id, { Object });
variations.delete(123); // or { id: 123 } - (productId as id)
```

#### <a id="variationvalues"></a>Variations Values

```javascript
const { variationsValues } = require('anymarket-sdk');
const variationId = 123;

variationsValues.create(variationId, { Object });
variationsValues.get({ Object }); // params { id: 123, limit:5, offset: 5 } - *required id of variation
variationsValues.getFirst(123); // get all values of variation group
variationsValues.update({ id: productId, valueId: skuId }, { Object });
variationsValues.delete({ id: productId, valueId: skuId });
```

#### <a id="skus"></a>SKUS

```javascript
const { skus } = require('anymarket-sdk');
const productId = 123;

skus.create(productId, { Object });
skus.get({ Object }); // params { id: productId, limit:5, offset: 5 } *required id of product
skus.getFirst(productId); // get all skus of product
skus.update({ id: productId, skuId: skuId }, { Object });
```

#### <a id="images"></a>Images

```javascript
const { images } = require('anymarket-sdk');
const productId = 123;

images.create(productId, { Object });
images.get({ Object }); // params { limit:5, offset: 5 }
images.getFirst(productId); // get all images of product
images.delete({ id: productId, imageId: imageId });
```

#### <a id="stocks"></a>Stocks

```javascript
const { stocks } = require('anymarket-sdk');

stocks.update({Object}[]); // array of objects
```

#### <a id="orders"></a>Orders

```javascript
const { orders } = require('anymarket-sdk');

orders.get();
orders.create({ Object });
orders.update(123, { Object });
orders.updateNfe(123, { Object });
```

#### <a id="ordersfeed"></a>Orders Feed

```javascript
const { ordersFeed } = require('anymarket-sdk');

ordersFeed.get();
ordersFeed.update(123, { Object });
```
