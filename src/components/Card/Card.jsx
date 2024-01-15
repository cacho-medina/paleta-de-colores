import Color from "../Color/Color";
function Card({ color, deleteColor }) {
    return (
        <div className="card flex-column justify-content-center align-items-center p-2 gap-3 shadow">
            <h3>{color}</h3>
            <Color color={color}></Color>
            <button
                className="btn btn-danger"
                onClick={() => {
                    deleteColor(color);
                }}
            >
                Borrar
            </button>
        </div>
    );
}

export default Card;
