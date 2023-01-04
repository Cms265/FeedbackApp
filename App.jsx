import Header from './components/Header'
import RatingSection from './components/RatingSection'
import FeedBackList from './components/FeedBackList'
import StatsSection from './components/StatsSection'
import {ListProvider} from './Context/ListContext'

function App(){




    return(   
         <ListProvider>    
            <div className='app'>
            <Header title={"Reviews"} />
            <RatingSection />
            <StatsSection  />
            <FeedBackList  />
            </div>
        </ListProvider>
    )
}
export default App