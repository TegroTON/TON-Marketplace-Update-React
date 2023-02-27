import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, InputGroup, Form, Modal, Card, ListGroup, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
   const [firstRender, setFirstRender] = React.useState<boolean>(false)

   const history = useNavigate()


   useEffect(() => {
      if (!firstRender) {
         setFirstRender(true)
         props.installScripts()
      }
   }, [])

   return (
      <div id={props.id}>
         {/* Login */}
         <div className="modal fade" id="ConnectModal" tabIndex={-1} aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header className="mb-2">
                  <Modal.Title>Connect wallet</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Card.Text className="color-grey pe-5 mb-4">
                  A wallet is a simple, anonymous way to log in. To create ('mint') or buy an NFT, you must connect a wallet or create a new one.
               </Card.Text>
               <Modal.Body>
                  <Button
                     variant="secondary d-flex align-items-center px-3 mb-3 w-100"
                     onClick={() => props.DelabObject.connectToncoinWallet()}
                  >
                     <img src="./assets/img/ton-wallet.png" alt="Ton Wallet" width="40" height="40" className="wc-img" />
                     <div className="fs-18 text-capitalize ms-3">Ton Wallet</div>
                  </Button>
                  <Button
                     variant="secondary d-flex align-items-center px-3 mb-3 w-100"
                     onClick={() => {
                        if (props.DelabObject.tonConnectWallets) {
                           props.DelabObject.connectTonkeeper(props.DelabObject.tonConnectWallets[0] as WalletInfoRemote)
                        }
                     }
                     }
                  >
                     <img src="./assets/img/tonkeeper.png" alt="Tonkeeper" width="40" height="40" className="wc-img" />
                     <div className="fs-18 text-capitalize ms-3">Tonkeeper</div>
                  </Button>
                  <Button
                     variant="secondary d-flex align-items-center px-3 mb-3 w-100"
                     onClick={() => props.DelabObject.connectTonHub()}
                  >

                     <img src="./assets/img/tonhub.png" alt="Tonhub" width="40" height="40" className="wc-img" />
                     <div className="fs-18 text-capitalize ms-3">Tonhub</div>
                  </Button>

               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Buy NFT  */}
         <div className="modal fade" id="BuyNowModal" tabIndex={-1} aria-labelledby="BuyNowModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Buy NFT</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Card className="flex-row bg-soft p-2 mb-3">
                     <Card.Img variant="custom rounded image-80x80" src="./assets/img/nfts/nft-6.png" />
                     <Card.Body>
                        <Card.Title className="fs-18 mb-2">ZubazzzTik (2684)</Card.Title>
                        <Card.Text className="mb-0 color-grey fs-14">Cute Monters</Card.Text>
                     </Card.Body>
                  </Card>
                  <ListGroup className="bg-transparent p-0 mb-4">
                     <ListGroup.Item className="d-flex align-items-center">
                        <div>NFT Price</div>
                        <div className="ms-auto">43.9 TON</div>
                     </ListGroup.Item>
                     <ListGroup.Item className="d-flex align-items-center small color-grey pb-1">
                        <div>Creator Royalties</div>
                        <div className="ms-auto">0.525 TON</div>
                     </ListGroup.Item>
                     <ListGroup.Item className="d-flex align-items-center small color-grey pb-4">
                        <div>Service Fee</div>
                        <div className="ms-auto">0.875 TON</div>
                     </ListGroup.Item>
                     <ListGroup.Item className="d-flex align-items-center">
                        <div>Network Fee</div>
                        <div className="ms-auto">1 TON</div>
                     </ListGroup.Item>
                     <ListGroup.Item className="fs-14 color-grey">
                        The rest will be returned to your wallet
                     </ListGroup.Item>
                  </ListGroup>
                  <Card className="flex-row bg-soft fw-medium fs-18 mb-4">
                     <div>You Pay</div>
                     <div className="ms-auto">46.98 TON</div>
                  </Card>
                  <Alert key="warning" variant="warning mb-4">
                     <p>Libermall is unaffiliated with any NFT projects. We are not responsible for possible losses. Invest at your own risk.</p>
                     <Alert.Link href="#">Learn More</Alert.Link>
                  </Alert>
                  <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Buy For 46.98 TON</Button>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Place a Bid  */}
         <div className="modal fade" id="PlaceAbidModal" tabIndex={-1} aria-labelledby="PlaceAbidLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Place a bid</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Card className="flex-row bg-soft p-2 mb-3">
                     <Card.Img variant="custom rounded image-80x80" src="./assets/img/nfts/nft-6.png" />
                     <Card.Body>
                        <Card.Title className="fs-18 mb-2">ZubazzzTik (2684)</Card.Title>
                        <Card.Text className="mb-0 color-grey fs-14">Cute Monters</Card.Text>
                     </Card.Body>
                  </Card>
                  <Form.Group className="mb-4">
                     <div className="d-flex align-items-center">
                        <Form.Label>Your bid</Form.Label>
                        <div className="ms-auto color-grey">Bid step is 20 TON</div>
                     </div>
                     <InputGroup className="mb-2">
                        <Form.Control
                           defaultValue={21}
                           placeholder="Min is 21 TON"
                           type="text"
                        />
                        <InputGroup.Text>TON</InputGroup.Text>
                     </InputGroup>
                     <Form.Text>
                        <div className="fs-14 fw-medium">The last bid is 1 TON</div>
                        <div className="color-grey">Your bid must be higher than the last bid by 20 TON.</div>
                     </Form.Text>
                  </Form.Group>
                  <Alert key="warning" variant="warning mb-4">
                     <div className="fs-16 fw-bold mb-2">Warning</div>
                     <p>Libermall is unaffiliated with any NFT projects. We are not responsible for possible losses. Invest at your own risk.</p>
                     <Alert.Link href="#">Learn More</Alert.Link>
                  </Alert>
                  <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Place a 21 TON bid</Button>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Create Collection  */}
         <div className="modal fade" id="CreateCollectionModal" tabIndex={-1} aria-labelledby="CreateCollectionModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Create Collection</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <div className="upload-nft__box py-5 position-sticky mb-4" style={{ maxHeight: '30vh' }}>
                        <div>
                           <i className="fa-regular fa-cloud-arrow-up fa-3x mb-4" />
                           <p className="mb-4">File types supported: JPG, PNG, SVG, GIF and WEBP Optimal dimensions 2500×650. Max. size: 15MB</p>
                           <Form.Group controlId="formFile">
                              <Form.Label forHtml="formFile" className="btn btn-secondary">Upload Files</Form.Label>
                              <Form.Control type="file" className="d-none" />
                           </Form.Group>
                        </div>
                     </div>
                     <Form.Group controlId="formFile" className="mb-4">
                        <Form.Label forHtml="formFile" className="d-flex align-items-center">
                           <div className="bg-soft rounded p-4 me-4" style={{ minHeight: '76px' }}>
                              <i className="fa-regular fa-cloud-arrow-up fs-24" />
                           </div>
                           <Form.Text>
                              <div className="fs-16 text-white fw-medium mb-2">Upload Collection Avatar</div>
                              <div className="fs-14 color-grey">File types supported: JPG, PNG, SVG, GIF and WEBP Size: 512×512</div>
                           </Form.Text>
                        </Form.Label>
                        <Form.Control type="file" className="d-none" />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex">
                           <Form.Label className="fw-medium">Display Name</Form.Label>
                           <div className="ms-auto color-grey"><span>0</span>/60</div>
                        </div>
                        <Form.Control type="text" placeholder="Name your NFT" />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex">
                           <Form.Label className="fw-medium">Description</Form.Label>
                           <div className="ms-auto color-grey"><span>0</span>/700</div>
                        </div>
                        <Form.Control as="textarea" rows={4} placeholder="Describe the idea behind your NFT and explain how it stands out from the rest." />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label className="fw-medium">Royalties for the Creator</Form.Label>
                        <InputGroup className="mb-2">
                           <Form.Control
                              placeholder="10%"
                              defaultValue="10%"
                              aria-label="royalties"
                           />
                           <InputGroup.Text className="fs-12 color-grey">Service Fee</InputGroup.Text>
                        </InputGroup>
                        <div className="d-flex mb-2">
                           <Button variant="secondary m-1 p-2">0%</Button>
                           <Button variant="secondary m-1 p-2">10%</Button>
                           <Button variant="secondary m-1 p-2">20%</Button>
                           <Button variant="secondary m-1 p-2">30%</Button>
                        </div>
                        <Form.Text className="color-grey">
                           Collect royalties every time your NFT is sold. The amount is deducted from the final sale price and sent to your address.
                        </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label className="fw-medium">Links to your collection</Form.Label>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-telegram fs-18 me-2" />
                              <div className="color-grey">t.me/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="telegram"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-twitter me-2" />
                              <div className="color-grey">twitter.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="twitter"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-discord me-2" />
                              <div className="color-grey">discord.gg/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="discord"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-youtube fs-18 me-2" />
                              <div className="color-grey">youtube.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="youtube"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-tiktok fs-18 me-2" />
                              <div className="color-grey">tiktok.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="tiktok"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text>
                              <i className="fa-regular fa-link" />
                           </InputGroup.Text>
                           <Form.Control
                              placeholder="Any link"
                              aria-label="Anylink"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text>
                              <i className="fa-regular fa-link" />
                           </InputGroup.Text>
                           <Form.Control
                              placeholder="Any link"
                              aria-label="Anylink"
                           />
                        </InputGroup>
                     </Form.Group>
                     <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Create Collection</Button>
                  </Form>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/*Make Offer */}
         <div className="modal fade" id="MakeOfferModal" tabIndex={-1} aria-labelledby="MakeOfferModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Make Offer</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Form.Group className="mb-3">
                        <Form.Label>Your Price</Form.Label>
                        <InputGroup className="mb-3">
                           <Form.Control
                              placeholder="Enter offer price"
                              aria-label="Enter offer price"
                              required
                           />
                           <InputGroup.Text>TON</InputGroup.Text>
                        </InputGroup>
                        <Form.Text className="color-grey mt-1">
                           Current price — 49.9 TON
                        </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label>Offer Duration</Form.Label>
                        <Form.Select className="mb-2">
                           <option>7 Days</option>
                           <option value="1">15 minutes</option>
                           <option value="2">1 Day</option>
                           <option value="3">2 Days</option>
                           <option value="3">3 Days</option>
                           <option value="3">4 Days</option>
                           <option value="3">5 Days</option>
                           <option value="3">6 Days</option>
                           <option value="3">7 Days</option>
                           <option value="3">8 Days</option>
                           <option value="3">9 Days</option>
                           <option value="3">10 Days</option>
                           <option value="3">1 Days</option>
                           <option value="3">12 Days</option>
                           <option value="3">13 Days</option>
                           <option value="3">14 Days</option>
                        </Form.Select>
                        <Form.Text className="color-grey">
                           Until 8 Mar, 2:44 AM. If the owner does not accept your offer within this period of time, the paid TON will be sent back to your wallet.
                        </Form.Text>
                     </Form.Group>
                     <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Send</Button>
                  </Form>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Transaction Progress */}
         <div className="modal fade" id="TransactionModal" tabIndex={-1} aria-labelledby="MakeOfferModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Almost ready</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body className="progress-list">
                  <div className="progress-list__step d-flex mb-4">
                     <div className="progress-list__icon progress-list__icon--loading" style={{ fontSize: '40px' }} >
                        <i className="fa-duotone fa-spinner-third fa-spin color-yellow" />
                     </div>
                     <div className="__body ms-4">
                        <div className="fs-18 fw-medium mb-1">Transaction</div>
                        <div className="color-grey fs-14 mb-3 pe-5">
                           Go to the [Wallet Name] app and confirm the transaction
                        </div>
                        <Button variant="primary btn-sm small px-3 py-2">Go to [Wallet Name]</Button>
                     </div>
                  </div>
                  <div className="progress-list__step d-flex mb-4">
                     <div className="progress-list__icon" style={{ fontSize: '40px' }}>
                        <i className="fa-duotone fa-circle" />
                     </div>
                     <div className="__body ms-4">
                        <div className="fs-18 fw-medium mb-1">Checking Payment</div>
                        <div className="color-grey fs-14 mb-3 pe-5">
                           We are checking your payment. It may take some time.
                        </div>
                     </div>
                  </div>
               </Modal.Body>
               <Button variant="secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</Button>
            </Modal.Dialog>
         </div>
         {/* Edit Your Profile  */}
         <div className="modal fade" id="EditProfileModal" tabIndex={-1} aria-labelledby="EditProfileModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Edit Your Profile</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <div className="upload-nft__box py-5 position-sticky mb-4" style={{ maxHeight: '30vh' }}>
                        <div>
                           <i className="fa-regular fa-cloud-arrow-up fa-3x mb-4" />
                           <p className="mb-4">
                              File types supported: JPG, PNG, SVG, GIF and WEBP
                              Optimal dimensions 2500×650.
                              Max. size: 15MB
                           </p>
                           <Form.Group controlId="formFile">
                              <Form.Label forHtml="formFile" className="btn btn-secondary">Upload Banner</Form.Label>
                              <Form.Control type="file" className="d-none" />
                           </Form.Group>
                        </div>
                     </div>
                     <Form.Group controlId="formFile" className="mb-4">
                        <Form.Label forHtml="formFile" className="d-flex align-items-center">
                           <div className="bg-soft rounded p-4 me-4" style={{ minHeight: '76px' }}>
                              <i className="fa-regular fa-cloud-arrow-up fs-24" />
                           </div>
                           <Form.Text>
                              <div className="fs-16 text-white fw-medium mb-2">Profile Image</div>
                              <div className="fs-14 color-grey">File types supported: JPG, PNG, SVG, GIF and WEBP Size: 512×512</div>
                           </Form.Text>
                        </Form.Label>
                        <Form.Control type="file" className="d-none" />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex">
                           <Form.Label className="fw-medium">Display Name</Form.Label>
                           <div className="ms-auto color-grey"><span>0</span>/60</div>
                        </div>
                        <Form.Control type="text" placeholder="Name your NFT" />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex">
                           <Form.Label className="fw-medium">Description</Form.Label>
                           <div className="ms-auto color-grey"><span>0</span>/700</div>
                        </div>
                        <Form.Control as="textarea" rows={4} placeholder="Describe the idea behind your NFT and explain how it stands out from the rest." />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label className="fw-medium">Links</Form.Label>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-telegram fs-18 me-2" />
                              <div className="color-grey">t.me/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="telegram"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-twitter me-2" />
                              <div className="color-grey">twitter.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="twitter"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-discord me-2" />
                              <div className="color-grey">discord.gg/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="discord"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-youtube fs-18 me-2" />
                              <div className="color-grey">youtube.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="youtube"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text className="d-flex align-items-center pe-0">
                              <i className="fa-brands fa-tiktok fs-18 me-2" />
                              <div className="color-grey">tiktok.com/</div>
                           </InputGroup.Text>
                           <Form.Control
                              placeholder=""
                              aria-label="tiktok"
                              className="ps-0"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text>
                              <i className="fa-regular fa-link" />
                           </InputGroup.Text>
                           <Form.Control
                              placeholder="Any link"
                              aria-label="Anylink"
                           />
                        </InputGroup>
                        <InputGroup className="mb-3">
                           <InputGroup.Text>
                              <i className="fa-regular fa-link" />
                           </InputGroup.Text>
                           <Form.Control
                              placeholder="Any link"
                              aria-label="Anylink"
                           />
                        </InputGroup>
                     </Form.Group>
                     <Button variant="primary w-100">Save</Button>
                  </Form>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Put On Sale  */}
         <div className="modal fade" id="PutonSaleModal" tabIndex={-1} aria-labelledby="PutonSaleLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Choose a type</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Button variant="link bg-soft hover text-white text-start d-flex w-100 p-3 mb-4" data-bs-toggle="modal" data-bs-target="#EnterPriceModal">
                     <i className="fa-regular fa-tag fs-32 mt-1" />
                     <div className="ms-3">
                        <div className="fs-18 fw-medium mb-1">Fixed Price</div>
                        <div className="color-grey fs-14">
                           Enter a price to allow users to purchase <br /> your NFT instantly.
                        </div>
                     </div>
                     <i className="fa-regular fa-angle-right ms-auto" />
                  </Button>
                  <Button variant="link bg-soft hover text-white text-start d-flex w-100 p-3" data-bs-toggle="modal" data-bs-target="#PutAuctionModal">
                     <i className="fa-regular fa-gavel fs-20 mt-1" />
                     <div className="ms-3">
                        <div className="fs-18 fw-medium mb-1">Auction</div>
                        <div className="color-grey fs-14">
                           Allow other users to bet on your NFT
                        </div>
                     </div>
                     <i className="fa-regular fa-angle-right ms-auto" />
                  </Button>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* Fix Price */}
         <div className="modal fade" id="EnterPriceModal" tabIndex={-1} aria-labelledby="EnterPriceModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>Enter a Price</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group className="mb-4">
                     <Form.Label>Item’s Price</Form.Label>
                     <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter Price" />
                        <InputGroup.Text id="basic-addon3">TON</InputGroup.Text>
                     </InputGroup>
                  </Form.Group>
                  <ListGroup className="mb-4">
                     <ListGroup.Item className="d-flex">
                        <div className="color-grey">
                           Service Fee
                           <OverlayTrigger
                              key="bottom"
                              placement="bottom"
                              overlay={
                                 <Tooltip id={`tooltip-bottom`}>
                                    The service fee is what the marketplace collects when an NFT is sold.
                                 </Tooltip>
                              }
                           >
                              <i className="fa-regular fa-circle-info ms-2"></i>
                           </OverlayTrigger>
                        </div>
                        <div className="ms-auto">
                           <span>0</span> TON
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item className="d-flex border-bottom mb-3">
                        <div className="color-grey">
                           Creator Royalties
                           <OverlayTrigger
                              key="bottom"
                              placement="bottom"
                              overlay={
                                 <Tooltip id={`tooltip-bottom`}>
                                    This is the percentage creators receive each time their NFTs are sold on the secondary market.
                                 </Tooltip>
                              }
                           >
                              <i className="fa-regular fa-circle-info ms-2"></i>
                           </OverlayTrigger>
                        </div>
                        <div className="ms-auto">
                           <span>0</span> TON
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item className="d-flex fw-500">
                        <div className="color-grey">You Receive</div>
                        <div className="ms-auto">
                           <span>0</span> TON
                        </div>
                     </ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Put on Sale</Button>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         <div className="modal fade" id="EndAuctionModal" tabIndex={-1} aria-labelledby="EndAuctionModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
               <div className="modal-content border-0">
                  <div className="modal-header border-0 mb-4">
                     <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Bets are no longer accepted</h5>
                     <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg" /></button>
                  </div>
                  <div className="modal-body">
                     <div className="p-3 p-md-4 border rounded text-center mb-4">
                        <div className="fs-18 mb-4">Scan the QR code and pay <span className="fw-bold">0.05 TON</span> <br /> to Tonkeeper</div>
                        <img src="./assets/img/qr-code.jpg" alt="" className="img-fluid rounded mb-3" width="300" height="300" />
                        <a href="#!" className="d-block"><i className="fa-regular fa-copy me-2" /> Copy address</a>
                     </div>
                     <div className="alert alert-warning text-center mb-4">
                        👉 After payment, click the button
                     </div>
                     <button type="button" className="btn btn-primary w-100">Check payment</button>
                  </div>
               </div>
            </div>
         </div>
         {/* Put For Auction */}
         <div className="modal fade" id="PutAuctionModal" tabIndex={-1} aria-labelledby="PutAuctionModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header className="mb-2">
                  <Modal.Title>Put for auction</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <a href="#!" className="d-flex align-items-center mb-4" data-bs-toggle="modal" data-bs-target="#AboutAuctions">
                  How it works
                  <i className="fa-solid fa-angle-right ms-2" />
               </a>
               <Modal.Body>
                  <Form>
                     <Form.Group className="mb-4">
                        <Form.Label className="d-block">Min. bid</Form.Label>
                        <Form.Text className="color-grey d-block mb-3">
                           Bids below this amount won’t be allowed. You will only be able to accept the most recent high bid.
                        </Form.Text>
                        <Form.Control type="text" placeholder="Enter min. bid" required />
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label className="d-block">Expiration date</Form.Label>
                        <Form.Text className="color-grey d-block mb-3">
                           Until 6 Mar, 10:49 PM. The auction will end automatically and the highest bidder will win.
                        </Form.Text>
                        <Form.Select className="mb-2">
                           <option>7 Days</option>
                           <option value="1">15 minutes</option>
                           <option value="2">1 Day</option>
                           <option value="3">2 Days</option>
                           <option value="3">3 Days</option>
                           <option value="3">4 Days</option>
                           <option value="3">5 Days</option>
                           <option value="3">6 Days</option>
                           <option value="3">7 Days</option>
                           <option value="3">8 Days</option>
                           <option value="3">9 Days</option>
                           <option value="3">10 Days</option>
                           <option value="3">1 Days</option>
                           <option value="3">12 Days</option>
                           <option value="3">13 Days</option>
                           <option value="3">14 Days</option>
                        </Form.Select>
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                           <Form.Label htmlFor="maxBid-switch" className="m-0">Max. bid</Form.Label>
                           <Form.Check
                              type="switch"
                              id="maxBid-switch"
                              className="ms-auto"
                           />
                        </div>
                        <Form.Text className="color-grey fs-12">
                           If anyone bids this amount, the NFT will be transferred <br /> to the bidder, and the auction will close.
                        </Form.Text>
                        {/* Show When Switch Enable
                           <Form.Control type="text" className="mt-3" placeholder="Enter max. bid" /> 
                        */}
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                           <Form.Label htmlFor="maxBid-switch" className="m-0">Min. step</Form.Label>
                           <Form.Check
                              type="switch"
                              id="maxBid-switch"
                              className="ms-auto"
                           />
                        </div>
                        <Form.Text className="color-grey fs-12">
                           Each new bid must be higher than the previous <br /> one by this amount of TON.
                        </Form.Text>
                        {/* Show When Switch Enable
                           <Form.Control type="text" className="mt-3" placeholder="Enter min. step" /> 
                        */}
                     </Form.Group>
                     <Button variant="primary w-100" data-bs-toggle="modal" data-bs-target="#TransactionModal">Put up for auction</Button>
                  </Form>
               </Modal.Body>
            </Modal.Dialog>
         </div>
         {/* About Auctions */}
         <div className="modal fade" id="AboutAuctions" tabIndex={-1} aria-labelledby="AboutAuctionsModalLabel" aria-hidden="true">
            <Modal.Dialog className="modal-dialog-centered mobile-modal-bottom">
               <Modal.Header>
                  <Modal.Title>About Auctions</Modal.Title>
                  <Button variant="link border-0 p-0 modal-close" data-bs-toggle="modal" data-bs-target="#PutAuctionModal">
                     <i className="fa-solid fa-xmark fa-lg" />
                  </Button>
               </Modal.Header>
               <Modal.Body>
                  <ListGroup className="p-0 bg-transparent mb-4" as="ol" numbered>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           The seller places their NFT up for auction and sets the minimum bid, start date, and expiration date of the auction.
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           When a bidder makes a bid, TON is deducted from their wallet balance, which will be stored on the balance of the auction contract. It’s safe: The TONs is on the blockchain, and no one else has access to it.
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           The bidder must bid higher than the current highest bid.
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           If another user outbids the current bid, the amount of Toncoin minus blockchain fees will be returned to the participant.
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           Within 48 hours after the end of the auction, the seller will only be able to accept the highest available bid made during the auction. As with regular transactions, the seller will need to pay a gas fee to accept the bid.
                        </div>
                     </ListGroup.Item>
                     <ListGroup.Item as="li" className="d-flex fs-20">
                        <div className="ms-3 fs-16">
                           If the seller accepts the participant’s bid, the NFT will be instantly credited to the bidder’s wallet, and the bid in TON will be credited to the seller’s wallet.
                        </div>
                     </ListGroup.Item>
                  </ListGroup>
                  <Button variant="secondary w-100" data-bs-toggle="modal" data-bs-target="#PutAuctionModal">
                     <i className="fa-solid fa-angle-left me-3" />
                     Back
                  </Button>
               </Modal.Body>
            </Modal.Dialog>
         </div>




         {/* <div className="modal fade" id="FollowStepsModal" tabIndex={-1} aria-labelledby="FollowStepsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
               <div className="modal-content border-0">
                  <div className="modal-header border-0 mb-5">
                     <h5 className="modal-title fs-24" id="SelectTypeModalLabel">Follow Steps</h5>
                     <button type="button" className="border-0 p-0 modal-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-lg" /></button>
                  </div>
                  <div className="modal-body">
                     <ul className="list-unstyled mb-5">
                        <li className="d-flex mb-4">
                           <i className="fa-duotone fa-spinner-third fa-2x color-yellow" />
                           <div className="ms-3">
                              <h5 className="fs-16">Upload</h5>
                              <p className="mb-0 color-grey">
                                 Uploading off all media assets and metadata to IPFS
                              </p>
                           </div>
                        </li>
                        <li className="d-flex mb-4">
                           <i className="fa-regular fa-circle-check fa-2x color-yellow" />
                           <div className="ms-3">
                              <h5 className="fs-16">Mint</h5>
                              <p className="mb-0 color-grey">
                                 Send transaction to create your NFT
                              </p>
                           </div>
                        </li>
                        <li className="d-flex">
                           <i className="fa-regular fa-circle-check fa-2x color-yellow" />
                           <div className="ms-3">
                              <h5 className="fs-16">Start auction</h5>
                              <p className="mb-0 color-grey">
                                 Sign message to create timed auction
                              </p>
                           </div>
                        </li>
                     </ul>
                     <button className="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#CreatNFTSuccessfullyModal">Cancel</button>
                  </div>
               </div>
            </div>
         </div> */}

         {/* <div className="modal fade" id="CreatNFTSuccessfullyModal" tabIndex={-1} aria-labelledby="CreatNFTSuccessfullyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mobile-modal-bottom">
               <div className="modal-content border-0">
                  <div className="modal-body">
                     <div className="d-flex align-items-center bg-soft rounded p-2 mb-4">
                        <img className="rounded image-80x80" src="./assets/img/item-details-image.jpg" alt="Tergo Cat" />
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
                           <span className="d-block text-truncate ms-auto" style={{ maxWidth: '150px' }}>
                              EQDZr7KDKG0R4Kyauz-iRetnuY7nMKXFIEQn4-44vzygNEvj
                           </span>
                        </li>
                     </ul>
                     <h4 className="fs-18 text-center mb-3">Let's show-off a little</h4>
                     <div className="libermall__soclinks justify-content-center mb-5 p-2 border rounded">
                        <a href="#!" className="libermall__soclinks-item ms-0"><i className="fa-brands fa-telegram" /></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-discord" /></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-instagram" /></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-linkedin-in" /></a>
                        <a href="#!" className="libermall__soclinks-item"><i className="fa-brands fa-reddit-alien" /></a>
                     </div>
                     <div>
                        <button className="btn btn-primary w-100 mb-2" data-bs-dismiss="modal" aria-label="Close">View NFT</button>
                        <button className="btn btn-secondary w-100" data-bs-dismiss="modal" aria-label="Close">Create another</button>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
      </div >
   )
}
