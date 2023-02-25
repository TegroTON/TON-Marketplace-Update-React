import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Explore: React.FC<PageProps> = (props: PageProps) => {
   const [firstRender, setFirstRender] = React.useState<boolean>(false)


   const history = useNavigate()


   useEffect(() => {
      if (!firstRender) {
         setFirstRender(true)
         props.installScripts()

      }
   }, [])

   return (
      <div id={props.id}>
         <main className="main-page border-top">
            <section className="collections section">
               <Container fluid>
                  <div className="d-flex flex-column flex-sm-row mb-5">
                     <h1 className="section__title fs-40 mb-4 mb-sm-0 me-3 me-auto">
                        Explore
                     </h1>
                     <div className="d-block d-sm-flex">
                        <Dropdown className="mb-2 mb-sm-0 mx-1 flex-fill">
                           <Dropdown.Toggle variant="secondary w-100" id="Collections">
                              Collections
                              <i className="fa-solid fa-angle-down ms-2" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="w-100 mt-2">
                              <Dropdown.Item href="#" active>Collections</Dropdown.Item>
                              <Dropdown.Item href="#">NFTs</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mx-1 flex-fill">
                           <Dropdown.Toggle variant="secondary w-100">
                              Recently added
                              <i className="fa-solid fa-angle-down ms-2" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="w-100 mt-2">
                              <Dropdown.Item href="#">Price: Low to Hight</Dropdown.Item>
                              <Dropdown.Item href="#">Price: Hight to Low</Dropdown.Item>
                              <Dropdown.Item href="#">Most Favorited</Dropdown.Item>
                              <Dropdown.Item href="#" active>Recently added</Dropdown.Item>
                              <Dropdown.Item href="#">Oldest</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                  </div>
                  <Row className="collections__list">
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/1.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Animals Red List
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/2.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Rich Cats
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(../assets/img/collections/2.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/3.jpg" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    TON GUYS
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/3.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/4.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Ton Doodles
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/4.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/6.png" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Dog Metaverse
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/6.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/5.jpg" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    METAMORPHOSES
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/5.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/8.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Cosmic Friends
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/8.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/9.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    digital avatars
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/9.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/10.jpg" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    G-BOTS SD
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/10.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/11.png" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Rich Cats · Outfits
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/11.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/12.gif" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Meta Panthers
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/12.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/13.png" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Alienation
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/13.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/15.jpg" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Fantastic beasts
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/15.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/14.jpg" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Superhero
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/14.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" lg="4" xl="3" xxl className="mb-4">
                        <Card>
                           <Card.Link href="/collection" className="card-link">
                              <Card.Img variant="top card-image" src="./assets/img/collections/7.png" />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                    Eggs Wisdom
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/7.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                  </Row>
                  <div className="mt-5 text-center">
                     <Button variant="primary">Show More</Button>
                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
