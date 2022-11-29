import Card from 'react-bootstrap/Card';
import './Graficos.css';
import Grafico_4 from  '../../Assets/Imgs/Grafico_4.jpg'

function CardGrafico_4() {
  return (
    <>
      <Card>
        <img  className="tamanho" src={Grafico_4}></img>
        {/* <Card.Body>
          <Card.Text>
            Exemplo de Gráfico
          </Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default CardGrafico_4;