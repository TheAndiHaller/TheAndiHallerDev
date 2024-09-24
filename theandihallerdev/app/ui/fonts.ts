import { Inter, Lusitana, IBM_Plex_Mono } from 'next/font/google';

export const ibm_plex_mono = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'] });

// old
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });