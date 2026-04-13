import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate("/add");
  };
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <h2 style={styles.logo}>Navbar</h2>

      {/* Search Bar */}
      <input type="text" placeholder="Search notes..." style={styles.search} />

      {/* Add Note Button */}
      <button onClick={handleAddNote} style={styles.button}>Add Note</button>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  search: {
    padding: "8px",
    width: "200px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#ff9800",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;
