// @ts-nocheck
import { favicons } from "favicons";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "../assets/logo.png"); // Source image(s). `string`, `buffer` or array of `string`

// make 'assets/icons' dir if not exists
const iconsDir = path.join(__dirname, "../assets/icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

const configuration = {
  path: "/", // Path for overriding default icons path. `string`
  appName: null, // Your application's name. `string`
  appShortName: null, // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: null, // Your application's description. `string`
  developerName: null, // Your (or your developer's) name. `string`
  developerURL: null, // Your (or your developer's) URL. `string`
  cacheBustingQueryParam: null, // Query parameter added to all URLs that acts as a cache busting system. `string | null`
  dir: "auto", // Primary text direction for name, short_name, and description
  lang: "en-US", // Primary language for name and short_name
  display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/", // Start URL when launching the application from a device. `string`
  preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
  relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
  version: "1.0", // Your application's version string. `string`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  manifestMaskable: false, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
  background: "#c9d658", // Background colour for flattened icons. `string`
  theme_color: "#c9d658", // Theme color user for example in Android's task switcher. `string`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    // appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    // yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
};

try {
  const response = await favicons(source, configuration as any);

  for (const image of response.images) {
    const relativePath = `../assets/icons/${image.name}`;
    console.log("Write to", relativePath);
    fs.writeFileSync(path.join(__dirname, relativePath), image.contents);
  }

  console.log(response.html.join("\n")); // Array of strings (html elements)
} catch (error: any) {
  console.log(error.message); // Error description e.g. "An unknown error has occurred"
}
