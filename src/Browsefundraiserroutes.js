import medical from "./Assets/Images/medical.png";
import animals from "./Assets/Images/animals.png";
import communitydevelopment from "./Assets/Images/Comminutydevelopment.png";
import elderly from "./Assets/Images/Elderly.png";
import environmental from "./Assets/Images/environmental.png";
import rights from "./Assets/Images/rights.png";
import poor from "./Assets/Images/Poor.png";
import ngodonate from "./Assets/Images/ngo-donate.png";
import education from "./Assets/Images/education.png";

const allCategory = [
  {
    title: "Medical",
    Component: medical,
    link: "/browsefundraiser/medical",
  },
  {
    title: "Animals",
    Component: animals,
    link: "/browsefundraiser/animals",
  },
  {
    title: "Community development",
    Component: communitydevelopment,
    link: "/browsefundraiser/community_development",
  },
  {
    title: "Elderly",
    Component: elderly,
    link: "/browsefundraiser/elderly",
  },
  {
    title: "Environment",
    Component: environmental,
    link: "/browsefundraiser/environmental",
  },
  {
    title: "Human Rights",
    Component: rights,
    link: "/browsefundraiser/human_rights",
  },
  {
    title: "Poor",
    Component: poor,
    link: "/browsefundraiser/poor",
  },
  {
    title: "To NGO",
    Component: ngodonate,
    link: "/browsefundraiser/donate_to_ngo",
  },
  {
    title: "Education",
    Component: education,
    link: "/browsefundraiser/education",
  },
];

export default allCategory;
