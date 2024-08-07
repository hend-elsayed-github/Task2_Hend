import './Infocomp.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/icon-arrow.svg'

function Infocomp() {
    return(
        <div id='infodiv'>
            <div id='logodiv'>
                <img  src={logo}/>
            </div>
            <div id='textdiv'>
                <h id='we'>WE'RE</h>
                <h id='soon'>COMING SOON</h>
                <p id='bodytext'>Hello fellow shoppers! We're currently building our new fashion store.
                Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <button id='mybtn'>Email Address<div id='arrowdiv'><img id='arrow' src={arrow}/></div> </button>
            </div>
        </div>
    )
}

export default Infocomp