// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from 'node:console';
import * as fs from 'node:fs';
export default async function handler(req, res) {
  let data=await fs.promises.readdir("blogdata")
  data=data.slice(0,parseInt(req.query.count))
  console.log(req.query.count)
  let myfile;
    let allblogs=[]

    for (let index = 0; index < data.length; index++) {
      const items = data[index];
      // console.log(items)
      myfile=await fs.promises.readFile(("blogdata/" +items),'utf-8')
        allblogs.push(JSON.parse(myfile))

    }
    res.status(200).json(allblogs)
  }
    
      //       allblogs.push(d)
          
  // fs.readdir("blogdata",(err,data)=>{
  //   console.log(data)
  //   let allblogs=[]
  //   data.forEach((items)=>{
  //     console.log(items)
  //     fs.readFile(("blogdata/" +items),(d)=>{
  //       allblogs.push(d)
  //     })
  //   })
  //   res.status(200).json(data)
  // })

