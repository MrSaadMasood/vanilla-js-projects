# JavaScript Quote Generator

## Overview

The JavaScript Quote Generator is a simple web application that dynamically displays inspirational quotes and their respective authors. Users can click a button to generate a new quote, providing a source of motivation or reflection. The project incorporates HTML for structure, CSS for styling, and JavaScript for interactivity.

## Features

- **Random Quotes:** The application displays a collection of ten quotes randomly each time the user clicks the "New Quote" button.

- **Attractive Design:** The interface is designed with a clean and elegant layout, enhancing the user experience.

- **Responsive:** The web application is responsive, ensuring a seamless experience across various devices.

## Getting Started

### Prerequisites

Ensure you have a modern web browser installed to view and interact with the web application.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrSaadMasood/vanilla-js-projects.git
   ```

2. Open the `index.html` file in your preferred web browser.

## Usage

Click the "New Quote" button to generate a random quote along with its author. Feel free to use the project as a template for creating your own quote generator.

## Code Explanation

### HTML (index.html)

- The HTML file defines the structure of the web page, including containers for the quote, author, and the "New Quote" button.

### CSS (Quote Generator Styling.css)

- CSS is used for styling the web page, creating an aesthetically pleasing and responsive design.

### JavaScript (Quote Generator Logic.js)

- `quotes_object`: An object containing ten quotes, each with a quote and author.

- `button`: Selects the "New Quote" button from the HTML.

- `no_of_quotes`: Tracks the current quote number.

- `change(e)`: Event listener function that updates the displayed quote and author when the "New Quote" button is clicked.

    - Selects the quote and author elements.
    
    - Checks if all quotes have been displayed; if so, resets to the first quote.
    
    - Updates the content with the next quote and author.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [Saad Masood](https://www.linkedin.com/in/saad-masood-8b100125b/)

## Contact

For any inquiries or feedback, please contact mrsaadmasood1@gmail.com.

Enjoy inspiring quotes! 🌟