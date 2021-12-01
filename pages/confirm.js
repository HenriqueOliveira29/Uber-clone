import React, {useEffect, useState} from 'react'
import Map from "./components/Map"
import tw from "tailwind-styled-components";

function Confirm() {
    
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = () => {
        const pickup = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
         new URLSearchParams({
             access_token: "pk.eyJ1IjoiaGVucmlxdWUyOSIsImEiOiJja3dtYTVrMGQxMHljMnBtdDFoOGRvYXFtIn0.WCpdplnIK7e153fMNqO5mQ",
             limit: 1
          })
         )
        .then(response=>response.json())
        .then(data=>{
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = () => {
        const dropoff = "Los Angelas";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
         new URLSearchParams({
             access_token: "pk.eyJ1IjoiaGVucmlxdWUyOSIsImEiOiJja3dtYTVrMGQxMHljMnBtdDFoOGRvYXFtIn0.WCpdplnIK7e153fMNqO5mQ",
             limit: 1
          })
         )
        .then(response=>response.json())
        .then(data=>{
            setDropoffCoordinates(data.features[0].center);
        })

    }

    useEffect(()=>{
        getPickupCoordinates();
        getDropoffCoordinates();
    },[])

    

    return (
       <Wrapper>
            <Map
             pickupCoordinates={pickupCoordinates}
             dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                RideSelector
                Confim Button
            </RideContainer>
       </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
    flex h-screen flex-col
`


