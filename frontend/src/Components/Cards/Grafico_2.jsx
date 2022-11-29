import Card from 'react-bootstrap/Card';
import './Graficos.css';
import Grafico_2 from  '../../Assets/Imgs/Grafico_2.jpg'

function CardGrafico_2() {
  return (
    <>
      <Card>
        <img  className="tamanho" src={Grafico_2}></img>
        {/* <Card.Body>
          <Card.Text>
            Exemplo de Gráfico
          </Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default CardGrafico_2;