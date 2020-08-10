import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const add = image => {
  return axios
    .post('http://localhost:5000/images/add', {
      thumb: image.thumb,
      regular: image.regular,
      name: image.name,
      user: image.user
    })
    .then(response => {
      console.log(response.data)
    })
}

export const list = async user_id => {
  let data;
  console.log(user_id, "asyncaaaaa");
   await axios.get('http://localhost:5000/images/list', {
      params: {
        user: user_id
      }
    })
    .then(result => {
      data = result
      console.log(data, "hello")
    })
  return data;  
}