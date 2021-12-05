import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../data/carList';

function RideSelector({pickupCoordinates, dropoffCoordinates}) {
    const [rideDuration, setRideDuration] = useState(0);

    //get ride duration from mapbox API
    useEffect(()=>{
        rideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaGVucmlxdWUyOSIsImEiOiJja3dtYTVrMGQxMHljMnBtdDFoOGRvYXFtIn0.WCpdplnIK7e153fMNqO5mQ`)
        .then(res=>res.json())
        .then(data=>{
            setRideDuration(data.routes[0].duration / 100)
        })
    },[pickupCoordinates, dropoffCoordinates])

    return (
       <Wrapper>
            <Title>
                Choose a ride, or swipe up for more
            </Title>
            <CarList>
                {carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl}></CarImage>
                        <CarDetails>
                            <Service>
                                {car.service}
                            </Service>
                            <Time>
                                5 min away
                            </Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration*car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
                
            </CarList>
       </Wrapper>
    )
}

export default RideSelector


const Price = tw.div`
    text-sm
`
const Time = tw.div`
    text-xs text-blue-500
`
const Service = tw.div`
    font-medium 
`
const CarDetails = tw.div`
    flex-1
`
const CarImage = tw.img`
    h-14 mr-4
`
const Car = tw.div`
    flex p-4 items-center
`
const CarList = tw.div`

`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
    flex-1  overflow-y-scroll flex flex-col
`
