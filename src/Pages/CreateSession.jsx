import React from "react";
import "./CreateSession.css";
import { Camera, PlusCircle } from "lucide-react";

const CreateSession = () => {
  return (
    <div className="container_create_session">

      <div className="createSession">

        <div className="create_header">

          <div className="create_icon">
            <PlusCircle size={30} />
          </div>

          <h1>Create Session</h1>

          <p>
            Build your football room and invite your friends.
          </p>

        </div>

        <div className="upload_image">

          <label htmlFor="image">

            <Camera size={35} />

            <span>Upload Cover Image</span>

          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
          />

        </div>

        <input
          type="text"
          placeholder="Session Name"
        />

             <input
          type="text"
          placeholder="Team Name"
        />

        <button>
          Create Session
        </button>

      </div>

    </div>
  );
};

export default CreateSession;