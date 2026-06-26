/* ============================================================
   AQ-50 — Application Logic
   ============================================================ */

// ─── Question Data ───────────────────────────────────────────
const questions = [
  { id: 1,  text: "I prefer to do things with others rather than on my own", category: "social" },
  { id: 2,  text: "I prefer to do things the same way over and over again", category: "switching" },
  { id: 3,  text: "If I try to imagine something, I find it very easy to create a picture in my mind", category: "imagination" },
  { id: 4,  text: "I frequently get so strongly absorbed in one thing that I lose sight of other things", category: "switching" },
  { id: 5,  text: "I often notice small sounds when others do not", category: "detail" },
  { id: 6,  text: "I usually notice car number plates or similar strings of information", category: "detail" },
  { id: 7,  text: "Other people frequently tell me that what I've said is impolite, even though I think it is polite", category: "communication" },
  { id: 8,  text: "When I'm reading a story, I can easily imagine what the characters might look like", category: "imagination" },
  { id: 9,  text: "I am fascinated by dates", category: "detail" },
  { id: 10, text: "In a social group, I can easily keep track of several different people's conversations", category: "switching" },
  { id: 11, text: "I find social situations easy", category: "social" },
  { id: 12, text: "I tend to notice details that others do not", category: "detail" },
  { id: 13, text: "I would rather go to a library than a party", category: "social" },
  { id: 14, text: "I find making up stories easy", category: "imagination" },
  { id: 15, text: "I find myself drawn more strongly to people than to things", category: "social" },
  { id: 16, text: "I tend to have very strong interests which I get upset about if I can't pursue", category: "switching" },
  { id: 17, text: "I enjoy social chit-chat", category: "communication" },
  { id: 18, text: "When I talk, it isn't always easy for others to get a word in edgeways", category: "communication" },
  { id: 19, text: "I am fascinated by numbers", category: "detail" },
  { id: 20, text: "When I'm reading a story, I find it difficult to work out the characters' intentions", category: "imagination" },
  { id: 21, text: "I don't particularly enjoy reading fiction", category: "imagination" },
  { id: 22, text: "I find it hard to make new friends", category: "social" },
  { id: 23, text: "I notice patterns in things all the time", category: "detail" },
  { id: 24, text: "I would rather go to the theatre than a museum", category: "imagination" },
  { id: 25, text: "It does not upset me if my daily routine is disturbed", category: "switching" },
  { id: 26, text: "I frequently find that I don't know how to keep a conversation going", category: "communication" },
  { id: 27, text: "I find it easy to 'read between the lines' when someone is talking to me", category: "communication" },
  { id: 28, text: "I usually concentrate more on the whole picture, rather than the small details", category: "detail" },
  { id: 29, text: "I am not very good at remembering phone numbers", category: "detail" },
  { id: 30, text: "I don't usually notice small changes in a situation, or a person's appearance", category: "detail" },
  { id: 31, text: "I know how to tell if someone listening to me is getting bored", category: "communication" },
  { id: 32, text: "I find it easy to do more than one thing at a time", category: "switching" },
  { id: 33, text: "When I talk on the phone, I'm not sure when it's my turn to speak", category: "communication" },
  { id: 34, text: "I enjoy doing things spontaneously", category: "switching" },
  { id: 35, text: "I am often the last to understand the point of a joke", category: "communication" },
  { id: 36, text: "I find it easy to work out what someone is thinking or feeling just by looking at their face", category: "social" },
  { id: 37, text: "If there is an interruption, I can switch back to what I was doing very quickly", category: "switching" },
  { id: 38, text: "I am good at social chit-chat", category: "communication" },
  { id: 39, text: "People often tell me that I keep going on and on about the same thing", category: "communication" },
  { id: 40, text: "When I was young, I used to enjoy playing games involving pretending with other children", category: "imagination" },
  { id: 41, text: "I like to collect information about categories of things (e.g. types of cars, birds, trains, plants, etc.)", category: "imagination" },
  { id: 42, text: "I find it difficult to imagine what it would be like to be someone else", category: "imagination" },
  { id: 43, text: "I like to plan any activities I participate in carefully", category: "switching" },
  { id: 44, text: "I enjoy social occasions", category: "social" },
  { id: 45, text: "I find it difficult to work out people's intentions", category: "social" },
  { id: 46, text: "New situations make me anxious", category: "social" },
  { id: 47, text: "I enjoy meeting new people", category: "social" },
  { id: 48, text: "I am a good diplomat", category: "social" },
  { id: 49, text: "I am not very good at remembering people's dates of birth", category: "detail" },
  { id: 50, text: "I find it very easy to play games with children that involve pretending", category: "imagination" },
];

// Items where "Definitely Agree" or "Slightly Agree" scores 1 point
const agreeScoreItems = new Set([
  2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46
]);

// Category metadata
const categories = {
  social:        { label: "Social Skills",       color: "#ec4899" },
  switching:     { label: "Attention Switching",  color: "#f59e0b" },
  detail:        { label: "Attention to Detail",  color: "#06b6d4" },
  communication: { label: "Communication",        color: "#7c3aed" },
  imagination:   { label: "Imagination",          color: "#10b981" },
};

const categoryOrder = ["social", "switching", "detail", "communication", "imagination"];

// ─── Translation Data ─────────────────────────────────────────
const i18n = {
  en: {
    title: "AQ-50 | Autism Spectrum Quotient Test",
    "landing-title-1": "Autism Spectrum",
    "landing-title-2": "Quotient Test",
    "landing-subtitle": "A self-assessment screening questionnaire developed by Simon Baron-Cohen and colleagues at the Autism Research Centre, University of Cambridge.",
    "pill-questions": "50 Questions",
    "pill-domains": "5 Domains",
    "landing-details-title": "The AQ measures autistic traits across five areas:",
    "btn-begin": "Begin Assessment",
    "disclaimer-landing": "⚠️ This is a screening tool only — not a clinical diagnosis. Consult a qualified professional for formal assessment.",
    "progress-percent": "{percent}% answered",
    "btn-prev": "Previous",
    "btn-next": "Next",
    "btn-submit": "View Results",
    "answer-1": "Definitely Agree",
    "answer-2": "Slightly Agree",
    "answer-3": "Slightly Disagree",
    "answer-4": "Definitely Disagree",
    "results-title": "Your Results",
    "results-breakdown": "Domain Breakdown",
    "results-subscale": "Subscale Scores",
    "results-guide-title": "Score Interpretation Guide",
    "results-ref-title": "Reference",
    "results-disclaimer-small": "This questionnaire is a screening instrument only. It is not intended to provide a clinical diagnosis. A high score does not mean you have autism — only a qualified professional can make that determination. If you are experiencing distress, please seek support from a licensed clinician.",
    "btn-retake": "Retake Test",
    "range-low": "Low — Few autistic traits",
    "range-average": "Average — Within typical range (mean ≈ 16.4)",
    "range-above": "Above Average — Elevated autistic traits",
    "range-borderline": "Borderline — Consider professional assessment",
    "range-significant": "Significant — Clinically significant autistic traits",
    "cat-social": "Social Skills",
    "cat-switching": "Attention Switching",
    "cat-detail": "Attention to Detail",
    "cat-communication": "Communication",
    "cat-imagination": "Imagination",
    "interp-low-label": "Low",
    "interp-low-text": "Your score suggests few autistic traits. This is well within the typical range observed in the general population.",
    "interp-average-label": "Average",
    "interp-average-text": "Your score falls within the average range (population mean ≈ 16.4). Most people in the general population score in this range.",
    "interp-above-label": "Above Average",
    "interp-above-text": "Your score is above the population average, indicating somewhat elevated autistic traits. This alone is not indicative of a diagnosis.",
    "interp-borderline-label": "Borderline",
    "interp-borderline-text": "Your score falls in the borderline range. If you experience distress related to these traits, consider seeking a professional assessment.",
    "interp-significant-label": "Clinically Significant",
    "interp-significant-text": "Your score of 32 or above indicates clinically significant levels of autistic traits. 80% of individuals diagnosed with ASD score in this range. Consider consulting a qualified professional for further evaluation.",
    "q-1": "I prefer to do things with others rather than on my own",
    "q-2": "I prefer to do things the same way over and over again",
    "q-3": "If I try to imagine something, I find it very easy to create a picture in my mind",
    "q-4": "I frequently get so strongly absorbed in one thing that I lose sight of other things",
    "q-5": "I often notice small sounds when others do not",
    "q-6": "I usually notice car number plates or similar strings of information",
    "q-7": "Other people frequently tell me that what I've said is impolite, even though I think it is polite",
    "q-8": "When I'm reading a story, I can easily imagine what the characters might look like",
    "q-9": "I am fascinated by dates",
    "q-10": "In a social group, I can easily keep track of several different people's conversations",
    "q-11": "I find social situations easy",
    "q-12": "I tend to notice details that others do not",
    "q-13": "I would rather go to a library than a party",
    "q-14": "I find making up stories easy",
    "q-15": "I find myself drawn more strongly to people than to things",
    "q-16": "I tend to have very strong interests which I get upset about if I can't pursue",
    "q-17": "I enjoy social chit-chat",
    "q-18": "When I talk, it isn't always easy for others to get a word in edgeways",
    "q-19": "I am fascinated by numbers",
    "q-20": "When I'm reading a story, I find it difficult to work out the characters' intentions",
    "q-21": "I don't particularly enjoy reading fiction",
    "q-22": "I find it hard to make new friends",
    "q-23": "I notice patterns in things all the time",
    "q-24": "I would rather go to the theatre than a museum",
    "q-25": "It does not upset me if my daily routine is disturbed",
    "q-26": "I frequently find that I don't know how to keep a conversation going",
    "q-27": "I find it easy to 'read between the lines' when someone is talking to me",
    "q-28": "I usually concentrate more on the whole picture, rather than the small details",
    "q-29": "I am not very good at remembering phone numbers",
    "q-30": "I don't usually notice small changes in a situation, or a person's appearance",
    "q-31": "I know how to tell if someone listening to me is getting bored",
    "q-32": "I find it easy to do more than one thing at a time",
    "q-33": "When I talk on the phone, I'm not sure when it's my turn to speak",
    "q-34": "I enjoy doing things spontaneously",
    "q-35": "I am often the last to understand the point of a joke",
    "q-36": "I find it easy to work out what someone is thinking or feeling just by looking at their face",
    "q-37": "If there is an interruption, I can switch back to what I was doing very quickly",
    "q-38": "I am good at social chit-chat",
    "q-39": "People often tell me that I keep going on and on about the same thing",
    "q-40": "When I was young, I used to enjoy playing games involving pretending with other children",
    "q-41": "I like to collect information about categories of things (e.g. types of cars, birds, trains, plants, etc.)",
    "q-42": "I find it difficult to imagine what it would be like to be someone else",
    "q-43": "I like to plan any activities I participate in carefully",
    "q-44": "I enjoy social occasions",
    "q-45": "I find it difficult to work out people's intentions",
    "q-46": "New situations make me anxious",
    "q-47": "I enjoy meeting new people",
    "q-48": "I am a good diplomat",
    "q-49": "I am not very good at remembering people's dates of birth",
    "q-50": "I find it very easy to play games with children that involve pretending"
  },
  vi: {
    title: "AQ-50 | Trắc Nghiệm Chỉ Số Tự Kỷ",
    "landing-title-1": "Chỉ Số Phổ",
    "landing-title-2": "Tự Kỷ (AQ-50)",
    "landing-subtitle": "Bảng câu hỏi tự đánh giá sàng lọc được phát triển bởi Simon Baron-Cohen và các cộng sự tại Trung tâm Nghiên cứu Tự kỷ, Đại học Cambridge.",
    "pill-questions": "50 Câu hỏi",
    "pill-domains": "5 Lĩnh vực",
    "landing-details-title": "AQ đo lường các đặc điểm tự kỷ qua năm lĩnh vực:",
    "btn-begin": "Bắt đầu làm bài",
    "disclaimer-landing": "⚠️ Đây chỉ là công cụ sàng lọc — không phải chẩn đoán lâm sàng. Hãy tham vấn chuyên gia có chuyên môn để đánh giá chính thức.",
    "progress-percent": "Đã trả lời {percent}%",
    "btn-prev": "Quay lại",
    "btn-next": "Tiếp theo",
    "btn-submit": "Xem kết quả",
    "answer-1": "Hoàn toàn đồng ý",
    "answer-2": "Hơi đồng ý",
    "answer-3": "Hơi không đồng ý",
    "answer-4": "Hoàn toàn không đồng ý",
    "results-title": "Kết quả của bạn",
    "results-breakdown": "Phân tích các lĩnh vực",
    "results-subscale": "Điểm số chi tiết",
    "results-guide-title": "Hướng dẫn giải thích điểm số",
    "results-ref-title": "Tài liệu tham khảo",
    "results-disclaimer-small": "Bảng câu hỏi này chỉ là công cụ sàng lọc. Nó không nhằm mục đích đưa ra chẩn đoán lâm sàng. Điểm số cao không đồng nghĩa với việc bạn bị tự kỷ — chỉ chuyên gia có chuyên môn mới có thể đưa ra kết luận đó. Nếu bạn đang gặp khó khăn hoặc căng thẳng, vui lòng tìm kiếm sự hỗ trợ từ chuyên gia lâm sàng được cấp phép.",
    "btn-retake": "Làm lại bài test",
    "range-low": "Thấp — Ít đặc điểm tự kỷ",
    "range-average": "Trung bình — Trong phạm vi bình thường (trung bình ≈ 16.4)",
    "range-above": "Trên trung bình — Có gia tăng đặc điểm tự kỷ",
    "range-borderline": "Ranh giới — Cân nhắc đánh giá chuyên môn",
    "range-significant": "Ý nghĩa lâm sàng — Các đặc điểm tự kỷ rõ rệt",
    "cat-social": "Kỹ năng xã hội",
    "cat-switching": "Chuyển đổi chú ý",
    "cat-detail": "Chú ý vào chi tiết",
    "cat-communication": "Giao tiếp",
    "cat-imagination": "Trí tưởng tượng",
    "interp-low-label": "Thấp",
    "interp-low-text": "Điểm số của bạn cho thấy rất ít đặc điểm tự kỷ. Điều này hoàn toàn nằm trong phạm vi bình thường của cộng đồng chung.",
    "interp-average-label": "Trung bình",
    "interp-average-text": "Điểm số của bạn nằm trong phạm vi trung bình (điểm trung bình cộng đồng ≈ 16.4). Hầu hết mọi người đều đạt điểm trong phạm vi này.",
    "interp-above-label": "Trên trung bình",
    "interp-above-text": "Điểm số của bạn cao hơn trung bình cộng đồng, cho thấy có phần gia tăng các đặc điểm tự kỷ. Một mình kết quả này không thể khẳng định một chẩn đoán lâm sàng.",
    "interp-borderline-label": "Ranh giới",
    "interp-borderline-text": "Điểm số của bạn nằm ở mức ranh giới. Nếu bạn gặp khó khăn liên quan đến những đặc điểm này, hãy cân nhắc tìm kiếm một đánh giá chuyên môn.",
    "interp-significant-label": "Ý nghĩa lâm sàng",
    "interp-significant-text": "Điểm số từ 32 trở lên cho thấy các đặc điểm tự kỷ có ý nghĩa lâm sàng đáng kể. 80% số người được chẩn đoán mắc Hội chứng Tự kỷ đạt điểm trong phạm vi này. Hãy cân nhắc tham vấn chuyên gia chuyên môn để đánh giá thêm.",
    "q-1": "Tôi thích làm việc cùng người khác hơn là tự làm một mình.",
    "q-2": "Tôi thích làm mọi việc lặp đi lặp lại theo cùng một cách.",
    "q-3": "Nếu tôi cố tưởng tượng điều gì đó, tôi thấy rất dễ để hình dung ra nó trong đầu.",
    "q-4": "Tôi thường quá tập trung vào một việc đến nỗi quên hết những việc xung quanh.",
    "q-5": "Tôi thường để ý thấy những âm thanh nhỏ mà người khác không nghe thấy.",
    "q-6": "Tôi thường chú ý đến biển số xe hoặc các chuỗi thông tin tương tự.",
    "q-7": "Người khác thường bảo tôi nói chuyện bất lịch sự, mặc dù tôi nghĩ mình vẫn lịch sự.",
    "q-8": "Khi đọc truyện, tôi có thể dễ dàng tưởng tượng ra diện mạo của các nhân vật.",
    "q-9": "Tôi rất thích thú với các ngày tháng/mốc thời gian.",
    "q-10": "Trong một nhóm đông người, tôi có thể dễ dàng theo dõi nhiều cuộc trò chuyện khác nhau.",
    "q-11": "Tôi thấy các tình huống giao tiếp xã hội khá dễ dàng.",
    "q-12": "Tôi thường để ý các chi tiết nhỏ mà người khác thường bỏ qua.",
    "q-13": "Tôi thà đến thư viện còn hơn là đi dự tiệc.",
    "q-14": "Tôi thấy việc bịa ra hoặc sáng tác một câu chuyện là rất dễ dàng.",
    "q-15": "Tôi thấy mình bị thu hút bởi con người nhiều hơn là đồ vật.",
    "q-16": "Tôi thường có những sở thích rất mãnh liệt và sẽ cảm thấy khó chịu nếu không được theo đuổi chúng.",
    "q-17": "Tôi thích trò chuyện tán gẫu xã giao.",
    "q-18": "Khi tôi nói, người khác thường rất khó để xen lời vào.",
    "q-19": "Tôi rất thích thú với những con số.",
    "q-20": "Khi đọc truyện, tôi thấy khó đoán được ý đồ hay suy nghĩ của nhân vật.",
    "q-21": "Tôi không đặc biệt thích đọc truyện viễn tưởng hay tiểu thuyết.",
    "q-22": "Tôi thấy khó kết bạn mới.",
    "q-23": "Tôi luôn nhận ra các quy luật hoặc khuôn mẫu trong mọi thứ.",
    "q-24": "Tôi thà đi xem kịch ở nhà hát hơn là đi bảo tàng.",
    "q-25": "Tôi không thấy khó chịu nếu lịch trình sinh hoạt hàng ngày bị thay đổi.",
    "q-26": "Tôi thường không biết làm thế nào để duy trì một cuộc trò chuyện.",
    "q-27": "Tôi thấy dễ dàng hiểu được ẩn ý của người khác khi họ nói chuyện với mình.",
    "q-28": "Tôi thường tập trung vào bức tranh toàn cảnh hơn là các chi tiết nhỏ.",
    "q-29": "Tôi nhớ số điện thoại không tốt lắm.",
    "q-30": "Tôi thường không nhận ra những thay đổi nhỏ trong một tình huống hoặc diện mạo của ai đó.",
    "q-31": "Tôi biết cách nhận ra liệu người nghe mình nói chuyện có đang cảm thấy chán hay không.",
    "q-32": "Tôi thấy dễ dàng làm nhiều việc cùng một lúc.",
    "q-33": "Khi nói chuyện điện thoại, tôi không chắc khi nào mới đến lượt mình nói.",
    "q-34": "Tôi thích làm mọi việc một cách ngẫu hứng.",
    "q-35": "Tôi thường là người cuối cùng hiểu được điểm gây cười của một câu chuyện đùa.",
    "q-36": "Tôi thấy dễ dàng biết được ai đó đang nghĩ gì hay cảm thấy thế nào chỉ bằng cách nhìn vào mặt họ.",
    "q-37": "Nếu bị gián đoạn, tôi có thể quay lại việc đang làm rất nhanh.",
    "q-38": "Tôi giỏi trò chuyện tán gẫu xã giao.",
    "q-39": "Mọi người thường bảo tôi cứ nói đi nói lại mãi về một chuyện.",
    "q-40": "Khi còn nhỏ, tôi từng thích chơi các trò chơi đóng vai giả vờ với những đứa trẻ khác.",
    "q-41": "Tôi thích thu thập thông tin về các phân loại sự vật (ví dụ: các loại xe hơi, chim chóc, tàu hỏa, thực vật, v.v.).",
    "q-42": "Tôi thấy khó hình dung được việc ở vào vị trí của người khác sẽ như thế nào.",
    "q-43": "Tôi thích lên kế hoạch cẩn thận cho bất kỳ hoạt động nào mình tham gia.",
    "q-44": "Tôi thích những buổi gặp gỡ giao lưu xã hội.",
    "q-45": "Tôi thấy khó đoán được ý đồ hay suy nghĩ của người khác.",
    "q-46": "Các tình huống mới lạ làm tôi lo lắng.",
    "q-47": "Tôi thích gặp gỡ những người mới.",
    "q-48": "Tôi là một người giao thiệp khéo léo.",
    "q-49": "Tôi nhớ ngày sinh nhật của người khác không tốt lắm.",
    "q-50": "Tôi thấy rất dễ chơi các trò chơi đóng vai giả vờ với trẻ em."
  }
};

// ─── State ───────────────────────────────────────────────────
let currentLang = 'en';
let currentIndex = 0;
let answers = {};  // { questionId: answerValue (1-4) }

// ─── DOM References ──────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screens = {
  landing: $('#landing-screen'),
  quiz: $('#quiz-screen'),
  results: $('#results-screen'),
};

const els = {
  startBtn: $('#start-btn'),
  prevBtn: $('#prev-btn'),
  nextBtn: $('#next-btn'),
  retakeBtn: $('#retake-btn'),
  progressFill: $('#progress-fill'),
  progressText: $('#progress-text'),
  progressPercent: $('#progress-percent'),
  questionContainer: $('#question-container'),
  questionNumber: $('#question-number'),
  categoryBadge: $('#category-badge'),
  questionText: $('#question-text'),
  answersContainer: $('#answers-container'),
  questionDots: $('#question-dots'),
  scoreRingFill: $('#score-ring-fill'),
  scoreNumber: $('#score-number'),
  interpretationBadge: $('#interpretation-badge'),
  interpretationText: $('#interpretation-text'),
  subscaleBars: $('#subscale-bars'),
  radarCanvas: $('#radar-chart'),
};

// ─── Localization Engine ──────────────────────────────────────
function loadLang() {
  try {
    const savedLang = localStorage.getItem('aq50_lang');
    if (savedLang === 'en' || savedLang === 'vi') {
      currentLang = savedLang;
    } else {
      // detect browser language
      const userLang = navigator.language || navigator.userLanguage;
      currentLang = userLang.startsWith('vi') ? 'vi' : 'en';
    }
  } catch (e) {
    currentLang = 'en';
  }
}

function getTranslation(key, placeholders = {}) {
  let text = i18n[currentLang][key] || i18n['en'][key] || key;
  Object.keys(placeholders).forEach(p => {
    text = text.replace(`{${p}}`, placeholders[p]);
  });
  return text;
}

function switchLang(lang) {
  if (lang !== 'en' && lang !== 'vi') return;
  currentLang = lang;
  try {
    localStorage.setItem('aq50_lang', lang);
  } catch (e) {}
  updateLanguageUI();
}

function updateLanguageUI() {
  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
  
  // Update document title
  document.title = getTranslation('title');

  // Update active state in switcher UI
  const btnEn = $('#lang-btn-en');
  const btnVi = $('#lang-btn-vi');
  if (btnEn) btnEn.classList.toggle('active', currentLang === 'en');
  if (btnVi) btnVi.classList.toggle('active', currentLang === 'vi');

  // Translate all marked elements
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key === 'btn-prev' || key === 'btn-next' || key === 'btn-retake' || key === 'btn-begin') {
      const textSpan = el.querySelector('span');
      if (textSpan) {
        textSpan.textContent = getTranslation(key);
      } else {
        el.textContent = getTranslation(key);
      }
    } else {
      el.textContent = getTranslation(key);
    }
  });

  // Update categories descriptions in landing domain tags
  $$('.domain-tag').forEach(el => {
    const domain = el.dataset.domain;
    if (domain) {
      el.textContent = getTranslation(`cat-${domain}`);
    }
  });

  // Dynamic updates if quiz screen is active
  if (screens.quiz.classList.contains('active')) {
    const q = questions[currentIndex];
    els.categoryBadge.textContent = getTranslation(`cat-${q.category}`);
    els.questionText.textContent = getTranslation(`q-${q.id}`);
    
    const answered = Object.keys(answers).length;
    const percent = Math.round((answered / questions.length) * 100);
    els.progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
    els.progressPercent.textContent = getTranslation('progress-percent', { percent });

    updateNavButtons();
  }

  // Dynamic updates if results screen is active
  if (screens.results.classList.contains('active')) {
    const { totalScore, subscaleScores } = calculateResults();
    const interp = getInterpretation(totalScore);
    
    els.interpretationBadge.textContent = getTranslation(`interp-${interp.level}-label`);
    els.interpretationText.textContent = getTranslation(`interp-${interp.level}-text`);
    
    renderSubscaleBars(subscaleScores);
    drawRadarChart(subscaleScores);
  }
}

function bindLangEvents() {
  const btnEn = $('#lang-btn-en');
  const btnVi = $('#lang-btn-vi');
  if (btnEn) btnEn.addEventListener('click', () => switchLang('en'));
  if (btnVi) btnVi.addEventListener('click', () => switchLang('vi'));
}

// ─── Initialization ──────────────────────────────────────────
function init() {
  loadLang();
  injectSVGGradient();
  buildQuestionDots();
  bindEvents();
  bindLangEvents();
  loadProgress();
  updateLanguageUI();
}

function injectSVGGradient() {
  // Add gradient definition to the SVG for the score ring
  const svg = $('.score-ring');
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff" />
      <stop offset="100%" style="stop-color:#7c3aed" />
    </linearGradient>
  `;
  svg.prepend(defs);
  els.scoreRingFill.setAttribute('stroke', 'url(#scoreGradient)');
}

function buildQuestionDots() {
  els.questionDots.innerHTML = '';
  for (let i = 0; i < questions.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'q-dot';
    dot.setAttribute('aria-label', `Go to question ${i + 1}`);
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToQuestion(i));
    els.questionDots.appendChild(dot);
  }
}

function bindEvents() {
  els.startBtn.addEventListener('click', startQuiz);
  els.prevBtn.addEventListener('click', prevQuestion);
  els.nextBtn.addEventListener('click', nextQuestion);
  els.retakeBtn.addEventListener('click', retakeTest);

  // Answer buttons
  $$('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.value)));
  });

  // Keyboard navigation
  document.addEventListener('keydown', handleKeyboard);
}

// ─── Screen Management ───────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  // Reset animation
  screens[name].style.animation = 'none';
  screens[name].offsetHeight; // Trigger reflow
  screens[name].style.animation = '';
}

// ─── Quiz Flow ───────────────────────────────────────────────
function startQuiz() {
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(direction = 'none') {
  const q = questions[currentIndex];
  const cat = categories[q.category];

  // Animate transition
  if (direction !== 'none') {
    const container = els.questionContainer;
    container.classList.add('animating-out');
    container.style.transform = direction === 'next' ? 'translateX(-40px)' : 'translateX(40px)';

    setTimeout(() => {
      updateQuestionContent(q, cat);
      container.classList.remove('animating-out');
      container.classList.add('animating-in');
      container.style.transform = direction === 'next' ? 'translateX(40px)' : 'translateX(-40px)';

      requestAnimationFrame(() => {
        container.classList.remove('animating-in');
        container.style.transform = '';
        container.style.opacity = '';
      });
    }, 180);
  } else {
    updateQuestionContent(q, cat);
  }

  updateProgress();
  updateDots();
  updateNavButtons();
  updateAnswerSelection();
  saveProgress();
}

function updateQuestionContent(q, cat) {
  els.questionNumber.textContent = String(q.id).padStart(2, '0');
  els.categoryBadge.textContent = getTranslation(`cat-${q.category}`);
  els.categoryBadge.dataset.cat = q.category;
  els.questionText.textContent = getTranslation(`q-${q.id}`);
}

function updateProgress() {
  const answered = Object.keys(answers).length;
  const percent = Math.round((answered / questions.length) * 100);
  els.progressFill.style.width = `${percent}%`;
  els.progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  els.progressPercent.textContent = getTranslation('progress-percent', { percent });
}

function updateDots() {
  const dots = $$('.q-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('current', i === currentIndex);
    dot.classList.toggle('answered', answers[questions[i].id] !== undefined);
  });
}

function updateNavButtons() {
  els.prevBtn.disabled = currentIndex === 0;

  const labelPrev = getTranslation('btn-prev');
  const labelNext = currentIndex === questions.length - 1 ? getTranslation('btn-submit') : getTranslation('btn-next');

  const prevSpan = els.prevBtn.querySelector('span');
  if (prevSpan) prevSpan.textContent = labelPrev;

  // Check if it's the last question
  if (currentIndex === questions.length - 1) {
    els.nextBtn.innerHTML = `
      <span>${labelNext}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7"/></svg>
    `;
    els.nextBtn.classList.add('submit-btn');
  } else {
    els.nextBtn.innerHTML = `
      <span>${labelNext}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    `;
    els.nextBtn.classList.remove('submit-btn');
  }
}

function updateAnswerSelection() {
  const selected = answers[questions[currentIndex].id];
  $$('.answer-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.value) === selected);
  });
}

function selectAnswer(value) {
  answers[questions[currentIndex].id] = value;
  updateAnswerSelection();
  updateProgress();
  updateDots();
  saveProgress();

  // Auto-advance after a brief delay
  if (currentIndex < questions.length - 1) {
    setTimeout(() => {
      currentIndex++;
      renderQuestion('next');
    }, 300);
  }
}

function nextQuestion() {
  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }
  currentIndex++;
  renderQuestion('next');
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion('prev');
  }
}

function goToQuestion(index) {
  const direction = index > currentIndex ? 'next' : 'prev';
  currentIndex = index;
  renderQuestion(direction);
}

// ─── Keyboard Handler ────────────────────────────────────────
function handleKeyboard(e) {
  if (!screens.quiz.classList.contains('active')) return;

  switch (e.key) {
    case '1': selectAnswer(1); break;
    case '2': selectAnswer(2); break;
    case '3': selectAnswer(3); break;
    case '4': selectAnswer(4); break;
    case 'ArrowRight':
    case 'Enter':
      e.preventDefault();
      nextQuestion();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      prevQuestion();
      break;
  }
}

// ─── Scoring ─────────────────────────────────────────────────
function calculateScore(questionId, answerValue) {
  if (answerValue === undefined) return 0;
  if (agreeScoreItems.has(questionId)) {
    // "Agree" scores: 1 (Definitely) or 2 (Slightly) → 1 point
    return (answerValue === 1 || answerValue === 2) ? 1 : 0;
  } else {
    // "Disagree" scores: 3 (Slightly) or 4 (Definitely) → 1 point
    return (answerValue === 3 || answerValue === 4) ? 1 : 0;
  }
}

function calculateResults() {
  let totalScore = 0;
  const subscaleScores = {};
  categoryOrder.forEach(cat => { subscaleScores[cat] = 0; });

  questions.forEach(q => {
    const score = calculateScore(q.id, answers[q.id]);
    totalScore += score;
    subscaleScores[q.category] += score;
  });

  return { totalScore, subscaleScores };
}

function getInterpretation(score) {
  if (score <= 10) return { level: 'low' };
  if (score <= 21) return { level: 'average' };
  if (score <= 25) return { level: 'above' };
  if (score <= 31) return { level: 'borderline' };
  return { level: 'significant' };
}

// ─── Results Display ─────────────────────────────────────────
function showResults() {
  const { totalScore, subscaleScores } = calculateResults();
  const interp = getInterpretation(totalScore);

  showScreen('results');
  clearProgress();

  // Animate score ring
  setTimeout(() => {
    const circumference = 2 * Math.PI * 88;
    const offset = circumference - (totalScore / 50) * circumference;
    els.scoreRingFill.style.strokeDashoffset = offset;
  }, 100);

  // Animate score counter
  animateCounter(els.scoreNumber, 0, totalScore, 1200);

  // Interpretation
  els.interpretationBadge.textContent = getTranslation(`interp-${interp.level}-label`);
  els.interpretationBadge.className = `interpretation-badge level-${interp.level}`;
  els.interpretationText.textContent = getTranslation(`interp-${interp.level}-text`);

  // Subscale bars
  renderSubscaleBars(subscaleScores);

  // Radar chart
  setTimeout(() => drawRadarChart(subscaleScores), 300);
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    element.textContent = current;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

function renderSubscaleBars(subscaleScores) {
  els.subscaleBars.innerHTML = '';

  categoryOrder.forEach(cat => {
    const score = subscaleScores[cat];
    const meta = categories[cat];
    const localizedLabel = getTranslation(`cat-${cat}`);

    const item = document.createElement('div');
    item.className = 'subscale-item';
    item.innerHTML = `
      <div class="subscale-header">
        <span class="subscale-name">
          <span class="subscale-dot" style="background: ${meta.color}"></span>
          ${localizedLabel}
        </span>
        <span class="subscale-score">${score} / 10</span>
      </div>
      <div class="subscale-track">
        <div class="subscale-fill" style="background: ${meta.color}"></div>
      </div>
    `;
    els.subscaleBars.appendChild(item);

    // Animate bar fill
    setTimeout(() => {
      item.querySelector('.subscale-fill').style.width = `${(score / 10) * 100}%`;
    }, 100);
  });
}

// ─── Radar Chart ─────────────────────────────────────────────
function drawRadarChart(subscaleScores) {
  const canvas = els.radarCanvas;
  const ctx = canvas.getContext('2d');

  // Hi-DPI support
  const dpr = window.devicePixelRatio || 1;
  const displaySize = 360;
  canvas.width = displaySize * dpr;
  canvas.height = displaySize * dpr;
  canvas.style.width = displaySize + 'px';
  canvas.style.height = displaySize + 'px';
  ctx.scale(dpr, dpr);

  const cx = displaySize / 2;
  const cy = displaySize / 2;
  const maxRadius = 130;
  const levels = 5;
  const sides = categoryOrder.length;
  const angleStep = (2 * Math.PI) / sides;
  const startAngle = -Math.PI / 2;

  // Clear
  ctx.clearRect(0, 0, displaySize, displaySize);

  // Grid
  for (let level = 1; level <= levels; level++) {
    const r = (level / levels) * maxRadius;
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Axes
  for (let i = 0; i < sides; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + maxRadius * Math.cos(angle), cy + maxRadius * Math.sin(angle));
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.05)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Data polygon
  const scores = categoryOrder.map(cat => subscaleScores[cat]);
  const points = scores.map((score, i) => {
    const r = (score / 10) * maxRadius;
    const angle = startAngle + i * angleStep;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  // Fill
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();

  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
  gradient.addColorStop(0, 'rgba(2, 132, 199, 0.18)');
  gradient.addColorStop(1, 'rgba(124, 58, 237, 0.05)');
  ctx.fillStyle = gradient;
  ctx.fill();

  // Stroke
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();
  ctx.strokeStyle = 'rgba(2, 132, 199, 0.6)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Data points
  points.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = categories[categoryOrder[i]].color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Labels
  ctx.font = '600 11px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  categoryOrder.forEach((cat, i) => {
    const angle = startAngle + i * angleStep;
    const labelR = maxRadius + 30;
    let x = cx + labelR * Math.cos(angle);
    let y = cy + labelR * Math.sin(angle);

    ctx.fillStyle = categories[cat].color;
    ctx.fillText(getTranslation(`cat-${cat}`), x, y);

    // Score below label
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
    ctx.fillText(`${scores[i]}/10`, x, y + 15);
    ctx.font = '600 11px Inter, sans-serif';
  });
}

// ─── Retake ──────────────────────────────────────────────────
function retakeTest() {
  currentIndex = 0;
  answers = {};
  clearProgress();

  // Reset score ring
  els.scoreRingFill.style.strokeDashoffset = '553';
  els.scoreNumber.textContent = '0';

  showScreen('landing');
}

// ─── LocalStorage ────────────────────────────────────────────
function saveProgress() {
  try {
    localStorage.setItem('aq50_answers', JSON.stringify(answers));
    localStorage.setItem('aq50_index', currentIndex);
  } catch (e) { /* Storage not available */ }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('aq50_answers');
    const savedIndex = localStorage.getItem('aq50_index');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Convert string keys back to numbers
      Object.keys(parsed).forEach(k => {
        answers[parseInt(k)] = parsed[k];
      });
    }
    if (savedIndex) {
      currentIndex = parseInt(savedIndex);
    }
  } catch (e) { /* Storage not available */ }
}

function clearProgress() {
  try {
    localStorage.removeItem('aq50_answers');
    localStorage.removeItem('aq50_index');
  } catch (e) { /* Storage not available */ }
}

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
