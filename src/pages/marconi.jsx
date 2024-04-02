import artifactImg from "../assets/img/marconi.svg";
import Slides from "../components/slides/slides.jsx"
import Menu from "../components/menu/menu.jsx";

const Marconi = () => {
  const artifact = {
      title: "The Marconi Magnetic Detector",
      description:
        "In the late 19th century, a young inventor named Guglielmo Marconi developed the Marconi Magnetic Detector, a device that could detect magnetic fields in radio waves. These are invisible signals that make wireless communication possible. These signals could be transmitted long distances without wires and received and became the starting point for wireless communication.",
      impact:
        "The Marconi Magnetic Detector is a critical building block that started the journey to global connectivity. This invention changed the game of communication, shaping our modern world. This discovery laid the foundation for future wireless innovations like radios, televisions, the internet, smartphones and Wi-Fi.",
      directions: [
        "The Marconi Magnetic Detector functions by capturing radio waves, which are invisible signals traveling through the air. This device utilized a magnetic field to intercept these waves. When the radio waves interacted with the magnetic field within the detector, they caused fluctuations, creating tiny electrical currents. These currents were then amplified and converted into audible sounds, allowing people to hear the messages carried by the radio waves.",
  
        "The Marconi Magnetic Detector operates on the principles of electromagnetic induction. It detects radio waves by utilizing a coherer, which is a component sensitive to electromagnetic waves. It operates by utilizing an antenna to receive radio waves, a coherer to detect and respond to these waves by altering its electrical resistance, and subsequent circuitry that interprets this change to generate a discernible output, usually an audible signal. This pioneering technology laid the foundation for wireless communication systems we use today.",
      ]
    };

  return (
    <>
      
      <Menu />
      
      <h1 className="artifactTitle">The Marconi Magnetic Detector</h1>

      <Slides artifact={artifact} artifactImg={artifactImg}/>
      
    </>
  );
};

export default Marconi;
