const courses=[
{id:"beginner",icon:"🌱",title:"دوره مقدماتی",level:"شروع از صفر",desc:"آشنایی کاربردی با مفاهیم و ابزارهای هوش مصنوعی.",about:"برای کسانی که می‌خواهند بدون پیش‌نیاز وارد دنیای هوش مصنوعی شوند.",skills:["شناخت مفاهیم پایه AI","کار با ابزارهای کاربردی","مهندسی پرامپت مقدماتی"],sessions:"قابل تنظیم",duration:"قابل تنظیم",lessons:["آشنایی با هوش مصنوعی","شناخت ابزارهای AI","پرامپت‌نویسی مقدماتی","تمرین پروژه‌محور"]},
{id:"advanced",icon:"⚡",title:"دوره پیشرفته",level:"سطح پیشرفته",desc:"توسعه مهارت‌های پیشرفته و استفاده هدفمند از ابزارهای AI.",about:"برای هنرجویانی که با مبانی آشنا هستند و می‌خواهند سطح مهارت خود را بالاتر ببرند.",skills:["پرامپت‌نویسی پیشرفته","ترکیب ابزارهای AI","ساخت خروجی حرفه‌ای"],sessions:"قابل تنظیم",duration:"قابل تنظیم",lessons:["پرامپت‌های حرفه‌ای","Workflow با AI","تولید محتوای پیشرفته","پروژه عملی"]},
{id:"pro",icon:"👑",title:"دوره حرفه‌ای",level:"تخصصی",desc:"ساخت پروژه‌های واقعی و استفاده حرفه‌ای از هوش مصنوعی.",about:"مسیر تخصصی برای تبدیل مهارت AI به توانایی ساخت محصول و پروژه.",skills:["طراحی پروژه AI","اتوماسیون","ساخت محصول دیجیتال"],sessions:"قابل تنظیم",duration:"قابل تنظیم",lessons:["طراحی پروژه","ابزارهای حرفه‌ای","ساخت محصول","ارائه پروژه نهایی"]},
{id:"income",icon:"💰",title:"کسب درآمد با AI",level:"مهارت درآمدی",desc:"شناخت مسیرهای عملی برای تبدیل مهارت AI به فرصت‌های درآمدی.",about:"تمرکز این دوره بر ایده‌پردازی، ساخت نمونه‌کار و پیدا کردن فرصت‌های واقعی است.",skills:["ایده‌پردازی","ساخت نمونه‌کار","ارائه خدمات با AI"],sessions:"قابل تنظیم",duration:"قابل تنظیم",lessons:["مهارت‌های قابل فروش","ساخت نمونه‌کار","پیدا کردن پروژه","برندسازی و ارائه"]}];

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function card(c){return `<article class="course-card glass"><div><span class="course-icon">${c.icon}</span><div><h3>${c.title}</h3><span class="badge">${c.level}</span><p>${c.desc}</p></div></div><button class="secondary" onclick="showCourse('${c.id}')">مشاهده دوره ←</button></article>`}
function renderCourses(){$("#homeCourses").innerHTML=courses.map(card).join("");$("#allCourses").innerHTML=courses.map(card).join("")}
function showCourse(id){
 const c=courses.find(x=>x.id===id); if(!c)return;
 $("#courseDetail").innerHTML=`<div class="detail-hero glass"><span class="course-icon">${c.icon}</span><span class="eyebrow">${c.level}</span><h1>${c.title}</h1><p>${c.about}</p><div class="detail-meta"><span class="badge">جلسات: ${c.sessions}</span><span class="badge">مدت: ${c.duration}</span><span class="badge">مدرس: مهندس امیری</span></div><button class="primary" onclick="enroll('${c.id}')">ثبت‌نام / انتخاب دوره</button></div><div class="detail-section glass"><h2>مهارت‌هایی که کسب می‌کنی</h2><ul>${c.skills.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="detail-section glass"><h2>سرفصل‌های دوره</h2>${c.lessons.map((x,i)=>`<details class="accordion"><summary>جلسه ${i+1} — ${x}</summary><p class="muted">جزئیات این بخش را مدیر دوره می‌تواند در داده‌های پروژه تکمیل کند.</p></details>`).join("")}</div>`;
 navigate("course-detail");
}
function enroll(id){let saved=JSON.parse(localStorage.getItem("savedCourses")||"[]");if(!saved.includes(id))saved.push(id);localStorage.setItem("savedCourses",JSON.stringify(saved));updateProfile();toast("دوره به پروفایل شما اضافه شد.");}
function updateProfile(){let s=JSON.parse(localStorage.getItem("savedCourses")||"[]");$("#savedCount").textContent=s.length}
function navigate(route){
 $$(".page").forEach(p=>p.classList.remove("active")); const p=$("#"+route); if(p)p.classList.add("active");
 $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.route===route));
 window.scrollTo({top:0,behavior:"smooth"});
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2600)}
function openModal(title){$("#modalTitle").textContent=title;$("#modalText").value="";$("#modal").classList.add("open");$("#modalText").focus()}
function renderPath(){const data=[["۱","مقدماتی","از صفر با مفاهیم، ابزارها و اصول استفاده از AI آشنا شو."],["۲","پیشرفته","مهارت‌های حرفه‌ای‌تر در پرامپت‌نویسی و Workflow بساز."],["۳","حرفه‌ای","پروژه واقعی طراحی و با ابزارهای هوش مصنوعی اجرا کن."],["۴","کسب درآمد با AI","نمونه‌کار بساز و مهارتت را به فرصت درآمدی تبدیل کن."]];$("#timeline").innerHTML=data.map(x=>`<div class="timeline-card glass"><div class="timeline-num">${x[0]}</div><div><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`).join("")}
$$("[data-route]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.route)));
$$("[data-toast]").forEach(b=>b.addEventListener("click",()=>toast(b.dataset.toast)));
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");$("#themeBtn").textContent=document.body.classList.contains("light")?"🌙":"☀️"};
$("#messageBtn").onclick=()=>openModal("ارسال پیام به پشتیبانی");
$("#issueBtn").onclick=()=>openModal("گزارش مشکل");
$("#closeModal").onclick=()=>$("#modal").classList.remove("open");
$("#sendModal").onclick=()=>{if($("#modalText").value.trim()){ $("#modal").classList.remove("open");toast("پیام شما در نسخه نمایشی ثبت شد.");}else toast("لطفاً پیام خود را بنویسید.");};
$("#editName").onclick=()=>{const n=prompt("نام نمایشی خود را وارد کنید:",localStorage.getItem("name")||"هنرجوی پادشاه AI");if(n){localStorage.setItem("name",n);$("#profileName").textContent=n;toast("نام پروفایل به‌روزرسانی شد.")}};
function init(){renderCourses();renderPath();updateProfile();const theme=localStorage.getItem("theme");if(theme==="light"){$("body").classList.add("light");$("#themeBtn").textContent="🌙"}const n=localStorage.getItem("name");if(n)$("#profileName").textContent=n}
init();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));