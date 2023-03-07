import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Collapse,
  Dropdown,
  Row,
  Col,
  Container,
  Breadcrumb,
  Card,
  ProgressBar,
  Form,
  InputGroup,
} from "react-bootstrap";

import { PageProps } from "../../types/interfaces";

export const LaunchpadActive: React.FC<PageProps> = (props: PageProps) => {
  const [firstRender, setFirstRender] = React.useState<boolean>(false);

  const history = useNavigate();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!firstRender) {
      setFirstRender(true);
      props.installScripts();
    }
  }, []);

  return (
    <div id={props.id}>
      <main className="main-page border-top">
        <section className="item-details section pt-5">
          <Container fluid>
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
              <Breadcrumb.Item href="/collection">Cute Monters</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="justify-content-center mb-4">
              <Col lg="5" className="mb-4 mb-lg-0">
                <div
                  className="text-center position-sticky me-0 me-lg-3"
                  style={{ top: "110px" }}
                >
                  <div className="launchpad-slider">
                    <div className="m-1">
                      <img
                        className="item-details__image"
                        data-enlargable
                        src="./assets/img/nfts/nft-6.png"
                        alt=""
                      />
                    </div>
                    <div className="m-1">
                      <img
                        className="item-details__image"
                        data-enlargable
                        src="https://cache.tonapi.io/imgproxy/w6iPZrlC6nraUqMdQuWYAUSulbgmaQ6CwtORfGtAaLw/rs:fill:500:500:1/g:no/aHR0cHM6Ly9zLmdldGdlbXMuaW8vbmZ0L2MvNjJlOGNiZTUyOWRjZjQyYmI1YmM1OTYwLzE2NTYvaW1hZ2UucG5n.webp"
                        alt=""
                      />
                    </div>
                    <div className="m-1">
                      <img
                        className="item-details__image"
                        data-enlargable
                        src="https://cache.tonapi.io/imgproxy/vuDXy6rszxeNZ_lCcBFXWp4E1PsNIDDO1gobFPDacio/rs:fill:500:500:1/g:no/aHR0cHM6Ly9zLmdldGdlbXMuaW8vbmZ0L2IvYy82MmYyMjYxMGYxMTNhZWY2ZDA3NzQ0ZTAvMTUyNy9pbWFnZS5wbmc.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="7" className="ms-auto">
                <div className="card-item-details mb-5">
                  <div className="card-item-head d-flex mb-4">
                    <div className="item-details__badge badge__green me-auto">
                      Open Sale
                    </div>
                  </div>
                  <h1 className="item-details__title mb-3">Cute Monters</h1>
                  <p className="item-details__desc col-xxl-9 mb-0">
                    Cute Monters are unique NFTs with cats created only for the
                    TON network. Our TON NFT "Cats" is a community of 9,999
                    super-rare, artfully crafted, collectible cats.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-4">
                    <Button
                      variant="secondary flex-fill m-1"
                      style={{ maxWidth: "220px" }}
                    >
                      See Collection
                    </Button>
                    <Dropdown>
                      <div className="libermall__soclinks flex-wrap">
                        <a href="#!" className="libermall__soclinks-item m-1">
                          <i className="fa-brands fa-telegram" />
                        </a>
                        <a href="#!" className="libermall__soclinks-item m-1">
                          <i className="fa-brands fa-discord" />
                        </a>
                        <a href="#!" className="libermall__soclinks-item m-1">
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <Dropdown.Toggle
                          variant="none libermall__soclinks-item m-1 m-1"
                          id="dropdown-basic"
                        >
                          +1
                        </Dropdown.Toggle>
                      </div>
                      <Dropdown.Menu className="mt-2 fs-14">
                        <Dropdown.Item href="#">
                          <i className="fa-brands fa-youtube me-3" />
                          Youtube
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <i className="fa-brands fa-telegram me-3" />
                          @tegrocatnft
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <Card className="border p-4 mb-4">
                  <Card.Header className="mb-3">
                    <Card.Title className="fs-22 fw-bold mb-1">
                      NFT Sales
                    </Card.Title>
                    <div className="color-grey">
                      Will end in: 05 may, 12:00 PM
                    </div>
                  </Card.Header>
                  <Card.Body className="p-0 d-flex flex-wrap mb-4">
                    <div className="item-details__badge badge__yellow small m-1">
                      Public Mint
                    </div>
                    <div className="item-details__badge badge__yellow small m-1">
                      Price 0,5 TON
                    </div>
                    <div className="item-details__badge badge__yellow small m-1">
                      Up to 600 NFTs
                    </div>
                    <div className="item-details__badge badge__yellow small m-1">
                      10 NFTs Per Wallet
                    </div>
                  </Card.Body>
                  <Card.Body className="p-0">
                    {/* Timer */}
                    <div
                      className="auction-timer d-flex flex-wrap align-items-center justify-content-between mb-4"
                      id="timer"
                    >
                      <div className="auction-timer__box text-center">
                        <span className="fs-28 d-block days">02</span>
                        <div>Days</div>
                      </div>
                      <div className="auction-timer__box d-flex align-items-center justify-content-center">
                        <span className="fs-28 d-block hours">14</span>
                        <div>Hours</div>
                      </div>
                      <div className="auction-timer__box d-flex align-items-center justify-content-center">
                        <span className="fs-28 d-block minutes">51</span>
                        <div>Min</div>
                      </div>
                      <div className="auction-timer__box d-flex align-items-center justify-content-center">
                        <span className="fs-28 d-block seconds">32</span>
                        <div>Sec</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-box mb-4">
                      <div className="d-flex mb-2 small fw-500">
                        <span>15%</span>
                        <span className="ms-auto color-grey">
                          Sold 90 from 600
                        </span>
                      </div>
                      <ProgressBar animated variant="warning" now={15} />
                    </div>

                    {/* Amount Form */}
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Choose Amount</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text className="p-0">
                            <Button variant="link p-3">
                              <i className="fa-solid fa-minus" />
                            </Button>
                          </InputGroup.Text>
                          <Form.Control
                            className="text-center fw-bold fs-20 mx-2"
                            type="number"
                            placeholder="Amount"
                            defaultValue={1}
                            min={1} 
                            max={10}
                          />
                          <InputGroup.Text className="p-0">
                            <Button variant="link p-3">
                              <i className="fa-solid fa-plus" />
                            </Button>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      <Button variant="primary w-100">Buy For 0.5 TON</Button>
                    </Form>
                  </Card.Body>
                </Card>
                {/* Team */}
                <Card.Header className="d-flex align-items-center mb-4">
                  <Card.Title className="fs-22 mb-0">Team</Card.Title>
                  <a
                    href="#!"
                    className="ms-auto"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-team"
                    aria-expanded={open}
                  >
                    Whole team <i className="fa-solid fa-arrows-up-down ms-2" />
                  </a>
                </Card.Header>
                <Card className="p-0 border mb-4">
                  <Card.Link
                    href="/user1"
                    className="d-block d-sm-flex align-items-start text-center text-sm-start p-4"
                  >
                    <Card.Img
                      variant="collection rounded m-3 m-lg-0"
                      src="/assets/img/user-avatar.png"
                    />
                    <div className="px-3">
                      <Card.Title className="mb-1 fs-18">Simon Grey</Card.Title>
                      <Card.Text className="mb-2">
                        The Heal App Director
                      </Card.Text>
                      <Card.Text className="fs-14 color-grey mb-0">
                        Simon Grey, a serial entrepreneur "Soul Enhancer", with
                        a background in professional consulting and coaching. He
                        is a certified Integrative Nutritionist and speaker who
                        built a business mentoring over 350 coaches in the
                        health and wellness space. Lana is dedicated to help
                        others turn their dreams into reality.
                      </Card.Text>
                    </div>
                    <i className="fa-solid fa-angle-right ms-auto d-none d-lg-block me-3" />
                  </Card.Link>
                  <div
                    className="card__blur-bg-hover"
                    style={{
                      background:
                        "url(/assets/img/user-avatar.png)  no-repeat center center / cover",
                    }}
                  />
                </Card>
                <Collapse in={open}>
                  <Card className="p-0 border mb-4">
                    <Card.Link
                      href="/profile"
                      className="d-block d-sm-flex align-items-start text-center text-sm-start p-4"
                    >
                      <Card.Img
                        variant="collection rounded m-3 m-lg-0"
                        src="./assets/img/my-avatar.png"
                      />
                      <div className="px-3">
                        <Card.Title className="mb-1 fs-18">
                          Erion Soma
                        </Card.Title>
                        <Card.Text className="mb-2">
                          The Heal App Director
                        </Card.Text>
                        <Card.Text className="fs-14 color-grey mb-0">
                          Erion Soma, a serial entrepreneur "Soul Enhancer",
                          with a background in professional consulting and
                          coaching. He is a certified Integrative Nutritionist
                          and speaker who built a business mentoring over 350
                          coaches in the health and wellness space. Lana is
                          dedicated to help others turn their dreams into
                          reality.
                        </Card.Text>
                      </div>
                      <i className="fa-solid fa-angle-right ms-auto d-none d-lg-block me-3" />
                    </Card.Link>
                    <div
                      className="card__blur-bg-hover"
                      style={{
                        background:
                          "url(./assets/img/my-avatar.png)  no-repeat center center / cover",
                      }}
                    />
                  </Card>
                </Collapse>
                {/* Launchpad */}
                <Card className="border p-4 mb-4">
                  <Card.Title className="fs-22 mb-4">Launchpad</Card.Title>
                  <Card.Text className="fw-medium mb-1">
                    Phase 1: False Liber Holders
                  </Card.Text>
                  <Card.Text className="color-grey mb-2">
                    10 NFTs per wallet at 0,5 $TON each
                  </Card.Text>
                  <Card.Text className="color-grey pe-0 pe-lg-5">
                    Only holders of False Liber NFTs have access to the initial
                    sale. They are eligible to buy up to 10 NFTs per wallet at a
                    price of 0.5 TON each - Start time to be revealed.
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};
