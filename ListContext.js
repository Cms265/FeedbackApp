import React from "react";
import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const ListContext=createContext()

export const ListProvider=({children})=>{

    const [data,SetData]=useState([])
    const [count, setCount]=useState(0)
    const [reviewText, SetReviewText]=useState("")
    const [selected, SetSelected]=useState(10)
    const [message, SetMessage]=useState("")
    const [isDisabled, SetIsDisabled]=useState(true)
    const [edit, SetEdit]=useState({
        item: {},
        edit: false
    })
    const [isLoading, SetIsLoading]=useState(true) 

    useEffect(()=>{
        console.log(data, "in the useEffect")
    },[data])

    useEffect(()=>{
        fetchFeedback()
        },[])    
        
    // useEffect(()=>{SetSelected(10)},[data])

    const fetchFeedback=async()=>{
        const response= await fetch("/feedback")
        const data=await response.json()
        SetData(data)
    }
    const deleteReview=(id)=>{
        if(window.confirm("are you sure you want to delete this review?")){    
            const newList=data.filter(review=>review.id !== id)
            SetData(newList);
       }
    }

    const addReview = async (rating, reviewText)=>{
        const newdata={
            rating,
            reviewText
        }
        console.log(rating, reviewText, newdata)
        const response = await fetch('/feedback', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newdata)
    })
    const newresponse= await response.json()
    console.log(newresponse,"newresponse")
    console.log(data, "data")
    data.push(newresponse)
    SetData(data)
    }

    // const addReview=(rating, reviewText)=>{
    //     if(edit.edit===false){
    //         const newobj=[{
    //             id: uuidv4(),
    //             ...rating,
    //             ...reviewText,
    //         }]
    //         const newList=data.concat(newobj)
    //         console.log(newList)
    //         SetData(newList)
    //     }else if(edit.edit===true){
    //         const newList=data.map((item)=>{
    //             if(item.id===edit.item.id){
    //                 const newobj={
    //                     id: edit.item.id,
    //                     ...rating, 
    //                     ...reviewText
    //                 }
    //                 return (newobj)
    //             }else{
    //                 console.log(item)
    //                 const newobj={
    //                     id: item.id,
    //                     rating: item.rating, 
    //                     reviewText: item.reviewText
    //                 }
    //             }
    //     })
    //     SetData(newList)
    // }
    // SetSelected(10)
    //     SetReviewText("")
    // }

    function handleChangeText(e){
        if (reviewText.trim().length < 10){
            SetMessage("please enter 10 or more characters to submit review")
            SetIsDisabled(true)
        }else if(reviewText.trim().length===0){
            SetMessage("")
            SetIsDisabled(true)
        }else if(reviewText.trim().length >= 10){
            SetMessage("")
            SetIsDisabled(false)
        }
        console.log(reviewText)
        SetReviewText(e.target.value)
    }
    
    function handleRatingChange(e){
        SetSelected(e.target.id)
        console.log(selected)
    }
    function handleEdit(item){
        SetEdit({
            item,
            edit:true
        })
        SetSelected(item.rating)
        SetReviewText(item.reviewText)
        SetIsDisabled(false)
        console.log(edit)
        // const newList=data.filter(review=>review.id !==id)
        // SetData(newList);

    }
    // function handleEdit({item}){
    //     SetEdit({item, edit:true})
    //     SetEdit({item, edit:true})
    //     SetSelected(item.rating)
    //     SetReviewText(item.reviewText)
    //     SetIsDisabled(false)
    //     console.log(edit)
    //     // const newList=data.filter(review=>review.id !==id)
    //     // SetData(newList);

    // }
    
    return(
         <ListContext.Provider value={{data,count, setCount, deleteReview, addReview, reviewText, SetReviewText, selected, SetSelected, message, SetMessage, isDisabled, SetIsDisabled, handleChangeText, handleRatingChange, handleEdit, edit, SetEdit, isLoading, SetIsLoading}}>
            {children}
         </ListContext.Provider>
    )
}
export default ListContext
