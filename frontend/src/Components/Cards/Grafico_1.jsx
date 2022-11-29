import Card from 'react-bootstrap/Card';
import './Graficos.css';
import Grafico_1 from  '../../Assets/Imgs/Grafico_1.jpg'

function CardGrafico_1() {
  return (
    <>
      <Card>
        <img  className="tamanho" src={Grafico_1}></img>
        {/* <Card.Body>
          <Card.Text>
            Exemplo de Gráfico
          </Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default CardGrafico_1;