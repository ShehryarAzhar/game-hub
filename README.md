# 🎮 Game Hub

A polished, production-ready video game discovery app built with **React** and **TypeScript**, powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

🔗 **Live Demo:** [game-hub-pied.vercel.app](https://game-hub-pied.vercel.app)

---

## 📸 Preview

![Game Hub Preview](https://github.com/user-attachments/assets/3e380796-cf2d-4156-971a-88a8f0b9dc85)

---

## ✨ Features

- 🔍 **Game Search** — Instantly search from a massive library of video games
- 🎛️ **Filtering** — Filter games by genre, platform, and more
- 📊 **Sorting** — Sort results by relevance, rating, release date, and more
- 🌗 **Light & Dark Mode** — Toggle between themes for a comfortable browsing experience
- 💀 **Loading Skeletons** — Smooth skeleton loaders while content is being fetched

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| TypeScript | Type safety |
| Chakra UI | Component library & theming |
| RAWG API | Video game data source |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- A free [RAWG API key](https://rawg.io/apidocs)

### Installation

```bash
# Clone the repository
git clone https://github.com/ShehryarAzhar/game-hub.git
cd game-hub

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_RAWG_API_KEY=your_api_key_here
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
game-hub/
├── src/
│   ├── assets/             # Static assets (images, icons, ...)
│   ├── components/
│   │   ├── ui/             # Auto-generated Chakra UI components
│   │   └── ...             # Reusable app components
│   ├── data/
│   │   ├── genres.ts       # Genre definitions
│   │   └── platforms.ts    # Platform definitions
│   ├── hooks/              # Custom React hooks
│   ├── services/
│   │   ├── api-client.ts   # Axios / API setup
│   │   └── image-url.ts    # Image URL helper
│   └── ...
└── ...
```

---

## 🌐 Deployment

This app is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add your `VITE_RAWG_API_KEY` as an environment variable
4. Deploy 🚀

---

## 🔗 Related

Looking for the enhanced version with React Query, React Router, Zustand, and infinite scrolling? Check out [Game Hub v2](https://github.com/ShehryarAzhar/game-hub-v2).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
