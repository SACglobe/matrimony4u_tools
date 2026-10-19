/**
 * Adsterra Ad Network Configuration for matrimony4u.com
 * Website ID: 6134043 (Approved on Adsterra)
 * 
 * Verified ad tags extracted from publisher dashboard (zones/6134043/codes):
 * - 468x60 Banner: 2c9af80c588e19b5cae019c170b90819
 * - 320x50 Banner: 61f53cae7c0b3177e5923f104d10b5ab
 * - 160x300 Banner: 637ef85790408609e4a63b91c84dcaac
 * - SocialBar: https://bauval.org/14/59a018b3c746bf705fdeb33143a8cda6
 * - NativeBanner: https://bauval.org/21/73fc909d6c99f02825cbc9ca8d56e04b
 * - Popunder: https://abscloud.org/1/8fe4b5742c0751c673dfae99f14651d6
 * - Smartlink: https://araplhn.org/4/8f4d6668b473dd716831bfb49dafb383
 */

export const ADSTERRA_CONFIG = {
  websiteId: '6134043',
  enabled: process.env.NEXT_PUBLIC_DISABLE_ADS !== 'true',
  units: {
    banner_468x60: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468x60 || '2c9af80c588e19b5cae019c170b90819',
      format: 'iframe',
      height: 60,
      width: 468,
    },
    mobile_320x50: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || '61f53cae7c0b3177e5923f104d10b5ab',
      format: 'iframe',
      height: 50,
      width: 320,
    },
    skyscraper_160x300: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160x300 || '637ef85790408609e4a63b91c84dcaac',
      format: 'iframe',
      height: 300,
      width: 160,
    },
    // Aliases to gracefully support standard banner calls
    leaderboard_728x90: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728x90 || process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468x60 || '2c9af80c588e19b5cae019c170b90819',
      format: 'iframe',
      height: 60,
      width: 468,
    },
    rectangle_300x250: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300x250 || process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || '61f53cae7c0b3177e5923f104d10b5ab',
      format: 'iframe',
      height: 50,
      width: 320,
    },
    socialBarScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || 'https://bauval.org/14/59a018b3c746bf705fdeb33143a8cda6',
    nativeBannerScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL || 'https://bauval.org/21/73fc909d6c99f02825cbc9ca8d56e04b',
    nativeBannerContainerId: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_CONTAINER_ID || 'container-73fc909d6c99f02825cbc9ca8d56e04b',
    popunderScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL || 'https://abscloud.org/1/8fe4b5742c0751c673dfae99f14651d6',
    smartlinkUrl: process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL || 'https://araplhn.org/4/8f4d6668b473dd716831bfb49dafb383',
  },
};
