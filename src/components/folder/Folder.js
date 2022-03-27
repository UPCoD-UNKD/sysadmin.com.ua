import ExperienceBox from '../experience/ExperienceBox';
import Header from '../header/Header';
import SkillsBox from '../skills/SkillsBox';
import PhotoBox from '../photo-box/PhotoBox';
import Footer from '../footer/Footer';
import './Folder.css'
function Folder() {
    return (
        <div className="folder">
            <div className='print'>
                <div className='file__inner'>
                    <PhotoBox />
                    <Header />
                    <ExperienceBox />
                    <SkillsBox />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Folder;