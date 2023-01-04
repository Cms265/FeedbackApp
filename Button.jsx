import React from 'react'
import{ useContext} from 'react'
import { useEffect } from 'react'
import ListContext from '../Context/ListContext'

function Button ({isdisabled, title, rating}){
   const {addReview}= useContext(ListContext)
   const {reviewText}=useContext(ListContext)

useEffect(()=>{
if (isdisabled===true){
    isdisabled=false
}
}, [isdisabled])
    return(
        <button onClick={(e)=>{e.preventDefault(); addReview(rating, reviewText)}} disabled={isdisabled} >{title}</button>
        )
}
export default Button