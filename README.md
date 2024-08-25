# Pepflix: Movie Queue Management Website

## Project Description

Pepflix is a modern movie queue management website designed to enhance your movie-watching experience. Built with React, Vite, and Tailwind CSS, Pepflix provides an intuitive interface for browsing movies, managing a queue, and storing movie preferences. The website integrates with the [FreeTestAPI](https://freetestapi.com/api/v1/movies) to fetch movie data and features a responsive design with a clean UI.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Font Awesome Icons
- Local Storage

## Setup and Run Instructions

### Prerequisites

- Node.js (v16.0.0 or later)
- npm (v8.0.0 or later)

### Setup Instructions

1. Clone the project repository from the source, or download it as a ZIP archive and extract it to your local machine.
    ```bash
    git clone https://github.com/yourusername/pepflix.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pepflix
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Project

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Key Features and Functionalities Implemented

1. **Header**:
    - Includes a queue icon that displays the number of movies in the queue.
    - Clicking the icon opens a sidebar component, `Queue`, which lists all movies in the queue.

2. **Queue Component**:
    - Displays a list of movies added to the queue.
    - Provides an organized view of the movies in the queue.

3. **Main Component**:
    - Manages various movie cards and integrates with the `MovieCard` component.
    - Handles the presentation of movie information fetched from the API.

4. **MovieCard Component**:
    - Represents individual movies with details such as title, poster, and description.

5. **Local Storage**:
    - Stores queue and API data for a day, after which it is reset.

6. **Responsive Design**:
    - Ensures a clean and user-friendly interface on various devices.

7. **Font Awesome Icons**:
    - Utilized for enhancing the UI with visually appealing icons.

## Demo Video

Check out the demo video showcasing the Pepflix website in action:

[Link To Demo Video](<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230612567600074752?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>)

## Authors

- [Muhammad Wasif Shakeel](https://github.com/mwasifshkeel)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [FreeTestAPI](https://freetestapi.com/api/v1/movies)
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
