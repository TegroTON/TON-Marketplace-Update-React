import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Div } from '@vkontakte/vkui';

import { MarketNft } from '../../logic/loadnft';
import { getParameterByName, rawToTon, fixAmount } from '../../logic/utils';
import { Collection, Item } from '../../logic/tonapi';

export const Main: React.FC<PageProps> = (props: PageProps) => {
   const [firstRender, setFirstRender] = React.useState<boolean>(false)

   const [ items, setItems ] = React.useState<Item[] | undefined>(undefined)

   const [ page, setPage ] = React.useState<number>(0)

   const history = useNavigate()

   const marketNFT = new MarketNft()

   async function load () {
      const data = await marketNFT.getAllItems(page)

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

         load()
      }
   }, [])

   return (
      <div id={props.id}>
         <main className="main-page">
            <section className="hero section pt-2" id="hero">
               <Container fluid className="hero__container">
                  <Row className="align-items-center">
                     <Col md="12" lg="9" xxl="5">
                        <h1 className="hero__title">
                           Discover Digital Art,
                           <span className="d-block">Collect and Sell Your</span>
                           Specific NFTs.
                        </h1>
                        <div className="hero__desc">
                           Welcome to the future, you can buy and sell awesome artworks form here.
                           The world largest digital marketplace <br /> for non-fungible tokens.
                        </div>
                        <Button
                           variant="primary"
                           className="order-3 order-lg-4"
                           data-bs-toggle="modal"
                           data-bs-target="#ConnectModal"
                        >
                           <i className="fa-regular fa-arrow-right-to-arc me-2" />
                           Get Started
                        </Button>
                     </Col>
                     <Col md="12" lg="3" xxl="5" className="d-none d-xxl-block ms-auto">
                        <div className="hero-animated__box">
                           <div className="hero-animated__item">
                              <img src="./assets/img/hero-nfts-1.png" alt="" className="hero-animated__image" />
                           </div>
                           <div className="hero-animated__item">
                              <img src="./assets/img/hero-nfts-2.png" alt="" className="hero-animated__image" />
                           </div>
                           <div className="hero-animated__item">
                              <img src="./assets/img/hero-nfts-3.png" alt="" className="hero-animated__image" />
                           </div>
                        </div>
                     </Col>
                  </Row>
                  <div className="baground-hero__nft" />
               </Container>
            </section>
            <section className="create section" id="create">
               <Container className="create__container container-fluid position-relative">
                  <h2 className="section__title text-center">
                     Create and sell <span className="color-yellow">your NFTs</span>
                  </h2>
                  <div className="d-flex flex-nowrap overflow-auto py-5" id="overflow-auto">
                     <div className="create-card d-flex">
                        <div className="create-card__icon d-none d-md-block">
                           <img src="./assets/img/create-card-1.png" alt="" className="create-card__img" width="100px" height="100px" />
                        </div>
                        <div className="create-card__body ms-4">
                           <div className="create-card__num mb-3">
                              0<span className="color-yellow">1</span>
                           </div>
                           <h4 className="fs-24 mb-4">
                              Set up your wallet
                           </h4>
                           <p className="fs-18 color-grey mb-0">
                              Once you’ve set up your wallet of choice, connect it to Libermall by clicking the wallet icon in the top right corner. Learn about the wallets we support
                           </p>
                        </div>
                     </div>
                     <div className="create-card d-flex">
                        <div className="create-card__icon d-none d-md-block">
                           <img src="./assets/img/create-card-2.png" alt="" className="create-card__img" width="100px" height="100px" />
                        </div>
                        <div className="create-card__body ms-4">
                           <div className="create-card__num mb-3">
                              0<span className="color-yellow">2</span>
                           </div>
                           <h4 className="fs-24 mb-4">
                              Create your collection
                           </h4>
                           <p className="fs-18 color-grey mb-0">
                              Once you’ve set up your wallet of choice, connect it to Libermall by clicking the wallet icon in the top right corner. Learn about the wallets we support
                           </p>
                        </div>
                     </div>
                     <div className="create-card d-flex">
                        <div className="create-card__icon d-none d-md-block">
                           <img src="./assets/img/create-card-3.png" alt="" className="create-card__img" width="90px" height="90px" />
                        </div>
                        <div className="create-card__body ms-4">
                           <div className="create-card__num mb-3">
                              0<span className="color-yellow">3</span>
                           </div>
                           <h4 className="fs-24 mb-4">
                              Add your NFTs
                           </h4>
                           <p className="fs-18 color-grey mb-0">
                              Once you’ve set up your wallet of choice, connect it to Libermall by clicking the wallet icon in the top right corner. Learn about the wallets we support
                           </p>
                        </div>
                     </div>
                     <div className="create-card d-flex">
                        <div className="create-card__icon d-none d-md-block">
                           <img src="./assets/img/create-card-4.png" alt="" className="create-card__img" width="90px" height="90px" />
                        </div>
                        <div className="create-card__body ms-4">
                           <div className="create-card__num mb-3">
                              0<span className="color-yellow">4</span>
                           </div>
                           <h4 className="fs-24 mb-4">
                              List them for sale
                           </h4>
                           <p className="fs-18 color-grey mb-0">
                              Once you’ve set up your wallet of choice, connect it to Libermall by clicking the wallet icon in the top right corner. Learn about the wallets we support
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="create-border"></div>
               </Container>
            </section>
            <section className="notable section" id="notable">
               <Container fluid>
                  <div className="notable__head d-block d-lg-flex align-items-center mb-5">
                     <div className="d-flex align-items-center mb-3 mb-lg-0">
                        <h2 className="section__title mb-0 me-3">
                           Top selling <span className="color-yellow">NFT's</span>
                        </h2>
                        <OverlayTrigger overlay={
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
                        <Button variant="secondary btn-sm px-3 px-lg-4 active">1 Day</Button>
                        <Button variant="secondary btn-sm px-3 px-lg-4">7 Days</Button>
                        <Button variant="secondary btn-sm px-3 px-lg-4">30 Days</Button>
                        <Button variant="secondary btn-sm px-3 px-lg-4">All Time</Button>
                     </ButtonGroup>
                  </div>
                  <div className="notable-slider">
                     {items ? items.map((item, key) => (
                        <Card key={key}>
                           <Card.Link href={"/collection-item?a=" + rawToTon(item.address)} className="card-link">
                              <Card.Img variant="top card-image" src={item.previews[1].url} />
                              <Card.Body>
                                 <div className="card-subtitle d-flex align-items-center mb-2">
                                    {item.collection?.name}
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
                     ))
                        
                     : null }
                    
                  </div>
               </Container>
            </section>
            <section className="collections section">
               <Container className="collection__container container-fluid">
                  <div className="notable__head d-block d-lg-flex align-items-center mb-5">
                     <div className="d-flex align-items-center mb-4 mb-lg-0">
                        <h2 className="section__title mb-0 me-3">
                           Top <span className="color-yellow">collections</span>
                        </h2>
                        <OverlayTrigger overlay={
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
                  <Row>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/1.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-2 fs-18">
                                    Animals Red List
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">21,08 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-2 me-3 me-lg-0">
                                    908.5k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $2M -
                                    <span className="color-green ms-2">+8.78%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/2.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-2 fs-18">
                                    Rich Cats
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">90 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-2 me-3 me-lg-0">
                                    204.7k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $470.8K -
                                    <span className="color-green ms-2">+1.33%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/2.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/3.jpg" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    TON GUYS
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">2,03 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    43.1k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $95.6K
                                    <span className="color-green ms-2">+2.01%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/3.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/4.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    TON DOODLES
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">1,09 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    41.5k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $95.6K
                                    <span className="ms-2">-</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/4.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/5.jpg" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    METAMORPHOSES
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">143,03 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    12.8k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $29.6K
                                    <span className="color-green ms-2">+5.35%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/5.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
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
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/6.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/7.png" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    Eggs Wisdom
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">6 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    11.1k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $25.6K
                                    <span className="color-green ms-2">+8.84%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/7.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/8.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    Cosmic Friends
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">2,03 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    43.1k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $95.6K
                                    <span className="color-green ms-2">+8.84%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/8.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/9.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    digital avatars
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">1,02 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    84.9k TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $195.2K
                                    <span className="color-green ms-2">+4K%</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/9.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/10.jpg" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    G-BOTS SD
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">22 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    182.6K TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    420K TON
                                    <span className="ms-2">-</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/10.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
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
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/11.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/12.gif" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    Meta Panthers
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
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/12.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
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
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/13.png)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
                        <Card className="collection-card mb-3">
                           <Card.Link href="/collection" className="card-link d-flex flex-column flex-lg-row align-items-center">
                              <Card.Img variant="collection m-3 m-lg-0" src="./assets/img/collections/15.jpg" />
                              <Card.Body>
                                 <Card.Title className="d-flex align-items-center mb-3 fs-18">
                                    Fantastic beasts
                                    <span className="verified-icon ms-2" />
                                 </Card.Title>
                                 <Card.Text className="d-flex align-items-center color-grey">
                                    Floor: <span className="icon-ton mx-1"></span> <span className="ms-1 text-uppercase">2 TON</span>
                                 </Card.Text>
                              </Card.Body>
                              <Card.Body className="text-end">
                                 <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">
                                    417.8 TON
                                 </div>
                                 <div className="fw-medium small color-grey">
                                    $960.9K
                                    <span className="ms-2">-</span>
                                 </div>
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/15.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     <Col sm="6" xxl="4">
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
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/14.jpg)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                  </Row>
                  <div className="mt-5 text-center">
                     <a href="#!" className="btn btn-primary">See all <i className="fa-solid fa-arrow-right ms-2"></i></a>
                  </div>
               </Container>
            </section>
            <section className="libermall section" id="Libermall">
               <Container className="libermall__container container-fluid">
                  <h2 className="section__title mb-3">
                     TON is in beta <span className="d-block d-md-inline">on Libermall</span>
                  </h2>
                  <div className="libermall__buttons d-flex align-items-center">
                     <a href="#!" className="btn btn-dark">Explore</a>
                     <div className="libermall__soclinks ms-5 d-none d-md-flex">
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
                     </div>
                  </div>
               </Container>
            </section>
            <section className="category section" id="category">
               <Container className="category__container container-fluid">
                  <h2 className="section__title mb-5">
                     Browse <span className="color-yellow">by category</span>
                  </h2>
                  <div className="category-slider pt-3">
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-1.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Art
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-1.jpg)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-2.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Sports
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-2.jpg)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-3.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Collectibles
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-3.jpg)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-4.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Photography
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-4.jpg)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-5.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Domain Name
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-5.jpg)  no-repeat center center / cover' }} />
                     </Card>
                     <Card>
                        <Card.Link href="/collection" className="card-link">
                           <Card.Img variant="top card-image" src="./assets/img/category/cat-6.jpg" />
                           <Card.Body>
                              <Card.Title className="text-center mb-0">
                                 Music
                              </Card.Title>
                           </Card.Body>
                        </Card.Link>
                        <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/category/cat-6.jpg)  no-repeat center center / cover' }} />
                     </Card>
                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
