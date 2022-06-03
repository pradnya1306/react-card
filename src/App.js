// import logo from './logo.svg';
import './App.css';
import Card from './Component/Card'


const stu_data=[
  {
    name:"Taj Mahal",
    description:"The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect. ",
    image:"https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"

  },
  {
    name:"Egyptian pyramids",
    description:"The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified Egyptian pyramids.[1][2] Approximately 80 pyramids were built within the Kingdom of Kush, now located in the modern country of Sudan. Of those located in modern Egypt, ",
    image:"https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"
  },
  {
    name:"Statue of liberty",
    description:"The Statue of Liberty Enlightening the World was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886.",
    image:"https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"
  }
  // {
  //   name:"Colosseum",
  //   description:"One of the major tourist attractions of Rome, the Colosseum is indeed one of the iconic 7 wonders of the world. Constructed mainly of sand and concrete, Colosseum is the largest surviving amphitheatre in the world.",
  //   image:"https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"
  // }
]
function App() {
  return (
    <div className="App">
      {
        stu_data.map((data)=>{
          return(
        
          <div className="card_item">
            <Card name={data.name} description={data.description} image1={data.image}/>
          </div>
          )
        })
      }

    </div>
    
  );
}

export default App;
