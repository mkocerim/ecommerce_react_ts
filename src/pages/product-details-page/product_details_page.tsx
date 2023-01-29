import { useParams } from "react-router-dom";
import Breadcrumb, {
  BreadcrumbItemType,
} from "../../components/breadcrumb/breadcrumb";

import { ChangeEvent, useState } from "react";
import {
  CartType,
  ProductImageType,
  ProductType,
  ProductVariantType,
} from "../../types";

import styles from "./product_details.module.css";
import useApi from "../../hooks/useApi";
import { AxiosResponse } from "axios";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { useDispatch } from "react-redux";
import { CartStateType, setCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import ProductPrice from "../category-details-page/components/product-item/product-price/product_price";

export type RouteParamsType = {
  product_code: string;
};

export default function ProductDetailsPage() {
  const routeParams = useParams<RouteParamsType>();
  const cartState: CartStateType = useSelector(
    (state: RootStateType) => state.cart
  );

  const api = useApi();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [variants, setVariants] = useState<ProductVariantType[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);

  //baska bir state baglı state, variant state degiştikce bu state de degişikliğe ugrar
  // const [selectedVariant, setSelectedVariant] =useState<ProductVariantType | null>(null);

  const [selectedVariantCode, setSelectedVariantCode] = useState<string | null>(
    null
  );

  const dispatch = useDispatch();

  function onFormSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues: any = Object.fromEntries(formData.entries());
    formValues.quantity = parseInt(formValues.quantity);

    console.log(">>FORM VALUE", formValues);

    const tokenValue = cartState.cart?.tokenValue;

    api
      .post<CartType>(`shop/orders/${tokenValue}/items`, formValues)
      .then((response: AxiosResponse<CartType>) => {
        console.log(">>>ADD ITEM CART RESP", response);

        dispatch(setCart(response.data));
      });
  }

  //bu bölge senkron

  if (initialized === false) {
    // api ile ürün bilgilerini al

    /* asenkron yapmanın iki yolu vardır. bunlarda 

birincisi

async function getApiData(){
        
bu bölge asenkron
    
}

getApiData()

ikincisi
immediate call function
bu bölgede await ile istedigim kadar api çagrısı yapabiliriz

(async()=>{
setInitialized(true)
})()
*/
    (async () => {
      const productResponse: AxiosResponse<ProductType> =
        await api.get<ProductType>("shop/products/" + routeParams.product_code);
      console.log(">>PRODUCT RESPONSE RESP DATA", productResponse.data);

      //variantları 2 şekilde alabiliriz
      //birincisi for döngüsü  verimsiz bir yöntem

      //   for (let i = 0; i < productResponse.data.variants.length; i++) {
      //     let variant = productResponse.data.variants[i];
      //     variant = variant.substring("/api/v2/".length);

      //     let variantResponse = await api.get<ProductVariantType>(variant);

      //     console.log(">>VARIANT RESPONSE RESP DATA", variantResponse.data);
      //   }

      let promises: Promise<any>[] = [];

      //promise.all dizi döndürür. tüm verileri önce bir diziye atarız sonra o diziyi promise.al atadıgımızda hepsine bir seferde istek atar

      promises = productResponse.data.variants.map((variant: string) => {
        variant = variant.substring("/api/v2/".length);
        return api.get<ProductVariantType>(variant);
      });

      let promiseValue: AxiosResponse<ProductVariantType>[] = await Promise.all(
        promises
      );

      console.log("PROMISE VALUE", promiseValue);

      const apiVariants: ProductVariantType[] = promiseValue.map(
        (item: AxiosResponse<ProductVariantType>) => item.data
      );

      console.log(">>>API VARIANTS", apiVariants);

      setProduct(productResponse.data);
      setVariants(apiVariants);
      setSelectedVariantCode(apiVariants[0].code);

      setInitialized(true);
    })();

    //     api.get<ProductType>('shop/products/' + routeParams.product_code)
    //   .then((response:AxiosResponse<ProductType>)=>{
    //         console.log('>>PRODUCT DETAILS<< RESP',response.data)
    //         setProduct(response.data)

    //         response.data.variants.map((variant:string)=>{

    //              variant= variant.substring('/api/v2'.length)
    //              console.log('VARIANT',variant)

    //              api.get(variant).then((response)=>{

    //                 console.log('>>VARIANT RESP',response)

    //             })
    //         })

    //         setInitialized(true)
    //   })

    return (
      <>
        <div>LOADING...</div>
      </>
    );
  }

  const selectedVariant: ProductVariantType | undefined = variants.find(
    (item: ProductVariantType) => item.code === selectedVariantCode
  );

  console.log(">>VARIANTS", variants);
  console.log(">>PRODUCT", product);

  //örnek ürün variant bilgisi
  //

  const images: ReactImageGalleryItem[] = [];

  product?.images.map((item: ProductImageType, index: number) => {
    images.push({
      original: "https://ecommerce-api.udemig.dev/" + item.path,
      thumbnail: "https://ecommerce-api.udemig.dev/" + item.path,
    });
  });

  const breadcrumbItems: BreadcrumbItemType[] = [
    { title: "Home", url: "/" },
    { title: "Category", url: "/category-details" },
    { title: routeParams.product_code as string },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* {routeParams.product_code} */}
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                {/* product-description */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <ImageGallery items={images} />

                      {/* <img src={'https://ecommerce-api.udemig.dev'+ product?.images[0].path}/> */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="product-single">
                        <h2>{product?.name}</h2>
                        <div className="product-rating">
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star-o" />
                          </span>
                          <span className="text-secondary">
                            &nbsp;(4.8 Review Stars)
                          </span>
                        </div>
                        <p className={"product-price " + styles.product_price}>
                          <ProductPrice
                            variant={selectedVariant as ProductVariantType}
                          />
                        </p>
                        <p>{product?.shortDescription}</p>

                        <form onSubmit={onFormSubmit}>
                          <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                              <div className="product-quantity">
                                <h5>Quantity</h5>
                                <div className="quantity mb20">
                                  <input
                                    type="number"
                                    className="input-text qty text"
                                    step={1}
                                    min={1}
                                    max={6}
                                    name="quantity"
                                    defaultValue={1}
                                    title="Qty"
                                    size={4}
                                    pattern="[0-9]*"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                              <div className="product-quantity">
                                <h5>Variants</h5>
                                <div className="quantity mb20">
                                  <select
                                    className="input-text full-width"
                                    name={"productVariant"}
                                    onChange={(
                                      event: ChangeEvent<HTMLSelectElement>
                                    ) => {
                                      setSelectedVariantCode(
                                        event.target.value as string
                                      );
                                    }}
                                  >
                                    {variants.map(
                                      (variant: ProductVariantType, index) => {
                                        return (
                                          <option
                                            value={variant.code}
                                            key={index}
                                          >
                                            {variant.name
                                              ? variant.name
                                              : variant.code}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button type="submit" className="btn btn-default">
                            <i className="fa fa-shopping-cart" />
                            &nbsp;Add to cart
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
