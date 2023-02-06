import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageProps } from '../../types/interfaces'


export const MyProfile: React.FC<PageProps> = (props: PageProps) => {
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
      {/* <source srcset="./assets/img/profile-hero.webp" type="image/webp">
      <source srcset="./assets/img/profile-hero.jpg" type="image/jpeg"> */}
      <img src="./assets/img/profile-hero.jpg" className="nft-hero__image" loading="lazy" width="340" height="275" alt="Tegro Cat" />
   </picture>
</section>
<main className="main-page">
   <section className="nfr-collection section pt-0">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-4 col-xl-4 col-xxl-3 mb-4 mb-lg-0">
               <div className="card card-blur p-0 mt--100">
                  <div className="card__share d-flex position-absolute" style={{top: '8px', right: '8px'}}>
                     <button className="btn btn-cube" type="button"><i className="fa-regular fa-share-nodes"></i></button>
                  </div>
                  <div className="card-body p-4 p-lg-2 p-xl-3 p-xxl-4">
                     <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-5">
                        <div className="collection__image mb-4 mb-md-0 mb-lg-4 ms-auto ms-md-0 ms-lg-auto me-auto">
                           <img src="/assets/img/cats/t-cat-02.jpg" alt="" className="img-fluid rounded-circle" width="80" height="80" />
                        </div>
                        <div className="d-flex mx-0 mx-lg-auto">
                           <a href="/edit-profile" className="btn btn-sm btn-soft">Edit Profile</a>
                        </div>
                     </div>
                     <h1 className="collection__name fs-24 mb-4">
                        <span>Tegro</span>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow ms-2"></i>
                     </h1>
                     <div className="collection__desc color-grey mb-4">
                        <p>
                           The first exclusive NFTs on The Open Network about resistance dogs from Tegro. 
                        </p>
                        <a href="#!" className="collection__link text-white" target="__blank">
                        <i className="fa-regular fa-link-simple color-yellow me-2"></i>
                        tegro.com
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
               </div>
               {/* <?php
                  require "_collection-filters";
                  ?> */}
            </div>
            <div className="col-lg-8 col-xl-8 col-xxl-9">
               <div className="card card-blur mb-4 overflow-auto" id="mouseScroll">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>floor</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>0.04 eTH</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>volume</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>40.61 ETH</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>Items</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>1.3K</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>Owners</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>461</p>
                     </div>
                     <div className="card-blur__item p-4 border-end text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>Blockchain</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>TON Conin</p>
                     </div>
                     <div className="card-blur__item p-4 text-center">
                        <h5 className="text-uppercase fs-14 color-grey" style={{letterSpacing: '1px;'}}>address</h5>
                        <p className="m-0 text-uppercase fw-medium" style={{letterSpacing: '1px;'}}>0x15f...d860</p>
                     </div>
                  </div>
               </div>
               <div className="overflow-auto mobile__nav-bottom mb-4 px-2" id="mouseScroll">
                  <ul className="nav collections__nav list-unstyled d-flex flex-nowrap align-items-center" id="myTab" role="tablist">
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap active" id="Owned-tab" data-bs-toggle="tab" data-bs-target="#Owned" type="button" role="tab" aria-controls="Owned" aria-selected="true">Owned <span className="badge bg-grey ms-2">0</span></button>
                     </li>
                     <li className="collections__nav-item ">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Onsale-tab" data-bs-toggle="tab" data-bs-target="#Onsale" type="button" role="tab" aria-controls="Onsale" aria-selected="false">On sale <span className="badge bg-grey ms-2">0</span></button>
                     </li>
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Created-tab" data-bs-toggle="tab" data-bs-target="#Created" type="button" role="tab" aria-controls="Created" aria-selected="false">Created <span className="badge bg-grey ms-2">0</span></button>
                     </li>
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Activity-tab" data-bs-toggle="tab" data-bs-target="#Activity" type="button" role="tab" aria-controls="Activity" aria-selected="false">Activity</button>
                     </li>
                     <li className="collections__nav-item">
                        <button className="collections__nav-link d-flex align-items-center text-nowrap" id="Sold-tab" data-bs-toggle="tab" data-bs-target="#Sold" type="button" role="tab" aria-controls="Sold" aria-selected="false">Sold <span className="badge bg-grey ms-2">0</span></button>
                     </li>
                     <li className="ms-0 ms-md-autp ms-lg-0 ms-xl-auto">
                        <select className="form-select" aria-label="Select Category">
                           <option selected>Recently listed</option>
                           <option value="1">Price: low to high</option>
                           <option value="2">Price: high to low</option>
                           <option value="3">Auction ending soon</option>
                        </select>
                     </li>
                  </ul>
               </div>
               <div className="tab-content py-4" id="myTabContent">
                  <div className="tab-pane fade show active" id="Owned" role="tabpanel" aria-labelledby="Owned-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="Onsale" role="tabpanel" aria-labelledby="Onsale-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="Created" role="tabpanel" aria-labelledby="Created-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="Created" role="tabpanel" aria-labelledby="Created-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="Activity" role="tabpanel" aria-labelledby="Activity-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="Sold" role="tabpanel" aria-labelledby="Sold-tab">
                     <div className="text-center py-5">
                        <h3>Nothing found</h3>
                        <p className="color-grey">
                           We couldn't find anything with this <br /> criteria
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
        </div>
    )
}
