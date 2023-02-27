import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Dropdown, Row, Col, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Rankings: React.FC<PageProps> = (props: PageProps) => {
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
            <section className="collections section">
               <Container fluid>
                  <div className="d-flex flex-column flex-sm-row mb-5">
                     <h1 className="section__title fs-40 mb-4 mb-sm-0 me-3 me-auto">
                        Collection stats
                     </h1>
                     <ButtonGroup className="btn-group-custom ms-auto">
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4 active">1 Day</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">7 Days</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">30 Days</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">All time</Button>
                     </ButtonGroup>
                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
