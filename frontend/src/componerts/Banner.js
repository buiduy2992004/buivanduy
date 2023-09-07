import React from 'react'
import ProductList from './banner/ProductList'


export const Banner = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column',
     width:'100%',overflowX:'scroll', whiteSpace:'nowrap',
    
    // overflow-x: scroll;
    // white-space: nowrap;
    backgroundColor:'white' }}>

    <ProductList/>
    <ProductList/>
    <ProductList/>
    </div>
  )
}