import React from "react";
import style from './UserInputControls.module.css';

interface UserInputControlsProps {
    sendHandler: (text: string) => void;
}

const UserInputControls = ({ sendHandler }: UserInputControlsProps) => {

    const [inputText, setInputText] = React.useState<string>("")

    const inputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let key = event.key;
        if (key === "Enter") {
            event.preventDefault();
            if (inputText.length > 0) {
                sendHandler(inputText)
                setInputText("")
            }
        }
    }

    return (
        <div className={style.UserInputContainer}>
            <div className={style.UserInputController}>
                <input type="text" name="" id="" value={inputText} className={style.TextInput} autoFocus={true}
                    onKeyPress={keyPressHandler}
                    onChange={inputHandler}
                />
                <button className={style.SendButton} onClick={() => console.log(inputText)}>Send</button>
            </div>
        </div>
    )
};

export default UserInputControls;
