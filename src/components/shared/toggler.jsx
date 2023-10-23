import '../../styles/css/toggle.css'
import settings from '../../assets/icons/settings.png';

const Toggler = () => {
  return (
    <div className="toggleHolder">
      <img src={settings} alt="settings" className="toggleSetting" />
    </div>
  );
}
 
export default Toggler;