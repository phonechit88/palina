let loginSuccess = false; // ຕົວແປໄວ້ເຊັກສະຖານະລັອກອິນ

// ຟັງຊັນກວດສອບຂໍ້ມູນ
function checkLogin() {
    // ໃຊ້ .trim() ເພື່ອຕັດຊ່ອງວ່າງທີ່ອາດຈະຫຼົງມືກົດອອກ ປ້ອງກັນການກົດເຂົ້າລະບົບບໍ່ຜ່ານ
    const userIn = document.getElementById('username').value.trim();
    const passIn = document.getElementById('password').value.trim();
    
    // ກວດສອບຖ້າຫາກຍັງບໍ່ໄດ້ປ້ອນຂໍ້ມູນ
    if (userIn === "" || passIn === "") {
        loginSuccess = false;
        showModal(
            "error", 
            "ຄຳເຕືອນ! ⚠️", 
            "ກະລຸນາປ້ອນ Username ແລະ Password ໃຫ້ຄົບກ່ອນເດີຢ້າ ບໍ່ວ່າສ່ຳນີ້ຊິບໍ່ຈື່ແລ້ວ!"
        );
        return;
    }

    // ກວດສອບເງື່ອນໄຂ (Username: palina | Password: ວັນເກີດນົນ 27112004)
    
    if (userIn.toLowerCase() === "palina" && passIn === "27112004") {
        loginSuccess = true;
        showModal(
            "success", 
            "ເຂົ້າສູ່ລະບົບສຳເລັດ! 💖", 
            "ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ palina&non - Memory Book & Profile... ພ້ອມແລ້ວກົດຕົກລົງ ແລ້ວໄປຍິ້ມນຳກັນເລີຍ 🥰"
        );
    } else {
        loginSuccess = false;
        showModal(
            "error", 
            "ໂອ໊ະໂອ... error! ❌", 
            "Username ຫຼື Password ບໍ່ຖືກຕ້ອງ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ (ຖ້າລືມໃຫ້ທັກຖາມນົນເດີ້ 😜)"
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
        modalIcon.innerHTML = '<i class="fas fa-heart" style="color: #ff4b6e; animation: beat 0.8s infinite alternate;"></i>';
        modalIcon.className = "modal-icon success-color";
    } else {
        modalIcon.innerHTML = '<i class="fas fa-times-circle" style="color: #e63946;"></i>';
        modalIcon.className = "modal-icon error-color";
    }

    modal.classList.add('active'); // ເປີດ Popup (ຢ່າລືມເຊັກໃນ CSS ວ່າໃຊ້ .active ຫຼື .show ເດີ້)
    modal.classList.add('show');   // ເພີ່ມໄວ້ທັງສອງອັນເພື່ອປ້ອງກັນການຫຼົງກັບ class ໃນ CSS
}

// ຟັງຊັນປິດ Popup
function closeModal() {
    const modal = document.getElementById('customAlert');
    modal.classList.remove('active'); 
    modal.classList.remove('show');   
    
    // ຖ້າລັອກອິນຜ່ານ ຫຼັງຈາກກົດປິດໃຫ້ລິ້ງໄປໜ້າ dashboard.html
    if (loginSuccess) {
        window.location.href = "dashboard.html"; 
    }
}

// ແຖມພິເສດ: ລະບົບກົດ Enter ຢູ່ແປ້ນພິມ ແລ້ວໃຫ້ກົດ Login ໄດ້ເລີຍ (ບໍ່ຕ້ອງເອົາມືໄປກົດປຸ່ມກໍໄດ້)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkLogin();
            }
        });
    }
});
