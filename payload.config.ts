import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Page from "./collections/Page";
import Media from "./collections/Media";
import Messages from "./collections/Messages";
import Study from "./collections/Study";
import Category from "./collections/Category";
import MegaMenu from "./globals/MegaMenu";
import SocialMedia from "./globals/SocialMedia";
import Footer from "./globals/Footer";
import { Profile } from "./collections/Profile";
import Payments from "./collections/Payments";
import Services from "./collections/Services";
import Videoediting from "./collections/Videoediting";
import Designphotoshop from "./collections/Designphotoshop";
import Webdevelopment from "./collections/Webdevelopment";
import Projects from "./collections/Projects";
import path from "path";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,

  admin: {
    user: Profile.slug,
    // css: path.resolve(__dirname, "style/globals.css"),
  },

  collections: [
    Category,
    Projects,
    Page,
    Study,
    Media,
    Payments,
    Services,
    Videoediting,
    Designphotoshop,
    Webdevelopment,
    Messages,
    Profile,
  ],
  globals: [MegaMenu, SocialMedia, Footer],
});
