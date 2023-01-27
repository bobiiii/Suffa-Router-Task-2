import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Phones from "./Components/Phones"
import {Tablets,Laptops,Leds,Routers,Gaming,
Software,Electronics,Clothes,Shoes,
Watches,Handbags,Toys,AC,Rental,Nokia,Huawei,
Infinix,Tecno,Samsung
} from "./Components/Phones"
import Categories from "./Components/Categories"
import "./App.css"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="categories" element={<Categories/>}>
        <Route path="phones" element={<Phones/>}>
          <Route path="nokia" element={<Nokia/>}/>
          <Route path="huawei" element={<Huawei/>}/>
          <Route path="infinix" element={<Infinix/>}/>
          <Route path="tecno" element={<Tecno/>}/>
          <Route path="samsung" element={<Samsung/>}/>
        </Route>
        <Route path="tablets" element={<Tablets/>}/>
        <Route path="laptops" element={<Laptops/>}/>
        <Route path="leds" element={<Leds/>}/>
        <Route path="routers" element={<Routers/>}/>
        <Route path="gaming" element={<Gaming/>}/>
        <Route path="software" element={<Software/>}/>
        <Route path="electronics" element={<Electronics/>}/>
        <Route path="clothes" element={<Clothes/>}/>
        <Route path="shoes" element={<Shoes/>}/>
        <Route path="watches" element={<Watches/>}/>
        <Route path="handbags" element={<Handbags/>}/>
        <Route path="toys" element={<Toys/>}/>
        <Route path="ac" element={<AC/>}/>
        <Route path="rental" element={<Rental/>}/>

      </Route>
        
        
        
        {/* <Route path="phones" element={<Phones/>} />
        <Route path="laptops" element={<Laptop/>} />
      <Route path="tablets" element={<Tablets/>} /> */}
      {/* <Route path="products" element={<Products/>}>
      </Route> */}
      {/* <Route path="/" element={<A/>}/> */}
      
    </Routes>
    </div>
  )
}

export default App
