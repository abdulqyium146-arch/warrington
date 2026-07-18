import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  bookingPhotos: f({ image: { maxFileSize: '8MB', maxFileCount: 10 } })
    .middleware(async () => {
      // Public endpoint — customer uploads during booking flow
      return { uploadedBy: 'customer' };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { url: file.url, key: file.key };
    }),

  vehiclePhotos: f({ image: { maxFileSize: '8MB', maxFileCount: 6 } })
    .middleware(async () => {
      return { uploadedBy: 'admin' };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { url: file.url, key: file.key };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
