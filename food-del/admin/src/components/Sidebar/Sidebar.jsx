import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Order</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default sidebar
