# AstroGuide Web App
<div style="text-align:center">
 
  ![what-is-astronomy-hero_twittershare_1024](https://github.com/Abhishek-465/Astroguide-web-app/assets/127030695/8fd6a31a-ee2e-4475-b1d5-247162752db1)


</div>
AstroGuide is a full-stack web application that provides users with a rich experience in exploring the wonders of our solar system. Users can view the astronomy picture of the day, access detailed information about planets, write and share blogs, and authenticate using Google credentials.

## Features

- **Astronomy Picture of the Day**: Every day, users can discover a stunning new image from NASA's collection, showcasing the beauty of space.
- **Planet Information**: Explore comprehensive details about each planet in our solar system, including facts, images, and scientific data.
- **Blogging Platform**: Users can share their thoughts, insights, and knowledge about astronomy and planets through the integrated blogging feature.
- **Google Authentication**: Secure and convenient login using Google accounts, ensuring a seamless user experience.
- **Database**: MongoDB is used as the database to store user data, blog posts, and other application-related information.
- **API Integration**: The application integrates with the Rapid API for real-time planet data and the NASA API to fetch the astronomy picture of the day.
- **Frontend**: Built with React.js using Vite for a dynamic and interactive user interface, enhanced with Tailwind CSS for modern and responsive styling.
- **Backend**: Node.js powers the backend, handling data processing, user authentication, and API interactions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhishek-465/AstroGuide.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd AstroGuide/frontend
   npm install

   cd ../backend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the backend directory.
   - Add your MongoDB connection string, Firebase API key for authentication, and any other required variables.

4. Run the development server:

   ```bash
   # Start frontend
   cd ../frontend
   npm run dev

   # Start backend
   cd ../backend
   node index.js
   ```


## Usage

- **Home Page**: View the astronomy picture of the day and navigate to different sections.
- **Planets**: Explore detailed information about each planet in the solar system.
- **Blogs**: Read and write blogs about astronomy topics, share knowledge, and engage with other users.
- **Authentication**: Sign in using your Google account to access personalized features and save preferences.

## Contributing

We welcome contributions to enhance AstroGuide! Feel free to submit bug reports, feature requests, or pull requests to help improve the application.
