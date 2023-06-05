import React from 'react'
import CardProduct from './CardProduct'

const Dashboard = () => {

    const listProduct = [
        {
          id: 1,
          productName: 'Sneakers Converse CTAS',
          productPrice: 'Rp. 1.000.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
        },
        {
          id: 2,
          productName: 'Converse Run Star Motion Canvas',
          productPrice: 'Rp. 3.799.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
          id: 3,
          productName: 'Converse CTAS Construct Colorblock',
          productPrice: 'Rp. 2.299.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
          id: 4,
          productName: 'Converse Chuck Taylor All Star',
          productPrice: 'Rp. 999.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
          id: 5,
          productName: 'Converse Unisex Chuck 70 Plus',
          productPrice: 'Rp. 5.499.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
      ]

  return (
    <div style={{
        display: 'flex'
    }}>
        {
            listProduct.map((value) => {
                return <CardProduct id={value.id} urlImage={value.urlImage} productName={value.productName} productPrice={value.productPrice}  />
            })
        }
    </div>
  )
}

export default Dashboard