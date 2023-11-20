package com.example.hkbptarutung

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.hkbptarutung.databinding.ActivityPengumumanBinding
import com.example.hkbptarutung.registrasi.request.RegistrasiBaptis

class PengumumanPage: AppCompatActivity() {

    private lateinit var binding: ActivityPengumumanBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPengumumanBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.btnRegisterNow.setOnClickListener {
            startActivity(Intent(this, PendaftaranAkun::class.java))
        }
    }
}