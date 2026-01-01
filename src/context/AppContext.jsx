// import React, { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//     const [user, setUser] = useState(null);
//     const [showLogin, setShowLogin] = useState(false);
//     const [token, setToken] = useState(localStorage.getItem('token'))

//     const [credit, setCredit] = useState(false)

//     const backendUrl = import.meta.env.VITE_BACKEND_URL

//     const navigate = useNavigate()

//     const isAuthenticated = !!token;

//     const loadCreditsData = async () => {
//         try {
//             const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })

//             if (data.success) {
//                 setCredit(data.credits)
//                 setUser(data.user)
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         }
//     }


//     const generateImage = async (prompt) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } })

//             if (data.success) {
//                 loadCreditsData()
//                 return data.resultImage
//             } else {
//                 toast.error(data.message)
//                 loadCreditsData()
//                 if (data.creditBalance === 0) {
//                     navigate('/buy')
//                 }
//             }
//         } catch (error) {
//             console.log("here is error");
//             toast.error(`${error.message} here is error`)
//         }
//     }

//     const logout = () => {
//         localStorage.removeItem('token')
//         setToken('')
//         setUser(null)
//         navigate('/')


//     }

//     useEffect(() => {
//         if (token) {
//             loadCreditsData()
//         }
//     }, [token])

//     const value = {
//         user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage, isAuthenticated
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };

// export default AppContextProvider;
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(0);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const isAuthenticated = Boolean(token);

    /* ---------------- LOAD USER + CREDITS ---------------- */
    const loadCreditsData = async () => {
        if (!token) return;

        try {
            const { data } = await axios.get(
                `${backendUrl}/api/user/credits`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            } else {
                toast.error(data.message || "Failed to load user data");
            }
        } catch (error) {
            console.error(error);
            toast.error("Unable to fetch user data");
        }
    };

    /* ---------------- IMAGE GENERATION ---------------- */
    const generateImage = async (prompt) => {
        if (!token) {
            setShowLogin(true);
            return;
        }

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                await loadCreditsData();
                return data.resultImage;
            } else {
                toast.error(data.message || "Image generation failed");
                await loadCreditsData();

                if (data.creditBalance === 0) {
                    navigate("/buy");
                }
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error while generating image");
        }
    };

    /* ---------------- LOGOUT ---------------- */
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        setCredit(0);
        navigate("/");
    };

    /* ---------------- AUTO LOAD ON TOKEN ---------------- */
    useEffect(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        generateImage,
        logout,
        isAuthenticated,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
