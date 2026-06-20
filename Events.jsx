const events = [
  {
    title: "Dance Battle",
    icon: "💃",
  },
  {
    title: "Music Fest",
    icon: "🎵",
  },
  {
    title: "Drama",
    icon: "🎭",
  },
  {
    title: "Photography",
    icon: "📸",
  },
  {
    title: "Fashion Show",
    icon: "✨",
  },
  {
    title: "Quiz",
    icon: "🧠",
  },
];

function Events() {
  return (
    <section className="events">
      <h2>Featured Events</h2>

      <div className="event-grid">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <span>{event.icon}</span>
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
