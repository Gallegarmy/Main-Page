import "react-i18next";

declare module "react-i18next" {
  interface UseTranslationResponse {
    t: (key: string) => string;
  }
}
