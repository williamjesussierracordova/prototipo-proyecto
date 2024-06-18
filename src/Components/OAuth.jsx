import { GoogleAuthProvider, signInWithPopup, getAuth, TwitterAuthProvider } from 'firebase/auth'
import { app } from '../Firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@mantine/core';
import { signInSuccess } from '../Redux/User/userSlice';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from "react-icons/fa";
import { readUser, readUserFromEmail, writeUser } from '../Firebase/UserManage/userController.js';


export default function OAuth() {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            let userData = await readUserFromEmail(resultsFromGoogle._tokenResponse.email);

            if (userData === null) {
                let randomNumber = getRandomInt(99999999);
                while (readUser(randomNumber) == null) {
                    randomNumber = getRandomInt(99999999);
                }
                writeUser(randomNumber,resultsFromGoogle._tokenResponse.email, '', '', resultsFromGoogle._tokenResponse.firstName, resultsFromGoogle._tokenResponse.lastName, '', '00000000')
                userData = await readUserFromEmail(resultsFromGoogle._tokenResponse.email);
                dispatch(signInSuccess(userData));
                console.log('Usuario creado');
                navigate('/');
            }
            else {
                dispatch(signInSuccess(userData));
                console.log('Usuario ya existente');
                navigate('/');
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleTwitterClick = async () => {
        const provider = new TwitterAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultsFromTwitter = await signInWithPopup(auth, provider);

            if (resultsFromTwitter) {
                console.log(resultsFromTwitter);
                dispatch(signInSuccess(resultsFromTwitter));
                navigate('/');
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Button onClick={handleGoogleClick}
                leftSection={<FcGoogle size={14} />}
                radius="md"
                variant="default"
                style={{ width: '100%', marginBottom: '10px' }}
            >
                Google
            </Button>
            <Button onClick={handleTwitterClick}
                leftSection={<FaTwitter size={14} color='#1D9BF0' />}
                radius="md"
                variant="default"
                style={{ width: '100%' }}
            >
                Twitter
            </Button>
        </div>
    )

}
