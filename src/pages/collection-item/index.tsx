import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, ListGroup, Dropdown, Row, Col, Container, Breadcrumb, Card, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { PageProps } from '../../types/interfaces'

export const CollectionItem: React.FC<PageProps> = (props: PageProps) => {
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
            <section className="item-details section pt-5">
               <Container fluid>
                  <Breadcrumb className="mb-5">
                     <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
                     <Breadcrumb.Item href="/collection">Cat Metaverse</Breadcrumb.Item>
                     <Breadcrumb.Item active>TON NFT Tegro Cat (6452)</Breadcrumb.Item>
                  </Breadcrumb>
                  <Row className="justify-content-center mb-4">
                     <Col lg="5" className="mb-4 mb-lg-0">
                        <div className="position-sticky" style={{ top: '140px' }}>
                           <img className="item-details__image" data-enlargable src="./assets/img/nfts/nft-6.png" alt="" />
                        </div>
                     </Col>
                     <Col lg="7" className="ms-auto">
                        <div className="card-item-details mb-5">
                           <div className="card-item-head d-flex mb-4">
                              <div className="item-details__badge badge__green me-auto">For Sale</div>
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
                           <h1 className="item-details__title mb-3">TON NFT Tegro Cat (6452)</h1>
                           <p className="item-details__desc mb-0">
                              TON Tegro Cat are unique NFTs with cats created only for the TON network. Our TON NFT "Cats"
                              is a community of 9,999 super-rare, artfully crafted, collectible cats. Each Cat is an individual being.
                              The collection was created by the TegroMoney team, the creators of the TGR token on The Open Network blockchain.
                           </p>
                        </div>

                        <Card className="border mb-4">
                           <Card.Body className="">
                              <div className="d-flex align-items-center">
                                 <div className="d-block text-uppercase fs-18 fw-medium">Price:</div>
                                 <div className="price-item__ton d-block ms-auto">43.9 TON</div>
                              </div>
                              <div className="d-flex align-items-center mb-4">
                                 <div className="color-grey">Plus a network fee of 1 TON</div>
                                 <div className="price-item__dollar d-block color-grey ms-auto">$64.09</div>
                              </div>
                              <div className="d-flex flex-wrap">
                                 <Button variant="primary flex-fill m-1" data-bs-toggle="modal" data-bs-target="#BuyNowModal">Buy Now</Button>
                                 <Button variant="secondary flex-fill m-1" data-bs-toggle="modal" data-bs-target="#BuyNowModal"><i className="fa-solid fa-tag me-3"></i>Make Offer</Button>
                              </div>
                           </Card.Body>
                        </Card>

                        <Row>
                           <Col xl="6" className="mx-auto mb-4">
                              <Card className="hover border">
                                 <a href="/profile" className="text-white">
                                    <Card.Title className="color-grey fs-14 mb-4">Owner</Card.Title>
                                    <div className="d-flex align-items-center">
                                       <Card.Img variant="none img-fluid rounded-circle" src="/assets/img/author/author-12.jpg" width={40} height={40} />
                                       <div className="fs-16 ms-3">NFT Tegro</div>
                                       <i className="fa-solid fa-angle-right color-grey ms-auto" />
                                    </div>
                                 </a>
                              </Card>
                           </Col>
                           <Col xl="6" className="mx-auto mb-4">
                              <Card className="hover border">
                                 <a href="/collection" className="text-white">
                                    <Card.Title className="color-grey fs-14 mb-4">Collection</Card.Title>
                                    <div className="d-flex align-items-center">
                                       <Card.Img variant="none img-fluid rounded-circle" src="/assets/img/author/author-17.jpg" width={40} height={40} />
                                       <div className="fs-16 ms-3">Cat Metaverse</div>
                                       <i className="fa-solid fa-angle-right color-grey ms-auto" />
                                    </div>
                                 </a>
                              </Card>
                           </Col>
                        </Row>
                        <Card className="border mb-4">
                           <Card.Body>
                              <Card.Title className="mb-4">Details</Card.Title>
                              <ListGroup variant="flush" className="p-0 bg-transparent">
                                 <ListGroup.Item className="p-0 border-0 mb-3">
                                    <a href="https://tonscan.org/address/EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP"
                                       className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                       <div className="fw-medium color-grey">Contract Address</div>
                                       <div className="col-4 text-truncate ms-auto">EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP</div>
                                       <i className="fa-solid fa-angle-right color-grey ms-3" />
                                    </a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="p-0 border-0 mb-3">
                                    <a href="https://tonscan.org/address/EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP"
                                       className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                       <div className="fw-medium color-grey">Sale Contract</div>
                                       <div className="col-4 text-truncate ms-auto">EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP</div>
                                       <i className="fa-solid fa-angle-right color-grey ms-3" />
                                    </a>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center p-3 rounded border hover text-white mb-3">
                                    <div className="fw-medium color-grey">Token ID</div>
                                    <div className="text-truncate ms-auto">10931</div>
                                 </ListGroup.Item>
                                 <ListGroup.Item className="d-flex align-items-center p-3 rounded border hover text-white">
                                    <div className="fw-medium color-grey">Metadata</div>
                                    <div className="text-truncate ms-auto">Centralized</div>
                                 </ListGroup.Item>
                              </ListGroup>
                           </Card.Body>
                        </Card>

                        <Card className="border">
                           <Card.Title className="mb-4">Attributes</Card.Title>
                           <Row>
                              <Col lg="6" className="mb-3">
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
                              </Col>
                              <Col lg="6" className="mb-3">
                                 <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                    <div className="me-auto">
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">Hairstyle</span>
                                       <span className="d-block fw-medium">Double Ponies</span>
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
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">Outfit</span>
                                       <span className="d-block fw-medium">Qipao</span>
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
                                       <span className="d-block fs-14 fw-medium color-grey mb-2">Prop</span>
                                       <span className="d-block fw-medium">Lolipop</span>
                                    </div>
                                    <div className="fs-14">
                                       <div className="d-block fw-medium color-grey mb-2">Rarity</div>
                                       <span>22/100</span>
                                       <span className="mx-1">~</span>
                                       <span className="fw-medium">17.1%</span>
                                    </div>
                                 </a>
                              </Col>
                           </Row>
                        </Card>
                     </Col>
                  </Row>
                  <Card className="border p-0 mb-5">
                     <Card.Header className="px-4 py-3 border-bottom d-flex align-items-center">
                        <Card.Title>
                           <i className="fa-solid fa-arrow-down-arrow-up me-3"></i>
                           Transaction History
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
                     <Table responsive className="text-white mb-0">
                        <thead className="bg-soft">
                           <tr className="border-bottom">
                              <th scope="col" className="p-4">Type</th>
                              <th scope="col" className="p-4">Price</th>
                              <th scope="col" className="p-4">From</th>
                              <th scope="col" className="p-4">To</th>
                              <th scope="col" className="p-4">Date</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="border-bottom hover">
                              <td className="p-4">
                                 <i className="fa-regular fa-cart-shopping-fast fs-18 me-3" />
                                 <span className="fw-medium">Sale</span>
                              </td>
                              <td className="p-4">38 TON</td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 2 hours ago</td>
                           </tr>
                           <tr className="border-bottom hover">
                              <td className="p-4">
                                 <i className="fa-regular fa-arrow-right-arrow-left me-3" />
                                 <span className="fw-medium">Transfer</span>
                              </td>
                              <td className="p-4"></td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 12 hours ago</td>
                           </tr>
                           <tr className="border-bottom hover">
                              <td className="p-4">
                                 <i className="fa-solid fa-solid fa-sparkles me-3" />
                                 <span className="fw-medium">Minted</span>
                              </td>
                              <td className="p-4">40 TON</td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 1 day ago</td>
                           </tr>
                           <tr className="border-bottom hover">
                              <td className="p-4">
                                 <i className="fa-regular fa-cart-shopping-fast fs-18 me-3" />
                                 <span className="fw-medium">Sale</span>
                              </td>
                              <td className="p-4">38 TON</td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 2 hours ago</td>
                           </tr>
                           <tr className="border-bottom hover">
                              <td className="p-4">
                                 <i className="fa-regular fa-arrow-right-arrow-left me-3" />
                                 <span className="fw-medium">Transfer</span>
                              </td>
                              <td className="p-4"></td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 12 hours ago</td>
                           </tr>
                           <tr className="border-0 hover">
                              <td className="p-4">
                                 <i className="fa-solid fa-solid fa-sparkles me-3" />
                                 <span className="fw-medium">Minted</span>
                              </td>
                              <td className="p-4">40 TON</td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </a>
                              </td>
                              <td className="p-4">
                                 <a href="/profile" className="d-block text-truncate" target="_blank" style={{ maxWidth: '150px' }}>
                                    <i className="fa-regular fa-circle-user me-3" />antonov
                                 </a>
                              </td>
                              <td className="p-4"><i className="fa-regular fa-timer me-3" /> 1 day ago</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>

                  <h2 className="fs-28 fw-bold mb-4 me-3">
                     More From This Collection
                  </h2>
                  <div className="notable-slider">
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
                     <Card>
                        <Card.Link href="/collection-item" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/nfts/nft-5.png" />
                           <Card.Body>
                              <div className="card-subtitle d-flex align-items-center mb-2">
                                 Moto Paradise
                                 <span className="verified-icon ms-2" />
                              </div>
                              <Card.Title className="mb-3">
                                 Motorcyclist in paradise
                              </Card.Title>
                              <Card.Text className="d-flex align-items-center color-grey fs-18">
                                 <span className="icon-ton me-2"></span>
                                 27
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
                           9
                        </Button>
                        <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                           Buy Now
                        </Button>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-5.png)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection-item" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/nfts/nft-6.png" />
                           <Card.Body>
                              <div className="card-subtitle d-flex align-items-center mb-2">
                                 Cute Monters
                                 <span className="verified-icon ms-2" />
                              </div>
                              <Card.Title className="mb-3">
                                 ZubazzzTik
                              </Card.Title>
                              <Card.Text className="d-flex align-items-center color-grey fs-18">
                                 <span className="icon-ton me-2"></span>
                                 35
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
                           16
                        </Button>
                        <Button variant="primary btn-sm card__show-effect" data-bs-toggle="modal" data-bs-target="#BuyNowModal">
                           Buy Now
                        </Button>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/nfts/nft-6.png)  no-repeat center center / cover' }} />
                     </Card>
                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
