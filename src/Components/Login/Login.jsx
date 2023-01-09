import React, { useEffect, useRef, useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import SocialLogin from "../notification/SocialLogin";
import { Title, Highlight } from "../../Style/StyledTypography";
import { Input, Button } from "../../Style/StyledComponents";
import { useCookies } from "react-cookie";
//Custom Axios client with header & authorization
import { client } from "../../utils/client.mjs";
import toast from "../notification/toastMessage";
import useContextHook from "../../utils/customContextHook";



const Container = styled.div`
  text-align: center;
`;

const Line = styled.hr`
  color: red;
  display: inline-block;
  width: 10vw;
`;

export default function Login({ setJwttoken }) {
    //Cookie Hook
    const [cookies, setCookie] = useCookies(["token"]);
    const [loading, setLoading] = useState(false)
    //FORM REFS
    const email = useRef();
    const password = useRef();
    const { setAuthorized, setUser, token } = useContextHook()

    const navigate = useNavigate()
    //TOKEN GET STORED IN LOCAL HOST WE RECIVE FROM BACKEND
    const login = async (e, email, password) => {
        e.preventDefault();

        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(true)
        await client(token)
            .post("/login", { email, password })
            .then((response) => {
                console.log(response)
                const { token, user } = response.data;
                // Save the JWT token in local storage
                localStorage.setItem("token", token);

                setUser(user[0])
                setAuthorized(true)
                setJwttoken(token);
                //Sets Cookie for 1 hour
                setCookie("token", token, { path: "/", maxAge: 3600 });
                // document.cookie = `token=${response.data.token}`;

                //Sets message for display
                setMessage(response.data);

                //clears the Notification
                setTimeout(() => {
                    navigate('/')
                    setMessage(null);
                }, 2000);


            })
            .catch((err) => {
                console.log(err);
                setMessage(err.response.data);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(false)
    };

    // Notification toast takes type and message from the response
    const [message, setMessage] = useState();
    useEffect(() => {
        if (message) toast(message.type, message.message);
    }, [message]);
    return (
        <>
            {/* {message && <Notification data={message} />} */}
            <Container>
                <Title color="white">Login</Title>
                <SocialLogin />
                <Line /> OR <Line />
                <form
                    onSubmit={(e) =>
                        login(e, email.current.value, password.current.value)
                    }
                >
                    <Input ref={email} type="email" name="email" placeholder="Email" />
                    <Input
                        ref={password}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <Button
                        type="submit"
                        className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
                        disabled={loading}
                    >
                        <Highlight color="color">{loading ? "Loading..." : "Continue"}</Highlight>
                    </Button>
                </form>
                <Container>
                    <div>
                        <input type={"checkbox"} name={"rememberme"} />
                        <label htmlFor="rememberme"> Remember Me </label>
                    </div>
                    <Link to="/" style={{ color: "#56c38d" }}>
                        Forgot Password ?
                    </Link>
                </Container>
                <Line />
            </Container>
        </>
    )
}

