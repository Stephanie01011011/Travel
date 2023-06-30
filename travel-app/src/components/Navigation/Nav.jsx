import './Navstyle.css';


export default function Nav(){
    
    return (
        <>
        <div className="navContainer">
            <div className="navLogo">
                <img src="/src/images/logo.png" alt="" /> <h4>WANDER</h4>
            </div>
            <div className="navMenu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}