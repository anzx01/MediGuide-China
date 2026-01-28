# MediGuide China

## 3 周极限 MVP PRD（情境型就医导航器）

---

## 一、产品一句话定义（MVP版）

**MediGuide China 是一个：**

> 帮助外国人在中国医院里， **在每一个当下，清楚知道「下一步该做什么」的情境型就医导航工具** 。

不是百科，不是平台，不做医疗判断。

---

## 二、MVP 成功判定标准（非常重要）

3 周后，这个 MVP 只需要回答 3 个问题：

1. 用户在真实医院场景中，**是否真的打开并使用？**
2. 用户是否能 **顺利完成一次完整就医流程** （至少国际部门诊）？
3. 用户是否产生一句真实反馈：
   > “If I didn’t have this, I would be totally lost.”
   >

只要这 3 条成立，MVP 成功。

---

## 三、目标用户（MVP 严格限定）

* 人群：
  * 在中国一线城市的外国人
  * 英语为主要使用语言
* 场景：
  * **非急诊** ，但需要尽快看医生
  * 首次或少次在中国公立医院就医

---

## 四、核心产品结构（只保留 3 个模块）

### 模块 1：情境入口（唯一首页）

首页不展示城市、不展示医院列表。

**首页只展示 4 个大按钮：**

1. 🏥 I need to see a doctor (Not urgent)
2. 🚑 Emergency / I feel really unwell
3. 💊 I already saw a doctor, what next?
4. ❓ I’m confused inside the hospital

> MVP 阶段：
>
> * 只完整实现 **按钮 1**
> * 按钮 2 / 3 / 4 仅做静态引导页或提示页

---

### 模块 2：医院推荐（强约束版）

当用户点击：

> I need to see a doctor (Not urgent)

系统进入极简决策流：

1. 你在哪个城市？（MVP：北京 / 上海 二选一）
2. 是否需要英文服务？（默认 Yes，不可关闭）

**输出结果：**

* 推荐 **2–3 家“当前最合适”的医院**
* 每家医院仅展示：
  * 医院名称（中 / 英）
  * 标签：International Dept / English-friendly
  * 一个按钮：👉 Start my visit

> ❌ 不提供医院大全
> ❌ 不提供筛选器

---

### 模块 3：核心功能 —— 实时就医流程导航（MVP 灵魂）

#### 3.1 流程总览（进度型）

进入某家医院后，用户看到：

**Your hospital visit progress**

* ⏳ Appointment / Walk-in
* ⏳ Arrival & Registration
* ⏳ Waiting & Consultation
* ⏳ Payment / Tests / Pharmacy
* ⏳ Done
* 默认只展开 **当前步骤**
* 已完成步骤自动打勾

---

#### 3.2 单步结构（统一模板）

每一个 Step 页面  **严格固定为 4 个区块** ：

1. **What to do now** （一句话行动指令）
2. **Where to go** （中文关键词 + 场景说明）
3. **What to say** （可点亮的大字中英对照）
4. **What happens next** （降低不确定性）

---

#### 3.3 示例：Arrival & Registration

**What to do now**
Go to the International Medical Department front desk.

**Where to go**

* Look for signs: 「国际医疗部」 / 「特需门诊」
* Usually a separate building or floor

 **What to say** （按钮卡片）

> Hello, I want to register for an appointment.

**What happens next**

* You will pay the registration fee
* You will receive a paper slip
* Then you wait for your number

---

## 五、沟通能力设计（MVP 极简版）

❌ 不做独立「沟通工具箱」

✅ 沟通能力 **只嵌入在 Step 中**

MVP 只支持：

* 每个 Step 1–2 句“必说话术”
* 点击即可全屏放大
* 支持中文 + 英文

---

## 六、内容范围（MVP 严格限制）

### 城市

* 北京、上海（任选其一也可）

### 医院

* 每城市 **2 家公立医院国际部**

### 就医类型

* 国际部 / 特需门诊
* 普通门诊、儿科、急诊 **全部不覆盖**

---

## 七、非功能与合规（最低必需）

* 启动页明确声明：
  > This app does NOT provide medical advice.
  >
* 不收集、不存储任何健康数据
* 收藏 / 进度信息仅本地保存

---

## 八、3 周执行拆解（给你一个现实节奏）

### 第 1 周：

* 明确 1 个城市 + 2 家医院
* 人工梳理  **完整真实就医流程** （一次就够）
* 写完所有 Step 文案（英文优先）

### 第 2 周：

* 完成核心页面：
  * 情境首页
  * 医院页
  * Step 导航页
* 跑通完整流程（哪怕 UI 很丑）

### 第 3 周：

* 找 2–3 个真实外国人试用
* 在医院或模拟场景中测试
* 记录卡点、迷惑点

---

## 九、MVP 之后才考虑的事（现在全部不做）

* 医院评价体系
* 用户共创流程
* 保险 / 支付 API
* 多语言扩展
* AI 症状分析

---

## 十、最后一句给你（产品真话）

> 这个 MVP 的目标不是“做得多好看”，
> 而是：
> **在一个真实的中国医院里，被真实地需要过一次。**

如果它能救一次慌，
它就值得继续做下去。
