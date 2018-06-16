import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
//import Button from './Button';


class Navbar extends Component{
  render(){
    return (
<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Electro</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    );
  }
}
ReactDOM.render(<Navbar />,document.querySelector('#navbar'));
class Show extends Component{
state={
  title:[],
  mrp:[]
}
  cartShow =() =>
  {
    
    let cell2=[];
    if(localStorage.cart)
    {
      
     let keys = Object.keys(localStorage);
          //  i = keys.length;
              // console.log(keys);
          // while ( i-- ) {
           
           	
          //  if(u==="cart")
          //  {
            console.log(keys[0].length);
             for(let j=1;j<keys[0].length;j++)
             {
              let values=[];
              values.push(keys[0][j]["title"]);
              values.push(keys[0][j]["mrp"]);
              cell2.push(values);
              
             }
           
           //}
              
            console.log(cell2);  
              
          //  }
    }
    this.setState(
      {
        title:cell2
      }
    )

  }
  render()
  {
    
    return (
      <div>
<button className="btn btn-danger" onClick={this.cartShow}>Show cart</button>

      {this.state.title.map(i=> {
            
            return(
             
              <div>
                <p > {i[0]}</p>
              <h2> {i[1]} </h2>
              <br/>
           
      
           
              </div>
   
            )}
         
            )}
        </div>
    )
  }
}
ReactDOM.render(< Show/>,document.querySelector('#tab'));
class App extends Component {
  state = {
  
  home:[],
  id:0,
  counter: 0,
  cart1:[{"description": null,
  "imageUrlStr":null,
  "mrp":null,
  "productBrand":null,
  "productId":null,
  "productUrl":null,
  "sellarAverageRating":null,
  "sellarName":null,
  "sellingPrice":null,
  "title":null
}]

  };
entertainment=()=>{
  
   
 
    fetch('http://101.53.137.41/api/?cat=Electronics_Entertainment_TV-Video_Accessories_MediaPlayers&count=100&offset=0;'

  )
     .then(results => results.json())
     .then(response1 => {
       console.log(response1);
      
           let res=[];
      for(var i=3;i<11;i++){
         let results=[];
       results.push(response1[i].imageUrlStr.split(';')[0]);
      results.push(response1[i].title);
       results.push(response1[i].mrp);
       res.push(results)
      }
      
     

      console.log(res);
      
        
        this.setState(
          {
           
            home:res
          }
        );
      })
      
      
    }
  
  home =() => {
   
 
    fetch('http://101.53.137.41/api/?cat=HomeDecor_HomeUtilities_WindowFilms&count=100&offset=0;'

  )
     .then(results => results.json())
     .then(response => {
       console.log(response);
      
           let res=[];
          
      for(var i=0;i<4;i++){
         let results=[];
       results.push(response[i].imageUrlStr.split(';')[0]);
      results.push(response[i].title);
       results.push(response[i].mrp);
       results.push(response[i].productId);
       results.push(response[i].productBrand);
       results.push(response[i].productUrl);
       results.push(response[i].sellarName);
       results.push(response[i].sellarAverageRating);
       results.push(response[i].sellingPrice);
       results.push(response[i].description);
       res.push(results);
      }
       this.setState(
          {
          
            home:res
          }
        );
      })
      
      
     }
  
  cart=(props)=>
  {
    console.log(props); 
    var description;
    var imageUrlStr;
    var mrp;
    var productBrand;
    var productId;
    var productUrl;
    var sellarAverageRating;
    var sellarName;
    var sellingPrice;
    var title;
      for(let i in this.state.home)
      {
        if(this.state.home[i][1]===props)
        {
          description=this.state.home[i][9];
          imageUrlStr=this.state.home[i][0];
          mrp=this.state.home[i][2];
          productBrand=this.state.home[i][4];
          productId=this.state.home[i][3];
          productUrl=this.state.home[i][5];
          sellarAverageRating=this.state.home[i][7];
          sellarName=this.state.home[i][6];
          sellingPrice=this.state.home[i][8];
          title=this.state.home[i][1];
          break;
        }
      }
      var obj={
        description:description,
        imageUrlStr:imageUrlStr,
        mrp:mrp,
        productBrand:productBrand,
        productId:productId,
        productUrl:productUrl,
        sellarAverageRating:sellarAverageRating,
        sellarName:sellarName,
        sellingPrice:sellingPrice,
        title:title
      }
      var newArray;
      newArray=this.state.cart1.slice();
      newArray.push(obj);
      this.setState(
        {
          cart1:newArray,
          counter:this.state.counter+1
        },
        ()=>{
          var json=JSON.stringify(this.state.cart1);
          localStorage.setItem("cart",json);
          var e=this.state.counter;
          localStorage.setItem("quantity",e);
        }
      );


    if (!localStorage.quantity)
    document.getElementById('num').innerHTML=0;

else{
  var t=parseInt(localStorage.quantity,10)+1;
document.getElementById('num').innerHTML=t.toString();
}

//   localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;
//   document.getElementById('cart').textContent = localStorage.pageLoadCount;
//   localStorage.setItem("keyName", "keyValue");

//   console.log(parseInt(localStorage.pageLoadCount));

// var aValue = localStorage.getItem("keyName");
// console.log(aValue);
// // function allStorage() {
//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;
//         console.log(keys);
//     while ( i-- ) {
//     	let u=localStorage.getItem(keys[i]);
//     	if(u=="keyValue")
//         values.push(keys[i] );
//     }
//     console.log("hello");
//     console.log(values);




          
  }

  render() {
    
  

    return (
      
     <div id="cart">
 <button onClick={this.entertainment} className="btn btn-info" >ElectronicsEntertainment </button>
         <button onClick={this.home} className="btn btn-info" >Home Decor</button>
       {this.state.home.map(i=> {
            
         return(
          
           <div className="products">
             <p > {i[1]}</p>
           <img className="img1" src={i[0]} alt="prod"/>
           <h2> {i[2]} </h2>
        
          <button id="cart1" onClick= {()=>{this.cart(i[1])}} className="btn btn-success"> Add to cart </button> 
        
           </div>

         )}
      
         )}
        
     </div> 


      

    );
  }
}  
export default App


  ReactDOM.render(<App />,document.querySelector('#root'));



  
