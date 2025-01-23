
  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach((section) => {
      section.style.display = 'none';
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
    }
  }