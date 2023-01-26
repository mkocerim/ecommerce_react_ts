import { useParams } from "react-router-dom"
import Breadcrumb, { BreadcrumbItemType } from "../../components/breadcrumb/breadcrumb"

export type RouteParamsType= {
product_code:string
}





export default function ProductDetailsPage(){

const routeParams=useParams<RouteParamsType>()

const breadcrumbItems: BreadcrumbItemType[]= [
    {title:'Home', url:'/'},
    {title:'Category', url:'/category-details'},
    {title:routeParams.product_code as string}
]




    return(
         <>
                     <Breadcrumb items={breadcrumbItems}/>       

            {routeParams.product_code}
         <div>
            PRODUCT DETAILS PAGE
          
        </div>  
         </>
    )



}