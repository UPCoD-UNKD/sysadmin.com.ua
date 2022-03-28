import './Footer.css'
import iconFooter from "../../images/icon-footer.png"
function footer() {
	return (
		<div class="footer box">
			<div class="footer__img">
				<img src={iconFooter} alt="can`t touch the image" class="center" />
			</div>
		</div>
	)
}
export default footer