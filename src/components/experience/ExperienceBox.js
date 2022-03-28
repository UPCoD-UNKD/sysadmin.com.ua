import './ExperienceBox.css'
function ExperienceBox() {
    return (
        <div className="experience-box">
            <h1 className='heading'>Game match results</h1>
            <div className="experience__inner">
                <div className="experience-item">
                    <div className="period-box">
                        <div className='title'>2009 - по настоящее время</div>
                    </div>
                    <div className="description-box">
                        <div className='text'>
                            <span>Class:</span>
                            IT-Консультант по безопасности и автоматизации.
                        </div>
                        <div className='text'>
                            <span>Buzzwords:</span>
                            Linux, AWS, DevOps, Clouds, Security, PCI-DSS.
                        </div>
                        <div className='text'>
                            Занимается оказанием консультационных услуг ,
                        </div>
                        <div className='text'>
                            облачной инфраструктурой и безопасностью.
                        </div>
                        <div className='text'>
                            Ушел из хостинга и закрыл старый сайт -
                            <a href='https://www.dedic.ru/'> dedic.ru</a>
                        </div>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="period-box">
                        <div className='title'>Июнь 2009 - Ноябрь 2005</div>
                    </div>
                    <div className="description-box">
                        <div className='text'>
                            <span>Playground:</span>
                            Intway World Corporation (
                            <a href='https://intway.com/'>intway.com</a>
                            )
                        </div>
                        <div className='text'>
                            <span>Roleplay:</span>
                            Руководитель департамента хостинга
                        </div>
                        <div className='text'>
                            <span>Buzzwords:</span>
                            Linux, Plesk, OpenVZ (HyperVM), XEN, RedHat Cluster
                        </div>
                        <div className='text'>
                            Suite, Apache, Nginx, MySql (NDB), Memcache, собственные разработки
                        </div>
                        <div className='text'>
                            <span>Achievements:</span>
                            поддержка серверов и проектов компании, поддержка
                        </div>
                        <div className='text'>
                            серверов хостинга, организация решения клиентских проблем
                        </div>
                        <div className='text'>
                            с хостингом под ключ. Под моим руководством работало
                        </div>
                        <div className='text'>
                            9 специалистов, в сутки решалось примерно 150 тикетов, объем
                        </div>
                        <div className='text'>
                            клиентской базы - ~320 000, активных пользователей - ~290 000
                        </div>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="period-box">
                        <div className='title'>
                            Ноябрь 2005 - Март 2004
                        </div>
                    </div>
                    <div className="description-box">
                        <div className='text'>
                            <span>Playground:</span>
                            <a href='http://esupport.org.ua/'>eSupport.org.ua</a>
                        </div>
                        <div className='text'>
                            <span>Roleplay:</span>
                            Основатель
                        </div>
                        <div className='text'>
                            <span>Buzzwords:</span>
                            Linux, FreeBSD, cPanel/WHM, DirectAdmin, Plesk
                        </div>
                        <div className='text'>
                            <span>Achievements:</span>
                            администрирование хостинговых серверов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExperienceBox;