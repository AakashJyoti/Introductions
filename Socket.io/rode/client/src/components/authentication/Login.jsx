import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { VITE_SERVER_URL } = import.meta.env;

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all fields",
        status: "warning",
        duration: 5000,
        inClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `${VITE_SERVER_URL}/api/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      toast({
        title: "Login successful",
        status: "success",
        duration: 5000,
        inClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      clearForm();
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Login fail",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        inClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="cEmail" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email.."
        />
      </FormControl>
      <FormControl id="cPassword" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password.."
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h={"1.75rem"}
              size={"sm"}
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width={"100%"}
        onClick={() => {
          setEmail("guest@gmail.com");
          setPassword("123456");
        }}
      >
        Get guest user credentials
      </Button>
    </VStack>
  );
}
