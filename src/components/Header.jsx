import logo from "../assets/image/trollFace.png"
const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Troll Face" />
                <h2>Meme Generator</h2>
            </div>
            <div className="extra">
                <h5>React Project</h5>
            </div>
        </header>
    )
}

export default Header