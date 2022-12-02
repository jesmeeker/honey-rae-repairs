import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerNav } from "../nav/CustomerNav"
import { EmployeeNav } from "../nav/EmpoyeeNav"




export const ApplicationViews = () => {

	const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
        
    if (honeyUserObject.staff) {
        return <>
            <EmployeeViews />
        </>
    } 
    else {
        return <>
            <CustomerViews />
        </>
    }
}