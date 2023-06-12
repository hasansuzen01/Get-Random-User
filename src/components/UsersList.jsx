import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getUser } from '../control/userListSlice';
import ListUser from './ListUser';


const UsersList = () => {
    const { users } = useSelector(state => state.userList)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=5');
                dispatch(getUser(response.data.results));
            } catch (error) {
                console.log(error);
            }
        };


        fetchData();
    }, [dispatch]);

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <div>
            <button onClick={handleClick}>Change Users</button>
            <div className='mainDiv'>
                <ul>
                    {users.map((user, idx) => (
                        <li key={idx}>
                            <div className='listDiv'>
                                <img src={user.picture.large} />
                                <div className='showData'>
                                    <h3 className='name'>{user.name.first} {user.name.last}</h3>
                                    <p className='email'>Email : {user.email}</p>
                                    <p className='location'>{user.location.country} | {user.location.city}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

};

export default UsersList;
