# 🏋️ FitMonk - Modern Fitness Tracking Website

![FitMonk](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80)

A premium, responsive fitness tracking website built with **Next.js 13**, **TypeScript**, and **React Bootstrap**. Features a modern UI with glassmorphism effects, gradient designs, and smooth animations.

## ✨ Features

### 🏠 **Home Page**
- Animated hero section with gradient backgrounds
- Feature highlights with glass cards
- Premium testimonials and statistics
- Call-to-action sections

### 📊 **User Dashboard**
- Track steps, calories, and workouts
- Interactive progress charts with Chart.js
- Quick action cards
- Recent activity timeline

### 💪 **Workout Plans**
- 6+ pre-designed workout programs
- Filter by difficulty level (Beginner, Intermediate, Advanced)
- **Quick Workouts** section for time-efficient training
- **Workout by Muscle Group** - Chest, Back, Legs, Arms, Shoulders, Core
- Each muscle group includes 5-6 targeted exercises with sets/reps

### 🥗 **Nutrition Tips**
- Expert diet recommendations
- Categories: General, Weight Loss, Muscle Gain, Recovery, **Vegetarian**
- 12 comprehensive nutrition articles
- Plant-based protein, iron-rich foods, and complete meal plans

### 🔐 **Authentication**
- Modern login/signup UI with icon inputs
- Glass card design with animated background
- Form validation

### 📞 **Contact Page**
- Contact info cards (Email, Phone, Address)
- Social media links
- Contact form with validation

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 13** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **React Bootstrap** | UI component library |
| **Chart.js** | Interactive charts and graphs |
| **React Icons** | Beautiful icon library |
| **CSS3** | Custom animations & glassmorphism |

## 🎨 Design Features

- 🌈 **Gradient Color Palette** - Vibrant lime-to-emerald and purple-pink gradients
- 🔮 **Glassmorphism Effects** - Frosted glass cards with backdrop blur
- ⚡ **Micro-animations** - Fade-in, slide-up, float, and pulse effects
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Modern Typography** - Clean Inter font family

## 🚀 Getting Started

### Prerequisites
- Node.js 14.0 or later
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohitpatel1904/fitmonk.git
   cd fitmonk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fitmonk/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HomeHero.tsx
│   │   └── workout/
│   │       └── WorkoutPlanCard.tsx
│   ├── pages/          # Next.js pages
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   ├── workout-plans.tsx
│   │   ├── nutrition.tsx
│   │   ├── contact.tsx
│   │   └── login.tsx
│   ├── data/           # Mock data
│   │   ├── workoutPlans.ts
│   │   └── nutritionTips.ts
│   └── styles/
│       └── globals.css
└── public/             # Static assets
```

## 📍 Contact

**FitMonk Fitness**

📧 Email: support@fitmonk.com  
📞 Phone: +91 78748 38889  
📍 Address: Shilp Epitome, Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat 380059, India

## 📸 Screenshots

| Home Page | Workout Plans | Nutrition Tips |
|-----------|---------------|----------------|
| Modern hero with animations | Filter by level | Vegetarian section |
| Glass effect cards | Muscle group exercises | Category badges |

## 🔮 Future Enhancements

- [ ] Backend integration with Node.js/Express
- [ ] User authentication with JWT
- [ ] Real workout tracking with database
- [ ] Mobile app with React Native
- [ ] AI-powered workout recommendations

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ for fitness enthusiasts
</p>