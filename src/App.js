import Navbar from "./navbar"
import Products from './products'
import About from './about'
import Contact from './contact'
function Input() {
    return (
      <div className='input'>
        <input type="text" placeholder='Search' />
      </div>
    )
  }
function App() {
    return (
        <>
            <Navbar></Navbar>
            <Input></Input>
            <Products></Products>
            <About></About>
            <Contact></Contact>
        </>
    )
}
export default App