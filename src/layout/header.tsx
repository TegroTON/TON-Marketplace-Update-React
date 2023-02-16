import { DeLabAddress, DeLabConnect } from "@delab-team/connect";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  InputGroup,
  ListGroup,
  Button,
  Modal,
} from "react-bootstrap";

interface HeaderType {
  openModalConnect: Function;
  address: DeLabAddress;
  DelabObject: DeLabConnect;
}

export const HeaderBlock: React.FC<HeaderType> = (props: HeaderType) => {
  const [firstRender, setFirstRender] = React.useState<boolean>(false);

  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    if (!firstRender) {
      setFirstRender(true);
    }
  }, []);

  return (
    <header className="header">
      <Container fluid>
        <Navbar expand="lg" className="d-flex align-items-center p-0">
          <Navbar.Brand
            className="navbar-logo me-5"
            onClick={() => history("/")}
            href="#"
          >
            <img
              className="navbar-logo__img"
              src="./assets/img/logo/apple-icon-57x57.png"
              alt="Libermall - NFT Marketplace"
            />
            <span className="navbar-logo__name d-none d-xxl-block">
              Libermall
            </span>
          </Navbar.Brand>
          {!props.address ? (
               <Button 
                  variant="soft d-block d-lg-none ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#ConnectModal"
                  onClick={() => props.openModalConnect()}

               >
                   <i className="fa-solid fa-wallet me-2" />
                   Connect
                </Button>
            ) : (
              <div className="dropdown dropstart order-3 order-lg-4 d-none d-lg-block">
                <button
                  type="button"
                  id="dropdownMenuProfile"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/img/user-1.svg"
                    alt=""
                    className="rounded-circle profile-image"
                    width="42"
                    height="42"
                  />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuProfile"
                >
                  <li>
                    <a className="dropdown-item" href="/my-profile">
                      <i className="fa-regular fa-user me-3" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/create-nft">
                      <i className="fa-regular fa-hexagon-vertical-nft me-3" />
                      Create NFT
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item border-0"
                      href="#"
                      onClick={() => props.DelabObject.disconnect()}
                    >
                      <i className="fa-regular fa-link-simple-slash me-3" />
                      Disconnect
                    </a>
                  </li>
                </ul>
              </div>
            )}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="btn btn-soft order-2 order-xl-1 ms-3"
          >
            <i className="fa-regular fa-bars fs-20" />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="header__search flex-fill d-block d-lg-none d-xl-block mx-0 mx-lg-5 mb-3 mb-lg-0 order-1 order-lg-2">
              <InputGroup>
                <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                 />
                <InputGroup.Text className="p-0">
                  <Button variant="link">
                    <i className="fa-solid fa-magnifying-glass color-grey" />
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <div className="dropdown order-4 order-lg-1">
              <Button variant="outline-primary d-flex flex-nowrap align-items-center d-none d-lg-block" type="button"
              id="dropdownMenuCat" 
              data-bs-toggle="dropdown" 
              aria-expanded="false">
                <i className="fa-regular fa-grid-2 me-2" /> 
                Explore
              </Button>
              <div className="dropdown-menu animate slideIn mt-3" aria-labelledby="dropdownMenuCat">
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-hexagon-vertical-nft-slanted me-3" />
                  All NFTs
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-hexagon-image me-3" />
                  Solanas
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-paintbrush-fine me-3" />
                  Art
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-rabbit me-3" />
                  Collectibles
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-server me-3" />
                  Domain Names
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-music me-3" />
                  Music
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-camera me-3" />
                  Photography
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-futbol me-3" />
                  Sports
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-heart-circle-bolt me-3" />
                  Trading Cards
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-money-bills-simple me-3" />
                  Utility
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa-regular fa-vr-cardboard me-3" />
                  Virtual Worlds
                </a>
              </div>
            </div>
            <Nav
            className="d-flex flex-row py-4 py-lg-0 ms-0 ms-lg-auto pe-5 order-2 order-lg-3"
            >
               <Nav.Link href="#">Stats</Nav.Link>
               <Nav.Link href="#">Resources</Nav.Link>
               <Nav.Link href="#">Create</Nav.Link>
            </Nav>

            {!props.address ? (
               <Button 
                  variant="soft d-none d-lg-block"
                  className="order-3 order-lg-4"
                  data-bs-toggle="modal"
                  data-bs-target="#ConnectModal"
                  onClick={() => props.openModalConnect()}

               >
                   <i className="fa-solid fa-wallet me-2" />
                   Connect
                </Button>
            ) : (
              <div className="dropdown dropstart order-3 order-lg-4 d-none d-lg-block">
                <button
                  type="button"
                  id="dropdownMenuProfile"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/img/user-1.svg"
                    alt=""
                    className="rounded-circle profile-image"
                    width="42"
                    height="42"
                  />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuProfile"
                >
                  <li>
                    <a className="dropdown-item" href="/my-profile">
                      <i className="fa-regular fa-user me-3" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/create-nft">
                      <i className="fa-regular fa-hexagon-vertical-nft me-3" />
                      Create NFT
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item border-0"
                      href="#"
                      onClick={() => props.DelabObject.disconnect()}
                    >
                      <i className="fa-regular fa-link-simple-slash me-3" />
                      Disconnect
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};
