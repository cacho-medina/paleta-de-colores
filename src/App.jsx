import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";

import Formulario from "./components/Formulario/Formulario";

function App() {
    return (
        <Container fluid className="px-0 px-md-1 py-4">
            <Container className="px-0">
                <header className="display-3 text-center">
                    Administrar colores
                </header>
                <Formulario></Formulario>
            </Container>
        </Container>
    );
}

export default App;
