import React, { useEffect, useState } from "react";
import "./Projects.css";
import Navbar from "../components/Navbar";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    tech: "",
    image: null
  });

  // FETCH PROJECTS
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ADD PROJECT (MULTER SUPPORT)
  const addProject = async () => {
    if (!form.title || !form.desc || !form.tech || !form.image) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("desc", form.desc);
    formData.append("tech", form.tech);
    formData.append("image", form.image);

    await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: formData
    });

    setForm({
      title: "",
      desc: "",
      tech: "",
      image: null
    });

    fetchProjects();
  };

  // DELETE PROJECT
  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE"
    });

    fetchProjects();
  };

  return (
    <section className="projects">
      <Navbar />

      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">
          <h2>Project Dashboard</h2>
          <p>Manage and showcase your portfolio projects</p>
        </div>

        {/* FORM */}
        <div className="project-form">

          <input
            type="text"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            placeholder="Project Description"
            value={form.desc}
            onChange={(e) =>
              setForm({ ...form, desc: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Tech (React, Node, MongoDB)"
            value={form.tech}
            onChange={(e) =>
              setForm({ ...form, tech: e.target.value })
            }
          />

          {/* 🔥 IMAGE INPUT */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setForm({ ...form, image: e.target.files[0] })
            }
          />

          <button onClick={addProject}>
            Add Project
          </button>

        </div>

        {/* PROJECT LIST */}
        <div className="projects-grid">

          {projects.map((p) => (
            <div className="project-card" key={p._id}>

              {/* IMAGE SHOW */}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "10px"
                  }}
                />
              )}

              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-tech">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <button 
                className="delete-btn"
                onClick={() => deleteProject(p._id)}
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;