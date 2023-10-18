import '../../styles/css/toggle.css'
import logo from '../../assets/images/logo.png';

const Toggler = () => {
  return (
    <div className="toggleHolder">
      <img src={logo} alt="settings" className="toggleSetting" />
    </div>
  );
}
 
export default Toggler;