import { useState, useEffect } from "react";

export default function LostFound() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("LOST");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);

  const BASE_URL = "http://localhost:8080";

  // 🔄 Load all items
  const load = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/lostfound`);

      if (!res.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Load error:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // ➕ Add Item
  const submit = async () => {
    try {
      const form = new FormData();
      form.append("type", type);
      form.append("name", name);
      form.append("description", description);
      form.append("location", location);

      if (file) {
        form.append("file", file);
      }

      const res = await fetch(`${BASE_URL}/api/lostfound`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      alert("Item Added Successfully ✅");

      // Clear form
      setName("");
      setDescription("");
      setLocation("");
      setFile(null);

      load();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  // ❌ Claim (Delete)
  const claim = async (id) => {
    try {
      await fetch(`${BASE_URL}/api/lostfound/${id}`, {
        method: "DELETE",
      });
      load();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="card">
      <h2>🔎 Lost & Found</h2>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="LOST">Lost</option>
        <option value="FOUND">Found</option>
      </select>

      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={submit}>Add Item</button>

      <hr />

      <h3>📦 Available Items</h3>

      {items.length === 0 && <p>No items available</p>}

      {items.map((i) => (
        <div key={i.id} className="item">
          <p><b>{i.name}</b> ({i.type})</p>
          <p>{i.description}</p>
          <p><i>Location: {i.location}</i></p>

          {i.photo && (
            <img
              src={`${BASE_URL}/uploads/${i.photo}`}
              alt="item"
              width="120"
            />
          )}

          <br />
          <button onClick={() => claim(i.id)}>Claim</button>
        </div>
      ))}
    </div>
  );
}