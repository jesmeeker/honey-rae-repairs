import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export const CustomerDetails = () => {
    const {customerId} = useParams()
    // This variable is passed from the route that was set up. useParams is pulling that object and deconstructing it here

    const [customer, updateCustomer] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&id=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="customer">
    <header className="customer__header">{customer?.user?.fullName}</header>
    <div>Email: {customer?.user?.email}</div>
    <div>Phone: {customer?.phoneNumber}</div>
    <div>Address: {customer?.address}</div>
    </section>
}