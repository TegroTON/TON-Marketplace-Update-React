import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Collapse, Form, Row, Col, Container, Card, Dropdown } from 'react-bootstrap';
import { PageProps } from '../../types/interfaces'

export const Collection: React.FC<PageProps> = (props: PageProps) => {
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
<section className="nft-hero">
   <img src="./assets/img/profile-header.webp" className="nft-hero__image" loading="lazy" width="340" height="275" alt="Tegro Cat" />
</section>
<main className="main-page">
   <section className="nft-collection section pt-0">
      <Container fluid>
         <Row>
            <Col lg="4" xxl="3" className="mb-4 mb-lg-0">
            <Card className="card-blur p-0 mt--100 mb-4">
               <Card.Body className="p-2 p-xl-4">
                  <div className="d-flex mb-4">
                     <Card.Img variant="profile__avatar" src="assets/img/profile-avatar.png" />
                     <div className="ms-3 w-100">
                        <div className="d-flex">
                           <Card.Title className="fs-28 fw-bold mb-2 me-3 text-wrap">
                              Cat Metaverse
                           </Card.Title>
                           <Dropdown className="ms-auto">
                              <Dropdown.Toggle variant="icon" id="dropdown-social">
                                 <i className="fa-solid fa-ellipsis-vertical" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="mt-2">
                                 <Dropdown.Item href="#"><i className="fa-regular fa-flag me-2" /> Report</Dropdown.Item>
                                 <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate" /> Refresh Metadata</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <Card.Text className="d-flex align-items-center color-grey">
                           <span>EQCioGF…mvYl</span> 
                           <a href="#!" className="ms-3">
                           <i className="fa-regular fa-copy"></i>
                           </a>    
                        </Card.Text>
                     </div>
                  </div>
                  <Card.Text className="mb-4">
                     <p className="mb-2">
                        Cat Metaverse are unique NFTs with cats created only for the TON network. Our TON NFT "Cats" is a community 
                        of 9,999 super-rare ...
                     </p>
                     <div className="color-grey small">
                        See More <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </Card.Text>
                  <Dropdown>
                     <div className="libermall__soclinks flex-wrap">
                        <a href="#!" className="libermall__soclinks-item ms-0"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-reddit-alien"></i></a>
                        <Dropdown.Toggle variant="cube p-1 libermall__soclinks-item ms-2" id="dropdown-basic">
                           +5
                        </Dropdown.Toggle>
                     </div>
                     <Dropdown.Menu>
                        <Dropdown.Item href="#">
                           <i className="fa-brands fa-youtube me-2" />
                           Youtube
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                           <i className="fa-brands fa-telegram me-2" />
                           @tegrocatnft
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </Card.Body>
               <Card.Footer className="d-flex aling-items-center p-4">
                  Created by 
                  <Card.Link href="#" className="ms-2">TON NFT Tegro Cat</Card.Link>
                  <span className="verified-icon ms-2" />
               </Card.Footer>
            </Card>
            <Card className="card-filters bg-transparent position-sticky" style={{ top: 140 }}>
              <Card.Title className="card-title d-flex align-items-centeer fs-22 fw-bold py-4 mb-0 border-bottom">
                     Filters
                     <a href="#!" className="fw-medium link fs-16 ms-auto">Clear</a>
                  </Card.Title>
            <Card.Body className="p-0 border-bottom">
               <Button
                  variant="none"
                  className="d-flex align-items-center py-3 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEventType"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  >
                  <Card.Title className="card-filters__name fs-18 m-0">Event Type</Card.Title>
                  <i className="fa-solid fa-angle-down ms-auto" />
               </Button>
               <div className="collapse position-relative" id="collapseEventType">
                  <Form>
                     <Form.Check type="checkbox" id="flexCheck-Sale" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-cart-shopping-fast fs-18 mx-3 color-grey" />
                           <span>Sale</span>
                           <div className="color-grey fw-medium small ms-auto">8</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-Putupforsale" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-circle-plus fs-18 mx-3 color-grey" />
                           <span>Put up for sale</span>
                           <div className="color-grey fw-medium small ms-auto">16</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-Cancelsale" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-circle-xmark fs-18 mx-3 color-grey" />
                           <span>Cancel sale</span>
                           <div className="color-grey fw-medium small ms-auto">16</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-Transfer" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-arrow-right-arrow-left fs-18 mx-3 color-grey" />
                           <span>Transfer</span>
                           <div className="color-grey fw-medium small ms-auto">7</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-Minting" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-paintbrush-fine fs-18 mx-3 color-grey" />
                           <span>Minting</span>
                           <div className="color-grey fw-medium small ms-auto">3</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-PutonAuction" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-gavel fs-18 mx-3 color-grey" />
                           <span>Put on Auction</span>
                           <div className="color-grey fw-medium small ms-auto">3</div>
                        </Form.Check.Label>
                     </Form.Check>
                     <Form.Check type="checkbox" id="flexCheck-EndofAuction" className="form-check hover d-flex aling-items-center p-3 mb-1">
                        <Form.Check.Input type="checkbox"  className="form-check-input m-0" />
                        <Form.Check.Label className="d-flex aling-items-center w-100 ">
                           <i className="fa-regular fa-gavel fs-18 mx-3 color-grey" />
                           <span>End of Auction</span>
                           <div className="color-grey fw-medium small ms-auto">2528</div>
                        </Form.Check.Label>
                     </Form.Check>
                  </Form>
               </div>
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
               <button
                  className="d-flex align-items-center px-2 py-4 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSaleType"
                  aria-expanded="true"
                  aria-controls="collapseSaleType"
                  >
                  <h4 className="card-filters__name fs-18 mb-0">Sale Type</h4>
                  <i className="fa-solid fa-angle-down ms-auto color-grey" />
               </button>
               <div className="collapse show position-relative" id="collapseSaleType">
                  <div className="form-check hover p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="radio"
                        name="exampleRadios"
                        defaultValue="option1"
                        id="flexCheckMinting"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckMinting"
                        >
                     <span className="ms-3">All Types</span>
                     <span className="color-grey ms-auto">7586</span>
                     </label>
                  </div>
                  <div className="form-check hover p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="radio"
                        name="exampleRadios"
                        defaultValue="option2"
                        id="flexCheckForSale"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckForSale"
                        >
                     <span className="ms-3">For Sale</span>
                     <span className="color-grey ms-auto">6168</span>
                     </label>
                  </div>
                  <div className="form-check hover p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="radio"
                        name="exampleRadios"
                        defaultValue="option3"
                        id="flexCheckForAuction"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckForAuction"
                        >
                     <span className="ms-3">For Auction</span>
                     <span className="color-grey ms-auto">0</span>
                     </label>
                  </div>
                  <div className="form-check hover p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="radio"
                        name="exampleRadios"
                        defaultValue="option4"
                        id="flexCheckNotForSale"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckNotForSale"
                        >
                     <span className="ms-3">Not For Sale</span>
                     <span className="color-grey ms-auto">609</span>
                     </label>
                  </div>
               </div>
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
               <button
                  className="d-flex align-items-center px-2 py-4 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePriceRange"
                  aria-expanded="false"
                  aria-controls="collapsePriceRange"
                  >
                  <h4 className="card-filters__name fs-18 mb-0">Price Range</h4>
                  <i className="fa-solid fa-angle-down ms-auto color-grey" />
               </button>
               <div className="collapse position-relative pb-3" id="collapsePriceRange">
                  <form action="">
                     <input type="text" className="form-control mb-3" placeholder="From" />
                     <input type="text" className="form-control mb-3" placeholder="To" />
                     <button type="button" className="btn btn-primary w-100">
                     Apply
                     </button>
                  </form>
               </div>
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
               <button
                  className="d-flex align-items-center px-2 py-4 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAttributes"
                  aria-expanded="true"
                  aria-controls="collapseAttributes"
                  >
                  <h4 className="card-filters__name fs-18 mb-0">Attributes</h4>
                  <i className="fa-solid fa-angle-down ms-auto color-grey" />
               </button>
               <div className="collapse show position-relative" id="collapseAttributes">
                  <div className="input-group mb-3">
                     <span className="input-group-text">
                     <i className="fa-regular fa-magnifying-glass" />
                     </span>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Search by value ..."
                        aria-label="Search by value ..."
                        />
                  </div>
                  {/*Start Item*/}
                  <div className="attribute__item">
                     <button
                        className="d-flex align-items-center py-3 w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseAccessoriese"
                        aria-expanded="false"
                        aria-controls="collapseAccessories"
                        >
                        <div className="card-filters__name fs-16 color-grey mb-0">
                           Accessories
                        </div>
                        <div className="color-grey ms-auto">
                           <span>14</span>
                           <i className="fa-solid fa-angle-down ms-2" />
                        </div>
                     </button>
                     <div
                     className="collapse position-relative overflow-auto"
                     id="collapseAccessoriese"
                     style={{ maxHeight: 250 }}
                     >
                     <div className="form-check hover d-block p-3 mb-1">
                        <input
                           className="form-check-input m-0"
                           type="checkbox"
                           defaultValue=""
                           id="flexCheckNoAccessories"
                           />
                        <label
                           className="form-check-label d-flex align-items-center"
                           htmlFor="flexCheckNoAccessories"
                           >
                           <div className="ms-3">
                              <p className="mb-1">No Accessories</p>
                              <p className="mb-0 color-grey fs-14">40 TON floor</p>
                           </div>
                           <div className="fs-14 ms-auto">
                              <p className="mb-1">
                                 4520 <span className="color-grey">/7586</span>
                              </p>
                              <p className="mb-0 color-yellow text-end">58.12%</p>
                           </div>
                        </label>
                     </div>
                     <div className="form-check hover d-block p-3 mb-1">
                        <input
                           className="form-check-input m-0"
                           type="checkbox"
                           defaultValue=""
                           id="flexCheckBroom"
                           />
                        <label
                           className="form-check-label d-flex align-items-center"
                           htmlFor="flexCheckBroom"
                           >
                           <div className="ms-3">
                              <p className="mb-1">Broom</p>
                              <p className="mb-0 color-grey fs-14">40 TON floor</p>
                           </div>
                           <div className="fs-14 ms-auto">
                              <p className="mb-1">
                                 4520 <span className="color-grey">/7586</span>
                              </p>
                              <p className="mb-0 color-yellow text-end">58.12%</p>
                           </div>
                        </label>
                     </div>
                     <div className="form-check hover d-block p-3 mb-1">
                        <input
                           className="form-check-input m-0"
                           type="checkbox"
                           defaultValue=""
                           id="flexCheckDroid"
                           />
                        <label
                           className="form-check-label d-flex align-items-center"
                           htmlFor="flexCheckDroid"
                           >
                           <div className="ms-3">
                              <p className="mb-1">Droid</p>
                              <p className="mb-0 color-grey fs-14">75 TON floor</p>
                           </div>
                           <div className="fs-14 ms-auto">
                              <p className="mb-1">
                                 366 <span className="color-grey">/7586</span>
                              </p>
                              <p className="mb-0 color-yellow text-end">4.71%</p>
                           </div>
                        </label>
                     </div>
                     <div className="form-check hover d-block p-3 mb-1">
                        <input
                           className="form-check-input m-0"
                           type="checkbox"
                           defaultValue=""
                           id="flexCheckShield"
                           />
                        <label
                           className="form-check-label d-flex align-items-center"
                           htmlFor="flexCheckShield"
                           >
                           <div className="ms-3">
                              <p className="mb-1">Shield</p>
                              <p className="mb-0 color-grey fs-14">125 TON floor</p>
                           </div>
                           <div className="fs-14 ms-auto">
                              <p className="mb-1">
                                 354 <span className="color-grey">/7586</span>
                              </p>
                              <p className="mb-0 color-yellow text-end">4.55%</p>
                           </div>
                        </label>
                     </div>
                  </div>
               </div>
               {/*End Item*/}
               {/*Start Item*/}
               <div className="attribute__item">
                  <button
                     className="d-flex align-items-center py-3 w-100"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseBackgrounds"
                     aria-expanded="false"
                     aria-controls="collapseBackgrounds"
                     >
                     <div className="card-filters__name fs-16 color-grey mb-0">
                        Backgrounds
                     </div>
                     <div className="color-grey ms-auto">
                        <span>11</span>
                        <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </button>
                  <div
                  className="collapse position-relative overflow-auto"
                  id="collapseBackgrounds"
                  style={{ maxHeight: 250 }}
                  >
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckNoButterfly"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckNoButterfly"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Butterfly</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckCity"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckCity"
                        >
                        <div className="ms-3">
                           <p className="mb-1">City</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDroid"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckDroid"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Road</p>
                           <p className="mb-0 color-grey fs-14">75 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              366 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">4.71%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckNyc"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckNyc"
                        >
                        <div className="ms-3">
                           <p className="mb-1">NYC</p>
                           <p className="mb-0 color-grey fs-14">125 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              354 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">4.55%</p>
                        </div>
                     </label>
                  </div>
               </div>
               </div>
               {/*End Item*/}
               {/*Start Item*/}
               <div className="attribute__item">
                  <button
                     className="d-flex align-items-center py-3 w-100"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseBody"
                     aria-expanded="false"
                     aria-controls="collapseBody"
                     >
                     <div className="card-filters__name fs-16 color-grey mb-0">Body</div>
                     <div className="color-grey ms-auto">
                        <span>12</span>
                        <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </button>
                  <div
                  className="collapse position-relative overflow-auto"
                  id="collapseBody"
                  style={{ maxHeight: 250 }}
                  >
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckMantle"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckMantle"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Mantle</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckSuperuit"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckSuperuit"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Superuit</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckOveralls"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOveralls"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Overalls</p>
                           <p className="mb-0 color-grey fs-14">70 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              765 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">9.84%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckNyc"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckNyc"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Dsrk Robe</p>
                           <p className="mb-0 color-grey fs-14">125 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              354 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">4.55%</p>
                        </div>
                     </label>
                  </div>
               </div>
               </div>
               {/*End Item*/}
               {/*Start Item*/}
               <div className="attribute__item">
                  <button
                     className="d-flex align-items-center py-3 w-100"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseCat"
                     aria-expanded="false"
                     aria-controls="collapseCat"
                     >
                     <div className="card-filters__name fs-16 color-grey mb-0">Cat</div>
                     <div className="color-grey ms-auto">
                        <span>18</span>
                        <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </button>
                  <div
                  className="collapse position-relative overflow-auto"
                  id="collapseCat"
                  style={{ maxHeight: 250 }}
                  >
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckWitcher"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckWitcher"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Witcher</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckFrog"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckFrog"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Frog</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckYouda"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckYouda"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Youda</p>
                           <p className="mb-0 color-grey fs-14">70 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              765 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">9.84%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckSullivan"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckSullivan"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Sullivan</p>
                           <p className="mb-0 color-grey fs-14">125 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              354 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">4.55%</p>
                        </div>
                     </label>
                  </div>
               </div>
               </div>
               {/*End Item*/}
               {/*Start Item*/}
               <div className="attribute__item">
                  <button
                     className="d-flex align-items-center py-3 w-100"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseEyes"
                     aria-expanded="false"
                     aria-controls="collapseEyes"
                     >
                     <div className="card-filters__name fs-16 color-grey mb-0">Eyes</div>
                     <div className="color-grey ms-auto">
                        <span>12</span>
                        <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </button>
                  <div
                  className="collapse position-relative overflow-auto"
                  id="collapseEyes"
                  style={{ maxHeight: 250 }}
                  >
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckCyborg"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckCyborg"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Cyborg</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckYellow"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckYellow"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Yellow</p>
                           <p className="mb-0 color-grey fs-14">40 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              4520 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">58.12%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckCat"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckCat"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Cat</p>
                           <p className="mb-0 color-grey fs-14">70 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              765 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">9.84%</p>
                        </div>
                     </label>
                  </div>
                  <div className="form-check hover d-block p-3 mb-1">
                     <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckToy"
                        />
                     <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckToy"
                        >
                        <div className="ms-3">
                           <p className="mb-1">Toy</p>
                           <p className="mb-0 color-grey fs-14">125 TON floor</p>
                        </div>
                        <div className="fs-14 ms-auto">
                           <p className="mb-1">
                              354 <span className="color-grey">/7586</span>
                           </p>
                           <p className="mb-0 color-yellow text-end">4.55%</p>
                        </div>
                     </label>
                  </div>
               </div>
               </div>
               </div>
            </Card.Body>
            </Card>
            </Col>
            <Col lg="8" xxl="9">
            <Card className="card-blur mb-4 overflow-auto" id="mouseScroll">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px'}}>floor</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0.04 eTH</p>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>volume</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>40.61 ETH</p>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Items</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>1.3K</p>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Owners</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>461</p>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Blockchain</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>TON Conin</p>
                  </div>
                  <div className="card-blur__item p-4 text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>address</h5>
                     <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0x15f...d860</p>
                  </div>
               </div>
            </Card>
            <div className="overflow-auto mobile__nav-bottom mb-2 px-2" id="mouseScroll">
               <ul className="nav collections__nav list-unstyled d-flex flex-nowrap align-items-center" id="myTab" role="tablist">
                  <li className="collections__nav-item">
                     <button className="collections__nav-link d-flex align-items-center text-nowrap active" id="Owned-tab" data-bs-toggle="tab" data-bs-target="#Owned" type="button" role="tab" aria-controls="Owned" aria-selected="true">Collection</button>
                  </li>
                  <li className="collections__nav-item">
                     <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Activity-tab" data-bs-toggle="tab" data-bs-target="#Activity" type="button" role="tab" aria-controls="Activity" aria-selected="false">Activity</button>
                  </li>
                  <button 
                     className="btn btn-sm btn-secondary ms-auto d-flex align-items-center btn-filter" 
                     data-bs-toggle="collapse" 
                     //  href="#collapseFilters" 
                     role="button" 
                     aria-expanded="false" aria-controls="collapseFilters">
                  <i className="fa-regular fa-filter-list me-2"></i> Sort
                  </button>
               </ul>
            </div>
            <div className="collections__filters collapse modified-collapse" id="collapseFilters">
               <div className="d-block d-sm-flex flex-wrap align-items-center">
                  <div className="m-3">
                     <label className="color-grey mb-2">Category:</label>
                     <select className="form-select border" aria-label="Select Category">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                  </div>
                  <div className="m-3">
                     <label className="color-grey mb-2">Properties:</label>
                     <select className="form-select border" aria-label="Select Category">
                        <option selected>All 354</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                  </div>
                  <div className="m-3">
                     <label className="color-grey mb-2">Sale type:</label>
                     <select className="form-select border" aria-label="Select Category">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                  </div>
                  <div className="m-3">
                     <label className="color-grey mb-2">Price range:</label>
                     <select className="form-select border" aria-label="Select Category">
                        <option selected>ETH 5 - 15</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                  </div>
                  <div className="m-3 ms-xxl-auto">
                     <label className="color-grey mb-2">Sort:</label>
                     <select className="form-select border" aria-label="Select Category">
                        <option selected>Recently listed</option>
                        <option value="1">Price: low to high</option>
                        <option value="2">Price: high to low</option>
                        <option value="3">Auction ending soon</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="tab-content py-4" id="myTabContent">
               <div className="tab-pane fade show active" id="Owned" role="tabpanel" aria-labelledby="Owned-tab">
                  {/* <?php
                     require "_collection-list";
                     ?> */}
               </div>
               <div className="tab-pane fade" id="Activity" role="tabpanel" aria-labelledby="Activity-tab">
                  {/* <?php
                     require "_activity-list";
                     ?> */}
               </div>
            </div>
            <div className="text-center">
               <Button>
               See More
               </Button>
            </div>
            </Col> 
         </Row>
      </Container>
   </section>
</main>
      </div>
    )
}
