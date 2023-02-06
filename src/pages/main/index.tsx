import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'

export const Main: React.FC<PageProps> = (props: PageProps) => {
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

<main className="main-page">
    <section className="hero section" id="hero">
      <div className="hero__container container-fluid carousel slide p-0" id="carouselHeroIndicators" data-bs-ride="carousel" data-bs-interval="false">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselHeroIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselHeroIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
         </div>
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="row alight-items-center">
                  <div className="col-md-12 col-lg-9 col-xl-9 col-xxl-7 text-center text-md-start">
                     <h1 className="hero__title">
                        Discover the Exclusive <span className="d-block">NFT Collection</span>
                     </h1>
                     <div className="hero__desc">
                        Click My Collections and set up your collection. <br />
                        Add social links, a description, profile & banner images, <br /> and set a secondary sales fee.
                     </div>
                     <a href="#!" className="btn btn-outline-primary">
                     <span>Learn more</span>
                     </a>
                  </div>
               </div>
               <picture>
                  {/* <source srcset="./assets/img/hero-image-2.webp" type="image/webp" />
                  <source srcset="./assets/img/hero-image-2.jpg" type="image/jpeg" /> */}
                  <img src="./assets/img/hero-image-2.jpg" alt="Libermall NFT Marketplace" className="hero__image" />
               </picture>
            </div>
            <div className="carousel-item">
               <div className="row alight-items-center">
                  <div className="col-md-12 col-lg-9 col-xl-9 col-xxl-7 text-center text-md-start">
                     <h2 className="hero__title">
                        Discover the Exclusive <span className="d-block">NFT Collection</span>
                     </h2>
                     <div className="hero__desc">
                        Click My Collections and set up your collection.
                        <span className="d-inline d-lg-block">Add social links, a description, profile & banner images,</span> and set a secondary sales fee.
                     </div>
                     <a href="#!" className="btn btn-outline-primary">
                     <span>Learn more</span>
                     </a>
                  </div>
               </div>
               <picture>
                  {/* <source srcset="./assets/img/hero-image.webp" type="image/webp" />
                  <source srcset="./assets/img/hero-image.jpg" type="image/jpeg" /> */}
                  <img src="./assets/img/hero-image.jpg" alt="Libermall NFT Marketplace" loading="lazy" className="hero__image" />
               </picture>
            </div>
         </div>
         <button className="carousel-control-prev  d-none d-lg-block" type="button" data-bs-target="#carouselHeroIndicators" data-bs-slide="prev">
         <i className="fa-solid fa-arrow-left"></i>
         </button>
         <button className="carousel-control-next  d-none d-lg-block" type="button" data-bs-target="#carouselHeroIndicators" data-bs-slide="next">
         <i className="fa-solid fa-arrow-right"></i>
         </button>
      </div>
   </section>

   <section className="discover section pt-150" id="discover">
      <div className="discover__container container-fluid text-center">
         <h2 className="section__title mb-3">
            Discover, Collect and sell <span className="color-yellow">extraordinary NFTs</span>
         </h2>
         <p className="section__desc mb-5">
            Libermall is the world's first and largest NFT marketplace
         </p>
         <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a href="/explore" className="btn btn-primary m-3">
            Explore
            </a>
            <a href="#!" className="btn btn-outline-primary m-3">
            + Create
            </a>
         </div>
      </div>
   </section>

   <section className="libermall section" id="Libermall">
      <div className="libermall__container container-fluid">
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
      </div>
   </section>

   <section className="notable section" id="notable">
      <div className="notable__container container-fluid">
      <div className="notable__head">
         <h2 className="section__title mb-5">
            Notable <span className="color-yellow">drops</span>
         </h2>
      </div>
      <div className="notable-slider pt-3">
         <a href="/collection" className="card card-gradient top-effect" title="MetaPack">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-1.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-1.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-1.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="MetaPack" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">MetaPack</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
         <a href="/collection" className="card card-gradient top-effect" title="Ragnarok">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-2.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-2.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-2.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="Ragnarok" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">Ragnarok</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
         <a href="/collection" className="card card-gradient top-effect" title="Sneaker Heads">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-3.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-3.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-3.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="Sneaker Heads" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">Sneaker Heads</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
         <a href="#!" className="card card-gradient top-effect" title="Relationship">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-4.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-4.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-4.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="Ragnarok" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">Relationship</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
         <a href="/collection" className="card card-gradient top-effect" title="The Foundation">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-5.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-5.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-5.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="Ragnarok" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">The Foundation</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
         <a href="/collection" className="card card-gradient top-effect" title="Sneaker Heads">
            <div className="card__bage color-yellow text-uppercase">
               <i className="fa-solid fa-fire-flame-curved me-1"></i>
               Live
            </div>
            <picture>
               {/* <source srcset="./assets/img/nft/nft-6.webp" type="image/webp">
               <source srcset="./assets/img/nft/nft-6.jpg" type="image/jpeg"> */}
               <img src="./assets/img/nft/nft-6.jpg" className="rounded card-img" loading="lazy" width="300" height="390" alt="Sneaker Heads" />
            </picture>
            <div className="card-body">
               <h3 className="fs-20 my-3">Sneaker Heads</h3>
               <p className="d-flex align-items-center mb-0 color-grey">
                  <span className="icon-ton me-2"></span>
                  floor price: 0.5
               </p>
            </div>
         </a>
      </div>
      </div>
   </section>

   <section className="collections section">
      <div className="collection__container container-fluid">
         <div className="d-block d-sm-flex align-items-center mb-56">
            <h2 className="section__title mb-0">Top <span className="color-yellow">collections</span></h2>
            <div className="dropdown mt-4 mt-sm-0 ms-0 ms-sm-auto">
               <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
               Last 24 hours 
               </a>
               <ul className="dropdown-menu animate slideIn mt-5" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">1 Day</a></li>
                  <li><a className="dropdown-item" href="#">3 Days</a></li>
                  <li><a className="dropdown-item" href="#">7 days</a></li>
               </ul>
            </div>
         </div>
         <div className="row pt-3">
            <div className="col-sm-6 col-xxl-4">
               <a href="#!" className="d-block" title="Mutant Ape Yach ClubMutant">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-1.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-1.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-1.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4"></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Mutant Ape Yach ClubMutant</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M 
                           <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4">
               <a href="#!" className="d-block" title="Gossamer Seed">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-2.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-2.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-2.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Gossamer Seed</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4">
               <a href="#!" className="d-block" title="ENS: Ethereum Name...">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-3.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-3.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-3.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >ENS: Ethereum Name...</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4">
               <a href="#!" className="d-block" title="Bored Ape Yacht Club">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-4.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-4.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-4.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Bored Ape Yacht Club</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4">
               <a href="#!" className="d-block" title="Mutant Ape Yach Club">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-5.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-5.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-5.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Mutant Ape Yach Club</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4 d-none d-md-block">
               <a href="#!" className="d-block" title="Art Blocks Curated">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-6.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-6.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-6.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Art Blocks Curated</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4 d-none d-md-block">
               <a href="#!" className="d-block" title="Moonrunners Official">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-7.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-7.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-7.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Moonrunners Official</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4 d-none d-md-block">
               <a href="#!" className="d-block" title="Cyber Galz - Galz">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-8.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-8.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-8.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Cyber Galz - Galz</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-sm-6 col-xxl-4 d-none d-lg-block">
               <a href="#!" className="d-block" title="ENS: Ethereum Name...">
                  <div className="card d-flex flex-lg-row align-items-center p-3 p-xl-4 rounded-20 mb-4">
                     <div className="collection__picbox position-relative me-4 mb-4 mb-lg-0">
                        <picture>
                           {/* <source srcset="./assets/img/collections/img-9.webp" type="image/webp">
                           <source srcset="./assets/img/collections/img-9.jpg" type="image/jpeg"> */}
                           <img src="./assets/img/collections/img-9.jpg" className="image-80x80 rounded-circle" loading="lazy" width="80" height="80" alt="Mutant Ape Yach ClubMutant" />
                        </picture>
                        <i className="fa-solid fa-circle-check fs-22 color-yellow position-absolute bottom-0 right-4" ></i>
                     </div>
                     <div className="collection__body mb-3 mb-lg-0">
                        <h4 className="fs-20 mb-3 text-truncate width-224" >Moonturtlez</h4>
                        <p className="mb-0 color-grey text-center text-lg-start">
                           Floor: <span className="ms-1 text-uppercase">3,02 TON</span>
                        </p>
                     </div>
                     <div className="collection__info d-flex d-lg-block text-center text-lg-end ms-0 ms-lg-auto">
                        <div className="fw-medium text-uppercase text-white mb-3 me-3 me-lg-0">3.8k TON</div>
                        <div className="fw-medium color-grey">
                           $2.68M <span className="color-green ms-2">+8.84%</span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
         </div>
         <div className="mt-5 text-center">
            <a href="#!" className="btn btn-primary">Go to ranking</a>
         </div>
      </div>
   </section>

   <section className="create section" id="create">
      <div className="create__container container-fluid position-relative">
         <h2 className="section__title">
            Create and sell <span className="color-yellow">your NFTs</span>
         </h2>
         <div className="d-flex flex-nowrap overflow-auto py-5" id="overflow-auto">
            <div className="create-card d-flex">
               <div className="create-card__icon d-none d-md-block">
                  <img src="./assets/img/create-card-1.png" alt="" className="create-card__img" width="100px" height="100px" />
               </div>
               <div className="create-card__body ms-4">
                  <div className="create-card__num color-grey mb-3">
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
                  <div className="create-card__num color-grey mb-3">
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
                  <div className="create-card__num color-grey mb-3">
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
                  <div className="create-card__num color-grey mb-3">
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
      </div>
   </section>

   <section className="category section pt-150" id="category">
      <div className="category__container container-fluid">
         <div className="category__head">
            <h2 className="section__title">
               Browse <span className="color-yellow">by category</span> 
            </h2>
         </div>
         <div className="category-slider pt-3">
            <a href="/single-collection" className="card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-1.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-1.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-1.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Art</h3>
               </div>
            </a>
            <a href="/single-collection" className="card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-2.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-2.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-2.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Sports</h3>
               </div>
            </a>
            <a href="/single-collection" className="card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-3.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-3.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-3.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Collectibles</h3>
               </div>
            </a>
            <a href="/single-collection" className="card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-4.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-4.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-4.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Photography</h3>
               </div>
            </a>
            <a href="#!" className="d-block card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-5.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-5.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-5.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Domain Name</h3>
               </div>
            </a>
            <a href="/single-collection" className="card top-effect">
               <picture>
                  {/* <source srcset="./assets/img/category/cat-6.webp" type="image/webp">
                  <source srcset="./assets/img/category/cat-6.jpg" type="image/jpeg"> */}
                  <img src="./assets/img/category/cat-6.jpg" className="rounded image-300x300" loading="lazy" width="340" height="275" alt="Ragnarok" />
               </picture>
               <div className="card-body text-center">
                  <h3 className="text-uppercase fs-18 mt-3 mb-0" style={{letterSpacing: '1px'}}>Music</h3>
               </div>
            </a>
         </div>
      </div>
   </section>

    </main>
        </div>
    )
}
