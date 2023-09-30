import "./EvaluacionCentro.css"



export const EvaluacionCentro = () => {
    return (
        <>
            <div className="containerEvaluacionCentro">

                <div className="tituloEvaluacionCentro">
                    <div> <h2 className="tituloEvaluacion">Calificaciones de Clientes</h2></div>
                    <div className="estrellasCantidadComentarios">
                        <div className="estrellas">
                            <svg className="estrella" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"></path></g></svg>
                            <svg className="estrella" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"></path></g></svg>
                            <svg className="estrella" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"></path></g></svg>
                            <svg className="estrella" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"></path></g></svg>
                            <svg className="estrella" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"></path></g></svg>

                        </div>
                        <div><b><span>5/5</span></b></div>
                        <div><b><span>3 comentarios</span></b></div>
                        <div><button className="evaluarBoton">Evaluar</button></div>
                    </div>
                    </div>


                <div className="criteriosRanking">

                    <div className="ranking">
                        <div>
                            <b><span>Características</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>
                    <div className="ranking">
                        <div>
                            <b><span>Sonido</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>
                    <div className="ranking">
                        <div>
                            <b><span>Fabricación</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}








