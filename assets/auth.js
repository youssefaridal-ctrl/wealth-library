/* ===== نظام حسابات محلي (بدون خادم) — مكتبة المال والثروة =====
   تنبيه: هذا تخزين محلي في متصفحك فقط (localStorage)، وليس نظام مصادقة آمن حقيقي.
   لا تستخدم كلمة مرور تستخدمها في مواقع أخرى. */
(function(){
  var WL = window.WL = window.WL || {};

  WL.BOOKS = [
{id:1,title:"الأب الغني والأب الفقير",author:"روبرت كيوساكي",href:"books/book-01.html"},
{id:2,title:"فكّر تصبح ثرياً",author:"نابليون هيل",href:"books/book-02.html"},
{id:3,title:"أغنى رجل في بابل",author:"جورج س. كلاسون",href:"books/book-03.html"},
{id:4,title:"الرباعية النقدية",author:"روبرت كيوساكي",href:"books/book-04.html"},
{id:5,title:"أسرار عقل المليونير",author:"تي. هارف إيكر",href:"books/book-05.html"},
{id:6,title:"الجار المليونير",author:"توماس ستانلي ووليام دانكو",href:"books/book-06.html"},
{id:7,title:"عقل المليونير",author:"توماس ستانلي",href:"books/book-07.html"},
{id:8,title:"علم الثراء",author:"والاس د. واتلز",href:"books/book-08.html"},
{id:9,title:"سحر التفكير بشكل أكبر",author:"ديفيد شوارتز",href:"books/book-09.html"},
{id:10,title:"كيف يفكر الأغنياء",author:"ستيف سيبولد",href:"books/book-10.html"},
{id:11,title:"الطريق السريع للمليونير",author:"إم. جيه. ديماركو",href:"books/book-11.html"},
{id:12,title:"تقويم نافال رافيكانت",author:"إريك جورجنسون",href:"books/book-12.html"},
{id:13,title:"مُت وأنت تملك صفراً",author:"بيل بيركنز",href:"books/book-13.html"},
{id:14,title:"كما يفكّر الإنسان",author:"جيمس ألين",href:"books/book-14.html"},
{id:15,title:"علم نفس المال",author:"مورغان هاوزل",href:"books/book-15.html"},
{id:16,title:"كما هي الحال دائماً",author:"مورغان هاوزل",href:"books/book-16.html"},
{id:17,title:"التفكير بسرعة وببطء",author:"دانيال كانمان",href:"books/book-17.html"},
{id:18,title:"لاعقلانيون بامتياز",author:"دان أريلي",href:"books/book-18.html"},
{id:19,title:"الوكزة",author:"ريتشارد ثالر وكاس سانستين",href:"books/book-19.html"},
{id:20,title:"سوء التصرف",author:"ريتشارد ثالر",href:"books/book-20.html"},
{id:21,title:"مالك وعقلك",author:"جيسون زويغ",href:"books/book-21.html"},
{id:22,title:"المستثمر السلوكي",author:"دانيال كروسبي",href:"books/book-22.html"},
{id:23,title:"دولارات ومنطق",author:"دان أريلي وجيف كريسلر",href:"books/book-23.html"},
{id:24,title:"لماذا يرتكب الأذكياء أخطاء مالية كبيرة",author:"غاري بلسكي وتوماس غيلوفيتش",href:"books/book-24.html"},
{id:25,title:"المستثمر الذكي",author:"بنجامين غراهام",href:"books/book-25.html"},
{id:26,title:"تحليل الأوراق المالية",author:"بنجامين غراهام وديفيد دود",href:"books/book-26.html"},
{id:27,title:"الأسهم العادية والأرباح غير العادية",author:"فيليب فيشر",href:"books/book-27.html"},
{id:28,title:"نزهة عشوائية في وول ستريت",author:"بيرتون مالكيل",href:"books/book-28.html"},
{id:29,title:"التفوق في وول ستريت",author:"بيتر لينش",href:"books/book-29.html"},
{id:30,title:"التغلب على وول ستريت",author:"بيتر لينش",href:"books/book-30.html"},
{id:31,title:"الكتاب الصغير للاستثمار الرشيد",author:"جون بوغل",href:"books/book-31.html"},
{id:32,title:"الكتاب الصغير الذي يتفوق على السوق",author:"جويل غرينبلات",href:"books/book-32.html"},
{id:33,title:"مقالات وارن بافيت",author:"وارن بافيت ولورانس كننغهام",href:"books/book-33.html"},
{id:34,title:"الشيء الأهم",author:"هوارد ماركس",href:"books/book-34.html"},
{id:35,title:"إتقان دورة السوق",author:"هوارد ماركس",href:"books/book-35.html"},
{id:36,title:"طريقة وارن بافيت",author:"روبرت هاغستروم",href:"books/book-36.html"},
{id:37,title:"تقويم تشارلي الفقير",author:"تشارلي مونغر",href:"books/book-37.html"},
{id:38,title:"الركائز الأربع للاستثمار",author:"وليام برنستين",href:"books/book-38.html"},
{id:39,title:"مستثمر الداندو",author:"موهنيش بابراي",href:"books/book-39.html"},
{id:40,title:"ذكريات مضارب في الأسهم",author:"إدوين لوفيفر",href:"books/book-40.html"},
{id:41,title:"سأعلّمك كيف تصبح ثرياً",author:"راميت سيثي",href:"books/book-41.html"},
{id:42,title:"مالك أو حياتك",author:"فيكي روبن وجو دومينغيز",href:"books/book-42.html"},
{id:43,title:"التحوّل المالي الشامل",author:"ديف رامزي",href:"books/book-43.html"},
{id:44,title:"المليونير التلقائي",author:"ديفيد باخ",href:"books/book-44.html"},
{id:45,title:"عامل اللاتيه",author:"ديفيد باخ",href:"books/book-45.html"},
{id:46,title:"المستثمر الحافي",author:"سكوت بايب",href:"books/book-46.html"},
{id:47,title:"خطة مالية في صفحة واحدة",author:"كارل ريتشاردز",href:"books/book-47.html"},
{id:48,title:"جيل الألفية المفلس",author:"إيرين لوري",href:"books/book-48.html"},
{id:49,title:"الحلاق الثري",author:"ديفيد تشيلتون",href:"books/book-49.html"},
{id:50,title:"المال: إتقان اللعبة",author:"توني روبنز",href:"books/book-50.html"},
{id:51,title:"لا يتزعزع",author:"توني روبنز",href:"books/book-51.html"},
{id:52,title:"كن بارعاً مع المال",author:"تيفاني أليش",href:"books/book-52.html"},
{id:53,title:"الطريق البسيط إلى الثروة",author:"جيه. إل. كولينز",href:"books/book-53.html"},
{id:54,title:"الحرية المالية",author:"غرانت ساباتييه",href:"books/book-54.html"},
{id:55,title:"استقِل كمليونير",author:"كريستي شين وبرايس ليونغ",href:"books/book-55.html"},
{id:56,title:"التقاعد المبكر المتطرف",author:"جاكوب لوند فيسكر",href:"books/book-56.html"},
{id:57,title:"أسبوع عمل من 4 ساعات",author:"تيموثي فيريس",href:"books/book-57.html"},
{id:58,title:"اللعب بالنار FIRE",author:"سكوت ريكنز",href:"books/book-58.html"},
{id:59,title:"تقاعد شاباً وثرياً",author:"روبرت كيوساكي",href:"books/book-59.html"},
{id:60,title:"جاهز للحياة",author:"سكوت ترينش",href:"books/book-60.html"},
{id:61,title:"وهم ريادة الأعمال",author:"مايكل غيربر",href:"books/book-61.html"},
{id:62,title:"من صفر إلى واحد",author:"بيتر ثيل",href:"books/book-62.html"},
{id:63,title:"الشركة الناشئة المرنة",author:"إريك ريس",href:"books/book-63.html"},
{id:64,title:"مشروع المئة دولار",author:"كريس غيلبو",href:"books/book-64.html"},
{id:65,title:"إعادة العمل",author:"جيسون فرايد ود. هانسون",href:"books/book-65.html"},
{id:66,title:"ماجستير إدارة الأعمال الشخصي",author:"جوش كوفمان",href:"books/book-66.html"},
{id:67,title:"الربح أولاً",author:"مايك ميكالوفيتش",href:"books/book-67.html"},
{id:68,title:"من جيد إلى عظيم",author:"جيم كولينز",href:"books/book-68.html"},
{id:69,title:"الصعب في الأمور الصعبة",author:"بن هوروفيتز",href:"books/book-69.html"},
{id:70,title:"صانع الأحذية",author:"فيل نايت",href:"books/book-70.html"},
{id:71,title:"عروض المئة مليون دولار",author:"أليكس هورموزي",href:"books/book-71.html"},
{id:72,title:"عملاء المئة مليون دولار",author:"أليكس هورموزي",href:"books/book-72.html"},
{id:73,title:"شركة من شخص واحد",author:"بول جارفيس",href:"books/book-73.html"},
{id:74,title:"عطلة المليون دولار",author:"نواه كاغان",href:"books/book-74.html"},
{id:75,title:"الاستثمار في العقارات المؤجّرة",author:"براندون تيرنر",href:"books/book-75.html"},
{id:76,title:"مستثمر العقارات المليونير",author:"غاري كيلر",href:"books/book-76.html"},
{id:77,title:"أبجديات الاستثمار العقاري",author:"كين ماكلروي",href:"books/book-77.html"},
{id:78,title:"استراتيجية BRRRR",author:"ديفيد غرين",href:"books/book-78.html"},
{id:79,title:"الاستثمار العقاري بمالٍ قليل",author:"براندون تيرنر",href:"books/book-79.html"},
{id:80,title:"ما يجب أن يعرفه كل مستثمر عقاري عن التدفق النقدي",author:"فرانك غالينيلي",href:"books/book-80.html"},
{id:81,title:"ثروة الأمم",author:"آدم سميث",href:"books/book-81.html"},
{id:82,title:"الاقتصاد في درس واحد",author:"هنري هازليت",href:"books/book-82.html"},
{id:83,title:"صعود المال",author:"نيال فيرغسون",href:"books/book-83.html"},
{id:84,title:"البجعة السوداء",author:"نسيم نيكولاس طالب",href:"books/book-84.html"},
{id:85,title:"مخدوعون بالعشوائية",author:"نسيم نيكولاس طالب",href:"books/book-85.html"},
{id:86,title:"ضد الهشاشة",author:"نسيم نيكولاس طالب",href:"books/book-86.html"},
{id:87,title:"جلدك في اللعبة",author:"نسيم نيكولاس طالب",href:"books/book-87.html"},
{id:88,title:"الانكشاف الكبير",author:"مايكل لويس",href:"books/book-88.html"},
{id:89,title:"بوكر الكذّابين",author:"مايكل لويس",href:"books/book-89.html"},
{id:90,title:"عندما فشل العباقرة",author:"روجر لوينشتاين",href:"books/book-90.html"},
{id:91,title:"العادات الذرّية",author:"جيمس كلير",href:"books/book-91.html"},
{id:92,title:"الأثر المركّب",author:"دارين هاردي",href:"books/book-92.html"},
{id:93,title:"الميزة الطفيفة",author:"جيف أولسون",href:"books/book-93.html"},
{id:94,title:"العمل العميق",author:"كال نيوبورت",href:"books/book-94.html"},
{id:95,title:"بارع حتى لا يمكن تجاهلك",author:"كال نيوبورت",href:"books/book-95.html"},
{id:96,title:"كيف تكسب الأصدقاء وتؤثر في الناس",author:"ديل كارنيغي",href:"books/book-96.html"},
{id:97,title:"التأثير: سيكولوجية الإقناع",author:"روبرت سيالديني",href:"books/book-97.html"},
{id:98,title:"لا تقسم الفرق أبداً",author:"كريس فوس",href:"books/book-98.html"},
{id:99,title:"سيكولوجية البيع",author:"برايان تريسي",href:"books/book-99.html"},
{id:100,title:"العادات السبع للناس الأكثر فعالية",author:"ستيفن كوفي",href:"books/book-100.html"}
  ];

  var USERS_KEY = "wl_users";
  var SESSION_KEY = "wl_session";

  function getUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }catch(e){ return {}; } }
  function saveUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
  function hash(s){ var h=0; for(var i=0;i<s.length;i++){ h=(h*31 + s.charCodeAt(i))|0; } return "h"+h; }

  WL.currentUser = function(){ return localStorage.getItem(SESSION_KEY) || null; };

  WL.register = function(username, password){
    username = (username||"").trim();
    if(!username || !password) return {ok:false, msg:"الرجاء إدخال اسم المستخدم وكلمة المرور"};
    if(password.length < 4) return {ok:false, msg:"كلمة المرور قصيرة جداً (4 أحرف على الأقل)"};
    var users = getUsers();
    if(users[username]) return {ok:false, msg:"اسم المستخدم مستخدم بالفعل"};
    users[username] = { pass: hash(password), createdAt: Date.now() };
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, username);
    return {ok:true};
  };

  WL.login = function(username, password){
    username = (username||"").trim();
    var users = getUsers();
    var u = users[username];
    if(!u || u.pass !== hash(password)) return {ok:false, msg:"اسم المستخدم أو كلمة المرور غير صحيحة"};
    localStorage.setItem(SESSION_KEY, username);
    return {ok:true};
  };

  WL.logout = function(){ localStorage.removeItem(SESSION_KEY); };

  function progressKey(user){ return "wl_progress_" + user; }

  WL.getProgress = function(){
    var user = WL.currentUser();
    if(!user) return {};
    try{ return JSON.parse(localStorage.getItem(progressKey(user))) || {}; }catch(e){ return {}; }
  };

  WL.setBookStatus = function(bookId, status){
    var user = WL.currentUser();
    if(!user) return false;
    var p = WL.getProgress();
    if(status === null){ delete p[bookId]; }
    else { p[bookId] = { status: status, updatedAt: Date.now() }; }
    localStorage.setItem(progressKey(user), JSON.stringify(p));
    return true;
  };

  WL.stats = function(){
    var p = WL.getProgress();
    var done=0, reading=0;
    Object.keys(p).forEach(function(k){ if(p[k].status==='done') done++; else if(p[k].status==='reading') reading++; });
    return {done:done, reading:reading, total:WL.BOOKS.length};
  };

  /* ===== رسم واجهة الحساب في شريط التنقّل ===== */
  function renderAuthSlot(){
    var slot = document.getElementById('authSlot');
    if(!slot) return;
    var user = WL.currentUser();
    var root = (document.body.getAttribute('data-root') || '');
    if(user){
      slot.innerHTML =
        '<a href="'+root+'myreads.html" class="auth-link">قراءاتي</a>' +
        '<span class="auth-user">'+user+'</span>' +
        '<button type="button" class="auth-logout" id="wlLogoutBtn">خروج</button>';
      var btn = document.getElementById('wlLogoutBtn');
      if(btn) btn.addEventListener('click', function(){ WL.logout(); location.reload(); });
    } else {
      slot.innerHTML = '<a href="'+root+'account.html" class="auth-link auth-cta">تسجيل الدخول</a>';
    }
  }

  function renderReadStatus(){
    var el = document.getElementById('readStatus');
    if(!el) return;
    var id = el.getAttribute('data-book-id');
    var root = (document.body.getAttribute('data-root') || '');
    if(!WL.currentUser()){
      el.innerHTML = '<a href="'+root+'account.html" class="auth-link">سجّل الدخول لمتابعة قراءتك</a>';
      return;
    }
    var p = WL.getProgress();
    var st = p[id] ? p[id].status : null;
    el.innerHTML =
      '<button type="button" data-st="reading" class="'+(st==='reading'?'active':'')+'">قيد القراءة</button>' +
      '<button type="button" data-st="done" class="'+(st==='done'?'active':'')+'">أنهيت القراءة ✓</button>';
    Array.prototype.forEach.call(el.querySelectorAll('button'), function(b){
      b.addEventListener('click', function(){
        var newSt = b.getAttribute('data-st');
        WL.setBookStatus(id, st === newSt ? null : newSt);
        renderReadStatus();
      });
    });
  }

  /* ===== قائمة الجوال (همبرغر) ===== */
  function setupMobileNav(){
    var wrap = document.querySelector('.topnav .wrap');
    var links = document.querySelector('.topnav .nav-links');
    if(!wrap || !links || wrap.querySelector('.nav-toggle')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'فتح القائمة');
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.addEventListener('click', function(){
      links.classList.toggle('open');
      btn.classList.toggle('active');
    });
    wrap.insertBefore(btn, links);
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('open');
        btn.classList.remove('active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderAuthSlot();
    renderReadStatus();
    setupMobileNav();
  });
})();
