"use client"
import { useState } from "react";
//import { actionOne } from "@/app/utils/actions";
import Button from "./Button";
import { get } from "http";

export default async function ServerForm() {

    const [cards, setCards] = useState([])

    const handleClick = () => {
        //setCards(valor)
        //setCards([{ name: "card1" }, { name: "card2" }])

        //setCards(function)
        /* setCards((cards)=>{
            return [...cards, {name: "card3"}]
        }) */
    }

    /*     const handleSubmit = async (data: FormData) => {
            "use server"
            //await actionOne(data)
            console.log(data)
        } */

    return (
        <>
            <form /* action={handleSubmit} */ className="flex gap-4 ">
                <input type="text" name="demo-one" placeholder="Texto para el demo..." className="w-full p-1 rounded-md" />
                <Button>enviar</Button>
            </form>
            <button onClick={handleClick}>click me</button>
        </>
    )
}




//new Promise(()=>{})
/* const test = caches.open("v1")

console.log(test) */




async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
}

const resultado = getUsers()
resultado.then((data) => {
    console.log(data)
})

console.log(resultado)