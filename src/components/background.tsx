import mobileLightBackground from "@assets/images/bg-mobile-light.jpg";
import mobileDarkBackground from "@assets/images/bg-mobile-dark.jpg";
import desktopLightBackground from "@assets/images/bg-desktop-light.jpg";
import desktopDarkBackground from "@assets/images/bg-desktop-dark.jpg";
import classes from "@assets/styles/components/background.module.css";

function Background({ isDarkMode }) {
  return (
    <picture className={classes.container}>
      <source
        srcSet={isDarkMode ? desktopDarkBackground : desktopLightBackground}
        media="(min-width: 992px)"
      />
      <img
        className={classes.image}
        src={isDarkMode ? mobileDarkBackground : mobileLightBackground}
        alt="Background image"
      />
    </picture>
  );
}

export default Background;