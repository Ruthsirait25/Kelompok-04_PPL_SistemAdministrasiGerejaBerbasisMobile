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
  const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el1.click();
await el1.addValue("ruthsirait24@gmail.com");
const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el2.click();
await el2.addValue("ruth123");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el4.click();
const el5 = await driver.$("xpath://androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.example.hkbptarutung:id/rv_registrasi\"]/android.widget.FrameLayout[1]");
await el5.click();
const el6 = await driver.$("id:com.example.hkbptarutung:id/edt_nik");
await el6.click();
await el6.addValue("1212016101040002");
const el7 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_Lengkap");
await el7.click();
await el7.addValue("Silvany Putr Sipahutar");
const el8 = await driver.$("id:com.example.hkbptarutung:id/edt_nomorHP");
await el8.click();
await el8.click();
await el8.addValue("082163235820");
const el9 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ayah");
await el9.click();
await el9.addValue("H.Sipahutar");
const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ibu");
await el10.click();
await el10.addValue("L.Sihombing");
await el10.addValue("L.Sihombing");
const el11 = await driver.$("id:com.example.hkbptarutung:id/edt_Tempat_Lahir");
await el11.click();
await el11.addValue("Balige");
const el12 = await driver.$("id:com.example.hkbptarutung:id/edt_tanggal_lahir");
await el12.click();
const el13 = await driver.$("xpath:/hierarchy/android.widget.FrameLayout");
await el13.click();
const el14 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el14.click();
const el15 = await driver.$("id:android:id/button1");
await el15.click();
const el16 = await driver.$("id:com.example.hkbptarutung:id/ic_home");
await el16.click();


  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
