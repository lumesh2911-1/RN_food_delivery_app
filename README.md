# 🍔 Food Delivery App Navigation Assignment

## Project Overview

This project is a Food Delivery App built using React Native and Expo. The primary goal of this application is to demonstrate a complete understanding of React Navigation concepts including Stack Navigation, Bottom Tabs, Drawer Navigation, Nested Navigators, Authentication Flow, Deep Linking, Navigation Parameters, Programmatic Navigation, and State Persistence.

The application simulates a real-world food delivery experience where users can browse restaurants, view restaurant details, add items to cart, place orders, and manage their profile.

---

## Tech Stack

- React Native
- Expo SDK
- TypeScript
- React Navigation v7
  - Native Stack Navigator
  - Bottom Tab Navigator
  - Drawer Navigator
- AsyncStorage
- React Native Vector Icons / Expo Vector Icons
- Expo Linking

---

## Installation & Run Locally

### Clone Repository

```bash
git clone https://github.com/lumesh2911-1/RN_food_delivery_app
```

### Navigate to Project

```bash
cd food-delivery-app
```

### Install Dependencies

```bash
bun install
```

or

```bash
npm install
```

### Start Expo Server

```bash
bunx expo start
```

or

```bash
npx expo start
```

### Run Application

```bash
i
```

For Android Emulator

```bash
a
```

---

# 📱 Features Implemented

## Onboarding Flow

- Welcome screen
- App introduction
- Get Started button
- Navigates to Login/Auth flow

Navigation Method Used:

```tsx
navigation.replace("Login");
```

---

## Authentication Flow

### Unauthenticated User

User sees:

```txt
Login Screen
```

### Authenticated User

User sees:

```txt
Main Application
```

Authentication state is persisted using AsyncStorage.

### Login Flow

```tsx
navigation.replace("MainTabs");
```

### Logout Flow

```tsx
navigation.reset({
  index: 0,
  routes: [{ name: "Login" }],
});
```

---

## Stack Navigator

Implemented Flow:

```txt
Onboarding
     ↓
Home
     ↓
Restaurant Detail
     ↓
Cart
```

### Restaurant Params

Restaurant data is passed using navigation params.

```tsx
navigation.navigate("RestaurantDetail", {
  restaurantName: restaurant.name,
  deliveryPrice: restaurant.deliveryPrice,
});
```

Accessing Params:

```tsx
const { restaurantName, deliveryPrice } = route.params;
```

---

## Custom Stack Header

Features:

- Custom title
- Custom header color
- Back label
- Back navigation

---

## Bottom Tab Navigation

Tabs Included:

### Home

Browse restaurants

### Search

Search restaurants and food

### Orders

Order history

### Profile

User account

---

### Tab Icons

Using Expo Vector Icons.

Example:

```tsx
<Ionicons name="home" size={24} color={color} />
```

---

### Orders Badge

Badge appears when cart contains items.

Example:

```tsx
tabBarBadge: cartCount > 0 ? cartCount : undefined;
```

---

## Nested Navigation

Restaurant Stack is nested inside Home Tab.

```txt
Tabs
 ├── Home Tab
 │      └── Restaurant Stack
 │             ├── Home
 │             ├── Restaurant Detail
 │             └── Cart
 │
 ├── Search
 ├── Orders
 └── Profile
```

---

## Hide Bottom Tabs

Bottom tabs are hidden on:

- Restaurant Detail Screen
- Cart Screen

Implementation:

```tsx
tabBarStyle: {
  display: "none",
}
```

Applied conditionally based on route.

---

## Drawer Navigation

Drawer is accessible from Profile Screen.

Drawer Items:

- My Orders
- Settings
- Help
- Logout

---

### Custom Drawer Content

Contains:

- User Avatar
- User Name
- Drawer Navigation Items

Example Layout:

```txt
---------------------
👤 John Doe

My Orders
Settings
Help
Logout
---------------------
```

---

## Programmatic Navigation

### navigate()

Move to a new screen.

```tsx
navigation.navigate("RestaurantDetail");
```

---

### goBack()

Return to previous screen.

```tsx
navigation.goBack();
```

---

### replace()

Replace current screen.

```tsx
navigation.replace("Home");
```

---

### reset()

Reset navigation stack.

```tsx
navigation.reset({
  index: 0,
  routes: [{ name: "Login" }],
});
```

---

## Deep Linking

Supported URL:

```txt
foodapp://restaurant/123
```

Opens:

```txt
Restaurant Detail Screen
```

---

### Deep Link Configuration

```tsx
const linking = {
  prefixes: ["foodapp://"],
  config: {
    screens: {
      RestaurantDetail: {
        path: "restaurant/:id",
      },
    },
  },
};
```

---

## Authentication Persistence

Auth state stored using AsyncStorage.

Example:

```tsx
await AsyncStorage.setItem("isLoggedIn", "true");
```

Check on app launch:

```tsx
const auth = await AsyncStorage.getItem("isLoggedIn");
```

Redirect accordingly.

---

# 🔗 GitHub Repository

```txt
https://github.com/lumesh2911-1/RN_food_delivery_app
```

---

# 🎥 Demo Video

```txt

```

---

# Assumptions

1. Authentication is mocked.
2. User data is stored locally.
3. Cart state is managed locally.
4. Restaurant data is mocked.
5. Orders are not connected to a backend.
6. Deep linking supports restaurant details only.
7. UI is designed for navigation demonstration purposes.

---

# Learning Outcomes

This project demonstrates:

- Stack Navigation
- Bottom Tabs
- Drawer Navigation
- Nested Navigators
- Authentication Flow
- State Persistence
- Deep Linking
- Programmatic Navigation
- Screen Transitions
- React Navigation Best Practices

---
