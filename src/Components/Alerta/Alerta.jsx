import { Alert } from "react-bootstrap";

export default function Alerta({display}) {
  return (
    <Alert style={{display: `${display}`}} className="mt-3" key={"danger"} variant={"danger"}>
        Pokémon não encontrado ou não listado na API.
    </Alert>
  )
}
