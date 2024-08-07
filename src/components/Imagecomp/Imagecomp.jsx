import './Imagecomp.css'
import desktopimage from '../../assets/hero-desktop.jpg'

function Imagecomp(){
    return(
        <div id='imagediv'>
            <img id='myimage' src={desktopimage} />
        </div>
    )
}

export default Imagecomp