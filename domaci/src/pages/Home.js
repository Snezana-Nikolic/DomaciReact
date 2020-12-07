import React from 'react';
import { Image, Button, Container, Row, Col } from 'react-bootstrap';
import background from '../assets/images/Group101.png';
import { Link } from 'react-router-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
const Home = () => {
  const percentage = 73;
  
  return (
    <>
      <section className="over">
        <div className=" backgr">
          <Row className="text">
            <Col xs={12} md={8} xl={4} className="">
              <Col xl={10} className="p-0">
                <span class="header_desc">Njihov osmijeh vrijedi više!</span>
              </Col>


              <Col xs={12} md={8} xl={11} className="pl-0 pt-5 pb-3">
                <span class="header_content">
                  Postoji jedan životni fakultet koji studiraju oni koji imaju volju da izmame što više iskrenih osmijeha za djecu bez roditeljskog staranja. On proizvodi najbolje kadrove iz ove oblasti u našoj zemlji već duže od decenije i ne planira da se zaustavi. Upisuje sve kandidate dobre volje, pa nemojte brinuti da li za vas ima mjesta. Ukoliko želite, samo zakoračite unutra. Lako ćete ga pronaći, na njemu je velikim slovima ispisan grafit <span >NJIHOV OSMIJEH VRIJEDI VIŠE!</span> Ispitni rok je, za omladinu i sve ljude dobre volje u Crnoj Gori, svake godine u aprilu!

                 </span>
              </Col>
              <Col xs={12} md={8} xl={12} className="p-0">
                <div class="col-lg-12 header_desc2 py-4 p-0">
                  Mi smo spremni, a vi?
                 </div>
              </Col>
              <Col xs={12} md={8} xl={3} className="p-0">
                <button className="btn-doniraj">
                  <a as={Link} to="/Doniraj" className="btn-oval">Doniraj</a>
                </button>
              </Col>
            </Col>
          </Row>

        </div>
      </section>

      <section style={{ top: '-30px' }}>
        <container style={{ position: 'relative' }}>
          <Col className="pozadina-br">
            <Row>
              <Col xl={6}>
                <Row>
                  <Col xl={6} className="brojac-col">
                    <Row className="brojac-t">
                      <span className="brojac">0</span>
                    </Row>
                  </Col>
                  <Col xl={6}>
                    <Row>
                      <span className="broj-doniranih-artikala" style={{ borderLeft: "2px solid #ffffff" }}>Broj doniranih artikala</span>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col xl={6}>
                <Row>
                  <Col xl={6} className="">
                    <Row>
                      <Col xs={10}> 
                      <CircularProgressbarWithChildren className="progress-text"
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={3}
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'round',
                          strokeWidth: '8',

                          // Text size
                          
                         
                          

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,
                          
                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(255, 255, 255, ${percentage})`,
                          textColor: '#ffffff',
                          trailColor: '#06aaca',
                          backgroundColor: 'transparent',
                        })}
                      />
                      </Col>  
                    </Row>
                  </Col>
                  <Col xl={6}>
                    <Row>
                      <span className="broj-doniranih-artikala" style={{marginLeft: '0px'}}>Broj ostvarenih osmijeha</span>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </container>
      </section>

    </>
  );
}

export default Home;

