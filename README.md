# Astrolgy 
This project is designed as an astrology and coffee fortune-telling service. It leverages MongoDB as a NoSQL database for managing a wide variety of data models, such as user profiles, coffee cup images, fortune-telling results, and astrology-based features. The app allows users to upload images of their coffee cups, request fortunes, and receive personalized astrology readings, including daily, weekly, and monthly horoscope updates. Additionally, the application provides an in-depth analysis of the relationships between different zodiac signs, offering a unique feature for astrology enthusiasts.
Features
### 1.  User Registration and Authentication
* Users can create an account by providing personal details such as name, surname, birthdate, zodiac sign, and email.
*	After registering, users can log in to their profiles and update their personal information.
*	Each user can upload a profile photo and manage their photo album within the system.
### 2. Coffee Cup Fortune-Telling Service
*	Users can upload images of their coffee cups to request a fortune reading.
*	Each photo is stored in the database, and the fortune-telling process begins.
*	Initially, the fortune status is set to "In Progress" with the result message: "Your fortune is being analyzed. You will receive a notification once it's ready."
*	Once the fortune is ready, the result is updated and shown to the user, who receives a notification with their fortune.
### 3. Horoscope and Astrological Insights
*	The app provides daily, weekly, and monthly horoscope readings for users based on their zodiac signs.
*	Users can view personalized horoscopes derived from their birthdate and zodiac sign.
*	The horoscope data is regularly updated to give accurate and current insights into users' astrological trends.
### 4. Zodiac Compatibility
*	Users can explore the relationships between different zodiac signs.
*	By selecting two zodiac signs, the system provides an analysis of the compatibility between these signs.
*	This feature offers detailed insights into how different zodiac signs interact with each other, helping users understand which signs have strong compatibility and which may face challenges.
### 2. Blog Posts and Informational Content
*	The app features a blog section where users can read articles and updates related to coffee fortune-telling, astrology, and general spiritual wellness.
*	These blog posts aim to educate users on how astrology and fortune-telling work, provide tips for enhancing their experience, and deliver regular content to keep the user engaged.
### Technology Stack
*	Backend: Node.js with MongoDB for data storage and management.
*	Frontend: The project can be integrated with any modern frontend framework, such as React or Angular.
*	API: RESTful API structure to handle user requests, fortune-telling processes, horoscope readings, and zodiac compatibility checks.
*	Authentication: JWT-based authentication for secure login and session management.

## Installation

1. **Clone the repository** to your local machine:
    ```shell
    git clone https://github.com/berratombul/Astrolgy.git
    ```
2. **Navigate to the project directory**:
    ```shell
    cd Astrolgy
    ```
3. **Install the required dependencies**:
    ```shell
    npm install
    ```
4. **Create a configuration file** and set the required settings:
    ```shell
    cp .env.example .env
    ```
   Open the `.env` file in a text editor and fill in the settings correctly.

5. **Start the application**:
    ```shell
    npm start
    ```

