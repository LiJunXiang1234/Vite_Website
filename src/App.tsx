import Card from "./components/Card"
import "./App.css"

import myPoster from "./assets/Frontend_Mentor/Blog_Card/illustration-article.svg"
import myAvatar from  "./assets/Frontend_Mentor/Blog_Card/image-avatar.webp"

function App() {
    const Card_Data = {
      poster_url: myPoster,
      tag: "Learning",
      date: "Published 21 Dec 2023",
      title: "HTML & CSS foundations",
      description: "These languages are the backbone of every website, defining structure, content, and presentation.",
      avatar_url: myAvatar,
      aurthor: "Greg Hooper",
    }
    return ( 
    <div>
        <Card {...Card_Data}/>
    </div>
  )
}

export default App