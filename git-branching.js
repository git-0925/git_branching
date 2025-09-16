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

//Merge Conflict
//Kondisi ketika melakukan perubahan pada kode file yang sama di branch yang berbeda
//Dan ketika melakukan merge akan terjadi konflik, sehingga perlu adanya merge conflict
//Misal branchA & branchB merubah file1, kemudian keduanya merge ke master
//Ketika branchA merge ke master masih aman, namun ketika branchB merge ke master akan conflict
//Perubahan yg tidak conflict akan ada di staging, sedangkan yang conflict berada di working directory
//Kita harus melakukan merge conflict untuk mengatasinya, dengan memperbaiki pada merge editor scr manual
//Setelah selesai perbaiki manual, add dan commit lagi seperti biasa
git merge --abort //bisa juga untuk membatalkan conflict, semua perubahan merge yg conflict akan dihapus

//Cherry Pick
//Kondisi ketika ingin mengambil salah satu/beberapa commit saja dari sebuah branch ke branch saat ini
//Berbeda dengan merge yang pasti mengambil keseluruhan commit
git cherry-pick <commitId>

//Tag
//Fitur untuk menandai sebuah commit id, bisa untuk sebuah reference ke sebuah commit
//Biasanya digunakan sebagai penanda versi rilis dari aplikasi, misal Tag 1.0.0, 1.0.1, dll
//Tag bersifat unik atau tidak bisa membuat tag dengan nama yang sama
git tag <tagName> <commitId> //membuat tag suatu commit
git tag -l/git tag --list //menampilkan semua tag yang dibuat
git checkout <tagName> //pindah ke suatu tag
git tag -d <tagName>/git tag --delete <tagName> //menghapus tag, tidak dapat mengubah tag di git

//Stash
//Sebuah tempat yang bisa menyimpan perubahan di working/staging secara sementara
//Agar branch saat ini menjadi bersih kembali, sehingga bisa pindah ke branch lain dulu
//Karena secara default jika terdapat perubahan belum dicommit/terjadi conflict tidak dapat pindah branch lain
git stash push -m '<message>' //membuat stash baru, sudah bisa pindah ke branch lain
git stash list //melihat semua stash yang dibuat
git stash show <stashId> //melihat perubahan yang terjadi di stash
git stash apply <stashId> //mengambil perubahan stash, namun harus pindah dulu ke branch yang mau kita tarik perubahan stash tsb
git stash drop <stashId> //menghapus stash spesifik/stash yang sudah diambil
git stash clear //menghapus semua stash