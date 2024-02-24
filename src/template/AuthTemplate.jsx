import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class AuthTemplate extends Component {
  render() {
    return (
      <div className='d-flex'>
        <div className='w-50'>
            <img src='https://picsum.photos/800/800' alt='auth' />
        </div>
        <div className="w-50 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    )
  }
}
