import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const ShopSuccess = () => {

  return (
    <div>
      <h2>Successful!
        <p>Thank You For Shopping With Us, Your Order Is On Its Way</p>
      </h2>

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/drinks">Browse Drinks</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default ShopSuccess