import React, { useState } from "react";
import {
    Alert,
    Box,
    Text,
    FormControl,
    Heading,
    AlertText,
    Modal,
    ModalBackdrop,
} from "@gluestack-ui/themed";
import { Input, Button } from "../../components";
<<<<<<< HEAD
import { loginUser } from "../../actions/AuthAction";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const login = () => {
        if (email && password) {
            loginUser(email, password)
                .then((user) => {
                    // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
                    navigation.replace("MainApp");
                })
                .catch((error) => {
                    // Terjadi kesalahan saat login, tampilkan pesan kesalahan
                    console.log("Error", error.message);
                    toggleAlert(error.message);
                });
        }
    };

=======

const Login = ({ navigation }) => {
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
    return (
        <Box flex={1} backgroundColor="$blue400" justifyContent="center">
            <Box
                shadowColor="$black"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={"$25"}
                shadowRadius={"$3.5"}
                elevation={"$5"}
                backgroundColor="$white"
                borderRadius={"$md"}
                marginTop={"$10"}
                marginHorizontal={"$6"}
                p={"$5"}
            >
                <Heading size="3xl" color="$black">
                    Welcome
                </Heading>
                <Text size="sm" color="$black" my={"$1"}>
                    Sign in to continue!
                </Text>
                <FormControl>
                    <Input
                        label={"Login"}
                        width={"$full"}
                        height={"$10"}
<<<<<<< HEAD
                        onChangeText={(text) => setEmail(text)} // Set email ke dalam state
                        value={email}
=======
                        onChangeText={() => { }} // Set email ke dalam state
                        value={null}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                    />
                    <Input
                        label="Password"
                        width={"$full"}
                        height={"$10"}
                        secureTextEntry={true}
<<<<<<< HEAD
                        onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                        value={password}
=======
                        onChangeText={() => { }} // Set password ke dalam state
                        value={null}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                    />
                </FormControl>
                <Box flexDirection="column" my={"$5"}>
                    <Button
                        title="Login"
                        type="text"
                        padding={"$3"}
<<<<<<< HEAD
                        onPress={() => login()}
=======
                        onPress={() => {
                            navigation.navigate("MainApp");
                        }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                    />
                    <Text size="sm" color="$black" mt={"$4"}>
                        Don't have an account?
                    </Text>
                    <Button
                        title="Register"
                        type="text"
                        padding={"$3"}
                        onPress={() => {
                            navigation.navigate("Register");
                        }}
                    />
                </Box>
            </Box>
<<<<<<< HEAD

            {/* show Alert */}
            {showAlert && (
                <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
                    <ModalBackdrop />
                    <Alert mx="$4" action="error" variant="solid">
                        <AlertText fontWeight="$bold">Error!</AlertText>
                        <AlertText>{alertMessage}</AlertText>
                    </Alert>
                </Modal>
            )}
=======
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
        </Box>
    );
};

export default Login;