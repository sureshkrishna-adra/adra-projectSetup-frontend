import { RiErrorWarningLine } from "react-icons/ri";
import { LiaIdCard } from "react-icons/lia";

const closeTestIcon = <RiErrorWarningLine className="fs-1" />

const interviewRoundNonActiveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="15" fill="#303030" />
    <path d="M10 12H16.1975" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 18H19.2354" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const interviewRoundActiveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="15" fill="#303030" />
    <path d="M10 12H16.1975" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 18H19.2354" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const testSucccess = <svg xmlns="http://www.w3.org/2000/svg" width="124" height="123" viewBox="0 0 124 123" fill="none">
    <path d="M123.5 61.5C123.5 95.4655 95.9655 123 62 123C28.0345 123 0.5 95.4655 0.5 61.5C0.5 27.5345 28.0345 0 62 0C95.9655 0 123.5 27.5345 123.5 61.5ZM6.25046 61.5C6.25046 92.2896 31.2104 117.25 62 117.25C92.7896 117.25 117.75 92.2896 117.75 61.5C117.75 30.7104 92.7896 5.75046 62 5.75046C31.2104 5.75046 6.25046 30.7104 6.25046 61.5Z" fill="#00A91B" />
    <path d="M91.5058 41.1926L53.3793 79.319L36.0491 61.9888" stroke="url(#paint0_linear_9_183)" stroke-width="7.10983" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
        <linearGradient id="paint0_linear_9_183" x1="33.2052" y1="60.4335" x2="59.1561" y2="70.0318" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00A91B" />
            <stop offset="1" stop-color="#00A91B" />
        </linearGradient>
    </defs>
</svg>

const timerIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9.99997 3.01807C9.90148 3.01807 9.80395 2.99867 9.71296 2.96098C9.62196 2.92329 9.53928 2.86804 9.46964 2.7984C9.39999 2.72875 9.34475 2.64607 9.30706 2.55508C9.26937 2.46408 9.24997 2.36656 9.24997 2.26807C9.24997 2.16957 9.26937 2.07205 9.30706 1.98105C9.34475 1.89006 9.39999 1.80738 9.46964 1.73774C9.53928 1.66809 9.62196 1.61285 9.71296 1.57516C9.80395 1.53747 9.90148 1.51807 9.99997 1.51807H13.536C13.7349 1.51807 13.9256 1.59708 14.0663 1.73774C14.207 1.87839 14.286 2.06915 14.286 2.26807C14.286 2.46698 14.207 2.65774 14.0663 2.7984C13.9256 2.93905 13.7349 3.01807 13.536 3.01807H9.99997ZM6.52997 3.47007C6.67042 3.61069 6.74931 3.80132 6.74931 4.00007C6.74931 4.19882 6.67042 4.38944 6.52997 4.53007L4.02997 7.03007C3.88779 7.16255 3.69975 7.23467 3.50545 7.23124C3.31114 7.22781 3.12576 7.1491 2.98835 7.01169C2.85093 6.87428 2.77222 6.68889 2.76879 6.49459C2.76537 6.30029 2.83749 6.11224 2.96997 5.97007L5.46997 3.47007C5.61059 3.32962 5.80122 3.25073 5.99997 3.25073C6.19872 3.25073 6.38934 3.32962 6.52997 3.47007ZM12 5.75007C10.5661 5.75007 9.16434 6.17527 7.97208 6.97191C6.77983 7.76855 5.85058 8.90085 5.30184 10.2256C4.75311 11.5504 4.60953 13.0081 4.88928 14.4145C5.16902 15.8208 5.85951 17.1127 6.87344 18.1266C7.88738 19.1405 9.1792 19.831 10.5856 20.1108C11.9919 20.3905 13.4497 20.2469 14.7744 19.6982C16.0992 19.1495 17.2315 18.2202 18.0281 17.028C18.8248 15.8357 19.25 14.434 19.25 13.0001C19.25 12.8012 19.329 12.6104 19.4696 12.4697C19.6103 12.3291 19.8011 12.2501 20 12.2501C20.1989 12.2501 20.3896 12.3291 20.5303 12.4697C20.671 12.6104 20.75 12.8012 20.75 13.0001C20.75 14.7307 20.2368 16.4224 19.2753 17.8613C18.3139 19.3002 16.9473 20.4217 15.3484 21.084C13.7496 21.7463 11.9903 21.9196 10.2929 21.5819C8.59559 21.2443 7.03649 20.411 5.81278 19.1873C4.58907 17.9635 3.75572 16.4044 3.4181 14.7071C3.08048 13.0098 3.25376 11.2504 3.91602 9.65159C4.57829 8.05273 5.6998 6.68617 7.13873 5.72471C8.57766 4.76324 10.2694 4.25007 12 4.25007C12.1989 4.25007 12.3896 4.32908 12.5303 4.46974C12.671 4.61039 12.75 4.80115 12.75 5.00007C12.75 5.19898 12.671 5.38974 12.5303 5.5304C12.3896 5.67105 12.1989 5.75007 12 5.75007Z" fill="black" />
    <path d="M17.188 8.36389C17.2995 8.21956 17.3545 8.03957 17.3429 7.8576C17.3312 7.67562 17.2537 7.50413 17.1247 7.37519C16.9958 7.24625 16.8243 7.1687 16.6423 7.15705C16.4604 7.1454 16.2804 7.20044 16.136 7.31189L12.966 9.77689L10.894 11.2569C10.6953 11.3992 10.5299 11.5831 10.4094 11.7957C10.2889 12.0084 10.2161 12.2447 10.1961 12.4883C10.1761 12.732 10.2094 12.977 10.2936 13.2065C10.3778 13.4359 10.511 13.6443 10.6839 13.8171C10.8568 13.9899 11.0652 14.123 11.2947 14.2072C11.5242 14.2913 11.7693 14.3245 12.0129 14.3044C12.2565 14.2843 12.4928 14.2114 12.7054 14.0908C12.918 13.9701 13.1018 13.8047 13.244 13.6059L14.723 11.5339L17.188 8.36389Z" fill="black" />
</svg>

const dashboardIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M3 6.5C3 5.43913 3.42143 4.42172 4.17157 3.67157C4.92172 2.92143 5.93913 2.5 7 2.5C8.06087 2.5 9.07828 2.92143 9.82843 3.67157C10.5786 4.42172 11 5.43913 11 6.5C11 7.56087 10.5786 8.57828 9.82843 9.32843C9.07828 10.0786 8.06087 10.5 7 10.5C5.93913 10.5 4.92172 10.0786 4.17157 9.32843C3.42143 8.57828 3 7.56087 3 6.5ZM14 17.5C14 16.4391 14.4214 15.4217 15.1716 14.6716C15.9217 13.9214 16.9391 13.5 18 13.5C19.0609 13.5 20.0783 13.9214 20.8284 14.6716C21.5786 15.4217 22 16.4391 22 17.5C22 18.5609 21.5786 19.5783 20.8284 20.3284C20.0783 21.0786 19.0609 21.5 18 21.5C16.9391 21.5 15.9217 21.0786 15.1716 20.3284C14.4214 19.5783 14 18.5609 14 17.5ZM22 6.5C22 4.614 22 3.672 21.414 3.086C20.828 2.5 19.886 2.5 18 2.5C16.114 2.5 15.172 2.5 14.586 3.086C14 3.672 14 4.614 14 6.5C14 8.386 14 9.328 14.586 9.914C15.172 10.5 16.114 10.5 18 10.5C19.886 10.5 20.828 10.5 21.414 9.914C22 9.328 22 8.386 22 6.5ZM11 17.5C11 15.614 11 14.672 10.414 14.086C9.828 13.5 8.886 13.5 7 13.5C5.114 13.5 4.172 13.5 3.586 14.086C3 14.672 3 15.614 3 17.5C3 19.386 3 20.328 3.586 20.914C4.172 21.5 5.114 21.5 7 21.5C8.886 21.5 9.828 21.5 10.414 20.914C11 20.328 11 19.386 11 17.5Z" stroke="#A3A3A3" strokeWidth="1.5" />
</svg>

const employeeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.5 1.25C8.24022 1.25 7.03204 1.75044 6.14124 2.64124C5.25045 3.53204 4.75 4.74022 4.75 6C4.75 7.25978 5.25045 8.46796 6.14124 9.35876C7.03204 10.2496 8.24022 10.75 9.5 10.75C10.7598 10.75 11.968 10.2496 12.8588 9.35876C13.7496 8.46796 14.25 7.25978 14.25 6C14.25 4.74022 13.7496 3.53204 12.8588 2.64124C11.968 1.75044 10.7598 1.25 9.5 1.25ZM6.25 6C6.25 5.13805 6.59241 4.3114 7.2019 3.7019C7.8114 3.09241 8.63805 2.75 9.5 2.75C10.362 2.75 11.1886 3.09241 11.7981 3.7019C12.4076 4.3114 12.75 5.13805 12.75 6C12.75 6.86195 12.4076 7.6886 11.7981 8.2981C11.1886 8.90759 10.362 9.25 9.5 9.25C8.63805 9.25 7.8114 8.90759 7.2019 8.2981C6.59241 7.6886 6.25 6.86195 6.25 6Z" fill="#A3A3A3" />
    <path d="M15.5 2.25C15.3011 2.25 15.1103 2.32902 14.9697 2.46967C14.829 2.61032 14.75 2.80109 14.75 3C14.75 3.19891 14.829 3.38968 14.9697 3.53033C15.1103 3.67098 15.3011 3.75 15.5 3.75C16.0967 3.75 16.669 3.98705 17.091 4.40901C17.5129 4.83097 17.75 5.40326 17.75 6C17.75 6.59674 17.5129 7.16903 17.091 7.59099C16.669 8.01295 16.0967 8.25 15.5 8.25C15.3011 8.25 15.1103 8.32902 14.9697 8.46967C14.829 8.61032 14.75 8.80109 14.75 9C14.75 9.19891 14.829 9.38968 14.9697 9.53033C15.1103 9.67098 15.3011 9.75 15.5 9.75C16.4946 9.75 17.4484 9.35491 18.1517 8.65165C18.8549 7.94839 19.25 6.99456 19.25 6C19.25 5.00544 18.8549 4.05161 18.1517 3.34835C17.4484 2.64509 16.4946 2.25 15.5 2.25Z" fill="#A3A3A3" />
    <path fillRule="evenodd" clipRule="evenodd" d="M4.178 13.52C5.578 12.72 7.461 12.25 9.5 12.25C11.54 12.25 13.422 12.72 14.822 13.52C16.2 14.308 17.25 15.51 17.25 17C17.25 18.49 16.2 19.692 14.822 20.48C13.422 21.28 11.539 21.75 9.5 21.75C7.46 21.75 5.578 21.28 4.178 20.48C2.8 19.692 1.75 18.49 1.75 17C1.75 15.51 2.8 14.308 4.178 13.52ZM4.922 14.823C3.767 15.483 3.25 16.28 3.25 17C3.25 17.72 3.767 18.517 4.922 19.177C6.056 19.825 7.673 20.25 9.5 20.25C11.327 20.25 12.944 19.825 14.078 19.177C15.233 18.517 15.75 17.719 15.75 17C15.75 16.28 15.233 15.483 14.078 14.823C12.944 14.175 11.327 13.75 9.5 13.75C7.673 13.75 6.056 14.175 4.922 14.823Z" fill="#A3A3A3" />
    <path d="M18.6598 13.2668C18.4654 13.2243 18.2621 13.2609 18.0946 13.3683C17.9271 13.4758 17.8092 13.6454 17.7668 13.8398C17.7243 14.0342 17.7609 14.2375 17.8683 14.4049C17.9758 14.5724 18.1454 14.6903 18.3398 14.7328C19.1318 14.9058 19.7648 15.2048 20.1828 15.5468C20.6008 15.8888 20.7498 16.2238 20.7498 16.4998C20.7498 16.7498 20.6298 17.0448 20.2968 17.3538C19.9618 17.6648 19.4468 17.9518 18.7838 18.1518C18.6894 18.1801 18.6016 18.2268 18.5253 18.2891C18.4489 18.3514 18.3856 18.4282 18.339 18.515C18.2923 18.6017 18.2632 18.6968 18.2533 18.7949C18.2434 18.8929 18.2529 18.9919 18.2813 19.0863C18.3096 19.1806 18.3563 19.2685 18.4186 19.3448C18.4809 19.4211 18.5577 19.4844 18.6445 19.5311C18.7312 19.5777 18.8263 19.6068 18.9244 19.6167C19.0224 19.6266 19.1214 19.6171 19.2158 19.5888C20.0388 19.3408 20.7738 18.9578 21.3178 18.4528C21.8638 17.9458 22.2498 17.2788 22.2498 16.4998C22.2498 15.6348 21.7758 14.9118 21.1328 14.3858C20.4888 13.8588 19.6218 13.4778 18.6598 13.2668Z" fill="#A3A3A3" />
</svg>

const attendanceIcon = <LiaIdCard className="fs-3"/>

const payrollIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#A3A3A3" strokeWidth="1.5" />
    <path d="M12.5 17V18M12.5 17C14.157 17 15.5 15.88 15.5 14.5C15.5 13.12 14.157 12 12.5 12C10.843 12 9.5 10.88 9.5 9.5C9.5 8.12 10.843 7 12.5 7M12.5 17C10.843 17 9.5 15.88 9.5 14.5M12.5 6V7M12.5 7C14.157 7 15.5 8.12 15.5 9.5" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" />
</svg>

const interviewIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M3.5 12C3.5 15.771 3.5 19.657 4.818 20.828C6.136 22 8.258 22 12.5 22C16.743 22 18.864 22 20.182 20.828C21.5 19.657 21.5 15.771 21.5 12" stroke="#A3A3A3" strokeWidth="1.5" />
    <path d="M15.16 14.202L21.358 12.342C21.768 12.219 21.974 12.158 22.126 12.036C22.2588 11.9291 22.3621 11.79 22.426 11.632C22.5 11.452 22.5 11.237 22.5 10.808C22.5 9.12 22.5 8.277 22.17 7.633C21.8831 7.07273 21.4273 6.61688 20.867 6.33C20.223 6 19.38 6 17.692 6H7.308C5.62 6 4.777 6 4.133 6.33C3.57273 6.61688 3.11688 7.07273 2.83 7.633C2.5 8.277 2.5 9.12 2.5 10.808C2.5 11.237 2.5 11.451 2.573 11.632C2.63693 11.79 2.7402 11.9291 2.873 12.036C3.026 12.158 3.231 12.219 3.643 12.343L9.84 14.202" stroke="#A3A3A3" strokeWidth="1.5" />
    <path d="M9.66992 4.00001C9.87652 3.41448 10.2597 2.90744 10.7665 2.5488C11.2734 2.19015 11.879 1.99756 12.4999 1.99756C13.1208 1.99756 13.7265 2.19015 14.2333 2.5488C14.7402 2.90744 15.1233 3.41448 15.3299 4.00001M14.4999 12.5H10.4999C10.3673 12.5 10.2401 12.5527 10.1464 12.6465C10.0526 12.7402 9.99992 12.8674 9.99992 13V15.162C9.99995 15.2619 10.0299 15.3594 10.0858 15.4421C10.1418 15.5248 10.2212 15.5889 10.3139 15.626L11.0139 15.906C11.9678 16.2877 13.032 16.2877 13.9859 15.906L14.6859 15.626C14.7786 15.5889 14.8581 15.5248 14.914 15.4421C14.97 15.3594 14.9999 15.2619 14.9999 15.162V13C14.9999 12.8674 14.9472 12.7402 14.8535 12.6465C14.7597 12.5527 14.6325 12.5 14.4999 12.5Z" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" />
</svg>

const circularIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M2.5 12C2.5 8.229 2.5 6.343 3.672 5.172C4.843 4 6.729 4 10.5 4H14.5C18.271 4 20.157 4 21.328 5.172C22.5 6.343 22.5 8.229 22.5 12V14C22.5 17.771 22.5 19.657 21.328 20.828C20.157 22 18.271 22 14.5 22H10.5C6.729 22 4.843 22 3.672 20.828C2.5 19.657 2.5 17.771 2.5 14V12Z" stroke="#A3A3A3" strokeWidth="1.5" />
    <path d="M7.5 4V2.5M17.5 4V2.5M3 9H22" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18.5 17C18.5 17.2652 18.3946 17.5196 18.2071 17.7071C18.0196 17.8946 17.7652 18 17.5 18C17.2348 18 16.9804 17.8946 16.7929 17.7071C16.6054 17.5196 16.5 17.2652 16.5 17C16.5 16.7348 16.6054 16.4804 16.7929 16.2929C16.9804 16.1054 17.2348 16 17.5 16C17.7652 16 18.0196 16.1054 18.2071 16.2929C18.3946 16.4804 18.5 16.7348 18.5 17ZM18.5 13C18.5 13.2652 18.3946 13.5196 18.2071 13.7071C18.0196 13.8946 17.7652 14 17.5 14C17.2348 14 16.9804 13.8946 16.7929 13.7071C16.6054 13.5196 16.5 13.2652 16.5 13C16.5 12.7348 16.6054 12.4804 16.7929 12.2929C16.9804 12.1054 17.2348 12 17.5 12C17.7652 12 18.0196 12.1054 18.2071 12.2929C18.3946 12.4804 18.5 12.7348 18.5 13ZM13.5 17C13.5 17.2652 13.3946 17.5196 13.2071 17.7071C13.0196 17.8946 12.7652 18 12.5 18C12.2348 18 11.9804 17.8946 11.7929 17.7071C11.6054 17.5196 11.5 17.2652 11.5 17C11.5 16.7348 11.6054 16.4804 11.7929 16.2929C11.9804 16.1054 12.2348 16 12.5 16C12.7652 16 13.0196 16.1054 13.2071 16.2929C13.3946 16.4804 13.5 16.7348 13.5 17ZM13.5 13C13.5 13.2652 13.3946 13.5196 13.2071 13.7071C13.0196 13.8946 12.7652 14 12.5 14C12.2348 14 11.9804 13.8946 11.7929 13.7071C11.6054 13.5196 11.5 13.2652 11.5 13C11.5 12.7348 11.6054 12.4804 11.7929 12.2929C11.9804 12.1054 12.2348 12 12.5 12C12.7652 12 13.0196 12.1054 13.2071 12.2929C13.3946 12.4804 13.5 12.7348 13.5 13ZM8.5 17C8.5 17.2652 8.39464 17.5196 8.20711 17.7071C8.01957 17.8946 7.76522 18 7.5 18C7.23478 18 6.98043 17.8946 6.79289 17.7071C6.60536 17.5196 6.5 17.2652 6.5 17C6.5 16.7348 6.60536 16.4804 6.79289 16.2929C6.98043 16.1054 7.23478 16 7.5 16C7.76522 16 8.01957 16.1054 8.20711 16.2929C8.39464 16.4804 8.5 16.7348 8.5 17ZM8.5 13C8.5 13.2652 8.39464 13.5196 8.20711 13.7071C8.01957 13.8946 7.76522 14 7.5 14C7.23478 14 6.98043 13.8946 6.79289 13.7071C6.60536 13.5196 6.5 13.2652 6.5 13C6.5 12.7348 6.60536 12.4804 6.79289 12.2929C6.98043 12.1054 7.23478 12 7.5 12C7.76522 12 8.01957 12.1054 8.20711 12.2929C8.39464 12.4804 8.5 12.7348 8.5 13Z" fill="#A3A3A3" />
</svg>

const invoicesIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.4999 1.25C11.7939 1.25 11.3449 1.75 11.0429 2.197C10.7369 2.652 10.4179 3.307 10.0389 4.083L7.77587 8.72C7.55687 9.168 7.41587 9.455 7.29387 9.654C7.25548 9.72416 7.20771 9.78875 7.15187 9.846C7.12481 9.85904 7.09485 9.86489 7.06487 9.863C7.0085 9.82826 6.95617 9.78734 6.90887 9.741C6.74687 9.591 6.54487 9.362 6.22487 8.998L6.19587 8.965C5.62387 8.313 5.15587 7.78 4.76987 7.42C4.58189 7.23681 4.37275 7.07668 4.14687 6.943C3.90006 6.79612 3.61443 6.72776 3.32787 6.747C3.09766 6.76917 2.87416 6.83691 2.67038 6.94626C2.4666 7.05562 2.2866 7.20442 2.14087 7.384C1.78587 7.813 1.74587 8.413 1.75087 8.931C1.75487 9.491 1.82487 10.234 1.91087 11.158L2.14887 13.68C2.33387 15.646 2.47887 17.185 2.72887 18.381C2.98487 19.599 3.36887 20.564 4.10387 21.314C4.84887 22.077 5.76387 22.425 6.89587 22.591C7.98387 22.75 9.35887 22.75 11.0809 22.75H13.9189C15.6409 22.75 17.0159 22.75 18.1039 22.59C19.2359 22.425 20.1509 22.077 20.8959 21.314C21.6299 20.564 22.0149 19.599 22.2699 18.381C22.5209 17.185 22.6659 15.645 22.8509 13.68L23.0889 11.158C23.1759 10.234 23.2459 9.491 23.2489 8.931C23.2539 8.413 23.2139 7.813 22.8589 7.384C22.7132 7.20434 22.5332 7.05548 22.3294 6.94612C22.1256 6.83675 21.9021 6.76906 21.6719 6.747C21.3853 6.72776 21.0997 6.79612 20.8529 6.943C20.627 7.07668 20.4178 7.23681 20.2299 7.42C19.8439 7.78 19.3759 8.313 18.8039 8.965L18.7739 8.998C18.4539 9.362 18.2529 9.591 18.0909 9.741C18.0439 9.78725 17.9919 9.82817 17.9359 9.863C17.9056 9.86507 17.8752 9.85921 17.8479 9.846C17.792 9.78878 17.7442 9.72418 17.7059 9.654C17.5839 9.455 17.4429 9.168 17.2239 8.72L14.9609 4.083C14.5819 3.306 14.2629 2.652 13.9569 2.197C13.6549 1.749 13.2069 1.25 12.4999 1.25ZM11.3609 4.794C11.7729 3.95 12.0469 3.392 12.2869 3.035C12.3476 2.93953 12.4191 2.85129 12.4999 2.772C12.5399 2.809 12.6099 2.884 12.7129 3.035C12.9529 3.392 13.2269 3.95 13.6389 4.794L15.8919 9.41C16.0899 9.817 16.2629 10.17 16.4279 10.44C16.5979 10.715 16.8199 11.008 17.1679 11.183C17.4809 11.341 17.8339 11.399 18.1839 11.343C18.5769 11.281 18.8749 11.058 19.1089 10.842C19.3359 10.632 19.5889 10.344 19.8769 10.016L19.9019 9.988C20.5099 9.295 20.9289 8.819 21.2539 8.516C21.4139 8.366 21.5199 8.289 21.5849 8.253C21.6288 8.26955 21.6677 8.2971 21.6979 8.333L21.6989 8.34C21.7089 8.37 21.7529 8.512 21.7489 8.92C21.7459 9.407 21.6829 10.085 21.5919 11.056L21.3619 13.491C21.1719 15.515 21.0339 16.97 20.8019 18.073C20.5729 19.163 20.2719 19.807 19.8239 20.266C19.3859 20.714 18.8239 20.97 17.8869 21.106C16.9199 21.248 15.6549 21.25 13.8599 21.25H11.1399C9.34487 21.25 8.07987 21.248 7.11287 21.107C6.17587 20.97 5.61387 20.714 5.17587 20.266C4.72787 19.807 4.42587 19.163 4.19787 18.073C3.96587 16.97 3.82787 15.515 3.63787 13.491L3.40787 11.056C3.31787 10.085 3.25387 9.406 3.24987 8.919C3.24687 8.512 3.29187 8.369 3.29987 8.339L3.30287 8.334C3.33227 8.29764 3.37048 8.26942 3.41387 8.252C3.47887 8.289 3.58487 8.366 3.74587 8.516C4.07087 8.819 4.48987 9.295 5.09787 9.988L5.12287 10.016C5.41087 10.344 5.66387 10.633 5.89087 10.842C6.12487 11.058 6.42287 11.282 6.81587 11.344C7.16587 11.399 7.51887 11.341 7.83187 11.183C8.17987 11.008 8.40187 10.715 8.57187 10.44C8.73687 10.17 8.90987 9.817 9.10787 9.41L11.3609 4.794ZM12.5439 2.74L12.5339 2.744C12.5409 2.74 12.5439 2.739 12.5439 2.74ZM12.4649 2.744L12.4559 2.74C12.4559 2.74 12.4579 2.74 12.4649 2.744Z" fill="#A3A3A3" />
    <path d="M11.6463 12.023C12.0263 11.341 12.2163 11 12.5003 11C12.7843 11 12.9743 11.34 13.3543 12.023L13.4523 12.199C13.5603 12.393 13.6143 12.489 13.6983 12.553C13.7833 12.617 13.8883 12.641 14.0983 12.688L14.2883 12.732C15.0263 12.899 15.3953 12.982 15.4833 13.264C15.5713 13.547 15.3193 13.841 14.8163 14.429L14.6863 14.581C14.5433 14.748 14.4713 14.831 14.4393 14.935C14.4073 15.039 14.4183 15.15 14.4393 15.373L14.4593 15.576C14.5353 16.361 14.5733 16.754 14.3443 16.928C14.1143 17.102 13.7683 16.943 13.0773 16.625L12.8993 16.543C12.7023 16.453 12.6043 16.407 12.5003 16.407C12.3963 16.407 12.2983 16.453 12.1013 16.543L11.9233 16.625C11.2323 16.944 10.8863 17.102 10.6563 16.928C10.4263 16.754 10.4653 16.361 10.5413 15.576L10.5613 15.373C10.5823 15.15 10.5933 15.039 10.5613 14.935C10.5293 14.832 10.4573 14.748 10.3143 14.581L10.1843 14.429C9.68128 13.841 9.42928 13.547 9.51728 13.264C9.60528 12.982 9.97428 12.899 10.7123 12.732L10.9023 12.688C11.1123 12.641 11.2173 12.618 11.3023 12.553C11.3863 12.489 11.4403 12.393 11.5483 12.199L11.6463 12.023Z" stroke="#A3A3A3" />
</svg>

const notesIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8939 2.02089L16.9599 2.03889C18.0599 2.33389 18.9309 2.56689 19.6159 2.81489C20.3169 3.06789 20.8889 3.35689 21.3599 3.79789C22.0454 4.44041 22.5249 5.2718 22.7379 6.18689C22.8849 6.81489 22.8499 7.45489 22.7179 8.18789C22.5909 8.90589 22.3579 9.77689 22.0629 10.8759L21.5269 12.8749C21.2329 13.9739 20.9989 14.8449 20.7519 15.5299C20.4979 16.2309 20.2089 16.8029 19.7679 17.2739C19.1463 17.9376 18.3474 18.4089 17.4659 18.6319C17.2076 19.224 16.8313 19.7572 16.3599 20.1989C15.8889 20.6399 15.3169 20.9289 14.6159 21.1829C13.9309 21.4309 13.0599 21.6639 11.9609 21.9589L11.8939 21.9769C10.7939 22.2709 9.92389 22.5039 9.20589 22.6329C8.47289 22.7639 7.83289 22.7989 7.20389 22.6529C6.28892 22.4392 5.45788 21.9589 4.81589 21.2729C4.37589 20.8029 4.08589 20.2309 3.83189 19.5299C3.58489 18.8449 3.35189 17.9739 3.05689 16.8739L2.52089 14.8759C2.22689 13.7759 1.99289 12.9059 1.86489 12.1879C1.73389 11.4549 1.69889 10.8149 1.84489 10.1859C2.05858 9.27092 2.53883 8.43988 3.22489 7.79789C3.69489 7.35789 4.26689 7.06789 4.96789 6.81389C5.65289 6.56689 6.52389 6.33389 7.62289 6.03889L7.65689 6.02889L8.40789 5.82889C8.79989 4.42989 9.14389 3.44089 9.81589 2.72389C10.458 2.0382 11.289 1.5583 12.2039 1.34489C12.8329 1.19889 13.4719 1.23389 14.2059 1.36489C14.9229 1.49289 15.7939 1.72689 16.8939 2.02089ZM7.95489 7.50289C6.86189 7.79589 6.07889 8.00789 5.47689 8.22489C4.86689 8.44489 4.50989 8.64889 4.24989 8.89289C3.78054 9.3322 3.45202 9.90084 3.30589 10.5269C3.22589 10.8749 3.22689 11.2869 3.34189 11.9239C3.45689 12.5709 3.67389 13.3809 3.97889 14.5209L4.49689 16.4529C4.80189 17.5929 5.01989 18.4029 5.24289 19.0199C5.46289 19.6299 5.66689 19.9879 5.91089 20.2479C6.3502 20.7172 6.91884 21.0458 7.54489 21.1919C7.89189 21.2719 8.30489 21.2699 8.94189 21.1559C9.58889 21.0409 10.3989 20.8239 11.5389 20.5189C12.6789 20.2129 13.4889 19.9959 14.1069 19.7719C14.7159 19.5519 15.0739 19.3479 15.3339 19.1049C15.4719 18.9749 15.5969 18.8349 15.7099 18.6859C15.5244 18.6594 15.3396 18.6277 15.1559 18.5909C14.4839 18.4569 13.6759 18.2409 12.6809 17.9739L12.6229 17.9589C11.5239 17.6639 10.6529 17.4309 9.96789 17.1829C9.26689 16.9299 8.69489 16.6409 8.22389 16.1999C7.53803 15.5575 7.05812 14.7261 6.84489 13.8109C6.69889 13.1829 6.73389 12.5429 6.86489 11.8089C6.99289 11.0919 7.22689 10.2209 7.52089 9.12189L7.95489 7.50289ZM13.9419 2.84189C13.3039 2.72689 12.8919 2.72489 12.5449 2.80589C11.9188 2.95202 11.3502 3.28054 10.9109 3.74989C10.4749 4.21489 10.2059 4.93489 9.73989 6.64289C9.66389 6.92089 9.58389 7.21989 9.49689 7.54489L8.97889 9.47689C8.67389 10.6169 8.45689 11.4269 8.34189 12.0739C8.22689 12.7109 8.22489 13.1239 8.30589 13.4709C8.45202 14.0969 8.78054 14.6656 9.24989 15.1049C9.50989 15.3489 9.86789 15.5519 10.4769 15.7729C11.0949 15.9959 11.9049 16.2129 13.0449 16.5189C14.0699 16.7939 14.8299 16.9969 15.4479 17.1189C16.0629 17.2419 16.4809 17.2719 16.8229 17.2299C16.8979 17.2199 16.9689 17.2079 17.0389 17.1919C17.6649 17.0458 18.2336 16.7172 18.6729 16.2479C18.9169 15.9879 19.1209 15.6299 19.3409 15.0209C19.5639 14.4029 19.7809 13.5929 20.0869 12.4529L20.6049 10.5209C20.9099 9.38089 21.1269 8.57089 21.2419 7.92389C21.3559 7.28689 21.3589 6.87389 21.2779 6.52689C21.1318 5.90084 20.8032 5.3322 20.3339 4.89289C20.0739 4.64889 19.7159 4.44589 19.1069 4.22489C18.4879 4.00189 17.6789 3.78489 16.5389 3.47889C15.3989 3.17389 14.5889 2.95689 13.9419 2.84189ZM11.5519 9.80589C11.5774 9.71073 11.6214 9.62154 11.6814 9.54341C11.7414 9.46527 11.8162 9.39972 11.9016 9.3505C11.9869 9.30128 12.0811 9.26936 12.1788 9.25656C12.2765 9.24376 12.3757 9.25033 12.4709 9.27589L17.3009 10.5699C17.4877 10.6261 17.6453 10.7528 17.7402 10.9232C17.8351 11.0936 17.8599 11.2943 17.8092 11.4827C17.7586 11.6711 17.6366 11.8323 17.4691 11.9323C17.3016 12.0322 17.1017 12.0629 16.9119 12.0179L12.0819 10.7239C11.8899 10.6723 11.7263 10.5467 11.6269 10.3746C11.5276 10.2024 11.5006 9.9979 11.5519 9.80589ZM10.7749 12.7039C10.8004 12.6086 10.8445 12.5193 10.9045 12.4411C10.9646 12.3629 11.0395 12.2973 11.125 12.2481C11.2104 12.1988 11.3047 12.167 11.4025 12.1542C11.5003 12.1415 11.5997 12.1482 11.6949 12.1739L14.5919 12.9499C14.784 13.0013 14.9479 13.127 15.0474 13.2993C15.1469 13.4715 15.1738 13.6762 15.1224 13.8684C15.0709 14.0605 14.9453 14.2244 14.773 14.3239C14.6008 14.4234 14.396 14.4503 14.2039 14.3989L11.3059 13.6219C11.1139 13.5703 10.9503 13.4447 10.8509 13.2726C10.7516 13.1004 10.7246 12.8959 10.7759 12.7039H10.7749Z" fill="#A3A3A3"></path></svg>

const doocumentIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M5.5 4.076C4.525 4.172 3.869 4.389 3.379 4.879C2.5 5.757 2.5 7.172 2.5 10V14C2.5 16.828 2.5 18.243 3.379 19.121C3.869 19.611 4.525 19.828 5.5 19.924M19.5 4.076C20.475 4.172 21.131 4.389 21.621 4.879C22.5 5.757 22.5 7.172 22.5 10V14C22.5 16.828 22.5 18.243 21.621 19.121C21.131 19.611 20.475 19.828 19.5 19.924M5.5 8C5.5 5.172 5.5 3.757 6.379 2.879C7.257 2 8.672 2 11.5 2H13.5C16.328 2 17.743 2 18.621 2.879C19.5 3.757 19.5 5.172 19.5 8V16C19.5 18.828 19.5 20.243 18.621 21.121C17.743 22 16.328 22 13.5 22H11.5C8.672 22 7.257 22 6.379 21.121C5.5 20.243 5.5 18.828 5.5 16V8Z" stroke="#A3A3A3" strokeWidth="1.5" />
    <path d="M9.5 13H15.5M9.5 9H15.5M9.5 17H12.5" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" />
</svg>

const profileDefautUserIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const notificationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56299 19H4.33771C3.59891 19 3 18.4011 3 17.6623V16.7893C3 16.2839 3.20077 15.7992 3.55814 15.4419C4.48135 14.5187 5 13.2665 5 11.9609V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11.9609C19 13.2665 19.5187 14.5187 20.4419 15.4419C20.7992 15.7992 21 16.2839 21 16.7893V17.6623C21 18.4011 20.4011 19 19.6623 19H15.437C15.437 19.3565 15.4254 20.0363 15.0669 20.6873C14.4734 21.7646 13.3236 22.5 12 22.5C10.6763 22.5 9.52655 21.7646 8.93311 20.6873C8.57454 20.0363 8.56299 19.3565 8.56299 19ZM19.3812 16.5025C19.4573 16.5786 19.5 16.6818 19.5 16.7893V17.5H4.5V16.7893C4.5 16.6818 4.54273 16.5786 4.6188 16.5025C5.82331 15.298 6.5 13.6643 6.5 11.9609V9C6.5 5.96243 8.96244 3.5 12 3.5C15.0376 3.5 17.5 5.96243 17.5 9V11.9609C17.5 13.6643 18.1767 15.298 19.3812 16.5025ZM13.937 19H10.063C10.063 19.332 10.0868 19.6728 10.247 19.9636C10.3587 20.1665 10.5047 20.3479 10.6771 20.5C11.0296 20.8112 11.4928 21 12 21C12.5072 21 12.9703 20.8112 13.3229 20.5C13.4953 20.3479 13.6412 20.1665 13.753 19.9636C13.9132 19.6728 13.937 19.332 13.937 19Z" fill="black" />
    <circle cx="18" cy="5" r="3.5" fill="#D34645" stroke="white" />
</svg>

const menuIcon = ''

const Icons = {
    closeTestIcon,
    interviewRoundNonActiveIcon,
    interviewRoundActiveIcon,
    testSucccess,
    timerIcon,
    dashboardIcon,
    employeeIcon,
    attendanceIcon,
    payrollIcon,
    interviewIcon,
    circularIcon,
    invoicesIcon,
    notesIcon,
    doocumentIcon,
    profileDefautUserIcon,
    notificationIcon,
    menuIcon
}

export default Icons