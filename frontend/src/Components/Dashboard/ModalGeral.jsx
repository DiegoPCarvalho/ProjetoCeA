import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function ModalAtendimento(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={props.corModal} onClick={handleShow} style={props.estilo}  className="sombra">
         <h4 className='text-light'><strong>{props.nome}</strong></h4>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                 <Modal.Title>{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.relatorio}</Modal.Body>
        <Modal.Footer>
          <Link to={props.local} className={`btn btn-${props.corModal} text-light fw-bold`}>Relatório</Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

