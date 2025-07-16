🎬 #Movie App - #React Native

This is a mobile movie discovery application built with React Native. It allows users to search for movies, view detailed information, and keep track of their recent searches using Appwrite integration. The app features a clean, responsive UI styled with Tailwind CSS and includes modern animations and masked transitions for a smooth user experience.

🚀 Features
🔍 Movie Search Functionality
Integrated with the TMDB (The Movie Database) API to fetch and display up-to-date movie data.

📚 Recent Search Tracking
Users' latest searched movies are stored and displayed through Appwrite, providing persistent access to their recent activity.

🎨 Beautiful UI with Tailwind CSS
Styling is handled using Tailwind CSS, allowing for rapid development and a consistent design system.

🖼️ Masked View Transitions
Smooth screen transitions and visual effects using MaskedView to enhance user experience.

⚙️ Modern Development Stack
Built with best practices in mind using:

React Native

Tailwind CSS (via tailwind-react-native-classnames)

Appwrite (for backend and database)

TMDB API (for movie data)

📦 Technologies Used
React Native

TypeScript

Tailwind CSS

Appwrite (Authentication & Database)

TMDB API

MaskedView

▶️ Getting Started
To run this project locally, make sure you have Node.js, Expo CLI, and Yarn or npm installed.

1. Clone the repository
2. Install dependencies
   
   npm install
   or
   yarn install
   
3. Set up environment variables
   Create a .env file in the root directory and add the following (you can rename the variables based on your implementation):
   
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
   
5. Start the development server

   npx expo start
   or
   yarn expo start

This will launch the Expo developer tools. You can scan the QR code with the Expo Go app or run the app on an emulator/simulator.
