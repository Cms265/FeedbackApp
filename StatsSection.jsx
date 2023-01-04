import React from "react";
import { ReactPropTypes } from "react";
import ListContext from "../Context/ListContext";
import SlimCard from '../shared/SlimCard'
import {useContext} from 'react';

function StatsSection(){
    const {data} =useContext(ListContext)
    console.log(data, "stats section")
    const total= data?.reduce(
        (add, data)=> add+ +data.rating, 0, 
    )
    const avg=(total/data.length).toFixed(1)

        if(data.length > 0){
            return(
                <SlimCard>
                    <p> Reviews:({data.length}) Average Rating: ({avg}) </p>
                </SlimCard>
            )
        }else{
            return(
                <SlimCard>
                    <p>Be the first person to leave a review!</p>
                </SlimCard>
            )
        }

 }

 export default StatsSection