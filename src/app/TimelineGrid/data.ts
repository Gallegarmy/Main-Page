import { TimelineCity } from '@/types/Timeline';

export const timelineData: readonly TimelineCity[] = [
  {
    id: '1',
    name: 'A Coruña',
    timeline: [
      {
        id: 'timeline-1',
        year: 2024,
        image:
          'https://cloud.sysarmy.galicia.dev/apps/photos/api/v1/publicPreview/1812?x=2048&y=2048&token=3TtB5dfdcB1ZX9FWBol7At9LZzcsZsnH',
        cloudUrl: 'https://cloud.sysarmy.galicia.dev/apps/photos/public/3TtB5dfdcB1ZX9FWBol7At9LZzcsZsnH',
      },

      {
        id: 'timeline-2',
        year: 2025,
        image:
          'https://cloud.sysarmy.galicia.dev/apps/photos/api/v1/publicPreview/4737?x=2048&y=2048&token=c7hGm8E9Mz9x02w1FOVxNpZD4LD85Rvl',
        cloudUrl: 'https://cloud.sysarmy.galicia.dev/apps/photos/public/c7hGm8E9Mz9x02w1FOVxNpZD4LD85Rvl',
      },
    ],
  },
  {
    id: '2',
    name: 'Vigo',
    timeline: [
      {
        id: 'timeline-1',
        year: 2025,
        image:
          'https://cloud.sysarmy.galicia.dev/apps/photos/api/v1/publicPreview/2645?x=2048&y=2048&token=sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz',
        cloudUrl: 'https://cloud.sysarmy.galicia.dev/apps/photos/public/sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz',
      },
    ],
  },
];
