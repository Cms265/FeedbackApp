import React from  'react'
import Card from '../shared/Card'
import {useContext} from 'react'
import ListContext from '../Context/ListContext'

function Item({item}){

    const {deleteReview} = useContext(ListContext)
    const {handleEdit}=useContext(ListContext)
    const {edit, SetEdit}=useContext(ListContext)
    console.log(typeof(item), item)
    return(
        <Card>
            <div></div>
                <div className='item'>
                    <div className='num'> {item.rating} </div>
                    <button className='close' disabled={false} onClick={()=>deleteReview(item.id)}>x</button>
                    <button className='close click' onClick={()=>handleEdit(item)}> Edit</button>
                    <div> {item.reviewText} </div>
                </div>
        </Card>
    )

}      //add the {} back around the item of edit text to get it back the way it wa
export default Item