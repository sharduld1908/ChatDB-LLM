function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year for copyright

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-3 px-4 text-center">
      <p className="text-sm text-gray-700">
        © {currentYear} — Developed by Shardul Dharmadhikari
      </p>
    </footer>
  );
}

export default Footer;