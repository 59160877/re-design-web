import React from "react";
import "./App.css";
import {
  Button,
  Navbar,
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Badge,
  Image,
} from "react-bootstrap";
import logo from "./assets/logo.png";
import google from "./assets/gmail.png";
import facebook from "./assets/facebook.png";
import line from "./assets/zip-line.png";

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Protoss Technology
        </Navbar.Brand>
      </Navbar>
      {/* cover */}
      <div className="bgimg"></div>
      <div class="animated-title">
        <div class="text-top">
          <div>
            <span>APPLICATION</span>
            <span>&</span>
          </div>
        </div>
        <div class="text-bottom">
          <div>AUTOMATION</div>
        </div>
      </div>
      {/* History */}
      <Jumbotron fluid>
        <Container>
          <h1>Protoss Technology</h1>
          <p>
            บริษัทรับพัฒนาซอฟท์แวร์ ออกแบบระบบเพื่อแก้ปัญหาภายในองค์กร
            ตามความต้องการของลูกค้าแบบครบวงจร
            ด้วยทีมงานมืออาชีพที่ผ่านประสบการณ์จริง ในธุรกิจ IT กว่า 10 ปี
          </p>
        </Container>
      </Jumbotron>
      {/* About */}
      <Container>
        <Row>
          <Col>
            <CardDeck>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Programming-amico.png")}
                />
                <Card.Body>
                  <Card.Title>WEB APPLICATION</Card.Title>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Programming-pana.png")}
                />
                <Card.Body>
                  <Card.Title>WINDOWS APPLICATION</Card.Title>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Mobile-bro.png")}
                />
                <Card.Body>
                  <Card.Title>LINE BOT</Card.Title>
                  <Card.Title>LINE APP</Card.Title>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Manufacturing Process-amico.png")}
                />
                <Card.Body>
                  <Card.Title>INDUSTRY 4.0 IOT</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
      {/* VISION */}
      <div class="wrapper">
        <h1 class="text-center">VISION</h1>
        <div class="speechbubble">
          <p>งานคุณภาพ ตรงต่อเวลา ราคาประทับใจ</p>
        </div>
      </div>
      {/* Sample work */}
      <Container>
        <Row>
          <Col>
            <CardDeck>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Programming-rafiki.png")}
                />
                <Card.Body>
                  <Card.Title>SENSOR MONITORING</Card.Title>
                  <Card.Text>
                    ระบบตรวจวัดข้อมูลจาก Sonsor และเก็บขึ้นระบบ Cloud รองรับทั้ง
                    HTTP และ MQTT
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Control Panel-amico.png")}
                />
                <Card.Body>
                  <Card.Title>MACHINE AUTO CALCULATION</Card.Title>
                  <Card.Text>
                    iSpectro (Suggest Chemical Additive)
                    โปรแกรมคำนวณสารที่ต้องเติม จากที่อ่านสารที่อ่านได้จากเครื่อง
                    Spectrometer มาโดยอัตโนมัติ{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
      {/* The process of creating software */}
      <Container>
        <Row>
          <Col>
            <CardDeck>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Data report-amico.png")}
                />
                <Card.Body>
                  <Card.Title>ส่งข้อมูลเบื้องต้น</Card.Title>
                  <Card.Text>Hot Line : 065-594-1964</Card.Text>
                  <Card.Text>Line ID : protosstech</Card.Text>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Bitcoin P2P-pana.png")}
                />
                <Card.Body>
                  <Card.Title>ประเมินราคา</Card.Title>
                  <Card.Text>
                    ทีมงานจะทำการประเมินระยะเวลาและราคาเบื้องต้น
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Meeting-bro.png")}
                />
                <Card.Body>
                  <Card.Title>นัดพบและเริ่มงาน</Card.Title>
                  <Card.Text>
                    เก็บข้อมูลพิ่มเติมและ พร้อมเริ่มงานได้ทันที
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={require("./assets/Customer Survey-rafiki.png")}
                />
                <Card.Body>
                  <Card.Title>ทดสอบระบบ+ใช้งาน</Card.Title>
                  <Card.Text>
                    ทีมงานให้ลูกค้าทดสอบระบบก่อนการใช้งาน
                    แล้วทีมงานจะติดตั้งงานพร้อมการส่งมอบผลงาน
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
      {/* Activity schedule 2019 */}
      <Container>
        <Row>
          <Col>
            <h1>ตารางกิจกรรม 2019</h1>
          </Col>
        </Row>
        <Row>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={require("./assets/Spring Boot.png")}
              />
              <Card.Body>
                <Card.Title>Spring Boot + Line Bot</Card.Title>
                <Card.Text>
                  การเขียน Line Bot ด้วย Spring Boot โดยใช้ภาษา Java(ฟรี
                  จำกัดจำนวน)
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={require("./assets/30371.jpg")} />
              <Card.Body>
                <Card.Title>Basic IOT Training</Card.Title>
                <Card.Text>
                  การเขียน Line Bot ด้วย Spring Boot โดยใช้ภาษา Java(ฟรี
                  จำกัดจำนวน)
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
      {/*footer  */}
      <h1 class="heading heading--stroke heading--shadow">
        PROTOSS TECHNOLOGY
      </h1>
      <div class="page">
        <div class="page__section">
          <div class="page__group">
            <article class="news">
              <header class="news__header">
                <h3 class="r-title news__title">
                  <a
                    href="#0"
                    class="r-link animated-underline animated-underline_type1 news__link"
                  >
                    ADDRESS
                  </a>
                </h3>
              </header>

              <div class="news__content">
                <p>37/2041 หมู่ 4 ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี 12120</p>
                <p>TELEPHONE : 02-162-0625,065-594-1964</p>
                <p>EMAIL : contact@protossgroup.com</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* social */}

      {/* Footer */}
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <Row>
          <Col>
            <div className="container-left">
              <h5>ADDRESS</h5>
              <p>37/2041 หมู่ 4 ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี 12120</p>{" "}
              <p>TELEPHONE : 02-162-0625,065-594-1964</p>{" "}
              <p>EMAIL : contact@protossgroup.com</p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="container-right">
              <img
                alt="logo"
                src={google}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              contact@protossgroup.com
              <div className="container-right">
                <img
                  alt="logo"
                  src={facebook}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Protoss Technology on Facebook
              </div>
              <div className="container-right">
                <img
                  alt="logo"
                  src={line}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                ID : @protosstech on Line
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default App;
