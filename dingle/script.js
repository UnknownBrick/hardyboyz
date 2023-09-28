document.addEventListener("DOMContentLoaded", function() {
    var videoList = document.getElementById("videoList");

    // YouTube API'sı üzerinden rastgele videoların verilerini çekin
    // Burada bir AJAX isteği veya uygun bir API kütüphanesi kullanarak YouTube API'sına bağlanmanız gerekecektir.
    // Aşağıdaki kod sadece örnek amaçlıdır.

    var randomVideos = [
        {
            thumbnail: "thumbnail1.jpg",
            title: "Video 1"
        },
        {
            thumbnail: "thumbnail2.jpg",
            title: "Video 2"
        },
        // Diğer videolar...
    ];

    // Her bir video için blok oluştur
    randomVideos.forEach(function(video) {
        var videoBlock = document.createElement("div");
        videoBlock.classList.add("videoBlock");

        var thumbnail = document.createElement("img");
        thumbnail.src = video.thumbnail;
        videoBlock.appendChild(thumbnail);

        var title = document.createElement("p");
        title.textContent = video.title;
        videoBlock.appendChild(title);

        videoList.appendChild(videoBlock);
    });
});
