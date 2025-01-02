 document.getElementById('submitButton').addEventListener('click', function () {
            const namaTransaksi = document.getElementById('namaTransaksi');
            const jumlahTransaksi = document.getElementById('jumlahTransaksi');
            const kategoriTransaksi = document.getElementById('kategoriTransaksi');

            const namaTransaksiError = document.getElementById('namaTransaksiError');
            const jumlahTransaksiError = document.getElementById('jumlahTransaksiError');
            const kategoriTransaksiError = document.getElementById('kategoriTransaksiError');

            let isValid = true;
            namaTransaksiError.style.display = 'none';
            jumlahTransaksiError.style.display = 'none';
            kategoriTransaksiError.style.display = 'none';

            if (namaTransaksi.value.trim() === '') {
                namaTransaksiError.style.display = 'block';
                isValid = false;
            }
            if (jumlahTransaksi.value.trim() === '' || jumlahTransaksi.value <= 0) {
                jumlahTransaksiError.style.display = 'block';
                isValid = false;
            }
            if (kategoriTransaksi.value === '') {
                kategoriTransaksiError.style.display = 'block';
                isValid = false;
            }
            if (isValid) {
                alert('Formulir berhasil disimpan!');
                document.getElementById('transactionForm').reset();
            }
        });