import React from 'react'
import { Outlet } from 'react-router-dom'

function Products() {
  return (<>
  <div className='prnt-comp container-fluid w-75 rounded-2 my-3 p-3 text-center border '>
    <h3>Products Component</h3>
    <Outlet/>
    </div>
    </>
  )
}

export default Products