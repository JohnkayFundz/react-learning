function Lesson07RenderingLists() {
  const lessons = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <div>
      <h1>Lesson 7: Rendering Lists</h1>

      <ul>
        {lessons.map((lesson) => (
          <li key={lesson}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lesson07RenderingLists;