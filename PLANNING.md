# 📋 LHI Expo NativeWind Template - Planning Document

## Overview

This document outlines the plan for creating a generic, reusable React Native template using Expo SDK 51+ and NativeWind v4.

## Goals

1. **Create a production-ready template** that can be forked for any React Native project
2. **Implement best practices** for TypeScript, component architecture, and performance
3. **Build a comprehensive component library** with common UI patterns
4. **Establish a scalable project structure** that works for small and large apps
5. **Document everything** for easy onboarding and customization

## Technical Decisions

### Core Stack
- **Expo SDK 51+**: Latest features, managed workflow
- **NativeWind v4**: True Tailwind CSS experience in React Native
- **TypeScript**: Strict mode for maximum type safety
- **React Navigation v6**: Industry standard navigation

### Architecture Patterns
- **Atomic Design**: Components organized by complexity
- **Custom Hooks**: Encapsulate business logic
- **Context for State**: Simple state management
- **Absolute Imports**: Clean import paths

### Development Tools
- **ESLint**: Airbnb config with React Native rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks
- **Jest**: Unit testing setup

## Implementation Phases

### Phase 1: Foundation (2-3 hours)
- Initialize Expo project
- Configure TypeScript
- Set up NativeWind v4
- Configure navigation
- Set up linting/formatting

### Phase 2: Component Library (3-4 hours)
- Base UI components
- Layout components
- Navigation components
- Utility components
- Theme system

### Phase 3: Features (2-3 hours)
- Mock data system
- Storage utilities
- API service structure
- Error handling
- Loading states

### Phase 4: Polish (1-2 hours)
- Documentation
- Example screens
- Performance optimization
- Testing setup
- README completion

## Component Inventory

### UI Components
- [ ] Button (primary, secondary, outline, text)
- [ ] Card (elevated, outlined, filled)
- [ ] Text (with typography system)
- [ ] Input (text, password, multiline)
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Avatar
- [ ] Badge
- [ ] Chip
- [ ] IconButton

### Layout Components
- [ ] Screen (safe area wrapper)
- [ ] Container
- [ ] Row/Column
- [ ] Spacer
- [ ] Divider
- [ ] ScrollView wrapper

### Feature Components
- [ ] Header
- [ ] TabBar
- [ ] List/ListItem
- [ ] EmptyState
- [ ] ErrorBoundary
- [ ] LoadingOverlay

### Utility Components
- [ ] Modal wrapper
- [ ] Toast/Snackbar
- [ ] BottomSheet
- [ ] Dropdown
- [ ] DatePicker wrapper

## File Structure

```
lhi-expo-nativewind-template/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   └── [other components...]
│   │   ├── features/
│   │   └── layouts/
│   ├── screens/
│   │   ├── ExampleScreen.tsx
│   │   └── [screen templates...]
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── types.ts
│   │   └── linking.ts
│   ├── services/
│   │   ├── api/
│   │   ├── storage/
│   │   └── mock/
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── [custom hooks...]
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── formatting.ts
│   │   └── helpers.ts
│   ├── types/
│   │   └── global.d.ts
│   └── theme/
│       ├── colors.ts
│       ├── typography.ts
│       └── spacing.ts
├── assets/
├── App.tsx
├── app.json
├── babel.config.js
├── metro.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## Quality Checklist

### Code Quality
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Consistent formatting
- [ ] No console.logs
- [ ] Proper error handling

### Performance
- [ ] Components use memo where appropriate
- [ ] Lists use proper keys and optimization
- [ ] Images are optimized
- [ ] No unnecessary re-renders
- [ ] Bundle size is reasonable

### Developer Experience
- [ ] Hot reload works properly
- [ ] Clear file organization
- [ ] Comprehensive documentation
- [ ] Easy to customize
- [ ] Examples provided

### Cross-Platform
- [ ] Tested on iOS Simulator
- [ ] Tested on Android Emulator
- [ ] Platform-specific code isolated
- [ ] Consistent behavior
- [ ] Proper safe areas

## Success Metrics

1. **Can create a new app in < 5 minutes** using this template
2. **All components are documented** with usage examples
3. **TypeScript provides full type safety** throughout
4. **Performance scores 90+** in React Native performance monitor
5. **Works identically** on iOS and Android
6. **Easy to customize** theme and components

## Notes

- Keep everything generic - no MyBambu references
- Use "LHI" or "YourApp" as placeholders
- Focus on developer experience
- Over-document rather than under-document
- Consider how components will be used in real apps

---

**Status**: Ready to implement
**Estimated Time**: 8-10 hours
**Priority**: Highest (blocks other implementations)