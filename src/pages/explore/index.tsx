import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'


export const Explore: React.FC<PageProps> = (props: PageProps) => {
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
   <section className="collections section">
      <div className="container-fluid">
         <h1 className="section__title">
            Explore collections
         </h1>
         <div className="overflow-auto mobile__nav-bottom mb-5" id="mouseScroll">
            <ul className="collections__nav list-unstyled d-flex flex-nowrap">
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link active text-nowrap">Trending</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Top</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Art</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Collectibles</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Domain Names</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Music</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Photography</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Sports</a>
               </li>
               <li className="collections__nav-item"><a href="#!" className="collections__nav-link text-nowrap">Trading Cards</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Utility</a>
               </li>
               <li className="collections__nav-item">
                  <a href="#!" className="collections__nav-link text-nowrap">Virtual Worlds</a>
               </li>
            </ul>
         </div>
      <div className="row collections__list">
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-01.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-01.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-01.jpg" className="image-300x300" loading="lazy" width="1920" height="340" alt="Moonbirds" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-01.jpg" className="img-fluid" loading="lazy" width="120" height="" alt="Moonbirds" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Moonbirds</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-13.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-13.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-13.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="PudgyPenguins" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-02.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="PudgyPenguins" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">PudgyPenguins</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-12.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-12.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-12.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Elctric Sheep" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-04.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Elctric Sheep" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Elctric Sheep</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-11.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-11.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-11.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="The currency" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-05.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Moonbirds" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">The currency</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-10.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-10.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-10.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="TON NFT Tegro..." />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-06.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="TON NFT Tegro..." />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">TON NFT Tegro...</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-09.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-09.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-09.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="PudgyPenguins" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-07.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="PudgyPenguins" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">PudgyPenguins</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-08.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-08.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-08.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Emblem Vault" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-08.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Emblem Vault" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Emblem Vault</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-07.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-07.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-07.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="PudgyPenguins" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-10.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="PudgyPenguins" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">PudgyPenguins</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-06.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-06.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-06.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Emblem Vault" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-11.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Emblem Vault" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Emblem Vault</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-05.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-05.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-05.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Elctric Sheep" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-12.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Elctric Sheep" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Elctric Sheep</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-04.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-04.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-04.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="The currency" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-13.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="The currency" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">The currency</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-03.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-03.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-03.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="PudgyPenguins" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-14.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="PudgyPenguins" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">PudgyPenguins</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-01.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-01.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-01.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Moonbirds" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-01.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Moonbirds" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Moonbirds</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-13.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-13.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-13.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="PudgyPenguins" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-02.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="PudgyPenguins" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">PudgyPenguins</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-12.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-12.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-12.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="Elctric Sheep" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-04.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Elctric Sheep" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">Elctric Sheep</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
         <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
               <a href="/collection" className="card card-gradient top-effect" title="Collection Name">
                  <picture>
                     {/* <source srcset="./assets/img/collections/collect-image-11.webp" type="image/webp">
                     <source srcset="./assets/img/collections/collect-image-11.jpg" type="image/jpeg"> */}
                     <img src="./assets/img/collections/collect-image-11.jpg" className="image-300x300" loading="lazy" width="340" height="275" alt="The currency" />
                  </picture>
                  <div className="card-body">
                     <div className="card-avatar">
                        <img src="./assets/img/author/author-05.jpg" className="img-fluid" loading="lazy" width="80" height="80" alt="Moonbirds" />
                     </div>
                     <div className="d-flex flex-wrap align-items-center">
                        <div  className="me-auto mt-3">
                           <h3 className="fs-20 d-flex align-items-center">
                              <span className="collections__card-name">The currency</span> <i className="fa-solid fa-circle-check fs-16 color-yellow ms-2"></i>
                           </h3>
                           <p className="mb-0 color-grey">
                              6.7K owners
                           </p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                           <div className="pe-3">
                              <p className="fw-medium text-white mb-2">167.8K eTH</p>
                              <p className="m-0 color-grey">Total volume</p>
                           </div>
                           <div>
                              <p className="fw-medium text-white mb-2">16.48 eTH</p>
                              <p className="m-0 color-grey">floor</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
         </div>
      </div>
      </div>
   </section>
</main>
        </div>
    )
}
