import { buildCloudUrl, buildImagePreviewUrl } from '@/config';
import { TimelineCity } from '@/types/Timeline';

export const timelineData: readonly TimelineCity[] = [
  {
    id: '1',
    name: 'A Coruña',
    timeline: [
      {
        id: 'timeline-1',
        year: 2025,
        image: buildImagePreviewUrl(4737, 'c7hGm8E9Mz9x02w1FOVxNpZD4LD85Rvl'),
        cloudUrl: buildCloudUrl('c7hGm8E9Mz9x02w1FOVxNpZD4LD85Rvl'),
      },
      {
        id: 'timeline-2',
        year: 2024,
        image: buildImagePreviewUrl(1812, '3TtB5dfdcB1ZX9FWBol7At9LZzcsZsnH'),
        cloudUrl: buildCloudUrl('3TtB5dfdcB1ZX9FWBol7At9LZzcsZsnH'),
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
        image: buildImagePreviewUrl(2645, 'sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz'),
        cloudUrl: buildCloudUrl('sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz'),
      },
    ],
  },
];
