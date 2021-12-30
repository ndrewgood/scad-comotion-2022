import * as React from "react"
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/schedule.scss'

const ScheduleItem = props => {
    return(
        <div className="schedule-item">
            <h4>{props.title}</h4>
            <p>{props.time}</p>
        </div>
    )
}

const ScheduleSlide = props => {
    return(
        <Slide index={props.sNumber} className="calendar-slide">
            {
                props.items.map(item => {
                    return(
                        <ScheduleItem
                            title={item.title}
                            time={item.time}/>
                    )
                })
            }
        </Slide>
    )
}

const Schedule = () => {

    return (
        <main className="schedule" id="schedule">
            <div className="schedule-container">
                <h2>Schedule</h2>
                <div className="schedule-holder">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={50}
                        totalSlides={3}>
                        <div className="dots">
                            <Dot slide={0} className="dot dot-1" disabled={false}>Day 1</Dot>
                            <Dot slide={1} className="dot dot-2" disabled={false}>Day 2</Dot>
                            <Dot slide={2} className="dot dot-3" disabled={false}>Day 3</Dot>
                        </div>
                        <Slider>
                            <ScheduleSlide
                                sNumber={0}
                                items={[
                                    {title: "Opening Statement", time: "10:00 am - 11:15 am"},
                                    {title: "Title Sequence", time: "11:15 am - 11:30 am"},
                                    {title: "Keynote", time: "11:30 am - 12:30 pm"},
                                    {title: "Lunch Break", time: "12:30 pm - 1:30 pm"},
                                    {title: "Student Showcase", time: "1:30 pm - 2:45 pm"},
                                    {title: "Pushing Ideas Through Collaboration and Discipline Variety Panel", time: "2:45 pm - 4:00 pm"},
                                    {title: "CoMotion Branding Behind the Scenes Panel", time: "4:00 pm - 5:00 pm"}]}/>
                            <ScheduleSlide
                                sNumber={1}
                                items={[
                                    {title: "Portfolio Reviews", time: "11:00 am - 1:00 pm"},
                                    {title: "Lunch Break", time: "1:00 pm - 2:00 pm"},
                                    {title: "Alumni Panel", time: "2:00 pm - 3:15 pm"},
                                    {title: "Expanding Horizons: New Mediums in Motion Media Panel", time: "3:15 pm - 5:00 pm"}]}/>
                            <ScheduleSlide
                                sNumber={2}
                                items={[
                                    {title: "Portfolio Reviews", time: "11:00 am - 1:00 pm"},
                                    {title: "Lunch Break", time: "1:00 pm - 2:00 pm"},
                                    {title: "Exploring 'The Cliche' Panel", time: "2:00 pm - 3:15 pm"},
                                    {title: "Awards Ceremony", time: "3:15 pm - 4:30 pm"}]}/>
                        </Slider>      
                    </CarouselProvider>
                    </div>
            </div>
        </main>
    )
}

  
  export default Schedule