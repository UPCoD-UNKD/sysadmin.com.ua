import "./Header.css"
function Header () {
    return (
        <div className="header">
            <div className="name-box">
                Андрей Роговский
                </div>
            <div className="about-box">
                <div className="line title">Character Concept</div>
                <p className="text">IT-консультант с опытом работы более 15-и лет.</p>
                <p className="text">Любит безопасность, надежность и автоматизацию.</p>
                <p className="text">Замечен в работе финтека и банковских структур.</p>
                <p className="text">Соблюдает международные стандартны безопасности.</p>
                <p className="text">Характер уравновешенный. Любит рисовать. Женат.</p>
            </div>
        </div>
    )
}
export default Header;