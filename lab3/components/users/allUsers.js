import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import routes from "../../common/routes";
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        name: "Rowan Tamer",
        username: "Rowan",
        email: "Rowan@gmail.com",
        address: {
            region: "Sidi bishr",
            city: "Alexandria",
        },
        phone: "01280789865"
    },
    {
        id: 2,
        name: "Shahd Tamer",
        username: "Shahd",
        email: "Shahd@gmail.com",
        address: {
            region: "Sidi bishr",
            city: "Alexandria",
        },
        phone: "01280789865"
    },
    {
        id: 3,
        name: "Ali Tamer",
        username: "Ali",
        email: "Ali@gmail.com",
        address: {
            region: "Sidi bishr",
            city: "Alexandria",
        },
        phone: "01280078965"
    },
  ]);

  const { navigate } = useNavigation()

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        style={styles.list}
        data={users.filter((user) => user.name.includes(search))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text style={[styles.userText]}>{item.name}</Text>
            <Button
              title="Details"
              onPress={() => {
                navigate(routes.details, item);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    width: "95%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10
  },
  list: {
    width: "95%",
    marginTop: 20,
    marginHorizontal: 10
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    gap: 10,
    padding: 10,
    marginBottom: 10,
  },
  userText: {
    flex: 1,
    marginRight: 10,
  },
  inputError: {
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },
  counter: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default UsersList;
