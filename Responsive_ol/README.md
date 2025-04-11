# Responsive Ordered List Project / 响应式有序列表项目

<div style="text-align: right; margin-bottom: 20px;">
  <button onclick="toggleLanguage()" style="padding: 5px 10px; cursor: pointer;">切换语言 / Toggle Language</button>
</div>

<div id="en-content" style="display: block;">
## Project Overview

This is a responsive ordered list project built with HTML5 and CSS3. The project showcases some powerful but less commonly used CSS features, including CSS variables, counters, pseudo-elements, and gradients.

## Technical Features

### CSS Variables (Custom Properties)

- Using `:root` to define global CSS variables
- Defining custom properties with `--` prefix
- Referencing variables using `var()` function
- Variable scoping and inheritance features

### Counters

- Using `counter-reset` to initialize counters
- Using `counter-increment` to increment counts
- Displaying counts with `counter()` function
- Applying counters in pseudo-elements

### Pseudo-elements

- Application of `::before` pseudo-element
- Creating progress bars with pseudo-elements
- Creating numbered circles with pseudo-elements
- Positioning and styling pseudo-elements

### Gradients

- Creating linear gradients with `linear-gradient`
- Dynamic calculation of gradient stop points
- Controlling gradient colors with CSS variables
- Responsive gradient effects

### Responsive Design

- Implementing responsive layout with `@media` queries
- Style adjustments based on viewport width
- Layout optimization for mobile and desktop

## Implementation Highlights

1. **Dynamic Color Calculation**

   - Using HSL color mode
   - Dynamic hue calculation based on list item index
   - Controlling lightness and saturation through CSS variables
2. **Progress Bar Effect**

   - Creating progress bars with pseudo-elements
   - Dynamic calculation of progress bar length
   - Smooth gradient transition effects
3. **Numbered Circle Design**

   - Creating numbered circles with pseudo-elements
   - Automatic numbering with counters
   - Responsive size adjustments
4. **Layout Optimization**

   - Using `box-sizing: border-box`
   - Flexible spacing and margin settings
   - Centered list items

## Learning Points

1. **CSS Variable System**

   - Understanding CSS variable scoping
   - Mastering variable definition and usage
   - Learning variable applications in responsive design
2. **Counter Mechanism**

   - Understanding CSS counter principles
   - Mastering counter initialization and usage
   - Learning counter applications in complex layouts
3. **Pseudo-element Techniques**

   - Deep understanding of pseudo-element concepts
   - Mastering pseudo-element positioning
   - Learning to create decorative elements with pseudo-elements
4. **Responsive Design Principles**

   - Understanding media query use cases
   - Mastering responsive layout implementation
   - Learning mobile-first design principles

## How to Run

1. Clone the repository
2. Open `index.html` in a web browser
3. Adjust browser window size to observe responsive effects

## Project Learnings

Through this project, I learned:

- Advanced usage and practical applications of CSS variables
- Principles and implementation methods of counters
- Creative applications of pseudo-elements in UI design
- Basic principles and implementation techniques of responsive design
- Flexible usage of CSS gradients and color calculations
- Comprehensive applications of modern CSS layout techniques

</div>

<div id="zh-content" style="display: none;">
## 项目概述

这是一个使用 HTML5 和 CSS3 构建的响应式有序列表项目。项目重点展示了 CSS 中一些不常用但强大的特性，包括 CSS 变量、计数器、伪元素和渐变等高级技巧。

## 技术特点

### CSS 变量（Custom Properties）

- 使用 `:root`定义全局 CSS 变量
- 通过 `--`前缀定义自定义属性
- 使用 `var()`函数引用变量
- 变量作用域和继承特性

### 计数器（Counter）

- 使用 `counter-reset`初始化计数器
- 使用 `counter-increment`增加计数
- 通过 `counter()`函数显示计数
- 在伪元素中应用计数器

### 伪元素（Pseudo-elements）

- `::before`伪元素的应用
- 使用伪元素创建进度条
- 使用伪元素创建序号圆圈
- 伪元素的定位和样式控制

### 渐变（Gradient）

- 使用 `linear-gradient`创建线性渐变
- 动态计算渐变停止点
- 使用 CSS 变量控制渐变颜色
- 响应式渐变效果

### 响应式设计

- 使用 `@media`查询实现响应式布局
- 基于视口宽度的样式调整
- 移动端和桌面端的布局优化

## 实现亮点

1. **动态颜色计算**

   - 使用 HSL 颜色模式
   - 基于列表项索引动态计算色相
   - 通过 CSS 变量控制亮度和饱和度
2. **进度条效果**

   - 使用伪元素创建进度条
   - 动态计算进度条长度
   - 平滑的渐变过渡效果
3. **序号圆圈设计**

   - 使用伪元素创建序号圆圈
   - 计数器自动编号
   - 响应式大小调整
4. **布局优化**

   - 使用 `box-sizing: border-box`
   - 灵活的间距和边距设置
   - 居中对齐的列表项

## 学习要点

1. **CSS 变量系统**

   - 理解 CSS 变量的作用域
   - 掌握变量的定义和使用方法
   - 学习变量在响应式设计中的应用
2. **计数器机制**

   - 理解 CSS 计数器的原理
   - 掌握计数器的初始化和使用
   - 学习在复杂布局中应用计数器
3. **伪元素技巧**

   - 深入理解伪元素的概念
   - 掌握伪元素的定位方法
   - 学习使用伪元素创建装饰性元素
4. **响应式设计原则**

   - 理解媒体查询的使用场景
   - 掌握响应式布局的实现方法
   - 学习移动优先的设计理念

## 如何运行

1. 克隆仓库
2. 在浏览器中打开 `index.html`
3. 调整浏览器窗口大小，观察响应式效果

## 项目收获

通过这个项目，我学到了：

- CSS 变量的高级用法和实际应用
- 计数器的原理和实现方法
- 伪元素在 UI 设计中的创造性应用
- 响应式设计的基本原理和实现技巧
- CSS 渐变和颜色计算的灵活运用
- 现代 CSS 布局技术的综合应用

</div>

<script>
function toggleLanguage() {
  const enContent = document.getElementById('en-content');
  const zhContent = document.getElementById('zh-content');
  
  if (enContent.style.display === 'block') {
    enContent.style.display = 'none';
    zhContent.style.display = 'block';
  } else {
    enContent.style.display = 'block';
    zhContent.style.display = 'none';
  }
}
</script>

<style>
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
