import React from "react";
import style from './Prompt.module.css';

interface PromptProps {
    usernameHandler: (username: string) => void;
    submitHandler: () => void
}


const Prompt = ({ usernameHandler, submitHandler }: PromptProps) => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus()
        }
    }, []);

    const [promptUsername, setPromptUsername] = React.useState<string>("")

    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let key = event.key;
        if (key === "Enter") {
            event.preventDefault();
            if (promptUsername.length > 0) {
                usernameHandler(promptUsername);
                submitHandler();
            }
        }
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromptUsername(e.target.value);
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        usernameHandler(promptUsername);
        submitHandler();
    }

    return (
        <div className={style.PromptContainer}>
            <div className={style.Content}>
                <p className={style.Title}>Enter username</p>
                <input
                    type="text"
                    name="username"
                    id=""
                    className={style.UsernameInput}
                    onKeyPress={keyPressHandler}
                    onChange={inputHandler}
                    ref={inputRef}
                    tabIndex={1}
                    value={promptUsername}
                />
                <button className={style.PromptButton} onClick={handleButton} tabIndex={2}>Chat</button>
            </div>
        </div>
    )
}

export default Prompt;
