import React from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

function User(data, friends){
   // console.log(props);
   console.log(friends);
    const {name, city,age} =data; 
    return(
        <div>
            User
            {/* <div>Name: {props.name}</div> // bu şekilde yazmaktansa const user{name, age, city} data'sını kullanıp App'de yazdırdık
            <div>City: {props.city}</div>
            <div>Age: {props.age}</div> */} 
            <div>Name: {data.name}</div> 
            <div>City: {data.city}</div>
            <div>Age: {data.age}</div> 
            <div> Friends: {friends.map((friend,i)=> ( //return <div key... de diyebilirdik, aynı şey
            <div key={i}> {friend} </div>
            ))}</div>
        </div>

    );
}


export default User;