type Options = {
  secure?: boolean;
  crop?: any | any[];
  effect?: any | any[];
  fetch_format?: any | any[];
  flags?: any | any[];
  gravity?: any | any[];
  height?: any | any[];
  radius?: any | any[];
  quality?: any | any[];
  width?: any | any[];
}

const TYPES: { name: keyof Options; prefix: string }[] = [
  { name: 'crop', prefix: 'c' },
  { name: 'effect', prefix: 'e' },
  { name: 'fetch_format', prefix: 'f' },
  { name: 'flags', prefix: 'fl' },
  { name: 'gravity', prefix: 'g' },
  { name: 'height', prefix: 'h' },
  { name: 'radius', prefix: 'r' },
  { name: 'quality', prefix: 'q' },
  { name: 'width', prefix: 'w' },
];

const CLOUDINARY_CLOUD_NAME = 'actonthis';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = 'it2mlyvb';

export const uploadUrl = CLOUDINARY_UPLOAD_URL
export const uploadPreset = CLOUDINARY_UPLOAD_PRESET

export const createUrl = (id: string, options: Options) => {
  if (!id) {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
  }

  const scheme = options.secure ? 'https' : 'http';
  const params: string[] = [];

  for (let i = 0; i < TYPES.length; i++) {
    const name = TYPES[i].name;
    const prefix = TYPES[i].prefix;

    if (Array.isArray(options[name])) {
      options[name].forEach((opt: string | number) => { params.push(prefix + '_' + opt) });
    } else if (options[name] != null) {
      params.push(prefix + '_' + options[name]);
    }
  }

  const urlParams = params.length ? params.join(',') + '/' : '';
  return scheme + '://res.cloudinary.com/'
    + encodeURIComponent(CLOUDINARY_CLOUD_NAME)
    + '/image/upload/' + urlParams
    + encodeURIComponent(id);
};
