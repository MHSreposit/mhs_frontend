import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const urlToDownload = 'https://www.dropbox.com/scl/fi/8wjcfsqn2c3x31b7u57w5/roleta-matematica.apk?rlkey=j526g961zzc2419fas1yf1wpg&st=lpvw65dk&dl=1';

export default function Home() {
    const [download, setDownload] = useState('');
    const [buttonActive, setButtonActive] = useState(false);

    const handleClick = () => {
        setDownload(urlToDownload);
        setButtonActive(true);

        // Forçar o navegador a iniciar o download automaticamente
        window.location.href = urlToDownload;
    };

    return (
        <div className="container">
            <div className="d-flex flex-column wrapper">
                <div className="input-box bg-secondary p-4 rounded">
                    <h1 style={{ color: "red", background: "black", padding: "10px" }}>
                        <div className="App d-flex align-items-center gap-3">
                            <img src="/logomhs.png" width={100} alt="MHS" />
                            Sejam Bem Vindos
                            <img src="/background2.png" width={150} alt="" />
                        </div>
                        <p>Math High Speed</p>
                    </h1>

                    <p>
                        <Link to="/sign-in">
                            <button className="btn btn-info">LOGAR</button>
                        </Link>{" "}
                        para Jogar MHS no PC
                    </p>

                    <p>Logar e entrar para o Ranking Mundial</p>

                    <p>Instalar ROLETA MATEMÁTICA no Celular Android</p>
                    <p>
                        <button
                            className="btn btn-danger"
                            disabled={buttonActive}
                            onClick={handleClick}
                        >
                            Download do APK
                        </button>
                    </p>

                    {download && <p style={{ color: "white" }}>Aguarde o Download...</p>}

                    {download && (
                        <p>
                            <a href={download} className="btn btn-success" download>
                                Clique aqui se o download não iniciar automaticamente
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
