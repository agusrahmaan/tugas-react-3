import React from 'react'

const CardProduct = (props) => {
  return (
    <div style={{
        width:500,
        backgroundColor: 'red',
        justifyContent: 'center',
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 50,
        padding:5,
        color: 'white'
        
    }}
    onClick={() => {
        return alert(props.productName + ' dengan harga ' + props.productPrice + ' merupakan produk asli dari ciamis milik Agus Rahman') 
    }}
    >
        
        <img style={{width: '100%'}} src={props.urlImage} alt="g" />
        <p style={{padding: 10}}>{props.productName}</p>
        <h3>{props.productPrice}</h3>
    </div>
  )
}

export default CardProduct