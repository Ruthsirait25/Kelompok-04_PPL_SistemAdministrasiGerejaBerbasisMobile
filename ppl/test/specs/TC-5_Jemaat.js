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
  const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el1.click();
await el1.addValue("ruthsirait24@gmail.com");
const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el2.addValue("ruth123");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
const el4 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
await el4.click();

  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();