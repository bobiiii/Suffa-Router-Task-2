import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Products from "./Components/Products"
import Phones from "./Components/Phones"
import Tablets from "./Components/Tablets"
import Laptop from "./Components/Laptop"
import "./App.css"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="products" element={<Products/>}>
        <Route path="phones" element={<Phones/>} />
        <Route path="laptops" element={<Laptop/>} />
        <Route path="tablets" element={<Tablets/>} />
      </Route>
      {/* <Route path="/" element={<A/>}/> */}
      
    </Routes>
    </div>
  )
}

export default App
