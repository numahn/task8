import { getSocialLinks } from "../utils/data";
import Image from "next/image";
import Facebook from "../images/facebook.svg";


const SocialLinks = () => {
  const socialLinks = getSocialLinks(1);

  const getIcon = (title) => {
    switch (title) {
      case "Facebook":
        return Facebook;
    }
  };

  return (
    <>
      <div className="flex flex-row items-center gap-x-11 pt-7">
        {socialLinks.map((link) => {
          return (
            <>
              {" "}
              <Image
                src={getIcon(link.title)}
                className="flex-col"
                alt="User Icon"
                width={54}
                height={54}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default SocialLinks;