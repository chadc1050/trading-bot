import {useEffect, useState} from "react";
import {string} from "prop-types";

const Login = () => {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [authUrl, setAuthUrl] = useState("")

    useEffect(() => {
        // Call is logged in
        fetchIsLoggedIn()

        // Auth call to get uri
        if (!isLoggedIn) {
            fetchAuth()
        }
    }, [isLoggedIn]);

    const fetchAuth = () => {

        const base : string = process.env.NEXT_PUBLIC_TRADING_BOT ?? ''
        const authUri : string = process.env.NEXT_PUBLIC_AUTH_URI ?? ''
        const requestUrl : string = base + authUri;

        fetch(requestUrl, {
            method: "Post"
        }).then((res) => res.json())
            .then((response) => {
                console.log(response)
                const authUrl : string = response.authUrl
                setAuthUrl(authUrl)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setIsLoading(false)
            });
    }

    const fetchIsLoggedIn = () => {

        const base : string = process.env.NEXT_PUBLIC_TRADING_BOT ?? '';
        const isLoggedInUri : string = process.env.NEXT_PUBLIC_LOGGED_IN ?? '';
        const requestUri = base + isLoggedInUri;

        fetch(requestUri, {
            method: 'Get'
        }).then((result) => result.json())
            .then((response) => {
                console.log(response)
                setLoggedIn(response.isLoggedIn)
            }).catch((error) => {
                console.error(error);
                setLoggedIn(false);
        })
    }

    if(!isLoggedIn && !isLoading) {
        return <a target={'_blank'} href={authUrl} rel="noreferrer"><button>Log In</button></a>
    } else {
        return <p>Loading or error!</p>
    }
}

export default Login