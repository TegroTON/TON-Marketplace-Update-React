import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Row, Col, Container } from 'react-bootstrap';

import { PageProps } from '../../types/interfaces'

export const SuccessfullyPut: React.FC<PageProps> = (props: PageProps) => {
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
            <section className="item-details section">
               <Container fluid>
                  <Row className="justify-content-center">
                     <Col md="6" lg="3"  className="text-center ">
                        <img className="rounded img-fluid mb-4" src="./assets/img/item-details-image.jpg" alt="Tergo Cat" width="200" />
                        <div className="ms-4">
                           <h5 className="fs-28 mb-2">Nice! You've successfully put <span className="d-block">an NFT up for auction!</span></h5>
                           <p className="mb-5 color-grey">
                              The NFT will be displayed in your profile, and other users will be able to place bids to become the new owner of your NFT when the auction is over.
                           </p>
                           <a href="/user1" className="btn btn-sm btn-secondary w-100">Close</a>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </section>
         </main>
      </div>
   )
}
