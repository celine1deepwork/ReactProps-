import React from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

 function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  export default Avatar;