import Carta from "@/components/Carta";

export default function Home() {
  return (
    // creacion de las cartas
    <div className="padre">
      <Carta
        imagen="/uno.jpg"
        titulo="Puxada frontal"
        parrafo="3 séries x 12 repetições"
      />
       <Carta
        imagen="/dos.png"
        titulo="Remada curvada"
        parrafo="3 séries x 12 repetições"
      />
      <Carta
        imagen="/tres.png"
        titulo="Remada unilateral"
        parrafo="3 séries x 12 repetições"
      />
      
    </div>
  );
}