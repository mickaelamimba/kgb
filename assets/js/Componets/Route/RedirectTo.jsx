import {Redirect} from "react-router-dom";

const RedirectTo = (toRoute)=>{
    return(
        <Redirect from="*" to={toRoute} />
    )
}
export default RedirectTo