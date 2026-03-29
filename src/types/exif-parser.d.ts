declare module "exif-parser" {
  export function create(buffer: Buffer): {
    parse(): {
      tags: {
        DateTimeOriginal?: number;
        [key: string]: any;
      };
      [key: string]: any;
    };
  };
}
