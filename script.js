let loginSuccess = false; // ຕົວແປໄວ້ເຊັກສະຖານະລັອກອິນ

// ຟັງຊັນກວດສອບຂໍ້ມູນ
function checkLogin() {
    const userIn = document.getElementById('username').value;
    const passIn = document.getElementById('password').value;
    
    // ກວດສອບເງື່ອນໄຂຕາມທີ່ທ່ານກຳນົດ
    if (userIn === "palina" && passIn === "1391999") {
        loginSuccess = true;
        showModal(
            "success", 
            "ເຂົ້າສູ່ລະບົບສຳເລັດ!", 
            "ຍິນດີຕ້ອນຮັບທ່ານເຂົ້າສູ່ລະບົບບັນທຶກຂໍ້ມູນສ່ວນຕົວ."
        );
    } else {
        loginSuccess = false;
        showModal(
            "error", 
            "ຜິດພາດ!", 
            "Username ຫຼື Password ບໍ່ຖືກຕ້ອງ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ."
        );
    }
}

// ຟັງຊັນສະແດງ Popup
function showModal(type, title, message) {
    const modal = document.getElementById('customAlert');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    modalTitle.innerText = title;
    modalMessage.innerText = message;

    // ປ່ຽນ Style ແລະ Icon ຕາມສະຖານະ
    if (type === "success") {
        modalIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        modalIcon.className = "modal-icon success-color";
    } else {
        modalIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        modalIcon.className = "modal-icon error-color";
    }

    modal.classList.add('active'); // ເປີດ Popup
}

// ຟັງຊັນປິດ Popup
function closeModal() {
    const modal = document.getElementById('customAlert');
    modal.classList.remove('active'); // ປິດ Popup
    
    // ຖ້າລັອກອິນຜ່ານ ຫຼັງຈາກກົດປິດໃຫ້ລິ້ງໄປໜ້າ dashboard.html
    if (loginSuccess) {
        window.location.href = "dashboard.html";
    }
}