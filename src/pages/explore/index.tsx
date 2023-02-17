import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
   <section className="collections section">
      <Container fluid>
         <div className="d-block d-lg-flex align-items-center mb-5">
               <h1 className="section__title mb-0 me-3">
               Explore 
               </h1>
               <Dropdown className="ms-auto">
                  <Dropdown.Toggle variant="soft" id="dropdown-basic">
                     Collections
                  <i className="fa-solid fa-angle-down ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="animate slideIn top-100 w-100 mt-2">
                  <Dropdown.Item href="#" active>Collections</Dropdown.Item>
                  <Dropdown.Item href="#">NFTs</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown className="ms-3">
                  <Dropdown.Toggle variant="soft" id="dropdown-basic">
                     High to Low
                  <i className="fa-solid fa-angle-down ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="animate slideIn top-100 w-100 mt-2">
                  <Dropdown.Item href="#" active>High to Low</Dropdown.Item>
                  <Dropdown.Item href="#">Low to High</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </div>
      <Row className="collections__list">
      <Col xs="12" sm="6" lg="4" xxl="3">
            <Card>
                  <Card.Link href="/collection-item" className="card-link">
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
        </Row>
      </Container>
   </section>
</main>
        </div>
    )
}
