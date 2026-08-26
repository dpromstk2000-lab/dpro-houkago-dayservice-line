/* Derived from CONTENT_PACKAGE.json; SHA256: f01f144bb6e20d8c1d93e19643edfc92c90c906da46faf144bb801eea3dd180f */
window.DPRO_TUTORIAL_CONTENT = {
  "schema_version": "DPRO_TUTORIAL_RUNTIME_V1.1",
  "system": {
    "system_code": "HOUKAGO",
    "system_name": "DPRO 放課後等デイサービス LINE",
    "source_locked_sha": "68a9cc6121148aac7c95ef5e2a5388eab1891b28",
    "canonical_content_sha256": "f01f144bb6e20d8c1d93e19643edfc92c90c906da46faf144bb801eea3dd180f",
    "pages_root": "https://dpromstk2000-lab.github.io/dpro-houkago-dayservice-line/",
    "product_site_url": "https://dpromstk2000-lab.github.io/dpro-line-systems-site/lp-houkago.html"
  },
  "standard": {
    "version": "DPRO TUTORIAL STANDARD V1.1",
    "first10_count": 10,
    "responsive_width_px": 390
  },
  "first10": [
    {
      "step": 1,
      "id": "overview-real-screens",
      "role": "public_demo",
      "route": "demo-guide.html?demo=1",
      "title": "まず全体の画面を確認",
      "body": "保護者、スタッフiPad、管理PC、公開支援プログラムのつながりをここで確認します。",
      "target_selectors": [
        "#screenGrid",
        ".grid"
      ],
      "fallback": "画面一覧が見つからない場合は、ページ上部の公開操作デモ案内を表示したまま説明します。",
      "navigation": "user chooses/next only; Tutorial does not auto-open cards"
    },
    {
      "step": 2,
      "id": "guardian-contact-entry",
      "role": "guardian_contact",
      "route": "index.html?demo=1",
      "title": "保護者連絡の入口",
      "body": "欠席・遅刻・送迎変更・相談など、施設へ連絡する入口です。",
      "target_selectors": [
        ".hero",
        "main .hero"
      ],
      "fallback": "Heroが見つからない場合はページ先頭を基準に説明します。",
      "navigation": "highlight only"
    },
    {
      "step": 3,
      "id": "guardian-request-types",
      "role": "guardian_contact",
      "route": "index.html?demo=1",
      "title": "連絡の種類を選ぶ場所",
      "body": "欠席、遅刻、利用日変更、お迎え・帰宅方法変更、体調、持ち物、相談などから内容を選びます。Tutorialは選択や送信を自動実行しません。",
      "target_selectors": [
        "[data-request-type]",
        ".request-card"
      ],
      "fallback": "連絡カードが未表示なら、連絡入力エリアの位置だけを説明します。",
      "navigation": "no auto-click"
    },
    {
      "step": 4,
      "id": "guardian-next-schedule",
      "role": "guardian_member",
      "route": "member.html?demo=1",
      "title": "次回の利用予定を確認",
      "body": "保護者マイページでは、選択した児童の次回利用予定と時間、送迎に関する表示を確認できます。",
      "target_selectors": [
        "#nextScheduleSection",
        "#nextScheduleContent"
      ],
      "fallback": "次回予定が無い場合は空表示をそのまま使って説明します。",
      "navigation": "read-only highlight"
    },
    {
      "step": 5,
      "id": "guardian-shared-activity",
      "role": "guardian_member",
      "route": "member.html?demo=1",
      "title": "共有済みの活動報告を見る",
      "body": "施設が保護者向けに共有済みにした活動報告だけが表示されます。内部の申し送りや個別支援計画の内部記録はここには出ません。",
      "target_selectors": [
        "#activityList",
        ".activity-list"
      ],
      "fallback": "共有済み報告が0件でも、空表示を使って説明します。",
      "navigation": "read-only highlight"
    },
    {
      "step": 6,
      "id": "staff-daily-checks",
      "role": "staff",
      "route": "owner-ipad.html?demo=1",
      "title": "スタッフiPadの児童確認",
      "body": "利用児童と日常確認を一覧で見る画面です。実際の確認ボタンは状態を更新するため、Tutorialは押しません。",
      "target_selectors": [
        "#childrenGrid",
        "#childrenHeading"
      ],
      "fallback": "児童カードが未読込なら「利用児童」見出しだけを案内します。",
      "navigation": "highlight only"
    },
    {
      "step": 7,
      "id": "staff-transport",
      "role": "staff",
      "route": "owner-ipad.html?demo=1",
      "title": "送迎・乗車・引渡しを確認",
      "body": "同じiPadの送迎タブで、送迎便、乗車状況、帰宅時の引渡しを確認します。状態変更や引渡し記録はTutorialでは実行しません。",
      "target_selectors": [
        "#view-transport",
        "button[data-tab='transport']"
      ],
      "fallback": "送迎タブ内容が未表示なら、下部メニューの「送迎」位置を説明します。",
      "navigation": "Tutorial may instruct user to open tab manually in future R3; no synthetic click"
    },
    {
      "step": 8,
      "id": "staff-activity-photo",
      "role": "staff",
      "route": "owner-ipad.html?demo=1",
      "title": "活動記録と写真の場所",
      "body": "5領域付き活動記録とprivate児童写真の入口です。Tutorialは記録保存・カメラ起動・写真アップロードを一切実行しません。",
      "target_selectors": [
        "#view-activity",
        "#activityChildList"
      ],
      "fallback": "活動一覧が未読込なら「活動記録・写真」見出しを説明します。",
      "navigation": "highlight only"
    },
    {
      "step": 9,
      "id": "owner-plan-due",
      "role": "owner_admin",
      "route": "owner.html?demo=1",
      "title": "支援計画・モニタリング期限を確認",
      "body": "管理PCでは支援計画期限を一覧で確認できます。Tutorialは期限や記録を変更せず、確認場所だけを案内します。",
      "target_selectors": [
        "button[data-view='plans']",
        "[data-content='plans']",
        "#planList"
      ],
      "fallback": "一覧が未読込なら左メニューの「支援計画期限」を案内します。",
      "navigation": "no auto mutation; manual view change allowed by user"
    },
    {
      "step": 10,
      "id": "public-five-domains",
      "role": "public_demo",
      "route": "support-program.html?demo=1",
      "title": "公開される5領域を確認",
      "body": "公開支援プログラムでは、健康・生活、運動・感覚、認知・行動、言語・コミュニケーション、人間関係・社会性を対外向けに確認できます。",
      "target_selectors": [
        ".five-domain-grid",
        ".domain-card"
      ],
      "fallback": "5領域ブロックが未取得なら公開ページのHeroを基準に説明します。",
      "navigation": "read-only public page"
    }
  ],
  "guide_center": {
    "categories": [
      {
        "id": "guardian",
        "title": "保護者向け",
        "articles": [
          "施設への連絡方法",
          "利用予定の見方",
          "送迎状況の見方",
          "活動報告の見方",
          "お知らせの見方"
        ]
      },
      {
        "id": "staff_daily",
        "title": "スタッフ日常業務",
        "articles": [
          "ログインと権限",
          "児童確認",
          "日常確認の意味",
          "送迎画面の見方",
          "活動・写真画面の安全境界"
        ]
      },
      {
        "id": "owner_ops",
        "title": "管理PC",
        "articles": [
          "今日の運用",
          "保護者連絡",
          "利用予定",
          "送迎管理",
          "活動記録",
          "児童・保護者検索",
          "支援計画期限"
        ]
      },
      {
        "id": "public_program",
        "title": "支援プログラム公開",
        "articles": [
          "5領域とは",
          "公開画面の確認",
          "公開情報と内部記録の違い"
        ]
      },
      {
        "id": "safety",
        "title": "安全・個人情報",
        "articles": [
          "Tutorialが押さない操作",
          "写真と個人情報",
          "実データを教材へ複製しない",
          "診断・内部画面を公開しない"
        ]
      }
    ]
  },
  "global_safety": {
    "never_execute": [
      "create",
      "update",
      "delete",
      "send",
      "save",
      "confirm",
      "approve",
      "publish",
      "upload",
      "change status",
      "record handover"
    ],
    "demo_labels_only": [
      "デモ児童A",
      "保護者A",
      "スタッフA"
    ],
    "privacy_copy": "実在する児童・家族の情報、写真、職員資格情報、内部情報をTutorial教材へ複製しません。"
  }
};
