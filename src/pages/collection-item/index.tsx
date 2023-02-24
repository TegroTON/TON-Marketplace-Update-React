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
         <main className="main-page">
            <div className="collection__item-bg" style={{ background: 'url(./assets/img/cats/1.png)  no-repeat center center / cover' }} />
            <section className="item-details section pt-5">
               <Container fluid>
                  <Row className="justify-content-center mb-5">
                     <Col md="10" lg="12" xxl="9">
                        <Breadcrumb className="mb-5">
                           <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
                           <Breadcrumb.Item href="/collection">Cat Metaverse</Breadcrumb.Item>
                           <Breadcrumb.Item active>TON NFT Tegro Cat (6452)</Breadcrumb.Item>
                        </Breadcrumb>

                        <Row className="justify-content-center mb-4">
                           <Col lg="5" className="mb-4 mb-lg-0">
                              <div className="position-sticky" style={{ top: '140px' }}>
                                 <img className="item-details__image" data-enlargable src="./assets/img/cats/1.png" alt="" />
                              </div>
                           </Col>
                           <Col className="col-lg-6 ms-auto">
                              <div className="card-item-details mb-5">
                                 <div className="">
                                    <div className="card-item-head d-flex mb-4">
                                       <div className="item-details__badge badge__green me-auto">For Sale</div>
                                       <Button variant="icon btn-details__like me-3">
                                          <i className="fa-regular fa-heart me-3" />
                                          <span className="d-block d-sm-inline">24</span>
                                       </Button>
                                       <Dropdown>
                                          <Dropdown.Toggle variant="icon" id="dropdown-actions">
                                             <i className="fa-solid fa-ellipsis-vertical" />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="mt-2 fs-14">
                                             <Dropdown.Item href="#" className="border-0"><i className="fa-solid fa-arrows-rotate me-3" /> Refresh Metadata</Dropdown.Item>
                                             <Dropdown.Item href="#"><i className="fa-regular fa-heart fs-16 me-3" /> Like</Dropdown.Item>
                                          </Dropdown.Menu>
                                       </Dropdown>
                                    </div>
                                    <h1 className="item-details__title mb-3">TON NFT Tegro Cat (6452)</h1>
                                 </div>
                                 <p className="item-details__desc mb-0">
                                    TON Tegro Cat are unique NFTs with cats created only for the TON network. Our TON NFT "Cats"
                                    is a community of 9,999 super-rare, artfully crafted, collectible cats. Each Cat is an individual being.
                                    The collection was created by the TegroMoney team, the creators of the TGR token on The Open Network blockchain.
                                 </p>
                              </div>

                              <Card className="bg-soft border mb-4">
                                 <Card.Body className="">
                                    <div className="d-flex align-items-center">
                                       <div className="d-block text-uppercase fs-18 fw-medium">Price:</div>
                                       <div className="price-item__ton d-block ms-auto">43.9 TON</div>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                       <div className="color-grey">Plus a network fee of 1 TON</div>
                                       <div className="price-item__dollar d-block color-grey text-end ms-auto">$64.09</div>
                                    </div>
                                    <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#BuyNowModal">Buy Now</Button>
                                    <Button variant="soft w-100 mt-2" data-bs-toggle="modal" data-bs-target="#BuyNowModal">Make Offer</Button>
                                 </Card.Body>
                              </Card>

                              <Row>
                                 <Col xl="6" className="mx-auto mb-4">
                                    <Card className="bg-soft border">
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
                                    <Card className="bg-soft border">
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
                              <Card className="bg-soft border mb-4">
                                 <Card.Body>
                                    <Card.Title className="mb-4">Details</Card.Title>
                                    <ListGroup variant="flush">
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

                              <Card className="bg-soft border">
                                 <Card.Title className="mb-4">Attributes</Card.Title>
                                 <Row>
                                    <Col lg="6" className="mb-3">
                                       <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                          <div className="me-auto">
                                             <span className="d-block fs-14 fw-medium color-grey mb-2">Background</span>
                                             <span className="d-block fw-medium">Orange</span>
                                          </div>
                                          <div className="fs-14 text-end">
                                             <div className="d-block fw-medium color-grey text-end mb-2">Rarity</div>
                                             <span>22/100</span>
                                             <span className="mx-1">~</span>
                                             <span className="fw-medium text-end">17.1%</span>
                                          </div>
                                       </a>
                                    </Col>
                                    <Col lg="6" className="mb-3">
                                       <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                          <div className="me-auto">
                                             <span className="d-block fs-14 fw-medium color-grey mb-2">Expression</span>
                                             <span className="d-block fw-medium">Brown Eyes</span>
                                          </div>
                                          <div className="fs-14 text-end">
                                             <div className="d-block fw-medium color-grey text-end mb-2">Rarity</div>
                                             <span>22/100</span>
                                             <span className="mx-1">~</span>
                                             <span className="fw-medium text-end">17.1%</span>
                                          </div>
                                       </a>
                                    </Col>
                                    <Col lg="6" className="mb-3">
                                       <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                          <div className="me-auto">
                                             <span className="d-block fs-14 fw-medium color-grey mb-2">Hairstyle</span>
                                             <span className="d-block fw-medium">Double Ponies</span>
                                          </div>
                                          <div className="fs-14 text-end">
                                             <div className="d-block fw-medium color-grey text-end mb-2">Rarity</div>
                                             <span>22/100</span>
                                             <span className="mx-1">~</span>
                                             <span className="fw-medium text-end">17.1%</span>
                                          </div>
                                       </a>
                                    </Col>
                                    <Col lg="6" className="mb-3">
                                       <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                          <div className="me-auto">
                                             <span className="d-block fs-14 fw-medium color-grey mb-2">Outfit</span>
                                             <span className="d-block fw-medium">Qipao</span>
                                          </div>
                                          <div className="fs-14 text-end">
                                             <div className="d-block fw-medium color-grey text-end mb-2">Rarity</div>
                                             <span>22/100</span>
                                             <span className="mx-1">~</span>
                                             <span className="fw-medium text-end">17.1%</span>
                                          </div>
                                       </a>
                                    </Col>
                                    <Col lg="6" className="mb-3">
                                       <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                                          <div className="me-auto">
                                             <span className="d-block fs-14 fw-medium color-grey mb-2">Prop</span>
                                             <span className="d-block fw-medium">Lolipop</span>
                                          </div>
                                          <div className="fs-14 text-end">
                                             <div className="d-block fw-medium color-grey text-end mb-2">Rarity</div>
                                             <span>22/100</span>
                                             <span className="mx-1">~</span>
                                             <span className="fw-medium text-end">17.1%</span>
                                          </div>
                                       </a>
                                    </Col>
                                 </Row>
                              </Card>
                           </Col>
                        </Row>

                        <Card.Title className="fs-28 mb-4 pt-5">Transaction History</Card.Title>
                        <Card className="bg-soft border p-0">
                           <Table className="text-white mb-0">
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
                                       <i className="fa-regular fa-coin-blank me-3" />
                                       <span className="fw-medium">Mint</span>
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
                                 <tr className="border-bottom hover">
                                    <td className="p-4">
                                       <i className="fa-regular fa-coin-blank me-3" />
                                       <span className="fw-medium">Mint</span>
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
                     </Col>
                  </Row>
               </Container>
            </section>
         </main>
      </div>
   )
}
