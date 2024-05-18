<?php
// Kullanıcı adı ve şifreyi al
$email = $_POST['email'];
$password = $_POST['password'];

// Girilen kullanıcı adının e-posta olup olmadığını kontrol et
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Eğer e-posta adresi doğru formatta değilse hata mesajı göster
    echo "Lütfen geçerli bir e-posta adresi girin.";
} 
// Kullanıcı adı ve şifreyi kontrol et
else {
//Eğer doğruysa ekrana Hoşgeldiniz b231210048 yazısını döndür ve kullanıcı butona tıklayınca onu yeniden Giriş sayfasına at.
    if ($email === 'b231210048@sakarya.edu.tr' && $password === 'b231210048') {
        echo '<div style="font-size: 24px;">Hoşgeldiniz ' . $password . '</div>';
        echo '<form action="iletisim.html" style="margin-top: 20px; color=black; backgroundcolor=white">
        <input type="submit" value="İletişim Sayfasına Git" style="padding: 10px 20px; font-size: 18px;">
      </form>';
    }
    } 
//Eğer yanlışsa ekrana "Yanlış girdiniz lütfen tekrar deneyiniz!" alerti çıksın ve giriş sayfasına otomatik yönlendirsin.
else {
        echo '<script>
        alert("Yanlış girdiniz lütfen tekrar deneyiniz!");
        window.location.href = "giris.html"; 
      </script>';
    }
}
?>
