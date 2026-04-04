declare module "exif-parser" {
	export function create(buffer: Buffer): {
		parse(): {
			tags: {
				DateTimeOriginal?: number;
				[key: string]: unknown;
			};
			[key: string]: unknown;
		};
	};
}
