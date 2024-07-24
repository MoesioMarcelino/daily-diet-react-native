export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      results: undefined;
      "create-meal": undefined;
      "view-meal": { mealId: string; date: string };
      "edit-meal": { mealId: string };
      "register-meal-done": { variant: "success" | "failure" };
    }
  }
}
