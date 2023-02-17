import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Explore: React.FC<PageProps> = (props: PageProps) => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)


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
   <section className="section pb-0">
      <Container fluid>
         <div className="notable__head d-block d-lg-flex align-items-center mb-5">
            <div className="d-flex align-items-center mb-4 mb-lg-0">
               <h2 className="section__title fs-40 mb-0 me-3">
                  Top collections
               </h2>
               <OverlayTrigger placement="right" overlay={
               <Tooltip id="tooltip-disabled">
                  <p className="small text-start">
                     The total sales volume of the NFT’s is calculated based on blockchain data. So, it’s not only the sales from Libermall that are reflected.
                  </p>
                  <p className="small text-start">
                     The percentage shows the difference in sales between the current and the previous period. A dash means that, most likely, the collection had no sales in the previous period.
                  </p>
               </Tooltip>
               }>
               <span className="d-inline-block">
               <i className="fa-sharp fa-regular fa-circle-info color-grey fa-1x"></i>
               </span>
               </OverlayTrigger>
            </div>
            <ButtonGroup className="btn-group-custom ms-auto">
               <Button variant="secondary btn-sm flex-fill px-3 px-lg-4 active">1 Day</Button>
               <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">7 Days</Button>
               <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">30 Days</Button>
               <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">All time</Button>
            </ButtonGroup>
         </div>
         <div className="collection-top-slider">
            <Card className="collection-card border">
               <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                  <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/6.png" />
                  <Card.Body>
                     <Card.Title className="d-flex align-items-center mb-3 fs-18">
                        Dog Metaverse
                        <span className="verified-icon ms-2" />
                     </Card.Title>
                     <Card.Text className="d-flex align-items-center color-grey">
                        Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">15,03 TON</span>
                     </Card.Text>
                  </Card.Body>
                  <Card.Body className="text-end">
                     <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                        11.3k TON
                     </div>
                     <div className="fw-medium small color-grey">
                        $26K
                        <span className="ms-2">-</span>
                     </div>
                  </Card.Body>
               </Card.Link>
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/6.png)  no-repeat center center / cover'}} />
            </Card>
            <Card className="collection-card border">
               <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                  <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/11.png" />
                  <Card.Body>
                     <Card.Title className="d-flex align-items-center mb-3 fs-18">
                        Rich Cats · Outfits
                        <span className="verified-icon ms-2" />
                     </Card.Title>
                     <Card.Text className="d-flex align-items-center color-grey">
                        Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">5,5 TON</span>
                     </Card.Text>
                  </Card.Body>
                  <Card.Body className="text-end">
                     <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                        17.8K TON
                     </div>
                     <div className="fw-medium small color-grey">
                        $41.1K
                        <span className="color-green ms-2">+4K%</span>
                     </div>
                  </Card.Body>
               </Card.Link>
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/11.png)  no-repeat center center / cover'}} />
            </Card>
            <Card className="collection-card border">
               <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                  <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/13.png" />
                  <Card.Body>
                     <Card.Title className="d-flex align-items-center mb-3 fs-18">
                        Alienation
                        <span className="verified-icon ms-2" />
                     </Card.Title>
                     <Card.Text className="d-flex align-items-center color-grey">
                        Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">7 TON</span>
                     </Card.Text>
                  </Card.Body>
                  <Card.Body className="text-end">
                     <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                        1.2K TON
                     </div>
                     <div className="fw-medium small color-grey">
                        $2.7K
                        <span className="ms-2"> - </span>
                     </div>
                  </Card.Body>
               </Card.Link>
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/13.png)  no-repeat center center / cover'}} />
            </Card>
            <Card className="collection-card mb-3">
               <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                  <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/14.jpg" />
                  <Card.Body>
                     <Card.Title className="d-flex align-items-center mb-3 fs-18">
                        Superhero
                        <span className="verified-icon ms-2" />
                     </Card.Title>
                     <Card.Text className="d-flex align-items-center color-grey">
                        Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">6 TON</span>
                     </Card.Text>
                  </Card.Body>
                  <Card.Body className="text-end">
                     <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                        3k TON
                     </div>
                     <div className="fw-medium small color-grey">
                        $7K
                        <span className="color-green ms-2">+4K%</span>
                     </div>
                  </Card.Body>
               </Card.Link>
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/14.jpg)  no-repeat center center / cover'}} />
            </Card>
         </div>
      </Container>
   </section>
   <section className="collections section">
      <Container fluid>
         <div className="d-block d-lg-flex align-items-center mb-5">
            <h1 className="section__title fs-40 mb-4 mb-lg-0 me-3">
               Explore 
            </h1>
            <div className="ms-auto d-flex flex-wrap">
               <Dropdown className="mx-1">
                  <Dropdown.Toggle variant="soft btn-sm" id="Collections">
                     Collections
                     <i className="fa-solid fa-angle-down ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100 mt-2">
                     <Dropdown.Item href="#" active>Collections</Dropdown.Item>
                     <Dropdown.Item href="#">NFTs</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown className="mx-1">
                  <Dropdown.Toggle variant="soft btn-sm" id="HtL">
                     High to Low
                     <i className="fa-solid fa-angle-down ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100 mt-2">
                     <Dropdown.Item href="#" active>High to Low</Dropdown.Item>
                     <Dropdown.Item href="#">Low to High</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </div>
         </div>
         <Row className="flex-wrap collections__list">
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(../assets/img/collections/2.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/3.jpg)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/4.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/6.png)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/5.jpg)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/8.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/9.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/10.jpg)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/11.png)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/12.gif)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/13.png)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/15.jpg)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/14.jpg)  no-repeat center center / cover'}} />
            </Card>
            </Col>
            <Col className="grid-item mb-4">
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
               <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/collections/7.png)  no-repeat center center / cover'}} />
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
