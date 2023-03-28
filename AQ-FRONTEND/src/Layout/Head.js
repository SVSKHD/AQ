import {Helmet} from "react-helmet"
const AquaSeohead = (props) =>{
return(
    <>
    <Helmet>
        <title>{props.title}</title>
    </Helmet>
    </>
)
}
export default AquaSeohead