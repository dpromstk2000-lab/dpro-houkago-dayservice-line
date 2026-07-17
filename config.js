/**
 * ============================================================
 * DPRO 放課後等デイサービス LINE
 * STEP HOUKAGO-4
 * 共通設定 config.js 完全版
 * Version: HOUKAGO-4-R5-CONFIG-OWNER-MASTER-DATA-20260717
 * ============================================================
 *
 * GitHub配置先:
 *   dpro-houkago-dayservice-line/config.js
 *
 * GitHub Pages:
 *   https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/config.js
 *
 * Cloudflare Worker:
 *   https://dpro-houkago-dayservice-line-api.dpromstk2000.workers.dev
 *
 * 注意:
 *   このファイルにはSUPABASE_SERVICE_ROLE_KEYなどの秘密情報を
 *   絶対に記載しないでください。
 */

(function initDproHoukagoConfig(global) {
  "use strict";

  const APP = Object.freeze({
    serviceName: "DPRO 放課後等デイサービス LINE",
    shortName: "DPRO放課後等デイ",
    subtitle: "保護者連絡・利用予定・送迎・日々の支援共有をLINEで一元管理",
    appVersion: "HOUKAGO-4-R5-CONFIG-OWNER-MASTER-DATA-20260717",
    workerVersion: "HOUKAGO-3-R5-WORKER-OWNER-MASTER-DATA-20260717",
    facilityCode: "dpro_houkago_demo",
    facilityName: "DPRO放課後等デイサービス",
    corporationName: "DPRO福祉サポート",
    timezone: "Asia/Tokyo",
    locale: "ja-JP",
    adminCodeDemo: "1234",
    defaultSlotMinutes: 30,
    defaultDailyCapacity: 10,
    privatePhotoBucket: "houkago-child-photos",
  });

  const URLS = Object.freeze({
    siteBase:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line",
    workerBase:
      "https://dpro-houkago-dayservice-line-api.dpromstk2000.workers.dev",
    repository:
      "https://github.com/dpromstk2000-lab/dpro-houkago-dayservice-line",

    index:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/index.html",
    member:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/member.html",
    owner:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/owner.html",
    ownerIpad:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/owner-ipad.html",
    supportProgram:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/support-program.html",
    systemCheck:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/system-check.html",
    config:
      "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/config.js",
  });

  const ENDPOINTS = Object.freeze({
    root: "/",
    health: "/api/health",

    publicConfig: "/api/public/config",
    publicSupportProgram: "/api/public/support-program",
    publicAnnouncements: "/api/public/announcements",
    guardianBootstrap: "/api/public/guardian/bootstrap",
    guardianRequest: "/api/public/guardian-request",

    memberProfile: "/api/member/profile",
    memberSchedules: "/api/member/schedules",
    memberActivityReports: "/api/member/activity-reports",

    adminAuth: "/api/admin/auth",
    adminMasterData: "/api/admin/master-data",
    adminDashboard: "/api/admin/dashboard",
    adminDay: "/api/admin/day",
    adminSearch: "/api/admin/search",
    adminChildDetail: "/api/admin/child-detail",
    adminScheduleCreate: "/api/admin/schedules/create",
    adminScheduleStatus: "/api/admin/schedules/status",
    adminDailyCheckStatus: "/api/admin/daily-checks/status",
    adminGuardianRequests: "/api/admin/guardian-requests",
    adminGuardianRequestStatus:
      "/api/admin/guardian-requests/status",

    adminTransportRuns: "/api/admin/transport/runs",
    adminTransportRunStatus:
      "/api/admin/transport/runs/status",
    adminTransportAssignments:
      "/api/admin/transport/assignments",
    adminTransportAssignmentStatus:
      "/api/admin/transport/assignments/status",

    adminActivityPrograms:
      "/api/admin/activity/programs",
    adminActivityRecords:
      "/api/admin/activity/records",
    adminSupportPlansDue:
      "/api/admin/support-plans/due",
    adminSupportProgram:
      "/api/admin/support-program",
    adminSettings: "/api/admin/settings",
    adminMessageLogCopy:
      "/api/admin/messages/log-copy",
    adminChildPhotoSignedUrl:
      "/api/admin/children/photo-signed-url",

    adminPhoneNormalizeCheck:
      "/api/admin/phone-normalize-check",
    adminDemoPrepare: "/api/admin/demo/prepare",
    adminIntegrationCheck:
      "/api/admin/integration-check",
    adminSystemCheck: "/api/admin/system-check",
  });

  const STORAGE_KEYS = Object.freeze({
    adminCode: "dpro_houkago_admin_code",
    operatorName: "dpro_houkago_operator_name",
    deviceType: "dpro_houkago_device_type",
    selectedDate: "dpro_houkago_selected_date",
    selectedChildId: "dpro_houkago_selected_child_id",
    selectedTransportRunId:
      "dpro_houkago_selected_transport_run_id",

    guardianPhone: "dpro_houkago_guardian_phone",
    childNumber: "dpro_houkago_child_number",
    lineUserId: "dpro_houkago_line_user_id",
    lineIdToken: "dpro_houkago_line_id_token",
    selectedGuardianChildId:
      "dpro_houkago_guardian_selected_child_id",

    uiDensity: "dpro_houkago_ui_density",
    lastPage: "dpro_houkago_last_page",
  });

  const THEME = deepFreeze({
    colors: {
      background: "#f7f4ec",
      surface: "#ffffff",
      surfaceSoft: "#edf8f7",
      surfaceBlue: "#eef6fb",
      surfaceWarm: "#fff8e8",
      border: "#cddeda",
      borderStrong: "#a8c7c2",
      text: "#18312f",
      muted: "#5d716f",
      brand: "#147d79",
      brandDark: "#0c5c59",
      brandDeep: "#073f3d",
      brandSoft: "#dff3f1",
      accent: "#2c83a5",
      accentSoft: "#e4f3f9",
      success: "#247a4c",
      successSoft: "#e7f6ed",
      warning: "#a46308",
      warningSoft: "#fff1d5",
      danger: "#b5362f",
      dangerSoft: "#fdecea",
      purple: "#6f4ba5",
      purpleSoft: "#f0eafb",
      sidebar: "#103f3d",
      sidebarText: "#ffffff",
      focus: "#147d79",
    },
    typography: {
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Yu Gothic UI","Yu Gothic",Meiryo,sans-serif',
      bodyPcPx: 17,
      bodyMobilePx: 16,
      inputPx: 16,
      buttonPx: 16,
      smallPx: 14,
      heading1Px: 32,
      heading2Px: 25,
      heading3Px: 20,
      lineHeight: 1.65,
    },
    layout: {
      sidebarWidthPx: 260,
      contentMaxWidthPx: 1500,
      touchTargetPx: 48,
      inputMinHeightPx: 50,
      buttonMinHeightPx: 50,
      radiusSmallPx: 10,
      radiusMediumPx: 15,
      radiusLargePx: 22,
    },
  });

  const FEATURES = Object.freeze({
    guardianLineBootstrap: true,
    returningGuardianByLineUserId: true,
    lineIdTokenVerificationProduction: true,
    phoneNormalization: true,
    childAndGuardianSearch: true,
    duplicateChildScheduleGuard: true,
    pastDateGuard: true,
    dailyCapacityGuard: true,
    schoolPickup: true,
    homeDropoff: true,
    vehicleCapacityGuard: true,
    vehicleOverlapGuard: true,
    staffOverlapGuard: true,
    unboardedDepartureGuard: true,
    fiveSupportDomains: true,
    activityReport: true,
    supportPlanDueManagement: true,
    supportProgramPublication: true,
    guardianRequests: true,
    ownerPc: true,
    ownerIpad: true,
    privateChildPhotoStorage: true,
    operationLogs: true,
    demoPrepare: true,
    integrationCheck: true,
    productionGuard: true,

    billing: false,
    nationalHealthInsuranceClaim: false,
    medicalJudgement: false,
    medicationInstruction: false,
    formalRecordReplacement: false,
    aiAutomaticSupportDecision: false,
  });

  const SCHEDULE_STATUSES = deepFreeze({
    scheduled: {
      label: "利用予定",
      shortLabel: "予定",
      order: 10,
      tone: "blue",
    },
    pickup_pending: {
      label: "学校お迎え待ち",
      shortLabel: "迎え待ち",
      order: 20,
      tone: "warning",
    },
    picked_up: {
      label: "お迎え済み",
      shortLabel: "迎え済み",
      order: 30,
      tone: "purple",
    },
    arrived: {
      label: "施設到着",
      shortLabel: "到着",
      order: 40,
      tone: "success",
    },
    in_service: {
      label: "利用中",
      shortLabel: "利用中",
      order: 50,
      tone: "brand",
    },
    ready_to_go_home: {
      label: "帰宅準備",
      shortLabel: "帰宅準備",
      order: 60,
      tone: "warning",
    },
    transport_departed: {
      label: "帰宅送迎中",
      shortLabel: "送迎中",
      order: 70,
      tone: "purple",
    },
    completed: {
      label: "引渡し・帰宅完了",
      shortLabel: "完了",
      order: 80,
      tone: "success",
    },
    absent: {
      label: "欠席",
      shortLabel: "欠席",
      order: 90,
      tone: "muted",
    },
    cancelled: {
      label: "予定取消",
      shortLabel: "取消",
      order: 100,
      tone: "muted",
    },
    no_show: {
      label: "未到着・要確認",
      shortLabel: "要確認",
      order: 110,
      tone: "danger",
    },
  });

  const REQUEST_TYPES = deepFreeze({
    absence: {
      label: "欠席連絡",
      shortLabel: "欠席",
      icon: "欠",
      order: 10,
    },
    late: {
      label: "遅刻連絡",
      shortLabel: "遅刻",
      icon: "遅",
      order: 20,
    },
    early_leave: {
      label: "早退連絡",
      shortLabel: "早退",
      icon: "早",
      order: 30,
    },
    change_date: {
      label: "利用日変更希望",
      shortLabel: "日程変更",
      icon: "日",
      order: 40,
    },
    pickup_change: {
      label: "お迎え方法の変更",
      shortLabel: "迎え変更",
      icon: "迎",
      order: 50,
    },
    dropoff_change: {
      label: "帰宅方法の変更",
      shortLabel: "帰宅変更",
      icon: "帰",
      order: 60,
    },
    condition: {
      label: "当日の体調連絡",
      shortLabel: "体調",
      icon: "体",
      order: 70,
    },
    item: {
      label: "持ち物の連絡",
      shortLabel: "持ち物",
      icon: "物",
      order: 80,
    },
    consultation: {
      label: "相談・面談希望",
      shortLabel: "相談",
      icon: "相",
      order: 90,
    },
    contact: {
      label: "施設への連絡",
      shortLabel: "施設連絡",
      icon: "連",
      order: 100,
    },
    other: {
      label: "その他",
      shortLabel: "その他",
      icon: "他",
      order: 110,
    },
  });

  const REQUEST_STATUSES = deepFreeze({
    new: {
      label: "未確認",
      shortLabel: "未確認",
      order: 10,
      tone: "danger",
    },
    acknowledged: {
      label: "確認済み",
      shortLabel: "確認済",
      order: 20,
      tone: "blue",
    },
    in_progress: {
      label: "対応中",
      shortLabel: "対応中",
      order: 30,
      tone: "warning",
    },
    resolved: {
      label: "対応済み",
      shortLabel: "対応済",
      order: 40,
      tone: "success",
    },
    rejected: {
      label: "対応不可",
      shortLabel: "対応不可",
      order: 50,
      tone: "danger",
    },
    cancelled: {
      label: "取消",
      shortLabel: "取消",
      order: 60,
      tone: "muted",
    },
  });

  const DAILY_CHECKS = deepFreeze({
    boarding_pickup: {
      label: "学校・自宅で乗車確認",
      completedLabel: "乗車確認済み",
      icon: "乗",
      order: 10,
    },
    arrival: {
      label: "施設到着確認",
      completedLabel: "施設到着済み",
      icon: "着",
      order: 20,
    },
    handwashing: {
      label: "手洗い確認",
      completedLabel: "手洗い確認済み",
      icon: "手",
      order: 30,
    },
    belongings: {
      label: "荷物・持ち物確認",
      completedLabel: "持ち物確認済み",
      icon: "物",
      order: 40,
    },
    condition: {
      label: "体調確認",
      completedLabel: "体調確認済み",
      icon: "体",
      order: 50,
    },
    snack: {
      label: "おやつ確認",
      completedLabel: "おやつ確認済み",
      icon: "菓",
      order: 60,
    },
    meal: {
      label: "食事確認",
      completedLabel: "食事確認済み",
      icon: "食",
      order: 70,
    },
    activity: {
      label: "活動参加確認",
      completedLabel: "活動確認済み",
      icon: "活",
      order: 80,
    },
    toilet: {
      label: "トイレ確認",
      completedLabel: "トイレ確認済み",
      icon: "便",
      order: 90,
    },
    medication_confirmation: {
      label: "服薬情報の確認",
      completedLabel: "服薬情報確認済み",
      icon: "薬",
      order: 100,
      caution:
        "服薬指示や医療判断を行う機能ではありません。",
    },
    go_home_preparation: {
      label: "帰宅準備確認",
      completedLabel: "帰宅準備済み",
      icon: "帰",
      order: 110,
    },
    boarding_dropoff: {
      label: "帰宅便乗車確認",
      completedLabel: "帰宅便乗車済み",
      icon: "車",
      order: 120,
    },
    guardian_handover: {
      label: "保護者引渡し確認",
      completedLabel: "引渡し確認済み",
      icon: "渡",
      order: 130,
    },
    other: {
      label: "その他確認",
      completedLabel: "確認済み",
      icon: "他",
      order: 900,
    },
  });

  const CHECK_STATUSES = deepFreeze({
    pending: {
      label: "未確認",
      tone: "muted",
      order: 10,
    },
    completed: {
      label: "確認済み",
      tone: "success",
      order: 20,
    },
    not_applicable: {
      label: "対象外",
      tone: "muted",
      order: 30,
    },
    needs_attention: {
      label: "要対応",
      tone: "danger",
      order: 40,
    },
  });

  const SUPPORT_DOMAINS = deepFreeze({
    health_life: {
      label: "健康・生活",
      shortLabel: "健康・生活",
      description:
        "健康状態、生活リズム、身辺整理、基本的生活習慣など",
      order: 10,
      icon: "生",
    },
    motor_sensory: {
      label: "運動・感覚",
      shortLabel: "運動・感覚",
      description:
        "姿勢、身体の動き、微細運動、感覚の調整など",
      order: 20,
      icon: "運",
    },
    cognition_behavior: {
      label: "認知・行動",
      shortLabel: "認知・行動",
      description:
        "理解、選択、見通し、切替、行動調整など",
      order: 30,
      icon: "認",
    },
    language_communication: {
      label: "言語・コミュニケーション",
      shortLabel: "言語・会話",
      description:
        "意思表出、理解、言葉、絵カード等の活用など",
      order: 40,
      icon: "言",
    },
    relationships_social: {
      label: "人間関係・社会性",
      shortLabel: "人間関係",
      description:
        "他者との関わり、役割、順番、集団参加など",
      order: 50,
      icon: "人",
    },
  });

  const PICKUP_MODES = deepFreeze({
    school_pickup: {
      label: "学校へお迎え",
      shortLabel: "学校迎え",
      order: 10,
    },
    home_pickup: {
      label: "自宅へお迎え",
      shortLabel: "自宅迎え",
      order: 20,
    },
    guardian_dropoff: {
      label: "保護者が施設へ送る",
      shortLabel: "保護者送迎",
      order: 30,
    },
    self_arrival: {
      label: "本人が来所",
      shortLabel: "本人来所",
      order: 40,
    },
    other: {
      label: "その他",
      shortLabel: "その他",
      order: 90,
    },
  });

  const DROPOFF_MODES = deepFreeze({
    home_dropoff: {
      label: "自宅まで送迎",
      shortLabel: "自宅送迎",
      order: 10,
    },
    guardian_pickup: {
      label: "保護者が施設へお迎え",
      shortLabel: "保護者迎え",
      order: 20,
    },
    self_departure: {
      label: "本人が帰宅",
      shortLabel: "本人帰宅",
      order: 30,
    },
    other: {
      label: "その他",
      shortLabel: "その他",
      order: 90,
    },
  });

  const TRANSPORT_DIRECTIONS = deepFreeze({
    pickup: {
      label: "学校・自宅お迎え",
      shortLabel: "お迎え",
      order: 10,
    },
    dropoff: {
      label: "帰宅送迎",
      shortLabel: "帰宅",
      order: 20,
    },
  });

  const TRANSPORT_RUN_STATUSES = deepFreeze({
    planned: {
      label: "予定",
      order: 10,
      tone: "blue",
    },
    boarding: {
      label: "乗車確認中",
      order: 20,
      tone: "warning",
    },
    ready: {
      label: "出発準備完了",
      order: 30,
      tone: "brand",
    },
    departed: {
      label: "出発済み",
      order: 40,
      tone: "purple",
    },
    arrived: {
      label: "到着",
      order: 50,
      tone: "success",
    },
    completed: {
      label: "完了",
      order: 60,
      tone: "success",
    },
    cancelled: {
      label: "取消",
      order: 70,
      tone: "muted",
    },
  });

  const BOARDING_STATUSES = deepFreeze({
    pending: {
      label: "未確認",
      order: 10,
      tone: "danger",
    },
    ready: {
      label: "乗車待ち",
      order: 20,
      tone: "warning",
    },
    boarded: {
      label: "乗車済み",
      order: 30,
      tone: "brand",
    },
    not_boarding: {
      label: "乗車なし",
      order: 40,
      tone: "muted",
    },
    absent: {
      label: "欠席",
      order: 50,
      tone: "muted",
    },
    handed_over: {
      label: "引渡し済み",
      order: 60,
      tone: "success",
    },
    completed: {
      label: "完了",
      order: 70,
      tone: "success",
    },
  });

  const SUPPORT_PLAN_STATUSES = deepFreeze({
    draft: {
      label: "作成中",
      order: 10,
      tone: "muted",
    },
    review: {
      label: "内部確認中",
      order: 20,
      tone: "blue",
    },
    explained: {
      label: "保護者説明済み",
      order: 30,
      tone: "warning",
    },
    consented: {
      label: "同意確認済み",
      order: 40,
      tone: "brand",
    },
    active: {
      label: "適用中",
      order: 50,
      tone: "success",
    },
    revision_due: {
      label: "見直し期限",
      order: 60,
      tone: "danger",
    },
    closed: {
      label: "終了",
      order: 70,
      tone: "muted",
    },
  });

  const ACTIVITY_PARTICIPATION_STATUSES = deepFreeze({
    participated: {
      label: "参加",
      order: 10,
    },
    partial: {
      label: "一部参加",
      order: 20,
    },
    observed: {
      label: "見学",
      order: 30,
    },
    declined: {
      label: "不参加",
      order: 40,
    },
    absent: {
      label: "欠席",
      order: 50,
    },
  });

  const GUARDIAN_REPORT_STATUSES = deepFreeze({
    draft: {
      label: "下書き",
      order: 10,
      tone: "muted",
    },
    ready: {
      label: "共有準備済み",
      order: 20,
      tone: "warning",
    },
    shared: {
      label: "保護者共有済み",
      order: 30,
      tone: "success",
    },
    withheld: {
      label: "保護者非公開",
      order: 40,
      tone: "danger",
    },
  });

  const STAFF_ROLES = deepFreeze({
    owner: {
      label: "オーナー・管理者",
      order: 10,
    },
    manager: {
      label: "管理者",
      order: 20,
    },
    service_manager: {
      label: "児童発達支援管理責任者",
      shortLabel: "児発管",
      order: 30,
    },
    staff: {
      label: "支援スタッフ",
      order: 40,
    },
    driver: {
      label: "送迎担当",
      order: 50,
    },
  });

  const PRIORITIES = deepFreeze({
    low: {
      label: "低",
      order: 10,
      tone: "muted",
    },
    normal: {
      label: "通常",
      order: 20,
      tone: "blue",
    },
    high: {
      label: "高",
      order: 30,
      tone: "warning",
    },
    urgent: {
      label: "緊急",
      order: 40,
      tone: "danger",
    },
  });

  const DEMO = deepFreeze({
    enabled: true,
    adminCode: "1234",
    guardian: {
      phone: "090-1111-2201",
      guardianNumber: "HOU-G-001",
      guardianName: "佐藤 美咲",
      lineUserId: "U_HOUKAGO_DEMO_GUARDIAN_001",
    },
    child: {
      childNumber: "HOU-C-001",
      childName: "佐藤 はる",
    },
    secondGuardian: {
      phone: "090-1111-2202",
      guardianNumber: "HOU-G-002",
      guardianName: "鈴木 健太",
      lineUserId: "U_HOUKAGO_DEMO_GUARDIAN_002",
    },
    secondChild: {
      childNumber: "HOU-C-002",
      childName: "鈴木 そら",
    },
  });

  const VALIDATION = deepFreeze({
    phoneMinDigits: 10,
    phoneMaxDigits: 11,
    adminCodeMaxLength: 100,
    childNumberMaxLength: 50,
    subjectMaxLength: 200,
    shortNoteMaxLength: 1000,
    noteMaxLength: 3000,
    longNoteMaxLength: 5000,
    searchMaxLength: 80,
    maxUploadBytes: 5 * 1024 * 1024,
    allowedPhotoMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
    defaultSignedUrlSeconds: 600,
    minSignedUrlSeconds: 60,
    maxSignedUrlSeconds: 3600,
  });

  function deepFreeze(value) {
    if (
      value &&
      typeof value === "object" &&
      !Object.isFrozen(value)
    ) {
      Object.freeze(value);
      Object.getOwnPropertyNames(value).forEach(function freezeProperty(
        property
      ) {
        deepFreeze(value[property]);
      });
    }
    return value;
  }

  function getStorage() {
    try {
      if (global.localStorage) {
        return global.localStorage;
      }
    } catch (error) {
      console.warn("localStorageを利用できません。", error);
    }
    return null;
  }

  function storageGet(key, fallback = null) {
    const storage = getStorage();
    if (!storage) return fallback;

    try {
      const value = storage.getItem(key);
      return value === null ? fallback : value;
    } catch (error) {
      console.warn("保存値を読み込めません。", error);
      return fallback;
    }
  }

  function storageSet(key, value) {
    const storage = getStorage();
    if (!storage) return false;

    try {
      storage.setItem(key, String(value));
      return true;
    } catch (error) {
      console.warn("値を保存できません。", error);
      return false;
    }
  }

  function storageRemove(key) {
    const storage = getStorage();
    if (!storage) return false;

    try {
      storage.removeItem(key);
      return true;
    } catch (error) {
      console.warn("保存値を削除できません。", error);
      return false;
    }
  }

  function storageClearApplicationData() {
    Object.values(STORAGE_KEYS).forEach(storageRemove);
  }

  function getQueryParams() {
    try {
      return new URLSearchParams(global.location.search || "");
    } catch {
      return new URLSearchParams();
    }
  }

  function isDemoMode() {
    const value = getQueryParams().get("demo");
    return value === "1" || value === "true";
  }

  function isSystemCheckMode() {
    const value = getQueryParams().get("system_check");
    return value === "1" || value === "true";
  }

  function ensureDemoAdminCode() {
    if (!isDemoMode()) return null;

    const current = storageGet(STORAGE_KEYS.adminCode, "");
    if (current) return current;

    storageSet(STORAGE_KEYS.adminCode, DEMO.adminCode);
    return DEMO.adminCode;
  }

  function clearAdminCode() {
    return storageRemove(STORAGE_KEYS.adminCode);
  }

  function normalizePhone(phone) {
    let value = String(phone ?? "")
      .normalize("NFKC")
      .replace(/[^\d+]/g, "");

    if (value.startsWith("+81")) {
      value = `0${value.slice(3)}`;
    } else if (value.startsWith("0081")) {
      value = `0${value.slice(4)}`;
    } else if (
      value.startsWith("81") &&
      value.length >= 11
    ) {
      value = `0${value.slice(2)}`;
    }

    return value.replace(/\D/g, "");
  }

  function isValidJapanesePhone(phone) {
    const normalized = normalizePhone(phone);
    return (
      normalized.length >= VALIDATION.phoneMinDigits &&
      normalized.length <= VALIDATION.phoneMaxDigits &&
      normalized.startsWith("0")
    );
  }

  function formatPhone(phone) {
    const normalized = normalizePhone(phone);

    if (/^0[789]0\d{8}$/.test(normalized)) {
      return normalized.replace(
        /^(\d{3})(\d{4})(\d{4})$/,
        "$1-$2-$3"
      );
    }

    if (/^0\d{9}$/.test(normalized)) {
      return normalized.replace(
        /^(\d{2,4})(\d{2,4})(\d{4})$/,
        "$1-$2-$3"
      );
    }

    return String(phone ?? "");
  }

  function todayJst(offsetDays = 0) {
    const now = new Date(Date.now() + 9 * 60 * 60 * 1000);
    now.setUTCDate(now.getUTCDate() + Number(offsetDays || 0));
    return now.toISOString().slice(0, 10);
  }

  function parseDateOnly(value) {
    if (!value) return null;
    const text = String(value).slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return null;

    const date = new Date(`${text}T00:00:00+09:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatDate(value, options = {}) {
    const date =
      value instanceof Date
        ? value
        : String(value || "").length <= 10
          ? parseDateOnly(value)
          : new Date(value);

    if (!date || Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(APP.locale, {
      timeZone: APP.timezone,
      year: options.year || "numeric",
      month: options.month || "long",
      day: options.day || "numeric",
      weekday: options.weekday || undefined,
    }).format(date);
  }

  function formatDateShort(value, includeWeekday = true) {
    const date =
      value instanceof Date
        ? value
        : String(value || "").length <= 10
          ? parseDateOnly(value)
          : new Date(value);

    if (!date || Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(APP.locale, {
      timeZone: APP.timezone,
      month: "numeric",
      day: "numeric",
      weekday: includeWeekday ? "short" : undefined,
    }).format(date);
  }

  function formatDateTime(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(APP.locale, {
      timeZone: APP.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function formatTime(value) {
    if (!value) return "";
    const text = String(value);

    if (/^\d{2}:\d{2}/.test(text)) {
      return text.slice(0, 5);
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(APP.locale, {
      timeZone: APP.timezone,
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function daysUntil(value, baseDate = todayJst()) {
    const target = parseDateOnly(value);
    const base = parseDateOnly(baseDate);
    if (!target || !base) return null;

    return Math.round(
      (target.getTime() - base.getTime()) /
        (24 * 60 * 60 * 1000)
    );
  }

  function dateDueTone(value, warningDays = 30) {
    const days = daysUntil(value);

    if (days === null) return "muted";
    if (days < 0) return "danger";
    if (days <= warningDays) return "warning";
    return "success";
  }

  function dateDueLabel(value, warningDays = 30) {
    const days = daysUntil(value);

    if (days === null) return "期限未設定";
    if (days < 0) return `${Math.abs(days)}日超過`;
    if (days === 0) return "本日期限";
    if (days <= warningDays) return `あと${days}日`;
    return formatDateShort(value, false);
  }

  function endpointUrl(endpoint, query = null) {
    const path = String(endpoint || "").startsWith("/")
      ? endpoint
      : `/${endpoint}`;

    const url = new URL(`${URLS.workerBase}${path}`);

    if (query && typeof query === "object") {
      Object.entries(query).forEach(([key, value]) => {
        if (
          value !== undefined &&
          value !== null &&
          value !== ""
        ) {
          url.searchParams.set(key, String(value));
        }
      });
    }

    return url.toString();
  }

  function pageUrl(pageName, options = {}) {
    const key = pageName in URLS ? pageName : "index";
    const url = new URL(URLS[key]);

    if (options.demo === true) {
      url.searchParams.set("demo", "1");
    }

    if (options.systemCheck === true) {
      url.searchParams.set("system_check", "1");
    }

    if (options.childId) {
      url.searchParams.set("child_id", options.childId);
    }

    if (options.date) {
      url.searchParams.set("date", options.date);
    }

    return url.toString();
  }

  function safeJsonParse(value, fallback = null) {
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function getDefinition(definitions, code) {
    return definitions?.[code] || null;
  }

  function getLabel(definitions, code, fallback = "") {
    return (
      getDefinition(definitions, code)?.label ||
      fallback ||
      String(code || "")
    );
  }

  function getShortLabel(
    definitions,
    code,
    fallback = ""
  ) {
    const definition = getDefinition(definitions, code);
    return (
      definition?.shortLabel ||
      definition?.label ||
      fallback ||
      String(code || "")
    );
  }

  function sortedDefinitions(definitions) {
    return Object.entries(definitions || {})
      .map(([code, definition]) => ({
        code,
        ...definition,
      }))
      .sort(
        (left, right) =>
          Number(left.order || 9999) -
          Number(right.order || 9999)
      );
  }

  function supportDomainLabels(codes) {
    return (Array.isArray(codes) ? codes : [])
      .map((code) => getLabel(SUPPORT_DOMAINS, code, code))
      .join("・");
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[character]
    );
  }

  function truncate(value, maxLength = 80) {
    const text = String(value ?? "");
    if (text.length <= maxLength) return text;
    return `${text.slice(0, Math.max(0, maxLength - 1))}…`;
  }

  function generateHalfHourTimes(
    start = "08:00",
    end = "20:00"
  ) {
    const toMinutes = (value) => {
      const [hours, minutes] = String(value)
        .split(":")
        .map(Number);
      return hours * 60 + minutes;
    };

    const startMinutes = toMinutes(start);
    const endMinutes = toMinutes(end);
    const values = [];

    for (
      let minutes = startMinutes;
      minutes <= endMinutes;
      minutes += APP.defaultSlotMinutes
    ) {
      const hours = String(Math.floor(minutes / 60)).padStart(
        2,
        "0"
      );
      const rest = String(minutes % 60).padStart(2, "0");
      values.push(`${hours}:${rest}`);
    }

    return values;
  }

  function adminCode() {
    return (
      storageGet(STORAGE_KEYS.adminCode, "") ||
      ensureDemoAdminCode() ||
      ""
    );
  }

  function lineIdentity() {
    return {
      idToken: storageGet(STORAGE_KEYS.lineIdToken, ""),
      lineUserId: storageGet(STORAGE_KEYS.lineUserId, ""),
    };
  }

  async function apiRequest(
    endpoint,
    {
      method = "GET",
      query = null,
      body = undefined,
      admin = false,
      line = false,
      headers = {},
      timeoutMs = 20000,
    } = {}
  ) {
    const requestHeaders = new Headers(headers);
    requestHeaders.set("Accept", "application/json");

    let requestBody;

    if (body !== undefined) {
      requestHeaders.set(
        "Content-Type",
        "application/json; charset=utf-8"
      );
      requestBody = JSON.stringify(body);
    }

    if (admin) {
      const code = adminCode();
      if (!code) {
        throw createClientError(
          "admin_code_required",
          "管理コードを入力してください。",
          401
        );
      }
      requestHeaders.set("X-Admin-Code", code);
    }

    if (line) {
      const identity = lineIdentity();

      if (identity.idToken) {
        requestHeaders.set(
          "X-Line-Id-Token",
          identity.idToken
        );
      } else if (identity.lineUserId) {
        requestHeaders.set(
          "X-Demo-Line-User-Id",
          identity.lineUserId
        );
      }
    }

    const controller = new AbortController();
    const timeout = global.setTimeout(
      () => controller.abort(),
      timeoutMs
    );

    try {
      const response = await fetch(endpointUrl(endpoint, query), {
        method,
        headers: requestHeaders,
        body: requestBody,
        signal: controller.signal,
      });

      const text = await response.text();
      const data = text ? safeJsonParse(text, null) : null;

      if (!response.ok) {
        const error = createClientError(
          data?.error?.code || "api_error",
          data?.error?.message ||
            `API処理に失敗しました。（${response.status}）`,
          response.status,
          data?.error?.details || null
        );
        error.requestId =
          data?.request_id ||
          response.headers.get("X-DPRO-Request-Id");
        throw error;
      }

      return data;
    } catch (error) {
      if (error?.name === "AbortError") {
        throw createClientError(
          "request_timeout",
          "通信に時間がかかっています。時間をおいて再度お試しください。",
          408
        );
      }

      if (error?.code) throw error;

      throw createClientError(
        "network_error",
        "通信できませんでした。インターネット接続とAPI設定を確認してください。",
        0,
        error?.message || null
      );
    } finally {
      global.clearTimeout(timeout);
    }
  }

  function createClientError(
    code,
    message,
    status = 0,
    details = null
  ) {
    const error = new Error(message);
    error.name = "DproHoukagoApiError";
    error.code = code;
    error.status = status;
    error.details = details;
    return error;
  }

  const API = Object.freeze({
    request: apiRequest,

    root() {
      return apiRequest(ENDPOINTS.root);
    },

    health() {
      return apiRequest(ENDPOINTS.health);
    },

    publicConfig() {
      return apiRequest(ENDPOINTS.publicConfig);
    },

    publicSupportProgram() {
      return apiRequest(ENDPOINTS.publicSupportProgram);
    },

    publicAnnouncements(target = "guardian") {
      return apiRequest(ENDPOINTS.publicAnnouncements, {
        query: { target },
      });
    },

    guardianBootstrap(payload) {
      return apiRequest(ENDPOINTS.guardianBootstrap, {
        method: "POST",
        body: payload,
        line: true,
      });
    },

    guardianRequest(payload) {
      return apiRequest(ENDPOINTS.guardianRequest, {
        method: "POST",
        body: payload,
        line: true,
      });
    },

    memberProfile(payload = {}) {
      return apiRequest(ENDPOINTS.memberProfile, {
        method: "POST",
        body: payload,
        line: true,
      });
    },

    memberSchedules(payload) {
      return apiRequest(ENDPOINTS.memberSchedules, {
        method: "POST",
        body: payload,
        line: true,
      });
    },

    memberActivityReports(payload) {
      return apiRequest(ENDPOINTS.memberActivityReports, {
        method: "POST",
        body: payload,
        line: true,
      });
    },

    adminAuth() {
      return apiRequest(ENDPOINTS.adminAuth, {
        method: "POST",
        body: {},
        admin: true,
      });
    },

    adminMasterData() {
      return apiRequest(ENDPOINTS.adminMasterData, {
        admin: true,
      });
    },

    adminDashboard(date = todayJst()) {
      return apiRequest(ENDPOINTS.adminDashboard, {
        query: { date },
        admin: true,
      });
    },

    adminDay(date = todayJst()) {
      return apiRequest(ENDPOINTS.adminDay, {
        query: { date },
        admin: true,
      });
    },

    adminSearch(queryText) {
      return apiRequest(ENDPOINTS.adminSearch, {
        query: { q: queryText },
        admin: true,
      });
    },

    adminChildDetail(childId) {
      return apiRequest(ENDPOINTS.adminChildDetail, {
        query: { id: childId },
        admin: true,
      });
    },

    adminScheduleCreate(payload) {
      return apiRequest(ENDPOINTS.adminScheduleCreate, {
        method: "POST",
        body: payload,
        admin: true,
      });
    },

    adminScheduleStatus(payload) {
      return apiRequest(ENDPOINTS.adminScheduleStatus, {
        method: "PATCH",
        body: payload,
        admin: true,
      });
    },

    adminDailyCheckStatus(payload) {
      return apiRequest(
        ENDPOINTS.adminDailyCheckStatus,
        {
          method: "PATCH",
          body: payload,
          admin: true,
        }
      );
    },

    adminGuardianRequests(query = {}) {
      return apiRequest(ENDPOINTS.adminGuardianRequests, {
        query,
        admin: true,
      });
    },

    adminGuardianRequestStatus(payload) {
      return apiRequest(
        ENDPOINTS.adminGuardianRequestStatus,
        {
          method: "PATCH",
          body: payload,
          admin: true,
        }
      );
    },

    adminTransportRuns(date = todayJst()) {
      return apiRequest(ENDPOINTS.adminTransportRuns, {
        query: { date },
        admin: true,
      });
    },

    adminTransportRunCreate(payload) {
      return apiRequest(ENDPOINTS.adminTransportRuns, {
        method: "POST",
        body: payload,
        admin: true,
      });
    },

    adminTransportRunStatus(payload) {
      return apiRequest(
        ENDPOINTS.adminTransportRunStatus,
        {
          method: "PATCH",
          body: payload,
          admin: true,
        }
      );
    },

    adminTransportAssignmentCreate(payload) {
      return apiRequest(
        ENDPOINTS.adminTransportAssignments,
        {
          method: "POST",
          body: payload,
          admin: true,
        }
      );
    },

    adminTransportAssignmentStatus(payload) {
      return apiRequest(
        ENDPOINTS.adminTransportAssignmentStatus,
        {
          method: "PATCH",
          body: payload,
          admin: true,
        }
      );
    },

    adminActivityPrograms() {
      return apiRequest(ENDPOINTS.adminActivityPrograms, {
        admin: true,
      });
    },

    adminActivityRecordCreate(payload) {
      return apiRequest(ENDPOINTS.adminActivityRecords, {
        method: "POST",
        body: payload,
        admin: true,
      });
    },

    adminSupportPlansDue(query = {}) {
      return apiRequest(ENDPOINTS.adminSupportPlansDue, {
        query,
        admin: true,
      });
    },

    adminSupportProgram() {
      return apiRequest(ENDPOINTS.adminSupportProgram, {
        admin: true,
      });
    },

    adminSupportProgramSave(payload) {
      return apiRequest(ENDPOINTS.adminSupportProgram, {
        method: "PUT",
        body: payload,
        admin: true,
      });
    },

    adminSettings() {
      return apiRequest(ENDPOINTS.adminSettings, {
        admin: true,
      });
    },

    adminSettingsSave(payload) {
      return apiRequest(ENDPOINTS.adminSettings, {
        method: "PUT",
        body: payload,
        admin: true,
      });
    },

    adminMessageLogCopy(payload) {
      return apiRequest(ENDPOINTS.adminMessageLogCopy, {
        method: "POST",
        body: payload,
        admin: true,
      });
    },

    adminChildPhotoSignedUrl(
      childId,
      expiresIn = VALIDATION.defaultSignedUrlSeconds
    ) {
      return apiRequest(
        ENDPOINTS.adminChildPhotoSignedUrl,
        {
          query: {
            id: childId,
            expires_in: expiresIn,
          },
          admin: true,
        }
      );
    },

    adminPhoneNormalizeCheck() {
      return apiRequest(
        ENDPOINTS.adminPhoneNormalizeCheck,
        {
          admin: true,
        }
      );
    },

    adminDemoPrepare() {
      return apiRequest(ENDPOINTS.adminDemoPrepare, {
        method: "POST",
        body: {},
        admin: true,
      });
    },

    adminIntegrationCheck() {
      return apiRequest(
        ENDPOINTS.adminIntegrationCheck,
        {
          admin: true,
        }
      );
    },

    adminSystemCheck() {
      return apiRequest(ENDPOINTS.adminSystemCheck, {
        admin: true,
      });
    },
  });

  const Config = deepFreeze({
    APP,
    URLS,
    ENDPOINTS,
    STORAGE_KEYS,
    THEME,
    FEATURES,

    SCHEDULE_STATUSES,
    REQUEST_TYPES,
    REQUEST_STATUSES,
    DAILY_CHECKS,
    CHECK_STATUSES,
    SUPPORT_DOMAINS,
    PICKUP_MODES,
    DROPOFF_MODES,
    TRANSPORT_DIRECTIONS,
    TRANSPORT_RUN_STATUSES,
    BOARDING_STATUSES,
    SUPPORT_PLAN_STATUSES,
    ACTIVITY_PARTICIPATION_STATUSES,
    GUARDIAN_REPORT_STATUSES,
    STAFF_ROLES,
    PRIORITIES,

    DEMO,
    VALIDATION,

    storage: {
      get: storageGet,
      set: storageSet,
      remove: storageRemove,
      clearApplicationData: storageClearApplicationData,
    },

    utils: {
      getQueryParams,
      isDemoMode,
      isSystemCheckMode,
      ensureDemoAdminCode,
      clearAdminCode,
      normalizePhone,
      isValidJapanesePhone,
      formatPhone,
      todayJst,
      parseDateOnly,
      formatDate,
      formatDateShort,
      formatDateTime,
      formatTime,
      daysUntil,
      dateDueTone,
      dateDueLabel,
      endpointUrl,
      pageUrl,
      safeJsonParse,
      getDefinition,
      getLabel,
      getShortLabel,
      sortedDefinitions,
      supportDomainLabels,
      escapeHtml,
      truncate,
      generateHalfHourTimes,
      createClientError,
    },

    API,
  });

  global.DPRO_HOUKAGO_CONFIG = Config;
  global.DPRO_HOUKAGO = Config;

  if (isDemoMode()) {
    ensureDemoAdminCode();

    if (!storageGet(STORAGE_KEYS.lineUserId, "")) {
      storageSet(
        STORAGE_KEYS.lineUserId,
        DEMO.guardian.lineUserId
      );
    }

    if (!storageGet(STORAGE_KEYS.guardianPhone, "")) {
      storageSet(
        STORAGE_KEYS.guardianPhone,
        DEMO.guardian.phone
      );
    }

    if (!storageGet(STORAGE_KEYS.childNumber, "")) {
      storageSet(
        STORAGE_KEYS.childNumber,
        DEMO.child.childNumber
      );
    }
  }

  if (
    typeof global.dispatchEvent === "function" &&
    typeof global.CustomEvent === "function"
  ) {
    global.dispatchEvent(
      new CustomEvent("dpro-houkago-config-ready", {
        detail: {
          appVersion: APP.appVersion,
          workerVersion: APP.workerVersion,
        },
      })
    );
  }
})(typeof window !== "undefined" ? window : globalThis);
