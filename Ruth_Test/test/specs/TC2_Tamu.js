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
      const el2 = await driver.$("id:com.example.hkbptarutung:id/textView2");
      await el2.click();
      const el3 = await driver.$("id:com.example.hkbptarutung:id/textView4");
      await el3.click();
      const el4 = await driver.$("id:com.example.hkbptarutung:id/textView3");
      await el4.click();
      const el5 = await driver.$("id:com.example.hkbptarutung:id/edt_namaLengkap");
      await el5.click();
      await el5.click();
      await el5.addValue("Ruth Sirait");
      const el6 = await driver.$("id:com.example.hkbptarutung:id/edt_username");
      await el6.click();
      const el7 = await driver.$("id:com.example.hkbptarutung:id/edt_username");
      await el7.click();
      await el7.addValue("ruthsirait");
      const el8 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
      await el8.addValue("ruthsirait@gmail.com");
      const el9 = await driver.$("id:com.example.hkbptarutung:id/edt_umur");
      await el9.click();
      await el9.addValue("18");
      const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_nomorHP");
      await el10.click();
      await el10.addValue("08126486157");
      const el11 = await driver.$("id:com.example.hkbptarutung:id/sp_jekel");
      await el11.click();
      const el12 = await driver.$("xpath://android.widget.CheckedTextView[@resource-id=\"android:id/text1\" and @text=\"Perempuan\"]");
      await el12.click();
      const el13 = await driver.$("id:com.example.hkbptarutung:id/edt_alamat");
      await el13.click();
      await el13.addValue("Jl.Sutomo. No 14");
      const el14 = await driver.$("id:com.example.hkbptarutung:id/edt_wijk");
      await el14.click();
      await el14.addValue("01");
      const el15 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
      await el15.click();
      await el15.addValue("ruth123");
      const el16 = await driver.$("id:com.example.hkbptarutung:id/edt_ulangiPassword");
      await el16.click();
      await el16.addValue("ruth123");      

        // Menunggu hingga halaman sepenuhnya dimuat
        await driver.waitUntil(async () => {
            // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
            // Misalnya, dapat menggunakan pengecekan pada elemen yang ada di halaman yang diharapkan
            const someElement = await driver.$("selector_of_some_element_on_loaded_page");
            return someElement !== null; // Ubah kondisi ini dengan kondisi yang sesuai
        }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await driver.deleteSession();
    }
})();
