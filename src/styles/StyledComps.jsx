import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    min-height: 900px;
    background-color: white;
`
export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, .15); 
    backdrop-filter: blur(5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-width:800px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const Header = styled.h1`
    font-size:3rem;
    margin: 0;
`
export const Subheader = styled.h3`
    width: 100%;
    height: fit-content;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    background-color: white;
    padding: 20px;
    width: fit-content;
    width:80%;
    margin: auto;
    border-radius: 20px;
`
export const Input = styled.input`
    font-size: 1.8rem;
    border: none;    
    outline: none;
    background-color: inherit;
    border-bottom: 2px solid black;
    margin: 25px 0;
`
export const PasswordInput = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
`
export const Pass = styled(Input)`
    display: inline;
    width: 90%;
    margin: 0;
`
export const SmallButton = styled.button`
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    margin:0;
`
export const ShowHidePassword = styled(SmallButton)`
    border-bottom: 2px solid black;
    max-width: 11%;
    font-size: 1.8rem;
`
export const Button = styled.button`
    background-color: #92B4EC;
    position: relative;
    font-size: 1.5rem;
    margin-top: 15px;
    border-radius: 10px;
    width:50%;
    border: none;
    padding: 15px;
    overflow: hidden;
    z-index: 1;
    transition: .3s ease-in-out;
    &:hover{
        cursor: pointer;
        color: white; 
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: gray ;
        z-index: -1;
        transform-origin: 0% 0%;
        transition: .3s ease-in-out;
    }
    &:hover::after{
        width: 100%;
    }

`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin: auto;  
`
export const Info = styled.p`
    padding: 0;
    margin:5px;
`
export const Table = styled.table`
    width: 100%;
    font-size: 1.2rem;
    margin-top: 20px;
    border-radius: 20px;
    `
export const Thead = styled.thead`
    background-color: gray;
    color:white;
`
export const Tdata = styled.td`
    border-bottom: 1px solid gray;
    padding: 5px;
` 
export const ContactInput = styled(Input)`
    font-size: 1.3rem;
    margin: 10px;

`
export const AddContactForm = styled(Form)`
    height: fit-content;
`