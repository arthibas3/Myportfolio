const projects = [
  {
    name: "AI Video Analyzer",
    repo: "Video-analyser",
    type: "Multimodal AI app",
    language: "Python",
    stack: ["Streamlit", "Whisper", "OCR", "BLIP", "CLIP"],
    featured: true,
    description:
      "Analyzes videos by combining ASR transcripts, OCR from sampled frames, visual captions, optional labels, sentiment, keywords, and story-style summaries.",
    url: "https://github.com/arthibas3/Video-analyser",
  },
  {
    name: "Diabetic Retinopathy Detection",
    repo: "Diabetic-Retinopathy-Detection-using-Deep-Learning-Models",
    type: "Health AI",
    language: "Jupyter Notebook",
    stack: ["TensorFlow", "Keras", "OpenCV", "Grad-CAM"],
    featured: true,
    description:
      "Deep learning system for detecting and classifying diabetic retinopathy from retinal fundus images using CNNs, transfer learning, and explainability tools.",
    url: "https://github.com/arthibas3/Diabetic-Retinopathy-Detection-using-Deep-Learning-Models",
  },
  {
    name: "QueuePro",
    repo: "queue_main",
    type: "Full-stack web app",
    language: "JavaScript",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    description:
      "Smart queue management system with real-time updates, voice announcements, routing, and a modern front-end/back-end architecture.",
    url: "https://github.com/arthibas3/queue_main",
  },
  {
    name: "Book Genre Classifier",
    repo: "bookgenre",
    type: "NLP classifier",
    language: "Python",
    stack: ["Python", "Training script", "Prediction CLI"],
    description:
      "Python machine-learning project organized around training and prediction scripts for classifying books by genre.",
    url: "https://github.com/arthibas3/bookgenre",
  },
  {
    name: "Self-Pruning Neural Network",
    repo: "self-pruning-neural-network",
    type: "Model optimization",
    language: "Jupyter Notebook",
    stack: ["Notebook", "Neural networks", "Optimization"],
    description:
      "Notebook-based exploration of neural network pruning, focused on reducing model complexity while studying performance behavior.",
    url: "https://github.com/arthibas3/self-pruning-neural-network",
  },
];

const grid = document.querySelector("#project-grid");

grid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card${project.featured ? " featured" : ""}">
        <div class="project-top">
          <div class="project-kicker">
            <span class="tag">${project.type}</span>
            <span class="tag">${project.language}</span>
          </div>
          <h3 class="project-title">
            <a href="${project.url}" target="_blank" rel="noreferrer">${project.name}</a>
          </h3>
          <p>${project.description}</p>
        </div>
        <div class="project-top">
          <div class="project-kicker">
            ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">
            View ${project.repo}
          </a>
        </div>
      </article>
    `
  )
  .join("");

document.querySelectorAll(".external-profile").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = link.dataset.url || link.href;
  });
});
