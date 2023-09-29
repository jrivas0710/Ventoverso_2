import './Comentarios.css'

export const Comentario = () => {
    return (
        <>
            <div className='containerComentarioEvaluaciones'>
                <div className='containerComentario'>

                    <div className='avatarTexto'>
                        <div className='avatarUser'><img src="" alt="avatarUer" /></div>
                        <div className='textoUser'><span className='spanUser'>'Me parece genial'</span></div>
                    </div>

                    <div className='comentario'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit reiciendis expedita
                            architecto officia qui eveniet molestiae, saepe impedit alias corrupti dolor optio ad
                            eius animi distinctio aliquid deleniti natus sit.
                        </p>
                    </div>

                    <div className='iconosComentario'>
                        <div className='megusta'>
                            <span className="material-symbols-outlined">
                                thumb_up
                            </span>
                            <span>2</span>
                        </div>
                        <div>
                            <div className='nomegusta'>
                                <span className="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='denunciar'>
                                <div>
                                    <span className="material-symbols-outlined">
                                        emoji_flags
                                    </span>
                                </div>
                                <div>
                                    <span>Reportar</span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="rankingComentario">
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Características</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>
                    </div>

                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Sonido</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Fabricación</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )



}


