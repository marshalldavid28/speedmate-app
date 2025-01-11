import Link from "next/link";

const events = [
  { id: 1, name: "Tech Lovers Meetup", date: "2025-01-20", location: "New York" },
  { id: 2, name: "Bookworms Unite", date: "2025-01-22", location: "Los Angeles" },
];

export default function Events() {
  return (
    <div>
      <h1>Upcoming Speed Dating Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>
              <a>
                {event.name} - {event.date} ({event.location})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
