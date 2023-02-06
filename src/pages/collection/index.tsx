import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { PageProps } from '../../types/interfaces'

export const Collection: React.FC<PageProps> = (props: PageProps) => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const history = useNavigate()


    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)
props.installScripts()
        }
    }, [])

    return (
        <div id={props.id}>
            <section className="nft-hero">
   <picture>
      {/* <source srcset="./assets/img/nft-hero.webp" type="image/webp">
      <source srcset="./assets/img/nft-hero.jpg" type="image/jpeg"> */}
      <img src="./assets/img/nft-hero.jpg" className="nft-hero__image" loading="lazy" width="340" height="275" alt="Tegro Cat" />
   </picture>
</section>

<main className="main-page">
   <section className="nfr-collection section pt-0">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-4 col-xl-4 col-xxl-3 mb-4 mb-lg-0">

               <div className="card card-blur p-0 mt--100 mb-4">
                  <div className="card__share d-flex position-absolute" style={{top: '8px', right: '8px'}}>
                     <button className="btn btn-cube" type="button"><i className="fa-regular fa-share-nodes"></i></button>
                     <div className="dropdown">
                        <button className="btn btn-cube" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-regular fa-ellipsis-stroke"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li><a className="dropdown-item border-0" href="#">Report page</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="card-body p-4 p-lg-2 p-xl-3 p-xxl-4">
                     <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-5">
                        <div className="collection__image mb-4 mb-md-0 mb-lg-4 ms-auto ms-md-0 ms-lg-auto me-auto">
                           <img src="/assets/img/author/author-17.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="d-flex mx-0 mx-lg-auto">
                           <a href="#!" className="btn btn-sm btn-outline-primary">Subscribe</a>
                        </div>
                     </div>
                     <h1 className="collection__name fs-24 mb-4">
                        <span>TON NFT Tegro Cat</span>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow ms-2"></i>
                     </h1>
                     <div className="collection__desc color-grey mb-4">
                        <p>
                           TON Tegro Cat are unique NFTs with cats created only for the TON network. <br />
                           Our TON NFT "Cats" is a community of 9,999 super-rare, artfully crafted, collectible cats. 
                        </p>
                        <p className="collection__desc color-grey">
                           Each Cat is an individual being. The collection was created by the TegroMoney team, the creators of the TGR token on The Open Network blockchain.
                        </p>
                        <a href="#!" className="collection__link text-white" target="__blank">
                        <i className="fa-regular fa-link-simple color-yellow me-2"></i>
                        boredapeyachtclub.com
                        </a>
                     </div>
                     <div className="libermall__soclinks">
                        <a href="#!" className="libermall__soclinks-item ms-0"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-reddit-alien"></i></a>
                     </div>
                  </div>
                  <div className="card-footer text-center border-top px-5 py-3">
                     Created by <span className="color-yellow">Smircs</span>
                     <i className="fa-solid fa-circle-check color-yellow fs-14 ms-1"></i>
                  </div>
               </div>
               {/* <?php
                  require "_collection-filters";
                  ?> */}
            </div>
            <div className="col-lg-8 col-xl-8 col-xxl-9">
               <div className="card card-blur mb-4 overflow-auto" id="mouseScroll">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px'}}>floor</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0.04 eTH</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>volume</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>40.61 ETH</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Items</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>1.3K</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Owners</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>461</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>Blockchain</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>TON Conin</p>
                     </div>
                     <div className="card-blur__item p-4 text-center">
                        <h5 className="text-uppercase fs-14 color-grey"  style={{letterSpacing: '1px'}}>address</h5>
                        <p className="m-0 text-uppercase fw-medium"  style={{letterSpacing: '1px'}}>0x15f...d860</p>
                     </div>
                  </div>
               </div>
               <div className="overflow-auto mobile__nav-bottom mb-2 px-2" id="mouseScroll">
                  <ul className="nav collections__nav list-unstyled d-flex flex-nowrap align-items-center" id="myTab" role="tablist">
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap active" id="Owned-tab" data-bs-toggle="tab" data-bs-target="#Owned" type="button" role="tab" aria-controls="Owned" aria-selected="true">Items</button>
                     </li>
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Activity-tab" data-bs-toggle="tab" data-bs-target="#Activity" type="button" role="tab" aria-controls="Activity" aria-selected="false">Activity</button>
                     </li>
                     <button 
                     className="btn btn-sm btn-secondary ms-auto d-flex align-items-center btn-filter" 
                     data-bs-toggle="collapse" 
                    //  href="#collapseFilters" 
                     role="button" 
                     aria-expanded="false" aria-controls="collapseFilters">
                     <i className="fa-regular fa-filter-list me-2"></i> Sort
                     </button>
                  </ul>
               </div>
               <div className="collections__filters collapse modified-collapse" id="collapseFilters">
                  <div className="d-block d-sm-flex flex-wrap align-items-center">
                     <div className="m-3">
                        <label className="color-grey mb-2">Category:</label>
                        <select className="form-select border" aria-label="Select Category">
                           <option selected>All</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="m-3">
                        <label className="color-grey mb-2">Properties:</label>
                        <select className="form-select border" aria-label="Select Category">
                           <option selected>All 354</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="m-3">
                        <label className="color-grey mb-2">Sale type:</label>
                        <select className="form-select border" aria-label="Select Category">
                           <option selected>All</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="m-3">
                        <label className="color-grey mb-2">Price range:</label>
                        <select className="form-select border" aria-label="Select Category">
                           <option selected>ETH 5 - 15</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="m-3 ms-xxl-auto">
                        <label className="color-grey mb-2">Sort:</label>
                        <select className="form-select border" aria-label="Select Category">
                           <option selected>Recently listed</option>
                           <option value="1">Price: low to high</option>
                           <option value="2">Price: high to low</option>
                           <option value="3">Auction ending soon</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div className="tab-content py-4" id="myTabContent">
                  <div className="tab-pane fade show active" id="Owned" role="tabpanel" aria-labelledby="Owned-tab">
                     {/* <?php
                        require "_collection-list";
                        ?> */}
                  </div>
                  <div className="tab-pane fade" id="Activity" role="tabpanel" aria-labelledby="Activity-tab">
                     {/* <?php
                        require "_activity-list";
                        ?> */}
                  </div>
               </div>
               <button type="button" className="btn btn-outline-secondary mt-3 w-100">LOAD MORE</button>
            </div>
         </div>
      </div>
   </section>
</main>

        </div>
    )
}
