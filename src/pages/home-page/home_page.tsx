import { SplideSlide, Splide } from "@splidejs/react-splide";
import ProductContainer from "./components/product_container";

function HomePage() {
  return (
    <>
      <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "5rem",
          type: "loop",
          height: "500px",
        }}
        arial-label="My Favorite Images"
      >
        <SplideSlide>
          <img
            src="https://ecommerce-template.udemig.dev/images/slider_1.jpg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://ecommerce-template.udemig.dev/images/slider_2.jpg"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://ecommerce-template.udemig.dev/images/slider_3.jpg"
            alt="Image 3"
          />
        </SplideSlide>
      </Splide>

      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img src="images/nexus.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="showcase-block active">
                <div className="display-logo alignleft">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/iphone.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_2.png"
                      alt=""
                      style={{ paddingLeft: "80px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block ">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/samsung.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_3.png"
                      alt=""
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img
                      src="https://ecommerce-template.udemig.dev/images/htc.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_4.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/alcatel.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_5.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img
                      src="https://ecommerce-template.udemig.dev/images/pixel.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_6.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {" "}
                    <img
                      src="https://ecommerce-template.udemig.dev/images/vivo.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="https://ecommerce-template.udemig.dev/images/display_img_7.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <ProductContainer count={6} products={[]}  title={"Latest Product"}/>
        <ProductContainer count={4} products={[]}  title={"Best Seller Products"}/>
        <ProductContainer count={3} products={[]}  title={"Poupuler Products"}/>
        <ProductContainer count={2} products={[]}  title={"Featured Products"}/>
        <ProductContainer count={1} products={[]}  title="Product"/>


     
    </>
  );
}

export default HomePage;
