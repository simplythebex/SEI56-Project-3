import React from 'react'
import Card from 'react-bootstrap/Card'

const SuggestedDrinkCard = ({ drink, image, country, owner, description, comments, avgRating }) => {

  return (
    <Card className="suggested-drink" style={{ width: '40rem' }}>
      <Card.Header className="suggested-drink-header">
        <h3>{owner}</h3>
        <h3>Drink name: {drink}</h3>
        <h3>About the drink: {description}</h3>
        <h3>Country: {country}</h3>
      </Card.Header>
      <Card.Img src={image} alt={drink} />
      <Card.Footer className="suggested-drink-footer">
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
      </Card.Footer>
    </Card>
  )

}

export default SuggestedDrinkCard