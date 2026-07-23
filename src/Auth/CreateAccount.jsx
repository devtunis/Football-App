import "./CreateAccount.css";
import { User, Mail, Lock, Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const CreateAccount = () => {

    const navigate = useNavigate();

    const inputRef = useRef();

    const [image,setImage] = useState(null);

    const HandleImage = (e)=>{

        const file = e.target.files[0];

        if(file){
            setImage(URL.createObjectURL(file));
        }

    }

    return (
        <div className="createAccount">

            <div className="overlay"/>

            <div className="card">

                <button
                    className="backBtn"
                    onClick={()=>navigate("/login")}
                >
                    <ArrowLeft size={18}/>
                </button>

                <h1>Create <span>Account</span></h1>

                <p>
                    Join Sky Sports and start your football journey.
                </p>

                <div
                    className="avatar"
                    onClick={()=>inputRef.current.click()}
                >

                    {
                        image
                        ?

                        <img src={image} alt="profile"/>

                        :

                        <Camera size={35}/>
                    }

                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={HandleImage}
                />

                <div className="inputBox">
                    <User size={20}/>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                </div>

                <div className="inputBox">
                    <Mail size={20}/>
                    <input
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div className="inputBox">
                    <Lock size={20}/>
                    <input
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <button className="createBtn">
                    Create Account
                </button>

            </div>

        </div>
    )
}

export default CreateAccount;