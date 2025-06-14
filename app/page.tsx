import Carta from './components/Carta';

export default function Home() {
  
  return (
    <div className="p">

      <div className="exercicios-header">
        <h1>Exercícios</h1>
      </div>

      <Carta
        imagen="/e1.png"
        titulo="Puxada frontal"
        parrafo="3 séries x 12 repetições"
      />
       <Carta
        imagen="/e2.png"
        titulo="Remada curvada"
        parrafo="3 séries x 12 repetições"
      />
      <Carta
        imagen="/e3.png"
        titulo="Remada unilateral"
        parrafo="3 séries x 12 repetições"
      />
      <Carta
        imagen="/e4.png"
        titulo="Levantamento terra"
        parrafo="3 séries x 12 repetições"
      />
      
    </div>
  );
}