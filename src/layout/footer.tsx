
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const FooterBlock: React.FC = () => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const location = useLocation()

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)
        }
    }, [])


    return (
        <div>
            <section className="partners section bg-grey">
   <div className="partners__container">
      <div className="container-fluid">
         <div className="row overflow-auto">
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-1.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-2.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-3.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-4.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-5.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
               <img src="./assets/img/partners/part-6.svg" alt="" loading="lazy" className="img-fluid m-2" />
            </div>
         </div>
      </div>
   </div>
</section>
<footer className="footer">
   <div className="container-fluid">
      <div className="row accordion modified-collapse" id="accordionFooter">
         <div className="col-md-12 col-lg-3 me-auto mb-5 mb-lg-0">
            <div className="footer__logo d-flex align-items-center mb-4">
               <img className="navbar-logo__img" src="./assets/img/logo/apple-icon-57x57.png" alt="Libermall - NFT Marketplace" />
               <span className="navbar-logo__name fs-24 d-none d-md-block ms-3">Libermall</span>
            </div>
            <div className="footer__text mb-5">
               <h4 className="fs-18">Stay in the loop</h4>
               <p className="color-grey">
                  Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
               </p>
            </div>
            <div className="input-group mb-5">
               <span className="input-group-text" id="basic-addon1">
               <i className="fa-regular fa-envelope fs-18 color-grey"></i>
               </span>
               <input type="text" className="form-control" placeholder="Enter email address" />
               <div className="input-group-text p-1">
                  <button className="btn btn-primary min-width-100" >Send</button>
               </div>
            </div>
            <div className="libermall__soclinks">
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-telegram"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-twitter"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
            </div>
         </div>
         <div className="col-md-12 col-lg-2 py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-one" aria-expanded="false" aria-controls="FooterMenu-one">
               <span className="me-auto">Marketplace</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none"></i>
            </h4>
            <ul id="FooterMenu-one" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">All NFTs</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Solana NFTs</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Art</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Collectibles</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Domain Names</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Music</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Photography</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Sports</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Trading Cards</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Utility</a>
               </li>
               <li>
                  <a href="#!">Virtual Worlds</a>
               </li>
            </ul>
         </div>
         <div className="col-md-12 col-lg-2 py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-two" aria-expanded="false" aria-controls="FooterMenu-two">
               <span className="me-auto">My Account</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none"></i>
            </h4>
            <ul id="FooterMenu-two" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">Profile</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Favorites</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Watchlist</a>
               </li>
               <li className="mb-2">
                  <a href="#!">My Collections</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Settings</a>
               </li>
            </ul>
         </div>
         <div className="col-md-12 col-lg-2 py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-three" aria-expanded="false" aria-controls="FooterMenu-three">
               <span className="me-auto">Resources</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none"></i>
            </h4>
            <ul id="FooterMenu-three" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">Help Center</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Platform Status</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Partners</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Gas-Free Marketplace</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Taxes</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Blog</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Docs</a>
               </li>
               <li>
                  <a href="#!">Newsletter</a>
               </li>
            </ul>
         </div>
         <div className="col-md-12 col-lg-2 py-3 py-lg-0">
            <h4 className="d-flex align-items-center text-uppercase fs-18 mb-0 mb-lg-4" data-bs-toggle="collapse" data-bs-target="#FooterMenu-four" aria-expanded="false" aria-controls="FooterMenu-four">
               <span className="me-auto">Company</span>
               <i className="fa-regular fa-angle-down d-block d-lg-none"></i>
            </h4>
            <ul id="FooterMenu-four" className="list-unstyled accordion-collapse collapse mt-4 mt-lg-0" data-bs-parent="#accordionFooter">
               <li className="mb-2">
                  <a href="#!">About</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Careers</a>
               </li>
               <li className="mb-2">
                  <a href="#!">Ventures</a>
               </li>
               <li>
                  <a href="#!">Grants</a>
               </li>
            </ul>
         </div>
      </div>
      <div className="footer__bottom color-grey border-top pt-5 mt-5">
         <div className="row">
            <div className="col-sm-12 col-md-6 mb-3 mb-md-0">
               <span className="me-auto">©2022 Libermall, Inc</span>
            </div>
            <div className="col-sm-12 col-md-6 ms-auto text-end">
               <a href="#!" className="me-3">Privacy Police</a>
               <a href="#!">Terms of Service</a>
            </div>
         </div>
      </div>
   </div>
</footer>
        </div>
    )
}
