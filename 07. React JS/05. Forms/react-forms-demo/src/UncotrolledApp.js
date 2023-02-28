import './App.css';

function App() {

    const submitHandler = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        console.log(username);
        console.log(password);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                        {/* <button type="submit">Login</button> */}
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
