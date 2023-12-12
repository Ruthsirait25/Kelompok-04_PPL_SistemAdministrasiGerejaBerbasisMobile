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
    const el20 = await driver.$("xpath://android.widget.Button[@resource-id=\"com.example.hkbptarutung:id/btn_tamu\"]");
    await el20.click();

    // Menunggu beberapa saat agar aplikasi memiliki waktu untuk merespons
    await driver.pause(1000);

    const el21 = await driver.$("id:com.example.hkbptarutung:id/iv_acaraminggu");
    await el21.click();

    // Menunggu hingga halaman sepenuhnya dimuat
    await driver.waitUntil(async () => {
      // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
      const someElement = await driver.$("selector_of_some_element_on_loaded_page");
      return someElement !== null; // Ubah kondisi ini dengan kondisi yang sesuai
    }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await driver.deleteSession();
  }
})();