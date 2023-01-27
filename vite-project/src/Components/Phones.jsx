import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Phones() {
 const arr=["samsung", "huawei", "Nokia", "Tecno", "Infinix"]
 
 return (<>
    <div className='phones p-3 text-center' >Phones Component</div>
    <div className="d-flex  justify-content-evenly flex-wrap m-2 p-2  ">
  {arr.map((item)=>{
    return(
      <Link key={item} className="btn btn-outline-primary m-1" to={item} type="button">{item}</Link>
    )
    
  })}
  </div>
  <Outlet/>
    </>)
}

export default Phones


export  function Tablets() {
  return (
    <div className='phones p-3 text-center'>Tablets</div>
  )
}
export  function Laptops() {
  return (
    <div className='phones p-3 text-center'>Laptops</div>
  )
}
export  function Leds() {
  return (
    <div className='phones p-3 text-center'>LEDs</div>
  )
}
export  function Routers() {
  return (
    <div className='phones p-3 text-center'>Routers</div>
  )
}
export  function Gaming() {
  return (
    <div className='phones p-3 text-center'>Gaming</div>
  )
}
export  function Software() {
  return (
    <div className='phones p-3 text-center'>Software</div>
  )
}
export  function Electronics() {
  return (
    <div className='phones p-3 text-center'>Electronics</div>
  )
}
export  function Clothes() {
  return (
    <div className='phones p-3 text-center'>Clothes</div>
  )
}
export  function Shoes() {
  return (
    <div className='phones p-3 text-center'>Shoes</div>
  )
}
export  function Watches() {
  return (
    <div className='phones p-3 text-center'>Watches</div>
  )
}
export  function Handbags() {
  return (
    <div className='phones p-3 text-center'>Handbags</div>
  )
}
export  function Toys() {
  return (
    <div className='phones p-3 text-center'>Toys</div>
  )
}
export  function AC() {
  return (
    <div className='phones p-3 text-center'>AC</div>
  )
}
export  function Rental() {
  return (
    <div className='phones p-3 text-center'>Rental</div>
  )
}

export  function Nokia() {
  return (
    <div className='phones p-3 text-center'>Nokia</div>
  )
}
export  function Huawei() {
  return (
    <div className='phones p-3 text-center'>Huawei</div>
  )
}
export  function Infinix() {
  return (
    <div className='phones p-3 text-center'>Infinix</div>
  )
}
export  function Tecno() {
  return (
    <div className='phones p-3 text-center'>Tecno</div>
  )
}
export  function Samsung() {
  return (
    <div className='phones p-3 text-center'>Samsung</div>
  )
}