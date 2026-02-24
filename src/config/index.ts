export const IMAGE_BASE_URL = 'https://cloud.sysarmy.galicia.dev';
export const PREVIEW = '/apps/photos/api/v1/publicPreview';

export const buildImagePreviewUrl = (id: string | number, token: string): string => {
  return `${IMAGE_BASE_URL}${PREVIEW}/${id}?x=2048&y=2048&token=${token}`;
};

export const buildCloudUrl = (token: string): string => {
  return `${IMAGE_BASE_URL}/apps/photos/public/${token}`;
};
