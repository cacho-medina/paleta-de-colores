import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import { getColorsByName } from "../../helpers/queries";
import { useState } from "react";

function Cards({
    colores,
    borrarColor,
    obtenerColores,
    enableEdit,
    setColores,
}) {
    const [nombre, setNombre] = useState("");
    function handleChange(event) {
        setNombre(event.target.value);
        obtenerColoresPorNombre(event.target.value);
    }
    async function obtenerColoresPorNombre(name) {
        const res = await getColorsByName(name);
        if (!res.ok) {
            alert("no se encontro el color");
        } else {
            const lista = await res.json();
            setColores(lista);
        }
    }
    return (
        <Container className="px-0 py-3 mt-5 border shadow2">
            <h1 className="text-center py-3 display-3 fw-bold">Cards</h1>
            <input
                type="text"
                value={nombre}
                className="form-control w-50 mx-auto"
                placeholder="Buscar color por nombre ej. blue"
                onChange={handleChange}
            />
            <div className="py-3 d-flex flex-column justify-content-center align-items-center gap-5 flex-md-row flex-wrap">
                {!colores.length ? (
                    <p className="display-2 text-center">
                        No se han guardado colores
                    </p>
                ) : (
                    colores.map((color) => {
                        return (
                            <Card
                                color={color}
                                key={color._id}
                                borrarColor={borrarColor}
                                obtenerColores={obtenerColores}
                                enableEdit={enableEdit}
                            ></Card>
                        );
                    })
                )}
            </div>
        </Container>
    );
}

export default Cards;
