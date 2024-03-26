import Color from "../Color/Color";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import {
    getColors,
    saveColor,
    editColor,
    deleteColor,
} from "../../helpers/queries";

function Formulario() {
    const [color, setColor] = useState({
        nombre: "",
        codigoHex: "",
    });
    const [colores, setColores] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        setColor({ ...color, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!color.nombre.length) {
            alert("ingrese el nombre del color!!");
        } else {
            guardarColor(color);
            setColor({ nombre: "", codigoHex: "" });
        }
    };
    async function borrarColor(id) {
        const res = await deleteColor(id);
        if (!res.ok) {
            alert("Error al borrar el color");
        }
        obtenerColores();
    }
    async function editarColor(color) {
        const res = await editColor(color, color._id);
        if (!res.ok) {
            alert("error al editar el color");
        }
        setEdit(false);
        obtenerColores();
    }
    async function guardarColor(color) {
        if (edit) {
            editarColor(color);
        } else {
            const res = await saveColor(color);
            if (!res.ok) {
                alert("Error al guardar el color");
            }
            obtenerColores();
        }
    }
    async function obtenerColores() {
        const res = await getColors();
        if (res.ok) {
            const lista = await res.json();
            setColores(lista);
        }
    }

    function enableEdit(edit) {
        setEdit(true);
        setColor(edit);
    }

    useEffect(() => {
        obtenerColores();
    }, []);
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
                            value={color.nombre}
                            className="form-control"
                            name="nombre"
                            type="text"
                            placeholder="Ingrese un color ej. Blue"
                            onChange={handleChange}
                        />
                        <input
                            value={color.codigoHex}
                            className="form-control mt-2"
                            name="codigoHex"
                            type="text"
                            placeholder="Ingrese un codigo hexadecimal ej. #fff o #ffffff"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-secondary align-self-center">
                    Guardar
                </button>
            </form>
            <Cards
                colores={colores}
                borrarColor={borrarColor}
                obtenerColores={obtenerColores}
                enableEdit={enableEdit}
                setColores={setColores}
            ></Cards>
        </>
    );
}

export default Formulario;
