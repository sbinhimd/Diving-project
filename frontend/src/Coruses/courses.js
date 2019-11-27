import axios from 'axios'
import React, { Component } from 'react'
import {
    BrowserRouter, Switch,
    Route, NavLink
  } from 'react-router-dom';
import {Card,Button,Col,Row , Image} from 'react-bootstrap'
import './courses.css'
import Show from './showCourse'
export default class courses extends Component {
//     componentDidMount() {
//         axios.get(`http://localhost:5000/corses`)
//         // .then(res => res.json())
//           .then(res => {
//               console.log(res);
//             const data = res.data;
//             this.setState({ courses:data });
//           })
//       }
    render() {
  let course = this.props.courses.map(item => 
<section >
  <div className="container py-3" >
    <div className="card" style={{margin:"0 auto",width:"65%", height:"65%"}}>
      <div className="row ">
        <div className="col-md-4">
            <img variant="left" src={item.ImageUrl} class="w-100"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">{item.CourseTitle}</h4>
              <p className="card-text">{item.overview} </p>
              <p className="card-text">{item.Price}</p>
              <NavLink  style={{width:"50%", marginLeft:"70%"}}  to={`/courses/${item._id}`}>Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  ) 
        return (
            <div style = {{ marginTop:"190px", paddingBottom:"90px"  }}>
        {course}
            </div>
        )
    }
}