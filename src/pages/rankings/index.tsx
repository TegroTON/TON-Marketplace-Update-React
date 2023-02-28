import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageProps } from '../../types/interfaces'
import { Button, ButtonGroup, Form, InputGroup, Row, Col, Container, Card, Badge, Dropdown, Tabs, Tab, Table } from 'react-bootstrap';

export const Rankings: React.FC<PageProps> = (props: PageProps) => {
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
         <main className="main-page border-top">
            <section className="collections section">
               <Container fluid>
                  <div className="d-flex flex-column flex-sm-row align-items-center mb-5">
                     <h1 className="section__title fs-40 mb-4 mb-sm-0 me-3 me-auto">
                        Collection stats
                     </h1>
                     <ButtonGroup className="btn-group-custom ms-auto">
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4 active">1 Day</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">7 Days</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">30 Days</Button>
                        <Button variant="secondary btn-sm flex-fill px-3 px-lg-4">All time</Button>
                     </ButtonGroup>
                  </div>
                  <Tabs
                     defaultActiveKey="Top"
                     transition={true}
                     id="tab__collection"
                     className="mb-3"
                     variant="pills collections__nav"
                  >
                     <Tab eventKey="Top" title="Top"></Tab>
                     <Tab eventKey="Trending" title="Trending"></Tab>
                  </Tabs>

                  <div className="flex-table">
                     <div className="flex-thead">
                        <div className="flex-th">
                           Collection
                        </div>
                        <div className="flex-th text-end">
                           Volume
                        </div>
                        <div className="flex-th d-none d-lg-block text-end">
                           Change
                        </div>
                        <div className="flex-th d-none d-lg-block text-end">
                           Floor Price
                        </div>
                        <div className="flex-th d-none d-lg-block text-center">
                           Sales
                        </div>
                        <div className="flex-th d-none d-lg-block text-end">
                           Unique Owers
                        </div>
                        <div className="flex-th d-none d-lg-block text-end">
                           Item Listeds
                        </div>
                     </div>
                     <div className="flex-tbody">
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/1.gif" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">Animals Red List</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 680 TON</div>
                              <div className="flex-td__ChangeUp color-green small d-block d-lg-none mt-1">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeUp color-green">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">70.41 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">85</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">59%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">5 861 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">3%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">337 of 9 998</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/1.gif)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/2.gif" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">Ritch Cats</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">2 359 TON</div>
                              <div className="flex-td__ChangeDown color-red small d-block d-lg-none mt-1">-3%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeDown color-red">-3%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">12.64 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">68</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">32%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">6 461 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">1%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">327 of 2 455</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/2.gif)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/3.jpg" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">TON GUYS</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 864 TON</div>
                              <div className="flex-td__ChangeDown color-red small d-block d-lg-none mt-1">-3%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeDown color-red">-3%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">76.64 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">68</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">12%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">2 584 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">7%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">123 of 9 342</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/3.jpg)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/4.gif" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">TON DOODLES</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 680 TON</div>
                              <div className="flex-td__ChangeUp color-green small d-block d-lg-none mt-1">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeUp color-green">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">70.41 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">85</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">59%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">5 861 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">3%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">337 of 9 998</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/4.gif)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/5.jpg" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">METAMORPHOSES</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 680 TON</div>
                              <div className="flex-td__ChangeUp color-green small d-block d-lg-none mt-1">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeUp color-green">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">70.41 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">85</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">59%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">5 861 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">3%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">337 of 9 998</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/5.jpg)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/6.png" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">Dog Metaverse</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 680 TON</div>
                              <div className="flex-td__ChangeUp color-green small d-block d-lg-none mt-1">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeUp color-green">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">70.41 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">85</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">59%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">5 861 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">3%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">337 of 9 998</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/6.png)  no-repeat center center / cover' }} />
                        </a>
                        <a href="/collection" className="card flex-tr p-0 pe-4 flex-row">
                           <div className="flex-td d-flex align-items-center">
                              <div className="flex-td__CollectionImage me-3">
                                 <img src="/assets/img/collections/7.png" className='card-img-collection' style={{ width: '72px', height: '72px' }} />
                              </div>
                              <div className="flex-td__CollectionName">Eggs Wisdom</div>
                              <span className="verified-icon ms-2" />
                           </div>
                           <div className="flex-td text-end">
                              <div className="flex-td__Volume">5 680 TON</div>
                              <div className="flex-td__ChangeUp color-green small d-block d-lg-none mt-1">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__ChangeUp color-green">+22%</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-end">
                              <div className="flex-td__Floor">70.41 TON</div>
                           </div>
                           <div className="flex-td d-none d-lg-block text-center">
                              <div className="flex-td__Sales">85</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Unique">59%</div>
                              <div className="flex-td__Owers color-grey fw-medium fs-14">5 861 owers</div>
                           </div>
                           <div className="flex-td d-none d-xl-block text-end">
                              <div className="flex-td__Listeds">3%</div>
                              <div className="flex-td__ListedsNum color-grey fw-medium fs-14">337 of 9 998</div>
                           </div>
                           <div className="card__blur-bg-hover" style={{ background: 'url(./assets/img/collections/7.png)  no-repeat center center / cover' }} />
                        </a>

                     </div>

                  </div>
               </Container>
            </section>
         </main>
      </div>
   )
}
