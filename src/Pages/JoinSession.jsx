import React from "react";
import "./JoinSession.css";
import { Hash, ArrowRight } from "lucide-react";

const JoinSession = () => {
  return (
    <div className="container_join_session">
      <div className="containerSession">

        <div className="join_header">
          <div className="icon_circle">
            <Hash size={28} />
          </div>

          <h1>Join Session</h1>

          <p>
            Enter the invitation code to join your football session.
          </p>
        </div>

        <div className="join_input">
          <input
            type="text"
            placeholder="Enter Session Code"
          />

          <button>
            Join
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default JoinSession;