'use strict';
const english = {
  skip:'Skip to content', navApproach:'The approach', navTeacher:'Meet Méhdi', navPricing:'Pricing', navTrial:'Try a lesson', navFaq:'Questions',
  heroTitle:'A little curiosity.<br><span>A world of<br>understanding.</span>',
  heroDescription:'One-to-one maths and science, taught in English.<br>Space to ask questions. Time to understand.<br class="desktop-break"> Confidence to keep going.',
  heroCta:'Let’s try a lesson',heroNote:'60 minutes · ¥1,000 <span>·</span> Online, from home',heroDetail1:'01 / One-to-one',heroDetail2:'02 / In English',heroDetail3:'03 / At your pace',artNote:'Understanding builds confidence.',
  fact1:'Teaching that starts with you',fact2:'Years of teaching experience',fact3:'Maths, science & English',fact4:'Your space. Your classroom.',
  approachTitle:'Beyond the answer.<br>Into the “why”.',approachDescription:'Learning is more than remembering the right answer. It’s making connections, talking things through and feeling comfortable enough to ask another question.',
  benefit1Title:'Room to say “I don’t know.”',benefit1Text:'One teacher, one student. Time to ask questions, revisit the tricky parts and work things out together.',
  benefit2Title:'A plan that meets you here.',benefit2Text:'Lessons shaped around individual goals and understanding. Practice and regular feedback help learning build, step by step.',
  benefit3Title:'English opens the conversation.',benefit3Text:'Learn maths and science through English. Connect the language to the ideas, and practise explaining the thinking behind an answer.',
  lessonTitle:'A small moment<br>of discovery.',lessonDescription:'Start with a question. Look at the picture, think it through and explain why. Maths and English can grow together.',sampleLabel:'A little fraction practice',boardHint:'Look at the four equal parts. How many are green?',answerLegend:'Choose your answer',answerInitial:'Choose an answer to explore the thinking behind it.',tryAgain:'Try again',
  teacherPronunciation:'Your online teacher',teacherExperience:'Years of teaching experience',teacherTitle:'Teaching the subject.<br>Building the confidence.',teacherText:'Méhdi brings more than ten years of experience teaching maths, science and English. His starting point is a learning environment where students feel comfortable asking questions and thinking for themselves.',teacherText2:'An individual learning plan, regular feedback and communication with parents keep everyone involved in the learning journey.',teacherValue1:'Individual learning plans',teacherValue2:'Regular feedback',teacherValue3:'Parent communication',teacherCta:'Meet in a trial lesson',
  pricingTitle:'A small first step.<br>A clear way forward.',pricingDescription:'Get a feel for the lessons and the teacher before discussing an ongoing learning plan.',firstLesson:'For new students',trialTitle:'The trial lesson',trialDuration:'/ 60 minutes',trialDescription:'An hour to experience the teaching and see how the lessons feel.',trialFeature1:'One-to-one, online',trialFeature2:'Discuss subjects and learning goals',trialFeature3:'Explore an ongoing plan afterwards',trialCta:'Ask about a trial lesson',regularTitle:'Ongoing lessons',regularDuration:'/ hour, including tax',regularDescription:'Consistent support to deepen understanding and keep learning moving.',regularFeature1:'Standard format: 2+ lessons/week, 120 min each',regularFeature2:'An individual learning plan',regularFeature3:'Practice materials and feedback',monthlyLabel:'Monthly illustration',monthlyDetail:'For 8 lessons / 16 teaching hours',pricingNote:'Confirm your schedule, number of lessons, payment and rescheduling terms with the school before enrolling.',
  faqTitle:'A few good<br>questions.',faqNote:'Every learner is different.<br>Let’s talk about yours.',
  faq1q:'Does my child need fluent English?',faq1a:'Lessons are taught in English. Share your child’s current English level and what they are studying so you can discuss whether the lessons are a good fit before the trial.',
  faq2q:'Which ages and curricula do you support?',faq2a:'Méhdi teaches maths, science and English. Let the school know your child’s grade, curriculum and the topics they need help with. The school will confirm the appropriate subject coverage.',
  faq3q:'What do we need for an online lesson?',faq3a:'You will need an internet connection and a device that can use Zoom. Check any materials and preparation with the school before the lesson.',
  faq4q:'Can we discuss lesson times and duration?',faq4a:'The standard ongoing format is at least two lessons per week, with each lesson lasting 120 minutes. Share your preferred days, times and learning goals to discuss availability and any possible adjustments. Confirm the time zone when arranging your lesson.',
  faq5q:'What happens after the trial? What about cancellations?',faq5a:'If you would like to continue, discuss a learning plan with the school. Confirm payment, cancellation, rescheduling and the number of lessons in each month before enrolling.',
  closingTitle:'The next “I get it!”<br>starts here.',closingText:'Tell us your child’s grade, the subject they’re working on<br>and what they could use a little help with.',closingPrice:'A trial lesson · 60 minutes / ¥1,000',closingCta:'Enquire about a trial lesson',closingNote:'Opens the school’s existing enquiry form.<br>Include your preferred lesson times in your message.',footerTagline:'From understanding to confidence.<br>A little more of the world, in English.',footerHoursTitle:'School hours',footerHours:'Monday–Friday, 11:00–20:00<br>Closed Saturday & Sunday',backTop:'Back to top ↑',mobileTrialPrice:'Trial · 60 min / ¥1,000',mobileTrialCta:'Try a lesson'
};
Object.assign(english, {
  "previewBanner": "Website preview · enquiry delivery is not connected yet",
  "heroTitle": "Maths & science.<br><span>In English.<br>With confidence.</span>",
  "heroDescription": "For students learning in English.<br>Work through schoolwork and tricky ideas<br>with Méhdi, one to one.",
  "heroCta": "Ask about the ¥1,000 trial",
  "heroNote": "60 minutes · One-to-one <span>·</span> On Zoom, from home",
  "approachTitle": "Turn homework hurdles<br>into understanding.",
  "approachDescription": "Understand the question. Try an approach. Explain the thinking. Connect subject knowledge with the English needed to talk about it.",
  "benefit1Title": "Make sense of the question.",
  "benefit1Text": "When a student can read the problem but is unsure where to start, break it down and work through the ideas together.",
  "benefit2Title": "Go back to the sticking point.",
  "benefit2Text": "Revisit an unclear concept, practise it and adjust the learning plan around what the student understands.",
  "benefit3Title": "Explain the “why” in English.",
  "benefit3Text": "Go beyond getting the answer right. Practise putting the reasoning into words, building subject understanding and expression together.",
  "lessonDescription": "Three out of four equal parts. A small example of connecting a visual idea to its English explanation. Choose an answer, then try explaining why.",
  "sampleLabel": "An illustrative exercise · fractions and English",
  "teacherNotes": "Read Méhdi’s teaching notes",
  "faq1q": "Who are these lessons for?",
  "faq1a": "Students learning maths or science in English who would benefit from individual help with schoolwork or difficult topics. Share their grade, curriculum and current English level so subject coverage and fit can be confirmed.",
  "faq2q": "What does the ¥1,000 trial include?",
  "faq2a": "A 60-minute, one-to-one online lesson to experience the explanations and interaction with the teacher. Include the subject, topic and current difficulty in your enquiry so you can discuss what to work on.",
  "faq4q": "What does ongoing tuition cost?",
  "faq4a": "The standard rate is ¥4,000 per hour including tax. The usual format is at least two 120-minute lessons each week: ¥8,000 per lesson, or ¥64,000 for eight lessons / 16 hours. Confirm the agreed number of sessions, schedule and payment terms before enrolling.",
  "faq5q": "How can parents follow the learning?",
  "faq5a": "Parent communication and regular feedback are part of the teaching approach. Share current challenges and learning goals with Méhdi. Agree the method and frequency of updates, along with rescheduling and cancellation terms, when discussing ongoing lessons.",
  "closingTitle": "Your trial lesson<br>starts here.",
  "closingText": "Tell us your name, contact details and the subject. Adding your child’s grade and the topic they need help with makes the first conversation easier.",
  "closingPrice": "Trial lesson · 60 minutes, one-to-one / ¥1,000",
  "step1Title": "Tell us what you need",
  "step1Text": "Share the subject, grade and current challenge.",
  "step2Title": "Discuss fit and a time",
  "step2Text": "Confirm subject coverage and available lesson times.",
  "step3Title": "Try a 60-minute lesson",
  "step3Text": "Experience the teaching and see how it feels.",
  "formTitle": "Ask about a trial lesson",
  "formIntro": "* Required. Your child’s name is not needed.",
  "parentLabel": "Parent / guardian name *",
  "emailLabel": "Email address *",
  "subjectLabel": "Subject *",
  "subjectChoose": "Choose a subject",
  "subjectMaths": "Maths",
  "subjectScience": "Science",
  "subjectEnglish": "English",
  "subjectDiscuss": "Help me choose",
  "gradeLabel": "Grade / curriculum (optional)",
  "messageLabel": "Learning goal / preferred times (optional)",
  "draftTitle": "Your enquiry draft",
  "draftLabel": "Enquiry text to copy",
  "copyDraft": "Copy enquiry",
  "openEmail": "Open email app",
  "privacyLink": "Data & privacy",
  "privacyTitle": "Your enquiry and privacy",
  "privacyText": "Enquiry details are prepared in your browser. This website does not send them to a server or store them. You review and send the message in your own email app, or copy it into an email. Your email provider then handles delivery to the school. Only your language preference is saved on this device. Fonts load from Google Fonts. No marketing analytics or advertising trackers are added."
});
const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
const japanese = new Map(translatedNodes.map(node => [node, node.innerHTML]));
let currentLanguage = 'ja';
let selectedAnswer = null;
const languageButton = document.getElementById('language');
const feedback = document.getElementById('answer-feedback');
const resetButton = document.getElementById('reset-lesson');
const answerButtons = [...document.querySelectorAll('.answer')];
function renderAnswer() {
  if (!selectedAnswer) {
    feedback.innerHTML = currentLanguage === 'en' ? english.answerInitial : japanese.get(feedback);
    feedback.classList.remove('solved'); resetButton.hidden = true; return;
  }
  const correct = selectedAnswer === 'threequarters';
  feedback.classList.toggle('solved', correct);
  if (currentLanguage === 'en') feedback.textContent = correct ? 'Exactly. Three of four equal parts are shaded: three quarters. Try saying, “Three out of four parts are green.”' : 'Look once more: the whole is split into four equal parts, and three are green. How could we write that?';
  else feedback.textContent = correct ? 'その通り！同じ大きさの4つのうち、3つに色がついています。英語でも言ってみよう：“Three out of four parts are green.”' : 'もう一度見てみよう。全体は同じ大きさの4つに分かれていて、3つに色がついています。分数ではどう書けるかな？';
  resetButton.hidden = false;
}
function setLanguage(lang, persist = true) {
  currentLanguage = lang === 'en' ? 'en' : 'ja';
  document.documentElement.lang = currentLanguage;
  for (const node of translatedNodes) {
    const key = node.dataset.i18n;
    node.innerHTML = currentLanguage === 'en' ? (english[key] ?? japanese.get(node)) : japanese.get(node);
  }
  languageButton.textContent = currentLanguage === 'en' ? '日本語' : 'EN';
  languageButton.setAttribute('aria-label', currentLanguage === 'en' ? '日本語に切り替える' : 'Switch to English');
  document.getElementById('menu-toggle').setAttribute('aria-label', currentLanguage === 'en' ? 'Menu' : 'メニュー');
  document.querySelector('.hero-art').alt = currentLanguage === 'en' ? 'An editorial illustration of geometric solids, graph paper and a pencil' : '立体図形と方眼紙を組み合わせた数学のイラスト';
  document.title = currentLanguage === 'en' ? 'Méhdi’s Online School — Maths & science in English' : 'Méhdi’s Online School — 英語で学ぶ数学・理科の個別指導';
  renderAnswer();
  updateEnquiryLanguage();
  if (persist) {try {localStorage.setItem('mehdi-language',currentLanguage);} catch { /* Language works without storage. */ }}
}
languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'ja' ? 'en' : 'ja'));
for (const button of answerButtons) {
  button.addEventListener('click', () => {
    selectedAnswer = button.dataset.answer;
    for (const other of answerButtons) {
      const selected = other === button;
      other.setAttribute('aria-pressed', String(selected));
      other.classList.toggle('correct', selected && selectedAnswer === 'threequarters');
      other.classList.toggle('incorrect', selected && selectedAnswer !== 'threequarters');
    }
    renderAnswer();
  });
}
resetButton.addEventListener('click', () => {
  selectedAnswer = null;
  for (const button of answerButtons) {button.setAttribute('aria-pressed','false');button.classList.remove('correct','incorrect');}
  renderAnswer();answerButtons[0].focus();
});
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }
menuToggle.addEventListener('click', () => { const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';menuToggle.setAttribute('aria-expanded',String(expanded));mobileNav.hidden = !expanded; });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown',event => {if(event.key === 'Escape' && !mobileNav.hidden){closeMenu();menuToggle.focus();}});
window.matchMedia('(min-width:681px)').addEventListener('change', e => {if(e.matches) closeMenu();});
if ('IntersectionObserver' in window) {
  const sticky = document.querySelector('.mobile-trial');
  const observer = new IntersectionObserver(entries => {for(const entry of entries) sticky.classList.toggle('is-hidden',entry.isIntersecting);},{threshold:0.2});
  observer.observe(document.getElementById('trial'));
}
const enquiryForm = document.getElementById('enquiry-form');
const enquiryResult = document.getElementById('enquiry-result');
const enquiryDraft = document.getElementById('enquiry-draft');
const emailLink = document.getElementById('email-enquiry');
const recipientEmail = String(window.SCHOOL_CONFIG?.recipientEmail || '').trim();
const emailConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail)
  && !/(?:@|\.)(?:example|invalid|test|localhost)$|@example\.(?:com|org|net)$/i.test(recipientEmail);
let hasEnquiryDraft = false;
function enquiryText() {
  const value = id => document.getElementById(id).value.trim();
  const subject = document.getElementById('subject');
  const subjectText = subject.options[subject.selectedIndex]?.textContent || '';
  return currentLanguage === 'en'
    ? ['Hello Méhdi,','I would like to enquire about a 60-minute trial lesson (¥1,000).','',`Parent / guardian: ${value('parent-name')}`,`Reply email: ${value('parent-email')}`,`Subject: ${subjectText}`,`Grade / curriculum: ${value('grade') || 'To discuss'}`,`Learning goal / preferred times: ${value('learning-goal') || 'To discuss'}`,'','Please let me know about suitability and available lesson times.'].join('\n')
    : ['Méhdi先生','60分・1,000円の体験レッスンについて相談したいです。','',`保護者の名前：${value('parent-name')}`,`返信先：${value('parent-email')}`,`希望科目：${subjectText}`,`学年・カリキュラム：${value('grade') || '相談したいです'}`,`学習目標・希望時間：${value('learning-goal') || '相談したいです'}`,'','受講内容と空いている日時について教えてください。'].join('\n');
}
function updateEnquiryLanguage() {
  const en = currentLanguage === 'en';
  document.getElementById('preview-banner').hidden = emailConfigured;
  document.getElementById('enquiry-button-label').textContent = en ? 'Prepare my enquiry' : 'お問い合わせ内容を確認する';
  document.getElementById('delivery-note').textContent = emailConfigured
    ? (en ? `Review your draft, then send it in your email app. Nothing is sent automatically. If your email app does not open, copy the draft and email it to ${recipientEmail}.` : `内容を確認してから、メールアプリで送信します。自動送信はされません。メールアプリが開かない場合は、下書きをコピーして ${recipientEmail} 宛てに送信してください。`)
    : (en ? 'Preview only: your message can be prepared and copied here. Email delivery is not connected yet.' : 'プレビュー版です。内容の作成・コピーはできますが、メールはまだ送信されません。');
  if (hasEnquiryDraft) {
    enquiryDraft.value = enquiryText();
    document.getElementById('enquiry-status').textContent = emailConfigured
      ? (en ? 'Your draft is ready. Review it and open your email app to send. Nothing has been sent yet.' : '下書きができました。内容を確認し、メールアプリから送信してください。まだ送信されていません。')
      : (en ? 'Your draft is ready. Nothing has been sent: the school’s email address still needs to be connected.' : '下書きができました。送信先メールアドレスが未設定のため、まだ送信されていません。');
    emailLink.hidden = !emailConfigured;
    if (emailConfigured) emailLink.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(en ? 'Trial lesson enquiry — Méhdi’s Online School' : '体験レッスンのお問い合わせ')}&body=${encodeURIComponent(enquiryDraft.value)}`;
    else emailLink.removeAttribute('href');
  }
  document.getElementById('copy-status').textContent = '';
}
document.getElementById('prepare-enquiry').disabled = false;
enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  hasEnquiryDraft = true;
  enquiryResult.hidden = false;
  updateEnquiryLanguage();
  enquiryDraft.focus();
});
enquiryForm.addEventListener('input', () => {if(hasEnquiryDraft) updateEnquiryLanguage();});
document.getElementById('copy-enquiry').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(enquiryDraft.value);
    status.textContent = currentLanguage === 'en' ? 'Copied. Nothing has been sent.' : 'コピーしました。まだ送信されていません。';
  } catch {
    enquiryDraft.focus();enquiryDraft.select();
    status.textContent = currentLanguage === 'en' ? 'Select and copy the draft above.' : '上の下書きを選択してコピーしてください。';
  }
});
const privacyDialog = document.getElementById('privacy-dialog');
document.getElementById('privacy-open').addEventListener('click',()=>privacyDialog.showModal());
document.getElementById('privacy-close').addEventListener('click',()=>privacyDialog.close());
privacyDialog.addEventListener('click', event => {
  if(event.target !== privacyDialog) return;
  const r = privacyDialog.getBoundingClientRect();
  if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) privacyDialog.close();
});

document.getElementById('year').textContent = String(new Date().getFullYear());
let preferred = 'ja';
try {preferred = localStorage.getItem('mehdi-language') || 'ja';} catch { /* Default Japanese. */ }
const queryLanguage = new URLSearchParams(location.search).get('lang');
if (queryLanguage === 'en' || queryLanguage === 'ja') preferred = queryLanguage;
setLanguage(preferred,false);
