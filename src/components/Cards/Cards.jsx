import { Container } from "react-bootstrap";
import Card from "../Card/Card";

function Cards({ colores, deleteColor }) {
    return (
        <Container className="px-0 py-3 mt-5 border shadow2">
            <h1 className="text-center py-3 display-3 fw-bold">Cards</h1>
            <div className="py-3 d-flex flex-column justify-content-center align-items-center gap-5 flex-md-row flex-wrap">
                {!colores.length ? (
                    <p className="display-2 text-center">
                        No se han guardado colores
                    </p>
                ) : (
                    colores.map((color, index) => {
                        return (
                            <Card
                                color={color}
                                key={index}
                                deleteColor={deleteColor}
                            ></Card>
                        );
                    })
                )}
            </div>
        </Container>
    );
}

export default Cards;
