import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "T1 ekf ejkfnkjeflkefwekfmlkwemfkwlemfklwemfe lwemdlkwemdlewmdlwemdlmewldmeldmewkld lmdlkmdlwemdlewmdlewmdewldmlwekdmd lmdlkmd",
    description:
      "D1 dlf eklflkemflkemflkemflewmflwmflwemflemfeffflwlkfewlfmlfmlmflmflmflmflmflmflmflwmflwmflkwmflwmflemg rknkjrnglnlfmlmflmflmflsfslgnlg efklfm",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
    // Call the server and delete it form the backend
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected  ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
