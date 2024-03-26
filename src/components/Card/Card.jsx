import Color from "../Color/Color";
function Card({ color, borrarColor, enableEdit }) {
    return (
        <div className="card flex-column justify-content-center align-items-center p-2 gap-3 shadow">
            <h3>{color.nombre}</h3>
            <p>{color.codigoHex}</p>
            <Color color={color}></Color>
            <div className="d-flex align-items-center gap-2">
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        borrarColor(color._id);
                    }}
                >
                    Borrar
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        enableEdit(color);
                    }}
                >
                    editar
                </button>
            </div>
        </div>
    );
}

export default Card;
