import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Form, InputGroup, Row, Col, Container, Card, Badge, Dropdown, Tabs, Tab } from 'react-bootstrap'

import { PageProps } from '../../types/interfaces'

export const Profile: React.FC<PageProps> = (props: PageProps) => {
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
         <section className="nft-hero hero__no-cover">
            <img src="/assets/img/no-user-pic.png" className="nft-hero__image" loading="lazy" width="340" height="275" alt="Tegro Cat" />
         </section>
         <main className="main-page">
            <section className="nft-collection section pt-0">
               <Container fluid>
                  <Row>
                     <Col lg="4" xxl="3" className="mb-4 mb-lg-0">
                        <Card className="card-blur p-0 mb-4" style={{marginTop: '-75px'}}>
                           <Card.Body className="p-2 p-xl-4">
                              <div className="d-flex mb-4">
                                 <Card.Img variant="profile__avatar" src="/assets/img/no-user-pic.png" />
                                 <div className="ms-3 w-100">
                                    <div className="d-flex">
                                       <Card.Title className="fs-28 fw-bold mb-2 me-3 text-wrap">
                                          NFactura
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
                        </Card>
                        <div id="open-filters" className="modal-mobile position-sticky" style={{ top: '90px' }}>
                           <Card className="card-filters bg-transparent">
                              <div className="d-flex align-items-center py-4 border-bottom">
                                 <Card.Title className="card-title fs-22 fw-bold m-0">
                                    Filters
                                 </Card.Title>
                                 <a href="#!" className="fw-medium link fs-16 d-none d-lg-block ms-auto">Clear</a>
                                 <a href="#!" className="mobile-modal-close fw-medium link fs-16 d-block d-lg-none ms-auto"><i className="fa-solid fs-24 fa-xmark"></i></a>
                              </div>
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
                                       <Button variant="primary btn-sm w-100">Apply</Button>
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
                                    <Form.Check name="radio-group" type="radio" id="Radio-AllTypes" className="hover p-3 mb-1 w-100"
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
                           </Card>
                        </div>
                     </Col>
                     <Col lg="8" xxl="9">
                        <Tabs
                           defaultActiveKey="Collected"
                           transition={true}
                           id="tab__collection"
                           className="mb-3"
                           variant="pills collections__nav mt-5"
                        >
                           <Tab eventKey="Collected" title="Collected">
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
                                       <Dropdown.Toggle variant="secondary">
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
                                       <i className="fa-regular fa-filter-list fs-24 me-0 me-sm-3" />
                                       <span className="d-none d-sm-inline fs-18">Filters</span>
                                    </Button>
                                 </div>
                              </div>
                              <Row className="flex-wrap collections__list">
                                 <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                                    <Card>
                                       <Card.Link href="/collection-item" className="card-link">
                                          <Card.Img variant="top card-image" src="./assets/img/nfts/nft-1.png" />
                                          <Card.Body>
                                             <div className="card-subtitle d-flex align-items-center mb-2">
                                                Pinocchio
                                                <span className="verified-icon ms-2" />
                                             </div>
                                             <Card.Title className="mb-3">
                                                Pinocchio
                                             </Card.Title>
                                             <Card.Text className="d-flex align-items-center color-grey fs-18">
                                                <span className="icon-ton me-2"></span>
                                                3
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
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          8
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-1.png)  no-repeat center center / cover' }} />
                                    </Card>
                                 </Col>
                                 <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                                    <Card>
                                       <Card.Link href="/collection-item" className="card-link">
                                          <Card.Img variant="top card-image" src="./assets/img/nfts/nft-2.png" />
                                          <Card.Body>
                                             <div className="card-subtitle d-flex align-items-center mb-2">
                                                Single NFT
                                                <span className="verified-icon ms-2" />
                                             </div>
                                             <Card.Title className="mb-3">
                                                RED HOPE
                                             </Card.Title>
                                             <Card.Text className="d-flex align-items-center color-grey fs-18">
                                                <span className="icon-ton me-2"></span>
                                                10
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
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          12
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-2.png)  no-repeat center center / cover' }} />
                                    </Card>
                                 </Col>
                                 <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                                    <Card>
                                       <Card.Link href="/collection-item" className="card-link">
                                          <Card.Img variant="top card-image" src="./assets/img/nfts/nft-3.png" />
                                          <Card.Body>
                                             <div className="card-subtitle d-flex align-items-center mb-2">
                                                CAT Meta
                                                <span className="verified-icon ms-2" />
                                             </div>
                                             <Card.Title className="mb-3">
                                                CAT ETH
                                             </Card.Title>
                                             <Card.Text className="d-flex align-items-center color-grey fs-18">
                                                <span className="icon-ton me-2"></span>
                                                5
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
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          4
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-3.png)  no-repeat center center / cover' }} />
                                    </Card>
                                 </Col>
                                 <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
                                    <Card>
                                       <Card.Link href="/collection-item" className="card-link">
                                          <Card.Img variant="top card-image" src="./assets/img/nfts/nft-4.png" />
                                          <Card.Body>
                                             <div className="card-subtitle d-flex align-items-center mb-2">
                                                Cyber Girl
                                                <span className="verified-icon ms-2" />
                                             </div>
                                             <Card.Title className="mb-3">
                                                TON CYBER GIRL
                                             </Card.Title>
                                             <Card.Text className="d-flex align-items-center color-grey fs-18">
                                                <span className="icon-ton me-2"></span>
                                                50
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
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          23
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-4.png)  no-repeat center center / cover' }} />
                                    </Card>
                                 </Col>
                              </Row>
                           </Tab>
                           <Tab eventKey="Created" title="Created">
                              <Card className="text-center p-5">
                                 <div className="display-2 w-100 mb-4">😔</div>
                                 <div className="fs-28 fw-bold">The user has <br /> no created NFTs.</div>
                                 <Card.Text className="color-grey mt-2">After minting, NFTs will be displayed in this section <br /> and visible to other users.</Card.Text>
                              </Card>
                           </Tab>
                           <Tab eventKey="Collections" title="Collections">
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
                                 <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4">
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
                              </Row>
                           </Tab>
                           <Tab eventKey="Favorites" title="Favorites">
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
                                             <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-18 me-2" /> Like</Dropdown.Item>
                                          </Dropdown.Menu>
                                       </Dropdown>
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          16
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card-status fw-500">
                                          <i className="fa-regular fa-gavel me-2 fs-18" />
                                          7 days
                                       </div>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/cats/1.png)  no-repeat center center / cover' }} />
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
                                             <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-18 me-2" /> Like</Dropdown.Item>
                                          </Dropdown.Menu>
                                       </Dropdown>
                                       <Button variant="icon btn-like btn-like__card">
                                          <i className="fa-regular fa-heart fs-18 me-2" />
                                          24
                                       </Button>
                                       <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                                          Buy Now
                                       </Button>
                                       <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/cats/2.png)  no-repeat center center / cover' }} />
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
