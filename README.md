# Hemidi Animated SEO Landing Page

## 1. Tổng quan dự án

Đây là một landing page SEO responsive được xây dựng dựa trên thiết kế Figma được cung cấp, sử dụng **Next.js, TypeScript, Three.js, React Three Fiber và GSAP**.

Landing page giới thiệu dịch vụ SEO với phong cách thiết kế editorial tối giản, kết hợp các thành phần 3D tương tác.

### Các tính năng chính

- Landing page responsive được xây dựng dựa trên thiết kế Figma.
- Rocket 3D tương tác trong phần Hero.
- Có thể kéo chuột để xoay rocket trong phần Hero.
- Animation rocket 3D theo thao tác cuộn trang trong phần Features sử dụng **GSAP ScrollTrigger**.
- Các component React được thiết kế có khả năng tái sử dụng cho các section và UI elements.
- Tối ưu rendering 3D nhằm mang lại trải nghiệm tương tác mượt mà và thời gian tải nhanh.
- Sẵn sàng triển khai production trên Vercel.

### Công nghệ sử dụng

- Next.js
- TypeScript
- Three.js
- React Three Fiber
- @react-three/drei
- GSAP + ScrollTrigger
- CSS

---

## 2. 3D Asset

### Nguồn

Model 3D được sử dụng trong project là **Stylized Low Poly Rocket 3D Model** từ Sketchfab:

https://sketchfab.com/3d-models/stylized-low-poly-rocket-3d-model-6664d4ff21264e9fabd6fe7baf2c511f

Asset gốc được tạo bởi **Rolikey** và được phát hành dưới giấy phép **Creative Commons Attribution (CC Attribution)**.

Model được lưu local trong project tại:

`public/models/stylized_low_poly_rocket_3d_model.glb`

### Lý do lựa chọn asset

Rocket được lựa chọn như một hình ảnh ẩn dụ cho thông điệp chính của landing page: **"boost your rankings."**

Rocket đại diện cho sự tăng trưởng, tăng tốc và tiến bộ, phù hợp với chủ đề SEO/productivity của landing page.

Phong cách low-poly của model cũng phù hợp với thiết kế editorial tối giản, đồng thời giúp việc rendering 3D trở nên nhẹ hơn.

Model đặc biệt phù hợp với project vì geometry tương đối đơn giản, cho phép triển khai các animation tương tác theo chuột và scroll mà không tạo thêm chi phí rendering không cần thiết.

### Thông số asset

- Meshes: 5
- Triangles: khoảng 1.302
- Materials: 5
- Textures: 0

Model không sử dụng texture image, giúp giảm số lượng tài nguyên cần tải và hạn chế mức sử dụng bộ nhớ.

---

## 3. Các kỹ thuật tối ưu 3D

Các kỹ thuật sau được sử dụng nhằm giảm chi phí rendering 3D và cải thiện hiệu năng của trang:

### Geometry nhẹ

Rocket được sử dụng là một model low-poly với khoảng **1.302 triangles**, giúp giảm số lượng vertex mà GPU cần xử lý.

### Không sử dụng External Textures

Model sử dụng materials mà không cần texture image. Điều này giúp tránh các request tải texture bổ sung và giảm mức sử dụng bộ nhớ.

### Định dạng GLB

Model được lưu dưới dạng một file `.glb`, đóng gói scene data cần thiết vào một binary asset duy nhất, giúp tránh việc phải tải model, material hoặc texture từ nhiều file riêng biệt.

### Device Pixel Ratio

Các React Three Fiber canvas sử dụng:

`dpr={[1, 1]}`

Điều này giúp tránh việc rendering canvas ở pixel density quá cao trên các thiết bị có màn hình độ phân giải cao.

### Demand-Based Rendering

Cả hai 3D scene đều sử dụng:

`frameloop="demand"`

Renderer chỉ thực hiện render khi scene có thay đổi về mặt hình ảnh, thay vì liên tục render từng frame ngay cả khi scene đang ở trạng thái idle.

### Throttled Pointer Updates

Tương tác kéo rocket trong Hero sử dụng `requestAnimationFrame` để yêu cầu rendering, giúp hạn chế việc invalidate renderer quá thường xuyên khi pointer di chuyển nhanh.

### On-Demand Scroll Rendering

Feature section sử dụng GSAP ScrollTrigger để cập nhật trạng thái của rocket trong quá trình scroll và chỉ invalidate R3F renderer khi animation thực sự thay đổi.

### Asset Preloading

Rocket model được preload bằng `useGLTF.preload()`, cho phép asset bắt đầu được tải trước khi scene cần sử dụng model.

### Suspense-Based Loading

3D model được load bên trong React `Suspense`, giúp quá trình loading 3D được tách biệt với phần còn lại của page.

---

## 4. Hiệu năng

Project được kiểm thử bằng production build:

```bash
pnpm build
pnpm start
```

## Performance Results

| Test Scenario              |         FPS |
| -------------------------- | ----------: |
| Normal webpage interaction | 50 - 60 FPS |
| Drag 3D Hero               |     ~30 FPS |
| Scroll 3D Feature section  |     ~90 FPS |

Trong quá trình kiểm thử local production build, project đạt **96 Performance score trên Google PageSpeed Insights – Desktop**.

Các section 3D được kiểm tra trong các tình huống tương tác chính, bao gồm **drag ở Hero section** và **scroll qua 3D Feature section**, nhằm đảm bảo animation và interaction duy trì độ mượt trong quá trình sử dụng.

> **Note:** FPS được đo trong môi trường local và có thể thay đổi tùy thuộc vào thiết bị, GPU, trình duyệt và các tác vụ đang chạy trên hệ thống. Kết quả PageSpeed Insights cũng có thể thay đổi tùy thuộc vào điều kiện mạng, thời gian phản hồi của server và môi trường kiểm thử. Vì vậy, performance nên được kiểm tra lại trên URL Vercel đã deploy để có kết quả thực tế hơn.

---

## 5. Chạy project

Cài đặt dependencies:

```bash
pnpm install
```

Chạy development server:

```bash
pnpm dev
```

Tạo production build:

```bash
pnpm build
```

Chạy production build local:

```bash
pnpm start
```

Sau đó mở local URL được Next.js cung cấp trong terminal.

---

## 6. Cấu trúc project

```text
components/

├── 3d/
│   ├── Feature3D.tsx
│   ├── Hero3D.tsx
│   └── RocketModel.tsx

├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx

├── sections/
│   ├── BrandSection.tsx
│   ├── CTASection.tsx
│   ├── FAQSection.tsx
│   ├── FeaturesSection.tsx
│   ├── HeroSection.tsx
│   ├── QualitiesSection.tsx
│   ├── TeamSection.tsx
│   └── VisibilitySection.tsx

└── ui/
    ├── Button.tsx
    ├── FAQItem.tsx
    ├── FeatureCard.tsx
    ├── HighlightText.tsx
    ├── QualityItem.tsx
    ├── SectionHeading.tsx
    ├── StarRating.tsx
    ├── StatItem.tsx
    └── TeamMember.tsx

public/
├── assets/
│   ├── airbnb.svg
│   ├── avatar.png
│   ├── Esther Howard.png
│   ├── google.svg
│   ├── logo.png
│   ├── microsoft.svg
│   ├── ola.svg
│   ├── Savannah Nguyen.png
│   └── walmart.svg
└── models/
    └── stylized_low_poly_rocket_3d_model.glb
```
