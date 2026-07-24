import "./CreateMatch.css";

import {
    Trophy,
    Clock3,
    MapPin,
    Users,
    FileText,
    Sparkles
} from "lucide-react";

const CreateMatch = () => {

    return (

        <div className="cm__container">

            <div className="cm__backgroundGlow"/>

            <div className="cm__card">

                <div className="cm__logo">

                    <Trophy size={42}/>

                </div>

                <span className="cm__badge">

                    <Sparkles size={15}/>
                    Football Match

                </span>

                <h1 className="cm__title">

                    Create Match

                </h1>

                <p className="cm__subtitle">

                    Organize your next football game and invite players.

                </p>

                <div className="cm__field">

                    <Clock3 size={20}/>

                    <input
                        placeholder="Tomorrow,18:00"
                    />

                </div>

                <div className="cm__field">

                    <MapPin size={20}/>

                    <input
                        placeholder="Match Location"
                    />

                </div>

                <div className="cm__field">

                    <Users size={20}/>

                    <input
                        type="number"
                        placeholder="Maximum Players"
                    />

                </div>

                <div className="cm__textarea">

                    <FileText size={20}/>

                    <textarea
                        placeholder="Match description..."
                    />

                </div>

                <button className="cm__button">

                    Create Match

                </button>

            </div>

        </div>

    )

}

export default CreateMatch;