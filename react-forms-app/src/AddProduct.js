import React from 'react';

function AddProduct() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [price, setPrice] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const product = {
      name: name,
      description: description,
      category: category,
      quantity: quantity,
      price: price
    };
    alert(JSON.stringify(product));
    console.log(product);
  }

  function handleCancel() {
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      
      <button type="submit">SUBMIT</button>
      <button type="button" onClick={handleCancel}>CANCEL</button>
    </form>
  );
}

export default AddProduct;
