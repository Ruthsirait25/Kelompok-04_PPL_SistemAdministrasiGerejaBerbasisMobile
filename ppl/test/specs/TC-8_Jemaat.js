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
await el2.click();
await el2.addValue("eurh123");
await el2.click();
await el2.addValue("ruth123");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/background");
await el4.click();
const el5 = await driver.$("id:com.example.hkbptarutung:id/iv_profile");
await el5.click();
const el6 = await driver.$("id:com.example.hkbptarutung:id/et_namaLengkap");
await el6.click();
const el7 = await driver.$("id:com.example.hkbptarutung:id/et_namaLengkap");
await el7.click();
await el7.addValue("");
const el8 = await driver.$("id:com.example.hkbptarutung:id/et_username");
await el8.click();
await el8.addValue("");
const el9 = await driver.$("id:com.example.hkbptarutung:id/et_email");
await el9.click();
const el10 = await driver.$("id:com.example.hkbptarutung:id/et_umur");
await el10.click();
await el10.addValue("");
const el11 = await driver.$("id:com.example.hkbptarutung:id/et_nomorHP");
await el11.click();
await el11.addValue("");
const el12 = await driver.$("id:android:id/text1");
await el12.click();
const el13 = await driver.$("xpath://android.widget.CheckedTextView[@resource-id=\"android:id/text1\" and @text=\"Perempuan\"]");
await el13.click();
const el14 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah");
await el14.click();
const el15 = await driver.$("id:android:id/button1");
await el15.click();
const el16 = await driver.$("id:com.example.hkbptarutung:id/btn_kembali");
await el16.click();
const el17 = await driver.$("accessibility id:default");
await el17.click();


  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
