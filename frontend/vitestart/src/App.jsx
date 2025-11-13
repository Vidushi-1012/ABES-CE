// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// import img from "./assets/Images/content.png";

// function App() {
//   return (
//     <>
//       {/* <nav
//         className="navbar navbar-expand-sm navbar-dark bg-dark"
//         style={{ width: "100%" }}
//       >
//         <div className="container-fluid">
//           <div className="Logo">
//             <img src={img} height={50} width={50} alt="logo" />
//           </div>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mynavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="mynavbar">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="text"
//                 placeholder="Search"
//               />
//               <button className="btn btn-primary" type="button">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>

//       <button type="button" className="btn btn-danger">
//         Danger
//       </button>
//     <div class="cards">
//       <div class="card " style={{width:'400px'}}>
//         <img class="card-img-top" src= {img} alt="Card image" />
//         <div class="card-body">
//           <h4 class="card-title">John Doe</h4>
//           <p class="card-text">Some example text.</p>
//           <a href="#" class="btn btn-primary">See Profile</a>
//         </div>
//       </div>
//       <div class="card " style={{width:'400px'}}>
//         <img class="card-img-top" src= {img} alt="Card image" />
//         <div class="card-body">
//           <h4 class="card-title">John Doe</h4>
//           <p class="card-text">Some example text.</p>
//           <a href="#" class="btn btn-primary">See Profile</a>
//         </div>
//       </div>
//        <div class="card " style={{width:'400px'}}>
//         <img class="card-img-top" src= {img} alt="Card image" />
//         <div class="card-body">
//           <h4 class="card-title">John Doe</h4>
//           <p class="card-text">Some example text.</p>
//           <a href="#" class="btn btn-primary">See Profile</a>
//         </div>
//       </div>
//       </div> */}
//     </>
//   );
// }

// export default App;
// import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import Asgn1 from "./components/Asgn1";
// import Asgnp2 from "./components/Asgnp2";
// import Asgnp3 from "./components/Asgnp3";
// import Asgn4 from "./components/Asgn4";

// function App() {
//   return (
//     <div>
//       <Asgn1 />
//       <Asgnp2 />
//       <div id="flexbox">
//         <Asgnp3
//           name="Pizza"
//           img="https://amici.ph/cdn/shop/files/MARGHERITA_1200x.jpg?v=1747263773"
//           price="Rs.250"
//         />
//         <Asgnp3
//           name="Burger"
//           img="https://www.southernliving.com/thmb/H04pCVJ5bLAnwPs2hFCmpNs5Uec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg"
//           price="Rs.150"
//         />
//         <Asgnp3
//           name="Sprite"
//           img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsouCYTJ3aDtB5m47lyrI3zp9BChiUoIzlsAHVC3NQYzR_rgZFCqt1G9N5jdzLNaWi_5E&usqp=CAU"
//           price="Rs.50"
//         />
//       </div>
//       <Asgn4 />
//     </div>
//   );
// }

// export default App;
// import React from 'react'
// import Link1 from './components/Link1';

// function App() {
//   return (
//     <div>
//       <Link1/>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import Login from "./components/login";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Cardnew from "./components/Cardnew";


// function App() {
 
//   return (
//     <div>
//       <Navbar/>
//       <center>
//         <h2>Vidushi</h2>
//       </center>

//       <Cardnew/>
//     </div>
//   );
// }

// export default App;
// import React,{useEffect,useState} from 'react'
// import Fashion from './components/Fashion'
// function App() {
//   const [books,setBooks]=useState([])
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(data=>{
//       setBooks(data)
//     })
//   },[]) 
//   return (
//     <div>
//       {
//         books.map((b,i)=>(
//           <Fashion keys={i} props={b} />
//         ))
//       }
      
//     </div>
//   )
// // }


// export default App

// import React, { useEffect, useState } from 'react';
// import WeatherCard from '../../../Weather/src/components/WeatherCard';

// function App() {
//   const [cities, setCities] = useState(['Delhi', 'Mumbai', 'Bangalore','Ghaziabad']);
//   const [weatherData, setWeatherData] = useState([]);
//   const apiKey = 'aa6568bfcd8e4685bcd81d32f6fd3c7a';

//   useEffect(() => {

//     cities.forEach(city => {
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
//         .then(res => res.json())
//         .then(data => {
//           setWeatherData(prev => [...prev, data]);
//         });
//     });
//   }, []);

//   return (
//     <div>
//       {weatherData.map((w, i) => (
//         <WeatherCard key={i} props={w} />
//       ))}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

function App() {
  const [cities, setCities] = useState(['Delhi', 'Mumbai', 'Bangalore']);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'aa6568bfcd8e4685bcd81d32f6fd3c7a';

  useEffect(() => {
    setWeatherData([]);
    setLoading(true);

    Promise.all(
      cities.map(city =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
          .then(res => res.json())
          .catch(err => ({ error: true, city }))
      )
    ).then(results => {
      setWeatherData(results);
      setLoading(false);
    });
  }, [cities]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>
      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        weatherData.map((data, i) =>
          data.error ? (
            <div key={i}>Error fetching data for {data.city}</div>
          ) : (
            <WeatherCard key={i} weather={data} />
          )
        )
      )}
    </div>
  );
}

export default App;