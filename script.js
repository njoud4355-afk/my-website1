AOS.init();

const translations = {
    ar: {
        cv: "السيرة الذاتية",
        lang: "English",
        welcome: "أهلاً بكم في موقعي الشخصي",
        about_title: "نبذة عني",
        about_text: "أنا نجود العلي، خريجة علوم الحاسب من الجامعة السعودية الإلكترونية، مهتمة بتطوير الويب وتصميم واجهات المستخدم. أحرص على بناء مواقع وتطبيقات رقمية تجمع بين التصميم العصري وسهولة الاستخدام. <br><br> خلال دراستي الجامعية، عملت على عدة مشاريع في تطوير مواقع ويب تفاعلية، وتصميم واجهات مستخدم حديثة، بالإضافة إلى مشاريع تعتمد على قواعد البيانات وتحليل البيانات، مما ساهم في تطوير مهاراتي التقنية والعملية. <br><br> كما تدربت في شركة Know How ضمن قسم إدارة المشاريع في مجال التسويق والإعلام الرقمي، حيث شاركت في تطوير لوحة بيانات لعرض وتحليل بيانات الحملات التسويقية، وبناء نظام لإدارة الفرص وتنظيم البيانات بشكل تفاعلي وسهل الاستخدام، وقد أكسبتني هذه التجربة خبرة عملية في تطوير الأنظمة الرقمية وتحليل البيانات وتطبيق الحلول التقنية بشكل عملي داخل بيئة عمل احترافية.",
        skills_title: "المهارات",
        selected_work_title: "أعمال مختارة",
        tab_websites: "المواقع",
        tab_uiux: "تصاميم",
        web1_desc: "منصة رقمية متقدمة لحلول تقنية وتدفق البيانات مع واجهة تفاعلية.",
        web2_desc: "واجهة ويب حديثة متخصصة في قطاع الروبوتات والذكاء الاصطناعي.",
        web3_desc: "موقع سياحي تعريفي يبرز جمال التراث والطبيعة في محافظة العلا.",
        web4_desc: "تجربة ويب تفاعلية تستعرض تقنيات الواقع الافتراضي الحديثة.",
        view_website: "عرض الموقع",
        uiux_preview_desc: "استعرض أعمالي في تصميم واجهات وتجربة المستخدم والتصاميم البصرية.",
        btn_view_designs: "عرض التصاميم",
        proj_title: "المشاريع",
        acad_title: "المشاريع الأكاديمية",
        proj1_title: "Cherry Blossom Webpage",
        proj1_desc: "صفحة ويب بسيطة تعرض صورة لأشجار الكرز مع تصميم هادئ وخلفية وردية، تحتوي على عنوان، محتوى، وصورة مع رابط خارجي.",
        proj2_title: "Android App - Lifecycle Display",
        proj2_desc: "تطبيق أندرويد يوضح دورة حياة الـ Activity من خلال عرض رسائل لكل مرحلة باستخدام Toast، مع واجهة بسيطة تحتوي على نص تعريفي.",
        proj3_title: "Android App - Profile Layout",
        proj3_desc: "تطبيق أندرويد يعرض صفحة تعريف شخصية تحتوي على الاسم والبريد الإلكتروني وزر تفاعلي باستخدام ConstraintLayout.",
        intern_title: "مشاريع التدريب (Know How Company)",
        intern1_title: "Social Media Analytics Dashboard",
        intern1_desc: "نظام ويب لتحليل بيانات الحملات التسويقية عبر منصات التواصل الاجتماعي. يعرض مؤشرات الأداء مثل النقرات والمشاهدات عبر رسوم بيانية تفاعلية.",
        intern2_title: "Opportunity Management Dashboard",
        intern2_desc: "نظام لإدارة وتحليل الفرص والمنافسات، يحتوي على لوحة إحصائيات رئيسية وصفحة تقارير بجداول قابلة للبحث والتصفية.",
        contact_title: "تواصل معي",
        view_project: "عرض المشروع"
    },
    en: {
        cv: "Resume",
        lang: "العربية",
        welcome: "Welcome To My Portfolio Website",
        about_title: "About Me",
        about_text: "I am Njoud Alali, a Computer Science graduate from Saudi Electronic University, interested in web development and UI/UX design. I strive to build digital sites and applications that combine modern design with ease of use. <br><br> During my university studies, I worked on several projects in developing interactive websites, designing modern user interfaces, in addition to projects based on databases and data analysis, which contributed to developing my technical and practical skills. <br><br> I also interned at Know How Company in the project management department for digital marketing and media, where I participated in developing a dashboard to display and analyze marketing campaign data, and building a system to manage opportunities and organize data in an interactive and easy-to-use way. This experience gave me practical experience in developing digital systems, data analysis, and applying technical solutions in a professional work environment.",
        skills_title: "Skills",
        selected_work_title: "Selected Work",
        tab_websites: "Websites",
        tab_uiux: "Visuals",
        web1_desc: "An advanced digital platform for tech solutions and data flow with an interactive interface.",
        web2_desc: "A modern web interface specialized in the robotics and artificial intelligence sector.",
        web3_desc: "An informative tourism website highlighting the beauty of heritage and nature in AlUla.",
        web4_desc: "An interactive web experience showcasing modern virtual reality technologies.",
        view_website: "View Website",
        uiux_preview_desc: "Explore my work in UI/UX design and visual creations.",
        btn_view_designs: "View Designs",
        proj_title: "Projects",
        acad_title: "Academic Projects",
        proj1_title: "Cherry Blossom Webpage",
        proj1_desc: "A simple webpage displaying a cherry blossom image with a calm design and pink background, containing a title, content, and an image with an external link.",
        proj2_title: "Android App - Lifecycle Display",
        proj2_desc: "An Android application that demonstrates the Activity lifecycle by displaying messages for each stage using Toast, with a simple interface containing an introductory text.",
        proj3_title: "Android App - Profile Layout",
        proj3_desc: "An Android application that displays a personal profile page containing name, email, and an interactive button using ConstraintLayout.",
        intern_title: "Internship Projects (Know How Company)",
        intern1_title: "Social Media Analytics Dashboard",
        intern1_desc: "A web system to analyze marketing campaign data across social media platforms. It displays key performance indicators like clicks and views via interactive charts.",
        intern2_title: "Opportunity Management Dashboard",
        intern2_desc: "A system for managing and analyzing opportunities and competitions, featuring a main statistics dashboard and a reports page with searchable and filterable tables.",
        contact_title: "Contact Me",
        view_project: "View Project"
    }
};

let currentLang = 'ar';
let typewriterTimeout;

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const data = translations[currentLang];
    
    document.getElementById('main-html').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('main-html').lang = currentLang;

    document.getElementById('lang-toggle').innerText = data.lang;
    document.getElementById('btn-cv-nav').innerText = data.cv;
    document.getElementById('about-title').innerText = data.about_title;
    document.getElementById('about-text').innerHTML = data.about_text;
    document.getElementById('skills-main-title').innerText = data.skills_title;
    
    document.getElementById('selected-work-title').innerText = data.selected_work_title;
    document.getElementById('tab-websites-btn').innerText = data.tab_websites;
    document.getElementById('tab-uiux-btn').innerText = data.tab_uiux;
    
    document.getElementById('web1-desc').innerText = data.web1_desc;
    document.getElementById('web2-desc').innerText = data.web2_desc;
    document.getElementById('web3-desc').innerText = data.web3_desc;
    document.getElementById('web4-desc').innerText = data.web4_desc;
    
    document.getElementById('web1-link').innerHTML = `${data.view_website} <i class="fas fa-external-link-alt"></i>`;
    document.getElementById('web2-link').innerHTML = `${data.view_website} <i class="fas fa-external-link-alt"></i>`;
    document.getElementById('web3-link').innerHTML = `${data.view_website} <i class="fas fa-external-link-alt"></i>`;
    document.getElementById('web4-link').innerHTML = `${data.view_website} <i class="fas fa-external-link-alt"></i>`;

    document.getElementById('proj-title').innerText = data.proj_title;
    document.getElementById('acad-title').innerText = data.acad_title;
    document.getElementById('proj1-title').innerText = data.proj1_title;
    document.getElementById('proj1-desc').innerText = data.proj1_desc;
    document.getElementById('proj2-title').innerText = data.proj2_title;
    document.getElementById('proj2-desc').innerText = data.proj2_desc;
    document.getElementById('proj3-title').innerText = data.proj3_title;
    document.getElementById('proj3-desc').innerText = data.proj3_desc;

    document.getElementById('intern-title').innerText = data.intern_title;
    document.getElementById('intern1-title').innerText = data.intern1_title;
    document.getElementById('intern1-desc').innerText = data.intern1_desc;
    document.getElementById('intern2-title').innerText = data.intern2_title;
    document.getElementById('intern2-desc').innerText = data.intern2_desc;
    
    document.getElementById('intern1-link').innerHTML = `${data.view_project} <i class="fas fa-external-link-alt"></i>`;
    document.getElementById('intern2-link').innerHTML = `${data.view_project} <i class="fas fa-external-link-alt"></i>`;

    document.getElementById('contact-title').innerText = data.contact_title;

    clearTimeout(typewriterTimeout);
    startTypewriter();
}

function startTypewriter() {
    const txt = translations[currentLang].welcome;
    const typewriterEl = document.getElementById("hero-typewriter");
    if (!typewriterEl) return;
    typewriterEl.innerHTML = "";
    let i = 0;
    function type() {
        if (i < txt.length) {
            typewriterEl.innerHTML += txt.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, 800 / txt.length);
        }
    }
    type();
}

window.onload = () => {
    const typewriterEl = document.getElementById("hero-typewriter");
    if (typewriterEl) typewriterEl.innerHTML = "";
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                startTypewriter();
            }, 800);
        } else {
            startTypewriter();
        }
    }, 1500);
};

function moveSlider(btn, direction) {
    const wrapper = btn.parentElement.querySelector('.img-wrapper');
    if (!wrapper) return;
    if (direction === 1) {
        wrapper.style.transform = 'translateX(-50%)';
    } else {
        wrapper.style.transform = 'translateX(0%)';
    }
}

function switchWorkTab(category) {
    const btnWebsites = document.getElementById('tab-websites-btn');
    const btnUiux = document.getElementById('tab-uiux-btn');
    const contentWebsites = document.getElementById('category-websites');
    const contentUiux = document.getElementById('category-uiux');

    if (category === 'websites') {
        if (btnWebsites) btnWebsites.classList.add('active');
        if (btnUiux) btnUiux.classList.remove('active');
        if (contentWebsites) contentWebsites.classList.add('active');
        if (contentUiux) contentUiux.classList.remove('active');
    } else {
        if (btnUiux) btnUiux.classList.add('active');
        if (btnWebsites) btnWebsites.classList.remove('active');
        if (contentUiux) contentUiux.classList.add('active');
        if (contentWebsites) contentWebsites.classList.remove('active');
    }
}

function openLightbox(imgSrc, imgTitle) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxTitle) lightboxTitle.innerText = imgTitle;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}
function toggleCvDropdown(event) {
    event.stopPropagation();
    const menu = document.getElementById('cv-dropdown-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

function closeCvDropdown() {
    const menu = document.getElementById('cv-dropdown-menu');
    if (menu) {
        menu.classList.remove('show');
    }
}

window.addEventListener('click', () => {
    closeCvDropdown();
});
