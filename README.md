# AQ-50 Autism Spectrum Quotient Test (Self-Assessment)

> **EN / VI** — Mục đích: công cụ *tự sàng lọc* dựa trên bài AQ-50. Không thay thế chẩn đoán y khoa.

---

## English

### What is this?
**AQ-50** is a self-assessment screening questionnaire based on the **Autism-Spectrum Quotient (AQ)** framework developed by **Simon Baron-Cohen and colleagues**.  
This project is a **single-page web app** that lets you answer 50 statements, then displays:
- total AQ-50 score
- domain breakdown (5 domains)
- subscale bars
- a radar chart visualization

### Features
- **50-question flow** with progress tracking and question navigation
- **5 domains** scoring visualization:
  - Social Skills
  - Attention Switching
  - Attention to Detail
  - Communication
  - Imagination
- **Charts & UI**:
  - SVG score ring (animated)
  - Radar chart (Canvas)
  - Subscale bars
- **Bilingual UI**: **EN / VI**
- **Progress persistence** via `localStorage` (answers + current question index)
- **Accessibility-aware styling** (focus states, reduced-motion support)

### How scoring works (high level)
- Each question is answered with one of **4 options**:
  1) Definitely Agree  
  2) Slightly Agree  
  3) Slightly Disagree  
  4) Definitely Disagree
- The app assigns **1 point** to answers aligned with the scoring direction for each item (agree-items vs disagree-items).
- Total score ranges from **0 to 50** and is mapped into interpretation bands (Low → Clinically Significant).

### Disclaimer (please read)
⚠️ **This is a screening tool only—NOT a clinical diagnosis.**  
A high score does **not** mean you have autism. Only a qualified professional can make that determination.  
If you’re experiencing distress or impairment, consider seeking support from a licensed clinician.

### Project reference
Baron-Cohen, S., Wheelwright, S., Skinner, R., Martin, J., &amp; Clubley, E. (2001).  
**The Autism-Spectrum Quotient (AQ): Evidence from Asperger Syndrome/High-Functioning Autism, Males and Females, Scientists and Mathematicians.**  
*Journal of Autism and Developmental Disorders, 31*, 5–17.

### Tech stack
- **HTML / CSS / Vanilla JavaScript**
- **Inter** font (Google Fonts)
- Deploy configuration: `render.yaml` (static web service)

### Run locally
Just open the project in a browser:
- Open `index.html` directly, **or**
- Serve it with any static server (recommended for best practices).

Example (if you have Python):
```bash
python -m http.server 8080
```
Then open: `http://localhost:8080`

### Deployment
This repo includes a Render configuration (`render.yaml`) to deploy as **static** content:
- `staticPublishPath: .`
- no build step needed (`buildCommand: echo "No build needed"`)

Public link:
https://aq50-autism-test.onrender.com/

---

## Tiếng Việt

### Truy cập công khai
https://aq50-autism-test.onrender.com/

### Dự án này là gì?
**AQ-50** là bảng câu hỏi **tự sàng lọc** dựa trên **Autism-Spectrum Quotient (AQ)** do **Simon Baron-Cohen** và các cộng sự phát triển.  
Đây là một web app dạng **single-page** cho phép bạn trả lời **50 câu**, sau đó hiển thị:
- tổng điểm AQ-50
- phân tích theo **5 lĩnh vực (domains)**
- thanh điểm chi tiết (subscale bars)
- biểu đồ radar minh hoạ trực quan

### Tính năng nổi bật
- Luồng làm bài **50 câu** có:
  - hiển thị tiến độ
  - điều hướng qua các câu hỏi
- Hiển thị điểm theo **5 domains**:
  - Kỹ năng xã hội
  - Chuyển đổi chú ý
  - Chú ý vào chi tiết
  - Giao tiếp
  - Trí tưởng tượng
- UI & biểu đồ:
  - Vòng điểm SVG (hiệu ứng)
  - Radar chart (Canvas)
  - Subscale bars
- Giao diện song ngữ: **EN / VI**
- Lưu tiến trình bằng `localStorage` (lưu đáp án + chỉ số câu đang làm)
- Hỗ trợ phong cách quan tâm đến accessibility (focus styles, hỗ trợ reduced-motion)

### Cách tính điểm (tổng quan)
- Mỗi câu chọn 1 trong **4 mức**:
  1) Hoàn toàn đồng ý  
  2) Hơi đồng ý  
  3) Hơi không đồng ý  
  4) Hoàn toàn không đồng ý
- Ứng dụng chấm **1 điểm** cho đáp án phù hợp với hướng chấm của từng câu (nhóm Agree vs nhóm Disagree).
- Tổng điểm từ **0 đến 50**, sau đó được phân loại theo các mức diễn giải (Low → Clinically Significant).

### Lưu ý quan trọng (khuyến nghị đọc)
⚠️ Đây **chỉ là công cụ sàng lọc** — **KHÔNG phải chẩn đoán lâm sàng**.  
Điểm cao **không có nghĩa** bạn mắc tự kỷ. Chỉ có chuyên gia/nhà lâm sàng có đủ chuyên môn mới đưa ra kết luận.  
Nếu bạn đang gặp khó khăn/đang bị ảnh hưởng, hãy cân nhắc tìm kiếm sự hỗ trợ từ **bác sĩ/chuyên gia được cấp phép**.

### Tài liệu tham khảo
Baron-Cohen, S., Wheelwright, S., Skinner, R., Martin, J., &amp; Clubley, E. (2001).  
**The Autism-Spectrum Quotient (AQ): Evidence from Asperger Syndrome/High-Functioning Autism, Males and Females, Scientists and Mathematicians.**  
*Journal of Autism and Developmental Disorders, 31*, 5–17.

### Công nghệ sử dụng
- **HTML / CSS / Vanilla JavaScript**
- **Inter** (Google Fonts)
- Cấu hình triển khai: `render.yaml` (static web service)

### Chạy cục bộ
Bạn có thể mở trực tiếp:
- Mở `index.html` bằng trình duyệt, **hoặc**
- Dùng bất kỳ static server nào (khuyến nghị).

Ví dụ (Python):
```bash
python -m http.server 8080
```
Mở: `http://localhost:8080`

### Deploy
File `render.yaml` thiết lập deploy dưới dạng **static**:
- `staticPublishPath: .`
- không cần build (`buildCommand: echo "No build needed"`)

---

## Credits
- UI text + scoring logic implemented in `app.js`
- Styling in `style.css`
- Single-page layout in `index.html`
