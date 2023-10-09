




export const ResumenCompra = () => {
    return (
        <>
            <div className="containerResumenCompra">

                <div className="resumenCompra">
                    <span>Resumen de la compra</span>
                </div>

                <div className="contenidoResumenCompra">
                    <div className="subtotal">
                        <div><span>Subtotal Productos</span></div>
                        <div><span className="precioPro">$99.999</span></div>
                    </div>
                    <div className="iva">
                        <div><span>Iva</span></div>
                        <div><span className="ivaPro">$1</span></div>
                    </div>
                    <div className="precioFinal">
                        <div><span>Total compra</span></div>
                        <div><span className="totalPro">$100.000</span></div>
                    </div>
                </div>

                <div className="pagarCompra"><button>Ir a pagar</button></div>

                <div className="gastosEnvio">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <path d="M5.45454 16.0906C4.54909 16.0906 3.81818 15.3597 3.81818 14.4543C3.81818 13.5488 4.54909 12.8179 5.45454 12.8179C6.36 12.8179 7.09091 13.5488 7.09091 14.4543C7.09091 15.3597 6.36 16.0906 5.45454 16.0906ZM3.81818 6.27246H6.54545V8.99973H1.68L3.81818 6.27246ZM18.5455 16.0906C17.64 16.0906 16.9091 15.3597 16.9091 14.4543C16.9091 13.5488 17.64 12.8179 18.5455 12.8179C19.4509 12.8179 20.1818 13.5488 20.1818 14.4543C20.1818 15.3597 19.4509 16.0906 18.5455 16.0906ZM3.27273 4.6361L0 8.99973V14.4543H2.18182C2.18182 16.2652 3.64364 17.727 5.45454 17.727C7.26545 17.727 8.72727 16.2652 8.72727 14.4543H15.2727C15.2727 16.2652 16.7345 17.727 18.5455 17.727C20.3564 17.727 21.8182 16.2652 21.8182 14.4543H24V2.45428C24 1.24337 23.0291 0.272461 21.8182 0.272461H6.54545V4.6361H3.27273ZM21.8182 2.45428V12.2725H20.9891C20.3891 11.607 19.5164 11.1816 18.5455 11.1816C17.5745 11.1816 16.7018 11.607 16.1018 12.2725H8.72727V2.45428H21.8182Z" fill="black" />
                    </svg>
                    </div>
                    <div>Los gastos de envío se calculan en el siguiente paso

                    </div>
                </div>
                <div >
                    <input type="text" className="aplicarDcto" placeholder="Cupón de descuento"/>
                    <button className="aplicar">Aplicar</button>
                </div>
            </div>
        </>
    )
}