
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Form, InputGroup, Row, Col, Container } from 'react-bootstrap';

export const FooterBlock: React.FC = () => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const location = useLocation()

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)
        }
    }, [])


   return (
<div>
   <section className="partners section bg-secondary">
      <Container fluid>
         <Row overflow-auto>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-1.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-2.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-3.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-4.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-5.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
            <Col xs="6" md="4" lg="3" xl="2" className="text-center">
            <img src="./assets/img/partners/part-6.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </Col>
         </Row>
      </Container>
   </section>
   <footer className="footer">
      <Container fluid>
         <Row className="accordion modified-collapse" id="accordionFooter">
            <Col md="12" lg="3" className="me-auto mb-5 mb-lg-0">
            <div className="footer__logo d-flex align-items-center mb-4">
               <img className="navbar-logo__img" src="./assets/img/logo/apple-icon-57x57.png" alt="Libermall - NFT Marketplace" />
               <span className="navbar-logo__name fs-24 d-none d-md-block ms-3">Libermall</span>
            </div>
            <div className="footer__text mb-5">
               <h4 className="fs-18">Stay in the loop</h4>
               <p className="color-grey">
                  Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
               </p>
            </div>
            <Form className="mb-5">
               <InputGroup>
                  <InputGroup.Text>
                     <i className="fa-regular fa-envelope fs-18 color-grey" />
                  </InputGroup.Text>
                  <Form.Control
                     placeholder="Enter email address"
                     aria-label="Enter email address"
                     />
                  <InputGroup.Text className="p-1">
                     <Button variant="primary btn-sm min-width-100" >Send</Button>
                  </InputGroup.Text>
               </InputGroup>
            </Form>
            <div className="libermall__soclinks">
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-telegram" /></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord" /></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-twitter" /></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram" /></a>
            </div>
            </Col>
            <Col md="12" lg="2" className="py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-one" aria-expanded="false" aria-controls="FooterMenu-one">
               <span className="me-auto">Marketplace</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none" />
            </h4>
            <ul id="FooterMenu-one" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">All NFTs</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Solana NFTs</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Art</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Collectibles</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Domain Names</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Music</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Photography</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Sports</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Trading Cards</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Utility</a>
               </li>
               <li>
                  <a href="#!">Virtual Worlds</a>
               </li>
            </ul>
            </Col>
            <Col md="12" lg="2" className="py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-two" aria-expanded="false" aria-controls="FooterMenu-two">
               <span className="me-auto">My Account</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none" />
            </h4>
            <ul id="FooterMenu-two" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">Profile</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Favorites</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Watchlist</a>
               </li>
               <li className="mb-2">
                  <a href="#!">My Collections</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Settings</a>
               </li>
            </ul>
            </Col>
            <Col md="12" lg="2" className="py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-three" aria-expanded="false" aria-controls="FooterMenu-three">
               <span className="me-auto">Resources</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none" />
            </h4>
            <ul id="FooterMenu-three" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">Help Center</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Platform Status</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Partners</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Gas-Free Marketplace</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Taxes</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Blog</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Docs</a>
               </li>
               <li>
                  <a href="#!">Newsletter</a>
               </li>
            </ul>
            </Col>
            <Col md="12" lg="2" className="py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-four" aria-expanded="false" aria-controls="FooterMenu-four">
               <span className="me-auto">Company</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none" />
            </h4>
            <ul id="FooterMenu-four" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">About</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Careers</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Ventures</a>
               </li>
               <li>
                  <a href="#!">Grants</a>
               </li>
            </ul>
            </Col>
         </Row>
         <div className="footer__bottom color-grey border-top pt-5 mt-5">
            <Row>
               <Col sm="12" md="6" className="mb-3 mb-md-0">
               <span className="me-auto">©2022 Libermall, Inc</span>
               </Col>
               <Col sm="12" md="6" className="ms-auto text-end">
               </Col>
               <div className="col-sm-12 col-md-6 mb-3 mb-md-0">
                  <a href="#!" className="me-3">Privacy Police</a>
                  <a href="#!">Terms of Service</a>
               </div>
            </Row>
         </div>
      </Container>
   </footer>
</div>
   )
}
