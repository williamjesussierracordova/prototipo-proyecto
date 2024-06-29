import { Fragment } from "react";
import { Col, Row, Image } from "react-bootstrap";

// import blank layout, header and footer to override default layout

const Error404 = () => {
  return (
    <Fragment >
      <Row style={{alignItems:'center', justifyContent:'center'}}>
        <Col sm={12} >
          <div className="text-center">
            <div className="mb-3">
              <Image
                src="src\assets\404.png"
                alt="dsag"
                className="img-fluid"
              />
            </div>
            <h1 className="display-4 fw-bold">Oops! La página que desea no se encontró.</h1>
            <p className="mb-4">
              O simplemente aproveche la experiencia de nuestro equipo de consulta.
            </p>
            {/* <Link href="/" className="btn btn-primary">
              Ir al menú principal
            </Link> */}
            <a href="/" className="" style={{color:'blue'}}>
                Ir al menú principal
            </a>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Error404;