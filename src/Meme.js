import memeData from "./memeData";
import { useEffect, useState } from "react";
import axios from "axios"
import {CgDanger } from 'react-icons/cg';
const Meme = () => {


    const [memes, setMemes] = useState({
        firstline: "",
        secondline: "",
        randomimg: "https://i.imgflip.com/1g8my4.jpg",
    });

    /*const [meme, setMeme] = useState("https://i.imgflip.com/1g8my4.jpg");*/
    //API CALL
    
    
    const [newmeme, setNewmeme] = useState([])
    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes").then(datas => {
            setNewmeme(datas.data.data.memes)
            console.log(datas)
        })
    }, [])
    console.log(newmeme)
    
    
    
    //CREATING RANDOM NUMBER AND SELECTING URL
    let url;
    function clicks() {

        const random = Math.floor(Math.random() * newmeme.length)
        console.log(random)
        url = newmeme[random].url;
        /*finding the images */
        setMemes(prev => ({
            ...prev,
            randomimg: url,

        }));
        console.log(memes)
    }


    //click button function
    function clicked(event) {
        setMemes(prev => {
            const { name, value } = event.target
            return {
                ...prev, [name]: value
            }
        })
    }
    console.log(memes.firstline)


    return (
        <main>

            <div className="form">
                <input
                    type="text"
                    name="firstline"
                    placeholder="Top text"
                    className="form--input"
                    onChange={clicked}
                    value={memes.firstline}
                />
                <input
                    type="text"
                    name="secondline"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={clicked}
                    value={memes.secondline}
                />
                <button
                    className="form--button"
                    onClick={clicks}
                >
                    Get a new meme image 🖼
                </button>

            </div>

            <div className="meme">
                <img className="meme--image" src={memes.randomimg} alt="" />
                <h2 className="meme--text top">{memes.firstline}</h2>
                <h2 className="meme--text bottom">{memes.secondline}</h2>
            </div>
            <h4 style={{
                color:"white",
                textAlign:"center",
            }}><CgDanger/>  Please screenshot the image you have created ,iam working on downloading  img ,use small text to type other wise it will over flow through the image </h4>
        </main>
    );
}

export default Meme;