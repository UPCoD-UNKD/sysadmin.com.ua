import "./Footer.css";
import iconFooter from "../../images/icon-footer.png";
function footer() {
	return (
		<div className="footer box">
			<div className="footer__img">
				<img src={iconFooter} alt="can`t touch" className="center" />
			</div>
		</div>
	);
}
export default footer;
