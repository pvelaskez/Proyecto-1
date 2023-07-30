
import styled from 'styled-components'
import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    
    <Cards>
        <Image src= {props.data.img} alt=""/>
        <figcaption>
            <Producto>{props.data.title}</Producto>
        </figcaption>
                                                
            <Peso>1 kg.</Peso><Precio >{props.data.precio}</Precio>
        <Button />
    </Cards>
  )
}

export default Card

const Cards = styled.figure`
width: 200px;
height: 310px;
border: 2px;
border-radius: 5px;
background-color: white;

`
//box-shadow: 2px 2px 10px

const Image = styled.img`
width: 100%;
height: 50%;
object-fit:cover;
`

const Producto = styled.h3`
line-height: 5;
margin-left: 1.3rem;
font-size: 1.1rem;
color: rgb(60, 102, 32);


`
const Precio = styled.a
`
font-size: 1.3rem;
font-weight: 600;
color: rgb(255, 129, 38);
border-radius: 5px;


`
const Peso = styled.a
`
font-size: 0.9rem;
color: rgba(165, 166, 168);
background-color: rgb(233, 233, 233);
padding: 5px 15px;
margin-right: 3.5rem;
margin-left: 1.3rem;
border-radius: 5px;

`
