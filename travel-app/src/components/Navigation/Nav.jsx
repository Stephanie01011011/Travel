import './Navstyle.css';


export default function Nav(){
    
    return (
        <>
        <div className="navContainer">
            <div className="navLogo">
                <img src="/src/images/logo.png" alt="" /> <h4>WANDER</h4>
            </div>
            <div className="navMenu">
                <div className="search"> <span className="material-symbols-outlined">
search
</span></div>
           <div className="navBtns">   <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Booking</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                </ul></div>
             
            </div>
        </div>
        </>
    )
}