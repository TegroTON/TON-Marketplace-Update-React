import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { PageProps } from '../types/interfaces'
import { DeLabConnect } from '@delab-team/connect'
import { WalletInfoRemote } from '@tonconnect/sdk'

interface ModalType {
   DelabObject: DeLabConnect,
   id: string,
   setActiveModal: Function,
   consoleLog: Function,
   isDesktop: boolean,
   installScripts: Function,
   DelabLink: string
}

export const Modals: React.FC<ModalType> = (props: ModalType) => {
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
            <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
         <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div className="modal-body">
            ...
         </div>
         <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="ConnectModal" tabIndex={-1} aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header d-block border-0 mb-3">
            <h5 className="modal-title mb-2 fs-24" id="ConnectModalLabel">Connect wallet</h5>
            <p className="fs-18 color-grey pe-5">
               Choose how you want to connect. There are several wallet providers.
            </p>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <a className="d-flex align-items-center border rounded bg-grey hover-grey mb-3 p-3" 
            onClick={() => props.DelabObject.connectToncoinWallet()}
            href="#">
               <div className="d-flex align-items-center">
                  <img src="./assets/img/ton-wallet.png" alt="Ton Wallet" width="40" height="40" className="wc-img" />
                  <span className="fs-18 ms-4">Ton Wallet</span>
               </div>
               <div className="ms-auto">
                  <i className="fa-solid fa-angle-right"></i>
               </div>
            </a>
            <a 
            className="d-flex align-items-center border rounded bg-grey hover-grey mb-3 p-3" 
            href="#!"
            onClick={() => {
               if (props.DelabObject.tonConnectWallets) {
                  props.DelabObject.connectTonkeeper(props.DelabObject.tonConnectWallets[0] as WalletInfoRemote)
               }
            }
            }
            >
               <div className="d-flex align-items-center">
                  <img src="./assets/img/tonkeeper.png" alt="Tonkeeper" width="40" height="40" className="wc-img" />
                  <span className="fs-18 ms-4">Tonkeeper</span>
               </div>
               <div className="ms-auto">
                  <i className="fa-solid fa-angle-right"></i>
               </div>
            </a>
            <a 
            className="d-flex align-items-center border rounded bg-grey hover-grey p-3" 
            href="#!"
            onClick={() => props.DelabObject.connectTonHub()}
            >
               <div className="d-flex align-items-center">
                  <img src="./assets/img/tonhub.png" alt="Tonhub" width="40" height="40" className="wc-img" />
                  <span className="fs-18 ms-4">Tonhub</span>
               </div>
               <div className="ms-auto">
                  <i className="fa-solid fa-angle-right"></i>
               </div>
            </a>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="MessageModal" tabIndex={-1} aria-labelledby="MessageModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title" id="MessageModalLabel">New message</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <form>
               <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                  <input type="text" className="form-control bg-soft" id="recipient-name" value="@Tegro" />
               </div>
               <div className="mb-4">
                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control bg-soft" id="message-text"></textarea>
               </div>
            </form>
            <button type="button" className="btn btn-sm btn-primary float-end">Send message</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="BuyNowModal" tabIndex={-1} aria-labelledby="BuyNowModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="BuyNowModalLabel">Buy NFT</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body mb-3">
            <div className="d-flex align-items-center bg-soft hover rounded p-2 mb-3">
               <img className="rounded image-80x80" src="/assets/img/item-details-image.jpg" alt="Tergo Cat" />
               <div className="__body ms-3">
                  <h5 className="fs-18 mb-2">TON NFT Tegro Cat #101</h5>
                  <p className="mb-0 color-grey fs-14">TON NFT Tegro Cat</p>
               </div>
            </div>
            <ul className="list-unstyled mb-3 px-1">
               <li className="d-flex align-items-center mb-1">
                  <span>NFT Price</span>
                  <span className="ms-auto">22.5 TON</span>
               </li>
               <li className="d-flex align-items-center fs-14 color-grey mb-1">
                  <span>Creator Royalties</span>
                  <span className="ms-auto">0.525 TON</span>
               </li>
               <li className="d-flex align-items-center fs-14 color-grey mb-3">
                  <span>Service Fee</span>
                  <span className="ms-auto">0.875 TON</span>
               </li>
               <li className="d-flex align-items-center mb-1">
                  <span>Network Fee</span>
                  <span className="ms-auto">1 TON</span>
               </li>
               <li className="d-flex align-items-center fs-14 color-grey">
                  <span>The rest will be returned to your wallet</span>
               </li>
            </ul>
            <div className="d-flex align-items-center bg-soft border rounded fs-18 fw-medium p-3 mb-3">
               <span>You Pay</span>
               <span className="ms-auto">18.5 TON</span>
            </div>
            <div className="alert alert-warning" role="alert">
               <h4 className="alert-heading fs-16">Well done!</h4>
               <p className="mb-2 fs-14">
                  Libermall is unaffiliated with any NFT projects. We are not responsible for possible losses. Invest at your own risk.
               </p>
               <a href="#!" className="color-yellow">Learn More</a>
            </div>
         </div>
         <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#ConnectModal">Buy for 23.5 TON</button>
      </div>
   </div>
</div>
<div className="modal fade" id="SelectTypeModal" tabIndex={-1} aria-labelledby="SelectTypeModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Select Type</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <button type="button" className="d-flex w-100 text-start border rounded bg-grey hover-grey mb-3 p-3" data-bs-toggle="modal" data-bs-target="#EnterPriceModal">
               <i className="fa-regular fa-tag fs-20 mt-1"></i>
               <div className="__body ms-3">
                  <h5 className="fs-18 mb-2">Fixed Price</h5>
                  <p className="color-grey fs-14 mb-0">
                     Enter a price so users can instantly buy your NFT
                  </p>
               </div>
               <i className="fa-regular fa-angle-right my-auto ms-auto"></i>
            </button>
            <button type="button" className="d-flex w-100 text-start border rounded bg-grey hover-grey p-3" data-bs-toggle="modal" data-bs-target="#PutAuctionModal">
               <i className="fa-regular fa-gavel fs-20 mt-1"></i>
               <div className="__body ms-3">
                  <h5 className="fs-18 mb-2">Auction</h5>
                  <p className="color-grey fs-14 mb-0">
                     Allow other users to bet on your NFT
                  </p>
               </div>
               <i className="fa-regular fa-angle-right my-auto ms-auto"></i>
            </button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="EnterPriceModal" tabIndex={-1} aria-labelledby="EnterPriceModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Enter Price</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <form action="">
               <label htmlFor="" className="mb-1">Price</label>
               <div className="input-group mb-4">
                  <input type="text" className="form-control" value="10" placeholder="Enter Price" />
                  <span className="input-group-text" id="basic-addon1">TON</span>
               </div>
               <ul className="list-unstyled mb-4 pb-4 border-bottom">
                  <li className="d-flex align-items-center mb-3">
                     <span className="color-grey">
                     Service fee 
                     <a href="#!" data-bs-toggle="tooltip" data-bs-placement="right" title="The commission that the marketplace takes when selling NFTs"><i className="fa-regular fa-circle-info ms-2"></i></a>
                     </span>
                     <span className="ms-auto">0.5 TON</span>
                  </li>
                  <li className="d-flex align-items-center">
                     <span className="color-grey">
                     Royalties
                     <a href="#!" data-bs-toggle="tooltip" data-bs-placement="right" title="Percentage of the NFT value that the author receives on each resale"><i className="fa-regular fa-circle-info ms-2"></i></a>
                     </span>
                     <span className="ms-auto">0.5 TON</span>
                  </li>
               </ul>
               <div className="d-flex align-items-center fw-medium mb-5">
                  <span>You'll get</span>
                  <span className="ms-auto">9 TON</span>
               </div>
               <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#CreateContractModal">Put up for sale</button>
            </form>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="CreateContractModal" tabIndex={-1} aria-labelledby="CreateContractModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Almost done</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <ul className="list-unstyled mb-4">
               <li className="d-flex mb-4">
                  <i className="fa-regular fa-circle-check fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Create a sales contract</h5>
                     <p className="mb-0 color-grey">
                        To sell NFT, you need to create a sales contract
                     </p>
                  </div>
               </li>
               <li className="d-flex">
                  <i className="fa-duotone fa-spinner-third fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Creation and verification</h5>
                     <p className="mb-0 color-grey">
                        Confirm the transaction in your wallet. After confirmation, verification usually takes some time.
                     </p>
                  </div>
               </li>
            </ul>
            <div className="p-3 p-md-4 border rounded text-center mb-4">
               <h4 className="fs-18 mb-4">Scan the QR code in Tonkeeper</h4>
               <img src="/assets/img/qr-code.jpg" alt="" className="img-fluid rounded mb-3" width="300" height="300" />
               <a href="#!" className="color-yellow d-block"><i className="fa-regular fa-copy me-2"></i> Copy address</a>
            </div>
            <button type="button" className="btn btn-soft w-100" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="AlmostDoneAuctionModal" tabIndex={-1} aria-labelledby="AlmostDoneAuctionModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Almost done</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <ul className="list-unstyled mb-4">
               <li className="d-flex">
                  <i className="fa-duotone fa-spinner-third fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Creation and verification</h5>
                     <p className="mb-0 color-grey">
                        Confirm the transaction in your wallet. After confirmation, verification usually takes some time.
                     </p>
                  </div>
               </li>
            </ul>
            <div className="p-3 p-md-4 border rounded text-center mb-4">
               <h4 className="fs-18 mb-4">Scan the QR code in Tonkeeper</h4>
               <img src="/assets/img/qr-code.jpg" alt="" className="img-fluid rounded mb-3" width="300" height="300" />
               <a href="#!" className="color-yellow d-block"><i className="fa-regular fa-copy me-2"></i> Copy address</a>
            </div>
            <button type="button" className="btn btn-soft w-100" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="EndAuctionModal" tabIndex={-1} aria-labelledby="EndAuctionModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Bets are no longer accepted</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <div className="p-3 p-md-4 border rounded text-center mb-4">
               <div className="fs-18 mb-4">Scan the QR code and pay <span className="fw-bold">0.05 TON</span> <br /> to Tonkeeper</div>
               <img src="/assets/img/qr-code.jpg" alt="" className="img-fluid rounded mb-3" width="300" height="300" />
               <a href="#!" className="d-block"><i className="fa-regular fa-copy me-2"></i> Copy address</a>
            </div>
            <div className="alert alert-warning text-center mb-4">
               👉 After payment, click the button
            </div>
            <button type="button" className="btn btn-primary w-100">Check payment</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="PutAuctionModal" tabIndex={-1} aria-labelledby="PutAuctionModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Put up for auction</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <div className="d-flex align-items-center bg-soft rounded p-2 mb-4">
               <img className="rounded image-80x80" src="/assets/img/item-details-image.jpg" alt="Tergo Cat" />
               <div className="__body ms-3">
                  <h5 className="fs-18 mb-2">TON NFT Tegro Cat #101</h5>
                  <p className="mb-0 color-grey fs-14">TON NFT Tegro Cat</p>
               </div>
            </div>
            <div className="mb-4">
               <h5 className="fs-18">Minimum bet</h5>
               <p className="color-grey">
                  Bets below this amount are not allowed. You will only be able to accept the most recent high bid.
               </p>
               <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter your minimum bid" />
                  <span className="input-group-text" id="basic-addon1">TON</span>
               </div>
            </div>
            <div className="mb-4">
               <h5 className="fs-18">Expiration date</h5>
               <p className="color-grey">
                  <span>Until September 14, 17:54.</span> The auction will end automatically. The one who offers the highest bid wins.
               </p>
               <select className="form-select border" aria-label="Default select example">
                  <option selected>7 days</option>
                  <option value="1">14 days</option>
                  <option value="2">1 month</option>
               </select>
            </div>
            <div className="mb-4">
               <div className="d-flex align-items-center mb-2">
                  <h5 className="fs-18 mb-0">Maximum bet</h5>
                  <div className="form-check form-switch ms-auto">
                     <input className="form-check-input p-2" type="checkbox" id="flexSwitchCheckDefault" />
                  </div>
               </div>
               <p className="mb-0 color-grey">
                  If someone bids that amount, the NFT will be given <br /> to the buyers and the auction will be closed.
               </p>
            </div>
            <div className="mb-5">
               <div className="d-flex align-items-center mb-2">
                  <h5 className="fs-18 mb-0">Step</h5>
                  <div className="form-check form-switch ms-auto">
                     <input className="form-check-input p-2" type="checkbox" id="flexSwitchCheckDefault" />
                  </div>
               </div>
               <p className="mb-0 color-grey">
                  Each new bet must be higher than the previous one <br /> by this amount of TON
               </p>
            </div>
            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#AlmostDoneAuctionModal">Put up for auction</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="UpdateCoverModal" tabIndex={-1} aria-labelledby="UpdateCoverModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-2">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Update Cover</h5>
         </div>
         <div className="modal-body">
            <p className="color-grey mb-5">
               Upload new cover for your page. We recommend to upload image in 1920x340 resolution. Max 15 mb.
            </p>
            <div className="mb-3">
               <label htmlFor="formFile" className="btn btn-sm btn-primary w-100">Choose file</label>
               <input className="form-control d-none" type="file" id="formFile" />
            </div>
            <button type="button" className="btn btn-sm btn-soft w-100" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="ShareModal" tabIndex={-1} aria-labelledby="ShareModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-5">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Share</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <div className="libermall__soclinks justify-content-center p-2 border rounded">
               <a href="#!" className="libermall__soclinks-item ms-0"><i className="fa-brands fa-telegram"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-reddit-alien"></i></a>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="HowAuctionsWorkModal" tabIndex={-1} aria-labelledby="HowAuctionsWorkModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-5">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">How timed auctions work</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            When you put your NFT on timed auction, you choose currency, minimum bid, starting and ending dates of your auction.<br /><br />The bidder can only place a bid which satisfies the following conditions:<br /><br />
            <ol className="sc-fKknU cScerJ">
               <li>It is at least minimum bid set for the auction</li>
               <li>It is at least 5% higher than the current highest bid in equivalent</li>
            </ol>
            <br />Note that some bids may disappear with time if the bidder withdraws their balance. At the same time, some bids may reappear if the bidder has topped up their balance again.<br /><br />Auction cannot be cancelled after any valid bid was made. Any bid placed in the last 10 minutes extends the auction by 10 minutes.<br /><br />In the 48 hours after the auction ends you will only be able to accept the highest available bid placed during the auction. As with regular bids, you will need to pay some gas to accept it.Note that you can always decrease the price of your listing for free, without making a transaction or paying gas. You can view all your NFTs here.
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="CreateCollectionModal" tabIndex={-1} aria-labelledby="CreateCollectionModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-4">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Create Collection ERC-721</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <form className="modal-body">
            <div className="d-flex mb-5">
               <div className="me-3">
                  <img src="/assets/img/user-1.svg" className="img-fluid rounded" alt="" width="120" height="120" />
               </div>
               <div>
                  <p className="color-grey">
                     We recommend an image of at least 300x300. Gifs work too. Max 5mb.
                  </p>
                  <div>
                     <label htmlFor="formFile" className="btn btn-sm btn-soft">Choose file</label>
                     <input className="form-control d-none" type="file" id="formFile" />
                  </div>
               </div>
            </div>
            <div className="mb-4">
               <h4 className="fs-16 mb-3">Display name <span className="color-grey fs-14 ms-1">(required)</span></h4>
               <input type="text" className="form-control mb-2" placeholder="Enter collection name" required />
               <span className="fw-medium fs-14 color-grey px-1">Token name cannot be changed in future</span>
            </div>
            <div className="mb-4">
               <h4 className="fs-16 mb-3">Symbol <span className="color-grey fs-14 ms-1">(required)</span></h4>
               <input type="text" className="form-control" placeholder="Enter token symbol" required />
            </div>
            <div className="mb-4">
               <h4 className="fs-16 mb-3">Description <span className="color-grey fs-14 ms-1">(Optional)</span></h4>
               <textarea className="form-control p-3" placeholder="Spread some words about your token collection" style={{height: '70px'}}></textarea>
            </div>
            <div className="mb-4">
               <h4 className="fs-16 mb-3">Short url</h4>
               <div className="input-group mb-2">
                  <span className="input-group-text">libermall.com/</span>
                  <input type="text" className="form-control" placeholder="Enter short url" />
               </div>
               <span className="fw-medium fs-14 color-grey px-1">Will be used as public URL</span>
            </div>
            <button type="button" className="btn btn-sm btn-primary w-100">Create Collection</button>
         </form>
      </div>
   </div>
</div>
<div className="modal fade" id="FollowStepsModal" tabIndex={-1} aria-labelledby="FollowStepsModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-header border-0 mb-5">
            <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Follow Steps</h5>
            <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg"></i></button>
         </div>
         <div className="modal-body">
            <ul className="list-unstyled mb-5">
               <li className="d-flex mb-4">
                  <i className="fa-duotone fa-spinner-third fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Upload</h5>
                     <p className="mb-0 color-grey">
                        Uploading off all media assets and metadata to IPFS
                     </p>
                  </div>
               </li>
               <li className="d-flex mb-4">
                  <i className="fa-regular fa-circle-check fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Mint</h5>
                     <p className="mb-0 color-grey">
                        Send transaction to create your NFT
                     </p>
                  </div>
               </li>
               <li className="d-flex">
                  <i className="fa-regular fa-circle-check fa-2x color-yellow"></i>
                  <div className="ms-3">
                     <h5 className="fs-16">Start auction</h5>
                     <p className="mb-0 color-grey">
                        Sign message to create timed auction
                     </p>
                  </div>
               </li>
            </ul>
            <button className="btn btn-soft w-100" data-bs-toggle="modal" data-bs-target="#CreatNFTSuccessfullyModal">Cancel</button>
         </div>
      </div>
   </div>
</div>
<div className="modal fade" id="CreatNFTSuccessfullyModal" tabIndex={-1} aria-labelledby="CreatNFTSuccessfullyModalLabel" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
      <div className="modal-content border-0">
         <div className="modal-body">
            <div className="d-flex align-items-center bg-soft rounded p-2 mb-4">
               <img className="rounded image-80x80" src="/assets/img/item-details-image.jpg" alt="Tergo Cat" />
               <div className="__body ms-3">
                  <h5 className="fs-18 mb-0">Your <span className="color-yellow">Tegro Cat #133 NFT</span>  <br /> successfully created</h5>
               </div>
            </div>
            <ul className="list-unstyled p-3 border rounded mb-5">
               <li className="d-flex mb-3">
                  <span className="color-grey">Status</span>
                  <span className="ms-auto">Transaction hash</span>
               </li>
               <li className="d-flex">
                  <span className="color-green">Confirmed</span>
                  <span className="d-block text-truncate ms-auto" style={{maxWidth: '150px'}}>
                  EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                  </span>
               </li>
            </ul>
            <h4 className="fs-18 text-center mb-3">Let's show-off a little</h4>
            <div className="libermall__soclinks justify-content-center mb-5 p-2 border rounded">
               <a href="#!" className="libermall__soclinks-item ms-0"><i className="fa-brands fa-telegram"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-reddit-alien"></i></a>
            </div>
            <div>
               <button className="btn btn-primary w-100 mb-2" data-bs-dismiss="modal" aria-label="Close">View NFT</button>
               <button className="btn btn-soft w-100" data-bs-dismiss="modal" aria-label="Close">Create another</button>
            </div>
         </div>
      </div>
   </div>
</div>
        </div>
    )
}
