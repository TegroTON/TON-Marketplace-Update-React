import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { PageProps } from '../../types/interfaces'



export const CreateNft: React.FC<PageProps> = (props: PageProps) => {
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
   <section className="section pt-5">
      <div className="container-fluid">
         <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9 col-xxl-7">
               <div className="mb-4">
                  <h1 className="section__title fs-32 mb-1">Create New NFT</h1>
                  <p className="color-grey fs-18">Single edition on TON</p>
               </div>
               <div className="row">
                  <div className="col-lg-5 col-xl-4 order-2 order-lg-1 text-center text-lg-start">
                     <div className="border rounded-20 p-3 p-md-4 text-center mb-4">
                        <div>
                           <img className="card-image img-fluid" src="./assets/img/cats/t-cat-01.jpg" loading="lazy" width="276" height="250" alt="TON NFT Tegro Cat" />
                           <div className="px-1 py-0">
                              <h4 className="fs-18 d-flex align-items-center my-4">
                                 <span className="icon-ton me-2"></span> TON NFT Tegro Cat #101
                              </h4>
                              <div className="d-flex justify-content-between bg-soft rounded p-3 fs-14">
                                 <div>
                                    <p className="mb-1 fw-medium color-grey">Price</p>
                                    <p className="m-0 text-white">24.5 TON</p>
                                 </div>
                                 <div>
                                    <p className="mb-1 fw-medium color-grey">Highest bid</p>
                                    <p className="m-0 text-white text-end">164 TON</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="d-flex align-items-center border rounded-20 p-3 p-md-4 text-center position-sticky" style={{top: '140px', minHeight: '380px'}}>
                        <p className="mb-0 fw-medium color-grey">
                           Upload file and choose collection to preview your brand new NFT
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-7 col-xl-8 order-1 order-lg-2 mb-4 mb-lg-0">
                     <form action="">
                        <div className="mb-4">
                           <h4 className="fs-16 mb-3">Wallet</h4>
                           <div className="d-flex flex-column flex-sm-row align-items-center bg-soft border rounded-20 p-2 overflow-hidden">
                              <div className="p-2 bg-soft rounded-20">
                                 <img src="https://market.unerd.eu/assets/img/tonhub.png" alt="TonHub" />
                              </div>
                              <div className="mb-2 mb-sm-0 p-2 text-center text-sm-start">
                                 <span className="d-block text-truncate mb-1 color-grey" style={{maxWidth: '200px'}}>
                                 EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                                 </span>
                                 <h5 className="fs-18 mb-0">Tonhub</h5>
                              </div>
                              <div className="item-details__badge badge__green text-capitalize px-3 py-2 ms-sm-auto mb-3 mb-sm-0">Connect</div>
                           </div>
                        </div>
                        <div className="mb-4">
                           <h4 className="fs-16 mb-3">Upload file</h4>
                           <div className="bg-soft border rounded-20 p-4">
                              <p className="color-grey text-center">
                                 PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                              </p>
                              <div className="text-center">
                                 <label htmlFor="formFile" className="btn btn-sm btn-soft">Choose file</label>
                                 <input className="form-control d-none" type="file" id="formFile" />
                              </div>
                           </div>
                        </div>
                        <div className="bg-soft border rounded-20 p-4 mb-4">
                           <div className="mb-4">
                              <h4 className="fs-16 mb-3">Name</h4>
                              <input type="text" className="form-control" placeholder='e. g. "Redeemable T-Shirt with logo"' required />
                           </div>
                           <div className="mb-0">
                              <h4 className="fs-16 mb-3">Description <span className="color-grey fs-14 ms-1">(Optional)</span></h4>
                              <textarea className="form-control p-3 mb-2" placeholder='e. g. "After purchasing youll be able to get the real T-Shirt"' style={{height: '100px'}}></textarea>
                              <span className="fw-medium fs-14 color-grey">With preserved line-breaks</span>
                           </div>
                        </div>
                        <div className="bg-soft border rounded-20 p-4 mb-4">
                           <div className="d-flex mb-4">
                              <div>
                                 <h4 className="fs-18">Put on marketplace</h4>
                                 <p className="mb-0 color-grey">Enter price to allow users instantly purchase your NFT</p>
                              </div>
                              <div className="form-check form-switch ms-auto">
                                 <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                              </div>
                           </div>
                           <nav className="nav nav-pills nav-fill border rounded flex-column flex-sm-row" id="CreateTab" role="tablist">
                              <a className="flex-sm-fill nav-link active" aria-current="page" href="#!" id="FixedPrice-tab" data-bs-toggle="tab" data-bs-target="#FixedPrice" type="button" role="tab" aria-controls="FixedPrice" aria-selected="true">
                              <i className="fa-regular fa-tag fs-24 me-2"></i> 
                              <span className="d-block mt-2">Fixed price</span>
                              </a>
                              <a className="flex-sm-fill nav-link" href="#!" id="Openforbids-tab" data-bs-toggle="tab" data-bs-target="#Openforbids" type="button" role="tab" aria-controls="Openforbids" aria-selected="false">
                              <i className="fa-regular fa-infinity fs-24 me-2"></i> 
                              <span className="d-block mt-2">Open for bids</span>
                              </a>
                              <a className="flex-sm-fill nav-link" href="#!" id="Timedauction-tab" data-bs-toggle="tab" data-bs-target="#Timedauction" type="button" role="tab" aria-controls="Timedauction" aria-selected="false">
                              <i className="fa-regular fa-timer fs-24 me-2"></i> 
                              <span className="d-block mt-2">Timed auction</span>
                              </a>
                           </nav>
                           <div className="tab-content p-0" id="CreateTabContent">
                              <div className="tab-pane fade show active mt-4" id="FixedPrice" role="tabpanel" aria-labelledby="FixedPrice-tab">
                                 <div className="mb-4">
                                    <h4 className="fs-16 mb-3">Price</h4>
                                    <input type="text" className="form-control" placeholder="Enter price for one piece" required />
                                 </div>
                                 <ul className="list-unstyled bg-soft border rounded fs-14 p-3 mb-0">
                                    <li className="d-flex align-items-center mb-3">
                                       <span className="fw-medium color-grey">Service fee</span>
                                       <span className="ms-auto">1%</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                       <span className="fw-medium color-grey">You will receive</span>
                                       <span className="ms-auto">–</span>
                                    </li>
                                 </ul>
                              </div>
                              <div className="tab-pane fade mt-4" id="Openforbids" role="tabpanel" aria-labelledby="Openforbids-tab">
                            
                              </div>
                              <div className="tab-pane fade mt-4" id="Timedauction" role="tabpanel" aria-labelledby="Timedauction-tab">
                                 <div className="mb-4">
                                    <h4 className="fs-16 mb-3">Minimum bid</h4>
                                    <input type="text" className="form-control mb-2" placeholder="Enter minimum bid" required />
                                    <span className="fw-medium fs-14 color-grey">Bids below this amount won’t be allowed.</span>
                                 </div>
                                 <div className="row">
                                    <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                                       <h4 className="fs-14 mb-3">Starting Date</h4>
                                       <select className="form-select border" aria-label="Default select example">
                                          <option value="1" selected>Right after listing</option>
                                          <option value="2">Pick specific date</option>
                                       </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                       <h4 className="fs-14 mb-3">Expiration Date</h4>
                                       <select className="form-select border" aria-label="Default select example">
                                          <option value="1" selected>1 day</option>
                                          <option value="2">3 days</option>
                                          <option value="3">5 days</option>
                                          <option value="3">7 days</option>
                                       </select>
                                    </div>
                                    <div className="col-12 mt-3 fw-medium fs-14">
                                       <p className="color-grey mb-1">Any bid placed in the last 10 minutes extends the auction by 10 minutes.</p>
                                       <a href="#!" className="color-yellow" data-bs-toggle="modal" data-bs-target="#HowAuctionsWorkModal">Learn more how timed auctions work.</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mb-4">
                           <h4 className="fs-16 mb-3">Choose collection</h4>
                           <div className="row mb-4">
                              <div className="col-12 col-sm-6 col-md-4">
                                 <button type="button" className="btn btn-soft py-4 w-100" data-bs-toggle="modal" data-bs-target="#CreateCollectionModal">
                                 <i className="fa-regular fa-octagon-plus fs-28 mb-3"></i>
                                 <span className="d-block fs-18 text-capitalize">Create</span>
                                 <span className="d-block fs-14 color-grey text-capitalize mt-1">ERC-721</span>
                                 </button>
                              </div>
                              <div className="col-12 col-sm-6 col-md-4">
                                 <button type="button" className="btn btn-soft active py-4 w-100">
                                 <img className="mb-3" src="./assets/img/logo/apple-icon-57x57.png" alt="Libermall - NFT Marketplace" width="28" />
                                 <span className="d-block fs-18 text-capitalize">Libermall</span>
                                 <span className="d-block fs-14 color-grey text-capitalize mt-1">Liber</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="bg-soft border rounded-20 p-4 mb-4">
                           <div className="d-flex mb-4">
                              <div>
                                 <h4 className="fs-18">
                                    Free minting 
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="right" title="">
                                    <i className="fa-regular fa-circle-info color-grey"></i>
                                    </button>
                                 </h4>
                                 <p className="mb-0 color-grey">Buyer will pay gas fees for minting</p>
                              </div>
                              <div className="form-check form-switch ms-auto">
                                 <input className="form-check-input" type="checkbox" checked />
                              </div>
                           </div>
                           <div className="mb-4">
                              <h4 className="fs-16 mb-3">Royalties</h4>
                              <div className="input-group mb-2">
                                 <input type="text" className="form-control" placeholder="10" value="10" />
                                 <span className="input-group-text" id="basic-addon1">%</span>
                              </div>
                              <span className="fw-medium fs-14 color-grey">Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</span>
                           </div>
                        </div>
                        <div className="bg-soft border rounded-20 p-4">
                           <div className="mb-4">
                              <h4 className="fs-16 mb-3">Properties <span className="color-grey fs-14 ms-1">(Optional)</span></h4>
                              <div className="d-flex flex-column flex-sm-row">
                                 <input type="text" placeholder="e.g. Size" className="form-control me-0 me-sm-2 mb-2 mb-sm-0" />
                                 <input type="text" placeholder="e.g. M" className="form-control ms-0 ms-sm-2" />
                              </div>
                           </div>
                           <div className="mb-0">
                              <h4 className="fs-16 mb-3">Alternative text for NFT <span className="color-grey fs-14 ms-1">(Optional)</span></h4>
                              <textarea className="form-control p-3 mb-2" placeholder="Image description in details (do not start with word “image”)" style={{height: '60px'}}></textarea>
                              <span className="fw-medium fs-14 color-grey">Text that will be used in VoiceOver for people with disabilities</span>
                           </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row align-items-center mt-4">
                           <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#FollowStepsModal">Create item</button>
                           <div className="ms-auto color-grey">
                              Unsaved changes 
                              <button type="button" data-bs-toggle="tooltip" data-bs-placement="right" title="Attach file or add title to save your changes">
                              <i className="fa-regular fa-circle-info color-grey"></i>
                              </button>
                           </div>
                        </div>
                     </form>
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
