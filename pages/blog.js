import React, { useEffect, useState } from 'react'
// import styles from '@/styles/Home.module.css'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
import * as fs from 'fs';

const Blog = (props) => {
  const [count, setCount] = useState(2)
  const [blogs=([]), setBlogs] = useState(props.allBlogs)
  const fetchData = async() => {
    let d=await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setCount(count+2)
    let data=await d.json()
    setBlogs(data)    
    
  };
//   useEffect(()=>{
//     console.log('use effect is working')
//     fetch("http://localhost:3000/api/blogs").then((a)=>{
//       return a.json();})
//       .then((parse)=>{
// setBlogs(parse)
//     })
//   },[])
  
return <div className={styles.blogs}>
      <main className={styles.main}>
      <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount!==blogs.length}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
{blogs?.map((blogitem)=>{
          
           return <div key={blogitem.slug} className={styles.blogitems}>
              <Link href={`/blogpost/${blogitem.slug}`}>
           <h2 className={styles.blogitemsh2}>{blogitem.title}</h2></Link>
              <p className={styles.blogitemsp}>{blogitem.metadesc.substr(0, 140)}...</p>
              <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read more</button></Link>

            </div>
          })}
          
          

</InfiniteScroll>
        
          
          </main>
          </div>
                  
};

export async function getStaticProps(context) {
let data=await fs.promises.readdir("blogdata")
let allCount = data.length
  let myfile;
    let allBlogs=[]
  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    console.log(items)
    myfile= await fs.promises.readFile(("blogdata/" +items),'utf-8')
      
      allBlogs.push(JSON.parse(myfile))

  }
    
  
  return {
    props: {allBlogs,allCount}, // will be passed to the page component as props
  }
}
        

export default Blog;
