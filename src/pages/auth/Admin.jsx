import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    let isAdmin = false;
    if(!isAdmin){
        alert('Bạn không có quyền truy cập vào trang này');
        return <Navigate to='/' />
    }
    return (
      <div>Admin</div>
    )
  }
}
