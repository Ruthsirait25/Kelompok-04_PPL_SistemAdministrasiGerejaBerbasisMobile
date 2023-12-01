package com.example.hkbptarutung.adapters

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.hkbptarutung.PendaftaranAkun
import com.example.hkbptarutung.PengumumanPage
import com.example.hkbptarutung.WartaJemaatNew
import com.example.hkbptarutung.databinding.ItemCardTamuBinding

class AdapterItemTamu(private val listItem: ArrayList<String>) :
    RecyclerView.Adapter<AdapterItemTamu.ViewHolder>() {

    class ViewHolder(val binding: ItemCardTamuBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(
            ItemCardTamuBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun getItemCount(): Int = listItem.size

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = listItem[position]
        if (item == "Registrasi Sidi Baptis") {
            holder.binding.btnRegister.text = "Selengkapnya"
        }
        holder.binding.tvSelamatdatang.text = item
        holder.binding.btnRegister.apply {
            setOnClickListener {
                if (item == "Registrasi Sidi Baptis") {
                    context.startActivity(Intent(context, WartaJemaatNew::class.java))
                    return@setOnClickListener
                }
                context.startActivity(Intent(context, PendaftaranAkun::class.java))
            }
        }
    }
}