import { useState } from "react";
import email2 from "../img/email2.png"

const Form = ()=>{
    const [form,setForm] = useState({
        email: "",
        password: "",

    });
    const handleChange =(event)=>{
      const property = event.target.name
      const value= event.target.value

      setForm({...form,[property]:value})
    };

    return(
        <div>
        <img className='emailimagen' src={email2} alt='email'/>
        <form className='formEamil'>
        <div>
           <label htmlFor='email'>email</label>
           <input type='text' name='email' value={form.email} onChange={handleChange}/>
           <label>password</label>
           <input type='text' name='password' value={form.password} onChange={handleChange}/>
           </div>
           <button type="submit">login</button>
           </form>
        </div>
    )
};
export default Form;