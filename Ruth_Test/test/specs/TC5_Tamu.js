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
  const el6 = await driver.$("id:com.example.hkbptarutung:id/btn_tamu");
  await el6.click();
  const el7 = await driver.$("id:com.example.hkbptarutung:id/iv_WartaJemaat");
  await el7.click();
  
  // Tunggu 15 detik sebelum menghapus sesi
  await driver.pause(15000);
  
  await driver.deleteSession();
})();