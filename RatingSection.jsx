import React from 'react'
import {useContext} from 'react'
import Button from './Button'
import Card from '../shared/Card'
import ListContext from '../Context/ListContext'

function RatingSection(){

   
    const {reviewText}=useContext(ListContext)
    const {selected}=useContext(ListContext)
    const {handleChangeText}=useContext(ListContext)
    const {isDisabled}=useContext(ListContext)
    const {message}=useContext(ListContext)
    const {handleRatingChange}=useContext(ListContext)

    return (
        <div>
            <Card>
                <form>
                    <div className='ratingSec'>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="1" name="rating" value="1"   />
                    <label className='num_display click' htmlFor="1">1</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="2" name="rating" value="2" />
                    <label className='num_display click'  htmlFor="2">2</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="3" name="rating" value="3" />
                    <label className='num_display click' htmlFor="3">3</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="4" name="rating" value="4" />
                    <label className='num_display click' htmlFor="4">4</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="5" name="rating" value="5" />
                    <label className='num_display click' htmlFor="5">5</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="6" name="rating" value="6" />
                    <label className='num_display click' htmlFor="6">6</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="7" name="rating" value="7"/>
                    <label className='num_display click' htmlFor="7">7</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="8" name="rating" value="8"/>
                    <label className='num_display click' htmlFor="8">8</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="9" name="rating" value="9"/>
                    <label className='num_display click' htmlFor="9">9</label>
                    <input className='hidden' type="radio" onChange={handleRatingChange} id="10" name="rating" value="10" defaultChecked/>
                    <label className='num_display click'htmlFor="10">10</label>
                    </div>
                    <div className='btn'>
                    <input className='textbox review_text' type="text" onChange={handleChangeText} id="review" name="review" value={reviewText} />
                    <label  htmlFor="review"></label>
                    <Button className='click' title="Submit" rating={selected} isdisabled={isDisabled} />
                    </div>
                    <p className='message'>{message}</p>
                </form>
            </Card>
        </div>
    )
    }
export default RatingSection