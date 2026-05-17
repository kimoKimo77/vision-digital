<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رؤية للتطوير الرقمي | حلول برمجية وتسويقية متكاملة</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2 family=Cairo:wght@300;400;600;700;800&family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Tajawal', 'Cairo', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            900: '#312e81',
                        },
                        secondary: '#10b981',
                    }
                }
            }
        }
    </script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            transition: background-color 0.3s, color 0.3s;
        }
        .glass-nav {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
        }
        .dark .glass-nav {
            background-color: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(12px);
        }
        .blob {
            filter: blur(40px);
            opacity: 0.15;
            z-index: -1;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">

    <div class="fixed top-20 right-10 w-72 h-72 bg-primary-500 rounded-full blob pointer-events-none"></div>
    <div class="fixed bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blob pointer-events-none"></div>

    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b border-slate-200/50 dark:border-slate-800/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                        <i data-lucide="cpu" class="text-white w-6 h-6"></i>
                    </div>
                    <div>
                        <span class="text-xl font-bold bg-gradient-to-l from-primary-600 to-emerald-500 bg-clip-text text-transparent">رؤية الرقمية</span>
                        <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium tracking-widest -mt-1">VISION DIGITAL</p>
                    </div>
                </div>

                <nav class="hidden md:flex items-center gap-8">
                    <a href="#home" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">الرئيسية</a>
                    <a href="#services" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">خدماتنا</a>
                    <a href="#portfolio" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">أعمالنا</a>
                    <a href="#calculator" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">احسب تكلفتك</a>
                    <a href="#pricing" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">الأسعار</a>
                    <a href="#contact" class="font-medium hover:text-primary-600 dark:hover:text-primary-500 transition-colors">اتصل بنا</a>
                </nav>

                <div class="flex items-center gap-3">
                    <button id="themeToggle" class="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors">
                        <i id="themeIcon" data-lucide="moon" class="w-5 h-5"></i>
                    </button>
                    <a href="#contact" class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-md hover:shadow-lg shadow-primary-500/20">
                        ابدأ مشروعك
                    </a>
                    <button id="mobileMenuBtn" class="p-2.5 rounded-lg md:hidden text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobileMenu" class="hidden md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 px-4 py-6 space-y-3 shadow-xl">
            <a href="#home" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">الرئيسية</a>
            <a href="#services" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">خدماتنا</a>
            <a href="#portfolio" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">أعمالنا</a>
            <a href="#calculator" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">احسب تكلفتك</a>
            <a href="#pricing" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">الأسعار</a>
            <a href="#contact" class="mobile-link block px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50">اتصل بنا</a>
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href="#contact" class="mobile-link w-full text-center block px-4 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg">ابدأ مشروعك</a>
            </div>
        </div>
    </header>

    <main class="flex-grow pt-20">
        <section id="home" class="relative py-16 md:py-28 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7 space-y-6 text-center lg:text-right">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                            <i data-lucide="sparkles" class="w-4 h-4"></i> شريكك التقني الموثوق لنمو مبيعاتك
                        </span>
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            نصنع لك <span class="bg-gradient-to-l from-primary-600 to-emerald-500 bg-clip-text text-transparent">حضوراً رقمياً</span> يسبق عصره ويعزز ريادتك
                        </h1>
                        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                            نحن في رؤية نصمم ونطور تطبيقات ومواقع فائقة السرعة، ونقود حملات تسويقية مبتكرة لنمو أعمالك ومضاعفة عائداتك الاستثمارية بلمسة احترافية فريدة.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#services" class="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-primary-500/25 gap-2">
                                اكتشف خدماتنا
                                <i data-lucide="arrow-left" class="w-5 h-5"></i>
                            </a>
                            <a href="#calculator" class="inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 rounded-xl transition-all gap-2">
                                <i data-lucide="calculator" class="w-5 h-5"></i>
                                احسب كلفة موقعك فورياً
                            </a>
                        </div>
                        <div class="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div>
                                <h3 class="text-3xl font-extrabold text-primary-600 dark:text-primary-400">120+</h3>
                                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">مشروع ناجح</p>
                            </div>
                            <div>
                                <h3 class="text-3xl font-extrabold text-emerald-500">99%</h3>
                                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">رضا عملائنا</p>
                            </div>
                            <div>
                                <h3 class="text-3xl font-extrabold text-indigo-500">24/7</h3>
                                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">دعم مستمر</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-5 relative flex justify-center">
                        <div class="relative w-full max-w-md aspect-square bg-gradient-to-tr from-primary-500/10 to-emerald-500/10 rounded-3xl p-6 border border-slate-200/40 dark:border-slate-800/40 flex items-center justify-center">
                            <div class="w-full bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-900 p-5 space-y-4">
                                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-3">
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-400">لوحة تحكم الأرباح</span>
                                </div>
                                <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-xl">
                                    <div>
                                        <span class="text-[10px] text-slate-400">مبيعات الشهر الحالي</span>
                                        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100">$24,850</h4>
                                    </div>
                                    <span class="px-2 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-500 rounded-md flex items-center gap-0.5">
                                        <i data-lucide="trending-up" class="w-3 h-3"></i> +14.2%
                                    </span>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex justify-between text-xs text-slate-400">
                                        <span>التطوير والحلول</span>
                                        <span>80%</span>
                                    </div>
                                    <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-primary-600 rounded-full" style="width: 80%"></div>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex justify-between text-xs text-slate-400">
                                        <span>التسويق الرقمي</span>
                                        <span>65%</span>
                                    </div>
                                    <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-emerald-500 rounded-full" style="width: 65%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                <i data-lucide="check-circle" class="w-6 h-6"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" class="py-20 bg-white/50 dark:bg-slate-900/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 class="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">ماذا نقدم لعملائنا؟</h2>
                    <p class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">باقة حلول متكاملة تُصمم خصيصاً لنمو أعمالك</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 group">
                        <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <i data-lucide="laptop" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">تطوير المواقع والمنصات</h3>
                        <p class="text-slate-500 dark:text-slate-400 mb-4 text-sm leading-relaxed">موقع تعريفية، ومتاجر إلكترونية غاية في السرعة والتوافق التام مع محركات البحث.</p>
                        <a href="#contact" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold gap-1 text-sm">طلب الخدمة <i data-lucide="chevron-left" class="w-4 h-4"></i></a>
                    </div>

                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 group">
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <i data-lucide="smartphone" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">تطبيقات الهواتف الذكية</h3>
                        <p class="text-slate-500 dark:text-slate-400 mb-4 text-sm leading-relaxed">برمجة وتصميم تطبيقات لنظامي iOS و Android بأسلوب عصري مرن.</p>
                        <a href="#contact" class="inline-flex items-center text-emerald-500 font-semibold gap-1 text-sm">طلب الخدمة <i data-lucide="chevron-left" class="w-4 h-4"></i></a>
                    </div>

                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 group">
                        <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <i data-lucide="palette" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">هوية بصرية وتصميم العلامات</h3>
                        <p class="text-slate-500 dark:text-slate-400 mb-4 text-sm leading-relaxed">بناء هوية بصرية مذهلة ومدروسة تعبر عن رؤية شركتك بشكل فريد.</p>
                        <a href="#contact" class="inline-flex items-center text-indigo-500 font-semibold gap-1 text-sm">طلب الخدمة <i data-lucide="chevron-left" class="w-4 h-4"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="portfolio" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h2 class="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">أعمالنا ومشاريعنا</h2>
                    <p class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">تفقد أعمالنا الرائعة وقصص نجاحنا</p>
                </div>

                <div class="flex flex-wrap justify-center gap-3 mb-10">
                    <button onclick="filterPortfolio('all')" class="portfolio-btn px-6 py-2.5 rounded-full text-sm font-semibold border transition-all" id="btn-all">الكل</button>
                    <button onclick="filterPortfolio('web')" class="portfolio-btn px-6 py-2.5 rounded-full text-sm font-semibold border transition-all" id="btn-web">موقع ومنصات</button>
                    <button onclick="filterPortfolio('apps')" class="portfolio-btn px-6 py-2.5 rounded-full text-sm font-semibold border transition-all" id="btn-apps">تطبيقات هواتف</button>
                </div>

                <div id="portfolioGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="portfolio-item web bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800">
                        <div class="relative overflow-hidden aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6 text-white text-xl font-bold">
                            <div class="text-center space-y-2">
                                <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto text-emerald-300"></i>
                                <span>متجر رواء للملابس</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <span class="text-xs font-semibold text-primary-600 dark:text-primary-400">موقع إلكتروني / متجر</span>
                            <h3 class="text-lg font-bold mt-1 mb-2">منصة تجارة إلكترونية متطورة</h3>
                        </div>
                    </div>

                    <div class="portfolio-item apps bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800">
                        <div class="relative overflow-hidden aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-6 text-white text-xl font-bold">
                            <div class="text-center space-y-2">
                                <i data-lucide="truck" class="w-12 h-12 mx-auto text-yellow-300"></i>
                                <span>تطبيق وصلني للشحنات</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <span class="text-xs font-semibold text-emerald-500">تطبيق هواتف ذكية</span>
  
