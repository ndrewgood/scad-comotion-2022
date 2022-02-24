import React, { useEffect, useState } from "react"
import '../styles/schedule.scss'
import ScheduleLeft from '../assets/svg/schedule/scheduleLeft.inline.svg'
import ScheduleRight from '../assets/svg/schedule/scheduleRight.inline.svg'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const ScheduleItem = props => {
    return(
        <div className="schedule-item">
            <p>{props.time}</p>
            <h4>{props.title}</h4>
        </div>
    )
}

const ScheduleSlide = props => {
    return(
        <div className={"schedule-day " + props.className}>
            {
                props.items.map((item, index) => {
                    return(
                        <ScheduleItem
                            index={index+1}
                            title={item.title}
                            time={item.time}/>
                    )
                })
            }
        </div>
    )
}

const Day1 = () => {
    return(
        <ScheduleSlide
            className="day1"
            items={[
                {title: "Opening Statement", time: "11:00 am - 11:15 am"},
                {title: "Title Sequence", time: "11:15 am - 11:30 am"},
                {title: "Keynote", time: "11:30 am - 12:30 pm"},
                {title: "Lunch Break", time: "12:30 pm - 1:30 pm"},
                {title: "Student Showcase", time: "1:30 pm - 2:45 pm"},
                {title: "Pushing Ideas Through Collaboration and Discipline Variety Panel", time: "2:45 pm - 4:00 pm"},
                {title: "CoMotion Branding Behind the Scenes Panel", time: "4:00 pm - 5:00 pm"}]}/>
    )
}

const Day2 = () => {
    return(
        <ScheduleSlide
            className="day2"
            items={[
                {title: "Portfolio Reviews", time: "11:00 am - 1:00 pm"},
                {title: "Lunch Break", time: "1:00 pm - 2:00 pm"},
                {title: "Alumni Panel", time: "2:00 pm - 3:15 pm"},
                {title: "Expanding Horizons: New Mediums in Motion Media Panel", time: "3:15 pm - 5:00 pm"}]}/>
    )
}

const Day3 = () => {
    return(
        <ScheduleSlide
            className="day3"
            items={[
                {title: "Portfolio Reviews", time: "11:00 am - 1:00 pm"},
                {title: "Lunch Break", time: "1:00 pm - 2:00 pm"},
                {title: "Exploring 'The Cliche' Panel", time: "2:00 pm - 3:15 pm"},
                {title: "Awards Ceremony", time: "3:15 pm - 4:30 pm"}]}/>
    )
}

const Schedule = () => {
    const [activeDay, setActiveDay] = useState(0);
    const [state, setState] = useState(false);    

    return (
        <main className="schedule" id="schedule">
            <ScheduleLeft/>
            <div className="schedule-container">
                <div className="schedule-header">
                    <h2>Schedule</h2>
                </div>
                
                <div className="schedule-holder">

                    <div className="daySelector">
                        <div className={activeDay == 0 ? "day day1 selected" : "day day1"} onClick={() => setActiveDay(0)}>Day 1</div>
                        <div className={activeDay == 1 ? "day day2 selected" : "day day2"} onClick={() => setActiveDay(1)}>Day 2</div>
                        <div className={activeDay == 2 ? "day day3 selected" : "day day3"} onClick={() => setActiveDay(2)}>Day 3</div>
                    </div>

                    <SwitchTransition>
                        <CSSTransition
                        key={activeDay}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames='fade'
                        >   
                            <div>
                                { activeDay == 0 ? <Day1/> : null }
                                { activeDay == 1 ? <Day2/> : null }
                                { activeDay == 2 ? <Day3/> : null }
                            </div>
                        </CSSTransition>
                    </SwitchTransition>

                    {/* <CarouselProvider
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
                                    // {title: "Alumni Panel", time: "2:00 pm - 3:15 pm"},
                                    {title: "Expanding Horizons: New Mediums in Motion Media Panel", time: "3:15 pm - 5:00 pm"}]}/>
                            <ScheduleSlide
                                sNumber={2}
                                items={[
                                    {title: "Portfolio Reviews", time: "11:00 am - 1:00 pm"},
                                    {title: "Lunch Break", time: "1:00 pm - 2:00 pm"},
                                    {title: "Exploring 'The Cliche' Panel", time: "2:00 pm - 3:15 pm"},
                                    {title: "Awards Ceremony", time: "3:15 pm - 4:30 pm"}]}/>
                        </Slider>      
                    </CarouselProvider> */}
                    </div>
            </div>
            <ScheduleRight/>
        </main>
    )
}

  
  export default Schedule