import React from "react"
import memeData from "../data/memeData";
const Meme = () => {
    let [url, setUrl] = React.useState("");
    const handleSubmit = (form) => {
        form.preventDefault();
        const memes = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * memes.length)
        url = memes[randomNum].url;
        setUrl(url);
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                <input className="form--input" placeholder="Top Text" type="text" name="" id="" />
                <input className="form--input" placeholder="Bottom Text" type="text" name="" id="" />
                <input className="form--button" type="submit" value="Get a new meme image 🖼" name="" id="" />
            </form>
            <img src={url} alt="" />
        </main>
    )
}

export default Meme