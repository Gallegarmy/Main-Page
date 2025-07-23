import "i18next";
import { resources } from "../../public/locales/gl/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        common: {
          welcome: string;
          adminCanasDescription: string;
          githubDescription: string;
          talleresDescription: string;
          karmaDescription: string;
          friendCommunities: string;
        };
      };
    };
  }
}

declare module "react-i18next" {
  interface UseTranslationResponse<
    N extends keyof CustomTypeOptions["resources"]
  > {
    t: (key: string) => string;
  }
}
