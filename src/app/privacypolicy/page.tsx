export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>
      <p className="text-gray-600 mb-4">Terakhir diperbarui: [Tanggal]</p>
      
      <div className="prose max-w-none">
        <p>
          Kami, [Nama Perusahaan/Organisasi], menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda sesuai dengan ketentuan hukum yang berlaku, termasuk Undang-Undang Perlindungan Data Pribadi (UU PDP) di Indonesia. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda ketika Anda menggunakan layanan kami.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Informasi yang Dikumpulkan</h2>
        <p>Kami mengumpulkan data pribadi Anda untuk mendukung layanan yang kami tawarkan. Data yang dikumpulkan meliputi:</p>
        <ul className="list-disc pl-6">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Gender</li>
          <li>Data aktivitas pengguna (soal yang dikerjakan, skor tes, riwayat pengerjaan soal)</li>
          <li>Asal universitas</li>
          <li>Status pendidikan (misalnya: mahasiswa aktif, lulus, atau lainnya)</li>
          <li>Angkatan masuk</li>
        </ul>

        {/* Lanjutkan dengan sections lainnya */}
        
        <h2 className="text-xl font-semibold mt-6 mb-4">7. Hubungi Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, Anda dapat menghubungi kami melalui email di: [Email Kontak].
        </p>
      </div>
    </div>
  );
} 