const { remote } = require('webdriverio');

const opts = {
  port: 2121,
  capabilities: {
    alwaysMatch: {
        "platformName": "Android",
        "appium:PlatformVersion": "11",
        "appium:deviceName": "Palmarum",
        "appium:app": "D:\\Proyek fix\\HKBP Palmarum Tarutung\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk",
        "appium:automationName": "UIAutomator2",
        "appium:appPackage": "com.example.hkbptarutung",
        "appium:noReset": true
    },
    firstMatch: [{}],
  },
};
(async () => {
  const driver = await remote(opts);
  try {
    const el1 = await driver.$("id:com.example.hkbptarutung:id/btn_tamu");
    await el1.click();
    
    await driver.waitUntil(async () => {
      // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
      // Contoh: menunggu elemen tertentu muncul setelah klik pada btn_tamu
      const el2 = await driver.$("id:contoh_elemen_id");
      return el2.isExisting();
    }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  } finally {
    await driver.deleteSession();
  }
})();
