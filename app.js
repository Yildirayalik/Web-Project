// Vue.js uygulamasını başlatma
new Vue({
    // Uygulamanın bağlanacağı element
    el: '#app',
    data: {
        // Form verilerini tutan data nesnesi
        form: {
            firstname: '', // Ad
            lastname: '', // Soyad
            birthdate: '', // Doğum tarihi
            username: '', // Kullanıcı adı
            email: '', // E-posta
            password: '', // Şifre
            gender: '', // Cinsiyet
            newsletter: false // Bülten aboneliği
        },
        successMessage: '' // Başarı mesajı
    },
    methods: {
        // Form doğrulama işlemi
        formuDogrula() {
            // Tüm alanların doldurulup doldurulmadığını kontrol et
            if (this.form.firstname && this.form.lastname && this.form.birthdate && this.form.username && this.form.email && this.form.password && this.form.gender) {
                // Başarı mesajını ayarla
                this.successMessage = 'Form başarıyla gönderildi!';
                // Form verilerini localStorage'a kaydet
                localStorage.setItem('formData', JSON.stringify(this.form));
                // Formu sıfırla
                this.formuSifirla();
            } else {
                // Eksik alanlar varsa uyarı ver
                alert('Lütfen tüm alanları doldurun.');
            }
        },
        // Formu temizleme işlemi
        formuSifirla() {
            // Form alanlarını boşalt
            this.form.firstname = ''; // Ad
            this.form.lastname = ''; // Soyad
            this.form.birthdate = ''; // Doğum tarihi
            this.form.username = ''; // Kullanıcı adı
            this.form.email = ''; // E-posta
            this.form.password = ''; // Şifre
            this.form.gender = ''; // Cinsiyet
            this.form.newsletter = false; // Bülten aboneliği
            // Başarı mesajını boşalt
            this.successMessage = '';
        },
        // Admin giriş sayfasına yönlendirme
        adminGirisSayfasinaGit() {
            // admin-login.html sayfasına yönlendir
            window.location.href = 'admin-login.html';
        }
    }
});
