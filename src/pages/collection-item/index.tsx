import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, ListGroup, Dropdown, Row, Col, Container, Breadcrumb, Card, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { PageProps } from '../../types/interfaces'
import { MarketNft } from '../../logic/loadnft';

import { getParameterByName, fixAmount, rawToTon } from '../../logic/utils'
import { Account, Collection, Item } from '../../logic/tonapi';

export const CollectionItem: React.FC<PageProps> = (props: PageProps) => {
   const [firstRender, setFirstRender] = React.useState<boolean>(false)

   const [ oneItem, setOneItem ] = React.useState<Item | undefined>(undefined)
   const [ collection, setCollection ] = React.useState<Collection | undefined>(undefined)

   const [ items, setItems ] = React.useState<Item[] | undefined>(undefined)

   const [ account, setAccount ] = React.useState<Account | undefined>(undefined)

   const history = useNavigate()

   const marketNFT = new MarketNft()

   async function loadUser (address: string) {
      const data = await marketNFT.getUser(address)

      if (!data) {
         return undefined
      }
      setAccount(data)
   }

   async function load (address: string) {
      const data = await marketNFT.getOneNft(address)

      if (!data || !data.nft) {
         return undefined
      }

      setOneItem(data.nft)
      setCollection(data.collection)

      if (data.collection) await loadItems(data.collection?.address)

      props.installScripts()

      if (data.nft.owner) await loadUser(data.nft.owner.address)
   }

   async function loadItems (address: string = collection?.address ?? '') {
      if (address === '') {
         return
      }
      const data = await marketNFT.getItemsFromCollection(address, 0)
      if (!data) {
         return undefined
      }

      setItems(data)
   }


   useEffect(() => {
      if (!firstRender) {
         setFirstRender(true)
         // props.installScripts()

         const address = getParameterByName('a')

         if (address) {
            load(address)
         } else {
            history('/')
         }

      }
   }, [])

   return (
      <div id={props.id}>
         <main className="main-page border-top">
            {oneItem ?
            <section className="item-details section pt-5">
               <Container fluid>
                  <Breadcrumb className="mb-4">
                     <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
                     <Breadcrumb.Item href={"/collection?a=" + (collection ? rawToTon(collection.address) : '')}>{oneItem.collection?.name}</Breadcrumb.Item>
                     <Breadcrumb.Item active>{oneItem.metadata.name}</Breadcrumb.Item>
                  </Breadcrumb>
                  <Row className="justify-content-center mb-4">
                     <Col lg="5" className="mb-4 mb-lg-0">
                        <div className="text-center position-sticky" style={{ top: '110px' }}>
                           <img className="item-details__image" data-enlargable src={oneItem.previews[2].url} alt="" />
                        </div>
                     </Col>
                     <Col lg="7" className="ms-auto">
                        <div className="card-item-details mb-5">
                           <div className="card-item-head d-flex mb-4">
                              {oneItem.sale ?
                              <div className="item-details__badge badge__green me-auto">For Sale</div>
                              :
                              <div className="item-details__badge badge__purple me-auto">Not For Sale</div>}
                              {/*   @! Badge For Auction Page !@    
                                          <div className="item-details__badge badge__purple me-auto">Up for auction</div> 
                                    */}

                              <Button variant="icon btn-like me-3">
                                 <i className="fa-regular fa-heart fs-18 me-2" />
                                 <span className="d-block d-sm-inline fw-500">24</span>
                              </Button>
                              <Dropdown>
                                 <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                    <i className="fa-solid fa-ellipsis-vertical" />
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="mt-2 fs-14">
                                    <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="fa-regular fa-copy fs-16 me-3" /> Copy Link</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <h1 className="item-details__title mb-3">{oneItem.metadata.name}</h1>
                           <p className="item-details__desc col-xxl-9 mb-0">{oneItem.metadata.description}</p>
                        </div>

                        {/*  @! Block For "Not For Sale" Page !@ 
                        <Card className="border mb-4">
                           <Card.Body className="p-0 p-lg-3 d-flex flex-wrap">
                              <Button variant="primary flex-fill m-2" data-bs-toggle="modal" data-bs-target="#PutonSaleModal">Put on Sale</Button>
                              <Button variant="secondary flex-fill m-2" data-bs-toggle="modal" data-bs-target="#CreatNFTSuccessfullyModal">Transfer NFT</Button>
                           </Card.Body>
                        </Card>
                        */}
                        
                        {oneItem.sale ?
                        <Card className="border p-4 mb-4">
                           <div className="d-flex align-items-center">
                              <div className="d-block fs-24 fw-bold">Price:</div>
                              <div className="price-item__ton fs-24 fw-bold ms-auto">{fixAmount(oneItem.sale?.price.value ?? 0)} {oneItem.sale?.price.token_name}</div>
                           </div>
                           <div className="d-flex align-items-center">
                              <div className="color-grey">
                                 Plus a network fee of 1 TON
                                 <OverlayTrigger
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                       <Tooltip id={`tooltip-bottom`}>
                                          We will use this value to cover blockchain fees and send the rest back to you.
                                       </Tooltip>
                                    }
                                 >
                                    <i className="fa-regular fa-circle-info ms-2"></i>
                                 </OverlayTrigger>
                              </div>
                              <div className="price-item__dollar d-block color-grey ms-auto">$64.09</div>
                           </div>
                           <div className="d-flex flex-wrap mt-4">
                              <Button 
                                 variant="primary flex-fill m-2" 
                                 data-bs-toggle="modal" 
                                 data-bs-target="#BuyNowModal"
                                 onClick={() => props.openModalData(undefined, oneItem)}
                              >Buy Now</Button>
                              <Button variant="secondary flex-fill m-2" data-bs-toggle="modal" data-bs-target="#MakeOfferModal"><i className="fa-solid fa-tag me-3"></i>Make Offer</Button>
                           </div>
                        </Card>
                        :
                        <Card className="border p-4 mb-4">
                           <div className="d-flex align-items-center">
                              <div className="d-block fs-24 fw-bold">Price:</div>
                              <div className="price-item__ton fs-24 fw-bold ms-auto">Not for sale</div>
                           </div>
                        </Card>
                        }

                        {/*  @! Block For "Auction" Page !@ 

                        <Card className="border p-0 mb-4">
                           <Card.Header className="d-flex align-items-center p-4 mb-0">
                              <Card.Title className="fs-22 mb-0">Auction</Card.Title>
                              <a href="#!" className="d-flex align-items-center ms-auto" data-bs-toggle="modal" data-bs-target="#AboutAuctions">
                                 How it works
                                 <i className="fa-solid fa-angle-right ms-2" />
                              </a>
                           </Card.Header>
                           <Card.Body className="px-4 py-0 mb-4">
                              <div className="auction-timer d-flex flex-wrap align-items-center justify-content-between" id="timer">
                                 <div className="auction-timer__box text-center">
                                    <span className="fs-28 d-block days">14</span>
                                    <div>Days</div>
                                 </div>
                                 <div className="auction-timer__box d-flex align-items-center justify-content-center">
                                    <span className="fs-28 d-block hours">9</span>
                                    <div>Hours</div>
                                 </div>
                                 <div className="auction-timer__box d-flex align-items-center justify-content-center">
                                    <span className="fs-28 d-block minutes">24</span>
                                    <div>Min</div>
                                 </div>
                                 <div className="auction-timer__box d-flex align-items-center justify-content-center">
                                    <span className="fs-28 d-block seconds">18</span>
                                    <div>Sec</div>
                                 </div>
                              </div>
                           </Card.Body>
                           <Card.Body className="bids-box p-0">
                              <div className="bids-box__item d-flex align-items-center px-4 py-3 border-bottom bg-soft">
                                 <img src="./assets/img/user-avatar.png" className="rounded-12" width={48} height={48} />
                                 <div className="ms-3">
                                    <div className="small mb-1">Highest bid:</div>
                                    <a href="/user1" className="fw-medium">@SimonGrey</a>
                                 </div>
                                 <div className="text-end ms-auto">
                                    <div className="text-uppercase fw-medium mb-1">1,30 TON</div>
                                    <small className="color-grey">~ $3,19</small>
                                 </div>
                              </div>
                              <div className="bids-box__item d-flex align-items-center px-4 py-3 border-bottom hover">
                                 <div className="me-auto">
                                    <div className="fw-medium mb-1">Max. bid</div>
                                    <small className="color-grey">
                                       Press “Buy Now” to buy
                                    </small>
                                 </div>
                                 <div className="text-end">
                                    <div className="text-uppercase fw-medium mb-1">25,60 TON</div>
                                    <small className="color-grey">~ $51,75</small>
                                 </div>
                              </div>
                              <div className="bids-box__item d-flex align-items-center px-4 py-3 border-bottom hover">
                                 <div className="fw-medium mb-1">Max. bid</div>
                                 <div className="text-uppercase fw-medium ms-auto">20 TON</div>
                              </div>
                           </Card.Body>
                           <div className="d-flex flex-wrap p-4">
                              <Button variant="primary flex-fill m-2" data-bs-toggle="modal" data-bs-target="#BuyNowModal">Buy Now</Button>
                              <Button variant="secondary flex-fill m-2" data-bs-toggle="modal" data-bs-target="#PlaceAbidModal">
                                 Place a bid
                              </Button>
                              <Button variant="secondary flex-fill w-100 m-2" data-bs-toggle="modal" data-bs-target="#MakeOfferModal">
                                 <i className="fa-solid fa-tag me-3"></i>Make Offer
                              </Button>
                           </div>
                        </Card>

                        <Card className="d-block border p-0 mb-4">
                           <Card.Title className="fs-22 p-4 pb-0">Bids</Card.Title>

                           <Card.Link href="/profile" className="bids-box__item d-flex align-items-center px-4 py-3 border-bottom m-0">
                              <img src="./assets/img/my-avatar.png" className="rounded-12" width={48} height={48} />
                              <div className="ms-3">
                                 <div className="fw-medium">uNerd</div>
                                 <div className="small text-white  mt-1">
                                    26 Feb, 12:08 AM
                                 </div>
                              </div>
                              <div className="text-end ms-auto">
                                 <div className="text-uppercase fw-medium text-white mb-1">16,30 TON</div>
                                 <small className="color-grey">~ $31,2</small>
                              </div>
                           </Card.Link>

                           <Card.Link href="/user1" className="bids-box__item d-flex align-items-center px-4 py-3 m-0">
                              <img src="./assets/img/user-avatar.png" className="rounded-12" width={48} height={48} />
                              <div className="ms-3">
                                 <div className="fw-medium">SimonGrey</div>
                                 <div className="small text-white mt-1">
                                    27 Feb, 2:43 AM
                                 </div>
                              </div>
                              <div className="text-end ms-auto">
                                 <div className="text-uppercase fw-medium text-white mb-1">25,60 TON</div>
                                 <small className="color-grey">~ $51,75</small>
                              </div>
                           </Card.Link>
                        </Card>
                     */}
                        <Row>
                           {account ?
                           <Col md="6" lg="12" xl="6" className="mx-auto mb-4">
                              <Card.Title className="mb-3">Owner</Card.Title>
                              <Card className="p-3 p-sm-0 border mb-3">
                                 <Card.Link href={"/user?a=" + rawToTon(oneItem.owner?.address)} className="d-block d-sm-flex align-items-center text-center text-sm-start">
                                    <Card.Img variant="collection m-3 m-lg-0" src="/assets/img/user-avatar.png" />
                                    <Card.Title className="mb-0 ms-3 fs-18">
                                       {account.name ? account.name : rawToTon(oneItem.owner?.address)}
                                    </Card.Title>
                                    <i className="fa-solid fa-angle-right ms-auto d-none d-lg-block me-3" />
                                 </Card.Link>
                                 <div className="card__blur-bg-hover" style={{ background: 'url(/assets/img/user-avatar.png)  no-repeat center center / cover' }} />
                              </Card>
                           </Col> : null }
                           {collection ?
                           <Col md="6" lg="12" xl="6" className="mx-auto mb-4">
                              <Card.Title className="mb-3">Collection</Card.Title>
                              <Card className="p-3 p-sm-0 border mb-3">
                                 <Card.Link href={"/collection?a=" + rawToTon(collection.address)} className="d-block d-sm-flex align-items-center text-center text-sm-start">
                                    <Card.Img variant="collection m-3 m-lg-0" src={collection.metadata?.image} />
                                    <div className="ms-3">
                                       <Card.Title className="mb-0 fs-18">
                                          {oneItem.collection?.name}
                                       </Card.Title>
                                       <Card.Text className="color-grey">
                                          Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">21,08 TON</span>
                                       </Card.Text>
                                    </div>
                                    <i className="fa-solid fa-angle-right ms-auto d-none d-lg-block me-3" />
                                 </Card.Link>
                                 <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover' }} />
                              </Card>
                           </Col> : null }
                        </Row>
                        <Card className="border p-4 mb-4">
                           <Card.Title className="fs-22 mb-4">Details</Card.Title>
                           <ListGroup variant="flush" className="p-0 bg-transparent">
                              <ListGroup.Item className="p-0 border-0 mb-3">
                                 <a href={`https://tonscan.org/address/${rawToTon(oneItem.address)}`}
                                    className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="fw-medium color-grey">Contract Address</div>
                                    <div className="col-4 text-truncate ms-auto">{rawToTon(oneItem.address)}</div>
                                    <i className="fa-solid fa-angle-right color-grey ms-3" />
                                 </a>
                              </ListGroup.Item>
                              {oneItem.sale ?
                              <ListGroup.Item className="p-0 border-0 mb-3">
                                 <a href={`https://tonscan.org/address/${rawToTon(oneItem.sale.address)}`}
                                    className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="fw-medium color-grey">Sale Contract</div>
                                    <div className="col-4 text-truncate ms-auto">{rawToTon(oneItem.sale.address)}</div>
                                    <i className="fa-solid fa-angle-right color-grey ms-3" />
                                 </a>
                              </ListGroup.Item>
                              : null }
                              <ListGroup.Item className="d-flex align-items-center p-3 rounded border hover text-white mb-3">
                                 <div className="fw-medium color-grey">Token ID</div>
                                 <div className="text-truncate ms-auto">{oneItem.index}</div>
                              </ListGroup.Item>
                              <ListGroup.Item className="d-flex align-items-center p-3 rounded border hover text-white">
                                 <div className="fw-medium color-grey">Metadata</div>
                                 <div className="text-truncate ms-auto">Centralized</div>
                              </ListGroup.Item>
                           </ListGroup>
                        </Card>

                        <Card className="border p-4">
                           <Card.Title className="fs-22 mb-4">Attributes</Card.Title>
                           {oneItem.metadata.attributes && oneItem.metadata.attributes.length > 0 ?
                           <Row>
                              {oneItem.metadata.attributes.map((attr, key) => (
                                 <Col lg="6" className="mb-3" key={key}>
                                 <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="me-auto">
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">{attr.trait_type}</span>
                                       <span className="d-block fw-medium">{attr.value}</span>
                                    </div>
                                    <div className="fs-14">
                                       <div className="d-block fw-medium color-grey mb-2">Rarity</div>
                                       <span>22/100</span>
                                       <span className="mx-1">~</span>
                                       <span className="fw-medium">17.1%</span>
                                    </div>
                                 </a>
                              </Col>
                              ))}
                              {/* <Col lg="6" className="mb-3">
                                 <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="me-auto">
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">Background</span>
                                       <span className="d-block fw-medium">Orange</span>
                                    </div>
                                    <div className="fs-14">
                                       <div className="d-block fw-medium color-grey mb-2">Rarity</div>
                                       <span>22/100</span>
                                       <span className="mx-1">~</span>
                                       <span className="fw-medium">17.1%</span>
                                    </div>
                                 </a>
                              </Col>
                              <Col lg="6" className="mb-3">
                                 <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="me-auto">
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">Expression</span>
                                       <span className="d-block fw-medium">Brown Eyes</span>
                                    </div>
                                    <div className="fs-14">
                                       <div className="d-block fw-medium color-grey mb-2">Rarity</div>
                                       <span>22/100</span>
                                       <span className="mx-1">~</span>
                                       <span className="fw-medium">17.1%</span>
                                    </div>
                                 </a>
                              </Col> */}
                           </Row>
                           : null }
                        </Card>
                     </Col>
                  </Row>
                  <Card className="border p-0 mb-5">
                     <Card.Header className="px-4 py-3 border-bottom d-flex align-items-center">
                        <Card.Title className="fs-20">
                           <i className="fa-solid fa-arrow-down-arrow-up me-3"></i>
                           Item Activity
                        </Card.Title>
                        <Dropdown className="ms-auto">
                           <Dropdown.Toggle variant="secondary w-100">
                              Filters
                              <i className="fa-solid fa-angle-down ms-2" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="w-100 mt-2">
                              <Dropdown.Item href="#">Sales</Dropdown.Item>
                              <Dropdown.Item href="#">Listings</Dropdown.Item>
                              <Dropdown.Item href="#">Offers</Dropdown.Item>
                              <Dropdown.Item href="#">Transfers</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </Card.Header>
                     <Table responsive className="table-stats mb-0">
                        <thead className="bg-soft">
                           <tr className="border-bottom">
                              <th scope="col" className="p-4">Type</th>
                              <th scope="col" className="p-4 text-end">Price</th>
                              <th scope="col" className="p-4 text-end">From</th>
                              <th scope="col" className="p-4">To</th>
                              <th scope="col" className="p-4 text-end">Time</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <div className="table-stats d-flex align-items-center">
                                    <div className="table-stats__icon fs-18 me-3">
                                       <i className="fa-regular fa-circle-plus" />
                                    </div>
                                    <span className="table-stats__name fw-medium">Put up for sale</span>
                                 </div>
                              </td>
                              <td>
                                 <div className="table-stats__price text-end">
                                    <div className="mb-1">3 TON</div>
                                    <div className="fs-14 color-grey">$2,45</div>
                                 </div>
                              </td>
                              <td className="text-end">
                                 <a href="/user1" className="table-stats__from d-flex align-items-center justify-content-end" target="_blank">
                                    <img src="./assets/img/user-avatar.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">Simon Grey</div>
                                 </a>
                              </td>
                              <td>
                                 -
                              </td>
                              <td className="text-end">
                                 2 hours ago
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="table-stats d-flex align-items-center">
                                    <div className="table-stats__icon fs-18 me-3">
                                       <i className="fa-regular fa-cart-shopping-fast" />
                                    </div>
                                    <span className="table-stats__name fw-medium">Sale</span>
                                 </div>
                              </td>
                              <td>
                                 <div className="table-stats__price text-end">
                                    <div className="mb-1">3 TON</div>
                                    <div className="fs-14 color-grey">$2,45</div>
                                 </div>
                              </td>
                              <td className="text-end">
                                 <a href="/profile" className="table-stats__from d-flex align-items-center justify-content-end" target="_blank">
                                    <img src="./assets/img/user-avatar.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">Simon Grey</div>
                                 </a>
                              </td>
                              <td>
                                 <a href="/profile" className="table-stats__from d-flex align-items-center" target="_blank">
                                    <img src="./assets/img/nfts/nft-1.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj</div>
                                 </a>
                              </td>
                              <td className="text-end">
                                 3 min ago
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="table-stats d-flex align-items-center">
                                    <div className="table-stats__icon fs-18 me-3">
                                       <i className="fa-regular fa-ban" />
                                    </div>
                                    <span className="table-stats__name fw-medium">Sale cancellation</span>
                                 </div>
                              </td>
                              <td>
                                 <div className="table-stats__price text-end">
                                    <div className="mb-1">3 TON</div>
                                    <div className="fs-14 color-grey">$2,45</div>
                                 </div>
                              </td>
                              <td className="text-end">
                                 <a href="/profile" className="table-stats__from d-flex align-items-center justify-content-end" target="_blank">
                                    <img src="./assets/img/user-avatar.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">Simon Grey</div>
                                 </a>
                              </td>
                              <td>
                                 -
                              </td>
                              <td className="text-end">
                                 12 min ago
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="table-stats d-flex align-items-center">
                                    <div className="table-stats__icon fs-18 me-3">
                                       <i className="fa-regular fa-cart-shopping-fast" />
                                    </div>
                                    <span className="table-stats__name fw-medium">Sale</span>
                                 </div>
                              </td>
                              <td>
                                 <div className="table-stats__price text-end">
                                    <div className="mb-1">3 TON</div>
                                    <div className="fs-14 color-grey">$2,45</div>
                                 </div>
                              </td>
                              <td className="text-end">
                                 <a href="/profile" className="table-stats__from d-flex align-items-center justify-content-end" target="_blank">
                                    <img src="./assets/img/user-avatar.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">Simon Grey</div>
                                 </a>
                              </td>
                              <td>
                                 <a href="/profile" className="table-stats__from d-flex align-items-center" target="_blank">
                                    <img src="./assets/img/nfts/nft-2.png" className="table-stats__avatar" alt="" />
                                    <div className="table-stats__address ms-2">iRetnuY7nMKXFEQDZr7KDKG0R4Kyauz-IEQn4-44vzygNEvj</div>
                                 </a>
                              </td>
                              <td className="text-end">
                                 3 min ago
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="table-stats d-flex align-items-center">
                                    <div className="table-stats__icon fs-18 me-3">
                                       <i className="fa-regular fa-paintbrush-fine" />
                                    </div>
                                    <span className="table-stats__name fw-medium">Mitn</span>
                                 </div>
                              </td>
                              <td>
                                 -
                              </td>
                              <td className="text-end">
                                 -
                              </td>
                              <td>
                                 -
                              </td>
                              <td className="text-end">
                                 12 hours ago
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>

                  <h2 className="fs-28 fw-bold mb-4">
                     More From This Collection
                  </h2>
                  {items && items.length > 0 && collection ? 
                  <div className="notable-slider">
                     {items.map((item, key) => (
                        <Card key={key}>
                        <Card.Link href={"/collection-item?a=" + rawToTon(item.address)} className="card-link">
                           <Card.Img variant="top card-image" 
                              src={item.previews ? item.previews[1].url : ''} />
                           <Card.Body>
                              <div className="card-subtitle d-flex align-items-center mb-2">
                                 {collection.metadata?.name}
                                 <span className="verified-icon ms-2" />
                              </div>
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
                     ))}
                  </div>
                  : null }
               </Container>
            </section>
            : null }
         </main>
      </div >
   )
}
