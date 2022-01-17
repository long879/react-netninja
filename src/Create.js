import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog author:</label>
        <select value={author.name} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yos">yos</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
