<template>
    <header class="sticky@md top:0 flex w:full mx:auto z-index:99999 bg:white justify-content:center bb:1|solid|rgba(0,0,0,0.1)">
        <div class="flex w:full max-w:xl align-items:center px:32">
            <a href="/" class="flex">
                <h1 class="py:16 f:30">
                    <svg class="svg-inline--fa fill:current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="m255.487 348.511-38.054 21.97-15.574 124.592c-.536 4.286.794 8.596 3.653 11.834s6.97 5.093 11.289 5.093h75.578c4.32 0 8.43-1.855 11.289-5.093s4.189-7.548 3.653-11.834l-21.591-172.724c-8.206 10.444-18.406 19.327-30.243 26.162z" />
                            <path d="m270.097 158.141v-143.082c0-5.219-2.702-10.066-7.142-12.81-4.44-2.743-9.982-2.994-14.651-.659l-27.05 13.525c-25.759 12.879-41.761 38.771-41.761 67.57v83.59c0 16.328 5.224 31.449 14.064 43.817l29.912-17.27c11.989-15.749 28.037-27.701 46.628-34.681z" />
                            <path d="m236.976 268.498c-13.719-5.811-23.992-18.2-26.868-33.186l-145.939 84.259c-4.52 2.609-7.367 7.373-7.523 12.59-.157 5.217 2.399 10.143 6.755 13.018l25.238 16.664c12.671 8.366 27.115 12.574 41.598 12.574 12.988 0 26.008-3.386 37.799-10.194l72.391-41.795c14.14-8.164 24.624-20.249 30.914-34.088z" />
                            <path d="m417.584 233.375-72.391-41.795c-17.475-10.09-37.835-12.769-57.325-7.547-3.598.964-7.085 2.18-10.446 3.625 13.427 7.871 22.47 22.446 22.47 39.103 0 13.661-6.087 25.919-15.68 34.232l146.636 84.66c2.327 1.344 4.927 2.018 7.529 2.018 2.452 0 4.906-.598 7.135-1.798 4.596-2.473 7.583-7.149 7.896-12.359l1.813-30.189c1.726-28.747-12.696-55.551-37.637-69.95z" />
                            <circle cx="254.59" cy="226.761" r="15.184" />
                        </g>
                    </svg>
                    Yabe Webfont
                </h1>
            </a>
            <div class="mx:10"><span class="bg:blue-90 r:6 px:10 py:4 font:mono">v{{ wp_v12.version }}</span></div>
            <div class="flex-grow:1"></div>
            <nav class="hidden flex@md primary-nav">
                <div class="flex align-items:center mr:18">
                    <a href="/#features" class="px:15 bg:blue-90:hover py:8:hover r:8">Features</a>
                    <a href="/#pricing" class="px:15 bg:blue-90:hover py:8:hover r:8">Pricing</a>
                    <a href="/en" class="px:15 bg:blue-90:hover py:8:hover r:8">Documentation</a>
                    <a href="https://www.facebook.com/groups/1142662969627943" class="px:15 bg:blue-90:hover py:8:hover r:8">Community</a>
                    <!-- <a class="px:15 bg:blue-90:hover py:8:hover r:8">Blogs</a> -->
                    <a href="https://rosua.org/checkout/order-history" class="px:15 bg:blue-90:hover py:8:hover r:8">Account</a>
                </div>
                <div class="flex align-items:center">
                    <a href="https://wordpress.org/plugins/yabe-webfont" class="px:12 py:8 r:8 bg:green bg:green-40:hover fg:white">Get Yabe Webfont</a>
                </div>
            </nav>
            <div class="">
                <button @click="isMobileMenuOpen = true" class="block hidden@md">
                    <i class="fa-solid fa-bars f:30"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu overlay -->
        <Transition name="mobile-nav-slide">
            <div v-if="isMobileMenuOpen" class="z-index:10 fixed bg:blue-80 w:full h:full">
                <button @click="isMobileMenuOpen = false" class="fixed top:20 right:20">
                    <i class="fa-solid fa-xmark f:30"></i>
                </button>
                <nav class="align-items:center flex h:full primary-nav">
                    <ul class="mobile-menu__container flex flex:col gap-y:20 mx:auto text:center">
                        <li><a href="/#features" class="mobile-menu__link">Features</a></li>
                        <li><a href="/#pricing" class="mobile-menu__link">Pricing</a></li>
                        <li><a href="/en">Documentation</a></li>
                        <li>Blogs</li>
                        <li><a href="https://rosua.org/checkout/order-history">Account</a></li>
                    </ul>
                </nav>
            </div>
        </Transition>
    </header>
    <main id="main">
        <!-- Intro -->
        <div class="block-intro w:full max-w:xl mx:auto flex flex:column text:center my:60">
            <!-- Headline -->
            <div class="headline px:20 mx:30 my:30 lh:1.4">
                <h1 class="title mt:55 f:30 f:38@sm f:48@md font:bold fg:#222">The <span class="bg:grass-90 r:8 px:6">GDPR-friendly</span> Font Plugin for WordPress</h1>
                <p class="my:16 mx:65@md f:22 fg:gray-40">
                    Easily self-host Google Fonts and manage custom fonts with seamless integration into WordPress page builders.
                </p>
            </div>
            <!-- Core Features -->
            <div class="max-w:fit-content px:32 mx:auto mt:15 mb:30">
                <div class="feature__container grid-cols:2 grid-cols:3@sm grid-cols:6@lg grid-auto-cols:auto gap-x:15 gap-y:30 gap:64@sm">

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                                <rect width="60" height="60" rx="6" fill="#2050E0"></rect>
                                <rect width="60" height="60" rx="6" stroke="#E7E7E7"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4898 22.8896H34.0408C34.6492 22.8896 35.1429 23.4001 35.1429 24.0292V28.5877C35.1429 29.2168 34.6492 29.7273 34.0408 29.7273H25.9592C25.3508 29.7273 24.8571 29.2168 24.8571 28.5877V24.0292C24.8571 23.4001 25.3508 22.8896 25.9592 22.8896H26.5102V21.1802C26.5102 19.1906 28.076 17.5714 30 17.5714C31.924 17.5714 33.4898 19.1906 33.4898 21.1802V22.8896ZM28.3469 21.1802V22.8896H31.6531V21.1802C31.6531 20.2376 30.9115 19.4708 30 19.4708C29.0885 19.4708 28.3469 20.2376 28.3469 21.1802Z" fill="white"></path>
                                <path d="M30.0001 6L30.5832 7.88738H32.4706L30.9438 9.0538L31.5269 10.9412L30.0001 9.77401L28.4735 10.9412L29.0568 9.0538L27.5294 7.88738H29.4168L30.0001 6Z" fill="#F8D12E"></path>
                                <path d="M30.0001 37.0588L30.5832 38.9468H32.4706L30.9438 40.113L31.5269 42L30.0001 40.8339L28.4735 42L29.0568 40.113L27.5294 38.9468H29.4168L30.0001 37.0588Z" fill="#F8D12E"></path>
                                <path d="M37.7647 8.82353L38.3476 10.7109H40.2353L38.7081 11.8778L39.2915 13.7647L37.7647 12.5978L36.2376 13.7647L36.8209 11.8778L35.2941 10.7109H37.1818L37.7647 8.82353Z" fill="#F8D12E"></path>
                                <path d="M44.0423 29.1429L44.6251 31.0309H46.5126L44.9856 32.1972L45.5692 34.084L44.0423 32.9181L42.5152 34.084L43.0985 32.1972L41.5714 31.0309H43.459L44.0423 29.1429Z" fill="#F8D12E"></path>
                                <path d="M45.5296 21.5294L46.1124 23.4166H48L46.473 24.5829L47.0562 26.4706L45.5296 25.3047L44.0026 26.4706L44.5862 24.5829L43.0588 23.4166H44.946L45.5296 21.5294Z" fill="#F8D12E"></path>
                                <path d="M14.4709 21.5294L15.0539 23.4166H16.9412L15.4141 24.5829L15.9977 26.4706L14.4709 25.3047L12.9438 26.4706L13.5271 24.5829L12 23.4166H13.8876L14.4709 21.5294Z" fill="#F8D12E"></path>
                                <path d="M15.7567 29.1429L16.3396 31.0309H18.2269L16.7002 32.1972L17.283 34.084L15.7567 32.9181L14.2296 34.084L14.8128 32.1972L13.2857 31.0309H15.1734L15.7567 29.1429Z" fill="#F8D12E"></path>
                                <path d="M44.0423 13.7143L44.6251 15.6023H46.5126L44.9856 16.7686L45.5692 18.6555L44.0423 17.4895L42.5152 18.6555L43.0985 16.7686L41.5714 15.6023H43.459L44.0423 13.7143Z" fill="#F8D12E"></path>
                                <path d="M16.3995 13.7143L16.9824 15.6023H18.8698L17.3431 16.7686L17.9259 18.6555L16.3995 17.4895L14.8724 18.6555L15.4557 16.7686L13.9286 15.6023H15.8163L16.3995 13.7143Z" fill="#F8D12E"></path>
                                <path d="M39.1766 35.6471L39.7595 37.5342H41.6471L40.1197 38.7011L40.7033 40.5882L39.1766 39.422L37.6493 40.5882L38.233 38.7011L36.7059 37.5342H38.5934L39.1766 35.6471Z" fill="#F8D12E"></path>
                                <path d="M22.2353 8.82353L22.8182 10.7109H24.7059L23.1788 11.8778L23.7624 13.7647L22.2353 12.5978L20.7086 13.7647L21.2918 11.8778L19.7647 10.7109H21.652L22.2353 8.82353Z" fill="#F8D12E"></path>
                                <path d="M20.8234 35.6471L21.4066 37.5351H23.2941L21.7672 38.701L22.3503 40.5882L20.8234 39.4227L19.2967 40.5882L19.8799 38.701L18.3529 37.5351H20.2401L20.8234 35.6471Z" fill="#F8D12E"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 50.5C16 52.6507 17.6474 54 19.6711 54C20.9525 54 21.9389 53.4826 22.6711 52.6812V50.0333H19.3966V51.4841H20.9525V52.0522C20.6779 52.2754 20.2 52.458 19.6711 52.458C18.5627 52.458 17.7796 51.6058 17.7796 50.5C17.7796 49.3942 18.5627 48.542 19.6711 48.542C20.3118 48.542 20.8305 48.8971 21.105 49.3435L22.5694 48.5725C22.0711 47.7304 21.1559 47 19.6711 47C17.6474 47 16 48.3493 16 50.5ZM23.6982 53.8783V47.1116H26.5457C28.6812 47.1116 30.2168 48.3899 30.2168 50.4899C30.2168 52.5899 28.6812 53.8783 26.5558 53.8783H23.6982ZM25.4474 52.3565H26.5457C27.7355 52.3565 28.427 51.4942 28.427 50.4899C28.427 49.4449 27.7965 48.6333 26.5558 48.6333H25.4474V52.3565ZM31.0914 53.8783V47.1116H34.4879C36.0134 47.1116 36.8472 48.1362 36.8472 49.3638C36.8472 50.5812 36.0134 51.5855 34.4879 51.5855H32.8405V53.8783H31.0914ZM35.0676 49.3536C35.0676 48.887 34.7218 48.5826 34.254 48.5826H32.8405V50.1043H34.254C34.7218 50.1043 35.0676 49.8101 35.0676 49.3536ZM41.4133 53.8783L40.2743 51.5855H39.3794V53.8783H37.6303V47.1116H41.0269C42.5319 47.1116 43.3862 48.1058 43.3862 49.3638C43.3862 50.5406 42.6641 51.1696 42.0336 51.3928L43.4167 53.8783H41.4133ZM41.6065 49.3435C41.6065 48.8768 41.2201 48.5826 40.7625 48.5826H39.3794V50.1043H40.7625C41.2201 50.1043 41.6065 49.8101 41.6065 49.3435Z" fill="white"></path>
                            </svg>
                        </div>
                        <div class="feature__title">
                            GDPR / DSGVO friendly
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill="none" d="M0 0h16v16H0z"></path>
                                <path fill="#F29900" d="M13.5 2H8L1 13h5.5z"></path>
                                <path fill="#1A73E8" d="M8 2h5v11H8z"></path>
                                <circle fill="#EA4335" cx="3.25" cy="4.25" r="2.25"></circle>
                                <path fill="#0D652D" d="M13.33 10L13 13c-1.66 0-3-1.34-3-3s1.34-3 3-3l.33 3z"></path>
                                <path fill="#174EA6" d="M10.5 4.5A2.5 2.5 0 0113 2l.45 2.5L13 7a2.5 2.5 0 01-2.5-2.5z"></path>
                                <path fill="#1A73E8" d="M13 2a2.5 2.5 0 010 5"></path>
                                <path fill="#34A853" d="M13 7c1.66 0 3 1.34 3 3s-1.34 3-3 3"></path>
                            </svg>
                        </div>
                        <div class="feature__title">
                            Google Fonts self-host
                        </div>
                    </div>

                    <div class="feature__item">
                        <div class="feature__icon fg:crimson round">
                            <i class="fa-light fa-face-smile-hearts"></i>
                        </div>
                        <div class="feature__title">
                            Easy to use and intuitive
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon fg:sky">
                            <i class="fa-light fa-feather"></i>
                        </div>
                        <div class="feature__title">
                            Lightweight and blazingly fast
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32">
                                <g>
                                    <rect class="cls-1" fill="#000b1d" y="0.5" width="32" height="31" rx="5.64848"></rect>
                                    <path class="cls-2" fill="#fff" d="M17.63921,13.46488c-.74711,2.504-1.37579,4.91772-2.12289,7.28029a12.90012,12.90012,0,0,1-1.47406,3.41265,4.1921,4.1921,0,0,1-3.31166,1.777c-1.02992,0-2.03957-.48468-2.03957-1.5549A1.40176,1.40176,0,0,1,9.92281,23.0876a.61424.61424,0,0,1,.56539.32311c.50483.90867.98951,1.43364,1.21164,1.43364s.40383-.30284.76725-1.61534l2.65045-9.76247-1.90691-.00211a.91358.91358,0,0,1,.30208-1.03289h1.89816a17.53964,17.53964,0,0,1,1.3978-3.43866,5.04817,5.04817,0,0,1,4.36161-2.928c1.51448,0,2.14044.72695,2.14044,1.65589A1.52543,1.52543,0,0,1,22.01837,9.215c-.323,0-.48456-.24228-.58555-.58555-.34326-1.29235-.78752-1.676-1.05007-1.676s-.66638.48456-1.11052,1.49421a25.74394,25.74394,0,0,0-1.343,3.99058l2.30933-.003a.86867.86867,0,0,1-.31678,1.02946Z"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="feature__title">
                            Adobe Fonts support
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon fg:#4e6fc3">
                            <i class="fa-brands fa-wordpress"></i>
                        </div>
                        <div class="feature__title">
                            Visual builders integration
                        </div>
                    </div>

                </div>
            </div>
            <!-- CTA: Get Yabe Webfont Now -->
            <div class="cta my:20 flex flex:column gap:40">
                <a :href="wp_v12.download_link" class="flex gap:10 align-items:center mx:auto py:20 px:48 bg:green bg:green-40:hover fg:white f:20 rounded">
                    Download Yabe Webfont Now
                    <i class="fa-solid fa-arrow-right-long hidden block@3xs a:hover_{translateX(35%)} ~easing:ease ~duration:300ms"></i>
                </a>

                <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-hand-holding-dollar fg:#29b077"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>Free</strong> Forever
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <div class="f:12 text:left">
                            <div class="flex fg:#feb82c mb:2">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <strong>Support</strong> Quality
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:crimson">
                            <i class="fa-solid fa-face-smile-hearts"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong> {{ happyCustomers + wp_v12.active_installs }}+ Happy</strong>
                            Users
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:#4e6fc3">
                            <i class="fa-brands fa-wordpress"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>{{ totalDownloads }}+ Download</strong> & Counting
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sponsors -->
            <div class="mx:auto my:40 flex flex:row align-items:center gap:10">
                <a href="https://github.com/sponsors/suabahasa?o=esb" target="_blank" class="github-sponsor px:16 py:5 bg:#fafbfc bg:#f3f4f6:hover font:medium lh:20px r:6 b:1|solid|rgba(27,31,35,.15) ~background-color|.2s|cubic-bezier(0.3,0,0.5,1) text:none user-select:none">
                    <i class="fa-regular fa-heart mr:8 fg:#6a737d f:16 ~transform|.15s|cubic-bezier(0.2,0,0.13,2) scale(1) .github-sponsor:hover_{scale(1.1)}"></i>
                    <span class="f:14 fg:#24292e text-align:center ">Sponsor</span>
                </a>

                <div class="rel flex gap-x:10">
                    <canvas ref="pupRiveCanvas" class="abs z-index:3 h:36 top:-28 right:10"></canvas>
                    <a @mouseenter="$event => koFiHovered = true" @mouseleave="$event => koFiHovered = false" :href="wp_v12.donate_link" target="_blank">
                        <img class="h:28" src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_dark.png" alt="Buy Me a Coffee at ko-fi.com" />
                    </a>
                </div>
            </div>

            <!-- Snapshot -->
            <div class="mx:30@sm mx:40@md my:30 px:20">
                <div class="rel bg:gray-90 r:8 p:10">
                    <figure>
                        <img width="1719" height="975" class="w:full h:auto" src="/assets/landing/intro-screenshot.png" alt="">
                    </figure>
                    <a data-fslightbox href="https://youtu.be/uMj0x0ucnOw">
                        <div class="abs top:50% left:50% translate(-50%,-50%) px:32 py:14 bg:black/.8 bg:red:hover fg:white r:8 b:1|solid|white">
                            <i class="fa-solid fa-play"></i>
                            <!-- Watch the video -->
                        </div>
                    </a>
                </div>
            </div>

            <!-- As seen on -->
            <div class="flex flex:column align-items:center justify-content:center mb:60 mx:30@sm mx:40@md py:30 r:8 bg:gray-98">
                <div class="f:24 fg:gray-40 mb:20 capitalize font:medium">As seen on</div>
                <div class="max-w:md grid-cols:1 grid-cols:2@sm grid-cols:4@md gap:20 gap:30@sm align-items:center">
                    <div v-for="seen_on in AS_SEEN_ON" class="flex justify-content:center">
                        <a :href="seen_on.url" target="_blank" rel="noopener noreferrer">
                            <img :src="seen_on.logo" :alt="seen_on.name" class="max-h:64 max-w:full" :title="seen_on.name">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature Section -->
        <div id="features" class="block-features max-w:xl flex flex:column align-items:center my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">
            <div class="px:8 py:4 mb:8 r:8 bg:sky-95 fg:sky-55 text:center uppercase font:bold ls:2">Fully-featured</div>
            <h2 class="mb:22 f:36 font:semibold text:center">Made for Designers and Developers</h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    At Yabe Webfont, we created an <strong>advanced, easy-to-use, and intuitive font plugin</strong> for WordPress to streamline your workflow.
                </p>
            </div>

            <!-- Highlighted features -->
            <div class="highlighted-feature flex flex:column-reverse flex:row-reverse@md w:full my:60">
                <!-- Feature Tabs -->
                <div class="feature__container my:30 pl:2%@sm flex flex:column flex-basis:35%@md align-items:flex-start justify-content:center w:full {bt:1|solid|gray-85}>:not([hidden])~:not([hidden])">
                    <div v-for="(feature, index) in HIGHLIGHTED_FEATURES" class="feature__tab w:full">
                        <div @click="selectedFeatureIndex = index" :class="[selectedFeatureIndex === index ? `bg:${feature.color}-95` : `bg:${feature.color}-95:hover`]" class="feature__tab-wrapper r:8 px:22 py:10 my:15 cursor:pointer">
                            <div v-if="selectedFeatureIndex === index" :class="[selectedFeatureIndex === index ? `fg:${feature.color}-60` : `fg:${feature.color}-60:hover`]" class="feature__tab-title flex align-items:center column-gap:15">
                                <i class="fa-solid fa-circle"></i>
                                <div class="f:18 fg:gray-10 font:semibold">{{ feature.title }}</div>
                            </div>
                            <div v-else :class="[selectedFeatureIndex === index ? `fg:${feature.color}-60` : `fg:${feature.color}-60:hover`]" class="feature__tab-title flex align-items:center column-gap:15">
                                <i class="fa-solid fa-o"></i>
                                <div class="f:18 fg:gray-10 font:semibold">{{ feature.title }}</div>
                            </div>
                            <div v-if="selectedFeatureIndex === index" class="mt:10 lh:1.5 overflow:hidden">
                                <div v-html="feature.description"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature snapshots -->
                <div class="feature__snapshot flex flex-grow:1">
                    <div class="w:full">
                        <div :class="`bg:${getSelectedFeature.color}-55`" class="rel isolate pt:8% r:8 flex flex:column align-items:start overflow:hidden cursor:default">
                            <div class="abs top:-1 bottom:-1 left:-3 z:-10 w:full transform:bottom|right skewX(30) opacity:.3" :class="`bg:${getSelectedFeature.color}-90`" aria-hidden="true"></div>
                            <img :src="getSelectedFeature.image" :alt="getSelectedFeature.title" width="768" height="768" class="max-w:90% h:auto rtr:8">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Visual builder integrations -->
            <div class="visual-builder-integration flex flex:column-reverse flex:row@md w:full my:60">
                <!-- Feature Detail -->
                <div class="feature__detail my:30 flex flex:column flex-basis:40%@md align-items:flex-start justify-content:center w:full pr:3%@sm {bt:1|solid|gray-85}>:not([hidden])~:not([hidden])">
                    <div class="w:full flex flex:column align-items:flex-start">
                        <div class="px:8 py:4 mb:8 r:8 fg:indigo-55 bg:indigo-95 uppercase f:14 font:extrabold ls:3 ">
                            Everywhere
                        </div>
                        <h2 class="mb:22 f:36 font:semibold">
                            Visual Builder Integrations
                        </h2>
                        <div class="f:18 lh:1.5">
                            Yabe Webfont is a dedicated font manager plugin that serves as a central place to manage your fonts on your WordPress site.
                            <br><br>
                            Given that, we have <strong>integrated with the most popular visual builders</strong> to make it easier for you to use your fonts everywhere.
                        </div>

                        <div class="feature__container my:20 flex flex:column w:full">
                            <div class="w:full">
                                <div class="px:22 py:10 my:15">
                                    <div class="flex align-items:center column-gap:15">
                                        <i class="fa-solid fa-turn-down-right"></i>
                                        <div class="f:18 fg:gray-10 font:semibold">
                                            Selectable from the dropdown lists
                                        </div>
                                    </div>
                                </div>
                                <div class="px:22 py:10 my:15">
                                    <div class="flex align-items:center column-gap:15">
                                        <i class="fa-solid fa-turn-down-right"></i>
                                        <div class="f:18 fg:gray-10 font:semibold">
                                            CSS classes
                                            <code class="font:mono">.has-<span class="font:mono font:bold">name</span>-font-family</code>
                                        </div>
                                    </div>
                                </div>
                                <div class="px:22 py:10 my:15">
                                    <div class="flex align-items:center column-gap:15">
                                        <i class="fa-solid fa-turn-down-right"></i>
                                        <div class="f:18 fg:gray-10 font:semibold">
                                            CSS variables
                                            <code class="font:mono">var(--ywf--family-<span class="font:mono font:bold">name</span>)</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Builders logo -->
                <div class="builder__grids flex flex-grow:1">
                    <div class="w:full">
                        <div class="bg:indigo-95 p:20 r:8 flex flex:column align-items:center overflow:hidden">
                            <div class="p:20 w:full r:8 justify-items:center align-items:center grid-cols:2 grid-cols:3@sm grid-cols:4@xl grid-auto-flow:dense bg:white">
                                <a v-for="builder in VISUAL_BUILDERS" :href="builder.url" class="flex w:full align-items:center justify-content:center bg:gray-95:hover">
                                    <div class="p:20">
                                        <div class="flex flex:column align-items:center text:center">
                                            <img :src="builder.icon" :alt="builder.name" class="w:64 h:64">
                                            <div class="pt:10">
                                                {{ builder.name }}
                                                <i v-if="builder.pro" class="fa-solid fa-rectangle-pro fg:blue"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonial -->
        <div id="testimonials" class="block-testimonials max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <!-- Title -->
            <h2 class="mb:22 f:36 font:semibold text:center">Wall of Loves <i class="fa-solid fa-square-heart fg:crimson"></i></h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    We made not only a plugin that works but also a plugin that will make you smile.
                </p>
            </div>

            <!-- Wall of Loves -->
            <div class="testimonials__wall w:full bg:gray-95 my:60 p:20 p:30@sm p:40@md r:8 ">

                <div class="testimonials__container cols:1 cols:2@sm cols:3@md gap-x:20">
                    <div v-for="testimonial in randomizeTestimonials" class="testimonials__item my:20 break-inside:avoid">
                        <figure class="r:16 bg:white p:20 box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|0px|0px|0px,rgba(0,0,0,0.1)|0px|0px|6px|-4px box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|10px|15px|-3px,rgba(0,0,0,0.1)|0px|4px|6px|-4px:hover">
                            <blockquote class="fg:#111827">
                                <p class="">{{ testimonial.message }}</p>
                            </blockquote>
                            <figcaption class="mt:24 flex align-items:center gap-x:16">
                                <img class="h:40 w:40 rounded obj:cover" :src="testimonial.submitterAvatar ?? '/assets/landing/testimonial-gravatar.svg'" alt="">
                                <div>
                                    <div class="font:semibold">{{ testimonial.submitterName }}</div>
                                    <div class="fg:gray-60">{{ testimonial.submitterTitle }}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div class="mt:30 text:center">
                    <a href="https://wordpress.org/support/plugin/yabe-webfont/reviews/?filter=5/#new-post" target="_blank" class="text:underline">
                        submit your testimonial
                    </a>
                </div>
            </div>
        </div>

        <!-- Pricing -->
        <div id="pricing" class="block-pricing max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <!-- <div class="flex flex:column align-items:center mb:16">
                <div class="px:16 py:6 r:8 bg:crimson-95 fg:crimson-55 b:1|solid|crimson-65 text:center font:medium ls:2 lh:1.5">
                    <i class="fa-solid fa-gift fg:crimson pr:6"></i> <span class="ls:1 font:bold">40% off</span> until <span class="ls:1 font:bold">June 30</span>, with code: <code class="font:extrabold bg:white">MIGRATE40</code>
                </div>
            </div> -->

            <!-- Title -->
            <h2 class="mb:22 f:36 font:semibold text:center">Pricing</h2>

            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    <!-- We have some generous plans for you to choose from. -->
                    Your time and coffee are precious, so we made some generous plans for you to choose from.
                </p>
            </div>

            <div class="flex justify-content:center my:30">
                <fieldset class="grid-cols:2 gap-x:4 rounded p:4 text:center f:14 font:semibold lh:1.6 box-shadow:rgb(255,255,255)|0px|0px|0px|0px|inset,rgb(229,231,235)|0px|0px|0px|1px|inset,rgba(0,0,0,0)|0px|0px|0px|0px">
                    <legend class="sr-only">Payment frequency</legend>
                    <label @click="selectedPricingDuration = 'year'" :class="[selectedPricingDuration === 'year' ? 'bg:blue fg:white' : 'fg:gray-40 bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="annually" class="sr-only">
                        <span>Annually</span>
                    </label>
                    <label @click="selectedPricingDuration = 'one-time'" :class="[selectedPricingDuration === 'one-time' ? 'bg:blue fg:white' : 'fg:gray-40  bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="one-time" class="sr-only">
                        <span>One-time</span>
                    </label>
                </fieldset>
            </div>

            <div class="pricing__wall w:full bg:white my:30 ">

                <div :class="availablePricing.length % 3 === 0 ? 'grid-cols:3@md mx:5%@md' : 'grid-cols:2@md mx:15%@md'" class="pricing__container gap:20 grid-cols:1">
                    <div v-for="price in availablePricing" :class="{ 'most-popular': price.isMostPopular, 'emphasized': price.isEmphasized }" class="pricing__item r:8 p:32 p:40@md">
                        <div class="flex align-items:center justify-content:space-between gap-x:16">
                            <h3 class="pricing__item-title fg:gray-10 f:20 font:semibold lh:1.8">{{ price.title }}</h3>
                            <p v-if="price.isMostPopular" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most popular
                            </p>
                            <p v-if="price.isEmphasized" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most favored
                            </p>
                        </div>
                        <p class="pricing__item-subtitle mt:16 f:16 lh:1.72 fg:gray-40">{{ price.subtitle }}</p>
                        <p v-if="price.amount" class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">${{ price.amount }}</span>
                            <span v-if="price.duration !== 'one-time'" class="f:16 font:semibold lh:1.72 fg:gray-40">/year</span>
                        </p>
                        <p v-else class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">Free</span>
                        </p>
                        <a :href="price.purchaseButton.url" class="pricing__item-buy mt:24 block r:8 py:8 px:12 text:center f:16 font:semibold lh:1.72 focus-visible:outline outline-offset:2:focus-visible outline-color:blue:focus-visible">
                            {{ price.purchaseButton.text ?? 'Buy' }}
                        </a>
                        <ul role="list" class="pricing__item-feature-container mt:32 f:16 lh:1.72 fg:gray-50 mt:40@lg">
                            <li v-for="feature in price.features" class="flex gap-x:12">
                                <template v-if="typeof feature === 'object'">
                                    <i :class="feature.icon" class="h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature.text }}
                                </template>
                                <template v-else>
                                    <i class="fa-solid fa-check h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature }}
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mx:auto my:30 flex flex:column gap:40">
                    <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-badge-dollar fg:#29b077"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong>14-day Money</strong>
                                <br> Back Guarantee
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div class="f:12 text:left">
                                <div class="flex fg:#feb82c mb:2">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <strong>Support</strong> Quality
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:crimson">
                                <i class="fa-solid fa-face-smile-hearts"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ happyCustomers }}+ Happy</strong>
                                Users
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:#4e6fc3">
                                <i class="fa-brands fa-wordpress"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ activeSites }}+ Active</strong>
                                Sites
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </main>
    <footer class="flex flex:colum my:60">
        <div class="mx:auto flex align-items:center f:16 fg:gray" title="Made with hundred cups of coffee in Indonesia">
            Made with hundred <i class="fa-solid fa-mug px:8"></i> of <i class="fa-solid fa-coffee-bean px:8"></i> in <span class="font:bold px:4">Indonesia</span>
        </div>
    </footer>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount, onMounted } from 'vue';
import { Rive } from '@rive-app/canvas';

/** @type {Rive} */
let pupRive = null;
const koFiHovered = ref(false);

const pupRiveCanvas = ref(null);

const isMobileMenuOpen = ref(false);

const happyCustomers = ref(0);
const activeSites = ref(0);
const totalDownloads = ref(0);

const wp_v10 = ref({});
const wp_v12 = ref({});

const HIGHLIGHTED_FEATURES = [
    {
        title: 'GDPR / DSGVO friendly',
        description: `Yabe Webfont allows you to import/self-hosting Google Fonts files from your server through your WordPress admin page. Fewer reasons to worry about GDPR / DSGVO compliance.`,
        image: '/assets/landing/feature-gdpr-friendly.png',
        color: 'blue',
    },
    {
        title: 'Easy to use',
        description: `The simplified and intuitive interface allows you to manage fonts without coding. You can upload the font files using the WordPress media uploader. No FTP is required.`,
        image: '/assets/landing/feature-easy-to-use.png',
        color: 'crimson',
    },
    {
        title: 'Google Fonts and Adobe Fonts ready',
        description: `Start using any available fonts on Google Fonts and Adobe Fonts.`,
        image: '/assets/landing/feature-google-fonts-adobe-fonts.png',
        color: 'gold',
    },
    {
        title: 'Lightweight and blazingly fast',
        description: `It is built on top of the modern JavaScript framework and powered by WordPress REST API, giving you an instant, smooth, responsive user experience to manage the fonts. The front page uses the cache that allows your site to load instantly and reduce the database query.`,
        image: '/assets/landing/feature-lightweight-blazingly-fast.png',
        color: 'grass',
    },
    {
        title: 'Fine-tuning',
        description: `The granular setting allows you to adjust the font to meet your requirement. On 90% of use cases, the default one is good to go.`,
        image: '/assets/landing/feature-fine-tuning.png',
        color: 'indigo',
    },
    {
        title: 'Variable Fonts',
        description: `Variable fonts format allow a single font file to contain multiple stylistic variations.`,
        image: '/assets/landing/feature-variable-fonts.png',
        color: 'brown',
    },
];

const TESTIMONIALS = [
    {
        createdAt: '2023-02-05',
        submitterName: 'Luke Allen',
        submitterAvatar: '/assets/landing/testimonial-luke-alen.jpg',
        submitterTitle: 'OxyNinja & Motion.page Community Support Manager',
        message: `I have always hosted Google Fonts locally and to do so was always a manual task. It would be a case of adding a snippet, downloading the fonts I want to use, then upload to a folder on the server. This plugin changes that and makes all of it seamless. It is the hidden gem that I have been looking for!`
    },
    {
        createdAt: '2023-05-15',
        submitterName: `Udoro 'Cracka' Essien`,
        submitterAvatar: '/assets/landing/testimonial-udoro.jpeg',
        submitterTitle: 'Designer, frontend developer, and content creator at Design with Cracka',
        message: `Hosting fonts locally is a must-have for sites that operate within the EU. And this is the most painless way to host them locally. You can configure everything you need from the plugin interface withe ease.`
    },
    {
        createdAt: '2023-02-06',
        submitterName: 'Adam Lowe',
        submitterAvatar: 'https://s.gravatar.com/avatar/a1708192448e172b8489311e318700b9?s=100',
        submitterTitle: 'President at Peak Performance Digital',
        message: `I tested this plugin last week and am very impressed. It goes well beyond what the typical free font managers do. It makes the whole process super-simple, while still giving you plenty of control if you need it. I give it an A+!`
    },
    {
        createdAt: '2023-02-04',
        submitterName: 'Mohammad Arshad',
        submitterAvatar: '/assets/landing/testimonial-mohammad-arshad.jpg',
        submitterTitle: 'Arsh Computing',
        message: `I'm working as a freelancer WordPress Expert, has been working with an German Web Agency. Because of GPDR rules I'm local hosting google fonts and custm fonts from years manually, but sometimes it is a mess to do so when you have multiple fonts.\nThis Plugin solves the major problem of my work, with much less steps and it is done automatically. I love this easy process.`
    },
    {
        createdAt: '2023-02-06',
        submitterName: 'Renato Corluka',
        submitterAvatar: '/assets/landing/testimonial-renato-corluka.jpg',
        submitterTitle: 'Recoda.me',
        message: `Hosting fonts locally is a must-have for sites that operate within the EU. And this is the most painless way to host them locally. You can configure everything you need from the plugin interface withe ease.`
    },
    {
        createdAt: '2023-06-24',
        submitterName: 'Michael Culham',
        submitterAvatar: 'https://s.gravatar.com/avatar/aa5cc47e1c0cf4f1fa94290472bb13b3861abf992fb9b1be418ee7b16c2eb186?s=100',
        submitterTitle: 'Bunnyduck.design',
        message: `I got this and I love it. Makes adding Google Fonts insanely easy and it’s also a much easier font system than the native Bricks one. Thanks for mankind it and saving me a load of time!`
    },
    {
        createdAt: '2023-02-01',
        submitterName: 'Jornes',
        submitterAvatar: 'https://s.gravatar.com/avatar/e34e24192b26bc2267526edbae9e4fe6?s=100',
        submitterTitle: 'Jornes.com',
        message: `I'm a cabinet designer and also create websites for my businesses. Yabe Font is a great tool. It's a life saver. Just a few clicks away, I can have Google font host locally without hassle. No more downloading from GoogleFont and self-uploading it by myself, and no more worrying about GDPR compliant, and host the font locally improves the page speed. The support is awesome! I truly appreciate it. I will use it for every site I build. Highly recommended.`
    },
    {
        createdAt: '2023-02-01',
        submitterName: 'Luciana Hanan',
        submitterAvatar: '/assets/landing/testimonial-luciana-hanan.jpg',
        submitterTitle: 'Webmaster Luciana',
        message: `I make WordPress sites since the beginning, and adding custom fonts or even google fonts to the site was always a struggle. But no more! Yabe Fonts is the dream fonts manager that I always wanted, a beautiful interface is simple and accurate! It's easy to have local google fonts and install my custom fonts, and Yabe Fonts deals with FOUT flawlessly! I strongly recommend it to everyone!`
    },
    {
        createdAt: '2023-02-07',
        submitterName: 'Akram ahmed',
        submitterAvatar: '/assets/landing/testimonial-akram-ahmed.jpg',
        submitterTitle: 'Somfuture wuhan IT co.ltd',
        message: `I'm a wordpress web dev and also create websites for my small business. Yabe Font is an awesome tool and life saver. Just right on your wordPress dashboard one clicks away, and easily like that u can have Google font host locally without wasting your time . No more downloading from GoogleFont and self-uploading it by yourself. The support is always there to help! I truly appreciate it. I will use it for every site I build. Highly recommended.`
    },
    {
        createdAt: '2023-05-14',
        submitterName: 'Ivan Nugraha',
        submitterAvatar: 'https://s.gravatar.com/avatar/fef80216d1d2be1fd56f6687fa28d21f?s=100',
        submitterTitle: 'Owner at Di Tanjungsari & Web Application Developer at Balik Bandung',
        message: `Great font management tool for wordpress. Very easy to use yet has many important feature to optimized font for webpage.`
    },
    {
        createdAt: '2023-02-06',
        submitterName: 'Angel Julian Mena',
        submitterAvatar: 'https://s.gravatar.com/avatar/862747ad39a43ba17370e55e9532986b?s=100',
        submitterTitle: 'Desarrollo de soluciones abiertas SL',
        message: `Normalmente no me gusta usar este tipo de plugins, ya que prefiero cargar las fuentes de forma manual, pero aqui quise hacer una excepción y probarlo, sobre todo para ver como funcionaba la carga de fuentes variables. No tengo más que quitarme el sombrero y felicitar al desarrollador por hacer un plugin tan comodo y sencillo`
    },
    {
        createdAt: '2023-02-04',
        submitterName: 'John Stewart',
        submitterAvatar: 'https://s.gravatar.com/avatar/530df329bffdb78e680059c84d21a1d3?s=100',
        submitterTitle: 'Developer',
        message: `Yabe font is not a glorified google font manager. At least that is what I thought it was. With google fonts. when it comes to performance. one would assume that since most fonts are hosted by google everything is optimized and cached. But Google Fonts delivers optimized fonts based on device/browser. Fonts are always downloaded after your css file has been loaded to the client. This creates un necessary requests to google. And since you are using google it means you have to abide by their privacy policy and we all know that those are horrible. Google fonts are only cached for 1 day. meaning your clients needs to download fonts over and over. But with the help of Yabe fonts I do not have to worry about that because it takes care of that and I do not even need to know how it is done. Of course the developer explains how it is done but I like the magic of it and it works. And to top it all. I can configure the font visually without even knowing all the css tricks.`
    },
    {
        createdAt: '2023-05-20',
        submitterName: 'Mike Smith',
        submitterAvatar: 'https://s.gravatar.com/avatar/1fa57dd8f3cb769db56aac45dd112829?s=100',
        submitterTitle: '',
        message: `Yes it's easy to add fonts manually — but now I can do it in 2 minutes instead of 10. Pre-load with one-click — CSS provided if I want to circumvent the plugin. It's very neat. It also provides a nice, easy way to use Variable fonts. Several builders need 1 entry per weight/style… where Yabe allows you to upload just one font-file and properly apply the variations. Once I've done 10 projects it will have paid for itself in the time-saved alone.`
    },
    {
        createdAt: '2023-07-01',
        submitterName: 'Mario',
        submitterAvatar: 'https://s.gravatar.com/avatar/f5f19b0725d80e8952685ed54feb5c824f4756dea72a3e342a933d11079b8f45?s=100',
        submitterTitle: '',
        message: `I used different plugins before, but they had troubles with Oxygen-builder. This one works like a charm.`
    },
];

const AS_SEEN_ON = [
    {
        name: 'breakdance4fun',
        url: 'https://breakdance4fun.supadezign.com/how-to-host-google-fonts-locally/#plugin',
        logo: '/assets/landing/as-seen-on-breakdance4fun.png',
    },
    {
        name: 'Design with Cracka',
        url: 'https://youtu.be/uMj0x0ucnOw',
        logo: '/assets/landing/as-seen-on-design-with-cracka.svg',
    },
    {
        name: 'Peak Performance Digital',
        url: 'https://youtu.be/A0JZzEVIUzQ',
        logo: '/assets/landing/as-seen-on-design-with-peak-performance-digital.svg',
    },
    {
        name: 'Jornes.net',
        url: 'https://jornes.net/blog/wordpress-plugins/yabe-webfont-self-host-google-fonts-locally',
        logo: '/assets/landing/as-seen-on-jornes.png',
    },
    {
        name: 'Gold Penguin',
        url: 'https://goldpenguin.org/blog/yabe-webfont-review/',
        logo: '/assets/landing/as-seen-on-gold-penguin.png',
    },
    {
        name: 'Wildcard Group',
        url: 'https://wildcard.fi/google-fonts-ja-gdpr/',
        logo: '/assets/landing/as-seen-on-wildcard.png',
    },
    {
        name: 'Toolonomy',
        url: 'https://toolonomy.com/yabe-webfont-review/',
        logo: '/assets/landing/as-seen-on-toolonomy.png',
    },
    {
        name: 'mangwp',
        url: 'https://youtu.be/M_69nks3fuU',
        logo: '/assets/landing/as-seen-on-mangwp.png',
    },
];

const VISUAL_BUILDERS = [
    {
        name: 'Builderius',
        url: '/en/integration/builderius',
        icon: 'assets/landing/builder-builderius.svg',
    },
    {
        name: 'Classic Editor',
        url: '/en/integration/classic-editor',
        icon: 'assets/landing/builder-classic-editor.png',
    },
    {
        name: 'Elementor',
        url: '/en/integration/elementor',
        icon: 'assets/landing/builder-elementor.svg',
    },
    {
        name: 'Gutenberg',
        url: '/en/integration/gutenberg',
        icon: 'assets/landing/builder-gutenberg.svg',
    },
    {
        name: 'GeneratePress',
        url: null,
        icon: 'assets/landing/builder-generatepress.svg',
    },
    {
        name: 'Kadence WP',
        url: null,
        icon: 'assets/landing/builder-kadencewp.svg',
    },
    {
        name: 'Pinegrow',
        url: null,
        icon: 'assets/landing/builder-pinegrow.svg',
    },
    {
        name: 'Beaver Builder',
        url: '/en/integration/beaver-builder',
        icon: 'assets/landing/builder-beaver.svg',
        pro: true,
    },
    {
        name: 'Blocksy',
        url: null,
        icon: 'assets/landing/builder-blocksy.svg',
        pro: true,
    },
    {
        name: 'Breakdance',
        url: '/en/integration/breakdance',
        icon: 'assets/landing/builder-breakdance.svg',
        pro: true,
    },
    {
        name: 'Bricks',
        url: '/en/integration/bricks',
        icon: 'assets/landing/builder-bricks.svg',
        pro: true,
    },
    {
        name: 'Cwicly',
        url: '/en/integration/cwicly',
        icon: 'assets/landing/builder-cwicly.png',
        pro: true,
    },
    {
        name: 'Divi',
        url: null,
        icon: 'assets/landing/builder-divi.png',
        pro: true,
    },
    {
        name: 'Greenshift',
        url: null,
        icon: 'assets/landing/builder-greenshift.png',
        pro: true,
    },
    {
        name: 'Oxygen',
        url: '/en/integration/oxygen',
        icon: 'assets/landing/builder-oxygen.svg',
        pro: true,
    },
    {
        name: 'Spectra',
        url: null,
        icon: 'assets/landing/builder-spectra.svg',
        pro: true,
    },
    {
        name: 'Zion Builder',
        url: '/en/integration/zion-builder',
        icon: 'assets/landing/builder-zion.svg',
        pro: true,
    },
    {
        name: 'Plugins & Themes Dev',
        url: '/en/integration/developer',
        icon: 'assets/landing/builder-wordpress.svg',
    },
];

const PRICING = [
    {
        duration: 'year',
        amount: 0,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Starter',
        subtitle: 'Get started with the free version and enjoy the full features',
        features: [
            'All features',
            {
                icon: 'fa-regular fa-asterisk',
                text: 'Limited integrations'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-messages',
                text: 'Community support'
            },
        ],
        purchaseButton: {
            text: 'Download',
            url: 'https://wordpress.org/plugins/yabe-webfont',
        },
    },
    {
        duration: 'year',
        amount: 19,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Personal',
        subtitle: 'Best for blogger, individual & solopreneur',
        features: [
            'All features',
            'All integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=18&edd_options[price_id]=1' },
    },
    {
        duration: 'year',
        amount: 39,
        isMostPopular: true,
        isEmphasized: false,
        title: 'Agency',
        subtitle: 'Perfect For Agency Owners with high volume',
        features: [
            'All features',
            'All integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=18&edd_options[price_id]=2' },
    },
    {
        duration: 'one-time',
        amount: 79,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Personal',
        subtitle: 'Best for blogger, individual & solopreneur',
        features: [
            'All features',
            'All integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support (first year)'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=18&edd_options[price_id]=3' },
    },
    {
        duration: 'one-time',
        amount: 159,
        isMostPopular: false,
        isEmphasized: true,
        title: 'Agency',
        subtitle: 'Perfect For Agency Owners with high volume',
        features: [
            'All features',
            'All integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support (first year)'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=18&edd_options[price_id]=4' },
    },
];

const selectedFeatureIndex = ref(0);
const getSelectedFeature = computed(() => {
    return HIGHLIGHTED_FEATURES[selectedFeatureIndex.value];
});

const randomizeTestimonials = computed(() => {
    return TESTIMONIALS;
});

// available pricing duration: year, one-time
const selectedPricingDuration = ref('year');

const availablePricing = computed(() => {
    return PRICING.filter(item => item.duration === selectedPricingDuration.value);
});

watch(koFiHovered, (value) => {
    pupRive.stateMachineInputs('YeyMachine')[0].value = value;
});

watch(isMobileMenuOpen, (newState, oldState) => {
    if (newState) {
        setTimeout(() => {
            // auto close the mobile nav when menu item is clicked
            const mobileNavLinks = document.querySelectorAll('.mobile-menu__link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    isMobileMenuOpen.value = false;
                });
            });
        }, 100);
    }
});

onBeforeMount(() => {
    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_users')
        .then(res => res.json())
        .then(res => {
            happyCustomers.value += res[0].count_users;
        })
        .catch(err => {
            console.log(err);
        });

    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_sites')
        .then(res => res.json())
        .then(res => {
            // search array of object with download_id = 18 (Yabe Webfont)
            const download = res.find(item => item.download_id === 18);
            activeSites.value += download.count_sites;
            totalDownloads.value += download.count_sites;
        })
        .catch(err => {
            console.log(err);
        });

    fetch('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=yabe-webfont')
        .then(response => response.json())
        .then(data => {
            wp_v12.value = data;
            activeSites.value += wp_v12.value.active_installs;
        });
    fetch('https://api.wordpress.org/plugins/info/1.0/yabe-webfont.json')
        .then(response => response.json())
        .then(data => {
            wp_v10.value = data;
            totalDownloads.value += wp_v10.value.downloaded;
        });
});

onMounted(() => {

    setTimeout(() => {
        // if hash is not empty, scroll to the element
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);

            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }

        window.themeService.current = 'light';
    }, 100);

    
    pupRive = new Rive({
        src: 'https://cdn.jsdelivr.net/gh/orgrosua/yabe-webfont-docs/public/assets/landing/pup.riv',
        canvas: pupRiveCanvas.value,
        autoplay: true,
        stateMachines: 'YeyMachine',
        onLoad: () => {
            pupRive.resizeDrawingSurfaceToCanvas();
        },
    });

    // Refresh the lightbox when the DOM is ready
    window.refreshFsLightbox();
});
</script>

<style lang="scss">
/* Typography */
* {
    font-family: "Outfit", sans-serif;
}

html {
    scroll-behavior: smooth;
}

.primary-nav {
    font-weight: 600;
}

.block-intro {
    .feature__container {}

    .feature__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .feature__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 64px;
        height: 64px;
        background-color: #f9f8fa;
        border-radius: 50%;

        svg:not(.svg-inline--fa) {
            width: 40px;
            height: 40px;
        }
    }

    .feature__title {
        font-size: 16px;
        color: #555456;
        max-width: 120px;
    }
}

.badges__list {
    margin-left: auto;
    margin-right: auto;
    // display: flex;
    gap: 10px;
}

.badges__item {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 160px;
    border-radius: 1e9em;
}

code {
    padding: 2px 4px;
    font-size: .9rem;
    line-height: 1;
    background-color: #afb8c133;
    border-radius: 6px;
    font-weight: 300;
}

/*
  Mobile nav overlay slide transition
*/
.mobile-nav-slide-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-nav-slide-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-nav-slide-enter-from,
.mobile-nav-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.testimonials__item blockquote p {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.4;
}

$color-blue-50: #175fe9;
$color-blue-55: #2671ea;

$color-blue-70: #81acf3;
$color-blue-80: #c6dbfe;

$tw-color-gray-300: #d1d5db;
$tw-color-gray-900: #111827;

@function hexAlpha($hex, $alpha) {
    $opacity: $alpha * 100%;
    @return rgba(red($hex), green($hex), blue($hex), $opacity);
}

.pricing__item {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgb(229, 231, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

    // if not most popular and not emphasized
    &:not(.most-popular):not(.emphasized) {
        .pricing__item-buy {
            color: $color-blue-50;
            box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-80 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

            &:hover {
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-70 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            }
        }
    }

    .pricing__item-feature-container {
        &>:not([hidden])~:not([hidden]) {
            margin-top: 0.75rem;
        }
    }

    &.most-popular {
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, $color-blue-50 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

        .pricing__item-title {
            color: $color-blue-50;
        }

        .pricing__item-buy {
            color: white;
            background-color: $color-blue-50;

            &:hover {
                background-color: $color-blue-55;
            }
        }

    }

    &.emphasized {
        background-color: $tw-color-gray-900;

        .pricing__item-title,
        .pricing__item-amount>span {
            color: white;
        }

        .pricing__item-subtitle,
        .pricing__item-feature-container>li {
            color: $tw-color-gray-300;

            svg {
                color: white;
            }
        }

        .pricing__item-buy {
            color: white;
            background-color: hexAlpha(#fff, 0.1);

            &:hover {
                background-color: hexAlpha(#fff, 0.2);
            }
        }

        .special-badge {
            color: white;
            background-color: hexAlpha(#fff, 0.1);
        }
    }
}
</style>