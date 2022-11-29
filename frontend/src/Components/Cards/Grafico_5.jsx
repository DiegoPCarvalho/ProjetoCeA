import Card from 'react-bootstrap/Card';
import './Graficos.css';
import Grafico_5 from  '../../Assets/Imgs/Grafico_5.jpg'

function CardGrafico_5() {
  return (
    <>
      <Card>
        <img  className="tamanho" src={Grafico_5}></img>
        {/* <Card.Body>
          <Card.Text>
            Exemplo de Gráfico
          </Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default CardGrafico_5;