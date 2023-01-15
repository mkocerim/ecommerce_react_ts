import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { ProductType } from "../../types";
import {useState} from "react"

export type RouteParamsCode={
    category_code:string
}



function CategoryDetailsPage(){
    const routeParams = useParams<RouteParamsCode>()
    console.log('>>>ROUTE PARAMS', routeParams)

    const [products,setProducts]=useState<ProductType[]>([])
    const [initialized,setInitialized]= useState<boolean>(false)

    const api= useApi()
    
    if(initialized===false){
        const params= {
            'productTaxon.taxon.code':routeParams.category_code
        }
        api.get<ProductType[]>('/shop/products',{params})
    
        .then((response:AxiosResponse<ProductType>)=>{
        
            console.log('>>>SHOP PRODUCT RESP',response)
            setProducts(response.data)
            setInitialized(true)
        })

    }

    
    return(
        <div>
            LOADING....        
        </div>
    )
}
export default CategoryDetailsPage