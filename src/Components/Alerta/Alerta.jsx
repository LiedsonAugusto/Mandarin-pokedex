import { memo } from "react";
import { Alert } from "react-bootstrap";

function Alerta({display}) {

  console.log("renderizou alerta");

  return (
    <Alert style={{display: `${display}`}} className="mt-3" key={"danger"} variant={"danger"}>
        Pokémon não encontrado ou não listado na API.
    </Alert>
  )
}

export const AlertaMemo = memo(Alerta)
