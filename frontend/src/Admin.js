import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div style={{marginTop:"200px"}}>
           Sitting Trips :<a href="/trip"><button> Trips </button>  </a> 
           <br/>
           Sitting Courses :<a href="/corsess"><button> Courses </button>  </a> 
            </div>
        )
    }
}
