import React from 'react'
import Item from './Item'
import {useContext} from 'react'
import ListContext from '../Context/ListContext'
import Spinner from './Spinner'
import { useEffect, useState } from 'react'

function FeedBackList(){
const {data}= useContext(ListContext)
const {isLoading} =useContext(ListContext)
const {count}=useContext(ListContext)
const {setCount}=useContext(ListContext)

console.log(data)
// const [listData, setListData]= useState(data)


// if (isLoading ===false){
//     return<Spinner />
//     setCount(count+1)

//     console.log(count)
// }else{
    return(
        <div>
            {data?.map((item, index) => (
                    <Item key={index} item={item} />
            ))}
        </div>

        )
        }
export default FeedBackList

       