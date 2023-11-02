import "./header.ts"
import { HeaderWrapper } from "./header.ts";
function Header() {
    return <HeaderWrapper >
        <div className="header-content global-width">
            <a href="javascript:void(0)" className="logo-wrap">
                <h1 className="page-title">HRM</h1>
            </a>
        </div>
    </HeaderWrapper>
}
export default Header;