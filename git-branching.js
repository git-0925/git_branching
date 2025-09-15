//Branch
//Membuat timeline baru yang berbeda dari timeline utama (master/main)
//Tidak ada batasan banyak branch di Git, biasanya dibuat ketika ingin menambah fitur baru
//Fitur baru akan ditambah di branch baru, sehingga tidak takut ada kesalahan di branch utama
//Ketika fitur baru sudah siap, bisa dilakukan merge (menggabungkan) branch baru ke branch utama
git branch --show-current //melihat branch saat ini
git branch <namabranchbaru> //membuat branch baru, akan dimulai dari posisi branch saat ini
git branch --list/git branch //melihat semua branch
git switch <namabranch>/git checkout <namabranch> //pindah ke branch lain
git branch -m <namabranchbaru> //mengubah nama branch, namun harus pindah ke branch yang ingin di rename dulu
git branch -d <namabranch>/git branch --delete <namabranch> //hapus branch, tapi harus pindah dari branch yang mau dihapus dulu

//Multiple Branch
//Git dapat menangani sebanyak apapun branch dengan baik
//Dapat melakukan pembuatan beberapa branch, melakukan perubahan dan commit tiap branch
git log --oneline --graph //melihat branch dengan graph

//Merge
//Proses penggabungan dua branch, dan branch tidak dihapus atau masih tetap commit dll
//Untuk lakukan merge, perlu pindah ke branch lokasi merge akan dilakukan
git merge <namabranch> //branch <namabranch> akan di merge ke branch saat ini berada
//Misal ingin merge branch feature/1 ke master, maka pindah ke master dan jalankan git merge feature/1