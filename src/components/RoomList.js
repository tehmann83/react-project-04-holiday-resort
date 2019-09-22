import React from 'react'
import Room from "./Room"

export default function ({rooms}) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">unfortunately no rooms matched your search query</div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map((item) => {
            return <Room key={item.id} room={item} />
          })
        }
      </div>
      
    </section>
  )
}
