/**
 * BETBONUS DEMO CONFIGURATION
 * 
 * Educational Rewards Simulation Configuration
 * All scores, balances, users, and numbers in this project are strictly simulated
 * for educational demonstration. No real deposits, wagering, payouts or withdrawals exist.
 */

const DEMO_CONFIG = {
  // Master demo mode flag (must remain true)
  DEMO_MODE: true,

  // Demo bonus claim range (in simulated BDT ৳)
  DEMO_BONUS_RANGE: {
    min: 2500,
    max: 9991,
    currencySymbol: "৳",
    currencyCode: "BDT",
    step: 50
  },

  // Simulated user & session counter metrics
  SIMULATED_USER_SESSION_COUNTER: {
    initialSessions: 2840,
    initialOnlineUsers: 342,
    baseDisplay: "২,৮৪০+",
    minIncrease: 1,
    maxIncrease: 3,
    autoIncrementIntervalMs: 5000
  },

  // Simulated reward values available in the wheel and random drops
  SIMULATED_REWARD_VALUES: [
    3240, 4875, 5630, 7428, 8164, 9312, 6789, 3955, 9991
  ],

  // Wheel segments configuration
  WHEEL_SEGMENTS: [
    { label: "৳500", value: 500, color: "#0E1812" },
    { label: "৳600", value: 600, color: "#14241B" },
    { label: "৳750", value: 750, color: "#193122" },
    { label: "৳1,000", value: 1000, color: "#20402C" },
    { label: "৳1,500", value: 1500, color: "#285237" },
    { label: "৳2,500", value: 2500, color: "#326644" },
    { label: "৳5,000", value: 5000, color: "#3F8055" },
    { label: "৳8,888", value: 8888, color: "#B9F34B" } // Jackpot accent segment
  ],

  // Demo and educational labels across the interface
  DEMO_LABELS: {
    badgeText: "DEMO SIMULATION",
    badgeBn: "কাল্পনিক ডেমো",
    disclaimerBar: "শিক্ষামূলক ডেমো ইন্টারফেস — কোনো বাস্তব টাকা, ডিপোজিট বা উত্তোলন এখানে অন্তর্ভুক্ত নয়।",
    fictionalNotice: "কাল্পনিক ফলাফল",
    noRealMoneyWarning: "সতর্কবার্তা: এটি শুধুমাত্র ইউজার ইন্টারফেস প্রদর্শনের জন্য তৈরি কাল্পনিক ডেমো। এখানে কোনো আর্থিক লেনদেন করা সম্ভব নয়।"
  },

  // Authentic Bangladeshi name pool for dynamic leaderboard & live activity ticker
  BANGLADESHI_NAMES_POOL: [
    { name: "Ayaan Rahman", bangla: "আয়ান রহমান", initials: "AR", district: "ঢাকা" },
    { name: "Nabil Khan", bangla: "নাবিল খান", initials: "NK", district: "চট্টগ্রাম" },
    { name: "Samiha Tabassum", bangla: "সামিহা তাবাসসুম", initials: "ST", district: "সিলেট" },
    { name: "Rafiul Hasan", bangla: "রাফিউল হাসান", initials: "RH", district: "রাজশাহী" },
    { name: "Tanvir Mahmud", bangla: "তানভীর মাহমুদ", initials: "TM", district: "খুলনা" },
    { name: "Tasnim Anjum", bangla: "তাসনিম আনজুম", initials: "TA", district: "কুমিল্লা" },
    { name: "Zubair Ahmed", bangla: "জুবায়ের আহমেদ", initials: "ZA", district: "বরিশাল" },
    { name: "Nusrat Jahan", bangla: "নুসরাত জাহান", initials: "NJ", district: "ময়মনসিংহ" },
    { name: "Fahim Shahriar", bangla: "ফাহিম শাহরিয়ার", initials: "FS", district: "রংপুর" },
    { name: "Sadia Islam", bangla: "সাদিয়া ইসলাম", initials: "SI", district: "বগুড়া" },
    { name: "Mahir Faysal", bangla: "মাহির ফয়সাল", initials: "MF", district: "গাজীপুর" },
    { name: "Farhan Hossain", bangla: "ফারহান হোসেন", initials: "FH", district: "নারায়ণগঞ্জ" },
    { name: "Anika Chowdhury", bangla: "আনিকা চৌধুরী", initials: "AC", district: "ফেনী" },
    { name: "Sakib Al Masud", bangla: "সাকিব আল মাসুদ", initials: "SM", district: "দিনাজপুর" },
    { name: "Imran Nazir", bangla: "ইমরান নাজির", initials: "IN", district: "যশোর" },
    { name: "Mehedi Mir", bangla: "মেহেদী মীর", initials: "MM", district: "কক্সবাজার" }
  ],

  // Dynamic simulated activity stream data
  DEMO_ACTIVITY_DATA: [
    "Ayaan R. ডেমো রিওয়ার্ড ইন্টারফেস টেস্ট করেছেন (৳৩,২৪০)",
    "Nabil K. ভার্চুয়াল স্পিন সিমুলেশন সম্পন্ন করেছেন (৳১,৫০০)",
    "Samiha T. কাল্পনিক বোনাস ক্যালকুলেটর এক্সপ্লোর করেছেন",
    "Rafiul H. ইন্টারঅ্যাক্টিভ ডেমো সেশন শুরু করেছেন",
    "Tanvir M. টেস্ট রিওয়ার্ড পয়েন্ট রিডিম করেছেন (৳৪,৮৭৫)",
    "Nusrat J. সিমুলেটেড লিডারবোর্ড রেকর্ড আপডেট করেছেন",
    "Zubair A. কাল্পনিক জ্যাকপট ডেমো ইন্টারফেস দেখেছেন"
  ],

  // Initial Simulated Leaderboard datasets for All Time and Today's views
  LEADERBOARD_DATA: {
    allTime: [
      { name: "Ayaan Rahman", bangla: "আয়ান রহমান", initials: "AR", session: "৯৪২", score: 9991 },
      { name: "Nabil Khan", bangla: "নাবিল খান", initials: "NK", session: "৮১৯", score: 9312 },
      { name: "Samiha Tabassum", bangla: "সামিহা তাবাসসুম", initials: "ST", session: "৭৫৪", score: 8764 },
      { name: "Rafiul Hasan", bangla: "রাফিউল হাসান", initials: "RH", session: "৬১২", score: 8240 },
      { name: "Tanvir Mahmud", bangla: "তানভীর মাহমুদ", initials: "TM", session: "৫৯৩", score: 7985 }
    ],
    today: [
      { name: "Zubair Ahmed", bangla: "জুবায়ের আহমেদ", initials: "ZA", session: "১২৪", score: 4850 },
      { name: "Nusrat Jahan", bangla: "নুসরাত জাহান", initials: "NJ", session: "১১৮", score: 4420 },
      { name: "Fahim Shahriar", bangla: "ফাহিম শাহরিয়ার", initials: "FS", session: "১০৫", score: 3990 },
      { name: "Tasnim Anjum", bangla: "তাসনিম আনজুম", initials: "TA", session: "০৯৮", score: 3670 },
      { name: "Sadia Islam", bangla: "সাদিয়া ইসলাম", initials: "SI", session: "০৮৯", score: 3410 }
    ]
  },

  // Share message compliance text (strictly educational with zero real-money claims)
  SHARE_MESSAGES: {
    en: "I tried the BetBonus educational demo — no real money involved.",
    bn: "আমি BetBonus-এর শিক্ষামূলক ডেমো ইন্টারফেসটি ট্রাই করলাম — এতে কোনো আসল টাকার ঝুঁকি নেই।"
  }
};

// Global browser window attachment
if (typeof window !== "undefined") {
  window.DEMO_CONFIG = DEMO_CONFIG;
}

// CommonJS module export support
if (typeof module !== "undefined" && module.exports) {
  module.exports = DEMO_CONFIG;
}
