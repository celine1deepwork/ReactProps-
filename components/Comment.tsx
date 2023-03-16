import React from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import UserInfo from "./UserInfo";



function Comment(props) {
    return (
        <div className="UserInfo">
          <UserInfo user={props.author} />
          <div className="UserInfo-name">
            {props.text}
          </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
      </div>
      </div>
    );
  }

  function formatDate(props){
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
      }
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const d = props.newDate
      const year = d.getFullYear()
      const date = d.getDate()
      const monthIndex = d.getMonth()
      const monthName = months[d.getMonth()]
      const dayName = days[d.getDay()] // Thu
      const formatted = `${dayName}, ${date} ${monthName} ${year}`.toString
      return (
        <div className="App">
          <h1>Blog posts</h1>
          <ul>
            {date.map((post) => (
              <li>
                <h3>{post.title}</h3>
                <p>{formatDate(post.createdAt)}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    
  }

  export default Comment;
  