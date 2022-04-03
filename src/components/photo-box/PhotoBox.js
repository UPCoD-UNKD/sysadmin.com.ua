import "./PhotoBox.css";
import fotoPolaroid from "../../images/foto-polaroid.jpg";
import clip from "../../images/clip.webp";
// import Busted from "../busted/Busted";

function PhotoBox() {
	return (
		<div className="photo-box">
			{/* <Busted /> */}
			<img src={fotoPolaroid} alt="can`t touch" className="photo" />
			<img src={clip} alt="can`t touch" className="clip" />
		</div>
	);
}
export default PhotoBox;
