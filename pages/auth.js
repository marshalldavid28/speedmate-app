export default function Auth() {
  return (
    <div>
      <h1>User Authentication</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
}
