import React, { useState } from "react";
import {
    Box,
    Alert,
    FormControl,
    Text,
    Modal,
    ModalBackdrop,
    AlertText,
} from "@gluestack-ui/themed";
<<<<<<< HEAD
import { Input, Button } from "../../components";
import { registerUser } from "../../actions/AuthAction";
import BackFAB from "../../components/kecil/back_fab";

const Register = ({ navigation }) => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nohp, setNohp] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const onRegister = async () => {
        if (nama && email && nohp && password) {
            const data = {
                nama: nama,
                email: email,
                nohp: nohp,
                status: "user",
            };

            console.log(data);

            try {
                const user = await registerUser(data, password);
                navigation.replace("MainApp");
            } catch (error) {
                console.log("Error", error.message);
                toggleAlert(error.message);
            }
        } else {
            console.log("Error", "Data tidak lengkap");
            toggleAlert("Data tidak lengkap");
        }
    };

=======
import { Input, Button } from "../../components/kecil";
import BackFAB from "../../components/kecil/back_fab";

const Register = ({ navigation }) => {
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
    return (
        <Box flex={1} backgroundColor="$blue400" justifyContent="center">
            <BackFAB />
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
                <Text size="3xl" color="$black" fontWeight="bold">
                    Hello~
                </Text>
                <Text size="sm" color="$black" my={"$1"}>
                    Sign up to continue!
                </Text>
                <FormControl>
                    <Input
                        label="Nama"
<<<<<<< HEAD
                        value={nama}
                        onChangeText={(nama) => setNama(nama)}
=======
                        value={null}
                        onChangeText={() => { }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        height={"$10"}
                    />
                    <Input
                        label="Email"
<<<<<<< HEAD
                        value={email}
                        onChangeText={(email) => setEmail(email)}
=======
                        value={null}
                        onChangeText={() => { }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        height={"$10"}
                    />
                    <Input
                        label="No. Handphone"
                        keyboardType="phone-pad"
<<<<<<< HEAD
                        value={nohp}
                        onChangeText={(nohp) => setNohp(nohp)}
=======
                        value={null}
                        onChangeText={() => { }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        height={"$10"}
                    />
                    <Input
                        label="Password"
                        secureTextEntry
<<<<<<< HEAD
                        value={password}
                        onChangeText={(password) => setPassword(password)}
=======
                        value={null}
                        onChangeText={() => { }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        height={"$10"}
                    />
                </FormControl>
                <Box flexDirection="column" my={"$5"}>
                    <Button
                        title="Register"
                        type="text"
                        icon="submit"
                        padding={"$3"}
                        fontSize={"$md"}
                        onPress={() => {
<<<<<<< HEAD
                            onRegister();
=======
                            navigation.navigate("Login");
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
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

export default Register;