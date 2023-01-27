import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Categories() {
  return (
    <div>
        
        <div className="d-flex  justify-content-between flex-wrap m-2 p-2  ">
  <Link className="btn btn-outline-dark m-1" to="phones" type="button">Phones</Link>
  <Link className="btn btn-outline-dark m-1" to="tablets" type="button">Tablets</Link>
  <Link className="btn btn-outline-dark m-1" to="laptops" type="button">Laptops</Link>
  <Link className="btn btn-outline-dark m-1" to="leds" type="button">LEDs</Link>
  <Link className="btn btn-outline-dark m-1" to="routers" type="button">Routers</Link>
  <Link className="btn btn-outline-dark m-1" to="gaming" type="button">Gaming</Link>
  <Link className="btn btn-outline-dark m-1" to="software" type="button">Software</Link>
  <Link className="btn btn-outline-dark m-1" to="electronics" type="button">Electronics</Link>
  <Link className="btn btn-outline-dark m-1" to="clothes" type="button">Clothes</Link>
  <Link className="btn btn-outline-dark m-1" to="shoes" type="button">Shoes</Link>
  <Link className="btn btn-outline-dark m-1" to="watches" type="button">Watches</Link>
  <Link className="btn btn-outline-dark m-1" to="handbags" type="button">Handbags</Link>
  <Link className="btn btn-outline-dark m-1" to="toys" type="button">Toys</Link>
  <Link className="btn btn-outline-dark m-1" to="ac" type="button">AC</Link>
  <Link className="btn btn-outline-dark m-1" to="rental" type="button">Rental</Link>
</div>
<Outlet/>
    </div>
  )
}

export default Categories