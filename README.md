
## 📊 JSON Graph Visualizer

A React-based tool to visualize any JSON file as an interactive, draggable graph but lightweight and customizable.

Built with:

* 🔄 **React Flow** for visual graph rendering
* 🧠 **Dagre** for clean auto-layout
* 📂 File input to upload `.json` files

---

### 🔧 Features

* 📁 Upload any JSON file
* 🔄 Automatically visualized as a graph
* 🖱️ Drag & move nodes
* 🔍 Zoom, pan, and controls
* 🧭 Clean top-down layout using **Dagre**
* 🧩 Nested objects & arrays supported

---

### 🚀 Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/John-Oliver04/json-graph-visualizer.git
cd json-graph-visualizer
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the development server

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

### 📁 Usage

1. Launch the app.
2. Click **Upload** to select a `.json` file.
3. The structure will be automatically rendered as a graph.
4. Drag nodes or zoom/pan freely.

---

### 📦 Dependencies

* [`react`](https://reactjs.org/)
* [`reactflow`](https://reactflow.dev/)
* [`dagre`](https://github.com/dagrejs/dagre)

Install manually (if needed):

```bash
npm install reactflow dagre
```

---

### 🧪 Example JSON

```json
{
  "user": {
    "name": "Jane Doe",
    "age": 30,
    "address": {
      "city": "Manila",
      "zip": "1000"
    }
  }
}
```

---

### 🛠 To Do / Ideas

* 📤 Export graph as PNG
* 🌈 Color-code nodes by type
* 📝 Paste JSON manually
* 💾 Save/load previous sessions

---

### 📄 License

MIT License — free for personal & commercial use.

---
