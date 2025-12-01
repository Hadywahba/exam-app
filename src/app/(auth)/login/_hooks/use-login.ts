import { useMutation } from "@tanstack/react-query"

export const UseLogin=()=>{

    const {mutate:loginForm , error , isPending} =useMutation({

    })
    return{
loginForm,
error,
isPending,
    }
}