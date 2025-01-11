import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to SpeedMate!</h1>
      <nav>
        <ul>
          <li><Link href="/events"><a>View Events</a></Link></li>
          <li><Link href="/auth"><a>Login/Signup</a></Link></li>
          <li><Link href="/matches"><a>View Matches</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
