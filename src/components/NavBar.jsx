import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav>
          <section>
            <h1>Redux Essentials Example</h1>
          </section>
        </nav>
      )
}