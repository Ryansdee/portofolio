
    // Calcul de l'âge automatique
    function calculateAge(birthDate) {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    }

    window.addEventListener("DOMContentLoaded", () => {
      document.getElementById('age').textContent = calculateAge('2004-08-02');
    });