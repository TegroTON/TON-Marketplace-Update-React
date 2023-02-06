
import { DeLabAddress } from '@delab-team/connect'
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface HeaderType {
   openModalConnect: Function,
   address: DeLabAddress
}

export const HeaderBlock: React.FC<HeaderType> = (props: HeaderType) => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const location = useLocation()
    const history = useNavigate()

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)
        }
    }, [])


    return (
        <header className="header">
        <div className="container-fluid">
           <nav className="navbar navbar-expand-lg d-flex align-items-center p-0">
              <a className="navbar-logo me-5" onClick={() => history('/')} href="#">
              <img className="navbar-logo__img" src="./assets/img/logo/apple-icon-57x57.png" alt="Libermall - NFT Marketplace" />
              <span className="navbar-logo__name d-none d-xxl-block">Libermall</span>
              </a>
              <button className="navbar-toggler btn btn-secondary order-2 order-xl-1 ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-regular fa-bars fs-20"></i>
              </button>
              <div className="collapse navbar-collapse " id="navbarHeader">
                 <form className="header__search flex-fill d-block d-lg-none d-xl-block mx-0 mx-lg-5 mb-3 mb-lg-0 order-1 order-lg-2">
                    <div className="input-group">
                       <input type="text" className="form-control" placeholder="Search ..." aria-label="Search" aria-describedby="basic-addon2" />
                       <div className="input-group-text p-0">
                          <button className="btn" type="submit">
                          <i className="fa-solid fa-magnifying-glass color-grey"></i>
                          </button>
                       </div>
                    </div>
                 </form>
                 <div className="dropdown order-4 order-lg-1">
                    <button 
                  //   onClick={() => history('explore')}
                    className="btn btn-primary d-flex flex-nowrap align-items-center" type="button" id="dropdownMenuCat" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-grid-2 me-2"></i> 
                    Explore
                    </button>
                    <ul className="dropdown-menu animate slideIn mt-3" aria-labelledby="dropdownMenuCat">
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-hexagon-vertical-nft-slanted me-3"></i>All NFTs</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-hexagon-image me-3"></i>Solanas</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-paintbrush-fine me-3"></i>Art</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-rabbit me-3"></i>Collectibles</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-server me-3"></i>Domain Names</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-music me-3"></i>Music</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-camera me-3"></i>Photography</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-futbol me-3"></i>Sports</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-heart-circle-bolt me-3"></i>Trading Cards</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-money-bills-simple me-3"></i>Utility</a></li>
                       <li><a className="dropdown-item" href="#"><i className="fa-regular fa-vr-cardboard me-3"></i>Virtual Worlds</a></li>
                    </ul>
                 </div>
                 <ul className="navbar-nav d-flex flex-row py-4 py-lg-0 ms-0 ms-lg-auto pe-5 order-2 order-lg-3">
                    <li className="nav-item">
                       <a className="nav-link" href="#">Stats</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#">Resources</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#">Create</a>
                    </li>
                 </ul>
                
                {!props.address ?
                 <button 
                  type="button" 
                  className="btn btn-soft d-flex flex-nowrap align-items-center btn-mobile-fixed order-3 order-lg-4" 
                  data-bs-toggle="modal" 
                  data-bs-target="#ConnectModal"
                  onClick={() => props.openModalConnect()}
                 >
                 <i className="fa-regular fa-arrow-right-to-arc me-2"></i>
                 Connect
                 </button>
                 :
                 <div className="dropdown dropstart order-3 order-lg-4">
                     <button type="button" id="dropdownMenuProfile" data-bs-toggle="dropdown" aria-expanded="false">
                     <img src="/assets/img/user-1.svg" alt="" className="rounded-circle profile-image" width="42" height="42" />
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuProfile">
                        <li><a className="dropdown-item" href="/my-profile"><i className="fa-regular fa-user me-3"></i>Profile</a></li>
                        <li><a className="dropdown-item" href="/create-nft"><i className="fa-regular fa-hexagon-vertical-nft me-3"></i>Create NFT</a></li>
                        <li><a className="dropdown-item border-0" href="#"><i className="fa-regular fa-link-simple-slash me-3"></i>Disconnect</a></li>
                     </ul>
                  </div>
                }
                 
              </div>
        
        </nav>
        </div>
     </header>
    )
}
