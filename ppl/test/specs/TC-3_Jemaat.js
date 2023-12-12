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
  const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el10.click();
  await el10.addValue("ruthsirait24@gmail.com");
  const el11 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el11.click();
  await el11.addValue("ruth123");
  const el12 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el12.click();
  const el13 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el13.click();
  const el14 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el14.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();