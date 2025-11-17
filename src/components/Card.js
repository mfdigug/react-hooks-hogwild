import React from 'react'

export default function Card({ hogInfo }) {
  return (
    <div className="ui four wide column">
        <div className="ui card pigTile">
            <h3>{hogInfo.name}</h3>
            <img src={hogInfo.image}></img>
        </div>
    </div>
  )
}
