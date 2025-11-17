import React from 'react'
import Card from './Card'

export default function CardDisplay({ hogs }) {
  
    const hogsForDisplay = hogs.map((hog) => {
        return <Card key={hog.id} hogInfo={hog}/>
    })

    return (
    <div>
        <h2>Hogs</h2>
        <div className="ui grid container">
        {hogsForDisplay}
        </div>
    </div>
  )
}
