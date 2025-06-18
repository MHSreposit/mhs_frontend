import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const urlAPK = 'https://www.dropbox.com/scl/fi/8wjcfsqn2c3x31b7u57w5/roleta-matematica.apk?rlkey=j526g961zzc2419fas1yf1wpg&st=lpvw65dk&dl=1';
const urlViewSimple = 'https://www.dropbox.com/scl/fi/8ijbar7yffcobdi4lo3dl/ViewSimple-1.0.exe?rlkey=1nj71s1x266h7jlk7qnrpmeos&st=rwo301en&dl=1';

export default function Home() {
    const [apkDownloaded, setApkDownloaded] = useState(false);
    const [viewDownloaded, setViewDownloaded] = useState(false);

    const handleApkDownload = () => {
        setApkDownloaded(true);
        window.location.href = urlAPK;
    };

    const handleViewDownload = () => {
        setViewDownloaded(true);
        window.location.href = urlViewSimple;
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

                    {/* Download ROLETA MATEMÁTICA */}
                    <p>Instalar ROLETA MATEMÁTICA no Celular Android</p>
                    <p>
                        <button
                            className="btn btn-danger"
                            disabled={apkDownloaded}
                            onClick={handleApkDownload}
                        >
                            Download do APK
                        </button>
                    </p>
                    {apkDownloaded && <p style={{ color: "white" }}>Aguarde o Download...</p>}
                    {apkDownloaded && (
                        <p>
                            <a href={urlAPK} className="btn btn-success" download>
                                Clique aqui se o download não iniciar automaticamente
                            </a>
                        </p>
                    )}

                    {/* Download VIEW SIMPLE */}
                    <p>Instalar VIEW SIMPLE - Visualizador de Imagens</p>
                    <p>
                        <button
                            className="btn btn-danger"
                            disabled={viewDownloaded}
                            onClick={handleViewDownload}
                        >
                            Download ViewSimple
                        </button>
                    </p>
                    {viewDownloaded && <p style={{ color: "white" }}>Aguarde o Download...</p>}
                    {viewDownloaded && (
                        <p>
                            <a href={urlViewSimple} className="btn btn-success" download>
                                Clique aqui se o download não iniciar automaticamente
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
