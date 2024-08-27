import React from 'react'
import Drawing from '../svgs/drawings'
const Footer = () => {
  return (
    <div>
        <div className='flex gap-40 px-8 pb-4 pt-6'>

        <div className='flex items-center mb-4'>
            <Drawing />
        </div>
        <div className='flex items-center'>
        <div className='flex flex-col gap-8 '>
            <div>
            <p className='text-lg font-semibold'>Get involved in improving tech</p>
            <p className='text-lg font-semibold'>education in Africa!</p>
            </div>
            <div className='flex text-nowrap'>
            <a className='text-white bg-[#264FAD] px-12 py-3 text-center rounded'>Support us</a>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Links</h1>
            <p className='font-light'>Home</p>
            <p className='font-light'>Success stories</p>
            <p className='font-light'>About us</p>
            <p className='font-light'>Get Involved</p>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Teams</h1>
            <p className='font-light'>Advisors/Mentors</p>
            <p className='font-light'>Executives</p>
            <p className='font-light'>Staffs</p>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Blogs</h1>
            <p className='font-light'>Recent Blog</p>            
            <p className='font-light'>New Blog</p>

        </div>

    </div>
    <div className='px-20'>
        <hr className='px-10 py-4'></hr>

    </div>
    <div className='flex justify-between px-20 mx-5 my-5 text-[#0F0F0F] font-light items-center'>
        <div className='flex items-center gap-2'>
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541604 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9936 9.18674 23.6746 6.01101 21.3318 3.66818C18.989 1.32535 15.8133 0.00635333 12.5 0ZM12.5 23.0769C10.4081 23.0769 8.36315 22.4566 6.62378 21.2944C4.88441 20.1322 3.52874 18.4803 2.7282 16.5476C1.92766 14.6149 1.7182 12.4883 2.12631 10.4365C2.53443 8.38482 3.54178 6.50019 5.02099 5.02099C6.5002 3.54178 8.38483 2.53442 10.4365 2.12631C12.4883 1.7182 14.6149 1.92765 16.5476 2.7282C18.4803 3.52874 20.1322 4.88441 21.2944 6.62377C22.4566 8.36314 23.0769 10.4081 23.0769 12.5C23.0737 15.3042 21.9584 17.9926 19.9755 19.9755C17.9926 21.9584 15.3042 23.0737 12.5 23.0769ZM8.65385 12.5C8.65385 13.3072 8.90784 14.094 9.37984 14.7489C9.85184 15.4037 10.5179 15.8935 11.2837 16.1488C12.0496 16.4041 12.8763 16.4119 13.6468 16.1712C14.4173 15.9305 15.0926 15.4535 15.5769 14.8077C15.7318 14.6063 15.9594 14.4735 16.2109 14.4376C16.4624 14.4016 16.718 14.4654 16.9231 14.6154C17.1271 14.7684 17.262 14.9962 17.298 15.2486C17.3341 15.5011 17.2684 15.7575 17.1154 15.9615C16.3889 16.9302 15.376 17.6458 14.2202 18.0068C13.0644 18.3678 11.8243 18.3561 10.6756 17.9732C9.52689 17.5903 8.52776 16.8556 7.81976 15.8733C7.11176 14.891 6.73077 13.7109 6.73077 12.5C6.73077 11.2891 7.11176 10.109 7.81976 9.12667C8.52776 8.14437 9.52689 7.40973 10.6756 7.02683C11.8243 6.64392 13.0644 6.63215 14.2202 6.99319C15.376 7.35423 16.3889 8.06977 17.1154 9.03846C17.2684 9.24247 17.3341 9.49891 17.298 9.75136C17.262 10.0038 17.1271 10.2316 16.9231 10.3846C16.718 10.5345 16.4624 10.5984 16.2109 10.5624C15.9594 10.5265 15.7318 10.3937 15.5769 10.1923C15.0926 9.54651 14.4173 9.06949 13.6468 8.82879C12.8763 8.5881 12.0496 8.59594 11.2837 8.85122C10.5179 9.10649 9.85184 9.59624 9.37984 10.2511C8.90784 10.906 8.65385 11.6928 8.65385 12.5Z" fill="#555555"/>
            </svg>
            <p>2020 Africa to Silicon Valley, Inc. All rights reserved.</p>

        </div>
        <div className='flex gap-10'>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 3.41176C30.8222 4.00882 29.5526 4.40118 28.2371 4.58882C29.5832 3.68471 30.6233 2.25176 31.1128 0.528823C29.8432 1.38176 28.4359 1.97882 26.9522 2.32C25.7438 0.852941 24.0459 0 22.1185 0C18.5239 0 15.587 3.27529 15.587 7.31823C15.587 7.89823 15.6482 8.46118 15.7553 8.99C10.3098 8.68294 5.4608 5.76588 2.23327 1.34765C1.6673 2.42235 1.34608 3.68471 1.34608 5.01529C1.34608 7.55706 2.49331 9.80882 4.26769 11.0882C3.18164 11.0882 2.17208 10.7471 1.2849 10.2353C1.2849 10.2353 1.2849 10.2353 1.2849 10.2865C1.2849 13.8347 3.54876 16.8029 6.54685 17.4682C5.99618 17.6388 5.41491 17.7241 4.81836 17.7241C4.40535 17.7241 3.99235 17.6729 3.59465 17.5876C4.42065 20.4706 6.82218 22.62 9.71319 22.6712C7.47992 24.65 4.6501 25.81 1.56023 25.81C1.04015 25.81 0.520077 25.7759 0 25.7076C2.90631 27.7888 6.36329 29 10.065 29C22.1185 29 28.7419 17.8435 28.7419 8.17118C28.7419 7.84706 28.7419 7.54 28.7266 7.21588C30.0115 6.19235 31.1128 4.89588 32 3.41176Z" fill="#9CA3AF"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.74999 0 0 6.76205 0 15.0904C0 22.6205 5.48999 28.8705 12.66 30V19.4578H8.84999V15.0904H12.66V11.762C12.66 7.98193 14.895 5.90361 18.33 5.90361C19.965 5.90361 21.675 6.18976 21.675 6.18976V9.90964H19.785C17.925 9.90964 17.34 11.0693 17.34 12.259V15.0904H21.51L20.835 19.4578H17.34V30C20.8746 29.4395 24.0933 27.6288 26.4149 24.8947C28.7364 22.1606 30.008 18.6832 30 15.0904C30 6.76205 23.25 0 15 0Z" fill="#9CA3AF"/>
            </svg>
            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.3683L19.785 11.4578L12 6.54731V16.3683ZM29.34 3.55191C29.535 4.32122 29.67 5.35242 29.76 6.66188C29.865 7.97135 29.91 9.10076 29.91 10.0829L30 11.4578C30 15.0424 29.76 17.6777 29.34 19.3637C28.965 20.8368 28.095 21.7862 26.745 22.1954C26.04 22.4082 24.75 22.5555 22.77 22.6537C20.82 22.7683 19.035 22.8174 17.385 22.8174L15 22.9156C8.715 22.9156 4.8 22.6537 3.255 22.1954C1.905 21.7862 1.035 20.8368 0.66 19.3637C0.465 18.5944 0.33 17.5632 0.24 16.2537C0.135 14.9442 0.0899999 13.8148 0.0899999 12.8327L0 11.4578C0 7.87314 0.24 5.23785 0.66 3.55191C1.035 2.07877 1.905 1.12941 3.255 0.720204C3.96 0.507416 5.25 0.360102 7.23 0.261892C9.18 0.147314 10.965 0.0982095 12.615 0.0982095L15 0C21.285 0 25.2 0.261892 26.745 0.720204C28.095 1.12941 28.965 2.07877 29.34 3.55191Z" fill="#9CA3AF"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 0C27.5507 0 28.3986 0.351189 29.0237 0.976311C29.6488 1.60143 30 2.44928 30 3.33333V26.6667C30 27.5507 29.6488 28.3986 29.0237 29.0237C28.3986 29.6488 27.5507 30 26.6667 30H3.33333C2.44928 30 1.60143 29.6488 0.976311 29.0237C0.351189 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H26.6667ZM25.8333 25.8333V17C25.8333 15.559 25.2609 14.177 24.2419 13.1581C23.223 12.1391 21.841 11.5667 20.4 11.5667C18.9833 11.5667 17.3333 12.4333 16.5333 13.7333V11.8833H11.8833V25.8333H16.5333V17.6167C16.5333 16.3333 17.5667 15.2833 18.85 15.2833C19.4688 15.2833 20.0623 15.5292 20.4999 15.9668C20.9375 16.4043 21.1833 16.9978 21.1833 17.6167V25.8333H25.8333ZM6.46667 9.26667C7.20927 9.26667 7.92146 8.97167 8.44657 8.44657C8.97167 7.92146 9.26667 7.20927 9.26667 6.46667C9.26667 4.91667 8.01667 3.65 6.46667 3.65C5.71964 3.65 5.00321 3.94675 4.47498 4.47498C3.94675 5.00321 3.65 5.71964 3.65 6.46667C3.65 8.01667 4.91667 9.26667 6.46667 9.26667ZM8.78333 25.8333V11.8833H4.16667V25.8333H8.78333Z" fill="#9CA3AF"/>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7 0H21.3C26.1 0 30 3.9 30 8.7V21.3C30 23.6074 29.0834 25.8203 27.4518 27.4518C25.8203 29.0834 23.6074 30 21.3 30H8.7C3.9 30 0 26.1 0 21.3V8.7C0 6.39262 0.916605 4.17974 2.54817 2.54817C4.17974 0.916605 6.39262 0 8.7 0ZM8.4 3C6.96783 3 5.59432 3.56893 4.58162 4.58162C3.56893 5.59432 3 6.96783 3 8.4V21.6C3 24.585 5.415 27 8.4 27H21.6C23.0322 27 24.4057 26.4311 25.4184 25.4184C26.4311 24.4057 27 23.0322 27 21.6V8.4C27 5.415 24.585 3 21.6 3H8.4ZM22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79917C24.5525 6.15081 24.75 6.62772 24.75 7.125C24.75 7.62228 24.5525 8.09919 24.2008 8.45082C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45082C21.1975 8.09919 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79917C21.9008 5.44754 22.3777 5.25 22.875 5.25ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5Z" fill="#9CA3AF"/>
            </svg>


        </div>

            

    </div>
    </div>
  )
}

export default Footer