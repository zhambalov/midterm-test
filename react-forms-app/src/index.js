import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

function App() {
  return (
    <div>
      <h1>Add Product</h1>
      <AddProduct />
      <h1>Sign Up User</h1>
      <SignUpUser />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
