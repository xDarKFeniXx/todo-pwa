import React from 'react';
import {useSelector} from "react-redux";
import {usersSelector} from '../../store/users-reducer/users-reducer-selectors';


export const AllUsersPage = () => {

    const listUsers=useSelector(usersSelector)

    const users=listUsers.map(user=><div>{user.name}</div>)

    return (
        <div>
            all users page
            {users}
        </div>
    );
};

