import { Link } from "react-router-dom"

export const Customer = ({ id, fullName, address, phone}) => {
    return <section className="customer">
    <div>
        <Link to={`/customers/${id}`}>Name: {fullName}</Link>
    </div>
    <div>Address: {address}</div>
    <div>Phone: {phone}</div>
</section>
}