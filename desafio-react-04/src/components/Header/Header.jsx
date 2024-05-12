import {Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import HeaderFoot from '../HeaderFoot/HeaderFoot';

const Header = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col md={12}>
            <div className="head_left">
              <span className='h_subTitle'>TeamPro</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: '#ff5e14' }}>Estudia en el Extranjero</h1>
                <h1 style={{ color: '#3D3F42' }}>Ingresa a las Mejores Universidades</h1>
              </div>
              <p className='text-secondary'>
              Te ayudamos a lograr la admisión a las mejores universidades del mundo.
              </p>
            </div>
          </Col>
        </Row>
        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>
  )
}

export default Header