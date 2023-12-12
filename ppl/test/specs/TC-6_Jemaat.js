const { remote } = require('webdriverio');

const opts = {
  port: 2020,
  capabilities: {
    alwaysMatch: {
        "platformName": "Android",
        "appium:PlatformVers": "11",
        "appium:deviceName": "palma",
        "appium:app": "D:\\11421056_Silvany\\SEMESTER 5\\PPL\\WEEK 15\\proyek\\Kelompok-04_PPL_SistemAdministrasiGerejaBerbasisMobile\\HKBP Palmarum.apk",
        "appium:automationName": "UIAutomator2",
        "appium:appPackage": "com.example.hkbptarutung",
        "appium:noReset": true,
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard": true
    },
    firstMatch: [{}],
  },
};



(async () => {
  const driver = await remote(opts);
  const el4 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el4.click();
await el4.addValue("ruthsirait24@gmail.com");
const el5 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el5.click();
await el5.addValue("ruth123");
const el6 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el6.click();
const el7 = await driver.$("id:com.example.hkbptarutung:id/iv_profile");
await el7.click();
const el8 = await driver.$("id:com.example.hkbptarutung:id/et_umur");
await el8.click();
await el8.addValue("18");
const el9 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah");
await el9.click();
const el10 = await driver.$("id:android:id/button1");
await el10.click();

  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
