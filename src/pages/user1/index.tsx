import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Form, InputGroup, Row, Col, Container, Card, Badge, Dropdown, Tabs, Tab } from 'react-bootstrap'

import { PageProps } from '../../types/interfaces'
import { Account, Item } from '../../logic/tonapi'
import { getParameterByName, rawToTon, fixAmount, smlAddr } from '../../logic/utils'
import { MarketNft } from '../../logic/loadnft'

export const User1: React.FC<PageProps> = (props: PageProps) => {
   const [firstRender, setFirstRender] = React.useState<boolean>(false)
   const [ items, setItems ] = React.useState<Item[] | undefined>(undefined)

   const [ address, setAddress ] = React.useState<string | undefined>(undefined)

   const [ account, setAccount ] = React.useState<Account | undefined>(undefined)

   const [ page, setPage ] = React.useState<number>(0)

   const history = useNavigate()

   const marketNFT = new MarketNft()

   async function loadUser (address: string) {
      const data = await marketNFT.getUser(address)

      if (!data) {
         return undefined
      }
      setAccount(data)
   }

   async function loadItems (address: string) {
      if (address === '') {
         return
      }
      const data = await marketNFT.getItemsFromUser(address, page)
      if (!data) {
         return undefined
      }

      setPage(page + 1)

      setItems(data)
   }


   useEffect(() => {
      if (!firstRender) {
         setFirstRender(true)
         props.installScripts()

         const address = getParameterByName('a')

         if (address) {
            loadItems(address)
            setAddress(address)
            loadUser(address)
         } else {
            history('/')
         }
      }
   }, [])

   return (
      <div id={props.id}>
            {/* ! If the banner is Loaded !
         <div className="nft-hero" style={{ background: 'url(./assets/img/profile-banner.jpg) no-repeat center center / cover' }}></div>
         */}
            <div className="nft-hero hero__no-cover" style={{ background: 'url(./assets/img/my-avatar.png) no-repeat center center / cover' }}></div>
            <main className="main-page">
               <section className="nft-collection section pt-0">
                  <Container fluid>
                     <Row>
                        <Col lg="4" xxl="3" className="mb-4 mb-lg-0">
                           <Card className="card-blur p-0 mb-4" style={{ marginTop: '-75px' }}>
                              <Card.Body className="p-2 p-xl-4">
                                 {account && address ?
                                 <div className="d-flex mb-4">
                                    <Card.Img variant="profile__avatar" 
                                    src={account.icon !== '' ? account.icon : "./assets/img/user-avatar.png"} />
                                    <div className="ms-3 w-100">
                                       <div className="d-flex">
                                          <Card.Title className="fs-28 fw-bold mb-2 me-3 text-wrap">
                                             {account.name ?? smlAddr(address)}
                                          </Card.Title>
                                          <Dropdown className="ms-auto">
                                             <Dropdown.Toggle variant="icon" id="dropdown-social">
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                             </Dropdown.Toggle>
                                             <Dropdown.Menu className="mt-2 fs-14">
                                                <Dropdown.Item href="#"><i className="fa-regular fa-flag me-3" /> Report</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                       <Card.Text className="d-flex align-items-center color-grey">
                                          <span>{smlAddr(address)}</span>
                                          <a href="#!" className="ms-3">
                                             <i className="fa-regular fa-copy" />
                                          </a>
                                       </Card.Text>
                                    </div>
                                 </div>
                                 : null }
                                 <div className="mb-4">
                                    <div className="mb-2">
                                       <p>Hey!</p>
                                       <p>I'm the creator of the Toned Ape Club! collection.</p>
                                       <p>We have one of the most popular NFT-collections on the TON blockchain...</p>
                                    </div>
                                    <Button variant="link">
                                       See More <i className="fa-solid fa-angle-down ms-2" />
                                    </Button>
                                 </div>
                                 <div className="libermall__soclinks flex-wrap">
                                    <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-telegram" /></a>
                                    <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-discord" /></a>
                                    <a href="#!" className="libermall__soclinks-item m-1"><i className="fa-brands fa-reddit-alien" /></a>
                                 </div>
                              </Card.Body>
                           </Card>
                           <div id="open-filters" className="modal-mobile">
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
                                 <Card.Body className="p-0 border-bottom">
                                    <Button
                                       variant="none"
                                       data-bs-toggle="collapse"
                                       data-bs-target="#collapseCollectionType"
                                       aria-expanded="true"
                                       aria-controls="collapseCollectionType"
                                       className="d-flex align-items-center py-4 w-100"
                                    >
                                       <Card.Title className="card-filters__name fs-18 m-0">Collection</Card.Title>
                                       <i className="fa-solid fa-angle-down ms-auto" />
                                    </Button>
                                    <div id="collapseCollectionType" className="collapse show">
                                       <Form.Check name="checkbox" type="checkbox" id="flexCheck-collection-1" className="hover p-3 mb-1 w-100"
                                          label={
                                             <>
                                                <img className="card-img-collection mx-3 rounded-12" src="./assets/img/collections/1.gif" style={{ width: '40px', height: '40px' }} />
                                                <Card.Title className="d-flex align-items-center mb-0 fs-18">
                                                   Animals Red List
                                                   <span className="verified-icon ms-2" />
                                                </Card.Title>
                                                <div className="color-grey fw-medium small ms-auto">8</div>
                                             </>
                                          }
                                       />
                                       <Form.Check name="checkbox" type="checkbox" id="flexCheck-collection-2" className="hover p-3 mb-1 w-100"
                                          label={
                                             <>
                                                <img className="card-img-collection mx-3 rounded-12" src="./assets/img/collections/15.jpg" style={{ width: '40px', height: '40px' }} />
                                                <Card.Title className="d-flex align-items-center mb-0 fs-18">
                                                   Fantastic beasts
                                                   <span className="verified-icon ms-2" />
                                                </Card.Title>
                                                <div className="color-grey fw-medium small ms-auto">14</div>
                                             </>
                                          }
                                       />
                                       <Form.Check name="checkbox" type="checkbox" id="flexCheck-collection-3" className="hover p-3 mb-1 w-100"
                                          label={
                                             <>
                                                <img className="card-img-collection mx-3 rounded-12" src="./assets/img/collections/14.jpg" style={{ width: '40px', height: '40px' }} />
                                                <Card.Title className="d-flex align-items-center mb-0 fs-18">
                                                   Superhero
                                                   <span className="verified-icon ms-2" />
                                                </Card.Title>
                                                <div className="color-grey fw-medium small ms-auto">2</div>
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
                              variant="pills collections__nav mt-3"
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
                                 {items && items.length > 0 ? 
                                    items.map((item, key) => (
                                       <Col sm="6" md="4" lg="6" xl="4" xxl="3" className="mb-4" key={key}>
                                       <Card>
                                          <Card.Link href={"/collection-item?a=" + rawToTon(item.address)} className="card-link">
                                             <Card.Img variant="top card-image" 
                                                src={item.previews ? item.previews[1].url : ''} />
                                             <Card.Body>
                                                {item.collection ?
                                                <div className="card-subtitle d-flex align-items-center mb-2">
                                                   {item.collection?.name}
                                                   <span className="verified-icon ms-2" />
                                                </div> :  <div className="card-subtitle d-flex align-items-center mb-2">
                                                   Single
                                                </div> }
                                                <Card.Title className="mb-3">
                                                   {item.metadata.name}
                                                </Card.Title>
                                                {item.sale ? 
                                                <Card.Text className="d-flex align-items-center color-grey fs-18">
                                                   <span className="icon-ton me-2"></span> {fixAmount(item.sale?.price.value ?? 0)}
                                                   {/* <Badge bg="purple" className="ms-2">MIN.BID</Badge> */}
                                                </Card.Text>
                                                :
                                                <Card.Text className="d-flex align-items-center color-grey">
                                                Not For Sale
                                             </Card.Text>}
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
                                          {/* <div className="card-status fw-500">
                                             <i className="fa-regular fa-gavel me-2 fs-18" />
                                             7 days
                                          </div> */}
                                          <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/cats/1.png)  no-repeat center center / cover' }} />
                                       </Card>
                                    </Col>
                                    ))
                                 : null}
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
