# Contributing to Outfique Frontend

Thank you for your interest in contributing to Outfique! This guide will help you get started with contributing to our React Native/Expo project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/outfique-frontend.git
   cd outfique-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on different platforms**
   ```bash
   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

## Project Structure

```
outfique-frontend/
├── app/                    # Main application code (Expo Router)
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   └── global.css         # Global styles
├── components/            # Base UI components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and configurations
├── assets/               # Images, fonts, and other static assets
└── ...config files
```

### Key Technologies

- **React Native** (0.81.4) - Mobile app framework
- **Expo** (SDK 54) - Development platform
- **Expo Router** - File-based routing
- **TypeScript** - Type safety
- **NativeWind** - Tailwind CSS for React Native
- **React Hook Form** - Form handling
- **Tailwind CSS** - Styling framework

## Development Workflow

### Commit Message Format

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `test` - Adding missing tests
- `chore` - Updating build tasks, package manager configs, etc.

Examples:
```
feat(auth): add user login functionality
fix(navigation): resolve tab navigation crash on Android
docs(readme): update installation instructions
```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use strict type checking

### Styling

- Use NativeWind (Tailwind CSS) for styling
- Follow mobile-first responsive design principles
- Use consistent spacing and color schemes
- Prefer utility classes over custom CSS

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop typing with TypeScript
- Follow the component structure in `components/ui/`

### File Naming

- Use PascalCase for component files: `UserProfile.tsx`
- Use camelCase for utility files: `formatDate.ts`
- Use kebab-case for asset files: `user-avatar.png`

### Code Formatting

The project uses ESLint for code formatting. Run before committing:

```bash
npm run lint
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for utility functions
- Write integration tests for components
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)

## Submitting Changes

### Before Submitting

1. **Test your changes**
   - Test on multiple platforms (iOS, Android, Web)
   - Ensure no console errors or warnings
   - Verify responsive design

2. **Code quality checks**
   ```bash
   npm run lint
   npm test
   ```

3. **Update documentation**
   - Update README if needed
   - Add JSDoc comments for new functions
   - Update this contribution guide if workflow changes

### Pull Request Checklist

- [ ] Branch is up to date with main
- [ ] All tests pass
- [ ] Code follows project standards
- [ ] No console errors or warnings
- [ ] Tested on iOS and Android
- [ ] Documentation updated if needed
- [ ] Descriptive PR title and description

## Issue Guidelines

### Reporting Bugs

When reporting bugs, include:

- **Device/Platform**: iOS, Android, Web
- **Expo/React Native version**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots/videos** (if applicable)
- **Console logs/error messages**

### Feature Requests

For feature requests, provide:

- **Clear description** of the feature
- **Use case** and motivation
- **Proposed implementation** (if you have ideas)
- **Mockups/wireframes** (if applicable)

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow code standards
   - Write tests if applicable
   - Update documentation

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a descriptive title
   - Fill out the PR template
   - Link related issues
   - Request review from maintainers

6. **Address feedback**
   - Respond to review comments
   - Make requested changes
   - Push updates to the same branch

### PR Review Process

- All PRs require at least one approval
- Automated checks must pass
- Maintainers will review within 2-3 business days
- Be responsive to feedback and questions

## Development Tips

### Debugging

- Use Expo DevTools for debugging
- Enable Remote JS Debugging for complex issues
- Use React Native Debugger for advanced debugging
- Check Metro bundler logs for build issues

### Performance

- Use `React.memo()` for expensive components
- Optimize images and assets
- Use lazy loading for screens
- Profile with Flipper or React DevTools

### Platform-Specific Code

```typescript
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
  // iOS-specific code
} else if (Platform.OS === 'android') {
  // Android-specific code
}
```

## Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Documentation**: Check Expo and React Native docs

## License

By contributing to Outfique, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Outfique! 🚀
