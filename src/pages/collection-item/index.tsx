import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { PageProps } from '../../types/interfaces'

export const CollectionItem: React.FC<PageProps> = (props: PageProps) => {
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
   <section className="item-details section pt-5">
      <div className="container-fluid">
         <div className="row justify-content-center">
            <div className="col-md-10 col-lg-12 col-xxl-9">
               <nav aria-label="breadcrumb">
                 <ol className="breadcrumb mb-5 ms-3">
                   <li className="breadcrumb-item"><a href="/explore">Explore</a></li>
                   <li className="breadcrumb-item"><a href="/collection">Tegro Cat</a></li>
                   <li className="breadcrumb-item active" aria-current="page">Tegro Cat #133</li>
                 </ol>
               </nav>
               <div className="row justify-content-center mb-4">
                  <div className="col-lg-5 col-xl-5 mb-4 mb-lg-0">
                     
                     <div className="position-sticky" style={{top: '140px'}}>
                        <img className="item-details__image" data-enlargable src="/assets/img/item-details-image.jpg" alt="" />
                     </div>
                    
                  </div>
                  <div className="col-lg-7 col-xl-7">
                     
                     <div className="card-item-details mb-5">
                        <div className="item-details__badge badge__green mb-4">For Sale</div>
                        <h1 className="item-details__title mb-3">Tegro Cat #133</h1>
                        <p className="item-details__desc mb-0">
                           The story behind these DigiDaigaku characters is just beginning. <br/> 
                           Over time more about their world will be revealed, so hold yours close!
                        </p>
                     </div>
                    
                     <div className="card-item-details d-flex align-items-center border bg-soft px-4 py-3 rounded mb-4">
                        <button type="button" className="btn btn-sm btn-details__like bg-soft px-3">
                           <i className="fa-regular fa-heart m-0 me-sm-2"></i>
                           <span className="d-block d-sm-inline mt-1 mt-sm-0">24</span>
                        </button>
                        <div className="nav-item-details d-flex align-items-center fs-18 ms-auto">
                           <button type="button" className="btn btn-sm px-2 px-3 me-1"><i className="fa-regular fa-arrows-rotate d-block d-sm-inline mb-2 mt-sm-0 m-0 me-sm-2"></i> Refresh</button>
                           <button type="button" className="btn btn-sm px-2 px-3 me-1" data-bs-toggle="modal" data-bs-target="#ShareModal"><i className="fa-regular fa-share-nodes d-block d-sm-inline mb-2 mt-sm-0 m-0 me-sm-2"></i> Share</button>
                           <div className="dropdown">
                              <button className="btn btn-sm btn-cube" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa-solid fa-ellipsis fs-20"></i>
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                 <li><a className="dropdown-item" href="#">Place floor bid</a></li>
                                 <li><a className="dropdown-item" href="#">New bid</a></li>
                                 <li><a className="dropdown-item" href="#">Report</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                    
                     <div className="card-item-details border bg-soft p-4 rounded mb-4">
                        <div className="d-flex align-items-center mb-2">
                           <span className="d-block text-uppercase fs-18 fw-medium">Price:</span>
                           <span className="price-item__ton d-block ms-auto">43.9 TON</span>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                           <span className="color-grey">Plus a network fee of 1 TON</span>
                           <span className="price-item__dollar d-block color-grey text-end ms-auto">$64.09</span>
                        </div>
                        <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#BuyNowModal">Buy Now</button>
                     </div>
                    
                     <div className="row">
                        <div className="col-xl-6 mx-auto mb-4">
                           <a href="/profile" className="card-item-details d-block border bg-soft hover px-4 py-3 rounded text-white">
                              <h4 className="fs-14 color-grey mb-4">Owner</h4>
                              <div className="d-flex align-items-center">
                                 <img src="/assets/img/author/author-12.jpg" alt="" className="img-fluid rounded-circle" width="40" height="40" />
                                 <h4 className="collection__name fs-16 mb-0 ms-3">
                                    NFT Tegro
                                 </h4>
                                 <i className="fa-solid fa-angle-right color-grey ms-auto"></i>
                              </div>
                           </a>
                        </div>
                        <div className="col-xl-6 mb-4">
                           <a href="/collection" className="card-item-details d-block border bg-soft hover px-4 py-3 rounded text-white">
                              <h4 className="fs-14 color-grey mb-4">Collection</h4>
                              <div className="d-flex align-items-center">
                                 <img src="/assets/img/author/author-17.jpg" alt="" className="img-fluid rounded-circle" width="40" />
                                 <h4 className="collection__name fs-16 mb-0 ms-3">
                                    Tegro Cat
                                 </h4>
                                 <i className="fa-solid fa-angle-right color-grey ms-auto"></i>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="card-item-details border bg-soft p-4 rounded">
                        <h4 className="fs-18 mb-4">Details</h4>
                        <ul className="list-unstyled">
                           <li className="mb-3">
                              <a href="https://tonscan.org/address/EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                              <span className="fw-medium color-grey">Contract Address</span>
                              <span className="col-4 text-truncate ms-auto">EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP</span>
                              <i className="fa-solid fa-angle-right color-grey ms-3"></i>
                              </a>
                           </li>
                           <li className="mb-3">
                              <a href="https://tonscan.org/address/EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                              <span className="fw-medium color-grey">Sale Contract</span>
                              <span className="col-4 text-truncate ms-auto">EQC_-u5FytW3WrGR_UQ_tjVFvFbcIanSh4nHjqP3ojIamkGP</span>
                              <i className="fa-solid fa-angle-right color-grey ms-3"></i>
                              </a>
                           </li>
                           <li className="d-flex align-items-center p-3 rounded border hover text-white mb-3">
                              <span className="fw-medium color-grey">Token ID</span>
                              <span className="text-truncate ms-auto">10931</span>
                           </li>
                           <li className="d-flex align-items-center p-3 rounded border hover text-white mb-3">
                              <span className="fw-medium color-grey">Metadata</span>
                              <span className="text-truncate ms-auto">Centralized</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="card-item-details border bg-soft p-4 rounded mb-5">
                  <h4 className="fs-18 mb-4">Attributes</h4>
                  <ul className="row list-unstyled">
                     <li className="col-lg-6 col-xl-4 mb-3">
                        <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                           <div>
                              <span className="d-block fs-14 fw-medium color-grey mb-2">Background</span>
                              <span className="d-block fw-medium">Orange</span>
                           </div>
                           <div className="ms-auto">
                              <span className="d-block fs-14 fw-medium color-grey text-end mb-2">Rarity</span>
                              <div className="d-flex fs-14">
                                 <span>22/100</span>
                                 <span className="mx-1">~</span>
                                 <span className="fw-medium text-end">17.1%</span>
                              </div>
                           </div>
                           <i className="fa-solid fa-angle-right color-grey ms-5"></i>
                        </a>
                     </li>
                     <li className="col-lg-6 col-xl-4 mb-3">
                        <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                           <div>
                              <span className="d-block fs-14 fw-medium color-grey mb-2">Expression</span>
                              <span className="d-block fw-medium">Brown Eyes</span>
                           </div>
                           <div className="ms-auto">
                              <span className="d-block fs-14 fw-medium color-grey text-end mb-2">Rarity</span>
                              <div className="d-flex fs-14">
                                 <span>22/100</span>
                                 <span className="mx-1">~</span>
                                 <span className="fw-medium text-end">17.1%</span>
                              </div>
                           </div>
                           <i className="fa-solid fa-angle-right color-grey ms-5"></i>
                        </a>
                     </li>
                     <li className="col-lg-6 col-xl-4 mb-3">
                        <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                           <div>
                              <span className="d-block fs-14 fw-medium color-grey mb-2">Hairstyle</span>
                              <span className="d-block fw-medium">Double Ponies</span>
                           </div>
                           <div className="ms-auto">
                              <span className="d-block fs-14 fw-medium color-grey text-end mb-2">Rarity</span>
                              <div className="d-flex fs-14">
                                 <span>22/100</span>
                                 <span className="mx-1">~</span>
                                 <span className="fw-medium text-end">17.1%</span>
                              </div>
                           </div>
                           <i className="fa-solid fa-angle-right color-grey ms-5"></i>
                        </a>
                     </li>
                     <li className="col-lg-6 col-xl-4 mb-3">
                        <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                           <div>
                              <span className="d-block fs-14 fw-medium color-grey mb-2">Outfit</span>
                              <span className="d-block fw-medium">Qipao</span>
                           </div>
                           <div className="ms-auto">
                              <span className="d-block fs-14 fw-medium color-grey text-end mb-2">Rarity</span>
                              <div className="d-flex fs-14">
                                 <span>22/100</span>
                                 <span className="mx-1">~</span>
                                 <span className="fw-medium text-end">17.1%</span>
                              </div>
                           </div>
                           <i className="fa-solid fa-angle-right color-grey ms-5"></i>
                        </a>
                     </li>
                     <li className="col-lg-6 col-xl-4 mb-3">
                        <a href="#!" className="d-flex align-items-center p-3 rounded border hover text-white" target="_blank">
                           <div>
                              <span className="d-block fs-14 fw-medium color-grey mb-2">Prop</span>
                              <span className="d-block fw-medium">Lolipop</span>
                           </div>
                           <div className="ms-auto">
                              <span className="d-block fs-14 fw-medium color-grey text-end mb-2">Rarity</span>
                              <div className="d-flex fs-14">
                                 <span>22/100</span>
                                 <span className="mx-1">~</span>
                                 <span className="fw-medium text-end">17.1%</span>
                              </div>
                           </div>
                           <i className="fa-solid fa-angle-right color-grey ms-5"></i>
                        </a>
                     </li>
                  </ul>
               </div>
               <h4 className="mb-3 fs-28 px-2">Transaction History</h4>
               <div className="card-item-details border bg-soft rounded mt-4 table-responsive">
               <table className="table text-white mb-0">
                 <thead>
                   <tr className="border-bottom">
                     <th scope="col" className="p-4">Type</th>
                     <th scope="col" className="p-4">Price</th>
                     <th scope="col" className="p-4">From</th>
                     <th scope="col" className="p-4">To</th>
                     <th scope="col" className="p-4">Date</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="hover">
                     <td className="p-4">
                           <i className="fa-regular fa-cart-shopping-fast fs-18 me-2"></i>
                           <span className="fw-medium">Sale</span>
                     </td>
                     <td className="p-4">38 TON</td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                        </a>
                        </td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>antonov
                        </a>
                        </td>
                     <td className="p-4"><i className="fa-regular fa-timer me-2"></i> 2 hours ago</td>
                   </tr>
                   <tr className="hover">
                     <td className="p-4">
                           <i className="fa-regular fa-arrow-right-arrow-left me-2"></i>
                           <span className="fw-medium">Transfer</span>
                     </td>
                     <td className="p-4"></td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                        </a>
                        </td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>antonov
                        </a>
                        </td>
                     <td className="p-4"><i className="fa-regular fa-timer me-2"></i> 12 hours ago</td>
                   </tr>
                   <tr className="hover">
                     <td className="p-4">
                           <i className="fa-regular fa-coin-blank me-2"></i>
                           <span className="fw-medium">Mint</span>
                     </td>
                     <td className="p-4">40 TON</td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                        </a>
                        </td>
                     <td className="p-4">
                        <a href="/profile" className="d-block text-truncate" target="_blank" style={{maxWidth: '150px'}}>
                           <i className="fa-regular fa-circle-user me-2"></i>antonov
                        </a>
                        </td>
                     <td className="p-4"><i className="fa-regular fa-timer me-2"></i> 1 day ago</td>
                   </tr>
                 </tbody>
               </table>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
        </div>
    )
}
