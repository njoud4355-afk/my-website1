// تهيئة مكتبة الأنيميشن
AOS.init();

// قاموس الترجمة الكامل والشامل (عربي - إنجليزي)
const translations = {
    ar: {
        cv: "السيرة الذاتية",
        lang: "English",
        welcome: "أهلاً بكم في موقعي الشخصي",
        about_title: "نبذة عني",
        about_text: "أنا نجود العلي، خريجة علوم الحاسب من الجامعة السعودية الإلكترونية، مهتمة بتطوير الويب وتصميم واجهات المستخدم. أحرص على بناء مواقع وتطبيقات رقمية تجمع بين التصميم العصري وسهولة الاستخدام. <br><br> خلال دراستي الجامعية، عملت على عدة مشاريع في تطوير مواقع ويب تفاعلية، وتصميم واجهات مستخدم حديثة، بالإضافة إلى مشاريع تعتمد على قواعد البيانات وتحليل البيانات، مما ساهم في تطوير مهاراتي التقنية والعملية. <br><br> كما تدربت في شركة Know How ضمن قسم إدارة المشاريع في مجال التسويق والإعلام الرقمي، حيث شاركت في تطوير لوحة بيانات لعرض وتحليل بيانات الحملات التسويقية، وبناء نظام لإدارة الفرص وتنظيم البيانات بشكل تفاعلي وسهل الاستخدام، وقد أكسبتني هذه التجربة خبرة عملية في تطوير الأنظمة الرقمية وتحليل البيانات وتطبيق الحلول التقنية بشكل عملي داخل بيئة عمل احترافية.",
        skills_title: "المهارات",
        skill_uiux: "تصميم واجهات المستخدم UI/UX",
        skill_responsive: "التصميم المتجاوب",
        skill_office: "مايكروسوفت أوفيس",
        
        proj_title: "المشاريع",
        acad_title: "المشاريع الأكاديمية",
        
        // تفاصيل المشاريع الأكاديمية
        proj1_title: "Cherry Blossom Webpage",
        proj1_desc: "صفحة ويب بسيطة تعرض صورة لأشجار الكرز مع تصميم هادئ وخلفية وردية، تحتوي على عنوان، محتوى، وصورة مع رابط خارجي.",
        proj2_title: "Android App – Lifecycle Display",
        proj2_desc: "تطبيق أندرويد يوضح دورة حياة الـ Activity من خلال عرض رسائل لكل مرحلة باستخدام Toast، مع واجهة بسيطة تحتوي على نص تعريفي.",
        proj3_title: "Android App – Profile Layout",
        proj3_desc: "تطبيق أندرويد يعرض صفحة تعريف شخصية تحتوي على الاسم والبريد الإلكتروني وزر تفاعلي باستخدام ConstraintLayout.",
        
        intern_title: "مشاريع التدريب (Know How Company)",
        
        // تفاصيل مشاريع التدريب
        intern1_title: "Social Media Analytics Dashboard",
        intern1_desc: "نظام ويب لتحليل بيانات الحملات التسويقية عبر منصات التواصل الاجتماعي. يعرض مؤشرات الأداء مثل النقرات والمشاهدات عبر رسوم بيانية تفاعلية.",
        intern2_title: "Opportunity Management Dashboard",
        intern2_desc: "نظام لإدارة وتحليل الفرص والمنافسات، يحتوي على لوحة إحصائيات رئيسية وصفحة تقارير بجداول قابلة للبحث والتصفية.",
        
        contact_title: "تواصل معي",
        
        // [الجديد]: نص الزر باللغة العربية
        view_project: "عرض المشروع"
    },
    en: {
        cv: "Resume",
        lang: "العربية",
        welcome: "Welcome To My Portfolio Website",
        about_title: "About Me",
        about_text: "I am Njoud Alali, a Computer Science graduate from Saudi Electronic University, interested in web development and UI/UX design. I strive to build digital sites and applications that combine modern design with ease of use. <br><br> During my university studies, I worked on several projects in developing interactive websites, designing modern user interfaces, in addition to projects based on databases and data analysis, which contributed to developing my technical and practical skills. <br><br> I also interned at Know How Company in the project management department for digital marketing and media, where I participated in developing a dashboard to display and analyze marketing campaign data, and building a system to manage opportunities and organize data in an interactive and easy-to-use way. This experience gave me practical experience in developing digital systems, data analysis, and applying technical solutions in a professional work environment.",
        skills_title: "Skills",
        skill_uiux: "UI/UX Design",
        skill_responsive: "Responsive Design",
        skill_office: "Microsoft Office",
        
        proj_title: "Projects",
        acad_title: "Academic Projects",
        
        // تفاصيل المشاريع الأكاديمية بالإنجليزي
        proj1_title: "Cherry Blossom Webpage",
        proj1_desc: "A simple webpage displaying a cherry blossom image with a calm design and pink background, containing a title, content, and an image with an external link.",
        proj2_title: "Android App – Lifecycle Display",
        proj2_desc: "An Android application that demonstrates the Activity lifecycle by displaying messages for each stage using Toast, with a simple interface containing an introductory text.",
        proj3_title: "Android App – Profile Layout",
        proj3_desc: "An Android application that displays a personal profile page containing name, email, and an interactive button using ConstraintLayout.",
        
        intern_title: "Internship Projects (Know How Company)",
        
        // تفاصيل مشاريع التدريب بالإنجليزي
        intern1_title: "Social Media Analytics Dashboard",
        intern1_desc: "A web system to analyze marketing campaign data across social media platforms. It displays key performance indicators like clicks and views via interactive charts.",
        intern2_title: "Opportunity Management Dashboard",
        intern2_desc: "A system for managing and analyzing opportunities and competitions, featuring a main statistics dashboard and a reports page with searchable and filterable tables.",
        
        contact_title: "Contact Me",
        
        // [الجديد]: نص الزر باللغة الإنجليزية
        view_project: "View Project"
    }
};

let currentLang = 'ar';
let typewriterTimeout; // لتخزين توقيت الكتابة وإعادة تشغيله بسلاسة عند تحويل اللغة

// وظيفة تبديل اللغة الكاملة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const data = translations[currentLang];
    
    // تغيير اتجاه الموقع (RTL أو LTR)
    document.getElementById('main-html').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('main-html').lang = currentLang;
    
    // تحديث النصوص في الواجهة
    document.getElementById('lang-toggle').innerText = data.lang;
    document.getElementById('btn-cv-nav').innerText = data.cv;
    document.getElementById('about-title').innerText = data.about_title;
    document.getElementById('about-text').innerHTML = data.about_text;
    document.getElementById('skills-main-title').innerText = data.skills_title;
    
    // تحديث المهارات المعينة
    document.getElementById('skill-uiux').innerText = data.skill_uiux;
    document.getElementById('skill-responsive').innerText = data.skill_responsive;
    document.getElementById('skill-office').innerText = data.skill_office;

    // تحديث عناوين وتفاصيل المشاريع
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
    
    // [الجديد]: أسطر ترجمة أزرار الروابط المضافة هنا
    document.getElementById('intern1-link').innerHTML = `${data.view_project} <i class="fas fa-external-link-alt"></i>`;
    document.getElementById('intern2-link').innerHTML = `${data.view_project} <i class="fas fa-external-link-alt"></i>`;

    document.getElementById('contact-title').innerText = data.contact_title;

    // إعادة تشغيل تأثير الكتابة باللغة الجديدة
    clearTimeout(typewriterTimeout);
    startTypewriter();
}

// دالة بدء وإعادة بناء تأثير الكتابة التلقائية
function startTypewriter() {
    const txt = translations[currentLang].welcome;
    document.getElementById("hero-typewriter").innerHTML = "";
    let i = 0;
    
    function type() {
        if (i < txt.length) {
            document.getElementById("hero-typewriter").innerHTML += txt.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, 800 / txt.length); // سرعة متناسبة مع طول النص
        }
    }
    type();
}

// التحكم في شاشة التحميل (Loader) وبدء الكتابة
window.onload = () => {
    // تشغيل النص الافتراضي لأول مرة باللغة العربية
    document.getElementById("hero-typewriter").innerHTML = "";
    
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                startTypewriter();
            }, 800);
        }
    }, 1500);
};

function moveSlider(btn, direction) {
    const wrapper = btn.parentElement.querySelector('.img-wrapper');
    if (direction === 1) {
        wrapper.style.transform = 'translateX(50%)'; // إزاحة للصورة الثانية
    } else {
        wrapper.style.transform = 'translateX(0%)'; // العودة للصورة الأولى
    }
}
