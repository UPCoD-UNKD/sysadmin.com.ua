import busted from '../../images/busted.png';
import './Busted.css';
function Busted (){
    return (
        <div className="busted">
            <img 
            src={busted}
            width='650'
            height='400'
            />
        </div>
    )
}
export default Busted;