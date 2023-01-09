import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { H1 } from '../Skills/SkillsElements'
import { BtnSubmit, ContactDetails, ContactsContainer, Detail, Details, Error, FormContainer, 
  FormGroup, FormInput, MainContact, MyForm, TextArea} from './ContactElements'

const Contacts = () => {
  const {register, formState: {errors}, handleSubmit} = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <ContactsContainer id='contacts'>
        <H1>Contact Me</H1>
        <MainContact>
          <FormContainer>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormInput type='text'
                  placeholder='Your Name'
                  invalidInput={errors.name? 'true': ''}
                  {...register('name', { 
                    required: "Name field is required",
                    minLength: 3,
                  })}
                  />
                  {errors.name && <Error>{errors.name?.message}</Error>}
                  {errors.name?.type === 'minLength' && <Error>Please Enter atleast 3 characters</Error>}
              </FormGroup>
              <FormGroup>
                <FormInput
                  placeholder='Your email'
                  invalidInput={errors.email? 'true': ''}
                  {...register('email', { 
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  />
                  {errors.email?.type === 'required' && <Error>Email Field is required</Error>}
                  {errors.email?.type === 'pattern' && <Error>Invalid Email address</Error>}
              </FormGroup>
              <FormGroup>
                <TextArea 
                  placeholder='Enter your message'
                  invalidInput={errors.message? 'true' : ''}
                  {...register('message', {
                    required: 'Please type your message',
                  })}
                  />
                  {errors.message && <Error>{errors.message?.message}</Error>}
              </FormGroup>
              <BtnSubmit>Send</BtnSubmit>
            </MyForm>
          </FormContainer>
          <ContactDetails>
                  <Details href = 'https://github.com/jjybaliguat' target='_blank'>
                    <i class="fa-brands fa-github"></i><Detail>jjybaliguat</Detail>
                  </Details>
                  <Details href = 'https://web.facebook.com/justinejerald.baliguat'>
                  <i class="fa-brands fa-facebook"></i><Detail>justine jerald baliguat</Detail>
                  </Details>
                  <Details>
                  <i class="fa-regular fa-envelope"></i><Detail>justinejeraldbaliguat@gmail.com</Detail>
                  </Details>
                  <Details href = 'tel:+639979112814'>
                  <i class="fa-solid fa-phone"></i><Detail>09979112814</Detail>
                  </Details>
          </ContactDetails>
        </MainContact>
    </ContactsContainer>
  )
}

export default Contacts