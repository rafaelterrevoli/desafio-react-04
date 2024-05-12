import { Button, Col, Row } from 'react-bootstrap';
import student from '../../assets/student.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={student} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={9}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#ff5e14' }}>Asesoría en la aplicación a una universidad en el extranjero.</h1>
              <p className='text-secondary my-4'>Postular a una universidad en el extranjero requiere de ciertos conocimientos previos que son necesarios para poder recorrer el camino de la aplicación con mayor eficiencia y prontitud.</p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='contact_btn'>Contactanos</Button>
              </div>
            </div>
          </div>
        </Col>
        <h2 style={{ color: '#ff5e14' }}>Tenemos convenios con las mejores universidades del mundo</h2>
      </Row>
    </div>

  )
}

export default HeaderFoot