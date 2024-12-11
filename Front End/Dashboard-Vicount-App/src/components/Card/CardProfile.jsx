import { Link } from "react-router-dom";

const CardProfile = ({ userProfile }) => {
  return (
    <div className="w-full max-w-full p-3 mt-4 md:flex-0 md:mt-0">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-xl bg-clip-border">
        <img
          className="w-full rounded-t-xl"
          src="./src/assets/curved-images/curved0.jpg"
          alt="profile cover image"
        />
        <div className="flex flex-wrap justify-center -mx-3 rounded-t-xl">
          <div className="w-4/12 max-w-full px-3 flex-0">
            <div className="mb-6 -mt-6 lg:mb-0 lg:-mt-16">
              <Link to="#">
                <img
                  className="w-56 mx-auto border-2 border-white border-solid rounded-full object-cover"
                  src="./src/assets/profile/bruce-mars.jpg"
                  alt="profile image"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-auto p-6 pt-0">
          <div className="mt-6 text-center">
            <h3 className="dark:text-dark">Mark Davis</h3>
            <div className="mb-2 font-semibold leading-relaxed text-base dark:text-dark/80 text-slate-700">
              <i className="mr-2 dark:text-dark ni ni-pin-3"></i>
              Markdavis@gmail.com
            </div>
            <div className="mt-2 mb-2 font-semibold leading-relaxed text-base dark:text-dark/80 text-slate-700">
              <i className="mr-2 dark:text-dark ni ni-briefcase-24"></i>
              Admin - Vecount Inc
            </div>
            <div className="dark:text-dark/80">
              <i className="mr-2 dark:text-dark ni ni-hat-3"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id
              quibusdam perferendis fugiat, architecto animi exercitationem quos
              ipsum excepturi maiores perspiciatis ipsam eaque est accusantium
              officiis? Quod nesciunt eveniet natus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
