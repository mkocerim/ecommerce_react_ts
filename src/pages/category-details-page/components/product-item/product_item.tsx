import { AxiosResponse } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import { ProductType, ProductVariantType } from "../../../../types";
import ProductPrice from "./product-price/product_price";

export type ProductItemPropsType = {
  productDetails: ProductType;
};

export default function ProductItem(props: ProductItemPropsType) {
  console.log(">>>>PRODUCT ITEM PROPS", props);

  const [variant, setVariant] = useState<ProductVariantType | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  const api = useApi();

  if (initialized === false) {
    api
      .get(props.productDetails.variants[0].substring(8))
      .then((response: AxiosResponse<ProductVariantType>) => {
        console.log(">>>PRODUCT ITEM VARIANT RESP", response);
        setVariant(response.data);
        setInitialized(true);
      });
  }

  return (
    <div className="product-block">
      <div className="product-img">
        <img
          src={
            "https://ecommerce-api.udemig.dev" +
            props.productDetails.images[0].path
          }
        />
      </div>
      <div className="product-content">
        <h5>
          <Link
            to={"/product-details/" + props.productDetails.code}
            className="product-title"
          >
            <strong>{props.productDetails.name}</strong>
          </Link>
        </h5>
        <div className="product-meta">
          {initialized === false ? (
            <> Loading...</>
          ) : (
            <Link to={"/product-details/" + props.productDetails.code}>
              <ProductPrice variant={variant as ProductVariantType} />
            </Link>
          )}
        </div>
        <div className="shopping-btn">
          <Link to="#" className="product-btn btn-like">
            <i className="fa fa-heart" />
          </Link>
          <Link to="#" className="product-btn btn-cart">
            <i className="fa fa-shopping-cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}
