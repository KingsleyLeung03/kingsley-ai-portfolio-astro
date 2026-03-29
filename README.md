# Kingsley's AI Portfolio (Astro Rewrite)

A modern, fast, and responsive personal portfolio rewritten with the [Astro](https://astro.build) framework. This site showcases my professional experience, skills, and projects, and features an interactive AI chatbot powered by Google Gemini.

## 🚀 Features

- **Blazing Fast Performance:** Leverages Astro's zero-JS-by-default architecture and Server Islands to deliver exceptional page load speeds.
- **Interactive AI Chatbot:** An integrated assistant that can answer questions based on my resume context in real-time.
- **Responsive UI:** Built with Tailwind CSS and DaisyUI, ensuring a premium and seamless experience across all devices.
- **Type-safe:** Developed with TypeScript for robust code quality and maintainability.
- **Automated Deployments:** CI/CD pipeline via GitHub Actions to seamlessly deploy to Vercel.

## 🛠️ Built With

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Google Gemini API](https://deepmind.google/technologies/gemini/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KingsleyLeung03/kingsley-ai-portfolio-astro.git
   ```

2. Navigate into the project directory:

   ```bash
   cd kingsley-ai-portfolio-astro
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables:
   Create a `.env` file in the root directory and add your Google Gemini API key:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:4321`.

## 📜 License

This project is licensed under the MIT License.
