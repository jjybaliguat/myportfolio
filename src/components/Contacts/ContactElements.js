import styled from "styled-components";

export const ContactsContainer = styled.div`
    height: 700px;
    padding: 1rem 3rem;
    background: #000;
`
export const MainContact = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding: 1rem;
`
export const FormContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 2rem 0 4rem 0;
    width: 500px;
    height: fit-content;
    background: #1f1f1f;
    border-radius: 10px;
    box-shadow: 5px 10px 20px 3px rgba(2552,255,255,0.3);
`
export const MyForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
`
export const FormGroup = styled.div`
   width: 100%;
   margin-bottom: 10px;
`
export const FormInput = styled.input`
   width: 100%;
   height: 3rem;
   border-radius: 10px;
   background: #2f2f2f;
   border: none;
   outline: ${({invalidInput}) => (invalidInput? '1px solid red': 'none')};
   color: rgba(255, 255, 255, 0.8);
   padding: 10px;

   /* &:focus{
    outline: 1px solid #039be5;
   } */
`
export const TextArea = styled.textarea`
   width: 100%;
   height: 8rem;
   background: #2f2f2f;
   border-radius: 10px;
   border: none;
   color: #fff;
   outline: ${({invalidInput}) => (invalidInput? '1px solid red': 'none')};
   padding: 10px;

   /* &:focus{
    outline: 1px solid #039be5;
   } */
`
export const BtnSubmit = styled.button`
   border: none;
   outline: 1px solid #039be5;
   padding: 10px 15px;
   border-radius: 5px;
   color: #fff;
   /* background: #5f5f5f; */
   background: transparent;
   position: absolute;
   bottom: 0;
   right: 0;
   transform: translate(-25px, -20px);
   box-shadow: 3px 5px 5px 2px rgba(0,0,0,0.5);

   &:hover{
    background: #039be5;
    color: #000;
   }
`
export const Error = styled.p`
   color: red;
   margin-left: 10px;
   /* position: absolute; */
`
export const ContactDetails = styled.div`
   
`