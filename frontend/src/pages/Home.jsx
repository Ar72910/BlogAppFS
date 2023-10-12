import React, { useEffect, useState } from 'react'
import HomePosts from '../components/HomePosts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {URL} from '../url'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader';

const Home = () => {

  const {search} = useLocation();
  // console.log(search);

  const [post, setPost] = useState([]);
  const [noResults,setNoResults] = useState(false)
  const [loader,setLoader] = useState(false);
  const fetchPosts = async()=>{
    setLoader(true)
   
    try{
      // const res = await axios.get(URL+"/api/posts/");
      const res = await axios.get(URL+"/api/posts/" + search);
      setPost(res.data);
      if(res.data.length == 0){
        setNoResults(true)

      }else{
        setNoResults(false)
        
      }
      setLoader(false);
    }
    catch(err){
      console.log(err);
      setLoader(true);

    }
  }
  useEffect(()=>{
    fetchPosts();
  },[search])
  return (
    <>
    <Navbar/>
    <div className='px-8 md:px-[200px]'>
      {loader?<div className='h-[40vh] flex justify-center items-center'><Loader/></div>:!noResults?post.map((post)=>(
        <HomePosts key= {post._id} post={post}/>

      )):<h3 className='text-center font-bold mt-16'>No post avilable</h3>}
        
      {/* <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/> */}

    </div>
    
    </>
  )
}

export default Home