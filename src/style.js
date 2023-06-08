const styles = {
     xsTransition: "xs:hover:transition xs:hover:duration-700 xs:hover:ease-in-out transition duration-700 ease-in-out",
     mobileLinkStyles: "text-gray-300 hover:text-white block px-5 py-3 rounded-md text-base font-medium hover:bg-lightPurple",
     desktopLinkstyles: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-lightPurple",
     footerLinksStyles: "text-gray-300 hover:text-white text-[14px] px-3 py-2 rounded-md text-sm font-medium hover:bg-lightPurple",
}
export const layout = {
     section: `flex md:flex-row flex-col`,
     sectionReverse: `flex md:flex-row flex-col-reverse`,
   
     sectionImgReverse: `flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`,
     sectionImg: `flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative`,
   
     sectionInfo: `flex-1 flex-col`,
   };
   
export default styles;