import Carousel from 'react-bootstrap/Carousel';
import '../Cards/Graficos.css'
 
//Cards
import CardGeral_1 from  '../Cards/Grafico_1';
import CardGeral_2 from  '../Cards/Grafico_2';
import CardGeral_3 from  '../Cards/Grafico_3';
import CardGeral_4 from  '../Cards/Grafico_4';
import CardGeral_5 from  '../Cards/Grafico_5';

function CarouselGeral() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <CardGeral_1 />
      </Carousel.Item>
      <Carousel.Item>
        <CardGeral_2 />
      </Carousel.Item>
      <Carousel.Item>
          <CardGeral_3 />
      </Carousel.Item>
      <Carousel.Item>
          <CardGeral_4 />
      </Carousel.Item>
      <Carousel.Item>
          <CardGeral_5 />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGeral;