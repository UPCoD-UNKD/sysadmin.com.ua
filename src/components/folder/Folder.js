import ExperienceBox from '../experience/ExperienceBox';
import Header from '../header/Header';
import SkillsBox from '../skills/SkillsBox';
import PhotoBox from '../photo-box/PhotoBox';
import './Folder.css'
function Folder () {
    return (
        <div className="folder">
            <div className='print'>
        <div className='file__inner'>
            <PhotoBox/>
            <Header/>
            <ExperienceBox/>
            <SkillsBox/>
    
        </div>
        </div>
        </div>
    )
}
export default Folder;