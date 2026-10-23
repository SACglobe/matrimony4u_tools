/**
 * Adsterra Ad Network Configuration for matrimony4u.com
 * Website ID: 6143875 (Approved on Adsterra)
 * 
 * Verified ad tags from publisher dashboard:
 * - 160x300: 91ec85123d8b4334ccd9cd51cfc4eba1
 * - 160x600: 2d024ed42aa4c2d7f53e9ababc47ab9c
 * - 300x250: 6708c68714040f02569a963973fc9a0f
 * - 320x50: 7cc53e2286b8005b647bdbe45c5e5adf
 * - 468x60: 317acf484b9193820b479809e56479c0
 * - 728x90: 6b6fa328218be3e7a03bdc3f788ac3f9
 * - SocialBar: https://bauval.org/14/60519207e537b48ad3250440e7b72f50
 * - NativeBanner: https://bauval.org/21/4a1e3387663a7002fcdbcf976712363f
 * - Popunder: https://abscloud.org/1/0c008e29d9de4b35ddb88080383501ad
 * - Smartlink: https://araplhn.org/4/503df670f79352af99c6d05dd96ea8d6
 */

export const ADSTERRA_CONFIG = {
  websiteId: '6143875',
  enabled: process.env.NEXT_PUBLIC_DISABLE_ADS !== 'true',
  enablePopunder: true,
  units: {
    banner_160x300: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160x300 || '91ec85123d8b4334ccd9cd51cfc4eba1',
      format: 'iframe',
      height: 300,
      width: 160,
    },
    banner_160x600: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160x600 || '2d024ed42aa4c2d7f53e9ababc47ab9c',
      format: 'iframe',
      height: 600,
      width: 160,
    },
    banner_300x250: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300x250 || '6708c68714040f02569a963973fc9a0f',
      format: 'iframe',
      height: 250,
      width: 300,
    },
    mobile_320x50: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || '7cc53e2286b8005b647bdbe45c5e5adf',
      format: 'iframe',
      height: 50,
      width: 320,
    },
    banner_468x60: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468x60 || '317acf484b9193820b479809e56479c0',
      format: 'iframe',
      height: 60,
      width: 468,
    },
    leaderboard_728x90: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728x90 || '6b6fa328218be3e7a03bdc3f788ac3f9',
      format: 'iframe',
      height: 90,
      width: 728,
    },
    socialBarScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || 'https://bauval.org/14/60519207e537b48ad3250440e7b72f50',
    nativeBannerScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL || 'https://bauval.org/21/4a1e3387663a7002fcdbcf976712363f',
    nativeBannerContainerId: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_CONTAINER_ID || 'container-4a1e3387663a7002fcdbcf976712363f',
    popunderScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL || 'https://abscloud.org/1/0c008e29d9de4b35ddb88080383501ad',
    smartlinkUrl: process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL || 'https://araplhn.org/4/503df670f79352af99c6d05dd96ea8d6',
  },
};
