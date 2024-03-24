import ReactDOM from 'react-dom/client'
// import './style.css'
import one from './assets/dog-1.jpg'
import two from './assets/dog-2.jpg'
import three from './assets/dog-3.jpg'
import four from './assets/dog-4.jpg'
import five from './assets/dog-5.jpg'
import six from './assets/dog-6.jpg'
import seven from './assets/dog-7.jpg'

const root= ReactDOM.createRoot(document.getElementById ("root"))

function NameOne(props){
  return(
  <div >
    <div style={{display:'flex',flexWrap:'wrap' }}>
      <img className='imagese' src={props.Images} alt="" style={{ borderColor: 'red',
          borderWidth: 5,
          height: 100,
          width: 200}}></img>
      <h1 style={{marginTop:0,fontSize:20}}>{props.Namee}</h1>
    </div>
    
    
         </div>
  )
}

var gallery=[
  {
    Images:one,
    Namee:"julie's Rabbit Ears" 
  },  
  {
    Images:two,
    Namee:"Danger Look" 
  },
  {
    Images:three,
    Namee:"Hai I Am Mani" 
  },  
  {
    Images:four,
    Namee:"The innocent look" 
  },  
  {
    Images:five,
    Namee:"julie's Rabbit Ears" 
  }, 
  {
    Images:six,
    Namee:"julie's Rabbit Ears" 
  },  
  {
    Images:seven,
    Namee:"julie's Rabbit Ears" 
  }

]

root.render(
 <div>
  {
    gallery.map(function(item,index){
      return<NameOne key={index} Images={item.Images} Namee={item.Namee}></NameOne>
    }
    )
  }
 </div>
)


//  map work with props 
// const root= ReactDOM.createRoot(document.getElementById ("root"))
// function NameOne(props){
//   return(
//     <div style={{backgroundColor:"skyblue",padding:"10px",margin:"10px"}}>
//       <h1>{props.bookname}</h1>
//       <p>{props.auther}</p>
//     </div>
//   )
// }

// var booklist=[
//   {
//     bookname:"jessica koel",
//     auther:"Hey,I here help  you out please.."
// },
// {
//   bookname:"koneial Bolger",
//   auther:"i will send you all the documents as soon as "
// },
// {
//   bookname:"Tamaara Suile",
//   auther:"are you going to bussiness trip next week"
// } ,
//  {
//   bookname:"Sam Nielson",
//   auther:"I suggrst to start new bussiness soon"
// }
// ]


// root.render(
//   <div>
//     {
//     booklist.map(function(item)
//     {
//       return <NameOne bookname={item.bookname} auther={item.auther}></NameOne>
//     })
//   }
//   </div>
// )
// -------------

  // function NameTwo(){
//   return(
//     <div style={{backgroundColor:"skyblue",padding:"10px",margin:"10px"}}>
//       <h1>Ajay</h1>
//     </div>
//   )
// }

// function NameThree(){
//   return(
//     <div style={{backgroundColor:"skyblue",padding:"10px",margin:"10px"}}>
//       <h1>Aniel</h1>
//     </div>
//   )
// }

  /* <NameOne myname="ajay"></NameOne>
  <NameOne myname="saroj"></NameOne> */

  /* /* <NameTwo></NameTwo>
  <NameThree></NameThree> */ 
// -----------------------------
//component



//ikmport export data.js to index js
// p
// root.render(
//   <h1 style={mystyle}>hello world </h1>
// );

// root.render(
//   <h1 style={{color:"red"}}>hello world </h1>
// );

// root.render(
//   <h1 class='clr'>hello world </h1>
// );

// //component
// function Navbar(){
//   return(
//     <div>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Products</a></li>
//         <li><a href="#">Contact Us</a></li>
//       </ul>
//     </div>
//   )
// }

// //About component
// function About(){
//   return(
//     <div>
//       <h1>About Us</h1>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut, ad laudantium quidem totam sapiente ut fugit accusantium voluptatibus deserunt dolorum aliquid, veritatis assumenda tempore vitae at rerum nesciunt numquam officia quod optio ex! Id, corporis natus accusantium aspernatur repellat reiciendis repudiandae necessitatibus fugiat quae voluptas minus quas, perferendis fuga!</p>
//     </div>
//   )
// }



// root.render(
//   <div>  
//     <Navbar> </Navbar>
//   <About></About>
//   </div>

// );


// porpos.js
// function One(){
//   var num=56
//   return(
//     <div>
//     <h1>i am one</h1>
//     <Two num={num}></Two>
//     </div>
//   )
// }
// function Two(num){
//   return(
//     <div>
//     <h1>i am two</h1>
//     <Three num={num.num}></Three>
//     </div>
//   )
// }
// function Three(num){
//   return(
//     <div>
//     <h1>i am Three</h1>
//     <h2>i reaceived number {num.num}</h2>
//     </div>
//   )
// }
// root.render(<One></One>)

// sepration componunt
// import ReactDOM from 'react-dom/client';
// import Parent from './parent';

// const root= ReactDOM.createRoot(document.getElementById ("root"))

// root.render(
// <Parent></Parent>
// )

// import Child from "./child"

// function Parent(){
//   return(
//     <div>
//     <h1>I am Parent</h1>
//     <Child pname="Ajay"></Child>
//     </div>

//   )
// }
// export default Parent

// child.js
// function Child(props){
//   return(
//     <h1>I am child my parent name is {props
//       .pname}</h1>
//   )
// }
// export default Child