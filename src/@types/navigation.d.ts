export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      results: undefined;
      "new-meal": undefined;
      "view-meal": { mealId: string };
      "edit-meal": { mealId: string };
      "register-meal-done": { variant: "success" | "failure" };
    }
  }
}
