import React, { useContext } from "react";
//?Import Products Context
import { ProductContext } from "../contexts/ProductContext";
//?Import Components
import Product from "../components/Product";
import Hero from "../components/Hero";
//?Import Img for card
import imageCard from "../img/cardaboutus.jpg";
import wantCard from "../img/wantcard.jpg";
import parallax2 from "../img/pexels2.jpg";
//?Import Parallax
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const parallaxStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%,-50%)",
};

const Home = () => {
  //?Get productos from productosContext
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {filteredProducts.map((product) => {
              //TODO KEY = special string attribute, are use to identify which items in list are changedwe can say that keys are used to give an identity to the elements in the lists
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      {/*ABOUT SECTION*/}
      <div className="p-0 mb-5 bg-red-300 container mx-auto flex flex-col justify-between items-center md:flex-row lg:flex-row-reverse">
        <img
          className="h-auto object-cover object-center sm:w-full md:h-100 md:w-1/2 lg:w-3/5"
          src={imageCard}
          alt="ecommerce"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 sm:m-2 text-center">
            Who we are?
          </h1>
          <p className="marginStyle font-normal text-white items-center sm:m-2 text-center sm:pb-5">
            We are a new clothing brand that seeks to revolutionize fashionLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
      {/* WEWANT */}
      <div className="p-0 mb-5 bg-red-300  container mx-auto flex flex-col justify-between items-center md:flex-row-reverse lg:flex-row">
        <img
          className="h-auto object-cover object-center sm:w-full md:h-100 md:w-1/2 lg:w-3/5"
          src={wantCard}
          alt="ecommerce"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 sm:m-2 text-center">
            Who we want?
          </h1>
          <p className="marginStyle font-normal text-white items-center sm:m-2 text-center sm:pb-5">
            We are a new clothing brand that seeks to revolutionize fashionLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
      {/*CONCTACT US*/}

      <Parallax
        className="sm:hidden md:block"
        bgImage={parallax2}
        strength={500}
      >
        <div className="h-96">
          <div style={parallaxStyle}>
            <p className="text-3xl text-black font-bold tracking-widest mb-4">
              Suscribe to our newsletter
            </p>
            <form className="items-center absolute left-1/4">
              <input
                className=" p-2 rounded focus:outline-none"
                type="email"
                placeholder="Example@youremail.com"
              ></input>
              <FontAwesomeIcon
                className="text-white text-2xl rounded-2xl p-1 cursor-pointer -mb-1"
                icon={faPaperPlane}
              />
            </form>
          </div>
        </div>
      </Parallax>
      {/* CONTACT */}
      <div className="container max-w-5xl mx-auto m-10 flex flex-row relative overflow-hidden ">
        {/* contact header */}
        <div className="imagen h-96 p-1 bg-amber-500 w-1/4 overflow-hidden relative z-10 flex flex-col justify-around">
          <div className=" bg-orange-300 rounded-full w-24 h-24 absolute -z-10 bottom-12 left-52 overflow-hidden opacity-95 "></div>
          <div className=" bg-yellow-300 rounded-full w-52 h-48 absolute -z-10 -bottom-16 lg:left-64 md:left-52 sm:left-48 overflow-hidden opacity-40 "></div>
          <div className=" bg-yellow-200 rounded-full w-12 h-12 absolute -z-10 -bottom-4 -left-5 overflow-hidden "></div>

          <h5 className="text-center font-bold text-xl uppercase">
            Contact us
          </h5>
          <div className="flex flex-col ">
            <p className="font-semibold text-center">
              Do you have a trouble with a purchase?
            </p>
            <a
              className=" text-center text-blue-800 font-bold underline underline-offset-2"
              href="https://www.google.com/"
            >
              Contact Support
            </a>
          </div>
          <div className="text-center font-medium gap-2 flex flex-col">
            <p>Argentina sales</p>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span>+54 9 1122334455</span>
            </div>

            <p>For other countries fill the form</p>
            <div>
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="forms h-96 bg-red-100 w-3/4 p-12 flex flex-col">
          <form className="mt-8 flex flex-col gap-7">
            <div className=" flex justify-around ">
              <div className=" flex flex-col">
                <label>First Name</label>
                <input
                  className="w-max"
                  type="text"
                  placeholder="First name"
                ></input>
              </div>
              <div className=" flex flex-col">
                <label>Last Name</label>
                <input
                  className="w-max"
                  type="text"
                  placeholder="Last name"
                ></input>
              </div>
            </div>
            <div className=" flex justify-around ">
              <div className=" flex flex-col">
                <label>Email</label>
                <input
                  className="w-max"
                  type="email"
                  placeholder="you@youremail.com"
                ></input>
              </div>
              <div className=" flex flex-col">
                <label>Phone</label>
                <input
                  className="w-max"
                  type="text"
                  placeholder="Your phone"
                ></input>
              </div>
            </div>
            <div className=" flex justify-around ">
              <div className=" flex flex-col -ml-2 w-48">
                <label>Trouble</label>
                <select>
                  <option value={"Cambio"}>Cambio</option>
                  <option value={"asdassd"}>asdassd</option>
                  <option value={"adasd"}>adasd</option>
                  <option value={"cvbcvb"}>cvbcvb</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>
              <div className=" flex flex-col -ml-2  w-48">
                <label>Country</label>
                <select>
                  <option value={"Argentina"}>Argentina</option>
                  <option value={"Chile"}>Chile</option>
                  <option value={"Uruguay"}>Uruguay</option>
                  <option value={"Peru"}>Peru</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
/*   <form className="flex flex-col gap-5 justify-around w-800  border-solid border-2 border-sky-500">
<div className="flex justify-between flex-col">
  <label>First Name</label>
  <input type="text" placeholder="First Name"></input>
  
</div>
<div className="justify-between flex flex-col">
  <label className="">Last Name</label>
  <input type="text" placeholder="Last Name"></input>
</div>
<div className="flex justify-between flex-col">
  <label>First Name</label>
  <input type="text" placeholder="First Name"></input>
</div>
<div className="justify-between flex flex-col">
  <label className="">Last Name</label>
  <input type="text" placeholder="Last Name"></input>
</div>
</form>
<div className="justify-between flex">
  <label>Email</label>
  <input type="email" placeholder="you@youremail.com"></input>
  <label>Phone</label>
  <input type="text" placeholder="Phone"></input>
</div> */

/* <div className="justify-between flex">
  <label>Trouble</label>
  <select>
    <option value={"Cambio"}>Cambio</option>
    <option value={"asdassd"}>asdassd</option>
    <option value={"adasd"}>adasd</option>
    <option value={"cvbcvb"}>cvbcvb</option>
    <option value={"Other"}>Other</option>
  </select>
  <label>Country</label>
  <select>
    <option value={"Argentina"}>Argentina</option>
    <option value={"Chile"}>Chile</option>
    <option value={"Uruguay"}>Uruguay</option>
    <option value={"Peru"}>Peru</option>
    <option value={"Other"}>Other</option>
  </select>
</div> */
