import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        common: {
          adminCanasDescription: string;
          friendCommunities: string;
          githubDescription: string;
          karmaDescription: string;
          talleresDescription: string;
          timelineDescription: string;
          welcome: string;
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
