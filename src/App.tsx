import Card from "./components/Card"
import "./App.css"

function App() {
    const Card_Data = {
      poster_url: "src/assets/Frontend_Mentor/Blog_Card/illustration-article.svg",
      tag: "Learning",
      date: "Published 21 Dec 2023",
      title: "HTML & CSS foundations",
      description: "These languages are the backbone of every website, defining structure, content, and presentation.",
      avatar_url: "src/assets/Frontend_Mentor/Blog_Card/image-avatar.webp",
      aurthor: "Greg Hooper",
    }
    return ( 
    <div>
        <Card {...Card_Data}/>
    </div>
  )
}

export default App