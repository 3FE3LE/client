export const Form = () => {
  return (
    <div>
      <form action="">
        <h3>Log in</h3>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username/email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="type your password" />
        </div>
        <input type="submit" value={`Submit`} />
      </form>
    </div>
  );
};
