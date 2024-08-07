
import './App.css'
import Infocomp from './components/Infocomp/Infocomp'
import Imagecomp from './components/Imagecomp/Imagecomp'
import logo from './assets/logo.svg'

function App() {

  return (
   <div id='maindiv'>
        <div id='baseinmobile'><img  src={logo}/></div>
        <div id='main2'>
        <Infocomp></Infocomp>
        <Imagecomp></Imagecomp>
        </div>
   </div>
  )
}

export default App
