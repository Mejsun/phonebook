import styled from "styled-components";
import toppic from '../static/plant.PNG'
import bottompic from '../static/bottom-pic.PNG'

export const MainWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-color: white;
    background:
        url(${bottompic}) bottom right no-repeat,
        url(${toppic}) top left no-repeat;
    background-size: 45%, 20%;
`
export const ContactsWrapper = styled(MainWrapper)`
    flex-direction: column;
    min-height: calc(100vh - 100px);
    height: fit-content;
    padding: 50px 0;
`
export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
`
export const Wrapper = styled(UserWrapper)`
    width: 70%;
    max-width:800px;
    background-color: rgba(255, 255, 255, .15); 
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 30px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const PasswordInput = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
`
export const Header = styled.h1`
    font-size:2.5rem;
    margin: 5px;
    @media (max-width: 768px){
        font-size: 2rem;
    }
`
export const Subheader = styled.p`
    width: 100%;
    height: fit-content;
    margin: 5px;
    font-size: 1.3rem;
`
export const Info = styled.p`
    padding: 0;
    margin:5px;
    font-size:1.2rem;
`
export const Profilepicture = styled.img`
    width:150px;
    border-radius: 50%;
    margin-bottom: 15px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    background-color: white;
    padding: 20px;
    width: 80%;
    margin: auto;
    border-radius: 20px;
`
export const ContactForm = styled(Form)`
    margin: 20px auto;
`
export const AddContactForm = styled.form`
    border-radius: 20px;
    height: fit-content;
    font-size: 1rem;
    padding: 0;
    background-color: transparent;
    width: 100%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,1fr);
    column-gap: 20px;
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6,1fr);
    }
`
export const Input = styled.input`
    font-size: 1.8rem;
    border: none;    
    outline: none;
    background-color: inherit;
    border-bottom: 2px solid black;
    margin: 25px 0;
`
export const Pass = styled(Input)`
    display: inline;
    width: 90%;
    margin: 0;
`
export const ContactInput = styled(Input)`
    font-size: 1.3rem;
    margin: 10px;
    width: 95%;
    background-color: white;
`
export const EditInput = styled(Input)`
    width: 90%;
    font-size: 1rem;
`
export const SmallButton = styled.button`
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    margin:0;
    cursor:pointer;
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
        transition: .3s ease-in-out;
    }
    &:hover::after{
        width: 100%;
    }
`
export const Options = styled(Button)`
    width: 60%;
    font-size: 1.2rem;
`
export const Logout = styled(Options)`
    background-color: white;
    border: 1px red solid;
    &::after{
        background:red;
    }
`
export const Thead = styled.thead`
    background-color: gainsboro;
    @media (max-width: 992px){
        display:none;
    }
`
export const Tr = styled.tr`
    @media (max-width: 992px){
        display:block;
    }
`
export const Td = styled.td`
    @media (max-width: 992px){
        display:block;
        position: relative;
        padding-left:120px;
        text-align: left;
        &:last-child{
            border-bottom: 1px solid gray;
        }
        &::before{
            content: attr(data-heading);
            position: absolute;
            padding-left:5px;
            top:0;
            left:0;
            width: 100px;
            height:40px;
            display:flex;
            align-items:center;
            font-size: 1rem;
            background-color: gainsboro;
        }
    }
`