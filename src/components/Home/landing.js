import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SERVER_URL= process.env.REACT_APP_SERVER_URL;

// components

export default function HomeSetting() {
    const navigate = useNavigate();
    const [hero,setHero] = useState({});
    const [cta,setCTA] = useState({});
    const [info,setInfo] = useState({});
    const [showcase,setShowcase] = useState({});

    const saveShowcase = async (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const {data:response} = await axios.post(`${SERVER_URL}/showcase/1`,formData,{
        headers:{
          "content-type":"mutlipart/formdata"
        }
      });
      if(response.error){
        console.log(response.error);
        return;
    }
    if(!response.success){
        console.log(response.message);
        return;
    }
    return navigate("/admin/dashboard");

    }

    const fetchShowcase = async ()=>{
      const {data:response} = await axios.get(`${SERVER_URL}/showcase/1`);
    
      if(response.error){
        console.log(response.error);
        return;
      }
      if(!response.success){
        console.log(response.error);
        return;
      }
      setShowcase(response.data);
      return;
    }

    const fetchInfo = async()=>{
      const {data:response} = await axios.get(`${SERVER_URL}/info/1`);
    
      if(response.error){
        console.log(response.error);
        return;
      }
      if(!response.success){
        console.log(response.error);
        return;
      }
      setInfo(response.data);
      return;
    }

    const saveInfo = async (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const {data:response} = await axios.post(`${SERVER_URL}/info/edit/1`,formData,{
        headers:{
          "content-type":"mutlipart/formdata"
        }
      });
      if(response.error){
        console.log(response.error);
        return;
    }
    if(!response.success){
        console.log(response.message);
        return;
    }
    return navigate("/admin/dashboard");
    }

    const fetchCTA = async()=>{
      const {data:response} = await axios.get(`${SERVER_URL}/cta/1`);
    
        if(response.error){
          console.log(response.error);
          return;
        }
        if(!response.success){
          console.log(response.error);
          return;
        }
        setCTA(response.data);
        return;
    }

    const saveCTA = async (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const {data:response} = await axios.post(`${SERVER_URL}/cta/edit/1`,formData,{
        headers:{
          "content-type":"mutlipart/formdata"
        }
      });
      if(response.error){
        console.log(response.error);
        return;
    }
    if(!response.success){
        console.log(response.message);
        return;
    }
    return navigate("/admin/dashboard");
      
    }

    const saveHero = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const {data:response} = await axios.post(`${SERVER_URL}/hero/edit/1`,formData,{
          headers:{
            "content-type":"multipart/formdata"
          }
        });

        if(response.error){
            console.log(response.error);
            return;
        }
        if(!response.success){
            console.log(response.message);
            return;
        }
        return navigate("/admin/dashboard");
    }

    const fetchHero = async ()=>{
        const {data:response} = await axios.get(`${SERVER_URL}/hero/1`);
    
        if(response.error){
          console.log(response.error);
          return;
        }
        if(!response.success){
          console.log(response.error);
          return;
        }
        setHero(response.data);
        return;
      }
    useEffect(()=>{
        fetchCTA();
        fetchHero();
        fetchInfo();
        fetchShowcase();
    },[]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Landing Page</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={saveHero}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Hero Section
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Hero Title
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="headline"
                    defaultValue={ hero.headline}
                    onChange={e=>setHero({...hero,headline:e.target.value})}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Hero Paragraph
                  </label>
                  <textarea
                    type="text"
                    name="subText"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={hero.subText}
                    onChange={(e)=>setHero({...hero,subText:e.target.value})}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Hero Background Image
                  </label>
                  <input
                  name="bgImage"
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save Changes
            </button>
            </div>
          </form>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Call To Action
            </h6>
            <form onSubmit={saveCTA}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="title"
                    onChange={(e)=>setCTA({...cta,title:e.target.value})}
                    defaultValue={cta.title}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Paragraph
                  </label>
                  <textarea
                    type="text"
                    name="paragraph1"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={cta.paragraph1}
                    onChange={(e)=>setCTA({...cta,paragraph1:e.target.value})}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Paragraph
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="paragraph2"
                    defaultValue={cta.paragraph2}
                    onChange={(e)=>setCTA({...cta,paragraph2:e.target.value})}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Call To Action Link Title
                  </label>
                  <input
                    type="text"
                    name="ctaLinkTitle"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setCTA({...cta,ctaLinkTitle:e.target.value})}
                    defaultValue={cta.ctaLinkTitle}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Call To Action Link
                  </label>
                  <select onChange={e=>setCTA({...cta,ctaLink:e.target.value})} name="ctaLink">
                    <option value={"/register"}>Register</option>
                    <option value={"/contact"}>Contact Us</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Section Headline
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="sectionHeadline"
                    onChange={(e)=>setCTA({...cta,sectionHeadline:e.target.value})}
                    defaultValue={cta.sectionHeadline}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Section Paragraph
                  </label>
                  <textarea
                    name="sectionParagraph"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={cta.sectionParagraph}
                    onChange={(e)=>setCTA({...cta,sectionParagraph:e.target.value})}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Section Image
                  </label>
                  <input
                    type="file"
                    name="sectionImage"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save Changes
            </button>
            </div>
            </form>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Info Section
            </h6>
            <form onSubmit={saveInfo}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Headline
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="headline"
                    onChange={(e)=>setInfo({...info,headline:e.target.value})}
                    defaultValue={info.headline}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Paragraph Text
                  </label>
                  <textarea
                    type="text"
                    name="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={info.text}
                    onChange={e=>setInfo({...info,text:e.target.value})}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Info Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save Changes
            </button>
            </div>
            </form>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Showcase Section
            </h6>
            <form onSubmit={saveShowcase}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Headline
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="headline"
                    onChange={(e)=>setShowcase({...showcase,headline:e.target.value})}
                    defaultValue={showcase.headline}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Showcase Title
                  </label>
                  <input
                    type="text"
                    name="item1Title"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item1Title:e.target.value})}
                    defaultValue={showcase.item1Title}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Showcase Text
                  </label>
                  <input
                    name="item1Subject"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item1Subtext:e.target.value})}
                    defaultValue={showcase.item1Subtext}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Showcase Image
                  </label>
                  <input
                    type="file"
                    name="item1Image"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Showcase Title
                  </label>
                  <input
                    type="text"
                    name="item2Title"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item2Title:e.target.value})}
                    defaultValue={showcase.item2Title}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Showcase Text
                  </label>
                  <input
                    type="text"
                    name="item2Subtext"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item2Subtext:e.target.value})}
                    defaultValue={showcase.item2Subtext}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Showcase Image
                  </label>
                  <input
                    type="file"
                    name="item2Image"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Third Showcase Title
                  </label>
                  <input
                    name="item3Title"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item3Title:e.target.value})}
                    defaultValue={showcase.item3Title}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Third Showcase Text
                  </label>
                  <input
                    type="text"
                    name="item3Subtext"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setShowcase({...showcase,item3Subtext:e.target.value})}
                    defaultValue={showcase.item3Subtext}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Third Showcase Image
                  </label>
                  <input
                    name="item3Image"
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save Changes
            </button>
            </div>
            </form>
        </div>
      </div>
    </>
  );
}

