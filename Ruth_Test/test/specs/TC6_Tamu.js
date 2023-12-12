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
  try {
    const driver = await remote(opts);

    const el1 = await driver.$("id:com.example.hkbptarutung:id/btn_tamu");
    await el1.click();

    const el2 = await driver.$("id:com.example.hkbptarutung:id/iv_login");
    await el2.click();

    const el3 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
    await el3.click();
    await el3.addValue("ruthsirait@gmail.com");

    const el4 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
    await el4.click();
    await el4.addValue("ruth1234");

    const el5 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
    await el5.click();

    // Tambahkan pengecekan kondisi halaman sebelum melanjutkan
    await driver.waitUntil(async () => {
      const el6 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
      return await el6.isDisplayed();
    }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

    await driver.deleteSession();
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
    // Handle error: misalnya, menutup sesi driver jika terjadi kesalahan
    // await driver.deleteSession();
  }
})();