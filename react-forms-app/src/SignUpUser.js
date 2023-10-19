import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <span>This field is required</span>}
      
      <input {...register('lastName', { required: true })} placeholder="Last Name" />
      {errors.lastName && <span>This field is required</span>}
      
      <input {...register('userName', { required: true })} placeholder="Username" />
      {errors.userName && <span>This field is required</span>}
      
      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email && <span>Invalid email address</span>}
      
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && <span>This field is required</span>}
      
      <input 
        type="password" 
        {...register('confirmPassword', { 
          required: true, 
          validate: value => {
            const password = getValues('password'); 
            return value === password || alert("Passwords don't match!");
          }
        })} 
        placeholder="Confirm Password" 
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpUser;
