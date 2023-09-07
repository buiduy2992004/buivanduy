import React from 'react';

const Product = ({ product }) => {
  return (

    <div style={{ display:'inline-block',wordWrap:'break-word', padding:'10px', width:'250px', height:'250px', marginRight:'10px' }}>
      <img style={{ objectFit:'cover', width:'100%', height:'100%' }} src={product.image} alt={product.Name} />
      <h3 style={{ maxWidth:'100%', maxHeight:'60px', display:'-webkit-flex', overflow:'auto', maxLines:3, textOverflow:'ellipsis', wordWrap:'break-word' }} >{product.Name}</h3>
      <p>Tên: {product.name}</p>
      <p>Loại: {product.type}</p>
      <p>Giá tiền: {product.price}</p>
      <p>Thời Gian: {product.createdDate}</p>
      <button> Delete</button>
      <button> Edit</button>
      <button>All</button>
      
    </div>
  );
};

export default Product;