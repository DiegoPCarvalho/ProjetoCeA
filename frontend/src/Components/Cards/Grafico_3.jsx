import Card from 'react-bootstrap/Card';
import './Graficos.css';
import Grafico_3 from  '../../Assets/Imgs/Grafico_3.jpg'

function CardGrafico_3() {
  return (
    <>
      <Card>
        <img  className="tamanho" src={Grafico_3}></img>
        {/* <Card.Body>
          <Card.Text>
            Exemplo de Gráfico
          </Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
}

export default CardGrafico_3;