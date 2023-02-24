import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, InputGroup, Row, Col, Container, Card, Badge, Dropdown, Tabs, Tab } from 'react-bootstrap';
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
                              <Dropdown.Menu className="mt-2 fs-14">
                                 <Dropdown.Item href="#"><i className="fa-regular fa-flag me-3" /> Report</Dropdown.Item>
                                 <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <Card.Text className="d-flex align-items-center color-grey">
                           <span>EQCioGF…mvYl</span> 
                           <a href="#!" className="ms-3">
                           <i className="fa-regular fa-copy" />
                           </a>    
                        </Card.Text>
                     </div>
                  </div>
                  <Card.Text className="mb-4">
                     <div className="mb-2">
                        Cat Metaverse are unique NFTs with cats created only for the TON network. Our TON NFT "Cats" is a community 
                        of 9,999 super-rare ...
                     </div>
                     <div className="color-grey small">
                        See More <i className="fa-solid fa-angle-down ms-2" />
                     </div>
                  </Card.Text>
                  <Dropdown>
                     <div className="libermall__soclinks flex-wrap">
                        <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-telegram" /></a>
                        <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-discord" /></a>
                        <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-instagram" /></a>
                        <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-linkedin-in" /></a>
                        <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-reddit-alien" /></a>
                        <Dropdown.Toggle variant="none libermall__soclinks-item m-1 m-1" id="dropdown-basic">
                           +5
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
               </Card.Body>
               <Card.Footer className="d-flex aling-items-center p-4">
                  Created by 
                  <Card.Link href="#" className="ms-2">TON NFT Tegro Cat</Card.Link>
                  <span className="verified-icon ms-2" />
               </Card.Footer>
            </Card>
            <div id="open-filters" className="modal-mobile">
            <Card className="card-filters bg-transparent">
              <Card.Title className="card-title d-flex align-items-centeer fs-22 fw-bold py-4 mb-0 border-bottom">
                     Filters
                     <a href="#!" className="fw-medium link fs-16 d-none d-lg-block ms-auto">Clear</a>
                     <a href="#!" className="mobile-modal-close fw-medium link fs-16 d-block d-lg-none ms-auto">Close</a>
                  </Card.Title>
            <Card.Body className="p-0 border-bottom">
               <Button
                  variant="none"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEventType"
                  aria-expanded="false"
                  aria-controls="collapseEventType"
                  className="d-flex align-items-center py-4 w-100"
                  >
                  <Card.Title className="card-filters__name fs-18 m-0">Event Type</Card.Title>
                  <i className="fa-solid fa-angle-down ms-auto" />
               </Button>
                  <div id="collapseEventType" className="collapse">
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-Sale"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-cart-shopping-fast fs-18 mx-3 color-grey" />
                              <span>Sale</span>
                              <div className="color-grey fw-medium small ms-auto">8</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-Putupforsale"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-circle-plus fs-18 mx-3 color-grey" />
                              <span>Put up for sale</span>
                              <div className="color-grey fw-medium small ms-auto">16</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-Cancelsale"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-circle-xmark fs-18 mx-3 color-grey" />
                              <span>Cancel sale</span>
                              <div className="color-grey fw-medium small ms-auto">16</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-Transfer"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-arrow-right-arrow-left fs-18 mx-3 color-grey" />
                              <span>Transfer</span>
                              <div className="color-grey fw-medium small ms-auto">17</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-Minting"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-paintbrush-fine fs-18 mx-3 color-grey" />
                              <span>Minting</span>
                              <div className="color-grey fw-medium small ms-auto">16</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-PutonAuction"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-gavel fs-18 mx-3 color-grey" />
                              <span>Put on Auction</span>
                              <div className="color-grey fw-medium small ms-auto">13</div>
                              </>
                           }
                     />
                     <Form.Check name="checkbox" type="checkbox" id="flexCheck-EndofAuction"  className="hover p-3 mb-1 w-100"
                           label={
                              <>
                              <i className="fa-regular fa-gavel fs-18 mx-3 color-grey" />
                              <span>End of Auction</span>
                              <div className="color-grey fw-medium small ms-auto">28</div>
                              </>
                           }
                     />
                   </div> 
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
               <Button
                  variant="none"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePriceRange"
                  aria-expanded="false"
                  aria-controls="collapsePriceRange"
                  className="d-flex align-items-center py-4 w-100"
                  >
                  <h4 className="card-filters__name fs-18 mb-0">Price Range</h4>
                  <i className="fa-solid fa-angle-down ms-auto color-grey" />
               </Button>
               <div id="collapsePriceRange" className="collapse pb-3">
                  <Form>
                     <Form.Control className="mb-3" type="number" placeholder="From" />
                     <Form.Control className="mb-3" type="number" placeholder="To" />
                     <Button variant="primary btn-sm">Apply</Button>
                  </Form>
               </div>
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
               <Button
                  variant="none"
                  data-bs-toggle="collapse"
                  data-bs-target="#flexRadio-SaleType"
                  aria-expanded="true"
                  aria-controls="flexRadio-SaleType"
                  className="d-flex align-items-center py-4 w-100"
                  >
                  <Card.Title className="card-filters__name fs-18 m-0">Sale Type</Card.Title>
                  <i className="fa-solid fa-angle-down ms-auto" />
               </Button>
                  <div id="flexRadio-SaleType" className="collapse show">
                  <Form.Check name="radio-group" type="radio" id="Radio-AllTypes"  className="hover p-3 mb-1 w-100"
                     label={
                        <>
                        <div className="ms-3">All Types</div>
                        <div className="color-grey fw-medium small ms-auto">522</div>
                        </>
                     }
                  />
                  <Form.Check name="radio-group" type="radio" id="Radio-ForSale" className="hover p-3 mb-1 w-100"
                     label={
                        <>
                        <div className="ms-3">For Sale</div>
                        <div className="color-grey fw-medium small ms-auto">160</div>
                        </>
                     }
                  />
                  <Form.Check 
                     name="radio-group" type="radio" id="Radio-NotForSale" className="hover p-3 mb-1 w-100"
                     label={
                        <>
                        <div className="ms-3">Not For Sale</div>
                        <div className="color-grey fw-medium small ms-auto">20</div>
                        </>
                     }
                  />
                  <Form.Check name="radio-group" type="radio" id="Radio-Auction" className="hover p-3 mb-1 w-100"
                     label={
                        <> 
                        <div className="ms-3">Auction</div>
                        <div className="color-grey fw-medium small ms-auto">10</div>
                        </>
                     }
                  />
                  </div>
            </Card.Body>
            <Card.Body className="p-0 border-bottom">
            <Button
                  variant="none"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAttributes"
                  aria-expanded="true"
                  aria-controls="collapseAttributes"
                  className="d-flex align-items-center py-4 w-100"
                  >
                  <h4 className="card-filters__name fs-18 mb-0">Attributes</h4>
                  <i className="fa-solid fa-angle-down ms-auto color-grey" />
               </Button>
               <div id="collapseAttributes" className="collapse show">
                  <InputGroup className="mb-3">
                     <InputGroup.Text id="search-Attributes">
                        <i className="fa-regular fa-magnifying-glass" />
                     </InputGroup.Text>
                     <Form.Control
                        placeholder="Search by value ..."
                        aria-label="Search by value ..."
                        aria-describedby="search-Attributes"
                     />
                  </InputGroup>
                  <div className="attribute__item">
                     <Button
                        variant="none"
                        className="d-flex align-items-center py-3 w-100 color-grey"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseAccessoriese"
                        aria-expanded="false"
                        aria-controls="collapseAccessories"
                        >
                        <div className="card-filters__name fs-16 color-grey mb-0">
                           Accessories
                        </div>
                        <div className="fs-14 ms-auto">
                           <span>14</span>
                           <i className="fa-solid fa-angle-down ms-2" />
                        </div>
                     </Button>
                     <div
                     className="collapse position-relative overflow-auto border-bottom"
                     id="collapseAccessoriese"
                     style={{ maxHeight: 250 }}
                     > 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckNoAccessories" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">No Accessories</div>
                                 <div className="mb-0 color-grey fs-14">40 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckBroom" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Broom</div>
                                 <div className="mb-0 color-grey fs-14">40 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckDroid" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Droid</div>
                                 <div className="mb-0 color-grey fs-14">40 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckShield" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Shield</div>
                                 <div className="mb-0 color-grey fs-14">40 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                     </div>
                  </div>
                  <div className="attribute__item">
                     <Button
                        variant="none"
                        className="d-flex align-items-center py-3 w-100 color-grey"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBackgrounds"
                        aria-expanded="false"
                        aria-controls="collapseBackgrounds"
                        >
                        <div className="card-filters__name fs-16 color-grey mb-0">
                           Backgrounds
                        </div>
                        <div className="fs-14 ms-auto">
                           <span>10</span>
                           <i className="fa-solid fa-angle-down ms-2" />
                        </div>
                     </Button>
                     <div
                        className="collapse position-relative overflow-auto"
                        id="collapseBackgrounds"
                        style={{ maxHeight: 250 }}
                        >
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckButterfly" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Butterfly</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckCity" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">City</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckRoad" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Road</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckNYC" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">NYC</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                     </div>
                  </div>
                  <div className="attribute__item">
                        <Button
                           variant="none"
                           className="d-flex align-items-center py-3 w-100 color-grey"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseBody"
                           aria-expanded="false"
                           aria-controls="collapseBody"
                           >
                           <div className="card-filters__name fs-16 color-grey mb-0">
                              Body
                           </div>
                           <div className="fs-14 ms-auto">
                              <span>26</span>
                              <i className="fa-solid fa-angle-down ms-2" />
                           </div>
                        </Button>
                     <div
                     className="collapse position-relative overflow-auto"
                     id="collapseBody"
                     style={{ maxHeight: 250 }}
                     >
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckMantle" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Mantle</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckSuperuit" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Superuit</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckOveralls" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Overalls</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckDsrkRobe" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Dsrk Robe</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                     </div>
                  </div>
                  <div className="attribute__item">
                        <Button
                           variant="none"
                           className="d-flex align-items-center py-3 w-100 color-grey"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseCat"
                           aria-expanded="false"
                           aria-controls="collapseCat"
                           >
                           <div className="card-filters__name fs-16 color-grey mb-0">
                              Cat
                           </div>
                           <div className="fs-14 ms-auto">
                              <span>32</span>
                              <i className="fa-solid fa-angle-down ms-2" />
                           </div>
                        </Button>
                     <div
                     className="collapse position-relative overflow-auto"
                     id="collapseCat"
                     style={{ maxHeight: 250 }}
                     >
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckWitcher" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Witcher</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckFrog" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Frog</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckYouda" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Youda</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckSullivan" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Sullivan</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                     </div>
                  </div>
                  <div className="attribute__item">
                        <Button
                           variant="none"
                           className="d-flex align-items-center py-3 w-100 color-grey"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseEyes"
                           aria-expanded="false"
                           aria-controls="collapseEyes"
                           >
                           <div className="card-filters__name fs-16 color-grey mb-0">
                              Eyes
                           </div>
                           <div className="fs-14 ms-auto">
                              <span>12</span>
                              <i className="fa-solid fa-angle-down ms-2" />
                           </div>
                        </Button>
                     <div
                     className="collapse position-relative overflow-auto"
                     id="collapseEyes"
                     style={{ maxHeight: 250 }}
                     >
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckCyborg" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Cyborg</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        />
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckYellow" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Yellow</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckCat" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Cat</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                        <Form.Check name="checkbox-group" type="checkbox" id="flexCheckToy" className="hover p-3 mb-1 w-100"
                           label={
                              <> 
                              <div className="ms-3">
                                 <div className="mb-1">Toy</div>
                                 <div className="mb-0 color-grey fs-14">20 TON floor</div>
                              </div>
                              <div className="fs-14 ms-auto text-end">
                                 <div className="mb-1">
                                    4520 <span className="color-grey">/7586</span>
                                 </div>
                                 <div className="mb-0 color-yellow">58.12%</div>
                              </div>
                              </>
                           }
                        /> 
                     </div>
                  </div>
               </div>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col lg="8" xxl="9">
            <Card className="card-blur mb-4 overflow-auto" id="mouseScroll">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px'}}>floor</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0.04 eTH</div>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>volume</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>40.61 ETH</div>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Items</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>1.3K</div>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Owners</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>461</div>
                  </div>
                  <div className="card-blur__item p-4 border-end text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Blockchain</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>TON Conin</div>
                  </div>
                  <div className="card-blur__item p-4 text-center">
                     <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>address</h5>
                     <div className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0x15f...d860</div>
                  </div>
               </div>
            </Card>
            <Tabs
               defaultActiveKey="Collection"
               transition={true}
               id="tab__collection"
               className="mb-3"
               variant="pills collections__nav"
            >
               <Tab eventKey="Collection" title="Collection">
                  <div className="d-block d-lg-flex flex-wrap align-items-center my-4">
                     <Form className="flex-fill mb-3 mb-lg-0">
                        <InputGroup>
                           <InputGroup.Text>
                              <i className="fa-solid fa-magnifying-glass color-grey" />
                           </InputGroup.Text>
                           <Form.Control
                              placeholder="Name or description"
                           />
                        </InputGroup>
                     </Form>  
                     <div className="d-flex align-items-center ms-0 ms-lg-4">
                     <Dropdown>
                        <Dropdown.Toggle variant="soft">
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
                     <Button variant="none p-2 ms-auto d-flex align-items-center d-lg-none" href="#open-filters">
                     <i className="fa-regular fa-filter-list fs-24 me-0 me-sm-3"/>
                     <span className="d-none d-sm-inline fs-18">Filters</span>
                     </Button>
                     </div>
                  </div>
                  
                  <Row className="flex-wrap collections__list">
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/1.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (6452)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 3
                                       <Badge bg="purple" className="ms-2">MIN.BID</Badge>
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                                 <i className="fa-regular fa-heart fs-16 me-2" />16
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                 Buy Now
                              </Button>
                              <div className="card-status fw-500">
                                 <i className="fa-regular fa-gavel me-2 fs-14" />
                                 7 days
                              </div>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/1.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/2.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (2144)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey">
                                       Not For Sale
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                                 <i className="fa-regular fa-heart fs-16 me-2" />24
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/2.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/3.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (2689)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 5
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />10
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/3.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/4.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (6034)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 7.99
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />8
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/4.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/5.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (1315)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 8
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />8
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/5.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/6.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (8766)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 8
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />8
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/6.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/7.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (8766)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 8
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />8
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/7.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                        <Card>
                              <Card.Link href="/collection-item" className="card-link">
                                 <Card.Img variant="top card-image" src="./assets/img/cats/8.png" />
                                 <Card.Body>
                                    <div className="card-subtitle d-flex align-items-center mb-2">
                                       Cat Metaverse
                                       <span className="verified-icon ms-2" />
                                    </div>
                                    <Card.Title className="mb-3">
                                       TON NFT Tegro Cat (8766)
                                    </Card.Title>
                                    <Card.Text className="d-flex align-items-center color-grey fs-18">
                                       <span className="icon-ton me-2"></span> 8
                                    </Card.Text>
                                 </Card.Body>
                              </Card.Link>
                                 <Dropdown className="card-actions">
                                    <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                       <i className="fa-solid fa-ellipsis-vertical" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="mt-2 fs-14">
                                       <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                       <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-2" /> Like</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown> 
                              <Button variant="card__like">
                              <i className="fa-regular fa-heart fs-16 me-2" />8
                              </Button>
                              <Button variant="light btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                              Buy Now
                              </Button>
                              <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/8.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                  </Row>
                  <div className="text-center mt-5">
                     <Button>
                     See More
                     </Button>
                  </div>
               </Tab>
               <Tab eventKey="Activity" title="Activity">
                  <Row>
                     <Col sm="6" md="12">
                        <Card className="activity__card d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-4">
                           <Card.Img variant="none image-80x80 rounded mb-4 mb-md-0" src="./assets/img/cats/8.png" />
                           <Card.Body className="activity__body p-0 ms-4">
                              <Card.Title className="activity__name fs-18 mt-0 mb-2">TON NFT Tegro Cat (8766)</Card.Title>
                              <Card.Text className="activity__info d-block d-md-flex align-items-center mb-2">
                                 <div className="d-flex me-2 mb-1 mb-md-0">
                                    <span className="color-grey me-2">transferred from</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0x1ee3151cff01321059e3865214379b85c79ca984">
                                       <img src="/assets/img/user-1.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0x1ee3151cff01321059e3865214379b85c79ca984</span>
                                    </a>
                                 </div>
                                 <div className="d-flex">
                                    <span className="color-grey me-2">to</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0xa83425b17824e9717155094ce3effbec907665de">
                                       <img src="/assets/img/user-2.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0xa83425b17824e9717155094ce3effbec907665de</span>
                                    </a>
                                 </div>
                              </Card.Text>
                              <div className="mb-0 color-grey fs-14">
                                    12 minutes ago <a href="#!" target="_blank"><i className="fa-regular fa-up-right-from-square ms-2" /></a>
                              </div>
                           </Card.Body>   
                           <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/8.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="12">
                        <Card className="activity__card d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-4">
                           <Card.Img variant="none image-80x80 rounded mb-4 mb-md-0" src="./assets/img/cats/6.png" />
                           <Card.Body className="activity__body p-0 ms-4">
                              <Card.Title className="activity__name fs-18 mt-0 mb-2">TON NFT Tegro Cat (8766)</Card.Title>
                              <Card.Text className="activity__info d-block d-md-flex align-items-center mb-2">
                                 <div className="d-flex me-2 mb-1 mb-md-0">
                                    <span className="color-grey me-2">transferred from</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0x1ee3151cff01321059e3865214379b85c79ca984">
                                       <img src="/assets/img/user-1.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0x1ee3151cff01321059e3865214379b85c79ca984</span>
                                    </a>
                                 </div>
                                 <div className="d-flex">
                                    <span className="color-grey me-2">to</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0xa83425b17824e9717155094ce3effbec907665de">
                                       <img src="/assets/img/user-2.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0xa83425b17824e9717155094ce3effbec907665de</span>
                                    </a>
                                 </div>
                              </Card.Text>
                              <div className="mb-0 color-grey fs-14">
                                    12 minutes ago <a href="#!" target="_blank"><i className="fa-regular fa-up-right-from-square ms-2" /></a>
                              </div>
                           </Card.Body>   
                           <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/6.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="12">
                        <Card className="activity__card d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-4">
                           <Card.Img variant="none image-80x80 rounded mb-4 mb-md-0" src="./assets/img/cats/5.png" />
                           <Card.Body className="activity__body p-0 ms-4">
                              <Card.Title className="activity__name fs-18 mt-0 mb-2">TON NFT Tegro Cat (8766)</Card.Title>
                              <Card.Text className="activity__info d-block d-md-flex align-items-center mb-2">
                                 <div className="d-flex me-2 mb-1 mb-md-0">
                                    <span className="color-grey me-2">transferred from</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0x1ee3151cff01321059e3865214379b85c79ca984">
                                       <img src="/assets/img/user-1.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0x1ee3151cff01321059e3865214379b85c79ca984</span>
                                    </a>
                                 </div>
                                 <div className="d-flex">
                                    <span className="color-grey me-2">to</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0xa83425b17824e9717155094ce3effbec907665de">
                                       <img src="/assets/img/user-2.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0xa83425b17824e9717155094ce3effbec907665de</span>
                                    </a>
                                 </div>
                              </Card.Text>
                              <div className="mb-0 color-grey fs-14">
                                    12 minutes ago <a href="#!" target="_blank"><i className="fa-regular fa-up-right-from-square ms-2" /></a>
                              </div>
                           </Card.Body>   
                           <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/5.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                     <Col sm="6" md="12">
                        <Card className="activity__card d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-4">
                           <Card.Img variant="none image-80x80 rounded mb-4 mb-md-0" src="./assets/img/cats/6.png" />
                           <Card.Body className="activity__body p-0 ms-4">
                              <Card.Title className="activity__name fs-18 mt-0 mb-2">TON NFT Tegro Cat (8766)</Card.Title>
                              <Card.Text className="activity__info d-block d-md-flex align-items-center mb-2">
                                 <div className="d-flex me-2 mb-1 mb-md-0">
                                    <span className="color-grey me-2">transferred from</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0x1ee3151cff01321059e3865214379b85c79ca984">
                                       <img src="/assets/img/user-1.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0x1ee3151cff01321059e3865214379b85c79ca984</span>
                                    </a>
                                 </div>
                                 <div className="d-flex">
                                    <span className="color-grey me-2">to</span>
                                    <a href="#!" className="d-flex align-items-center text-white" title="0xa83425b17824e9717155094ce3effbec907665de">
                                       <img src="/assets/img/user-2.svg" alt="" className="rounded-circle" width={16} height={16} />
                                       <span className="ms-2 d-block text-truncate" style={{maxWidth: '116px'}}>0xa83425b17824e9717155094ce3effbec907665de</span>
                                    </a>
                                 </div>
                              </Card.Text>
                              <div className="mb-0 color-grey fs-14">
                                    12 minutes ago <a href="#!" target="_blank"><i className="fa-regular fa-up-right-from-square ms-2" /></a>
                              </div>
                           </Card.Body>   
                           <div className="card__blur-bg-hover" style={{background: 'url(./assets/img/cats/6.png)  no-repeat center center / cover'}} />
                        </Card>
                     </Col>
                  </Row>         
               </Tab>
            </Tabs>
            </Col> 
         </Row>
      </Container>
   </section>
</main>
      </div>
    )
}
