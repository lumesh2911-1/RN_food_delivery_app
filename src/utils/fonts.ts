import { createNavigationContainerRef } from "@react-navigation/native";
import { FONTS as themeFonts } from "../theme/fonts";

// Create a navigation container ref that can be connected to the NavigationContainer
export const navigationRef = createNavigationContainerRef<any>();

/**
 * Navigate to a specific screen from outside of React components.
 * @param name The name of the route to navigate to.
 * @param params Optional parameters to pass to the route.
 */
export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params as any);
  }
}

/**
 * Go back to the previous screen from outside of React components.
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

// Re-export the font definitions for convenient access
export const FONTS = themeFonts;
