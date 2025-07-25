# CLAUDE.md - MyBambu Interview Challenge App

AI agent guidance for the MyBambu interview challenge implementation.

## 🎯 Current Status
- **Project**: MyBambu React Native Interview Challenge
- **Timer**: NOT STARTED (Do not trigger timer!)
- **Phase**: Implementation

## 📋 Required Features

### ESP Home Screen Components:
1. **Header**: 
   - Greeting text
   - Balance display: $10,000,000.00 COP
   - Notification and menu icons

2. **Action Buttons** (Grid layout):
   - Deposito (Deposit)
   - Tarjeta (Card)
   - Transferir (Transfer)
   - Solicitar (Request)

3. **Transaction List**:
   - "Latest Transactions" header
   - List items with:
     - Recipient name
     - Amount
     - Status indicator
     - Transaction type icon

4. **Promotional Banner**:
   - Marketing image/content
   - Overlay text or button

5. **Bottom Navigation**:
   - 4 tabs (icons only, no logic needed)
   - Home (active), Products, History, Profile

## 🛠️ Technology Requirements
- React Native with Expo SDK 53
- NativeWind v4 for styling
- TypeScript throughout
- Functional components and hooks only
- Mock data for transactions

## 📁 Project Structure
```
src/
├── components/
│   ├── ui/           # Button, Card, ListItem (already created)
│   ├── features/     # TransactionList, ActionButtons, etc.
│   └── layouts/      # Header, Banner
├── screens/          # HomeScreen (main focus)
├── navigation/       # TabNavigator (already set up)
├── data/            # Mock transaction data
└── types/           # TypeScript interfaces
```

## ⚠️ Important Notes
- DO NOT create GitHub repo or trigger timer
- Focus on HomeScreen implementation
- Other tabs can remain placeholder
- Match Figma design as closely as possible
- Use placeholder images where needed

## 🎨 Design Guidelines
- Primary color: Blue (use primary-500 from Tailwind)
- Clean, financial app aesthetic
- Consistent spacing and typography
- Professional UI/UX

## 🚀 Next Steps
1. Review Figma design (incognito browser)
2. Create mock transaction data
3. Build header component
4. Implement action buttons grid
5. Create transaction list
6. Add promotional banner
7. Polish and test

Remember: This is a UI-focused challenge. No business logic or actual navigation required!