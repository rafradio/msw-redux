import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../store/selectors'
import { Navbar } from './NavBar'
import { fetchPosts } from '../features/posts/actions'
// import './App.css'

export const LoginPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(fetchPosts())
        navigate('/posts');
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
    ));

    return (
        <>
            <Navbar />
            <section>
                <h2>Welcome to Tweeter!</h2>
                <h3>Please log in:</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">User:</label>
                    <select id="username" name="username" required>
                    <option value="">Выберите</option>
                    {usersOptions}
                    </select>
                    <button>Log In</button>
                </form>
            </section>
        </>
    )
}