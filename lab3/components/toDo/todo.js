import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";

export default function TodoListScreen() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [todoError, setTodoError] = useState("");
    const [todosRemaining, setTodosRemaining] = useState(0);

    const handleAddTodo = () => {
        if (todo.length > 0) {
            const newTodo = {
                id: Date.now().toString(),
                todo: todo,
                complete: false,
            };

            setTodos([...todos, newTodo]);
            setTodo("");
            setTodoError("");
        } else {
            setTodoError("todo not valid");
        }
    };

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };

    const handleCompleteTodo = (id) => {
        const newTodos = [...todos];
        const completedItemIndex = todos.findIndex((todo) => todo.id == id);
        newTodos[completedItemIndex].complete = true;
        setTodos(newTodos);
    };

    useEffect(() => {
        setTodosRemaining(todos.filter((todo) => todo.complete).length);
    });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add todo"
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                {todoError && <Text style={styles.inputError}>{todoError}</Text>}
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todo}>
                        <Text
                            style={[
                                styles.todoText,
                                { textDecorationLine: item.complete ? "line-through" : "none" },
                            ]}
                        >
                            {item.todo}
                        </Text>
                        <Button
                            title="Complete"
                            onPress={() => handleCompleteTodo(item.id)}
                        />
                        <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
                    </View>
                )}
            />
            <Text style={styles.counter}>
                {todosRemaining} compleded of {todos.length}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1, // Added flex property
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginRight: 20, // Added marginRight for spacing between input and button

    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#39bfd6",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    list: {
        width: "100%",
        marginTop: 20,
    },
    todo: {
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
    todoText: {
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
        fontSize: 16,
    },
});
