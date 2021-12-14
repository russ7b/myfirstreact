import { useEffect, useState } from "react";
import helloService from "../services/helloService";

const Hello = () => {

    const[hello, setHello] = useState("[bye]")

    useEffect( () => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        )
        .catch(
            err => {
                console.log("error")
            }
        )
    })

    return hello;
}

export default Hello;