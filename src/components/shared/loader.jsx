import { Oval } from "react-loader-spinner";

const Loader = () =>  {
  return (
    <div className="loaderHolder">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={7}
        strokeWidthSecondary={7}
      />
    </div>
  );
}

export default Loader;