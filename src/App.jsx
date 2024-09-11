import './App.css'
import RandomBoxColor from './components/RandomBoxColor'
import Product from './components/Product'
import { products } from './products.json'

function App() {



  return (
    <div className={"App"}>

      {products.map(product => <Product product={product} />)}




    </div>

  )
}

export default App
