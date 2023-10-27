import { Oval } from "react-loader-spinner";
import "../../styles/css/loader.css";

const Loader = () =>  {
  return (
    <div className="loadingUnit">
      <div className="loaderHolder">
        <Oval
          height={65}
          width={65}
          color="#ffb742"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#ffb742"
          strokeWidth={7}
          strokeWidthSecondary={7}
        />
      </div>
    </div>
  );
}

export default Loader;