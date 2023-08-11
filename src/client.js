import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'v9v83vxi',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk5X85OGbdH4HUbL2COoCE4rnsnzwf2vhCuKhpzxbR1ZYcaBdYM3hKhnQqWPwMvyNNTg9pQbIJSleU1viG0oqndMyTCCLmYskCOMtP0wR8MbZkryNPprbwc0L69r37EFX0lbgKeaLXshRhrUsFbqU2TmueJura07YE1St7RMTiQP4RwopHnI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
