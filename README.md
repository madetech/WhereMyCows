# Where My Cows

A React application for tracking and managing cattle. This application helps farmers and ranchers keep track of their cattle's location, health status, and other important information.

## Features

- Track cattle location across different pastures
- Monitor health status of individual cattle
- Add new cattle with detailed information
- Responsive design for use on desktop and mobile devices
- Dark theme for better visibility in outdoor conditions
- Comprehensive test coverage for all models and components

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd wheremycows
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development
To start the development server:
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production
To create a production build:
```bash
npm run build
```
This will create an optimized production build in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

### Testing
The project uses Jest and React Testing Library for testing. The following commands are available:

```bash
# Run all tests
npm test

# Run tests in watch mode (tests will re-run when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

The test coverage requirements are:
- 80% branch coverage
- 80% function coverage
- 80% line coverage
- 80% statement coverage

### Linting
To run the linter:
```bash
npm run lint
```

## Project Structure

```
wheremycows/
├── src/
│   ├── components/     # React components
│   │   ├── CattleList.jsx    # Main cattle management component
│   │   └── CattleList.css    # Styles for cattle list
│   ├── models/        # Data models
│   │   ├── Cattle.js         # Base cattle model
│   │   ├── MaleCattle.js     # Male cattle model
│   │   ├── FemaleCattle.js   # Female cattle model
│   │   └── CattleFactory.js  # Factory for creating cattle instances
│   ├── __tests__/     # Test files
│   │   ├── Cattle.test.js    # Tests for cattle models
│   │   └── CattleFactory.test.js  # Tests for cattle factory
│   ├── App.jsx        # Main application component
│   ├── App.css        # Styles for App component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
├── jest.config.js     # Jest configuration
├── babel.config.js    # Babel configuration
└── README.md          # This file
```

## Technologies Used

- React 18
- Vite
- React Router
- CSS3
- Modern JavaScript (ES6+)
- Jest
- React Testing Library

## Development Guidelines

### Adding New Features
1. Create new components in the `src/components` directory
2. Add corresponding CSS files for styling
3. Update the router in `App.jsx` if adding new routes
4. Follow the existing styling patterns for consistency
5. Write tests for new features in the `__tests__` directory

### Code Style
- Use functional components with hooks
- Follow the established naming conventions
- Keep components focused and single-responsibility
- Use CSS modules or component-specific CSS files
- Write tests for all new features and bug fixes

### Testing Guidelines
- Write unit tests for all models and utilities
- Write integration tests for components
- Maintain test coverage above 80%
- Use meaningful test descriptions
- Follow the Arrange-Act-Assert pattern in tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 