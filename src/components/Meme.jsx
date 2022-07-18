import memeData from "../data/memeData";
const Meme = () => {
    const handleSubmit = ( form ) => {
        form.preventDefault();
        const memes = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * memes.length)
        const url = memes[randomNum].url;
        console.log(url);
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                    <input className="form--input" placeholder="Top Text" type="text" name="" id="" />
                    <input className="form--input" placeholder="Bottom Text" type="text" name="" id="" />
                    <input className="form--button" type="submit" value="Get a new meme image 🖼" name="" id="" />
            </form>
        </main>
    )
}

export default Meme