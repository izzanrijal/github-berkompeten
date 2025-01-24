export default function TermsOfService() {
  console.log('Rendering TOS page');
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Syarat dan Ketentuan</h1>
      <p className="text-gray-600 mb-4">Terakhir diperbarui: [Tanggal]</p>
      
      <div className="prose max-w-none">
        <p>
          Syarat dan Ketentuan ini ("Ketentuan") adalah perjanjian hukum antara Anda ("Pengguna") dan [Nama Perusahaan/Organisasi] terkait penggunaan aplikasi kami. Dengan mengakses atau menggunakan layanan kami, Anda menyetujui Ketentuan ini.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Layanan Kami</h2>
        <p>
          Kami menyediakan aplikasi web yang dirancang untuk membantu mahasiswa kedokteran mempersiapkan ujian akhir melalui tes latihan dan rekomendasi belajar yang dipersonalisasi.
        </p>

        {/* Lanjutkan dengan sections lainnya */}
        
        <h2 className="text-xl font-semibold mt-6 mb-4">9. Kontak</h2>
        <p>
          Untuk pertanyaan lebih lanjut mengenai Ketentuan ini, Anda dapat menghubungi kami melalui email di: [Email Kontak].
        </p>
      </div>
    </div>
  );
}