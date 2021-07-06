import React from 'react'

const SuggestedDrinkCard = ({ drink, image, country, owner, description, comments, avgRating }) => {

  return (
    <div className="suggested-drink">
      <div className="suggested-drink-header">
        <h3>{owner}</h3>
        <h3>Drink name: {drink}</h3>
        <h3>About the drink: {description}</h3>
        <h3>Country: {country}</h3>
      </div>
      <img src={image} alt={drink} />
      <div className="suggested-drink-footer">
        <hr />
        <h3>Rate this drink: {avgRating} </h3>
        <hr />
        <h3>Comments: {comments.map(comment => {
          return (
            <div className="heiss-room-comment" key={comment._id}>
              {comment.text}
            </div>
          )
        })}</h3>
      </div>
    </div>
  )

}

export default SuggestedDrinkCard