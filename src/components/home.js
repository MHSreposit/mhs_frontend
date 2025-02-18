import React, {useState} from "react";
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const urlToDownload = 'https://drive.google.com/uc?export=download&id=1h9KLTAq0BnRc7aLTysZCgWJ3BOHo3Wm3'
export default function Home () {
    const [download, setDownload] = useState('');
    const [buttonActive, setbuttonActive] = useState (false);

    const handleClick = () => {
        setDownload(urlToDownload);
        setbuttonActive(true);
    }

    return (
        <div class="container">
        <div class="d-flex flex-column wrapper">
        <div className="input-box bg-secondary">
            <h1  style={{color: "red", background: "black"}}><div className="App"><img src="/logomhs.png" width={100} alt="MHS"></img>
                Sejam Bem Vindos <img src="/background2.png" width={150}></img> </div>
                <p>Math High Speed</p></h1>
            <p><a href="sign-in">
                    <button className="btn btn-info">LOGAR</button>
                </a> para Jogar MHS no PC
            </p>
            <p>Logar e entrar para o Ranking Mundial</p>
            
            <p>Instalar MHS no Celular Android
                <p><button className="btn btn-danger" disabled={buttonActive} onClick={handleClick}>Download do APK</button></p>
                {download && <p style={{color:"white"}}> Aguarde o Download - após Download concluido extraia o APK compactado.</p>};
                <p>{download}</p>
                {download &&  <iframe src={download}></iframe>}
            </p>
        </div>
        </div>
        </div>
    )
}