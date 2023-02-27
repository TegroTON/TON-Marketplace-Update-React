import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { PageProps } from '../../types/interfaces'

export const EditProfile: React.FC<PageProps> = (props: PageProps) => {
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
               <div className="row">
                  <div className="col-12">
                     <div className="bg-soft border p-5 rounded-20 text-center">
                        <button type="button" className="my-5" data-bs-toggle="modal" data-bs-target="#UpdateCoverModal">
                           <i className="fa-regular fa-folder-arrow-up fa-3x mb-3"></i>
                           <div className="fs-20">Update Cover</div>
                        </button>
                     </div>
                     <div className="collection__image ms-auto me-5 mb-4 mt--60">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#UpdateCoverModal">
                        <img src="./assets/img/user-1.svg?v=2" alt="" className="img-fluid rounded-circle" width="120" height="120" />
                        <i className="fa-regular fa-images fa-2x"></i>
                        </button>
                     </div>
                  </div>
                  <div className="col-lg-5 col-xl-4 order-2 order-lg-1 text-center text-lg-start">
                     <div className="px-4 mb-0 mb-lg-4 position-sticky" style={{top: '140px'}}>
                        <img src="./assets/img/verify.jpg?v=2" alt="" className="img-fluid rounded w-100 mb-4" />
                        <h4 className="fw-bold fs-22">Verify your account</h4>
                        <p className="color-grey mb-4">
                           Proceed with verification pocess to get more visibility and gain truston Libermall
                        </p>
                        <a href="" className="btn btn-sm w-100 border">Get Verified</a>
                     </div>
                  </div>
                  <div className="col-lg-7 col-xl-8 order-1 order-lg-2 mb-4 mb-lg-0">
                     <div className="card bg-soft border p-3 p-md-5">
                        <form action="">
                           <div className="mb-4">
                              <label htmlFor="" className="mb-2">Display Name</label>
                              <input type="text" className="form-control" placeholder="Display Name" value="Tegro" />
                           </div>
                           <div className="mb-4">
                              <label htmlFor="" className="mb-2">User Name</label>
                              <div className="input-group mb-2">
                                 <span className="input-group-text">@</span>
                                 <input type="text" className="form-control" placeholder="User Name" />
                              </div>
                              <span className="fs-14 color-grey">Libermall.io/</span>
                           </div>
                           <div className="mb-4">
                              <label htmlFor="" className="mb-2">Short bio</label>
                              <div className="form-floating">
                                 <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                                 <label htmlFor="floatingTextarea2">Tell about yourself in a few words</label>
                              </div>
                           </div>
                           <div className="mb-5">
                              <label htmlFor="" className="mb-1">Email</label>
                              <span className="d-block mb-2 fs-14 color-grey">Your email for marketplace notifications</span>
                              <div className="input-group">
                                 <input type="text" className="form-control" placeholder="Enter your email" />
                                 <span className="input-group-text">
                                 <a href="#!" className="fw-medium">Confirm</a>
                                 </span>
                              </div>
                           </div>
                           <div className="mb-5">
                              <h4 className="fs-20">Social links</h4>
                              <p className="mb-4 color-grey">
                                 Add your existing social links to build a stronger reputation
                              </p>
                              <div className="mb-4">
                                 <label htmlFor="" className="mb-2">Website URL</label>
                                 <input type="text" className="form-control" placeholder="https://" />
                              </div>
                              <div className="mb-4">
                                 <label htmlFor="" className="mb-2">Twitter</label>
                                 <div className="input-group">
                                    <span className="input-group-text"><i className="fa-brands fa-twitter"></i></span>
                                    <input type="text" className="form-control" placeholder="Enter your Twitter username" />
                                    <span className="input-group-text">
                                    <a href="#!" className="fw-medium">Link</a>
                                    </span>
                                 </div>
                              </div>
                              <div className="mb-0">
                                 <label htmlFor="" className="mb-2">Instagram</label>
                                 <div className="input-group">
                                    <span className="input-group-text"><i className="fa-brands fa-instagram"></i></span>
                                    <input type="text" className="form-control" placeholder="Enter your Instagram username" />
                                    <span className="input-group-text">
                                    <a href="#!" className="fw-medium">Link</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <button type="button" className="btn btn-sm btn-primary">Save settings</button>
                        </form>
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
