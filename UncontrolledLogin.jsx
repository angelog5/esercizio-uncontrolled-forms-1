export default function UncontrolledLogin() {
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const remember = form.elements.remember.checked;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label>
            Remember me:
            <input type="checkbox" name="remember" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
