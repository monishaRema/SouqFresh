
const siteTitle = "SauqFresh"
const baseURL = 'i dont know'

const motionContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const motionCardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
};

export { siteTitle,baseURL, motionContainerVariants, motionCardVariants}