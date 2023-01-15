import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import {useState} from "react"
import { ProductType } from "../../types";

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
        console.log('COMPONENT INITIALIZED')
        const params= {
            'productTaxon.taxon.code':routeParams.category_code
        }
        api.get<ProductType[]>('/shop/products',{params})
    
        .then((response:AxiosResponse<ProductType[]>)=>{
        
            console.log('>>>SHOP PRODUCT RESP',response)
            setProducts(response.data)
            setInitialized(true)
        })
        return(<div>LOADING.... </div>)

    }
    console.log('Prducts BILIGISI ALINDI',products)

    
    return(
        <div>

            CATEGORY DETAILS PAGE

        </div>
    )
}
export default CategoryDetailsPage