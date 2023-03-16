import React from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from "./Avatar";


function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  export default UserInfo;