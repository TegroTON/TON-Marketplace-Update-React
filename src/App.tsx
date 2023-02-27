import React, { useEffect } from 'react'

import {
    AppRoot,
    SplitLayout,
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    PanelHeaderButton,
    Div,
    FormItem,
    Input,
    Snackbar,
    ScreenSpinner
} from '@vkontakte/vkui'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import {
    Icon24Dismiss, Icon28CancelCircleFillRed, Icon28CheckCircleFill} from '@vkontakte/icons'
import { VldBuilder, vlds } from 'validatorus-react'


import { Main } from './pages/main'
import { Explore } from './pages/explore'
import { Rankings } from './pages/rankings'
import { Collection } from './pages/collection'
import { User1 } from './pages/user1'
import { SuccessfullyPut } from './pages/successfully-put'
import { CreateNft } from './pages/create-nft'
import { NotFound404 } from './pages/404'
import { EditProfile } from './pages/edit-profile'
import { CollectionItem } from './pages/collection-item'
import { Profile } from './pages/profile'

import { HeaderBlock } from './layout/header'
import { FooterBlock } from './layout/footer'

import { Modals } from './block/modal'
import { DeLabAddress, DeLabConnect, DeLabConnecting, DeLabEvent, DeLabNetwork, DeLabTypeConnect } from '@delab-team/connect'

const DeLabConnector = new DeLabConnect('https://example.com', 'Libermall', 'mainnet')

export const App: React.FC = () => {
    const [ activeModal, setActiveModal ] = React.useState<any>(null)

    const [ snackbar, setSnackbar ] = React.useState<any>(null)

    const [ popout, setPopout ] = React.useState<any>(null)

    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const [ DelabLink, setDelabLink ] = React.useState<string>('')


    const [ isConnected, setIsConnected ] = React.useState<boolean>(false)
    const [ address, setAddress ] = React.useState<DeLabAddress>(undefined)
    const [ network, setNetwork ] = React.useState<DeLabNetwork>('mainnet')
    const [ typeConnect, setTypeConnect ] = React.useState<DeLabTypeConnect>(undefined)

    const isDesktop = window.innerWidth >= 1200

    const location = useLocation()

    const history = useNavigate()

    function openPop () {
        setPopout(<ScreenSpinner state="loading" />)
    }

    function closePop (type: boolean) {
        if (type) setPopout(<ScreenSpinner state="done" aria-label="Success" />)
        else setPopout(<ScreenSpinner state="error" aria-label="Error" />)

        setTimeout(() => {
            setPopout(null)
        }, 1000)
    }

    const input = new VldBuilder()
        .with(vlds.VLen, 4, 128)
        .withFname('Merchant name')



    function consoleLog (data: string, type:boolean = false) {
        setSnackbar(
            <Snackbar
                before={
                    type ? <Icon28CheckCircleFill /> : <Icon28CancelCircleFillRed />
                }
                onClose={() => setSnackbar(null)}
            >
                {data}
            </Snackbar>
        )
    }

    function openLink (url: string) {
        const link2 = document.createElement('a')
        link2.href = url
        link2.target = '_blank'
        link2.click()
    }

    function regListen () {
        DeLabConnector.on('link', (data: DeLabEvent) => {
            setDelabLink(data.data ?? '')
            // setType(1)

            console.log('link', data.data)

            const typeWallet = data.data.indexOf('tonhub') > -1
            // if (!isDesktop) 
            openLink(data.data)

            // const tonconnectImg = props.DeLabConnectObject.tonConnectWallet?.imageUrl

            // qrCode.update({
            //     data: data.data,
            //     image: typeWallet ? tonhubLogo : tonkeeperLogo
            // })
        })

        DeLabConnector.on('connected', () => {
            // setIsOpenModal(false)
            // setType(0)
            setDelabLink('')
            document.querySelector('#ConnectModal')?.setAttribute('style', '')
        })

        DeLabConnector.on('connect', (data: DeLabEvent) => {
            setIsConnected(true)
            const connectConfig: DeLabConnecting = data.data
            setAddress(connectConfig.address)
            setTypeConnect(connectConfig.typeConnect)
            setNetwork(connectConfig.network)

            // document.querySelector('#ConnectModal')?.setAttribute('style', '')
            // document.querySelector('.modal-backdrop')?.setAttribute('style', 'display: none')

            const bthClose = document.querySelector('button.modal-close') as HTMLElement;
           
            bthClose.click()
            
            
        })

        DeLabConnector.on('disconnect', () => {
            setIsConnected(false)
            setAddress(undefined)
            setTypeConnect(undefined)
            setNetwork('mainnet')
            console.log('disconect')
        })
    }

    function openModalConnect () {
        DeLabConnector.openModal()
    }

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)

            regListen()

        }
    }, [])

    function installScripts () {
        document.querySelectorAll('script-del').forEach((el) => el.remove())

        const script1 = document.createElement('script')
        const script2 = document.createElement('script')
        const script3 = document.createElement('script')
        const script4 = document.createElement('script')

        script1.setAttribute('src', '/assets/js/popper.min.js')
        script2.setAttribute('src', '/assets/js/slick.min.js')
        script3.setAttribute('src', '/assets/js/app.js')
        script4.setAttribute('src', '/assets/js/bootstrap.min.js')

        script1.setAttribute('class', 'script-del')
        script2.setAttribute('class', 'script-del')
        script3.setAttribute('class', 'script-del')
        script4.setAttribute('class', 'script-del')

        
        // document.querySelector('body')?.appendChild(script1)

        // document.querySelector('body')?.appendChild(script4)

        document.querySelector('body')?.appendChild(script2)
        document.querySelector('body')?.appendChild(script3)
        

        console.log('install')
    }


    useEffect(() => {
        // installScripts()
    }, [ location.pathname ])


    useEffect(() => {
        input.reset(true, true)
    }, [ activeModal ])

    const modalRoot = (
        <ModalRoot activeModal={activeModal} >
            <ModalPage
                id={'create_merchant'}
                className="polus"
                onClose={() => setActiveModal(null)}
                dynamicContentHeight
                // settlingHeight={100}
                header={
                    <ModalPageHeader
                        after={
                            !isDesktop && (
                                <PanelHeaderButton onClick={() => setActiveModal(null)}>
                                    <Icon24Dismiss />
                                </PanelHeaderButton>
                            )
                        }
                    >
                  New merchant
                    </ModalPageHeader>
                }
            >
                <Div>
                    <FormItem
                        top="Merchant name"
                        bottom={input.error}
                    >
                        <Input
                            type="text"
                            placeholder='Company name'
                            value={input.value}
                            onChange={(e) => { input.change(e.target.value) }}
                            status={input.iserr}
                        />
                    </FormItem>
                   
                  
                </Div>
            </ModalPage>
        </ModalRoot>
    )

    return (
        <AppRoot>
            <SplitLayout
                className="polus"
                style={{ justifyContent: 'center' }}
                modal={modalRoot}
                popout={popout}
                // header={isDesktop
                //     && <PanelHeader separator={false} className="delab-header" />
                // }
                // header={
                //     <HeaderBlock />
                // }
            >
                <HeaderBlock 
                openModalConnect={openModalConnect}
                address={address}
                DelabObject={DeLabConnector}
                 />
           

                <Routes>
                    <Route path="/" element={
                            <Main
                                id="main1"
                                setActiveModal={setActiveModal}
                                consoleLog={consoleLog}
                                isDesktop={isDesktop}
                                installScripts={installScripts}
                            />
                    } />
                    <Route path="/explore" element={
                            <Explore
                                id="explore1"
                                setActiveModal={setActiveModal}
                                consoleLog={consoleLog}
                                isDesktop={isDesktop}
                                installScripts={installScripts}
                            />
                    } />
                    <Route path="/rankings" element={
                            <Rankings
                                id="rankings1"
                                setActiveModal={setActiveModal}
                                consoleLog={consoleLog}
                                isDesktop={isDesktop}
                                installScripts={installScripts}
                            />
                    } />
                     <Route path="/collection" element={
                            <Collection
                                id="collection1"
                                setActiveModal={setActiveModal}
                                consoleLog={consoleLog}
                                isDesktop={isDesktop}
                                installScripts={installScripts}
                            />
                    } />

                    <Route path="/user1" element={
                            <User1
                                id="user1"
                                setActiveModal={setActiveModal}
                                consoleLog={consoleLog}
                                isDesktop={isDesktop}
                                installScripts={installScripts}
                            />
                    } />

                    <Route path="/successfully-put" element={
                                <SuccessfullyPut
                                    id="successfully-put1"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />

                    <Route path="/create-nft" element={
                                <CreateNft
                                    id="create-nft1"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />

                   
                    <Route path="/edit-profile" element={
                                <EditProfile
                                    id="edit-profile1"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />

                    <Route path="/collection-item" element={
                                <CollectionItem
                                    id="collection-item1"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />

                    <Route path="/profile" element={
                                <Profile
                                    id="profile1"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />



                    <Route path="/404" element={
                                <NotFound404
                                    id="4041"
                                    setActiveModal={setActiveModal}
                                    consoleLog={consoleLog}
                                    isDesktop={isDesktop}
                                    installScripts={installScripts}
                                />
                        } />

                    

                </Routes>

                <FooterBlock />

                <Modals 
                    id="modals"
                    setActiveModal={setActiveModal}
                    consoleLog={consoleLog}
                    isDesktop={isDesktop}
                    installScripts={installScripts}
                    DelabObject={DeLabConnector}
                    DelabLink={DelabLink}
                />
                    
                {snackbar}
            </SplitLayout>
        </AppRoot>
    )
}
