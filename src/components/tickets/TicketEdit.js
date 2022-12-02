import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'

export const TicketEdit = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })

    const { ticketId } = useParams()
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
    }, [feedback])

     // TODO: Get ticket objectfrom API and update state
     useEffect(() => {
        fetch(`http://localhost:8088/serviceTickets?id=${ticketId}`)
        .then(response => response.json())
        .then((data) => {
            const ticketObject = data[0]
            updateTicket(ticketObject)
        }) 
    },
    []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
       fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(ticket)
       })
       .then(() => {
        setFeedback("Ticket information successfully updated")
    })
        .then(() => {
            setTimeout(() => navigate("/tickets"), 4000);
            
        })
            
    }

    return <><div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        <form className="ticketForm">
            <h2 className="ticketForm__title">Update Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        value={ticket.description}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                updateTicket(copy)
                            }
                        }>{ticket.description}</textarea>
                        
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                updateTicket(copy)
                            }

                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Update Ticket
            </button>
        </form>
        </>
}