import "i18next";

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
  interface UseTranslationResponse<> {
    t: (key: string) => string;
  }
}
