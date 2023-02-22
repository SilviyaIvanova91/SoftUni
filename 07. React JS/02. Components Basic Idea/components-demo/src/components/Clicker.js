import {useState} from 'react';

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(oldClicks => oldClicks + 1);
    }

    const dangerClicks = clicks > 20;

    if (clicks > 30) {
        return <h1>Finished Clicks</h1>
    }

    return (
        <div>
            <div>
                {dangerClicks && <h1>Danger Clicks</h1>}
                {clicks > 10
                    ? <h2>Medium Clicks</h2>
                    : <h4>Normal Clicks</h4>
                }
            </div>
            <button onClick={clickHandler}>{clicks}</button>
        </div>
    );
}