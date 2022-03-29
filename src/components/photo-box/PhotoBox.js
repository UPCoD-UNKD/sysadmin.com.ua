import "./PhotoBox.css"
import fotoPolaroid from "../../images/foto-polaroid.png"
import clip from "../../images/clip.png"
import Busted from "../busted/Busted"

function PhotoBox() {
    return (
        <div className="photo-box">
            <Busted/>
            <img src={fotoPolaroid} alt="can`t touch photo" className="photo" />
            <img src={clip} alt="can`t touch photo" className="clip" />
        </div>
    )
}
export default PhotoBox;