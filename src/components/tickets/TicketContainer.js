import { useState } from "react"
import { TicketForm } from "../serviceTickets/TicketForm"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"


export const TicketContainer = () => {

    const [searchTerms, setSearchTerms] = useState("")

    return <>
            <TicketSearch setterFunction={setSearchTerms} />
            <TicketList searchTermState={searchTerms} />
        </>
}