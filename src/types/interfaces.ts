import { DeLabAddress, DeLabConnect } from "@delab-team/connect";

export interface PageProps {
    id: string,
    setActiveModal: Function,
    consoleLog: Function,
    isDesktop: boolean,
    installScripts: Function,
    openModalData: Function,
    address: DeLabAddress,
    DeLabConnector: DeLabConnect
}