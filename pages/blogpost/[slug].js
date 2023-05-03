import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'
import * as fs from 'node:fs';
// import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog)
//   const router=useRouter();

//   useEffect(() => {
//     if (!router.isReady)return
//     const {slug}=router.query
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
//       return a.json();})
//       .then((parse)=>{
// setBlog(parse)
//     })
//   }, [router.isReady])
  
    
  return( 
    <div className={styles.container}>
      <main className={styles.main}>

      <h1 className={styles.h1}> {blog && blog.title}</h1>
      <hr />
      {/* <div className={styles.para}>
        {blog && blog.content}
      </div> */}
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  )
}
  
//   export async function getServerSideProps(context) {
//     // const router=useRouter();
//     // const {slug}=router.query

//       const {slug}=context.query
//       let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
// let myBlog= await data.json()
      
      
    
//     return {
//       props: {myBlog}, // will be passed to the page component as props
//     }
//   }   

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how to learn flask' } }, // See the "paths" section below
      { params: { slug: 'how to learn javascript' } }, // See the "paths" section below
      { params: { slug: 'how to learn nextjs' } } ,// See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below

  };
}

export async function getStaticProps(context) {
    // console.log(context)
    const {slug}=context.params
//     let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
// let myBlog= await data.json()
let myBlog= await fs.promises.readFile(`blogdata/${slug}.json`,"utf-8")
  
  // console.log(req.query.slug)
  // res.status(200).json( JSON.parse(data) )

    
  
  return {
    props: {myBlog:JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}   

export default Slug;
