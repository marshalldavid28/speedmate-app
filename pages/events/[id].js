import { useRouter } from "next/router";

const eventDetails = {
  1: {
    name: "Tech Lovers Meetup",
    date: "2025-01-20",
    location: "New York",
    description: "A fun night for tech enthusiasts to connect.",
  },
  2: {
    name: "Bookworms Unite",
    date: "2025-01-22",
    location: "Los Angeles",
    description: "Meet fellow book lovers and share your favorite reads.",
  },
};

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const event = eventDetails[id];

  if (!event) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
    </div>
  );
}
