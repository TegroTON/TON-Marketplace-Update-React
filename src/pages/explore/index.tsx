import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MarketNft } from '../../logic/loadnft';
import { Collection, Collections } from '../../logic/tonapi';
import { rawToTon } from '../../logic/utils';

export const Explore: React.FC<PageProps> = (props: PageProps) => {
   const [firstRender, setFirstRender] = React.useState<boolean>(false)

   const [ collections, setCollections ] = React.useState<Collection[] | undefined>(undefined)

   const [ page, setPage ] = React.useState<number>(0)


   const history = useNavigate()

   const marketNFT = new MarketNft()

   async function loadList () {
      const data = await marketNFT.getCollections(page)

      if (!data) {
         return undefined
      }
      setPage(page + 1)
      if (collections) setCollections([...collections, ...data])
      else setCollections(data)
   }


   useEffect(() => {
      if (!firstRender) {
         setFirstRender(true)
         props.installScripts()

         loadList()

      }
   }, [])

   return (
      <div id={props.id}>
         <main className="main-page border-top">
            <section className="collections section">
               <Container fluid>
                  <div className="d-flex flex-column flex-sm-row mb-5">
                     <h1 className="section__title fs-40 mb-4 mb-sm-0 me-3 me-auto">
                        Explore
                     </h1>
                     <div className="d-block d-sm-flex">
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
                     {collections ?
                     collections.map((collection, key) => (
                        <Col sm="6" lg="4" xl="3" xxl className="mb-4" key={key}>
                        <Card>
                           <Card.Link href={"/collection?a=" + rawToTon(collection.address)} className="card-link">
                              <Card.Img variant="top card-image" src={collection.metadata?.image ?? collection.metadata?.cover_image} />
                              <Card.Body className="d-flex align-items-center mt-2">
                                 <Card.Title className="mb-0">
                                   {collection.metadata?.name}
                                 </Card.Title>
                                 <span className="verified-icon ms-2" />
                              </Card.Body>
                           </Card.Link>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover' }} />
                        </Card>
                     </Col>
                     )) : null }
                  </Row>
                  <div className="mt-5 text-center">
                     <Button variant="primary" onClick={() => loadList()}>Show More</Button>
                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
