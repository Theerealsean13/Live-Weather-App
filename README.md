# Live Weather Application

[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF.svg)](https://vitejs.dev/)
[![OpenWeatherMap API](https://img.shields.io/badge/API-OpenWeatherMap-FF6B35.svg)](https://openweathermap.org/api)

A dynamic, real-time weather application engineered with React. This project demonstrates proficiency in asynchronous data fetching, state management, and modern frontend architecture, paired with a highly polished visual interface.

---

## Project Interface
Main Weather Map showing the Johannesburg real-time API data.
<img width="1343" height="904" alt="Screenshot 2026-05-11 201712" src="https://github.com/user-attachments/assets/0b535b3e-75e0-464d-a78c-c34e1544b37b" />


Error Handling State that non-existent searches cannot be found. 
<img width="1334" height="893" alt="Screenshot 2026-05-11 201649" src="https://github.com/user-attachments/assets/b74a6b47-d78b-4ee5-9901-2052a3448fef" />

---

## UI/UX Design Philosophy
The application features a premium digital aesthetic utilizing **Glassmorphism (Liquid Glass)** techniques to maintain visual consistency.
*   **Visual Style:** Inspired by clean, vibrant environmental art styles similar to Studio Ghibli, the interface uses semi-transparent `rgba` backgrounds and `backdrop-filter: blur()` to create a frosted-glass effect over dynamic backgrounds.
*   **Responsiveness:** Engineered with a mobile-first approach, ensuring the interface remains sharp, accessible, and perfectly scaled across all device sizes.

## Technical Implementation
*   **Asynchronous JavaScript:** Utilizes modern `async/await` syntax and the `fetch` API to securely communicate with the OpenWeatherMap endpoint.
*   **Robust Error Handling:** Implements comprehensive `try...catch` blocks to manage edge cases. This ensures users receive graceful UI feedback (e.g., "City Not Found") instead of experiencing application crashes.
*   **State Management:** Leverages React Hooks to fluidly manage loading states, external weather data payloads, and user input without unnecessary page rerenders.

---

## How to Run Locally

If you would like to test this application on your local machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/live-weather-app.git](https://github.com/yourusername/live-weather-app.git)
