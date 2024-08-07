import React from 'react'

export const DropShadow = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17.7576C15.961 17.7576 19.1713 14.5018 19.1713 10.4848C19.1713 6.46788 15.961 3.21212 12 3.21212C8.03904 3.21212 4.82869 6.46788 4.82869 10.4848C4.82869 14.5018 8.03904 17.7576 12 17.7576ZM12 18.9697C16.6207 18.9697 20.3665 15.1709 20.3665 10.4848C20.3665 5.79879 16.6207 2 12 2C7.37928 2 3.63347 5.79879 3.63347 10.4848C3.63347 15.1709 7.37928 18.9697 12 18.9697ZM3.94661 16.7673C5.80518 19.2121 8.72032 20.7879 12 20.7879C15.2785 20.7879 18.1948 19.2121 20.0534 16.7673L21 17.5067C18.9239 20.2388 15.6645 22 12 22C8.33546 22 5.0761 20.2388 3 17.5067L3.94661 16.7673Z"
    />
  </svg>
)

export const InnerShadow = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.1675 16.8325 3.25 12 3.25C7.1675 3.25 3.25 7.1675 3.25 12C3.25 16.8325 7.1675 20.75 12 20.75ZM12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22ZM7.54125 8.57C8.57 7.235 10.185 6.375 12 6.375C13.815 6.375 15.43 7.235 16.4588 8.57L17.45 7.8075C16.1925 6.17625 14.2188 5.125 12 5.125C9.78125 5.125 7.8075 6.17625 6.55 7.8075L7.54125 8.57Z"
    />
  </svg>
)

export const LayerBlur = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.54741 2.91656L5.23135 5.23135L6.12642 6.12642L10.2073 2.04425C9.26928 2.21239 8.37674 2.50948 7.54741 2.91656ZM13.5209 2L10.2895 5.23135L11.1833 6.12642L14.976 2.33123C14.5057 2.18584 14.019 2.07459 13.5221 2H13.5209ZM17.2339 3.34387L15.3451 5.23135L16.2402 6.12642L18.2882 4.07838C17.9532 3.8129 17.6005 3.56637 17.2339 3.34513V3.34387ZM19.9216 5.71176L16.6094 9.02402L17.5044 9.91909L20.6561 6.76612C20.4336 6.39949 20.1884 6.04678 19.9229 5.71176H19.9216ZM21.6688 9.02402L17.8736 12.8167L18.7686 13.7118L22 10.4791C21.9241 9.98104 21.8129 9.49431 21.6688 9.02276V9.02402ZM21.9558 13.7927L19.1378 16.6106L20.0329 17.5044L21.0822 16.4526C21.4905 15.6233 21.7876 14.7307 21.9545 13.7927H21.9558ZM16.4526 21.0834L18.7686 18.7686L17.8736 17.8748L13.7927 21.9558C14.7307 21.7876 15.6233 21.4905 16.4526 21.0834ZM10.4791 22L13.7105 18.7686L12.8167 17.8748L9.02402 21.6675C9.49431 21.8142 9.98104 21.9254 10.4779 22H10.4791ZM6.76612 20.6561L8.65487 18.7686L7.7598 17.8748L5.71176 19.9229C6.04678 20.1884 6.39949 20.4336 6.76612 20.6561ZM4.07838 18.2882L6.75853 15.6081L5.86346 14.7143L3.34387 17.2339C3.56637 17.6005 3.81163 17.9532 4.07712 18.2882H4.07838ZM2.33123 14.976L6.12642 11.1833L5.23135 10.2895L2 13.5209C2.07585 14.019 2.18711 14.5057 2.33123 14.9772V14.976ZM2.04425 10.2073L4.8622 7.39064L3.96713 6.49557L2.91783 7.54741C2.50948 8.37674 2.21239 9.26928 2.04551 10.2073H2.04425ZM14.3439 8.02276L13.4501 7.12769L10.9216 9.65613L11.8154 10.5512L14.3439 8.02276ZM9.6574 10.9216L7.12895 13.4501L8.02276 14.3439L10.5512 11.8154L9.6574 10.9216ZM14.0822 16.6106L14.976 17.5044L17.5044 14.976L16.6094 14.0822L14.0809 16.6106H14.0822ZM12.818 12.818L15.3464 10.2895L16.2402 11.1833L13.7118 13.7118L12.818 12.818ZM11.5537 14.0822L9.02528 16.6106L9.91909 17.5044L12.4475 14.976L11.5537 14.0822ZM9.02528 6.49684L6.49684 9.02528L7.39064 9.91909L9.91909 7.39064L9.02402 6.49557L9.02528 6.49684Z" />
  </svg>
)

export const BackgroundBlur = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.1675 16.8325 3.25 12 3.25C7.1675 3.25 3.25 7.1675 3.25 12C3.25 16.8325 7.1675 20.75 12 20.75ZM12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22Z"
    />
    <path d="M18.8073 6.10145C18.5267 5.77715 18.223 5.47344 17.8988 5.19161L15.4049 7.68564L16.3147 8.59548L18.8086 6.10145H18.8073ZM14.5762 3.36677C15.0305 3.50189 15.4693 3.67177 15.8888 3.87252L14.3858 5.37821L13.476 4.46708L14.5762 3.36677ZM9.43151 3.3642C10.1277 3.157 10.8599 3.03217 11.6152 3L7.95167 6.66512L7.04061 5.75399L9.43151 3.3642ZM3 11.6146C3.03217 10.8592 3.15699 10.1269 3.36417 9.43069L5.75379 7.03961L6.66486 7.95074L3 11.6146ZM3.87375 15.8897C3.67172 15.4689 3.50057 15.03 3.36674 14.577L4.46697 13.4742L5.37804 14.3853L3.87246 15.8897H3.87375ZM6.10123 18.8084C5.77695 18.5266 5.47326 18.2228 5.19145 17.8985L6.3972 16.6914L7.30826 17.6026L6.10123 18.8084ZM9.42379 20.6332C8.96955 20.4981 8.53074 20.3282 8.11124 20.1275L11.5445 16.6914L12.4542 17.6026L9.42379 20.6332ZM14.5685 20.6358C13.8723 20.843 13.1401 20.9678 12.3848 21L16.0483 17.3349L16.9581 18.246L14.5685 20.6358ZM21 12.3841C20.9678 13.1396 20.843 13.8718 20.6371 14.568L18.2462 16.9591L17.3364 16.0493L21 12.3841ZM20.1275 8.10903C20.3296 8.52985 20.4994 8.96869 20.6333 9.42168L17.6028 12.4549L16.693 11.5451L20.1275 8.10903ZM12.1879 5.75399L13.0977 6.66383L10.524 9.23765L9.61424 8.32652L12.1879 5.7527V5.75399ZM8.32742 9.61471L9.23849 10.5246L6.66486 13.0984L5.75379 12.1885L8.32742 9.61471ZM13.7411 16.3157L12.8313 15.4058L15.4049 12.832L16.3147 13.7418L13.7411 16.3157ZM14.1181 8.96997L11.5445 11.5438L12.4542 12.4549L15.0279 9.8811L14.1181 8.96997ZM7.68401 15.4045L10.2576 12.8307L11.1674 13.7418L8.59379 16.3157L7.68401 15.4058V15.4045Z" />
  </svg>
)

export const MixEffect = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.6667 2H11.3333V6H12.6667V2ZM5.4 4.45733L4.45733 5.4L7.28667 8.22933L8.22933 7.28533L5.4 4.45867V4.45733ZM19.5427 5.4L18.6 4.45733L15.772 7.28533L16.7147 8.22933L19.5427 5.4ZM2 11.3333V12.6667H6V11.3333H2ZM18 11.3333V12.6667H22V11.3333H18ZM8.22933 16.7147L7.28667 15.7707L4.45733 18.6L5.4 19.5427L8.22933 16.7147ZM16.7133 15.7707L15.7707 16.7147L18.6 19.5413L19.5427 18.6L16.7133 15.7707ZM12.6667 18H11.3333V22H12.6667V18Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12C9 10.344 10.344 9 12 9C13.656 9 15 10.344 15 12ZM13.8 12C13.8 12.9936 12.9936 13.8 12 13.8C11.0052 13.8 10.2 12.9936 10.2 12C10.2 11.0052 11.0052 10.2 12 10.2C12.9936 10.2 13.8 11.0052 13.8 12Z"
    />
  </svg>
)

export const FailedEffect = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.33333 12C1.33333 17.891 6.10896 22.6667 12 22.6667C17.891 22.6667 22.6667 17.891 22.6667 12C22.6667 6.10896 17.891 1.33333 12 1.33333C6.10896 1.33333 1.33333 6.10896 1.33333 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
    />
    <path d="M12.6667 2H11.3333V6H12.6667V2ZM5.4 4.45733L4.45733 5.4L7.28667 8.22933L8.22933 7.28533L5.4 4.45867V4.45733ZM19.5427 5.4L18.6 4.45733L15.772 7.28533L16.7147 8.22933L19.5427 5.4ZM2 11.3333V12.6667H6V11.3333H2ZM18 11.3333V12.6667H22V11.3333H18ZM8.22933 16.7147L7.28667 15.7707L4.45733 18.6L5.4 19.5427L8.22933 16.7147ZM16.7133 15.7707L15.7707 16.7147L18.6 19.5413L19.5427 18.6L16.7133 15.7707ZM12.6667 18H11.3333V22H12.6667V18Z" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.3307 11.9973C15.3307 13.8373 13.8373 15.3307 11.9973 15.3307C10.1573 15.3307 8.664 13.8373 8.664 11.9973C8.664 10.1573 10.1573 8.664 11.9973 8.664C13.8373 8.664 15.3307 10.1573 15.3307 11.9973ZM13.9973 11.9973C13.9973 13.1013 13.1013 13.9973 11.9973 13.9973C10.892 13.9973 9.99733 13.1013 9.99733 11.9973C9.99733 10.892 10.892 9.99733 11.9973 9.99733C13.1013 9.99733 13.9973 10.892 13.9973 11.9973Z"
    />
  </svg>
)

export const Fill = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7021 2.29289C12.5145 2.10525 12.2599 1.99988 11.9946 2C11.7292 2.00012 11.4748 2.10571 11.2873 2.29352L5.63753 7.95326C4.37859 9.21161 3.52106 10.815 3.17337 12.5607C2.82562 14.3067 3.00351 16.1166 3.68452 17.7615C4.36554 19.4064 5.51909 20.8123 6.99926 21.8015C8.47943 22.7907 10.2197 23.3187 12 23.3187C13.7803 23.3187 15.5206 22.7907 17.0007 21.8015C18.4809 20.8123 19.6345 19.4064 20.3155 17.7615C20.9965 16.1166 21.1744 14.3067 20.8266 12.5607C20.4789 10.8148 19.621 9.21106 18.3619 7.95266L12.7021 2.29289ZM7.05188 9.36734C6.07245 10.3461 5.40531 11.5934 5.13484 12.9514C5.06568 13.2987 5.02325 13.6492 5.00726 14C5.00726 14 9.00001 13 12 14C15 15 18.9928 14 18.9928 14C18.9768 13.6492 18.9343 13.2987 18.8652 12.9514C18.5947 11.5934 17.9276 10.3461 16.9481 9.36734L11.9956 4.41484L7.05188 9.36734Z"
    />
  </svg>
)

export const Position = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4.06189C7.38128 4.51314 4.51314 7.38128 4.06189 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H4.06189C4.51314 16.6187 7.38128 19.4869 11 19.9381V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V19.9381C16.6187 19.4869 19.4869 16.6187 19.9381 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189V2Z"
    />
  </svg>
)

export const Opacity = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10C22 13.2444 20.0687 16.0377 17.293 17.293C16.0377 20.0687 13.2444 22 10 22C5.58172 22 2 18.4183 2 14C2 10.7556 3.93132 7.96228 6.70701 6.70701C7.96228 3.93132 10.7556 2 14 2C18.4183 2 22 5.58172 22 10ZM6.01447 9.51488C6.00487 9.67536 6 9.83711 6 10C6 14.4183 9.58172 18 14 18C14.1629 18 14.3246 17.9951 14.4851 17.9855C13.3861 19.2214 11.784 20 10 20C6.68629 20 4 17.3137 4 14C4 12.216 4.77857 10.6139 6.01447 9.51488Z"
    />
  </svg>
)

export const Degree = ({size = 24, className, color = 'currentColor'}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2V21V22H3H22V20H14C14 18.6868 13.7413 17.3864 13.2388 16.1732C12.7363 14.9599 11.9996 13.8575 11.0711 12.9289C10.1425 12.0003 9.04008 11.2638 7.82683 10.7612C6.61359 10.2587 5.31322 10 4 10V2H2Z"
    />
  </svg>
)
