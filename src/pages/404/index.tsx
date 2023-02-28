import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Row, Col, Container } from 'react-bootstrap';

import { PageProps } from '../../types/interfaces'

export const NotFound404: React.FC<PageProps> = (props: PageProps) => {
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
            <main className="main-page justify-content-center border-top">
                <Container>
                    <Row style={{ minHeight: '80vh' }}>
                        <Col md="8" lg="4" className="m-auto text-center">
                            <div className="mb-4"><i className="fa-duotone fa-triangle-exclamation color-yellow fa-6x"></i></div>
                            <h3 className="h2 mb-4">
                                Ooops! <span className="d-block">Page Not Found</span>
                            </h3>
                            <p className="fw-500 color-grey mb-5">
                                Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL
                            </p>
                            <a href="/" className="btn btn-secondary">Home Page</a>
                        </Col>
                    </Row>
                </Container>
            </main>


        </div>
    )
}
