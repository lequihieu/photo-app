import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import './Profile.scss'
import ListModalImage from '../ListModalImage/ListModalImage';
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {},
      id: null,
      list: []
    }
  }
  getData = async(user_id) => {
    let res = await axios.get('http://localhost:5000/images/list', {
      params: {
        user: user_id
      }
    })
    this.setState({
      list: res.data
    })
  }
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    
    this.getData(decoded.id);

    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      id: decoded.id
    })

  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {console.log(this.state.list, this.state.first_name, "render")}
        <div className="list-image-user">
            <ListModalImage images={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default Profile
