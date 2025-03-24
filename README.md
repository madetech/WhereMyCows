# Where My Cows

A React application for tracking cattle on your farm. Built with modern web technologies and following the MVC (Model-View-Controller) architectural pattern.

## Features

- Track cattle locations across different pastures
- Monitor health status and breeding information
- Add new cattle with detailed information
- Visual farm map with interactive pasture selection
- Filter cattle by location
- Responsive design for all devices

## Project Structure

The application follows the MVC (Model-View-Controller) architectural pattern:

```
src/
├── models/           # Data models and business logic
│   ├── Cattle.js        # Base cattle model with shared properties
│   ├── MaleCattle.js    # Male-specific cattle model
│   ├── FemaleCattle.js  # Female-specific cattle model
│   └── CattleFactory.js # Factory for creating cattle instances
├── controllers/      # Application logic and state management
│   └── CattleController.js  # Manages cattle data and operations
└── views/           # UI components and presentation
    ├── AddCattleForm.jsx    # Form for adding new cattle
    ├── CattleCard.jsx       # Card component for displaying cattle info
    ├── CattleList.jsx       # List view of all cattle
    ├── FarmMap.jsx          # Interactive farm map
    └── MyCattle.jsx         # Main cattle management view
```

### MVC Architecture

1. **Models** (`src/models/`)
   - Handle data structure and business logic
   - Define properties and methods for cattle data
   - Implement inheritance for different cattle types (Male/Female)
   - Provide data validation and formatting

2. **Controllers** (`src/controllers/`)
   - Manage application state
   - Handle data operations (CRUD)
   - Coordinate between models and views
   - Provide data access methods to views

3. **Views** (`src/views/`)
   - Handle UI rendering and user interaction
   - Receive data from controllers
   - Update UI based on user actions
   - Send user input back to controllers

### Example Flow

1. User clicks "Add New Cattle"
2. View (`AddCattleForm`) collects user input
3. Controller (`CattleController`) processes the form data
4. Model (`CattleFactory`) creates a new cattle instance
5. Controller updates the application state
6. View (`CattleList`) re-renders with the new data

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Development

- Built with React and Vite
- Uses CSS modules for styling
- Follows modern JavaScript practices
- Implements responsive design principles

## Testing

Run tests with:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 