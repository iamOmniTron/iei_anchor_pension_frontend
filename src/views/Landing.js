import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";



const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Landing() {
  const navigate = useNavigate();
  const [hero,setHero] = useState({});
  const [services,setServices] = useState([]);
  const [CTA,setCTA] = useState({});
  const [info,setInfo] = useState({});
  const [reviews,setReviews] = useState([]);
  const [showcase,setShowcase] = useState({});
  const [fullname,setFullname]= useState("");
  const [email,setEmail]= useState("");
  const [message,setMessage] = useState("");

  const fetchShowcase = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/showcase/1`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setShowcase(response.data);
    return;
  }

  const sendMail = async (e)=>{
    e.preventDefault();
    const {data:response} = await axios.post(`${SERVER_URL}/mail`,{fullname,email,message}
    );

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    navigate("/");
  }

  const fetchInfo = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/info/1`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setInfo(response.data);
    return;
  }
  
  const fetchHero = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/hero/1`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setHero(response.data);
    return;
  }

  const fetchCTA = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/cta/1`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setCTA(response.data);
    return;
  }

  const fetchServices = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/services`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setServices(response.data);
    return;
  }

  const fetchReviews = async ()=>{
    const {data:response} = await axios.get(`${SERVER_URL}/reviews`);

    if(response.error){
      console.log(response.error);
      return;
    }
    if(!response.success){
      console.log(response.error);
    }
    setReviews(response.data);
    return;
  }

  useEffect(()=>{
    fetchHero();
    fetchCTA();
    fetchServices();
    fetchInfo();
    fetchReviews();
    fetchShowcase();
  },[])

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${SERVER_URL}/images/${hero.bgImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    {hero.headline}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {hero.subText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-piggy-bank"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{services[0] !== undefined && services[0].linkTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {services[0] !== undefined && services[0].paragraphText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{services[1] !== undefined && services[1].linkTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    {services[1] !== undefined && services[1].paragraphText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{services[2] !== undefined && services[2].linkTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    {services[2] !== undefined && services[2].paragraphText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {CTA !== undefined && CTA.title}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {CTA !== undefined && CTA.paragraph1}
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {CTA !== undefined && CTA.paragraph2}
                </p>
                <Link to={"/register"} className="font-bold text-blueGray-700 mt-8">
                  {CTA !== undefined && CTA.ctaLinkTitle}
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={`${SERVER_URL}/images/coins.jpg`}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {CTA !== undefined && CTA.sectionHeadline}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {CTA !== undefined && CTA.sectionParagraph}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={`${SERVER_URL}/images/${info.image}`}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">{info !== undefined && info.headline}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {info !== undefined && info.text}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                    <a
                href="https://tinyurl.com/mthtpkzf"
                target="_blank"
                rel="noopener noreferrer"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Download
              </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are some of our testimonials</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              {
                reviews !== [] && reviews.map((review,idx)=>{
                  return(
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={idx}>
                <div className="px-6">
                  <div className="pt-6 text-center">

                <p className="mt-2 mb-4 text-blueGray-400">
                  {review.review}
                </p>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      {review.reviewer}
                    </p>
                    <h5 className="text-xl font-bold">{review.occupation}</h5>
                  </div>
                </div>
              </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  {showcase.headline}
                </h2>
                {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  {showcase.item1Title}
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {showcase.item1Subtext}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {showcase.item2Title}
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {showcase.item2Subtext}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {showcase.item3Title}
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {showcase.item3Subtext}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-center">
                      Contact Us
                    </h4>
                    <form onSubmit={sendMail}>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        onChange={e=>setFullname(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                      name="email"
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={e=>setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        onChange={e=>setMessage(e.target.value)}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
