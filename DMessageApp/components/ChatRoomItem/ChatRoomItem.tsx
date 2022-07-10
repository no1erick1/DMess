import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import ChatRooms from "../../assets/dummy-data/ChatRooms";
// import { useNavigation } from "@react-navigation/core";
// import { DataStore } from "@aws-amplify/datastore";
// import { ChatRoomUser, User, Message } from "../../src/models";
import styles from "./styles";
// import Auth from "@aws-amplify/auth";
// import moment from "moment";

export default function ChatRoomItem({chatRoom}) {
  const user = chatRoom.users[1];
//   // const [users, setUsers] = useState<User[]>([]); // all users in this chatroom
//   const [user, setUser] = useState<User | null>(null); // the display user
//   const [lastMessage, setLastMessage] = useState<Message | undefined>();
//   const [isLoading, setIsLoading] = useState(true);

//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const fetchedUsers = (await DataStore.query(ChatRoomUser))
//         .filter((chatRoomUser) => chatRoomUser.chatroom.id === chatRoom.id)
//         .map((chatRoomUser) => chatRoomUser.user);

//       // setUsers(fetchedUsers);

//       const authUser = await Auth.currentAuthenticatedUser();
//       setUser(
//         fetchedUsers.find((user) => user.id !== authUser.attributes.sub) || null
//       );
//       setIsLoading(false);
//     };
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     if (!chatRoom.chatRoomLastMessageId) {
//       return;
//     }
//     DataStore.query(Message, chatRoom.chatRoomLastMessageId).then(
//       setLastMessage
//     );
//   }, []);

//   const onPress = () => {
//     navigation.navigate("ChatRoom", { id: chatRoom.id });
//   };

//   if (isLoading) {
//     return <ActivityIndicator />;
//   }

//   const time = moment(lastMessage?.createdAt).from(moment());

  return (
    // <Pressable onPress={onPress} style={styles.container}>
    <View style={styles.container}>
      <Image
        source={{ uri: user.imageUri }}
        // source={{ uri: chatRoom.imageUri || user?.imageUri }}
        style={styles.image}
      />

      {!!chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )} 

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          {/* <Text style={styles.name}>{chatRoom.name || user?.name}</Text>
          <Text style={styles.text}>{time}</Text> */}
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text> 
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {/* {lastMessage?.content} */}
          {chatRoom.lastMessage.content} 
        </Text>
      </View>
      </View>
    // </Pressable>
  );
}
