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

const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el2.click();
await el2.addValue("123123");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el4.click();
const el5 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_rv_regislanding_title\" and @text=\"Registrasi pindah huria\"]");
await el5.click();
const el6 = await driver.$("id:com.example.hkbptarutung:id/edt_cari_nama");
await el6.click();
await el6.addValue("William Smith");
await el6.click();
const el7 = await driver.$("id:com.example.hkbptarutung:id/tv_registrasi_type");
await el7.click();
const el8 = await driver.$("id:com.example.hkbptarutung:id/ic_home");
await el8.click();
const el9 = await driver.$("accessibility id:default");
await el9.click();

// Menunggu hingga halaman sepenuhnya dimuat
await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // Kondisi yang harus dipenuhi
  }, { timeout: 30000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 20 detik' });

} catch (error) {
  console.error('Error occurred:', error);
} finally {
  await driver.deleteSession();
}
})();