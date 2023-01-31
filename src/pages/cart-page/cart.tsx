import { AxiosResponse } from "axios";
import { ChangeEvent, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppLoodingContext } from "../../components/app-loading/app_loading";
import Breadcrumb, {
  BreadcrumbItemType,
} from "../../components/breadcrumb/breadcrumb";
import useApi from "../../hooks/useApi";
import { refreshCart, setCart } from "../../redux/cartSlice";
import { RootStateType } from "../../redux/store";
import { CartItemType, CartType } from "../../types";

export default function CartPage() {
  const cartState = useSelector((state: RootStateType) => state.cart);
  const appLoadingContextData = useContext(AppLoodingContext);
  const api = useApi();
  const dispatch = useDispatch();

  //   let totalQuantity: number | undefined = 0;
  //   cartState.cart?.items.map((item) => {
  //     if (typeof totalQuantity !== undefined) {
  //       totalQuantity += item.quantity;
  //     }
  //   });

  const totalQuantity: number | undefined = cartState.cart?.items.reduce(
    (currentValue, item: CartItemType) => {
      return currentValue + item.quantity;
    },
    0
  );

  function handleItemDelete(item: CartItemType) {
    console.log("HANDLE ITEM DELETE CALLED");

    appLoadingContextData.setLoading(true);

    api
      .delete(`shop/orders/${cartState.cart?.tokenValue}/items/${item.id}`)
      .then(() => {
        appLoadingContextData.setLoading(false);
        dispatch(refreshCart());
      });
  }

  function handleQuantityChange(item: CartItemType, quantity: number) {
    console.log("HANDLE QUANTITY CHANGE CALL");

    appLoadingContextData.setLoading(true);

    const patchData = { quantity };
    api
      .patch<CartType>(
        `shop/orders/${cartState.cart?.tokenValue}/items/${item.id}`,
        patchData,
        {
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
        }
      )
      .then((response: AxiosResponse<CartType>) => {
        console.log(">>>CART PATCH RESP", response);
        dispatch(setCart(response.data));

        appLoadingContextData.setLoading(false);
      });
  }

  const breadcrumbItems: BreadcrumbItemType[] = [
    { title: "Home", url: "/" },
    { title: "Cart", url: "/cart" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="box">
                <div className="box-head">
                  <h3 className="head-title">
                    My Cart ({cartState.cart?.items.length})
                  </h3>
                </div>
                {/* cart-table-section */}
                <div className="box-body">
                  <div className="table-responsive">
                    <div className="cart">
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th>
                              <span>Item</span>
                            </th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>Quantity</span>
                            </th>
                            <th>
                              <span>Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.cart?.items.map(
                            (item: CartItemType, index) => {
                              return (
                                <tr key={index}>
                                  <td>
                                    <a href="#"></a>
                                    <span>
                                      <a href="#">{item.productName}</a>
                                    </span>
                                  </td>
                                  <td>${item.unitPrice}</td>
                                  <td>
                                    <div className="product-quantity">
                                      <div className="quantity">
                                        <input
                                          type="number"
                                          className="input-text qty text"
                                          step={1}
                                          min={1}
                                          max={10}
                                          name="quantity"
                                          defaultValue={item.quantity}
                                          title="Qty"
                                          size={4}
                                          pattern="[0-9]*"
                                          onChange={(
                                            event: ChangeEvent<HTMLInputElement>
                                          ) => {
                                            const quantity = parseInt(
                                              event.target.value as string
                                            );
                                            console.log("QUANTITY", quantity);
                                            handleQuantityChange(
                                              item,
                                              quantity
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>${item.total}</td>
                                  <th scope="row">
                                    <a
                                      onClick={() => {
                                        handleItemDelete(item);
                                      }}
                                      className="btn-close"
                                    >
                                      <i className="fa fa-times-circle-o" />
                                    </a>
                                  </th>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    {/* /.cart-table-section */}
                  </div>
                </div>
              </div>
              <Link to={"/"} className="btn-link">
                <i className="fa fa-angle-left" /> back to shopping
              </Link>
            </div>
            {/* cart-total */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Price Details</h3>
                </div>
                <div className="box-body">
                  <div className=" table-responsive">
                    <div className="pay-amount ">
                      <table className="table mb20">
                        <tbody>
                          <tr>
                            <th>
                              <span>Price ({totalQuantity} items)</span>
                            </th>
                            <td>${cartState.cart?.itemsTotal}</td>
                          </tr>
                          <tr>
                            <th>
                              <span>Delivery Charges</span>
                            </th>
                            <td>
                              <strong className="text-green">
                                ${cartState.cart?.shippingTotal}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <th>
                              <span className="mb0" style={{ fontWeight: 700 }}>
                                Amount Payable
                              </span>
                            </th>
                            <td style={{ fontWeight: 700, color: "#1c1e1e" }}>
                              ${cartState.cart?.total}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-primary btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.cart-total */}
        </div>
      </div>
    </>
  );
}
