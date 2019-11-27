import React, { Component } from 'react'
import axios from 'axios'

export default class uplodimg extends Component {
    state={
        selectedfile : null
    }
    fileSelectedHandler = e =>{
        this.setState({
            selectedfile : e.target.files[0]
        })
       
        
    }
    fileUploadHandler = () =>{
        // var course = new CoursesData();
        // course.append('ImageUrl',this.state.selectedfile , this.state.selectedfile.name)
axios.post('http://localhost:5000/corses/new')
.then(res => console.log(res))
    }
    render() {
        return (
            <div style={{marginTop:"300px"}}>
               <input type="file" onChange={this.fileSelectedHandler} />
               <button onClick={this.fileUploadHandler}>Uplod</button>
                           </div>
        )
    }
}
