import Color from "../Color/Color";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

function Formulario() {
    const info = JSON.parse(localStorage.getItem("colores")) || [];
    const [color, setColor] = useState("");
    const [colores, setColores] = useState(info);

    const handleChange = (e) => {
        setColor(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setColores([...colores, color]);
        setColor("");
    };
    function deleteColor(color) {
        const filtered = colores.filter((item) => item !== color);
        setColores(filtered);
    }
    useEffect(() => {
        localStorage.setItem("colores", JSON.stringify(colores));
    }, [colores]);
    return (
        <>
            <form
                className="py-4 d-flex flex-column gap-3"
                onSubmit={handleSubmit}
            >
                <div className="bg-secondary d-flex flex-column justify-content-center align-items-center gap-5 flex-md-row py-3">
                    <Color color={color}></Color>
                    <div>
                        <input
                            value={color}
                            className="form-control"
                            name="color"
                            type="text"
                            placeholder="Ingrese un color ej. Blue"
                            onChange={handleChange}
                        />
                        <label className="text-light">
                            <small>
                                Otras formas de agregar colores '#000' o
                                'rgb(0,0,0)'
                            </small>
                        </label>
                    </div>
                </div>
                <button className="btn btn-outline-secondary align-self-center">
                    Guardar
                </button>
            </form>
            <Cards colores={colores} deleteColor={deleteColor}></Cards>
        </>
    );
}

export default Formulario;
