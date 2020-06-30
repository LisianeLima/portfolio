import React from "react";
import { useForm } from "react-hook-form";
import Buttom from '../Buttom';
import { Form,InputForm } from './styles';
// import NavItem from '../NavBarItem';


// const links = [
//     {icon:"home", link:"#home", name:'home'},
//     {icon:"info", link:"#about", name:'about'},
//     {icon:"folder", link:"#project", name:'project'},
//     {icon:"phone", link:"#contact", name:'contact'},
//   ]

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    
     {/* <NavItem itens={links} /> */}
        <p1>Rua 26 - Diogo Afonso, Alto Miramar, SV</p1><br></br>
        <p1>lisylima12@gmail.com</p1><br></br>
        <p1>+2385987230</p1><br></br>

      <label>Name</label>
      <InputForm
        name="name"
        ref={register({
          required: "Name is Required",
        })}
      />
      <span>{errors.name && errors.name.message}</span>

      <label>Email</label>
      <InputForm
        name="email"
        ref={register({
          required: "Email is Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
     <span> {errors.email && errors.email.message}</span>

       <label>Message</label>
      <InputForm name='message'
      ref={register({
        required: "Write a Message!",
      })}
      
      />
      <span> {errors.message && errors.message.message}</span>

       <Buttom primary name='Submit' width='10'/>
  
    </Form>
  );
}
export default ContactForm;