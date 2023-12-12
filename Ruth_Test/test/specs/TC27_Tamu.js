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
  const el1 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el1.click();
const el2 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_rv_regislanding_title\" and @text=\"Registrasi pindah huria\"]");
await el2.click();
const el3 = await driver.$("accessibility id:ContentDescription");
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el4.click();
const el5 = await driver.$("id:android:id/button1");
await el5.click();
const el6 = await driver.$("xpath://android.widget.TextView[@text=\"Home\"]");
await el6.click();
const el7 = await driver.$("accessibility id:default");
await el7.click();

  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
