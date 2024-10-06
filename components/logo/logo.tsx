interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  dark?: boolean;
}

export function Logo({ dark }: LogoProps) {
  return (
    <svg
      viewBox="0 0 168 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dark ? "text-black" : "text-white"}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.247.141c.393.258.5.78.237 1.167L12.71 8.341a.867.867 0 0 1-1.188.233.832.832 0 0 1-.238-1.166L16.058.375A.867.867 0 0 1 17.247.14Zm3.358 3.279a.831.831 0 0 1-.093 1.186l-5.57 4.689a.868.868 0 0 1-1.208-.092.831.831 0 0 1 .092-1.186l5.57-4.689a.868.868 0 0 1 1.209.092ZM0 11a.85.85 0 0 1 .857-.842h20.689a.85.85 0 0 1 .857.842 10.9 10.9 0 0 1-3.281 7.778A11.306 11.306 0 0 1 11.202 22a11.38 11.38 0 0 1-4.287-.837 11.215 11.215 0 0 1-3.634-2.385A10.9 10.9 0 0 1 0 11Zm1.753.841a9.247 9.247 0 0 0 2.74 5.747 9.498 9.498 0 0 0 3.078 2.02 9.637 9.637 0 0 0 3.63.709c2.516 0 4.93-.982 6.709-2.73a9.246 9.246 0 0 0 2.74-5.745H1.753Z"
        fill="currentColor"
      />
      <path
        d="M160.18 24c-4.525 0-7.335-2.12-7.644-5.756h3.085c.411 2.255 1.954 3.366 4.627 3.366 2.331 0 3.805-1.043 3.805-2.693 0-1.245-.96-2.12-2.742-2.457l-3.359-.64c-2.502-.47-4.902-1.615-4.902-4.746 0-2.794 2.674-4.914 6.719-4.914 3.907 0 6.752 1.615 7.095 5.284h-3.051c-.343-1.884-1.748-2.894-4.079-2.894-2.193 0-3.667 1.01-3.667 2.457 0 1.38 1.199 1.986 2.605 2.255l3.564.673c2.468.472 4.936 1.784 4.936 4.814 0 3.164-2.879 5.251-6.992 5.251ZM143.926 24c-5.073 0-8.261-3.804-8.261-8.92 0-5.083 3.188-8.92 8.261-8.92 4.285 0 8.055 2.39 7.644 9.694h-12.786c.206 3.097 1.68 5.689 5.142 5.689 2.297 0 3.805-1.145 4.422-3.299h3.016c-.651 3.366-3.29 5.756-7.438 5.756Zm-5.073-10.401h9.769c-.206-3.4-1.817-5.016-4.696-5.016-3.153 0-4.696 2.222-5.073 5.016ZM130.603 23.563V6.598h3.016v16.965h-3.016Zm-.172-19.86V0h3.394v3.703h-3.394ZM112.826 23.563V0h3.017v9.156c1.097-1.852 3.119-2.996 5.656-2.996 3.53 0 6.135 2.289 6.135 6.833v10.57h-3.016V13.16c0-2.962-1.68-4.51-4.045-4.51-2.571 0-4.73 2.12-4.73 5.15v9.761h-3.017ZM103.286 24c-5.039 0-8.295-3.837-8.295-8.92 0-5.05 3.256-8.92 8.329-8.92 3.976 0 6.856 2.356 7.404 6.227h-3.051c-.48-2.356-2.159-3.77-4.387-3.77-3.6 0-5.176 3.063-5.176 6.43 0 3.399 1.577 6.496 5.176 6.496 2.262 0 3.77-1.145 4.387-3.366h3.017c-.652 3.467-3.291 5.823-7.404 5.823ZM77.94 23.562V6.597h3.017v2.559c1.131-1.885 3.325-2.996 5.827-2.996 3.737 0 6.376 2.322 6.376 6.833v10.57h-3.016V13.16c0-2.962-1.714-4.51-4.25-4.51-2.709 0-4.937 2.12-4.937 5.116v9.795h-3.016ZM66.264 24c-3.6 0-6.136-2.356-6.136-6.766V6.597h3.017v10.435c0 2.962 1.714 4.477 4.181 4.477 2.468 0 4.662-2.087 4.662-5.116V6.597h3.016v16.965h-3.016v-2.625C70.857 22.957 68.698 24 66.264 24ZM32.693 23.563V0h4.765l7.335 20.23L52.093 0h4.731v23.563h-2.982V3.669l-7.404 19.893h-3.325L35.675 3.67v19.893h-2.982Z"
        fill="currentColor"
      />
    </svg>
  );
}
