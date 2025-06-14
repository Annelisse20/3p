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
      
    </div>
  );
}