import "./Card.css"
import "../fonts.css"

interface Props {
  poster_url: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  avatar_url: string;
  aurthor: string;
}

function Card({poster_url, tag, date, title, description, avatar_url, aurthor}: Props) {
  return (
    <div className="card_container">
        <img src={poster_url} className="card_poster"></img> 

        <div className="card_context">
          <p className="card_tag">{tag}</p>
          <p className="card_date">{date}</p>
          <p className="card_title">{title}</p>
          <p className="card_description">{description}</p>
        </div>

        <div className="card_aurthor_context">
          <img src={avatar_url} className="card_avatar"/>
          <p className="card_aurthor">{aurthor}</p>
        </div>
    </div>
  )
}

export default Card