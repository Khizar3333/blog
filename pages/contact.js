import React,{useState} from 'react'
import styles from '@/styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [desc, setDesc] = useState('')
const handleSubmit=(e)=>{
  e.preventDefault()
  const data = { phone,email,name,desc };
  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/api/postcontact/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.text();
      console.log("Success:", result);
      alert("Thanks for contact us")
      setPhone('')
      setEmail('')
      setName('')
      setDesc('')
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  postJSON(data);
  console.log(phone,name,email,desc)
}
const handlechange=(e)=>{
  if(e.target.name=='phone'){
  setPhone(e.target.value)
}
else if(e.target.name=='name'){
  setName(e.target.value)
}
else if(e.target.name=='email'){
  setEmail(e.target.value)
}
else if(e.target.name=='desc'){
  setDesc(e.target.value)
}
  console.log(e,"change")
}
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
      <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
      <input className={styles.input} type="text" value={name} onChange={handlechange}  id="name" name='name' aria-describedby="emailHelp" required/>
    </div>
    <div className={styles.mb3}>
      <label htmlFor="email" className={styles.formlabel}>Email address</label>
      <input className={styles.input} type="email" value={email} onChange={handlechange} name='email'  id="email" aria-describedby="emailHelp" required/>
      <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
    </div>
    
    <div className={styles.mb3}>
      <label htmlFor="phone" className={styles.formlabel}>Password</label>
      <input className={styles.input} type="password" value={phone} onChange={handlechange}  name='phone' id="phone" required/>
    </div>
    <div className={styles.mb3}>
  <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern</label>
  <textarea  className={styles.input} onChange={handlechange} name='desc'  value={desc} id='desc'></textarea>
</div>
    <button type="submit" className={styles.btn}>Submit</button>
  </form>
  </div>

  )
}

export default Contact
