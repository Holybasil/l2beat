import { cn } from '~/utils/cn'

export interface SpiderWebProps {
  className?: string
  animated?: boolean
}

export function SpiderWeb(props: SpiderWebProps) {
  return (
    <svg
      width="140"
      height="126"
      viewBox="0 0 140 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none h-32 w-36 rounded-tl-xl fill-black opacity-20 dark:fill-white dark:opacity-25',
        props.className,
      )}
    >
      <path d="M138.91 1.09497C115.966 0.183968 92.931 0.648968 69.972 0.622968C63.18 0.614968 56.371 0.524969 49.556 0.429969C49.428 0.235969 49.171 0.149968 48.91 0.267968C48.814 0.310968 48.722 0.364969 48.631 0.416969C32.753 0.192969 16.845 -0.0460313 1.034 0.652969C0.137004 0.692969 0.0400037 1.86097 0.739004 2.15297C0.257004 6.97297 0.538004 11.937 0.517004 16.767C0.495004 21.936 0.481004 27.104 0.478004 32.273C0.472004 42.611 0.466002 52.948 0.460002 63.286C0.448002 83.976 0.360003 104.637 1.102 125.312C1.115 125.682 1.664 125.683 1.677 125.312C2.031 115.438 2.193 105.566 2.267 95.693C5.82 93.813 9.072 92.053 13.267 91.901C17.471 91.749 20.518 93.459 24.328 94.771C24.433 94.807 24.529 94.8 24.619 94.777C26.935 103.239 29.427 111.644 32.268 119.904C32.45 120.433 33.224 120.223 33.106 119.673C31.271 111.083 29.126 102.548 26.883 94.034C31.184 90.318 35.76 87.267 41.299 85.615C44.084 84.785 46.964 84.285 49.871 84.19C52.166 84.115 54.552 84.637 56.817 84.36C62.432 92.74 67.853 101.356 74.152 109.232C74.516 109.687 75.207 109.106 74.938 108.625C69.887 99.597 63.768 91.114 57.959 82.546C59.844 78.173 61.228 73.907 64.364 70.124C66.042 68.101 67.979 66.263 70.122 64.74C72.065 63.358 74.348 62.539 76.254 61.157C76.308 61.118 76.343 61.072 76.383 61.029C86.034 68.407 95.813 75.618 105.946 82.216C106.363 82.487 106.875 81.846 106.486 81.517C97.245 73.713 87.589 66.37 77.872 59.109C79.094 52.744 81.133 46.763 84.845 41.354C86.728 38.611 88.959 36.097 91.468 33.911C94.013 31.695 96.982 30.305 99.69 28.428C109.145 31.357 118.539 34.642 128.118 37.086C128.773 37.253 128.982 36.344 128.389 36.101C119.478 32.441 110.115 29.705 100.866 26.927C100.809 26.738 100.674 26.585 100.487 26.504C100.301 22.713 99.481 19.062 99.874 15.198C100.345 10.573 101.928 6.54697 103.746 2.34897C115.475 2.35197 127.204 2.24697 138.909 1.78297C139.352 1.76397 139.352 1.11197 138.91 1.09497ZM69.972 2.25397C74.142 2.24897 78.316 2.26597 82.49 2.28197C79.229 6.84497 77.271 14.481 78.256 20.236C73.94 19.005 69.619 17.793 65.289 16.61C65.282 16.608 65.274 16.606 65.267 16.604C64.947 14.687 64.539 12.808 64.729 10.796C65.044 7.44997 66.709 5.13597 68.024 2.26397C68.673 2.26197 69.323 2.25397 69.972 2.25397ZM63.406 48.313C60.634 46.234 57.867 44.15 55.121 42.046C53.452 40.768 51.788 39.482 50.12 38.201C51.017 33.941 52.493 29.927 55.22 26.45C58.053 22.837 61.524 21.211 65.206 18.998C65.35 19.039 65.519 18.951 65.54 18.796C65.625 18.744 65.71 18.693 65.796 18.64C70.129 19.826 74.453 21.04 78.772 22.272C78.794 22.337 78.816 22.401 78.837 22.467C74.104 24.037 70.112 29.812 67.815 33.854C65.594 37.761 63.028 43.498 63.406 48.313ZM6.715 23.756C7.28 26.101 7.85 28.442 8.404 30.772C8.587 31.543 8.776 32.31 8.96 33.08C8.045 32.346 6.31 32.238 5.347 32.306C4.229 32.386 3.11 32.715 2.189 33.334C2.189 32.98 2.191 32.626 2.19 32.272C2.189 29.359 2.199 26.446 2.207 23.533C2.555 23.339 2.908 23.142 3.298 23.092C4.319 22.961 5.259 23.309 6.094 23.877C6.303 24.021 6.568 23.935 6.715 23.756ZM30.878 31.813C29.666 32.888 27.721 35.331 27.526 37.376C25.264 34.019 23.008 30.658 20.74 27.305C20.35 26.729 19.963 26.149 19.575 25.57C20.09 24.477 20.558 23.39 21.372 22.426C22.075 21.594 22.878 20.937 23.774 20.409C25.212 21.499 26.643 22.59 28.053 23.688C30.521 25.609 33.001 27.514 35.474 29.428C33.744 29.775 31.984 30.832 30.878 31.813ZM37.252 30.802C40.562 33.362 43.865 35.929 47.181 38.481C42.001 40.007 37.933 46.32 37.133 51.634C34.324 47.46 31.51 43.29 28.699 39.116C28.702 39.093 28.704 39.071 28.703 39.048C29.338 38.395 29.369 37.558 29.705 36.701C30.204 35.429 30.961 34.261 31.962 33.327C32.972 32.385 34.174 31.721 35.474 31.269C36.058 31.065 36.664 30.958 37.252 30.802ZM24.713 18.502C22.877 17.033 21.041 15.544 19.197 14.061C19.224 12.816 19.017 11.638 19.476 10.368C19.896 9.20297 20.634 8.28797 21.501 7.47197C24.267 8.10797 27.033 8.73697 29.791 9.38497C28.66 10.29 27.685 11.54 27.02 12.528C25.91 14.177 24.917 16.361 24.885 18.445C24.828 18.465 24.771 18.48 24.713 18.502ZM22.671 19.571C20.92 20.737 19.366 22.467 18.785 24.387C17.185 21.985 15.588 19.562 13.974 17.148C14.291 16.755 14.598 16.34 14.999 16.048C15.613 15.601 16.271 15.397 16.957 15.231C18.86 16.687 20.77 18.132 22.671 19.571ZM14.169 14.818C13.816 15.062 13.408 15.395 13.061 15.78C11.151 12.944 9.206 10.132 7.179 7.39497C9.872 9.70797 12.67 11.931 15.499 14.114C15.02 14.296 14.566 14.543 14.169 14.818ZM17.71 26.276C14.963 26.838 12.153 28.478 10.491 30.8C9.635 27.359 8.814 23.888 7.967 20.42C8.15 20.158 8.395 19.912 8.733 19.685C9.755 18.997 11.082 18.694 12.251 18.285C14.062 20.963 15.899 23.621 17.71 26.276ZM2.186 34.849C3.292 34.17 4.392 33.651 5.765 33.67C6.979 33.687 8.074 34.572 9.219 34.381C9.238 34.378 9.251 34.365 9.268 34.359C10.27 38.553 11.271 42.745 12.295 46.93C10.097 46.171 7.389 46.139 5.326 46.784C4.215 47.132 2.987 47.773 2.143 48.678C2.165 44.068 2.182 39.458 2.186 34.849ZM10.895 32.426C12.897 29.897 15.171 28.164 18.559 27.53C18.995 28.172 19.432 28.814 19.863 29.456C21.78 32.311 23.704 35.161 25.624 38.015C23.213 37.85 20.689 38.651 18.695 39.947C16.979 41.062 14.963 42.984 14.07 45.113C13.012 40.883 11.956 36.654 10.895 32.426ZM19.266 41.737C21.587 40.119 24.086 39.847 26.733 39.659C29.873 44.323 33.011 48.988 36.151 53.651C29.927 51.758 21.531 53.938 17.71 59.528C16.696 55.555 15.697 51.578 14.7 47.601C16.245 45.575 17.01 43.31 19.266 41.737ZM19.673 75.851C13.966 73.471 5.604 75.462 2.321 80.766C2.325 75.527 2.322 70.287 2.318 65.046C4.276 63.291 5.878 61.521 8.595 60.887C11.393 60.234 13.511 61.314 16.099 61.718C17.295 66.418 18.478 71.132 19.673 75.851ZM18.047 60.862C20.079 59.022 22.013 57.26 24.628 56.143C28.291 54.579 31.862 54.591 35.737 55.187C36.282 55.271 36.647 54.89 36.709 54.48C37.159 55.149 37.609 55.817 38.06 56.486C40.295 59.807 42.531 63.128 44.766 66.449C40.481 64.975 35.472 65.376 31.392 67.129C27.948 68.608 23.557 71.851 21.963 75.69C20.632 70.749 19.313 65.809 18.047 60.862ZM38.947 54.33C38.667 53.914 38.386 53.497 38.106 53.081C38.832 50.186 39.866 47.505 41.777 45.12C43.801 42.595 46.351 41.471 48.84 39.759C50.225 40.824 51.607 41.893 52.993 42.956C55.441 44.833 57.885 46.725 60.329 48.62C57.014 49.374 53.323 52.771 51.628 54.8C49.149 57.768 47.124 62.16 47.007 66.298C44.321 62.308 41.634 58.319 38.947 54.33ZM47.316 7.10397C47.587 5.40597 48.513 3.96897 49.132 2.45697C54.789 2.37897 60.443 2.30397 66.087 2.27397C63.143 5.54897 62.015 11.777 63.504 16.128C58.189 14.684 52.865 13.276 47.53 11.903C47.276 10.322 47.048 8.78097 47.316 7.10397ZM47.8 13.874C52.876 15.181 57.946 16.514 63.006 17.885C59.37 19.262 56.041 22.386 53.828 25.226C51.098 28.731 49.253 32.938 49.041 37.372C45.475 34.631 41.912 31.885 38.352 29.134C38.735 26.214 39.411 23.507 40.991 20.914C42.641 18.206 45.238 16.834 47.12 14.475C47.442 14.462 47.742 14.189 47.8 13.874ZM32.233 4.69997C32.272 4.06297 32.431 3.34597 32.667 2.65197C37.374 2.61597 42.083 2.55397 46.789 2.48897C46.071 3.83797 45.671 5.47597 45.472 6.72597C45.24 8.18297 45.18 9.83697 45.476 11.38C41.43 10.347 37.38 9.33097 33.322 8.34597C33.284 8.33697 33.246 8.32697 33.208 8.31797C32.631 7.14597 32.148 6.09197 32.233 4.69997ZM34.172 10.434C38.172 11.42 42.167 12.431 46.159 13.454C46.206 13.548 46.262 13.637 46.313 13.728C43.499 14.509 41.05 17.774 39.64 20.125C38.207 22.515 37.222 25.296 37.024 28.105C34.142 25.876 31.26 23.645 28.384 21.407C27.555 20.762 26.729 20.108 25.902 19.45C25.925 19.387 25.946 19.324 25.968 19.26C26.022 19.175 26.052 19.08 26.064 18.983C26.712 17.016 27.122 15.108 28.37 13.317C29.358 11.9 30.838 11.04 32.029 9.91697C32.744 10.089 33.459 10.258 34.172 10.434ZM22.963 5.16097C22.943 4.19197 23.282 3.45097 23.671 2.67897C26.161 2.68297 28.651 2.67897 31.142 2.66297C30.922 3.19697 30.788 3.79397 30.737 4.47997C30.656 5.56897 30.811 6.80797 31.295 7.85197C28.522 7.17297 25.741 6.48497 22.954 5.81697C22.976 5.55997 22.966 5.30097 22.963 5.16097ZM22.355 2.67297C22.189 2.99997 22.061 3.34697 21.966 3.68697C21.851 4.09797 21.682 4.88197 21.741 5.52797C16.782 4.35297 11.799 3.26097 6.786 2.43197C11.968 2.59097 17.16 2.65597 22.355 2.67297ZM20.1 7.14697C19.24 7.86997 18.592 8.85797 18.183 9.91797C17.86 10.756 17.618 11.823 17.664 12.829C13.507 9.50297 9.297 6.23497 4.926 3.29697C9.93 4.74597 15.01 5.96897 20.1 7.14697ZM11.69 17.448C10.232 17.675 8.725 17.924 7.585 18.873C6.408 14.11 5.164 9.36197 3.683 4.71197C6.147 9.05097 8.882 13.275 11.69 17.448ZM2.119 2.81497C2.247 2.93897 2.381 3.05997 2.513 3.18197C3.369 9.25797 4.704 15.307 6.131 21.314C6.047 21.738 6.062 22.158 6.186 22.54C5.431 21.852 4.405 21.549 3.343 21.612C3.037 21.63 2.624 21.7 2.208 21.827C2.21 20.375 2.215 18.924 2.209 17.473C2.188 12.62 2.487 7.62697 2.061 2.77197C2.074 2.78597 2.105 2.80097 2.119 2.81497ZM2 63.618V63.287C2 59.292 2.069 55.297 2.086 51.302C3.686 49.868 4.748 48.568 7.079 48.206C8.959 47.913 10.807 48.439 12.657 48.448C13.595 52.266 14.5 56.082 15.472 59.896C11.519 57.335 5 59.603 2 63.618ZM2.279 94.386C2.303 90.832 2.305 87.277 2.312 83.722C4.725 81.419 6.56 79.023 9.855 77.763C13.396 76.409 16.666 76.89 20.139 77.684C21.455 82.864 22.791 88.044 24.19 93.205C18.478 88.55 7.665 89.417 2.279 94.386ZM39.79 84.116C34.782 85.822 30.027 88.634 26.508 92.615C25.22 87.751 23.903 82.894 22.592 78.038C23.828 76.619 24.631 74.883 25.915 73.463C27.478 71.734 29.359 70.303 31.449 69.27C36.404 66.819 41.319 67.389 46.337 68.787C49.445 73.404 52.553 78.021 55.661 82.639C50.911 81.07 44.013 82.678 39.79 84.116ZM62.727 69.204C60.138 72.484 57.564 76.866 57.054 81.213C54.291 77.11 51.528 73.008 48.764 68.906C49.517 64.019 49.958 59.885 53.455 55.873C54.921 54.19 56.69 52.808 58.635 51.716C59.824 51.049 61.134 50.761 62.206 50.076C66.475 53.389 70.747 56.71 75.043 60.005C70.304 61.048 65.573 65.601 62.727 69.204ZM83.787 39.554C79.887 44.981 77.165 51.567 76.775 58.29C72.815 55.335 68.849 52.389 64.897 49.432C65.582 47.238 65.679 44.841 66.308 42.612C67.121 39.735 68.324 36.984 69.853 34.417C71.289 32.006 73.012 29.778 74.983 27.781C76.551 26.193 78.472 24.924 79.839 23.164C79.932 23.101 80.008 23.011 80.054 22.889C80.064 22.875 80.076 22.862 80.086 22.848C80.129 22.787 80.145 22.724 80.149 22.662C85.624 24.23 91.089 25.831 96.545 27.464C96.659 27.498 96.772 27.534 96.885 27.568C91.657 30.028 86.858 35.281 83.787 39.554ZM99.01 26.365C98.344 26.164 97.678 25.964 97.014 25.761C91.426 24.056 85.823 22.403 80.207 20.79C80.296 17.631 79.994 14.539 80.601 11.314C81.196 8.15597 82.443 5.28897 83.458 2.28397C89.565 2.30797 95.675 2.33597 101.786 2.34397C97.782 8.78297 95.87 19.361 99.01 26.365Z" />
    </svg>
  )
}
