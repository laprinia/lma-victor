import RotatingCameraScene from "@/components/Canvas";

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <p>Happy day of birth Victor Dadaciu!</p>
      </header>
      <div style={styles.canvasContainer}>
        <RotatingCameraScene />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(24,24,24,0.5)",
  },
  header: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  canvasContainer: {
    flex: 1,
  },
  footer: {
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
};

export default Home;
