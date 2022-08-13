import React from "react";
import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UserList = (props)=> {
    return(
        <Card className = {classes.users}>
            <ul>
                {props.users.map((users)=> (
                    <li key={users.id}>
                        {users.name}  {users.college} ({users.age} years old) 
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList; 